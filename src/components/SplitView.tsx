import React, { useState } from 'react';
import {
  Columns2,
  ExternalLink,
  RotateCw,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Monitor
} from 'lucide-react';
import { ReplicatedApp } from './ReplicatedApp.tsx';

interface SplitViewProps {
  initialPath?: string;
}

export const SplitView: React.FC<SplitViewProps> = ({ initialPath = '/' }) => {
  const [proxyPath, setProxyPath] = useState(initialPath);
  const [splitRatio, setSplitRatio] = useState<number>(50); // percentage
  const [key, setKey] = useState(0);

  const handleNavigateProxy = (path: string) => {
    setProxyPath(path);
  };

  return (
    <div className="flex-1 flex flex-col bg-neutral-950 overflow-hidden">
      {/* Top Split Header */}
      <div className="flex-none bg-neutral-900 border-b border-neutral-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Columns2 className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-white">Side-by-Side Visual & Functional Parity</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400">Left: Upstream Live Proxy • Right: Replicated React Architecture</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-neutral-400">Split:</span>
          <button
            onClick={() => setSplitRatio(50)}
            className={`px-2 py-0.5 rounded font-mono ${splitRatio === 50 ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300'}`}
          >
            50 / 50
          </button>
          <button
            onClick={() => setSplitRatio(60)}
            className={`px-2 py-0.5 rounded font-mono ${splitRatio === 60 ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300'}`}
          >
            60 / 40
          </button>
          <button
            onClick={() => setSplitRatio(40)}
            className={`px-2 py-0.5 rounded font-mono ${splitRatio === 40 ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300'}`}
          >
            40 / 60
          </button>
          <button
            onClick={() => setKey((k) => k + 1)}
            title="Refresh Proxy"
            className="p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition ml-2"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Split Panels */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Live Proxy */}
        <div
          style={{ flexBasis: `${splitRatio}%` }}
          className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-neutral-800 bg-neutral-950 overflow-hidden"
        >
          <div className="bg-neutral-900/90 border-b border-neutral-800 px-3 py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LIVE PROXY: https://yestayhomes.com{proxyPath}</span>
            </div>
            <a
              href={`/proxy-raw?path=${encodeURIComponent(proxyPath)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>Raw</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex-1 bg-white relative">
            <iframe
              key={key}
              src={`/proxy-raw?path=${encodeURIComponent(proxyPath)}`}
              title="Left Split Live Proxy"
              className="w-full h-full border-none"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Right: Replicated React App */}
        <div
          style={{ flexBasis: `${100 - splitRatio}%` }}
          className="flex-1 flex flex-col bg-neutral-950 overflow-hidden"
        >
          <div className="bg-neutral-900/90 border-b border-neutral-800 px-3 py-1.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REPLICATED REPO: React 19 + Tailwind Architecture</span>
            </div>
            <span className="text-[10px] text-neutral-400 font-mono">12 Verified Units</span>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ReplicatedApp onOpenInProxy={handleNavigateProxy} />
          </div>
        </div>
      </div>
    </div>
  );
};
