'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface HeroCarouselProps {
  onOpenPassModal?: () => void;
}

interface Slide {
  id: number;
  image: string;
  tagline: string;
  headline: string;
  subheadline: string;
  accentWord: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: '/images/hero_slide_1.jpg',
    tagline: 'OCTACORE FITNESS · NERUL SECTOR 1',
    headline: 'DISCIPLINE BUILDS RESULTS',
    subheadline: 'Navi Mumbai’s premier high-performance training ground. Engineered for strength, fat loss, and athletic excellence.',
    accentWord: 'RESULTS',
  },
  {
    id: 2,
    image: '/images/hero_slide_2.jpg',
    tagline: 'METABOLIC CONDITIONING · CROSSFIT TURF',
    headline: 'PUSH YOUR LIMITS',
    subheadline: 'Break plateaus with explosive HIIT, battle ropes, sled runs, and intense coach-guided community workouts.',
    accentWord: 'LIMITS',
  },
  {
    id: 3,
    image: '/images/hero_slide_3.jpg',
    tagline: 'PREMIUM BIOMECHANICS & HEAVY STEEL',
    headline: 'STRONGER EVERY DAY',
    subheadline: 'World-class selectorized machines, dual cable towers, Olympic platforms, and free weights up to 50kg+.',
    accentWord: 'STRONGER',
  },
  {
    id: 4,
    image: '/images/hero_slide_4.jpg',
    tagline: '1-ON-1 CERTIFIED PERSONAL COACHING',
    headline: 'YOUR FITNESS. YOUR POWER.',
    subheadline: 'Transform your body with tailored hypertrophy programming, precision macro guidance, and strict form mastery.',
    accentWord: 'POWER.',
  },
];

const AUTOPLAY_INTERVAL = 5500;

export default function HeroCarousel({ onOpenPassModal }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Motivational Gym Showcase"
    >
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.headline}
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center brightness-125 contrast-105"
          />
          {/* Lighter, clearer gradient scrim to maximize gym visibility & brightness */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/85 via-transparent to-black/20" />
          {/* Subtle Orange Glow Ambient Accent */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF5E00]/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col justify-center min-h-[92vh] sm:min-h-screen">
        <div className="max-w-3xl">
          {/* Top Tagline */}
          <motion.div
            key={`tagline-${currentSlide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#FF5E00]/40 rounded-full shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5E00]">
              {currentSlide.tagline}
            </span>
          </motion.div>

          {/* Bold Motivational Headline */}
          <motion.h1
            key={`headline-${currentSlide.id}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] text-balance mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
          >
            {currentSlide.headline.split(' ').map((word, i) => {
              const isAccent = word.toUpperCase().includes(currentSlide.accentWord);
              return (
                <span
                  key={i}
                  className={isAccent ? 'text-[#FF5E00] inline-block drop-shadow-[0_0_30px_rgba(255,94,0,0.6)]' : 'inline-block mr-3'}
                >
                  {word}{' '}
                </span>
              );
            })}
          </motion.h1>

          {/* Clean WhatsApp CTA Button */}
          <motion.div
            key={`cta-whatsapp-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%20Nerul%2C%20I%20want%20to%20know%20more%20about%20gym%20membership%20and%20claim%20my%20free%20trial%20pass."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              <span>WhatsApp Us Now</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">
        {/* Slide Progress Indicators */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                className="group relative flex flex-col items-start p-1 cursor-pointer focus:outline-none"
              >
                <div
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'w-10 sm:w-16 bg-neutral-800'
                      : 'w-4 sm:w-6 bg-white/20 group-hover:bg-white/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '100%' : '100%' }}
                      transition={{
                        duration: AUTOPLAY_INTERVAL / 1000,
                        ease: 'linear',
                        repeat: 0,
                      }}
                      className="h-full bg-[#FF5E00]"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Carousel Arrow Controls & Play/Pause */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
          >
            {isPaused ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <Pause className="w-4 h-4 fill-current" />}
          </button>
          <button
            onClick={prevSlide}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
