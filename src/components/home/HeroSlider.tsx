import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Bed, Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    tag: 'ATHENS CITY CENTER',
    title: 'Executive Living Facing The Acropolis',
    subtitle: 'All-inclusive serviced luxury penthouses in Kolonaki, Akropoli, and historic central quarters.'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
    tag: 'ATHENIAN RIVIERA',
    title: 'Sun-Drenched Coastal Residences',
    subtitle: 'Wake up to the Mediterranean breeze in luxury suites across Glyfada, Voula, and Vouliagmeni.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    tag: 'NORTHERN BUSINESS DISTRICT',
    title: 'Peaceful Corporate Enclaves',
    subtitle: 'Spacious garden homes and corporate suites moments from Kifisias Avenue and Marousi tech hub.'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedArea, setSelectedArea] = useState('city-center');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedArea) {
      navigate(`/rentals/${selectedArea}`);
    } else {
      navigate('/rentals');
    }
  };

  return (
    <div className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center bg-neutral-950 overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.tag}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-[0.45] scale-105 transition-transform duration-[10000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{SLIDES[currentSlide].tag}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          {SLIDES[currentSlide].title}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          {SLIDES[currentSlide].subtitle}
        </p>

        {/* Search Widget */}
        <form
          onSubmit={handleSearch}
          className="mt-8 bg-neutral-900/90 border border-neutral-700/80 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
        >
          {/* Area dropdown */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
              Area / Suburb
            </label>
            <div className="flex items-center gap-2 text-white text-sm">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none cursor-pointer"
              >
                <option value="city-center" className="bg-neutral-900 text-white">City Center</option>
                <option value="akropoli" className="bg-neutral-900 text-white">Akropoli</option>
                <option value="kolonaki" className="bg-neutral-900 text-white">Kolonaki</option>
                <option value="south-suburbs" className="bg-neutral-900 text-white">South Suburbs (Riviera)</option>
                <option value="glyfada" className="bg-neutral-900 text-white">Glyfada</option>
                <option value="vouliagmeni" className="bg-neutral-900 text-white">Vouliagmeni</option>
                <option value="north-suburbs" className="bg-neutral-900 text-white">North Suburbs</option>
                <option value="marousi" className="bg-neutral-900 text-white">Marousi Business</option>
                <option value="kifisia" className="bg-neutral-900 text-white">Kifisia</option>
              </select>
            </div>
          </div>

          {/* Bedrooms dropdown */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
              Bedrooms
            </label>
            <div className="flex items-center gap-2 text-white text-sm">
              <Bed className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none cursor-pointer"
              >
                <option value="all" className="bg-neutral-900 text-white">Any Bedrooms</option>
                <option value="1" className="bg-neutral-900 text-white">1 Bedroom</option>
                <option value="2" className="bg-neutral-900 text-white">2 Bedrooms</option>
                <option value="3" className="bg-neutral-900 text-white">3+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-extrabold text-sm rounded-xl shadow-lg transition"
          >
            <Search className="w-4 h-4" />
            <span>Search Residences</span>
          </button>
        </form>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-900/60 hover:bg-neutral-900 text-white border border-neutral-800 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-900/60 hover:bg-neutral-900 text-white border border-neutral-800 transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
