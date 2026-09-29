'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Flame } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface NavbarProps {
  onOpenPassModal: () => void;
}

export default function Navbar({ onOpenPassModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Hours', href: '#hours' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-gradient-to-b from-[#0B0C10]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group tracking-tight"
            aria-label="OCTACORE Fitness Homepage"
          >
            <span className="w-8 h-8 rounded-lg bg-[#FF5E00] flex items-center justify-center text-black font-black text-lg shadow-[0_0_15px_rgba(255,94,0,0.4)] group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-black fill-current" />
            </span>
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase">
              OCTACORE <span className="text-[#FF5E00]">FITNESS</span>
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold tracking-wide uppercase text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FF5E00] transition-colors relative py-1 text-xs xl:text-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5E00] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%2C%20I%20want%20to%20know%20more%20about%20gym%20membership."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-bold text-[#25D366] hover:text-white bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-md transition-colors whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:09069819090"
              className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-bold text-neutral-200 hover:text-[#FF5E00] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5E00]" />
              <span className="tabular-nums">090698 19090</span>
            </a>
            <button
              onClick={onOpenPassModal}
              className="px-3.5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF5E00] hover:bg-[#FF7A1A] rounded-md transition-all shadow-[0_4px_16px_rgba(255,94,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,94,0,0.45)] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPassModal}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5E00] rounded transition-all whitespace-nowrap cursor-pointer"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF5E00] rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-3/4 max-w-sm bg-[#111319] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4 pt-2">
              <div className="text-xs uppercase tracking-widest text-[#FF5E00] font-bold pb-2 border-b border-white/10">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold uppercase tracking-wider text-neutral-200 hover:text-[#FF5E00] py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%2C%20I%20want%20to%20know%20more%20about%20gym%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 rounded-md border border-[#25D366]/40"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:09069819090"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-neutral-800 hover:bg-neutral-700 rounded-md border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#FF5E00]" />
                <span>Call 090698 19090</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPassModal();
                }}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider text-black bg-[#FF5E00] hover:bg-[#FF7A1A] rounded-md transition-colors"
              >
                Claim Free VIP Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
