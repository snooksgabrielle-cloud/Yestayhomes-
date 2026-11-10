import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize2, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { Property } from '../../data/properties.ts';

interface PropertyCardProps {
  property: Property;
  onQuickInquire?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onQuickInquire }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col group transition duration-300 shadow-xl">
      {/* Property Image Banner */}
      <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
        <Link to={`/property/${property.id}`}>
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Link
            to={`/rentals/${property.areaSlug}`}
            className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-neutral-950/85 backdrop-blur text-amber-300 border border-amber-500/30 hover:border-amber-400 transition"
          >
            {property.neighborhoodName}
          </Link>
          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-neutral-950/80 text-neutral-300 border border-neutral-800">
            ID: {property.id}
          </span>
          {property.featured && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-amber-500 text-neutral-950">
              FEATURED
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-[11px] text-neutral-300 font-medium">All Bills Included</div>
          <div className="text-xl font-extrabold text-amber-400">
            €{property.price.toLocaleString()}
            <span className="text-xs font-normal text-neutral-300"> / month</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>{property.street}, Athens {property.zip}</span>
          </div>

          <Link to={`/property/${property.id}`} className="block">
            <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Specs */}
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

          {/* Amenities Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {property.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="text-[10px] px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center gap-2">
          <Link
            to={`/property/${property.id}`}
            className="flex-1 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition text-center shadow-md flex items-center justify-center gap-1"
          >
            <span>View Residence</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          {onQuickInquire && (
            <button
              onClick={() => onQuickInquire(property)}
              className="py-2.5 px-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs rounded-xl transition"
            >
              Inquire
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
