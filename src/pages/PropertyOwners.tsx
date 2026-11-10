import React, { useState } from 'react';
import { Building2, Shield, TrendingUp, Sparkles, CheckCircle2, Send, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/properties.ts';

export default function PropertyOwners() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    propertyArea: 'Kolonaki',
    propertyType: 'Apartment',
    sizeSqM: '100',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            For Property Owners & Investors
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            Partner with Athens' Premier Serviced Residence Operator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Maximize rental yield, eliminate tenant default risks, and upgrade your real estate asset with YESTAY's master lease and executive management model.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white">Guaranteed Fixed Monthly Yields</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Rent is paid reliably on the 1st of every month regardless of market fluctuations or void periods. Zero credit risk.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white">Complete Architectural Upgrades</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We invest capital into high-end interior architecture, Italian designer furnishings, and smart home tech, significantly appreciating your capital asset.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white">100% Hands-Free Asset Management</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our in-house technical crew handles preventive maintenance, deep cleanings, linen changes, and building relationship management.
            </p>
          </div>
        </div>

        {/* Evaluation Form */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Property Submission Received</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.ownerName}</span>. Our acquisitions director will evaluate your property at <span className="text-amber-400 font-semibold">{formData.propertyArea}</span> and schedule an on-site valuation within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                    Complimentary Valuation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Submit Your Property for Assessment
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Owner Name</label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="e.g. Konstantinos V."
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="owner@domain.com"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30 690 000 0000"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">District Area</label>
                    <select
                      value={formData.propertyArea}
                      onChange={(e) => setFormData({ ...formData, propertyArea: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    >
                      <option value="Kolonaki">Kolonaki</option>
                      <option value="Akropoli">Akropoli / Plaka</option>
                      <option value="Glyfada">Glyfada</option>
                      <option value="Vouliagmeni">Vouliagmeni</option>
                      <option value="Voula">Voula</option>
                      <option value="Marousi">Marousi</option>
                      <option value="Kifisia">Kifisia</option>
                      <option value="Psychiko">Psychiko</option>
                      <option value="Other">Other Athens Area</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Size (m²)</label>
                    <input
                      type="number"
                      value={formData.sizeSqM}
                      onChange={(e) => setFormData({ ...formData, sizeSqM: e.target.value })}
                      placeholder="100"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Property Description & Notes</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide floor level, condition (renovated / unrenovated), views, building elevator..."
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Owner Consultation & Valuation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
