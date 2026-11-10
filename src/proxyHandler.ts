import type { IncomingMessage, ServerResponse } from 'http';

const UPSTREAM_ORIGIN = 'https://yestayhomes.com';

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

/** Proxy 100% of requests directly to the raw upstream stream from yestayhomes.com */
export function shouldProxyRequest(_pathname: string): boolean {
  return true;
}

function sanitizePath(rawPath: string): string {
  let p = rawPath.trim();
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}

export async function handleProxyRequest(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
): Promise<void> {
  const urlObj = new URL(req.url || '/', 'http://localhost:3000');
  const pathname = urlObj.pathname;

  // Let internal Vite dev files pass through if explicitly requested
  if (
    pathname.startsWith('/@') ||
    pathname.startsWith('/node_modules/') ||
    pathname === '/favicon.ico'
  ) {
    return next();
  }

  // Intercept any local cookiehub asset requests with safe stub
  if (pathname.toLowerCase().includes('cookiehub') || pathname.endsWith('1507d1d2.js')) {
    res.writeHead(200, {
      'content-type': 'application/javascript; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=86400',
    });
    res.end('window.cookiehub={load:function(){},hasConsented:function(){return true;}};');
    return;
  }

  // 1. Health & Inspection API
  if (pathname === '/api/proxy/inspect') {
    const targetPath = urlObj.searchParams.get('path') || '/';
    const targetUrl = UPSTREAM_ORIGIN + sanitizePath(targetPath);
    const start = Date.now();

    try {
      const upstreamRes = await fetch(targetUrl, {
        method: req.method || 'GET',
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      });
      const latencyMs = Date.now() - start;
      const rawHeaders: Record<string, string> = {};
      upstreamRes.headers.forEach((val, key) => {
        rawHeaders[key] = val;
      });

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(
        JSON.stringify({
          success: true,
          targetUrl,
          statusCode: upstreamRes.status,
          statusText: upstreamRes.statusText,
          latencyMs,
          upstream: UPSTREAM_ORIGIN,
          headers: rawHeaders,
          strippedHeaders: [
            'x-frame-options',
            'content-security-policy',
            'content-security-policy-report-only',
          ],
          timestamp: new Date().toISOString(),
        })
      );
      return;
    } catch (err: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          success: false,
          error: err?.message || 'Failed to inspect upstream proxy',
        })
      );
      return;
    }
  }

  // 2. Determine target path for proxying
  let targetPath = pathname + urlObj.search;
  if (pathname === '/proxy-raw') {
    targetPath = urlObj.searchParams.get('path') || '/';
  }

  const targetUrl = UPSTREAM_ORIGIN + sanitizePath(targetPath);

  // 3. Static Assets Passthrough (/sites/*, /themes/*, /modules/*, /core/*, /cdn-cgi/*)
  const isAsset =
    pathname.startsWith('/sites/') ||
    pathname.startsWith('/themes/') ||
    pathname.startsWith('/modules/') ||
    pathname.startsWith('/core/') ||
    pathname.startsWith('/cdn-cgi/');

  if (isAsset) {
    try {
      const assetRes = await fetch(targetUrl, {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': '*/*',
        },
      });

      const forwardHeaders: Record<string, string> = {
        'access-control-allow-origin': '*',
        'cache-control': 'public, max-age=86400',
      };
      const ct = assetRes.headers.get('content-type');
      if (ct) forwardHeaders['content-type'] = ct;

      const buffer = Buffer.from(await assetRes.arrayBuffer());
      res.writeHead(assetRes.status, forwardHeaders);
      res.end(buffer);
      return;
    } catch {
      res.writeHead(404);
      res.end('Asset not found');
      return;
    }
  }

  // 4. Default: Proxy HTML / Pages directly!
  try {
    const upstreamRes = await fetch(targetUrl, {
      method: req.method || 'GET',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
      },
    });

    const contentType = upstreamRes.headers.get('content-type') || 'text/html';

    // Permissive CORS and embedding headers
    const forwardHeaders: Record<string, string> = {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD',
      'access-control-allow-headers': '*',
      'access-control-expose-headers': '*',
      'content-type': contentType,
    };

    // Strip security, framing, and restrictive headers from upstream
    const blockedHeaders = new Set([
      'x-frame-options',
      'content-security-policy',
      'content-security-policy-report-only',
      'strict-transport-security',
      'cross-origin-embedder-policy',
      'cross-origin-opener-policy',
      'cross-origin-resource-policy',
      'permissions-policy',
      'feature-policy',
      'transfer-encoding',
      'content-encoding',
      'content-length',
      'cache-control',
      'etag',
      'last-modified',
      'expires',
    ]);

    upstreamRes.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase();
      if (!blockedHeaders.has(lowerKey)) {
        forwardHeaders[lowerKey] = value;
      }
    });

    if (contentType.includes('text/html')) {
      forwardHeaders['cache-control'] = 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0';
      forwardHeaders['pragma'] = 'no-cache';
      forwardHeaders['expires'] = '0';
      forwardHeaders['clear-site-data'] = '"cache"';

      let html = await upstreamRes.text();

      // Fix Cloudflare challenge iframe parent access
      html = html.replace(/window\.parent\.location/g, 'window.location');

      // 1. Specifically target CookieHub script block and inline loaders
      html = html.replace(/<script[^>]*src=["'][^"']*cookiehub[^"']*["'][^>]*><\/script>/gi, '');
      html = html.replace(/<script[^>]*cdn\.cookiehub\.eu[^>]*>[\s\S]*?<\/script>/gi, '');
      html = html.replace(/<script[^>]*>(?:(?!<\/script>)[\s\S])*?cookiehub(?:(?!<\/script>)[\s\S])*?<\/script>/gi, '');

      // 3. Unescape double-escaped HTML entities inside inline <script> blocks that cause JS SyntaxErrors
      html = html.replace(/<script([^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs, content) => {
        if (attrs.includes('type="application/json"') || attrs.includes("type='application/json'")) {
          return match;
        }
        let unescaped = content
          .replace(/&amp;gt;/g, '>')
          .replace(/&amp;lt;/g, '<')
          .replace(/&amp;amp;/g, '&')
          .replace(/&gt;/g, '>')
          .replace(/&lt;/g, '<')
          .replace(/&amp;quot;/g, '"')
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&apos;/g, "'");
        return `<script${attrs}>${unescaped}</script>`;
      });

      // Rewrite absolute upstream links to keep user on proxy domain
      html = html.replace(/https:\/\/yestayhomes\.com\//g, '/');
      html = html.replace(/https:\/\/yestayhomes\.com/g, '/');

      // Head Polyfill: Guarantee window.cookiehub can never be undefined or deleted
      const headPolyfillScript = `
<script>
  (function() {
    var rawStub = {
      load: function(cpm) {},
      hasConsented: function() { return true; },
      openSettings: function() {},
      closeSettings: function() {},
      allowAll: function() {},
      denyAll: function() {},
      on: function() {},
      off: function() {},
      setUserConsent: function() {},
      getUserConsent: function() { return { necessary: true, analytics: true, functional: true, marketing: true }; },
      getConsent: function() { return true; },
      showUI: function() {}
    };

    var hubProxy = (typeof Proxy !== 'undefined') ? new Proxy(rawStub, {
      get: function(target, prop) {
        if (prop in target) return target[prop];
        return function() { return true; };
      }
    }) : rawStub;

    function defineSafeHub(propName) {
      try {
        Object.defineProperty(window, propName, {
          get: function() { return hubProxy; },
          set: function(val) {
            if (val && typeof val === 'object') {
              for (var k in val) { rawStub[k] = val[k]; }
              if (typeof rawStub.load !== 'function') { rawStub.load = function() {}; }
            }
          },
          configurable: false,
          enumerable: true
        });
      } catch(e) {
        window[propName] = hubProxy;
      }
    }

    defineSafeHub('cookiehub');
    defineSafeHub('__cookiehub');

    var prevOnError = window.onerror;
    window.onerror = function(msg, url) {
      if ((typeof msg === 'string' && /cookiehub/i.test(msg)) || (url && typeof url === 'string' && /cookiehub/i.test(url))) {
        return true;
      }
      if (prevOnError) return prevOnError.apply(this, arguments);
      return false;
    };

    window.addEventListener('error', function(e) {
      if (e && ((e.message && /cookiehub/i.test(e.message)) || (e.filename && /cookiehub/i.test(e.filename)))) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        return true;
      }
    }, true);
  })();
</script>
`;

      if (html.includes('<head>')) {
        html = html.replace('<head>', `<head>${headPolyfillScript}`);
      } else if (/<head[^>]*>/i.test(html)) {
        html = html.replace(/<head[^>]*>/i, `$&${headPolyfillScript}`);
      }

      // Inject helper script for form submissions in proxy mode
      const proxyHelperScript = `
<script>
  (function() {
    window.__YESTAY_PROXY_ACTIVE__ = true;
    window.__YESTAY_UPSTREAM__ = "${UPSTREAM_ORIGIN}";

    // Handle form submissions in proxy mode
    document.addEventListener('submit', function(e) {
      var form = e.target;
      if (form && form.action) {
        try {
          var formUrl = new URL(form.action, window.location.href);
          if (formUrl.origin === "${UPSTREAM_ORIGIN}") {
            form.action = formUrl.pathname + formUrl.search;
          }
        } catch(err) {}
      }
    }, true);
  })();
</script>
`;

      if (html.includes('</body>')) {
        html = html.replace('</body>', `${proxyHelperScript}</body>`);
      } else {
        html = html + proxyHelperScript;
      }

      res.writeHead(upstreamRes.status, forwardHeaders);
      res.end(html);
      return;
    } else {
      const arrayBuffer = await upstreamRes.arrayBuffer();
      res.writeHead(upstreamRes.status, forwardHeaders);
      res.end(Buffer.from(arrayBuffer));
      return;
    }
  } catch (err: any) {
    res.writeHead(502, { 'Content-Type': 'text/html' });
    res.end(`
      <div style="font-family:sans-serif;padding:50px;text-align:center;color:#222;background:#0d0d0d;color:#fff;min-height:100vh;">
        <h2 style="color:#d97706;">YESTAY Proxy Gateway</h2>
        <p>Connecting to ${targetUrl}...</p>
        <p style="color:#888;">${err?.message || 'Upstream gateway error'}</p>
        <a href="/" style="display:inline-block;margin-top:20px;padding:10px 20px;background:#d97706;color:#000;font-weight:bold;border-radius:8px;text-decoration:none;">Retry Homepage</a>
      </div>
    `);
    return;
  }
}
