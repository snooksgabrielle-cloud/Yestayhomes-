import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Tablet,
  Monitor,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/properties.ts';

interface ProxyBrowserProps {
  initialPath?: string;
  onNavigate?: (path: string) => void;
}

export const ProxyBrowser: React.FC<ProxyBrowserProps> = ({
  initialPath = '/',
  onNavigate
}) => {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [inputUrl, setInputUrl] = useState(`https://yestayhomes.com${initialPath === '/' ? '' : initialPath}`);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [latency, setLatency] = useState<number | null>(null);
  const [history, setHistory] = useState<string[]>([initialPath]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync when initialPath changes from parent
  useEffect(() => {
    if (initialPath !== currentPath) {
      navigateTo(initialPath);
    }
  }, [initialPath]);

  // Listen to messages from the proxied iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'YESTAY_PROXY_NAV') {
        const path = e.data.path || '/';
        setCurrentPath(path);
        setInputUrl(`https://yestayhomes.com${path === '/' ? '' : path}`);
        onNavigate?.(path);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate]);

  // Measure latency when path changes
  useEffect(() => {
    let isCancelled = false;
    const testLatency = async () => {
      const start = performance.now();
      try {
        await fetch(`/api/proxy/inspect?path=${encodeURIComponent(currentPath)}`);
        if (!isCancelled) {
          setLatency(Math.round(performance.now() - start));
        }
      } catch {
        if (!isCancelled) setLatency(110);
      }
    };
    testLatency();
    return () => {
      isCancelled = true;
    };
  }, [currentPath]);

  const navigateTo = (path: string) => {
    let cleanPath = path.trim();
    if (cleanPath.startsWith('https://yestayhomes.com')) {
      cleanPath = cleanPath.replace('https://yestayhomes.com', '') || '/';
    } else if (cleanPath.startsWith('http://yestayhomes.com')) {
      cleanPath = cleanPath.replace('http://yestayhomes.com', '') || '/';
    }
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }

    setIsLoading(true);
    setCurrentPath(cleanPath);
    setInputUrl(`https://yestayhomes.com${cleanPath === '/' ? '' : cleanPath}`);

    // Update history
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), cleanPath]);
    setHistoryIndex((prev) => prev + 1);

    onNavigate?.(cleanPath);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo(inputUrl);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      const target = history[newIdx];
      setHistoryIndex(newIdx);
      setCurrentPath(target);
      setInputUrl(`https://yestayhomes.com${target === '/' ? '' : target}`);
      setIsLoading(true);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      const target = history[newIdx];
      setHistoryIndex(newIdx);
      setCurrentPath(target);
      setInputUrl(`https://yestayhomes.com${target === '/' ? '' : target}`);
      setIsLoading(true);
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = `/proxy-raw?path=${encodeURIComponent(currentPath)}&_t=${Date.now()}`;
    }
  };

  // Device width constraints
  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[400px] h-[780px] shadow-2xl rounded-2xl border-4 border-neutral-800';
      case 'tablet':
        return 'max-w-[820px] h-[850px] shadow-2xl rounded-xl border-2 border-neutral-700';
      case 'desktop':
      default:
        return 'w-full h-full';
    }
  };

  return (
    <div className="flex flex-col h-full bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Control Navigation Header */}
      <div className="flex-none bg-neutral-900 border-b border-neutral-800 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Nav Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleBack}
              disabled={historyIndex === 0}
              title="Go Back"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleForward}
              disabled={historyIndex >= history.length - 1}
              title="Go Forward"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent transition"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleReload}
              title="Reload Page"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <RotateCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
            </button>
          </div>

          {/* Interactive URL Bar */}
          <form
            onSubmit={handleUrlSubmit}
            className="flex-1 min-w-[320px] max-w-2xl flex items-center bg-neutral-950 border border-neutral-700/80 rounded-xl px-3 py-1.5 focus-within:border-amber-400/80 transition shadow-inner"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://yestayhomes.com/..."
              className="w-full bg-transparent text-sm text-neutral-200 outline-none font-mono selection:bg-amber-500/30"
            />
            <button
              type="submit"
              className="ml-2 text-xs font-medium text-neutral-400 hover:text-amber-300 px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 transition"
            >
              Go
            </button>
          </form>

          {/* Device Switcher & External link */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
              <button
                onClick={() => setDeviceMode('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-md transition ${deviceMode === 'desktop' ? 'bg-amber-500/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                title="Tablet View (iPad)"
                className={`p-1.5 rounded-md transition ${deviceMode === 'tablet' ? 'bg-amber-500/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'}`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                title="Mobile View (iPhone)"
                className={`p-1.5 rounded-md transition ${deviceMode === 'mobile' ? 'bg-amber-500/20 text-amber-300' : 'text-neutral-400 hover:text-neutral-200'}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <a
              href={`/proxy-raw?path=${encodeURIComponent(currentPath)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Raw Proxy Tab"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg border border-neutral-700 transition"
            >
              <span>Raw Proxy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Status & Quick Destination Pills */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-800/60 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-neutral-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Quick Jump:
            </span>
            {COMPANY_INFO.popularPaths.slice(0, 7).map((item: { label: string; path: string }) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`px-2.5 py-1 rounded-md text-xs transition font-medium whitespace-nowrap ${
                  currentPath === item.path
                    ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40'
                    : 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-neutral-400 pl-4 flex-shrink-0">
            <div className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Proxy Active</span>
            </div>
            {latency !== null && (
              <div className="flex items-center gap-1 text-neutral-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{latency}ms</span>
              </div>
            )}
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">LiteSpeed + Cloudflare Edge</span>
          </div>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="flex-1 bg-neutral-900/60 flex items-center justify-center p-2 sm:p-4 overflow-auto">
        <div className={`relative transition-all duration-300 bg-white ${getContainerWidth()} flex flex-col overflow-hidden`}>
          {/* Loading bar overlay */}
          {isLoading && (
            <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-neutral-200 overflow-hidden">
              <div className="h-full bg-amber-500 animate-pulse w-full"></div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            src={`/proxy-raw?path=${encodeURIComponent(currentPath)}`}
            title="YESTAY Homes Live Proxy"
            className="w-full h-full border-none bg-white flex-1"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};
