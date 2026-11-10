import React from 'react';
import { Shield, Sparkles, Building, Key, Award, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/properties.ts';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THE YESTAY HOMES PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Sophisticated Long-Term Living, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                100% Turnkey in Athens
              </span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At YESTAY, we redefine residential leasing for executives, digital nomads, and diplomats relocating to Greece. Traditional leasing in Athens often involves complex utility contracts, fluctuating energy bills, and unfurnished shells.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We eliminate friction completely: one transparent monthly invoice covers high-speed fiber internet, electricity, heating, water, and bi-weekly professional housekeeping. Every home is fully styled, furnished with Italian and Scandinavian pieces, and outfitted with an ergonomic remote work setup.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">230+</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Managed Units in Athens</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Bills Included Guarantee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">4.9 / 5</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Executive Guest Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Direct Landlord Relationship</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                No middlemen, no hidden broker commissions, and no administrative bureaucracy. Deal directly with our professional Athens property team.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Instant Smart Move-In</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Walk in with your suitcase. Beds dressed in organic cotton linen, Nespresso bar stocked, high-speed WiFi pre-tested and active.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Flexible Terms (1-12+ Mo)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Lease terms tailored for corporate secondments, embassy tours, winter stays, or year-round Athens residences.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Award-Winning Standard</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Recognized at the Luxury Lifestyle Awards and Hotel of the Year 2025 Gold for Best Digital Nomad Residences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
