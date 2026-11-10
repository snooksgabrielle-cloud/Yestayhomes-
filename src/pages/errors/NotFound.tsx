import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 min-h-[60vh] bg-neutral-950 text-neutral-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl font-black text-white">Residence Not Found</h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            The page or property ID you are looking for has been relocated or is currently occupied under an active executive lease.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/rentals"
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Browse All Rentals</span>
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
