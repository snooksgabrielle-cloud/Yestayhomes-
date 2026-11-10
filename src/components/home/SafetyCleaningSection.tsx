import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, HeartHandshake, Wind, KeyRound } from 'lucide-react';

export const SafetyCleaningSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              Hospitality & Hygiene Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Certified Safety, Sanitization & Care
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              We uphold clinical-grade cleanliness and transparent guest security across our entire portfolio of residences in Athens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Hospital-Grade Disinfection</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-touch surfaces sanitized with certified medical-grade eco-disinfectants before every guest arrival.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Clean Air & Fresh Linens</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A/C filters steam-cleaned regularly; 100% Egyptian cotton linens washed at 90°C in certified industrial laundries.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Contactless Smart Entry</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Keyless smart PIN locks and secure digital keys allow check-in at any hour with zero waiting or contact.
              </p>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">24/7 Security & Support</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Emergency maintenance dispatch within 60 minutes for plumbing, electrical, or lock issues day and night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
