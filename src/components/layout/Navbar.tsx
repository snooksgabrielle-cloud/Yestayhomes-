import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Globe,
  MapPin,
  Building,
  Car,
  Wrench,
  Shield,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/properties.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rentalsDropdownOpen, setRentalsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur border-b border-neutral-800/80">
      {/* Top Header Bar */}
      <div className="bg-neutral-900 border-b border-neutral-800/60 text-[11px] text-neutral-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>All-Inclusive Serviced Residences Athens</span>
            </span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <span className="hidden md:inline text-neutral-400">Zero Utility Bills • High-Speed Fiber Internet • Bi-Weekly Cleaning</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href="tel:+302103486606"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center font-serif font-black text-neutral-950 text-xl shadow-lg shadow-amber-500/10 group-hover:scale-105 transition">
              Y
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-widest text-white leading-tight font-sans">
                YESTAY
              </div>
              <div className="text-[10px] tracking-widest text-amber-400 font-medium font-mono uppercase">
                Athens Homes
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-300">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg transition ${
                isActive('/') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
              }`}
            >
              Home
            </Link>

            {/* Rentals Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setRentalsDropdownOpen(true)}
              onMouseLeave={() => setRentalsDropdownOpen(false)}
            >
              <Link
                to="/rentals"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition ${
                  isActive('/rentals') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <span>Rentals</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {rentalsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-neutral-900 border border-neutral-800 rounded-2xl p-3 shadow-2xl space-y-1">
                  <Link
                    to="/rentals"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-neutral-800 transition text-white font-semibold text-xs"
                    onClick={() => setRentalsDropdownOpen(false)}
                  >
                    <Building className="w-4 h-4 text-amber-400" />
                    <div>
                      <div>All Apartments in Athens</div>
                      <div className="text-[11px] font-normal text-neutral-400">View complete directory</div>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-neutral-800/80">
                    <span className="text-[10px] uppercase font-bold text-neutral-500 px-2 tracking-wider">
                      Popular Neighborhoods
                    </span>

                    <Link
                      to="/rentals/city-center"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800/80 transition text-xs text-neutral-200"
                      onClick={() => setRentalsDropdownOpen(false)}
                    >
                      <span>City Center (Akropoli, Kolonaki)</span>
                      <span className="text-[10px] text-amber-400">55+</span>
                    </Link>

                    <Link
                      to="/rentals/south-suburbs"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800/80 transition text-xs text-neutral-200"
                      onClick={() => setRentalsDropdownOpen(false)}
                    >
                      <span>South Suburbs (Glyfada, Riviera)</span>
                      <span className="text-[10px] text-amber-400">90+</span>
                    </Link>

                    <Link
                      to="/rentals/north-suburbs"
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800/80 transition text-xs text-neutral-200"
                      onClick={() => setRentalsDropdownOpen(false)}
                    >
                      <span>North Suburbs (Marousi, Kifisia)</span>
                      <span className="text-[10px] text-amber-400">90+</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg transition ${
                isActive('/about') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
              }`}
            >
              About
            </Link>

            <Link
              to="/property-owners"
              className={`px-3.5 py-2 rounded-lg transition ${
                isActive('/property-owners') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
              }`}
            >
              Property Owners
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition ${
                  isActive('/services') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-neutral-900 border border-neutral-800 rounded-2xl p-2.5 shadow-2xl space-y-1">
                  <Link
                    to="/services/car-leasing"
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-neutral-800 transition text-xs text-neutral-200"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Car className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-semibold text-white">Car Leasing Partner</div>
                      <div className="text-[10px] text-neutral-400">Executive EV & hybrid vehicles</div>
                    </div>
                  </Link>

                  <Link
                    to="/services/support"
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-neutral-800 transition text-xs text-neutral-200"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Wrench className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-semibold text-white">Services & Support</div>
                      <div className="text-[10px] text-neutral-400">Maintenance & upgrades</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg transition ${
                isActive('/contact') ? 'text-amber-400 font-semibold bg-neutral-900' : 'hover:text-white hover:bg-neutral-900/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wide shadow-md transition"
            >
              Request Stay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 rounded-xl border border-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              Home
            </Link>
            <Link
              to="/rentals"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              Rentals Directory
            </Link>
            <div className="pl-4 space-y-1 text-xs text-neutral-400 border-l border-neutral-800 my-1">
              <Link to="/rentals/city-center" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-amber-400">
                City Center
              </Link>
              <Link to="/rentals/south-suburbs" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-amber-400">
                South Suburbs (Riviera)
              </Link>
              <Link to="/rentals/north-suburbs" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-amber-400">
                North Suburbs
              </Link>
            </div>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              About YESTAY
            </Link>
            <Link
              to="/property-owners"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              For Property Owners
            </Link>
            <Link
              to="/services/car-leasing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              Car Leasing Partner
            </Link>
            <Link
              to="/services/support"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              Services & Support
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-900 text-neutral-200"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-amber-500 text-neutral-950 font-bold text-xs rounded-xl"
            >
              Request Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
