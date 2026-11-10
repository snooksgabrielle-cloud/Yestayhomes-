import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PropertyGrid } from '../../components/rentals/PropertyGrid.tsx';
import { AREA_DIRECTORY } from '../../data/properties.ts';
import { MapPin, Sparkles, ArrowLeft, ExternalLink } from 'lucide-react';

export default function AreaPage() {
  const { area } = useParams<{ area: string }>();
  const areaKey = (area || '').toLowerCase();
  const areaInfo = AREA_DIRECTORY[areaKey] || {
    name: (area || 'Athens').replace(/-/g, ' ').toUpperCase(),
    tagline: 'Curated executive serviced apartments in Athens',
    description: `Discover all-inclusive serviced residences in ${area?.replace(/-/g, ' ')}. Fully furnished, bi-weekly cleaning, high-speed fiber internet, and all utilities included.`,
    highlights: ['Prime residential street', 'Fast transit connections', 'Bi-weekly housekeeping included', 'All bills covered']
  };

  return (
    <main className="flex-1 bg-neutral-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/rentals" className="hover:text-white transition">Rentals</Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold capitalize">{area?.replace(/-/g, ' ')}</span>
          </div>

          <a
            href={`/proxy-raw?path=/rent-apartments-athens-${areaKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
            title="Inspect this district in original upstream proxy"
          >
            <span>Open in Proxy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* District Hero */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-wider">{areaInfo.name} DISTRICT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight capitalize">
            Apartments in {areaInfo.name}
          </h1>

          <p className="text-amber-400/90 text-sm font-medium">
            {areaInfo.tagline}
          </p>

          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {areaInfo.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {areaInfo.highlights?.map((h) => (
              <span
                key={h}
                className="text-xs px-3 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Property Grid */}
        <PropertyGrid area={area} />
      </div>
    </main>
  );
}
