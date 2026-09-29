'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Phone, Calendar } from 'lucide-react';

export default function OpeningHoursSection() {
  const [currentDayName, setCurrentDayName] = useState<string>('Monday');
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState<boolean>(true);
  const [closingText, setClosingText] = useState<string>('Open Today until 11:00 PM');

  useEffect(() => {
    const updateGymTime = () => {
      const now = new Date();
      // IST is UTC + 5.5
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayIndex = istTime.getDay();
      setCurrentDayName(days[dayIndex]);

      const hour = istTime.getHours();
      const min = istTime.getMinutes();
      const totalMinutes = hour * 60 + min;

      if (dayIndex === 0) {
        // Sunday: 7:00 AM (420 min) to 11:00 AM (660 min)
        if (totalMinutes >= 420 && totalMinutes < 660) {
          setIsCurrentlyOpen(true);
          const minutesLeft = 660 - totalMinutes;
          setClosingText(`Open Now · Closes at 11:00 AM (${Math.floor(minutesLeft / 60)}h ${minutesLeft % 60}m left)`);
        } else {
          setIsCurrentlyOpen(false);
          setClosingText('Closed Now · Reopens Monday at 6:00 AM');
        }
      } else {
        // Mon-Sat: 6:00 AM (360 min) to 11:00 PM (1380 min)
        if (totalMinutes >= 360 && totalMinutes < 1380) {
          setIsCurrentlyOpen(true);
          const minutesLeft = 1380 - totalMinutes;
          setClosingText(`Open Now · Closes at 11:00 PM (${Math.floor(minutesLeft / 60)}h ${minutesLeft % 60}m left)`);
        } else {
          setIsCurrentlyOpen(false);
          setClosingText('Closed Now · Reopens tomorrow at 6:00 AM');
        }
      }
    };

    updateGymTime();
    const interval = setInterval(updateGymTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const SCHEDULE = [
    { day: 'Monday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Tuesday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Wednesday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Thursday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Friday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Saturday', hours: '6:00 AM – 11:00 PM', total: '17 Hours' },
    { day: 'Sunday', hours: '7:00 AM – 11:00 AM', total: '4 Hours (Special Session)' },
  ];

  return (
    <section id="hours" className="py-20 sm:py-28 bg-[#0E1017] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Live Status & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30">
              <Clock className="w-3.5 h-3.5 text-[#FF5E00]" />
              <span>Operational Timetable</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              FLEXIBLE HOURS FOR <br />
              <span className="text-[#FF5E00]">DEDICATED LIFTERS</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We know your schedule is demanding. That’s why OCTACORE opens at 6:00 AM sharp for morning executives and stays open until 11:00 PM for late-night athletes.
            </p>

            {/* Live Indicator Card */}
            <div className="p-6 rounded-2xl bg-[#14161F] border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Live Gym Status
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    isCurrentlyOpen
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrentlyOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                    }`}
                  />
                  <span>{isCurrentlyOpen ? 'Gym is Open' : 'Gym is Closed'}</span>
                </span>
              </div>

              <div className="text-lg sm:text-xl font-bold text-white mb-2">{closingText}</div>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-[#FF5E00]" />
                <span>Today is {currentDayName} in Nerul, Navi Mumbai</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:09069819090"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Reception: 090698 19090</span>
              </a>
            </div>
          </div>

          {/* Right Column: Day-by-Day Table & Crowd Density */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#14161F] border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span>Weekly Schedule</span>
                <span className="text-xs text-[#FF5E00] font-semibold">17 Hours / Day</span>
              </h3>

              <div className="space-y-3">
                {SCHEDULE.map((item, idx) => {
                  const isToday = item.day === currentDayName;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 sm:p-4 rounded-xl flex items-center justify-between transition-all ${
                        isToday
                          ? 'bg-[#FF5E00]/15 border border-[#FF5E00]/50 shadow-md'
                          : 'bg-neutral-900/60 hover:bg-neutral-900 border border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isToday ? 'bg-[#FF5E00] animate-ping' : 'bg-neutral-600'
                          }`}
                        />
                        <span
                          className={`text-sm font-bold uppercase ${
                            isToday ? 'text-[#FF5E00]' : 'text-white'
                          }`}
                        >
                          {item.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] bg-[#FF5E00] text-black px-1.5 py-0.5 rounded font-black">
                              TODAY
                            </span>
                          )}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-extrabold text-white block tabular-nums">
                          {item.hours}
                        </span>
                        <span className="text-[11px] text-neutral-400">{item.total}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Peak Hours Guide */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-3">
                  Floor Traffic Activity:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-neutral-900/80 border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">06:00 - 08:30 AM</span>
                    <span className="text-amber-400 font-bold">Moderate</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-900/80 border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">11:00 - 04:30 PM</span>
                    <span className="text-emerald-400 font-bold">Quiet Floor</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-900/80 border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">06:00 - 08:30 PM</span>
                    <span className="text-[#FF5E00] font-bold">High Energy</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-900/80 border border-white/5">
                    <span className="text-neutral-400 block text-[10px]">09:00 - 11:00 PM</span>
                    <span className="text-blue-400 font-bold">Night Owls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
