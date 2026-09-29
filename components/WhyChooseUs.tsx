'use client';

import React from 'react';
import { Dumbbell, Clock, ShieldCheck, Sparkles, ShowerHead, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const PILLARS = [
    {
      icon: Dumbbell,
      title: 'Heavy Biomechanics',
      description: 'Industrial-grade plate-loaded machines, Olympic platforms, and dumbbells up to 50kg with biomechanic precision.',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Master Coaches',
      description: 'Nationally certified personal trainers dedicated to injury-free form, progressive overload, and real body transformations.',
    },
    {
      icon: Clock,
      title: '17-Hour Daily Access',
      description: 'Open 6:00 AM to 11:00 PM Monday through Saturday (Sunday 7–11 AM) so your fitness routine fits your life schedule.',
    },
    {
      icon: Sparkles,
      title: 'Spotless & Air-Conditioned',
      description: 'Fresh climate control, hospital-grade daily equipment sanitization, and generous workout floor spacing.',
    },
    {
      icon: ShowerHead,
      title: 'Steam & Luxury Lockers',
      description: 'Premium post-workout recovery with dedicated steam rooms, hot showers, private dressing areas, and secure lockers.',
    },
    {
      icon: Users,
      title: 'Inspiring Culture',
      description: 'A motivating, respectful, and energetic community where beginners and advanced athletes train side-by-side.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>The OCTACORE Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            WHY NERUL CHOOSES <span className="text-[#FF5E00]">OCTACORE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We don’t compromise on equipment quality, coach education, or gym hygiene. Here is why over 500+ active members call OCTACORE their training home.
          </p>
        </div>

        {/* 6 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#12141C] border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300 group hover:shadow-[0_8px_25px_rgba(255,94,0,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] mb-6 group-hover:bg-[#FF5E00] group-hover:text-black transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-[#FF5E00] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-neutral-500 text-xs font-semibold">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-[#FF5E00]">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
