import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AREA_DIRECTORY } from '../../data/properties.ts';

export const FeaturedAreas: React.FC = () => {
  const regions = [
    AREA_DIRECTORY['city-center'],
    AREA_DIRECTORY['south-suburbs'],
    AREA_DIRECTORY['north-suburbs']
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Athens Living Concepts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Distinctive Neighborhood Lifestyles
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Whether you prioritize cosmopolitan culture, Mediterranean coastal breeze, or corporate calm, YESTAY has curated properties in Athens’ finest enclaves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div
              key={region.slug}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col group hover:border-neutral-700 transition duration-300 shadow-xl"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                  {region.propertyCount}+ Verified Residences
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                    {region.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    {region.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-1.5 border-t border-neutral-800/80 pt-4">
                    {region.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <Link
                    to={`/rentals/${region.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group-hover:translate-x-1"
                  >
                    <span>View {region.name} Apartments</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
