import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, Shield, TrendingUp } from 'lucide-react';

export const PropertyRenovationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>FOR ATHENS REAL ESTATE OWNERS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Transform Your Property into an Executive YESTAY Asset
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Do you own a premium apartment or building in Kolonaki, Glyfada, Akropoli, or Marousi? YESTAY offers master lease agreements, full interior architectural renovation, and guaranteed monthly rental yields with zero vacancy risk.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Guaranteed Monthly Yields</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>Architectural Renovation & Staging</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/property-owners"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition"
            >
              <span>Partner With YESTAY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
