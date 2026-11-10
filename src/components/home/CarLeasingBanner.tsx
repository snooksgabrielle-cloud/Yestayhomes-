import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CarLeasingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>LEASING SERVICES • MOBILITY PARTNER</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Executive EV & Hybrid Vehicle Leasing in Athens
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              In partnership with premier European mobility providers, YESTAY guests can pair their luxury apartment with an electric or hybrid vehicle (Tesla, BMW, Mercedes-Benz, Audi). Delivered directly to your underground parking or airport arrival gate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Home EV Charger Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Full Comprehensive Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Flexible 1-12 Month Contracts</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/services/car-leasing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition"
            >
              <span>Explore Car Leasing Partner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
