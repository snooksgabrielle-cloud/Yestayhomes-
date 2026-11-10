import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/properties.ts';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>EXECUTIVE CONCIERGE & BOOKING ASSISTANCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Plan Your Next Stay in Athens
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Need customized corporate housing packages, embassy billing agreements, or specific date matching? Our Athens residential team is at your disposal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+302103486606"
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-xs rounded-xl transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +30 210 3486 606</span>
            </a>
          </div>

          <div className="text-xs text-neutral-500 pt-2">
            Average response time: under 2 business hours • Direct contract with no broker commission
          </div>
        </div>
      </div>
    </section>
  );
};
