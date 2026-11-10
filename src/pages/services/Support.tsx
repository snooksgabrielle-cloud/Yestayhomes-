import React, { useState } from 'react';
import { Wrench, Home, Truck, Bell, ShieldCheck, CheckCircle2, Phone, Mail, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/properties.ts';

export default function Support() {
  const [ticketSent, setTicketSent] = useState(false);

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Resident Support & Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            Services & Support Ecosystem
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Our comprehensive resident support covers 24/7 technical dispatch, bespoke furniture upgrades, international relocation logistics, and private lifestyle concierge.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Rapid Maintenance & Technical Support</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Air conditioning filter servicing, high-speed fiber router optimization, plumbing adjustments, and appliance repairs are executed by our in-house certified Greek engineering staff. Emergency calls dispatched 24 hours a day.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Property Upgrades & Bespoke Workspaces</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Require dual 4K monitors, a Herman Miller chair, baby nursery crib, or custom gym equipment delivered to your residence? Our design team customizes your unit prior to check-in.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Executive Relocation Support</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Assistance with Greek residency paperwork, AFM tax registration guidance, private school admissions, pet relocation logistics, and private airport VIP chauffeur meet-and-greet.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Hospitality & Lifestyle Concierge</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              From private in-suite chefs for dinners to private sailing day trips to Hydra and Spetses, our concierge team delivers tailored Greek lifestyle experiences.
            </p>
          </div>
        </div>

        {/* Support Ticket Submission */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto">
          {ticketSent ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Service Request Logged</h3>
              <p className="text-xs text-neutral-300">
                Our support desk has received your ticket. An engineer or concierge coordinator will update you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setTicketSent(true); }} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Resident Support Desk</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Residence Address / ID</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kolonaki Suite 880475"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Category</label>
                <select className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400">
                  <option>Maintenance & Plumbing/Electrical</option>
                  <option>Housekeeping & Linen Request</option>
                  <option>High-Speed WiFi / Network Optimization</option>
                  <option>Relocation / AFM & Tax Guidance</option>
                  <option>Concierge & VIP Bookings</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Description of Request</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your maintenance or service need in detail..."
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Service Ticket</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
