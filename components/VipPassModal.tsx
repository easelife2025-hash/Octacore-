'use client';

import React, { useState } from 'react';
import { X, Flame, Check, Phone, Calendar, Clock, User } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface VipPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function VipPassModal({ isOpen, onClose, initialService }: VipPassModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'HIIT Exercise Classes',
    preferredDate: '',
    timeSlot: 'Morning (06:00 AM – 09:00 AM)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = `Hi OCTACORE Fitness Nerul! I have claimed my 1-Day VIP Pass.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nSlot: ${formData.timeSlot}\nDate: ${formData.preferredDate || 'Tomorrow'}`;
    const url = `https://wa.me/919069819090?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#14161F] border border-[#FF5E00]/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close pass modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/40 text-[#FF5E00] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E00] block">
              Pass Confirmed · Free Admission
            </span>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              YOUR 1-DAY VIP PASS IS READY!
            </h3>

            <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Athlete Name:</span>
                <span className="text-white font-bold">{formData.name}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Registered Mobile:</span>
                <span className="text-[#FF5E00] font-bold tabular-nums">{formData.phone}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Program:</span>
                <span className="text-white font-bold">{formData.service}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Time Preference:</span>
                <span className="text-white font-bold">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between text-neutral-400 pt-1 border-t border-white/10">
                <span>Location:</span>
                <span className="text-neutral-200">Sector 1 Shiravane, Nerul</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Show this digital receipt at the reception desk when you arrive. Our coaches will set you up with workout gear, a locker, and gym tour.
            </p>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Confirm VIP Pass on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#FF5E00]">
              <Flame className="w-5 h-5 fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Complimentary 1-Day VIP Pass
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
              CLAIM YOUR PASS
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Experience OCTACORE Fitness with full access to machines, group classes, and coach guidance. No payment required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF5E00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF5E00] transition-colors tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1">
                    Select Focus Program
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5E00] transition-colors"
                  >
                    <option>HIIT Exercise Classes</option>
                    <option>Aerobics & Cardio</option>
                    <option>CrossFit & Functional</option>
                    <option>1-on-1 Personal Training</option>
                    <option>Weight Training & Strength</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5E00] transition-colors"
                    >
                      <option>Morning (06:00 – 09:00 AM)</option>
                      <option>Midday (11:00 AM – 03:00 PM)</option>
                      <option>Evening (05:00 – 08:30 PM)</option>
                      <option>Night (08:30 – 11:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-1">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF5E00] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_20px_rgba(255,94,0,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Generate Instant VIP Pass</span>
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                🔒 Valid for 1 free entry at OCTACORE Fitness, Nerul Sector 1.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
