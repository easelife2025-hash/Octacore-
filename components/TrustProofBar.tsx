'use client';

import React, { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Users, Dumbbell } from 'lucide-react';

export default function TrustProofBar() {
  const [gymStatus, setGymStatus] = useState<{ isOpen: boolean; text: string }>({
    isOpen: true,
    text: 'Open Today · Closes 11:00 PM',
  });

  useEffect(() => {
    // Calculate live status according to India Standard Time (IST, UTC+5:30)
    const checkStatus = () => {
      const now = new Date();
      // IST offset: UTC + 5.5 hours
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      if (day === 0) {
        // Sunday: 7:00 AM (420 min) to 11:00 AM (660 min)
        if (timeInMinutes >= 420 && timeInMinutes < 660) {
          setGymStatus({ isOpen: true, text: 'Open Now · Closes 11:00 AM' });
        } else {
          setGymStatus({ isOpen: false, text: 'Closed Now · Opens Sunday 7:00 AM' });
        }
      } else {
        // Mon-Sat: 6:00 AM (360 min) to 11:00 PM (1380 min)
        if (timeInMinutes >= 360 && timeInMinutes < 1380) {
          setGymStatus({ isOpen: true, text: 'Open Now · Closes 11:00 PM' });
        } else {
          setGymStatus({ isOpen: false, text: 'Closed Now · Opens Mon–Sat 6:00 AM' });
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#111319] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {/* Stat 1: Google Rating */}
          <div className="flex items-center gap-3.5 pr-2">
            <div className="w-11 h-11 rounded-lg bg-[#FF5E00]/10 border border-[#FF5E00]/30 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#FF5E00] fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-white tabular-nums">4.8</span>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <p className="text-xs text-neutral-400 font-medium">189+ Google Reviews</p>
            </div>
          </div>

          {/* Stat 2: Space & Equipment */}
          <div className="flex items-center gap-3.5 sm:pl-6 pr-2 pt-3 sm:pt-0">
            <div className="w-11 h-11 rounded-lg bg-[#FF5E00]/10 border border-[#FF5E00]/30 flex items-center justify-center shrink-0">
              <Dumbbell className="w-5 h-5 text-[#FF5E00]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white tabular-nums">10,000+</span>
              <p className="text-xs text-neutral-400 font-medium">Sq. Ft. Training Arena</p>
            </div>
          </div>

          {/* Stat 3: Timings & Live Status */}
          <div className="flex items-center gap-3.5 sm:pl-6 pr-2 pt-3 sm:pt-0">
            <div className="w-11 h-11 rounded-lg bg-[#FF5E00]/10 border border-[#FF5E00]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#FF5E00]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    gymStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                  }`}
                />
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {gymStatus.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-medium tabular-nums">{gymStatus.text}</p>
            </div>
          </div>

          {/* Stat 4: Location */}
          <div className="flex items-center gap-3.5 sm:pl-6 pt-3 sm:pt-0">
            <div className="w-11 h-11 rounded-lg bg-[#FF5E00]/10 border border-[#FF5E00]/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#FF5E00]" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Nerul, Navi Mumbai</span>
              <p className="text-xs text-neutral-400 font-medium">Sector 1, near Jain Mandir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
