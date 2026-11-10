import React, { useState } from 'react';
import { Car, Zap, Shield, CheckCircle2, ArrowRight, Calendar, Send } from 'lucide-react';

export default function CarLeasing() {
  const [submitted, setSubmitted] = useState(false);
  const [carClass, setCarClass] = useState('tesla-model-3');

  const fleet = [
    {
      id: 'tesla-model-3',
      name: 'Tesla Model 3 Long Range',
      type: '100% Electric Executive Sedan',
      range: '629 km Range',
      price: '€650 / month',
      features: ['Autopilot', 'Supercharger Access', 'Free Home Charging Box Installed', 'Zero Greek City Center Road Taxes'],
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mercedes-c300e',
      name: 'Mercedes-Benz C300e Plug-in Hybrid',
      type: 'Luxury Executive Saloon',
      range: '100 km Pure EV + Unlimited Hybrid',
      price: '€820 / month',
      features: ['Leather Nappa Interior', 'Burmester Surround Sound', 'Full Concierge Maintenance', 'Comprehensive Insurance'],
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bmw-ix3',
      name: 'BMW iX3 Premier Edition',
      type: 'Full-Size Luxury Electric SUV',
      range: '460 km Range',
      price: '€950 / month',
      features: ['Panoramic Glass Roof', 'Large Luggage Capacity for Riviera Trips', 'EV Wallbox Included', '24/7 Roadside Assistance'],
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Leasing Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            Executive Car Leasing Partner
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Enhance your stay in Greece with a dedicated executive electric or hybrid vehicle. Delivered seamlessly to your YESTAY residence parking or upon your arrival at Athens International Airport (ATH).
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car) => (
            <div
              key={car.id}
              className={`bg-neutral-900 border rounded-3xl overflow-hidden flex flex-col justify-between transition ${
                carClass === car.id ? 'border-amber-400 ring-2 ring-amber-500/20' : 'border-neutral-800'
              }`}
            >
              <div className="aspect-[16/10] bg-neutral-950 overflow-hidden relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-neutral-950/80 text-amber-300 border border-amber-500/30">
                  {car.range}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-amber-400 font-semibold">{car.type}</div>
                  <h3 className="text-lg font-bold text-white mt-1">{car.name}</h3>
                  <div className="text-xl font-extrabold text-amber-400 mt-2">{car.price}</div>

                  <div className="space-y-1.5 mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                    {car.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setCarClass(car.id)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition ${
                    carClass === car.id
                      ? 'bg-amber-500 text-neutral-950'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                  }`}
                >
                  {carClass === car.id ? 'Selected Vehicle' : 'Select for Lease'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Car Lease Inquiry Sent</h3>
              <p className="text-xs text-neutral-300">
                Our mobility coordinator will reach out with the vehicle confirmation and contract paperwork.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Request Vehicle Package</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Christian Dior"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="christian@company.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Delivery Location</label>
                  <select className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400">
                    <option>At YESTAY Residence Parking</option>
                    <option>Athens International Airport (ATH)</option>
                    <option>Piraeus / Flisvos Marina</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Lease Length</label>
                  <select className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white outline-none focus:border-amber-400">
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>12 Months</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Mobility Lease Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
