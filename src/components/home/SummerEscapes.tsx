import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Waves, Palmtree, ArrowRight, Anchor } from 'lucide-react';

export const SummerEscapes: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
              alt="Summer Escapes Athenian Riviera"
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>SUMMER ESCAPES • ATHENIAN RIVIERA</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Combine Urban Executive Life with Coastal Relaxation
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Why choose between European city vitality and azure sea waters? With YESTAY homes in Vouliagmeni, Glyfada, and Voula, enjoy private terraces, coastal golf, beach clubs, and sunset marina dining just 25 minutes from downtown Athens.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/rentals/south-suburbs"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wide shadow-lg transition flex items-center gap-2"
              >
                <span>Browse Riviera Residences</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold text-xs transition"
              >
                Inquire for Summer Lease
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
