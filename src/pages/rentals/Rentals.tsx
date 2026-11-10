import React from 'react';
import { PropertyGrid } from '../../components/rentals/PropertyGrid.tsx';
import { PropertyAreaSelector } from '../../components/home/PropertyAreaSelector.tsx';
import { Building2, Sparkles, MapPin } from 'lucide-react';

export default function Rentals() {
  return (
    <main className="flex-1 bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ATHENS LUXURY SERVICED RESIDENCES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Furnished Apartments for Rent in Athens
          </h1>

          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            All-inclusive, fully serviced long-term residential solutions across Athens City Center, South Suburbs (Riviera), and North Suburbs. High-speed fiber internet, electricity, water, and bi-weekly housekeeping included in every residence.
          </p>
        </div>

        {/* Directory Grid */}
        <PropertyGrid area="all" />

        {/* Neighborhood Selector */}
        <div className="pt-8 border-t border-neutral-800">
          <PropertyAreaSelector />
        </div>
      </div>
    </main>
  );
}
