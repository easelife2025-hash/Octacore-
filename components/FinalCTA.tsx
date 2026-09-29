'use client';

import React from 'react';
import { Flame, Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface FinalCTAProps {
  onOpenPassModal: () => void;
}

export default function FinalCTA({ onOpenPassModal }: FinalCTAProps) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#0E1017] to-black relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5E00]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/15 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-6">
          <Flame className="w-3.5 h-3.5 text-[#FF5E00] fill-current" />
          <span>Transform With OCTACORE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
          STOP WAITING. <br />
          <span className="text-[#FF5E00] drop-shadow-[0_0_25px_rgba(255,94,0,0.4)]">
            YOUR TRANSFORMATION STARTS TODAY.
          </span>
        </h2>

        <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-pretty">
          Whether you want to build heavy strength, drop stubborn body fat, or master functional movement, OCTACORE Fitness in Nerul gives you the equipment, coaching, and atmosphere to achieve results.
        </p>

        {/* 3 Call to Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenPassModal}
            className="px-8 py-4 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_30px_rgba(255,94,0,0.5)] hover:shadow-[0_6px_35px_rgba(255,94,0,0.7)] flex items-center gap-2.5 active:scale-95 cursor-pointer"
          >
            <span>Claim Free 1-Day VIP Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:09069819090"
            className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#FF5E00]" />
            <span>Call 090698 19090</span>
          </a>

          <a
            href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%20Nerul%2C%20I%20am%20ready%20to%20join%20the%20gym.%20Please%20guide%20me%20with%20membership%20options."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Micro reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
          <span>✓ Instant Access</span>
          <span>·</span>
          <span>✓ Free Coach Consultation</span>
          <span>·</span>
          <span>✓ No Lock-in Contracts</span>
          <span>·</span>
          <span>✓ Sector 1, Shiravane, Nerul</span>
        </div>
      </div>
    </section>
  );
}
