import React, { useState } from 'react';
import { PropertyCard } from './PropertyCard.tsx';
import { BookingModal } from './BookingModal.tsx';
import { PROPERTIES_DATA, Property, AREA_DIRECTORY } from '../../data/properties.ts';
import { Search, Filter, SlidersHorizontal, Bed, Building2 } from 'lucide-react';

interface PropertyGridProps {
  area?: string;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ area }) => {
  const [bedroomFilter, setBedroomFilter] = useState<number | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(4000);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<Property | null>(null);

  // Filter logic
  const filtered = PROPERTIES_DATA.filter((p) => {
    // If area prop is provided:
    if (area && area !== 'all') {
      const areaLower = area.toLowerCase();
      // Check exact area slug
      const isExactArea = p.areaSlug === areaLower;
      // Check region macro slug (e.g. "city-center", "south-suburbs", "north-suburbs")
      const isMacroRegion = p.suburbRegion === areaLower;
      // Check neighborhood name
      const isNameMatch = p.neighborhoodName.toLowerCase().replace(/\s+/g, '-') === areaLower;

      if (!isExactArea && !isMacroRegion && !isNameMatch) {
        return false;
      }
    }

    if (bedroomFilter !== 'all' && p.bedrooms !== bedroomFilter) {
      return false;
    }

    if (p.price > maxPrice) {
      return false;
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.neighborhoodName.toLowerCase().includes(q) ||
        p.street.toLowerCase().includes(q) ||
        p.zip.includes(q) ||
        p.id.includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by street, zip code, or property ID..."
              className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
            />
          </div>

          {/* Bedroom Filter */}
          <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-700/80 rounded-xl px-3 py-2">
            <Bed className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <select
              value={bedroomFilter}
              onChange={(e) => setBedroomFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full bg-transparent text-xs sm:text-sm text-neutral-200 outline-none cursor-pointer"
            >
              <option value="all" className="bg-neutral-900 text-white">All Bedrooms</option>
              <option value="1" className="bg-neutral-900 text-white">1 Bedroom</option>
              <option value="2" className="bg-neutral-900 text-white">2 Bedrooms</option>
              <option value="3" className="bg-neutral-900 text-white">3+ Bedrooms</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div className="bg-neutral-950 border border-neutral-700/80 rounded-xl px-3 py-2 flex flex-col justify-center">
            <div className="flex justify-between text-[11px] text-neutral-400 mb-1">
              <span>Max Monthly Rent:</span>
              <span className="font-bold text-amber-400">€{maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1200}
              max={3500}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Counter & Active filters */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-800/80">
          <div>
            Showing <span className="font-bold text-white">{filtered.length}</span> verified residences
            {area && area !== 'all' && (
              <span> in <span className="text-amber-400 capitalize">{area.replace('-', ' ')}</span></span>
            )}
          </div>
          <div className="text-[11px] text-neutral-500">
            *All listings include electricity, high-speed fiber WiFi, and bi-weekly housekeeping.
          </div>
        </div>
      </div>

      {/* Grid or Empty State */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onQuickInquire={(p) => setSelectedPropertyForModal(p)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
          <Building2 className="w-12 h-12 text-amber-400/60 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Properties Found</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            We couldn't find residences matching your current filter in this district. Contact our concierge to request a tailored off-market search.
          </p>
          <button
            onClick={() => {
              setBedroomFilter('all');
              setMaxPrice(4000);
              setSearchTerm('');
            }}
            className="px-5 py-2.5 bg-amber-500 text-neutral-950 font-bold text-xs rounded-xl transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Booking Modal */}
      {selectedPropertyForModal && (
        <BookingModal
          property={selectedPropertyForModal}
          onClose={() => setSelectedPropertyForModal(null)}
        />
      )}
    </div>
  );
};
