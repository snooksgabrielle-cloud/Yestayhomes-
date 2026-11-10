import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize2, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PROPERTIES_DATA } from '../../data/properties.ts';

export const FeaturedPropertiesCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const featured = PROPERTIES_DATA.filter((p) => p.featured);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, featured.length - visibleCount) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= featured.length ? 0 : prev + 1));
  };

  const visibleProperties = featured.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Prime Residences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Featured Athenian Stays
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Hand-curated executive suites and penthouses ready for immediate corporate lease or seasonal stay.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-400 transition"
              aria-label="Previous Properties"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-amber-400 transition"
              aria-label="Next Properties"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              to="/rentals"
              className="ml-2 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Properties Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProperties.map((property) => (
            <div
              key={property.id}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-700 transition duration-300 flex flex-col shadow-xl"
            >
              {/* Image & Price Tag */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-neutral-950/80 backdrop-blur text-amber-300 border border-amber-500/30">
                    {property.neighborhoodName}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-500 text-neutral-950">
                    ID: {property.id}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-[11px] text-neutral-300 font-medium">All Bills Included</div>
                  <div className="text-xl font-extrabold text-amber-400">
                    €{property.price.toLocaleString()}
                    <span className="text-xs font-normal text-neutral-300"> / mo</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{property.street}, Athens {property.zip}</span>
                  </div>

                  <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition line-clamp-1">
                    {property.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-4 py-2.5 border-y border-neutral-800 text-xs text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-amber-400" />
                      <span>{property.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-amber-400" />
                      <span>{property.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{property.sizeSqM} m²</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    to={`/property/${property.id}`}
                    className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition text-center shadow-md"
                  >
                    View Details & Inquire
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
