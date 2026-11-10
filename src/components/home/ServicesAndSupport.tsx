import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, Truck, Bell, ArrowRight, ShieldCheck } from 'lucide-react';

export const ServicesAndSupport: React.FC = () => {
  const items = [
    {
      icon: Wrench,
      title: 'Rapid Maintenance Dispatch',
      desc: 'In-house certified technicians resolve plumbing, electrical, HVAC, and appliance needs within 1 to 2 hours.',
      link: '/services/support'
    },
    {
      icon: Home,
      title: 'Property Upgrades & Design',
      desc: 'Tailored interior styling, bespoke home office installations, and custom nursery or gym setups upon request.',
      link: '/services/support'
    },
    {
      icon: Truck,
      title: 'Executive Relocation Concierge',
      desc: 'Airport limousine pickup, international shipping handling, Greek tax (AFM) guidance, and local neighborhood orientation.',
      link: '/services/support'
    },
    {
      icon: Bell,
      title: 'VIP Hospitality Services',
      desc: 'Private chef bookings, personal training sessions, yacht charters, and VIP reservations across Athens.',
      link: '/services/support'
    }
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Comprehensive Resident Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Services & Support Ecosystem
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Every step of your residency in Athens is backed by dedicated hospitality, engineering, and concierge professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500/40 transition"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-neutral-950 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800">
                  <Link
                    to={item.link}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
