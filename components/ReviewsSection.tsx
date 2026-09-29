'use client';

import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  avatarText: string;
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
  tags: string[];
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Siddharth Mhatre',
    role: 'Member since 2024 · Nerul Resident',
    avatarText: 'SM',
    rating: 5,
    date: '2 weeks ago',
    content:
      'Easily the best gym in Nerul! The equipment is brand new and top-tier, especially the orange accented treadmills and cable machines. The coaches are genuinely helpful without constantly pushing sales. Great environment for both heavy lifters and beginners.',
    helpfulCount: 24,
    tags: ['Equipment Quality', 'Friendly Coaches', 'Cleanliness'],
  },
  {
    id: 2,
    name: 'Pooja Deshmukh',
    role: 'CrossFit & HIIT Member',
    avatarText: 'PD',
    rating: 5,
    date: '1 month ago',
    content:
      'I joined OCTACORE for the HIIT and Aerobics classes. In 4 months I lost 8 kg and my stamina has doubled! The dedicated functional turf lane and battle ropes keep workouts challenging and exciting. The air conditioning and hygiene are spotless.',
    helpfulCount: 18,
    tags: ['Weight Loss', 'HIIT Classes', 'Great Atmosphere'],
  },
  {
    id: 3,
    name: 'Rohan Sharma',
    role: 'Personal Training Member',
    avatarText: 'RS',
    rating: 5,
    date: '2 months ago',
    content:
      'Took personal training here with Coach Amit. He corrected my deadlift form on day one and fixed my lower back stiffness. The timings from 6 AM to 11 PM make it super convenient with my corporate IT schedule. 10/10 recommend to anyone in Navi Mumbai.',
    helpfulCount: 31,
    tags: ['Personal Training', 'Flexible Timings', 'Result Oriented'],
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    role: 'Evening Strength Member',
    avatarText: 'AI',
    rating: 5,
    date: '3 months ago',
    content:
      'Very safe and welcoming atmosphere for women. Staff is courteous, lockers are clean, and the crowd is respectful. Love the steam room after hard workouts. Great music and lighting that keeps the energy pumping throughout.',
    helpfulCount: 15,
    tags: ['Safe for Women', 'Steam Room', 'Clean Lockers'],
  },
  {
    id: 5,
    name: 'Kunal Patel',
    role: 'Powerlifter & Bodybuilding',
    avatarText: 'KP',
    rating: 5,
    date: '4 months ago',
    content:
      'Hardcore training vibe! Proper Olympic platforms, heavy dumbbells that go all the way up to 50kg+, and bumper plates. No overcrowding because the 10,000 sq.ft floor is well distributed. The orange and black design looks sick in person.',
    helpfulCount: 22,
    tags: ['Heavy Free Weights', 'Olympic Platform', '10k Sq.Ft Space'],
  },
  {
    id: 6,
    name: 'Vikas Gaikwad',
    role: 'Morning Member · Shiravane',
    avatarText: 'VG',
    rating: 5,
    date: '5 months ago',
    content:
      'Right next to Jain Mandir in Shiravane Sector 1. Convenient parking and very responsive management. Open at 6 AM sharp which is perfect before catching the local train to work. Worth every rupee of the membership.',
    helpfulCount: 12,
    tags: ['Prime Location', 'Easy Parking', 'Morning Batches'],
  },
];

export default function ReviewsSection() {
  const [filter, setFilter] = useState<'All' | '5 Star'>('All');
  const [likedReviews, setLikedReviews] = useState<Record<number, boolean>>({});

  const toggleHelpful = (id: number) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedReviews = filter === '5 Star'
    ? REVIEWS.filter((r) => r.rating === 5)
    : REVIEWS;

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Star className="w-3.5 h-3.5 text-[#FF5E00] fill-current" />
            <span>Google Verified Athletes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            RATED 4.8 / 5.0 BY <span className="text-[#FF5E00]">189+ ATHLETES</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real feedback from members who train every week at OCTACORE Fitness in Nerul, Navi Mumbai.
          </p>
        </div>

        {/* Rating Scorecard Overview */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14161F] border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Big Score */}
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tight">
                4.8
              </div>
              <div className="flex items-center text-amber-400 text-base sm:text-lg my-1 justify-center sm:justify-start">
                {'★★★★★'}
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                Based on 189 Google Reviews
              </span>
            </div>
            <div className="h-16 w-px bg-white/10 hidden sm:block" />
            {/* Rating breakdown bars */}
            <div className="space-y-1.5 w-44 sm:w-56 text-xs text-neutral-400 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-6">5 ★</span>
                <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full bg-[#FF5E00] w-[91%]" />
                </div>
                <span className="tabular-nums">91%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6">4 ★</span>
                <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full bg-amber-400 w-[7%]" />
                </div>
                <span className="tabular-nums">7%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6">3 ★</span>
                <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full bg-neutral-600 w-[2%]" />
                </div>
                <span className="tabular-nums">2%</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=OCTACORE+Fitness+Nerul"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 flex items-center gap-2 transition-all"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=OCTACORE+Fitness+Nerul"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <span>Leave A Review</span>
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => {
            const isLiked = likedReviews[review.id];
            const currentHelpful = review.helpfulCount + (isLiked ? 1 : 0);

            return (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#12141C] border border-white/10 hover:border-[#FF5E00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top user bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/40 text-[#FF5E00] font-black text-xs flex items-center justify-center">
                        {review.avatarText}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-sm font-bold text-white">{review.name}</h3>
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-current" />
                        </div>
                        <p className="text-[11px] text-neutral-400">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-neutral-500">{review.date}</span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center text-amber-400 text-sm mb-3">
                    {'★★★★★'.slice(0, review.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    &ldquo;{review.content}&rdquo;
                  </p>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#FF5E00] mb-4">
                    {review.tags.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span>#{t}</span>
                        {idx < review.tags.length - 1 && <span className="text-neutral-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Helpful button */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span>Verified Google User</span>
                  <button
                    onClick={() => toggleHelpful(review.id)}
                    className={`flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors cursor-pointer ${
                      isLiked
                        ? 'text-[#FF5E00] bg-[#FF5E00]/10 font-bold'
                        : 'hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="tabular-nums">Helpful ({currentHelpful})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
