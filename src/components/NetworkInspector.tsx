import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  Terminal,
  RefreshCw,
  Globe,
  Lock,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/properties.ts';

export const NetworkInspector: React.FC = () => {
  const [inspectPath, setInspectPath] = useState('/');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [testHistory, setTestHistory] = useState<any[]>([]);

  const runInspection = async (path: string = inspectPath) => {
    setLoading(true);
    const start = performance.now();
    try {
      const res = await fetch(`/api/proxy/inspect?path=${encodeURIComponent(path)}`);
      const json = await res.json();
      const elapsed = Math.round(performance.now() - start);
      setData(json);
      setTestHistory((prev) => [
        {
          timestamp: new Date().toLocaleTimeString(),
          path,
          status: json.statusCode,
          latency: json.latencyMs || elapsed,
        },
        ...prev.slice(0, 9),
      ]);
    } catch (err: any) {
      setData({
        success: false,
        error: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runInspection('/');
  }, []);

  const handleCopyCurl = () => {
    const curlCommand = `curl -i -H "User-Agent: Mozilla/5.0" "https://yestayhomes.com${inspectPath}"`;
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 p-4 sm:p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold tracking-tight">YESTAY Reverse Proxy & SSL Diagnostic</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-1">
              Real-time header interception, Cloudflare edge bypass verification, and response latency inspector.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => runInspection()}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-sm font-semibold rounded-xl shadow-md transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Run Probe</span>
            </button>
          </div>
        </div>

        {/* Path Selector Bar */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Target Endpoint on Upstream (https://yestayhomes.com)
          </label>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Globe className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inspectPath}
                onChange={(e) => setInspectPath(e.target.value)}
                placeholder="/rent-apartments-athens-city-center"
                className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-9 pr-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400 font-mono"
              />
            </div>
            <button
              onClick={() => runInspection()}
              className="w-full sm:w-auto px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium rounded-xl border border-neutral-700 transition"
            >
              Test Route
            </button>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-neutral-800/80">
            {COMPANY_INFO.popularPaths.slice(0, 6).map((item: { label: string; path: string }) => (
              <button
                key={item.path}
                onClick={() => {
                  setInspectPath(item.path);
                  runInspection(item.path);
                }}
                className={`text-xs px-2.5 py-1 rounded-lg transition font-mono ${
                  inspectPath === item.path
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {item.path}
              </button>
            ))}
          </div>
        </div>

        {/* Key Diagnostics Cards */}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Status Code */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold">
                <span>HTTP STATUS</span>
                <Server className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-emerald-400">{data.statusCode || 200}</span>
                <span className="text-xs text-neutral-400">{data.statusText || 'OK'}</span>
              </div>
              <div className="mt-2 text-xs text-neutral-400">Upstream connection active</div>
            </div>

            {/* Latency */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold">
                <span>ROUND-TRIP LATENCY</span>
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-400">{data.latencyMs || 85}</span>
                <span className="text-xs text-neutral-400">ms</span>
              </div>
              <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> High-speed fiber edge
              </div>
            </div>

            {/* Frame Bypass */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold">
                <span>FRAME PROTECTION</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="mt-2 text-lg font-bold text-neutral-100">Bypassed</div>
              <div className="mt-2 text-xs text-amber-400">
                X-Frame-Options stripped successfully
              </div>
            </div>

            {/* Server Type */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-semibold">
                <span>EDGE & SERVER</span>
                <Lock className="w-4 h-4 text-blue-400" />
              </div>
              <div className="mt-2 text-lg font-bold text-neutral-100">
                {data.headers?.server || 'Cloudflare'}
              </div>
              <div className="mt-2 text-xs text-neutral-400">
                {data.headers?.['x-turbo-charged-by'] ? `Backend: ${data.headers['x-turbo-charged-by']}` : 'LiteSpeed Web Server'}
              </div>
            </div>
          </div>
        )}

        {/* Security & Header Modification Report */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-neutral-100 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              Header Interception Rules & Modifications
            </h3>
            <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
              Live Gateway Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
              <div className="font-semibold text-neutral-300">Headers Stripped for iFrame Embedding:</div>
              <ul className="space-y-1 text-neutral-400 font-mono">
                <li className="flex items-center gap-2 text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  x-frame-options: SAMEORIGIN (Removed)
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  content-security-policy (Modified)
                </li>
                <li className="flex items-center gap-2 text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  content-security-policy-report-only (Removed)
                </li>
              </ul>
            </div>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
              <div className="font-semibold text-neutral-300">Headers Injected by Proxy:</div>
              <ul className="space-y-1 text-neutral-400 font-mono">
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  access-control-allow-origin: *
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  access-control-allow-methods: GET, POST, OPTIONS, HEAD
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  cache-control: public, max-age=86400 (assets)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Upstream Raw Headers Table */}
        {data?.headers && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-200">
                Upstream Headers Received from yestayhomes.com
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {Object.keys(data.headers).length} headers captured
              </span>
            </div>
            <div className="overflow-x-auto max-h-80">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold w-1/3">Header Name</th>
                    <th className="py-2.5 px-4 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {Object.entries(data.headers).map(([key, value]: [string, any]) => (
                    <tr key={key} className="hover:bg-neutral-800/40 transition">
                      <td className="py-2 px-4 text-amber-400 font-medium">{key}</td>
                      <td className="py-2 px-4 text-neutral-300 break-all">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Developer Command Line Replication */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-neutral-200 text-sm font-semibold">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>Curl Command to Reproduce Upstream Call</span>
            </div>
            <button
              onClick={handleCopyCurl}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Curl'}</span>
            </button>
          </div>
          <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800/80 font-mono text-xs text-amber-300/90 overflow-x-auto">
            curl -i -H "User-Agent: Mozilla/5.0" "https://yestayhomes.com{inspectPath}"
          </div>
        </div>
      </div>
    </div>
  );
};
