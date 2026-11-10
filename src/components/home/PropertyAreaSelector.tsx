import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Building2, Trees, Waves } from 'lucide-react';
import { AREA_DIRECTORY } from '../../data/properties.ts';

export const PropertyAreaSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'city-center' | 'south-suburbs' | 'north-suburbs'>('city-center');

  const areasByRegion = {
    'city-center': [
      { name: 'City Center (All)', slug: 'city-center', count: 55 },
      { name: 'Akropoli', slug: 'akropoli', count: 18 },
      { name: 'Kolonaki', slug: 'kolonaki', count: 22 },
      { name: 'Mets', slug: 'mets', count: 8 },
      { name: 'Pagrati', slug: 'pagrati', count: 14 },
      { name: 'Plateia Mavili', slug: 'plateia-mavili', count: 9 },
      { name: 'Hilton / Ilisia', slug: 'hilton', count: 11 }
    ],
    'south-suburbs': [
      { name: 'South Suburbs (All)', slug: 'south-suburbs', count: 90 },
      { name: 'Glyfada', slug: 'glyfada', count: 28 },
      { name: 'Vouliagmeni', slug: 'vouliagmeni', count: 9 },
      { name: 'Voula', slug: 'voula', count: 14 },
      { name: 'Elliniko', slug: 'elliniko', count: 16 },
      { name: 'Palaio Faliro', slug: 'palaio-faliro', count: 15 },
      { name: 'Nea Smyrni', slug: 'nea-smyrni', count: 12 },
      { name: 'Alimos', slug: 'alimos', count: 10 }
    ],
    'north-suburbs': [
      { name: 'North Suburbs (All)', slug: 'north-suburbs', count: 90 },
      { name: 'Marousi', slug: 'marousi', count: 24 },
      { name: 'Kifisia', slug: 'kifisia', count: 20 },
      { name: 'Chalandri', slug: 'chalandri', count: 15 },
      { name: 'Agia Paraskevi', slug: 'agia-paraskevi', count: 13 },
      { name: 'Neo Psychiko', slug: 'neo-psychiko', count: 12 },
      { name: 'Vrilissia', slug: 'vrilissia', count: 11 },
      { name: 'Pefki', slug: 'pefki', count: 9 },
      { name: 'Nea Erythraia', slug: 'nea-erythraia', count: 8 },
      { name: 'Holargos', slug: 'holargos', count: 10 }
    ]
  };

  return (
    <section className="py-16 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Athens Neighborhood Explorer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Select Your Ideal Athens District
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Explore handpicked, fully furnished executive apartments grouped across Athens' three prime residential regions.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex bg-neutral-950 p-1.5 rounded-xl border border-neutral-800">
            <button
              onClick={() => setActiveTab('city-center')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'city-center'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>City Center</span>
            </button>

            <button
              onClick={() => setActiveTab('south-suburbs')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'south-suburbs'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>South Suburbs</span>
            </button>

            <button
              onClick={() => setActiveTab('north-suburbs')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'north-suburbs'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Trees className="w-3.5 h-3.5" />
              <span>North Suburbs</span>
            </button>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {areasByRegion[activeTab].map((area) => (
            <Link
              key={area.slug}
              to={`/rentals/${area.slug}`}
              className="group bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 p-4 rounded-xl transition duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <span className="font-semibold text-sm text-neutral-200 group-hover:text-amber-300 transition">
                  {area.name}
                </span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-neutral-900 text-neutral-400 group-hover:text-amber-400">
                  {area.count} Units
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 group-hover:text-amber-400">
                <span>Browse listings</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
