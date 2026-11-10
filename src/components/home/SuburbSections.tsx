import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees, Waves, Building, Check, MapPin } from 'lucide-react';
import { AREA_DIRECTORY } from '../../data/properties.ts';

export const SuburbSections: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section 1: North Suburbs Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Trees className="w-3.5 h-3.5" />
              <span>NORTH SUBURBS • CORPORATE & RESIDENTIAL HAVEN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Quiet Pine Greenery & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-amber-100">
                Kifisias Business Corridor
              </span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Favored by multinational executives, tech entrepreneurs, and international school families. The northern suburbs—including Marousi, Kifisia, Chalandri, and Neo Psychiko—combine peaceful mountain pine air with immediate access to multinational headquarters.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Marousi Tech & Telecom Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Historic Kifisia Villas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>International Schools (ISA, St. Cath.)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Golden Hall & The Mall Athens</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {['marousi', 'kifisia', 'chalandri', 'neo-psychiko', 'agia-paraskevi'].map((slug) => (
                <Link
                  key={slug}
                  to={`/rentals/${slug}`}
                  className="px-3 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition"
                >
                  {AREA_DIRECTORY[slug]?.name || slug}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/rentals/north-suburbs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition"
              >
                <span>Explore All North Suburbs Residences (90+)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="North Suburbs Athens"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-neutral-950/95 border border-neutral-800 p-4 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="text-xs font-bold text-white">Ideal for Corporate Relocations</div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Direct accessibility via Attiki Odos, suburban rail, and green line metro.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: South Suburbs (Riviera) Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Athenian Riviera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-neutral-950/95 border border-neutral-800 p-4 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="text-xs font-bold text-white">Mediterranean Coastal Living</div>
              <div className="text-[11px] text-neutral-400 mt-1">
                From luxury Glyfada shopping to pine-fringed Vouliagmeni coves.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Waves className="w-3.5 h-3.5" />
              <span>SOUTH SUBURBS • THE ATHENIAN RIVIERA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Sun, Sea & Cosmopolitan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-300 to-amber-100">
                Boutique Coastal Residences
              </span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Live where Europe goes on holiday. The southern coastal rim of Athens provides sun-drenched apartments with wide verandas, coastal tram lines, golf clubs, and proximity to the transformative Ellinikon coastal park project.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>Glyfada Metaxa Avenue Shopping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>Vouliagmeni Peninsula Resorts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>Flisvos Superyacht Marina</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>The Ellinikon Metropolitan Park</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {['glyfada', 'vouliagmeni', 'voula', 'elliniko', 'palaio-faliro', 'alimos'].map((slug) => (
                <Link
                  key={slug}
                  to={`/rentals/${slug}`}
                  className="px-3 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition"
                >
                  {AREA_DIRECTORY[slug]?.name || slug}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/rentals/south-suburbs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition"
              >
                <span>Explore All South Suburbs Residences (90+)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
