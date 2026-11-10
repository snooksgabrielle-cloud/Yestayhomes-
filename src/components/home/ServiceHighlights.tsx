import React from 'react';
import { Wifi, Sparkles, Coffee, Headset, Zap, ShieldCheck } from 'lucide-react';

export const ServiceHighlights: React.FC = () => {
  const services = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Fiber WiFi',
      desc: 'Dedicated private fiber connection (300–500 Mbps) with enterprise mesh WiFi, designed for heavy video conferencing and remote workflows.'
    },
    {
      icon: Sparkles,
      title: 'Bi-Weekly Housekeeping',
      desc: 'Scheduled professional cleaning with hotel-grade linen changes, fresh towels, sanitization, and eco-friendly products.'
    },
    {
      icon: Zap,
      title: 'Zero Utility Surprises',
      desc: 'Electricity, air conditioning, heating, municipal taxes, building charges, and water are 100% bundled in your fixed lease price.'
    },
    {
      icon: Coffee,
      title: 'Chef Kitchens & Nespresso',
      desc: 'Full-sized appliances, ovens, dishwashers, induction cooktops, cookware, and barista coffee stations ready from day one.'
    },
    {
      icon: Headset,
      title: '24/7 Dedicated Concierge',
      desc: 'On-demand local assistance for airport transfers, package handling, restaurant bookings, and emergency technical support.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private Access',
      desc: 'Digital smart locks, video intercom systems, safe residential quarters, and underground or off-street secure parking options.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            All-Inclusive Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Executive Services Included in Every Home
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Experience hotel-level pampering combined with the privacy, space, and independence of your own luxury Athens residence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-neutral-900 border border-neutral-800/90 hover:border-amber-500/40 p-6 rounded-2xl transition duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-neutral-950 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-amber-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
