import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Shield,
  Wifi,
  Sparkles,
  Award,
  ChevronRight,
  X,
  Send,
  Building,
  Star,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import { YESTAY_PROPERTIES, COMPANY_INFO, Property } from '../data/properties.ts';

interface ReplicatedAppProps {
  onOpenInProxy?: (path: string) => void;
}

export const ReplicatedApp: React.FC<ReplicatedAppProps> = ({ onOpenInProxy }) => {
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [bedroomFilter, setBedroomFilter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Inquiry form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '2026-12-01',
    durationMonths: '6',
    notes: ''
  });

  // Filter properties
  const filteredProperties = YESTAY_PROPERTIES.filter((p: Property) => {
    if (selectedArea !== 'All' && p.area !== selectedArea) return false;
    if (bedroomFilter !== 'all' && p.bedrooms !== bedroomFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        (p.neighborhood || '').toLowerCase().includes(q) ||
        p.zip.includes(q) ||
        (p.area || '').toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleOpenProperty = (property: Property) => {
    setSelectedProperty(property);
    setInquiryModalOpen(true);
    setInquirySubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 overflow-y-auto selection:bg-amber-500/30">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-900 border-b border-neutral-800 px-4 py-2 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ALL-INCLUSIVE RENTALS
            </span>
            <span>Electricity, Water, High-Speed WiFi & Bi-weekly Housekeeping Included.</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="tel:+302103486606" className="hover:text-amber-300 transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+30 210 3486 606</span>
            </a>
            <span className="text-neutral-700">|</span>
            <span>Athens, Greece</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-neutral-950 border-b border-neutral-800/80 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-amber-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>YESTAY HOMES ATHENS • REPLICATED ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Executive Stay <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                in Athens, Greece
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              All-inclusive, fully serviced luxury residences curated for business travelers, executives, and discerning nomads seeking sophisticated living in Athens.
            </p>
          </div>

          {/* Interactive Search & Filter Card */}
          <div className="mt-8 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Keyword Search */}
              <div className="md:col-span-2 relative">
                <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Location or Neighborhood
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Akropoli, Kolonaki, Glyfada, Marousi..."
                    className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl pl-9 pr-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              {/* Area Region Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Region Area
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400 transition"
                >
                  <option value="All">All Athens Regions</option>
                  <option value="Athens City Center">Athens City Center</option>
                  <option value="South Suburbs (Riviera)">South Suburbs (Riviera)</option>
                  <option value="North Suburbs">North Suburbs</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Bedrooms
                </label>
                <select
                  value={bedroomFilter}
                  onChange={(e) => setBedroomFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-neutral-700/80 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400 transition"
                >
                  <option value="all">Any Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                </select>
              </div>
            </div>

            {/* Quick area pill buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-neutral-800/80 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-neutral-500 mr-1 font-medium">Areas:</span>
                {['All', 'Athens City Center', 'South Suburbs (Riviera)', 'North Suburbs'].map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedArea(area)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      selectedArea === area
                        ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                        : 'bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
              <div className="text-neutral-400">
                Showing <span className="text-amber-400 font-semibold">{filteredProperties.length}</span> verified residences
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Neighborhood Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {COMPANY_INFO.locations.map((loc: { name: string; count: number; path: string; desc: string }) => (
            <div
              key={loc.name}
              onClick={() => {
                setSelectedArea(
                  loc.name.includes('City')
                    ? 'Athens City Center'
                    : loc.name.includes('South')
                    ? 'South Suburbs (Riviera)'
                    : 'North Suburbs'
                );
              }}
              className="bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 p-5 rounded-2xl cursor-pointer transition group shadow-sm hover:shadow-amber-500/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <h3 className="font-bold text-neutral-100 group-hover:text-amber-300 transition">
                    {loc.name}
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
                  {loc.count}+ Units
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">{loc.desc}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-amber-400/80 group-hover:text-amber-300">
                <span>Explore district</span>
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Curated Luxury Serviced Residences
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Turnkey apartments with bi-weekly cleaning, high-speed WiFi, and all utilities covered.
            </p>
          </div>
          {onOpenInProxy && (
            <button
              onClick={() => onOpenInProxy('/rent-apartments-athens-city-center')}
              className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
            >
              <span>View in Live Proxy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property: Property) => (
            <div
              key={property.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col group transition shadow-lg hover:shadow-2xl"
            >
              {/* Image with Tag & Price Overlay */}
              <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if external image fails
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-950/80 backdrop-blur text-amber-300 border border-amber-500/30">
                    {property.neighborhood}
                  </span>
                  {property.featured && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-neutral-950">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs text-neutral-300 font-medium">All-Inclusive From</div>
                  <div className="text-xl font-extrabold text-amber-400">
                    €{property.price.toLocaleString()}
                    <span className="text-xs font-normal text-neutral-300"> / month</span>
                  </div>
                </div>
              </div>

              {/* Property Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{property.area} • Athens {property.zip}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-100 group-hover:text-amber-300 transition line-clamp-1">
                    {property.title}
                  </h3>

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

                  {/* Amenities sample */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {property.amenities.slice(0, 3).map((amenity: string) => (
                      <span
                        key={amenity}
                        className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center gap-2">
                  <button
                    onClick={() => handleOpenProperty(property)}
                    className="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs rounded-xl transition shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect & Book</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {onOpenInProxy && (
                    <button
                      onClick={() => onOpenInProxy(property.path || '/')}
                      title="View exact page in Live Proxy"
                      className="p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-xl border border-neutral-700 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Accreditation Section */}
        <div className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Industry Recognition
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Award-Winning Hospitality & Executive Living
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Officially recognized across Greek and European luxury serviced apartment categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_INFO.awards.map((award: any) => (
              <div
                key={award.title || award.name}
                className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 text-center flex flex-col items-center justify-center"
              >
                <img
                  src={award.image}
                  alt={award.title || award.name}
                  className="h-20 w-20 object-contain mb-3 filter invert opacity-90"
                  onError={(e) => {
                    // Fallback icon
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <Award className="w-8 h-8 text-amber-400 mb-2" />
                <h4 className="font-bold text-sm text-neutral-100">{award.title || award.name}</h4>
                <p className="text-xs text-neutral-400 mt-1">{award.subtitle || award.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why YESTAY Value Props */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <Shield className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="font-bold text-sm text-white">100% All-Inclusive Billing</h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Never worry about electricity, water, high-speed fiber internet, heating, or building maintenance bills. One single transparent invoice.
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <Wifi className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="font-bold text-sm text-white">Executive & Nomad Ready</h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Equipped with dedicated ergonomic workspaces, high-speed fiber WiFi (up to 500Mbps), and bi-weekly professional housekeeping.
            </p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <Building className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="font-bold text-sm text-white">Prime Athens Locations</h4>
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
              Residences in Athens City Center (Kolonaki, Akropoli), Athenian Riviera (Glyfada, Vouliagmeni), and North Business Suburbs (Marousi).
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 mt-16 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-widest text-white">YESTAY</span>
                <span className="text-[10px] text-amber-400 font-mono">HOMES</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {COMPANY_INFO.tagline}. High-standard long-term residential solutions in Athens, Greece.
              </p>
              <div className="text-[11px] text-neutral-500">
                111, Iera Odos Str. & 7, Ag. Annis Str., Votanikos, 11855 Athens
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Popular Locations</h4>
              <ul className="space-y-2 text-xs">
                {COMPANY_INFO.popularPaths.slice(1, 6).map((item: { label: string; path: string }) => (
                  <li key={item.path}>
                    <button
                      onClick={() => onOpenInProxy?.(item.path)}
                      className="hover:text-amber-300 transition text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Help Center & Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#inquire" className="hover:text-amber-300 transition">Rental Tips for Guests</a></li>
                <li><a href="#inquire" className="hover:text-amber-300 transition">Business & Corporate Travel</a></li>
                <li><a href="#inquire" className="hover:text-amber-300 transition">For Property Owners</a></li>
                <li><a href="#inquire" className="hover:text-amber-300 transition">Long-Term Furnished Units</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Athens Office Contact</h4>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-neutral-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+30 210 3486 606</span>
                </p>
                <p className="flex items-center gap-2 text-neutral-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>info@yestayhomes.com</span>
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                  Mon - Fri: 09:00 - 18:00 (EET)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-400">
            <div>© 2026 YESTAY Homes • Replicated Architecture & Reverse Proxy</div>
            <div className="flex gap-4">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Details & Booking Inquiry Modal */}
      {inquiryModalOpen && selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex gap-4 items-start">
                <img
                  src={selectedProperty.images?.[0] || selectedProperty.image || ''}
                  alt={selectedProperty.title}
                  className="w-24 h-24 object-cover rounded-xl border border-neutral-700 flex-shrink-0"
                />
                <div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {selectedProperty.neighborhoodName || selectedProperty.neighborhood} • {selectedProperty.area}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{selectedProperty.title}</h3>
                  <div className="text-sm font-extrabold text-amber-400 mt-1">
                    €{selectedProperty.price.toLocaleString()} / month
                    <span className="text-xs font-normal text-neutral-400 ml-1">(All Bills Included)</span>
                  </div>
                </div>
              </div>

              {/* Property Details list */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 text-xs">
                <div>
                  <span className="text-neutral-500 block">Bedrooms</span>
                  <span className="font-semibold text-neutral-200">{selectedProperty.bedrooms} Bed</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Bathrooms</span>
                  <span className="font-semibold text-neutral-200">{selectedProperty.baths} Bath</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Size</span>
                  <span className="font-semibold text-neutral-200">{selectedProperty.sizeSqM} m²</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Floor</span>
                  <span className="font-semibold text-neutral-200">{selectedProperty.floor}</span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Included Amenities & Services
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProperty.amenities.map((a) => (
                    <span
                      key={a}
                      className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700/60"
                    >
                      <CheckCircle className="w-3 h-3 text-amber-400" />
                      <span>{a}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking / Inquiry Form */}
              <div className="border-t border-neutral-800 pt-5">
                {inquirySubmitted ? (
                  <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-neutral-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. A YESTAY Homes executive rental specialist will contact you at <span className="font-semibold text-amber-400">{formData.email}</span> within 2 hours.
                    </p>
                    <button
                      onClick={() => setInquiryModalOpen(false)}
                      className="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-xl transition"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h4 className="text-sm font-bold text-white">Request Availability & Private Viewing</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Work / Personal Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+30 690 000 0000"
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Desired Move-in</label>
                        <input
                          type="date"
                          value={formData.moveInDate}
                          onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-400 mb-1">Lease Length</label>
                        <select
                          value={formData.durationMonths}
                          onChange={(e) => setFormData({ ...formData, durationMonths: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                        >
                          <option value="1">1 Month (Executive)</option>
                          <option value="3">3 Months</option>
                          <option value="6">6 Months (Standard)</option>
                          <option value="12">12+ Months (Annual)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Special Requirements (optional)</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Need dedicated 2nd monitor desk, pet friendly, parking spot needed..."
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-[11px] text-neutral-500">
                        Zero agency commission • Direct with YESTAY
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Booking Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
