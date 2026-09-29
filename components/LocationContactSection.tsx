'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Copy, Check, Navigation, Send, Clock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function LocationContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Muscle Building & Hypertrophy',
    timeSlot: 'Morning (06:00 AM – 10:00 AM)',
    message: '',
  });

  const fullAddress =
    '22WC+52H, Plot No. 781, near Jain Mandir, Sector 1, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706';

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi OCTACORE Fitness Nerul! My name is ${formData.name}. Phone: ${formData.phone}. Goal: ${formData.goal}. Preferred time: ${formData.timeSlot}. Notes: ${formData.message || 'None'}`;
    const url = `https://wa.me/919069819090?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Find & Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            VISIT <span className="text-[#FF5E00]">OCTACORE NERUL</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Sector 1 Shiravane, Nerul near Jain Mandir. Drop in for a walkthrough, start your trial, or reach out to our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Location Details & Map Preview */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14161F] border border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#FF5E00] uppercase tracking-wider block mb-1">
                    Official Location
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">OCTACORE Fitness, Nerul</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {fullAddress}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=22WC%2B52H+Plot+No+781+near+Jain+Mandir+Sector+1+Shiravane+Nerul+Navi+Mumbai+400706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={copyAddress}
                  className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs rounded-lg border border-white/10 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>

            {/* Quick Contact Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:09069819090"
                className="p-5 rounded-xl bg-[#14161F] border border-white/10 hover:border-[#FF5E00]/50 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] group-hover:bg-[#FF5E00] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Direct Reception</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#FF5E00] transition-colors tabular-nums">
                    090698 19090
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%2C%20I%20am%20interested%20in%20visiting%20the%20gym."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#14161F] border border-white/10 hover:border-[#25D366]/50 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors shrink-0">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Instant WhatsApp</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors tabular-nums">
                    +91 90698 19090
                  </span>
                </div>
              </a>
            </div>

            {/* Styled Map Preview Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#14161F] h-64 sm:h-72">
              <iframe
                title="OCTACORE Fitness Nerul Location Map"
                src="https://maps.google.com/maps?q=19.0345,73.0182&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-neutral-200">
                📍 Sector 1, Shiravane, Nerul · 1.2 km from Nerul Station
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14161F] border border-white/10 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#FF5E00] uppercase tracking-wider block mb-1">
                  Connect With Us
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Book A Facility Tour & Free Trial
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Fill in your details below. Our fitness counsellor will call or WhatsApp you within 15 minutes.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase">Inquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your free trial pass is generated. Our coaching desk will contact you at <strong className="text-[#FF5E00]">{formData.phone}</strong>.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Chat on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          goal: 'Muscle Building & Hypertrophy',
                          timeSlot: 'Morning (06:00 AM – 10:00 AM)',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 bg-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF5E00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9876543210 (10 digits)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF5E00] transition-colors tabular-nums"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-3 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00] transition-colors"
                      >
                        <option>Fat Loss & Toning</option>
                        <option>Muscle Building & Hypertrophy</option>
                        <option>CrossFit & Functional Stamina</option>
                        <option>HIIT & Cardio Endurance</option>
                        <option>1-on-1 Personal Training</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                        Preferred Workout Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3 py-3 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF5E00] transition-colors"
                      >
                        <option>Morning (06:00 AM – 10:00 AM)</option>
                        <option>Mid-Day (11:00 AM – 04:00 PM)</option>
                        <option>Evening (05:00 PM – 08:30 PM)</option>
                        <option>Night (08:30 PM – 11:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                      Any Questions or Specific Requirements? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Interested in personal trainer charges, current student discounts..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF5E00] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_20px_rgba(255,94,0,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Claim Free 1-Day VIP Pass Now</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF5E00]" />
                    <span>100% Free · No spam · Instant confirmation</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
