import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/properties.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      {/* Top Banner with Awards */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/40 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
              European Hospitality Recognition
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Greece’s Premier Luxury Serviced Residences
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-xl">
              Curated all-inclusive long-term rentals with full utilities, fiber internet, bi-weekly housekeeping, and 24/7 executive concierge.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {COMPANY_DETAILS.awards.map((award) => (
              <div
                key={award.name}
                className="flex items-center gap-2 bg-neutral-900 border border-neutral-800/80 rounded-xl px-3.5 py-2"
              >
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-xs text-neutral-200">{award.name}</div>
                  <div className="text-[10px] text-neutral-400">{award.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-serif font-black text-neutral-950 text-base">
                Y
              </div>
              <div>
                <span className="font-extrabold text-base tracking-widest text-white">YESTAY</span>
                <span className="text-[10px] text-amber-400 font-mono ml-1.5 uppercase font-bold">HOMES</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {COMPANY_DETAILS.tagline}. YESTAY provides all-inclusive long-term rental solutions to individuals seeking a sophisticated residence in Athens.
            </p>

            <div className="space-y-1.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+302103486606" className="hover:text-amber-300 transition">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@yestayhomes.com" className="hover:text-amber-300 transition">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Popular Locations */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Popular Locations</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/rentals/city-center" className="hover:text-amber-300 transition">
                  Athens City Center
                </Link>
              </li>
              <li>
                <Link to="/rentals/akropoli" className="hover:text-amber-300 transition">
                  Akropoli Residences
                </Link>
              </li>
              <li>
                <Link to="/rentals/kolonaki" className="hover:text-amber-300 transition">
                  Kolonaki Suites
                </Link>
              </li>
              <li>
                <Link to="/rentals/south-suburbs" className="hover:text-amber-300 transition">
                  South Suburbs (Riviera)
                </Link>
              </li>
              <li>
                <Link to="/rentals/glyfada" className="hover:text-amber-300 transition">
                  Glyfada Coastal Homes
                </Link>
              </li>
              <li>
                <Link to="/rentals/vouliagmeni" className="hover:text-amber-300 transition">
                  Vouliagmeni Peninsula
                </Link>
              </li>
              <li>
                <Link to="/rentals/north-suburbs" className="hover:text-amber-300 transition">
                  North Suburbs
                </Link>
              </li>
              <li>
                <Link to="/rentals/marousi" className="hover:text-amber-300 transition">
                  Marousi Corporate Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Owners */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Company & Help</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/property-owners" className="hover:text-amber-300 transition">
                  For Property Owners
                </Link>
              </li>
              <li>
                <Link to="/services/car-leasing" className="hover:text-amber-300 transition">
                  Car Leasing Partner
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-amber-300 transition">
                  Services & Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition">
                  Contact Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/support" className="hover:text-amber-300 transition">
                  Maintenance Support
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-amber-300 transition">
                  Property Upgrades & Renovation
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-amber-300 transition">
                  Executive Relocation
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-amber-300 transition">
                  Hospitality Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>© {new Date().getFullYear()} YESTAY Homes. All rights reserved.</div>

          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-neutral-400 transition">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-neutral-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-neutral-400 transition">Cookie Settings</Link>
          </div>

          <div className="text-[10px] text-neutral-600">
            Website created by <a href="https://moblac.com" target="_blank" rel="nofollow noreferrer" className="hover:text-neutral-400">MOBLAC</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
