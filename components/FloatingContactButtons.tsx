'use client';

import React from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Quick Contact Actions"
    >
      {/* Call Button */}
      <a
        href="tel:09069819090"
        aria-label="Call OCTACORE Fitness Reception"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF5E00] hover:bg-[#FF7A1A] text-white shadow-[0_4px_20px_rgba(255,94,0,0.5)] transition-all duration-300 hover:scale-108 active:scale-95"
      >
        {/* Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10">
          Call: 090698 19090
        </span>
        {/* Phone SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%20Nerul%2C%20I%20am%20interested%20in%20joining%20the%20gym.%20Please%20share%20membership%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OCTACORE Fitness on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-108 active:scale-95"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-semibold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/10">
          Chat on WhatsApp
        </span>

        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
