import React from 'react';
import { Award, Shield, CheckCircle2, HeartHandshake, Building2, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/properties.ts';

export default function About() {
  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            About YESTAY Homes
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            Redefining Executive Hospitality in Athens
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Founded with a vision to provide sophisticated, hassle-free residential accommodations in Greece’s historic capital, YESTAY has emerged as Athens’ foremost provider of executive serviced residences.
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p>
              Traditional leasing often leaves international tenants grappling with local bureaucracy, utility activations, unstable internet setups, and language barriers. YESTAY was engineered to turn residential leasing into a 5-star hospitality experience.
            </p>
            <p>
              We lease directly from vetted private owners and institutional funds under strict master contracts, completely renovate or re-stage each property using contemporary architecture, and manage all day-to-day operations with our in-house engineering, cleaning, and concierge personnel.
            </p>
            <p>
              From ambassadors and diplomatic missions in Kolonaki and Psychiko, to senior executives working along Kifisias Avenue and remote entrepreneurs on the Athenian Riviera, our residents enjoy unmatched peace of mind.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
              alt="YESTAY Athens"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Awards Showcase */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Recognition & Accreditations
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Celebrated Industry Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_DETAILS.awards.map((award) => (
              <div
                key={award.name}
                className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">{award.name}</h4>
                <p className="text-xs text-neutral-400">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Headquarters */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Athens Headquarters</h3>
            <p className="text-xs text-neutral-400 mt-1">{COMPANY_DETAILS.address}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-amber-400 font-semibold">
              <span>Tel: {COMPANY_DETAILS.phone}</span>
              <span>Email: {COMPANY_DETAILS.email}</span>
            </div>
          </div>
          <a
            href="tel:+302103486606"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition"
          >
            Contact Team
          </a>
        </div>
      </div>
    </div>
  );
}
