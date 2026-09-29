'use client';

import React from 'react';
import { Flame, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface FooterProps {
  onOpenPassModal: () => void;
}

export default function Footer({ onOpenPassModal }: FooterProps) {
  return (
    <footer className="bg-[#08090D] border-t border-white/10 text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Wordmark & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-[#FF5E00] flex items-center justify-center text-black font-black text-lg shadow-[0_0_15px_rgba(255,94,0,0.4)]">
                <Flame className="w-5 h-5 text-black fill-current" />
              </span>
              <span className="text-xl font-black tracking-wider text-white uppercase">
                OCTACORE <span className="text-[#FF5E00]">FITNESS</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Navi Mumbai’s premier high-performance fitness center located in Nerul Sector 1. Built with commercial biomechanics equipment, dedicated turf, and certified coaches to forge real physical transformations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OCTACORE on Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FF5E00] hover:border-[#FF5E00]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OCTACORE on Facebook"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FF5E00] hover:border-[#FF5E00]/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OCTACORE on YouTube"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#FF5E00] hover:border-[#FF5E00]/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-[#FF5E00] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">Services & Classes</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FF5E00] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#FF5E00] transition-colors">Class Timetable</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#FF5E00] transition-colors">BMI Calculator</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF5E00] transition-colors">Gym Photo Tour</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF5E00] transition-colors">Athlete Reviews</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Training</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">HIIT Classes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">Aerobics Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">CrossFit & Turf</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">Personal Training</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E00] transition-colors">Weight Training</a>
              </li>
              <li>
                <button
                  onClick={onOpenPassModal}
                  className="text-[#FF5E00] hover:underline font-bold text-left cursor-pointer"
                >
                  Free 1-Day VIP Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Location & Timings</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  22WC+52H, Plot No. 781, near Jain Mandir, Sector 1, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5E00] shrink-0" />
                <a href="tel:09069819090" className="text-neutral-200 hover:text-[#FF5E00] tabular-nums font-semibold">
                  090698 19090
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919069819090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-[#25D366] tabular-nums font-semibold"
                >
                  WhatsApp: +91 90698 19090
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                <div className="text-neutral-300 space-y-0.5">
                  <p>Mon – Sat: 6:00 AM – 11:00 PM</p>
                  <p>Sunday: 7:00 AM – 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} OCTACORE Fitness Nerul. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Nerul Sector 1 · Navi Mumbai</span>
            <span>·</span>
            <span>Google Rating 4.8 ★</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
