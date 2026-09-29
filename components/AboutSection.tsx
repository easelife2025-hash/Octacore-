'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Award, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenPassModal: () => void;
}

export default function AboutSection({ onOpenPassModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0C10] relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#FF5E00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl group">
              <div className="relative h-[340px] sm:h-[460px] w-full">
                <Image
                  src="/images/facility_zone.jpg"
                  alt="OCTACORE Fitness Nerul Facility Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#14161F]/90 backdrop-blur-md border border-[#FF5E00]/40 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5E00] flex items-center justify-center text-white">
                    <Award className="w-4 h-4 text-black font-bold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Top Rated in Nerul</h3>
                    <p className="text-xs text-neutral-400">4.8 Rating from 189+ Athletes</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Clean, fully air-conditioned & equipped with heavy-duty biomechanic strength equipment.
                </p>
              </div>
            </div>

            {/* Accent orange bar */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF5E00]/20 rounded-2xl -z-10 blur-xl" />
          </div>

          {/* Right Column: Editorial & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3 py-1.5 rounded-full border border-[#FF5E00]/30">
              <Target className="w-3.5 h-3.5 text-[#FF5E00]" />
              <span>About OCTACORE Fitness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              BUILT FOR RESULTS. <br />
              <span className="text-[#FF5E00]">ENGINEERED FOR POWER.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              Located in the heart of Nerul Sector 1 (near Jain Mandir), OCTACORE Fitness is Navi Mumbai’s premier fitness club. We combine an energetic, modern atmosphere with industrial-grade equipment designed to help you torch body fat, build functional strength, and elevate athletic performance.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Whether you are taking your very first step into a gym or you are an experienced lifter pushing for heavy PRs, OCTACORE provides an encouraging, zero-intimidation environment equipped with professional coaching, air-conditioned zones, and hygienic locker amenities.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Commercial Orange & Black Biomechanics',
                'Dedicated Functional Turf & Crossfit Arena',
                'Personalized Macro & Workout Guidance',
                'Flexible 17-Hour Access (6 AM – 11 PM)',
                'Clean Air-Conditioned Training Space',
                'Hygienic Showers, Lockers & Steam Room',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-neutral-200">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPassModal}
                className="px-6 py-3.5 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_20px_rgba(255,94,0,0.35)] flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Experience OCTACORE · Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="px-5 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white font-semibold text-sm rounded-lg border border-white/10 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
