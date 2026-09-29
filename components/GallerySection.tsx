'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'Strength' | 'Cardio' | 'Functional' | 'Studio';
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 2,
    src: '/images/hero_slide_1.jpg',
    title: 'Olympic Deadlift & Barbell Station',
    category: 'Strength',
    description: 'Calibrated steel and bumper plates on dedicated heavy shock-resistant rubber platforms.',
  },
  {
    id: 3,
    src: '/images/gallery_weights.jpg',
    title: 'Steel Dumbbells Arsenal',
    category: 'Strength',
    description: 'Precision knurled dumbbell pairs ranging from 2.5kg up to 50kg+ on dual-tier racks.',
  },
  {
    id: 4,
    src: '/images/facility_zone.jpg',
    title: 'CrossFit Functional Turf & Rig',
    category: 'Functional',
    description: 'Custom indoor turf lane for heavy sled pushes, kettlebells, and gymnastics movements.',
  },
  {
    id: 5,
    src: '/images/gallery_coach_pt.jpg',
    title: '1-on-1 Biomechanics Personal Coaching',
    category: 'Studio',
    description: 'Certified coaches providing real-time form correction, bar path tracking, and encouragement.',
  },
];

const CATEGORIES = ['All', 'Strength', 'Functional', 'Studio'] as const;

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0E1017] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Facility Tour</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            INSIDE <span className="text-[#FF5E00]">OCTACORE NERUL</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Take a look inside our modern 10,000+ sq.ft training facility. High-end equipment, clean spaces, and motivating athletic aesthetics.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#FF5E00] text-black shadow-md shadow-[#FF5E00]/30'
                  : 'bg-[#14161F] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-white/5'
              }`}
            >
              {cat === 'All' ? 'All Spaces' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/10 hover:border-[#FF5E00]/60 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#FF5E00]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E00] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide leading-snug group-hover:text-[#FF5E00] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/60 border border-white/20 hover:bg-black/90 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/60 border border-white/20 hover:bg-black/90 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <Image
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E00]">
                {filteredItems[selectedPhotoIndex].category} · Photo {selectedPhotoIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-xl font-bold text-white uppercase mt-1">
                {filteredItems[selectedPhotoIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                {filteredItems[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
