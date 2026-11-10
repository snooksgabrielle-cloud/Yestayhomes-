import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/properties.ts';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Executive Rental Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">
            Contact YESTAY Homes Athens
          </h1>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our Athens residential team is ready to assist with apartment viewings, bespoke corporate housing arrangements, and property onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-white text-base">Athens Office</h3>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href="tel:+302103486606" className="hover:text-amber-300 transition">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@yestayhomes.com" className="hover:text-amber-300 transition">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl space-y-2 text-xs text-neutral-400">
              <h4 className="font-bold text-white">Emergency Concierge Hotline</h4>
              <p>For active in-house residents requiring urgent engineering or lock support, our line is manned 24/7.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. A senior YESTAY residential consultant will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-xl transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Send Us an Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean-Luc Godard"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@company.eu"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30 690 000 0000"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                    >
                      <option value="Executive Rental Inquiry">Executive Rental Inquiry</option>
                      <option value="Corporate Relocation Account">Corporate Relocation Account</option>
                      <option value="Property Owner Partnership">Property Owner Partnership</option>
                      <option value="Car Leasing Inquiry">Car Leasing Inquiry</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-400 mb-1">How can we assist you?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about dates, preferred districts, number of bedrooms, or property location..."
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-neutral-500">
                    We reply within 2 hours during Greek business hours.
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
