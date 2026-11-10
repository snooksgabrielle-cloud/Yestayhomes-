import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Wifi,
  Sparkles,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Send,
  Zap,
  Box
} from 'lucide-react';
import { Property3DViewer } from './Property3DViewer.tsx';
import { PROPERTIES_DATA, Property, COMPANY_DETAILS, AREA_DIRECTORY } from '../../data/properties.ts';

interface PropertyDetailsProps {
  id?: string;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ id }) => {
  // Find property by id or fallback to first
  const property = PROPERTIES_DATA.find((p) => p.id === id) || PROPERTIES_DATA[0];
  const [mediaTab, setMediaTab] = useState<'3d' | 'photos'>('3d');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '2026-12-01',
    duration: '6',
    notes: ''
  });

  const areaInfo = AREA_DIRECTORY[property.areaSlug] || AREA_DIRECTORY['city-center'];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen pb-24">
      {/* Breadcrumb Bar */}
      <div className="bg-neutral-900 border-b border-neutral-800 text-xs py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/rentals" className="hover:text-white transition">Rentals</Link>
            <span>/</span>
            <Link to={`/rentals/${property.areaSlug}`} className="hover:text-white capitalize transition">
              {property.neighborhoodName}
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-[200px]">{property.title}</span>
          </div>

          <a
            href={`/proxy-raw?path=${encodeURIComponent(property.path || '/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
            title="Inspect in original upstream live proxy"
          >
            <span>Inspect in Proxy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {property.neighborhoodName}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-neutral-900 text-neutral-300 border border-neutral-800">
                Residence ID: {property.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Energy Class: {property.energyClass}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm mt-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{property.street}, Athens {property.zip}, Greece</span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <div className="text-xs text-neutral-400 font-medium">All Bills Included • Fixed Monthly</div>
            <div className="text-3xl font-black text-amber-400">
              €{property.price.toLocaleString()}
              <span className="text-sm font-normal text-neutral-400"> / month</span>
            </div>
          </div>
        </div>

        {/* Media Mode Tabs: 3D Model vs Photo Gallery */}
        <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMediaTab('3d')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                mediaTab === '3d'
                  ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>3D Spatial Tour & Model</span>
            </button>

            <button
              onClick={() => setMediaTab('photos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                mediaTab === 'photos'
                  ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>HD Photo Gallery ({property.images.length})</span>
            </button>
          </div>

          <a
            href={`/proxy-raw?path=${encodeURIComponent(property.path || '/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
          >
            <span>Origin Link Proxy 3D View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Media Section Body */}
        {mediaTab === '3d' ? (
          <div className="mb-10">
            <Property3DViewer property={property} />
          </div>
        ) : (
          <div className="space-y-3 mb-10">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative">
              <img
                src={property.images[activeImageIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>

            {property.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-24 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition ${
                      i === activeImageIndex ? 'border-amber-400 scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content & Sticky Booking Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left 2 Cols: Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Core Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-neutral-900 border border-neutral-800 p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Bedrooms</div>
                  <div className="font-bold text-sm text-white">{property.bedrooms} Full Beds</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Bath className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Bathrooms</div>
                  <div className="font-bold text-sm text-white">{property.baths} Baths</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Living Area</div>
                  <div className="font-bold text-sm text-white">{property.sizeSqM} m²</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Floor Level</div>
                  <div className="font-bold text-sm text-white">{property.floor}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Residence Overview</h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {property.description}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Curated exclusively under the YESTAY hospitality portfolio, this apartment offers executive tenants a seamless living experience in Athens. Moving in requires only personal belongings: from the high-count organic cotton bedding to the high-speed fiber internet and fully equipped chef’s kitchen, everything is move-in prepared.
              </p>
            </div>

            {/* Amenities Section */}
            <div className="space-y-4 border-t border-neutral-800 pt-8">
              <h2 className="text-xl font-bold text-white">Included Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All-Inclusive Guarantee */}
            <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-amber-500/30 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Zap className="w-4 h-4" />
                <span>The YESTAY All-Inclusive Promise</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Your monthly rate covers 100% of household operating expenses: electricity usage, heating & cooling, high-speed fiber optic internet, building common fees, water consumption, and scheduled bi-weekly professional housekeeping. No surprise utility adjustments or complex local contracts.
              </p>
            </div>

            {/* Neighborhood Spotlight */}
            <div className="space-y-4 border-t border-neutral-800 pt-8">
              <h2 className="text-xl font-bold text-white">About the {property.neighborhoodName} District</h2>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <h3 className="font-bold text-base text-amber-400">{areaInfo.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {areaInfo.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {areaInfo.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Rail: Booking & Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="flex items-baseline justify-between border-b border-neutral-800 pb-4">
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Monthly Rate</div>
                  <div className="text-2xl font-black text-amber-400">
                    €{property.price.toLocaleString()}
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AVAILABLE NOW
                </span>
              </div>

              {inquirySubmitted ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our Athens residential specialist will follow up with lease documentation and viewing times.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <h3 className="text-sm font-bold text-white">Request Lease & Private Viewing</h3>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Aurelius"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@company.com"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30 690 000 0000"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Move-In</label>
                      <input
                        type="date"
                        value={formData.moveInDate}
                        onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-2 py-2 text-xs text-white outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Duration</label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-2 py-2 text-xs text-white outline-none focus:border-amber-400"
                      >
                        <option value="1">1 Month</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Special Notes</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Need invoice to foreign company, parking space..."
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Booking Inquiry</span>
                  </button>
                </form>
              )}

              <div className="border-t border-neutral-800 pt-4 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Athens Desk: {COMPANY_DETAILS.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_DETAILS.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
