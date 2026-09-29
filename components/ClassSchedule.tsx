'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Flame, User, ArrowRight } from 'lucide-react';

interface ClassScheduleProps {
  onBookClass: (className: string, day: string, time: string) => void;
}

interface ClassSlot {
  time: string;
  name: string;
  trainer: string;
  intensity: 'High' | 'Very High' | 'Moderate';
  category: 'HIIT' | 'Aerobics' | 'CrossFit' | 'Strength';
  spotsLeft: number;
}

const WEEK_SCHEDULE: Record<string, ClassSlot[]> = {
  Monday: [
    { time: '06:30 AM - 07:15 AM', name: 'Sunrise HIIT Surge', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 4 },
    { time: '08:00 AM - 08:45 AM', name: 'Rhythm Aerobics Blast', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 6 },
    { time: '05:30 PM - 06:30 PM', name: 'CrossFit WOD & Turf', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 3 },
    { time: '07:00 PM - 08:00 PM', name: 'Olympic Barbell & Deadlift Club', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 5 },
    { time: '08:15 PM - 09:00 PM', name: 'Afterburn HIIT Conditioning', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 2 },
  ],
  Tuesday: [
    { time: '06:30 AM - 07:30 AM', name: 'Functional Core & CrossFit', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 5 },
    { time: '08:00 AM - 08:50 AM', name: 'Dance Step Aerobics', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 7 },
    { time: '06:00 PM - 06:45 PM', name: 'Tabata MetCon Interval', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 4 },
    { time: '07:30 PM - 08:30 PM', name: 'Chest & Arms Hypertrophy', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 6 },
  ],
  Wednesday: [
    { time: '06:30 AM - 07:15 AM', name: 'HIIT Battle Ropes & Sleds', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 3 },
    { time: '08:00 AM - 08:45 AM', name: 'Cardio Kick Aerobics', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 5 },
    { time: '05:30 PM - 06:30 PM', name: 'CrossFit Partner Grinder', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 4 },
    { time: '07:00 PM - 08:00 PM', name: 'Squat & Posterior Chain Clinic', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 2 },
  ],
  Thursday: [
    { time: '06:30 AM - 07:30 AM', name: 'Kettlebell & Turf Endurance', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 6 },
    { time: '08:00 AM - 08:50 AM', name: 'Rhythm Aerobics Stamina', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 4 },
    { time: '06:00 PM - 06:45 PM', name: 'High-Octane HIIT Burner', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 5 },
    { time: '07:30 PM - 08:30 PM', name: 'Shoulders & Back Power', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 3 },
  ],
  Friday: [
    { time: '06:30 AM - 07:15 AM', name: 'Fast-Track HIIT Challenge', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 2 },
    { time: '08:00 AM - 08:45 AM', name: 'Total Body Aerobic Sweat', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 5 },
    { time: '05:30 PM - 06:30 PM', name: 'CrossFit Friday Hero WOD', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 3 },
    { time: '07:00 PM - 08:00 PM', name: 'Heavy Iron Power Hour', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 4 },
  ],
  Saturday: [
    { time: '07:00 AM - 08:00 AM', name: 'Weekend Beast CrossFit', trainer: 'Coach Amit', intensity: 'High', category: 'CrossFit', spotsLeft: 4 },
    { time: '08:30 AM - 09:30 AM', name: 'Super Saturday HIIT Blast', trainer: 'Coach Rahul', intensity: 'Very High', category: 'HIIT', spotsLeft: 5 },
    { time: '05:00 PM - 06:00 PM', name: 'Fun Aerobic Fitness Party', trainer: 'Coach Sneha', intensity: 'Moderate', category: 'Aerobics', spotsLeft: 8 },
    { time: '06:30 PM - 07:30 PM', name: 'Full Body Compound Lifts', trainer: 'Coach Vikram', intensity: 'High', category: 'Strength', spotsLeft: 6 },
  ],
  Sunday: [
    { time: '07:30 AM - 08:30 AM', name: 'Sunday Sunrise Mobility & Core', trainer: 'Coach Amit', intensity: 'Moderate', category: 'CrossFit', spotsLeft: 8 },
    { time: '09:00 AM - 10:00 AM', name: 'Power Stretch & HIIT Conditioning', trainer: 'Coach Rahul', intensity: 'High', category: 'HIIT', spotsLeft: 5 },
  ],
};

export default function ClassSchedule({ onBookClass }: ClassScheduleProps) {
  const days = Object.keys(WEEK_SCHEDULE);
  const [activeDay, setActiveDay] = useState<string>('Monday');

  const currentClasses = WEEK_SCHEDULE[activeDay] || [];

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#0E1017] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Weekly Class Timetable</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            TRAIN WITH <span className="text-[#FF5E00]">STRUCTURE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Choose your daily session. Our expert trainers lead morning, afternoon, and evening batches designed to fit your busy routine.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {days.map((day) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5E00] text-black shadow-[0_4px_16px_rgba(255,94,0,0.35)]'
                    : 'bg-[#151722] text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/5'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule List */}
        <div className="space-y-3 sm:space-y-4">
          {currentClasses.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#14161F] border border-white/10 hover:border-[#FF5E00]/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
            >
              {/* Time & Title */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <Clock className="w-5 h-5 text-[#FF5E00]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-neutral-400 tabular-nums">
                      {item.time}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 text-[#FF5E00] border border-[#FF5E00]/30 uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF5E00] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Coach & Intensity */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{item.trainer}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#FF5E00]" />
                  <span>{item.intensity} Intensity</span>
                </div>
                <div className="text-emerald-400 font-semibold hidden sm:inline">
                  {item.spotsLeft} spots available
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => onBookClass(item.name, activeDay, item.time)}
                className="w-full md:w-auto px-4 py-2 bg-[#FF5E00]/15 hover:bg-[#FF5E00] text-[#FF5E00] hover:text-black border border-[#FF5E00]/40 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Reserve Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
