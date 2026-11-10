import React, { useState } from 'react';
import { X, CheckCircle, Send, Calendar, Clock, ShieldCheck, Bed, Bath, Maximize2 } from 'lucide-react';
import { Property, COMPANY_DETAILS } from '../../data/properties.ts';

interface BookingModalProps {
  property: Property;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ property, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '2026-12-01',
    durationMonths: '6',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex gap-4 items-start">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-neutral-700 flex-shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80';
              }}
            />
            <div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {property.neighborhoodName} • ID: {property.id}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 line-clamp-1">
                {property.title}
              </h3>
              <div className="text-sm font-extrabold text-amber-400 mt-0.5">
                €{property.price.toLocaleString()} / month
                <span className="text-[11px] font-normal text-neutral-400 ml-1.5">(All Bills Included)</span>
              </div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-2 bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.baths} Bathrooms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{property.sizeSqM} m²</span>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our executive concierge team has reserved your inquiry for <span className="text-amber-400 font-semibold">{property.title}</span>. We will follow up via email and phone.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-xl transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-sm font-bold text-white">Inquire for Lease & Private Viewing</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Work / Personal Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+30 690 000 0000"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Move-in Date</label>
                  <input
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Duration</label>
                  <select
                    value={formData.durationMonths}
                    onChange={(e) => setFormData({ ...formData, durationMonths: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                  >
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Special Requirements (optional)</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need dedicated monitor setup, parking space, airport transfer..."
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-neutral-200 outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-neutral-500">
                  Zero commission • Direct with YESTAY
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
