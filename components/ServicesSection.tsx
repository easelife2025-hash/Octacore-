'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Heart, Flame, UserCheck, Dumbbell, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
  intensity: 'High' | 'Very High' | 'Customized' | 'Moderate to High';
  duration: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'hiit',
    title: 'HIIT Exercise Classes',
    badge: 'FAT LOSS & ENDURANCE',
    shortDesc: 'Explosive high-intensity intervals combining battle ropes, plyometrics, assault bikes, and sprints for maximum afterburn.',
    fullDesc: 'Our HIIT protocol is scientifically structured to push your heart rate into anaerobic zones, stimulating the excess post-exercise oxygen consumption (EPOC) effect so your body continues burning calories for hours post-workout.',
    image: '/images/hero_slide_2.jpg',
    icon: Flame,
    highlights: ['Torches 600–900 kcal/session', 'Assault bikes, rowers & ropes', 'Heart-rate guided pacing', 'All fitness levels welcome'],
    intensity: 'Very High',
    duration: '45 mins',
  },
  {
    id: 'aerobics',
    title: 'Aerobics & Cardio Blast',
    badge: 'RHYTHM & CARDIO STAMINA',
    shortDesc: 'Upbeat group cardio sessions set to motivating music that elevate stamina, burn calories, and improve agility.',
    fullDesc: 'Aerobics at OCTACORE fuses rhythmic floor routines, step choreography, and high-energy dynamic aerobics. Perfect for shedding stress, boosting cardiovascular endurance, and training alongside motivating gym peers.',
    image: '/images/gallery_aerobics.jpg',
    icon: Heart,
    highlights: ['High-energy music & rhythm', 'Improves cardiovascular capacity', 'Low-impact options available', 'Great for all ages & beginners'],
    intensity: 'Moderate to High',
    duration: '50 mins',
  },
  {
    id: 'crossfit',
    title: 'CrossFit & Functional Training',
    badge: 'FUNCTIONAL POWER',
    shortDesc: 'Constantly varied functional movements executed at intensity: sled pushes, tire flips, kettlebells, and gymnastics.',
    fullDesc: 'Build real-world athleticism on our custom indoor turf. Our CrossFit programming scales to your personal ability while challenging your grip strength, core stability, VO2 max, and total-body power output.',
    image: '/images/facility_zone.jpg',
    icon: Zap,
    highlights: ['Sled runs & turf drills', 'Kettlebell & barbell complexes', 'Scaled for beginners to pros', 'Builds functional raw power'],
    intensity: 'High',
    duration: '60 mins',
  },
  {
    id: 'personal-training',
    title: '1-on-1 Personal Training',
    badge: 'INDIVIDUAL RESULTS',
    shortDesc: 'Dedicated certified coach tailored to your unique anatomy, target goals, diet requirements, and schedule.',
    fullDesc: 'Eliminate guesswork with OCTACORE’s premier 1-on-1 personal coaching. We assess posture and movement patterns, create periodized resistance cycles, track weekly body composition, and prescribe actionable nutrition protocols.',
    image: '/images/gallery_coach_pt.jpg',
    icon: UserCheck,
    highlights: ['Certified biomechanics coaches', 'Customized nutrition macros', 'Strict form & injury prevention', 'Bi-weekly body fat scanning'],
    intensity: 'Customized',
    duration: '60 mins',
  },
  {
    id: 'weight-training',
    title: 'Weight Training & Bodybuilding',
    badge: 'HYPERTROPHY & PEAK STRENGTH',
    shortDesc: 'Heavy-duty steel, Olympic platforms, multi-angle benches, selectorized machines, and free weights up to 50kg+.',
    fullDesc: 'Whether your objective is raw powerlifting totals or classic muscular hypertrophy, our strength floor is stocked with precision biomechanic machines, calibrated steel plates, heavy dumbbells, and Olympic lifting platforms.',
    image: '/images/gallery_weights.jpg',
    icon: Dumbbell,
    highlights: ['Olympic platforms & power cages', 'Dumbbells from 2.5kg to 50kg+', 'Isolateral plate-loaded units', 'Dual adjustable cable stations'],
    intensity: 'High',
    duration: '60–75 mins',
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0E1017] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Targeted Training Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            SPECIALIZED <span className="text-[#FF5E00]">FITNESS SERVICES</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From high-calorie burn HIIT classes to heavy Olympic iron and 1-on-1 personal coaching, OCTACORE offers elite modalities tailored for every fitness journey in Nerul.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[#14161F] border border-white/10 hover:border-[#FF5E00]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(255,94,0,0.15)] ${
                  isLarge ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161F] via-[#14161F]/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-[#FF5E00]/40 px-2.5 py-1 rounded text-[11px] font-bold tracking-wider text-[#FF5E00] uppercase">
                    {service.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-semibold text-neutral-300">
                    {service.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] shrink-0">
                        <Icon className="w-5 h-5 text-[#FF5E00]" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#FF5E00] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF5E00]/20 hover:bg-[#FF5E00] text-[#FF5E00] hover:text-white border border-[#FF5E00]/40 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>Book Free Trial</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#14161F] border border-[#FF5E00]/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-lg p-2 rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[#FF5E00] flex items-center justify-center text-black font-bold">
                {React.createElement(selectedService.icon, { className: 'w-6 h-6 text-black' })}
              </span>
              <div>
                <span className="text-[11px] font-bold text-[#FF5E00] uppercase tracking-wider block">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-neutral-900/80 border border-white/5">
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Session Duration</span>
                <span className="text-sm font-bold text-white">{selectedService.duration}</span>
              </div>
              <div>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Intensity Level</span>
                <span className="text-sm font-bold text-[#FF5E00]">{selectedService.intensity}</span>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">Key Program Benefits:</span>
              {selectedService.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-[#FF5E00]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const sTitle = selectedService.title;
                  setSelectedService(null);
                  onSelectService(sTitle);
                }}
                className="w-full sm:flex-1 py-3 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg transition-colors cursor-pointer text-center"
              >
                Claim Free Trial For This Class
              </button>
              <a
                href={`https://wa.me/919069819090?text=${encodeURIComponent(
                  `Hi OCTACORE Fitness Nerul! I am interested in ${selectedService.title}. Please share batch timings and details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
