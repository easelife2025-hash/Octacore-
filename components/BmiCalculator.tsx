'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Flame, ArrowRight, Activity, Scale, Dumbbell, Heart, RefreshCw, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface BmiCalculatorProps {
  onOpenPassModalWithProgram: (programName: string) => void;
}

type UnitSystem = 'metric' | 'imperial';
type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'athlete';

export default function BmiCalculator({ onOpenPassModalWithProgram }: BmiCalculatorProps) {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState<number>(26);

  // Metric: cm and kg
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(74);

  // Imperial: ft + in and lbs
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);
  const [weightLbs, setWeightLbs] = useState<number>(163);

  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  // Compute Height in meters & Weight in kg
  const { currentHeightM, currentWeightKg, displayHeightStr, displayWeightStr } = useMemo(() => {
    if (unitSystem === 'metric') {
      return {
        currentHeightM: heightCm / 100,
        currentWeightKg: weightKg,
        displayHeightStr: `${heightCm} cm`,
        displayWeightStr: `${weightKg} kg`,
      };
    } else {
      const totalInches = heightFt * 12 + heightIn;
      const hM = (totalInches * 2.54) / 100;
      const wKg = weightLbs * 0.453592;
      return {
        currentHeightM: hM,
        currentWeightKg: wKg,
        displayHeightStr: `${heightFt}'${heightIn}"`,
        displayWeightStr: `${weightLbs} lbs`,
      };
    }
  }, [unitSystem, heightCm, weightKg, heightFt, heightIn, weightLbs]);

  // Compute BMI
  const bmi = useMemo(() => {
    if (!currentHeightM || currentHeightM <= 0) return 0;
    const value = currentWeightKg / (currentHeightM * currentHeightM);
    return Math.round(value * 10) / 10;
  }, [currentHeightM, currentWeightKg]);

  // Compute Ideal Weight Range (BMI 18.5 - 24.9)
  const idealWeightRange = useMemo(() => {
    if (!currentHeightM || currentHeightM <= 0) return { min: 50, max: 70 };
    const minKg = 18.5 * currentHeightM * currentHeightM;
    const maxKg = 24.9 * currentHeightM * currentHeightM;
    if (unitSystem === 'metric') {
      return {
        min: Math.round(minKg),
        max: Math.round(maxKg),
        unit: 'kg',
      };
    } else {
      return {
        min: Math.round(minKg * 2.20462),
        max: Math.round(maxKg * 2.20462),
        unit: 'lbs',
      };
    }
  }, [currentHeightM, unitSystem]);

  // Compute BMR & TDEE
  const { bmr, tdee } = useMemo(() => {
    // Mifflin-St Jeor Equation
    let baseBmr = 10 * currentWeightKg + 6.25 * (currentHeightM * 100) - 5 * age;
    if (gender === 'male') {
      baseBmr += 5;
    } else {
      baseBmr -= 161;
    }

    const activityMultipliers: Record<ActivityLevel, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      athlete: 1.9,
    };

    const totalTdee = Math.round(baseBmr * (activityMultipliers[activity] || 1.55));
    return {
      bmr: Math.round(baseBmr),
      tdee: totalTdee,
    };
  }, [currentWeightKg, currentHeightM, age, gender, activity]);

  // Determine BMI Category & Tailored OCTACORE Recommendation
  const classification = useMemo(() => {
    if (bmi < 18.5) {
      return {
        category: 'Underweight',
        color: 'text-sky-400',
        borderColor: 'border-sky-500/40',
        bgColor: 'bg-sky-500/10',
        barPercent: Math.min(Math.max((bmi / 40) * 100, 5), 30),
        status: 'Lean Build / Needs Muscle Volume',
        recommendation:
          'Your BMI indicates you could benefit from progressive hypertrophy strength training and a moderate caloric surplus (+300 to 500 kcal). Focus on compound Olympic barbell lifts to pack on dense muscular mass rather than excessive high-volume cardio.',
        recommendedProgram: 'Weight Training & Bodybuilding',
        workoutFrequency: '4–5 Sessions / Week',
        nutritionGoal: 'High Protein Surplus (1.8g – 2.0g per kg bodyweight)',
        tips: [
          'Prioritize compound movements: Barbell Squats, Bench Press & Deadlifts',
          'Incorporate high-calorie nutrient-dense snacks & whey shakes',
          'Aim for 8–10 heavy reps with 2–3 minutes rest between sets',
        ],
      };
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        category: 'Optimal / Normal Weight',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-500/40',
        bgColor: 'bg-emerald-500/10',
        barPercent: Math.min(Math.max((bmi / 40) * 100, 30), 60),
        status: 'Healthy Weight / Prime Performance Zone',
        recommendation:
          'Fantastic! You are in the ideal metabolic weight spectrum. Your focus should be athletic conditioning, explosive functional strength, and body recomposition (dropping visceral fat while sculpting lean muscle tissue).',
        recommendedProgram: 'CrossFit & Functional Training',
        workoutFrequency: '4–6 Sessions / Week',
        nutritionGoal: 'Iso-caloric Maintenance with High Protein (2.0g per kg)',
        tips: [
          'Mix Olympic barbell lifts with high-intensity turf conditioning',
          'Incorporate kettlebell complexes and box jumps to enhance athleticism',
          'Track monthly InBody body composition scans at OCTACORE',
        ],
      };
    } else if (bmi >= 25 && bmi < 30) {
      return {
        category: 'Overweight',
        color: 'text-[#FF5E00]',
        borderColor: 'border-[#FF5E00]/50',
        bgColor: 'bg-[#FF5E00]/10',
        barPercent: Math.min(Math.max((bmi / 40) * 100, 60), 80),
        status: 'Elevated Body Fat / Calorie Deficit Recommended',
        recommendation:
          'Your BMI indicates excess body weight. Our fast-paced HIIT and resistance circuit classes are optimal for elevating EPOC afterburn, boosting basal metabolism, and burning stored subcutaneous fat while protecting your hard-earned muscle.',
        recommendedProgram: 'HIIT Exercise Classes',
        workoutFrequency: '4–5 Sessions / Week',
        nutritionGoal: 'Caloric Deficit of 400–600 kcal with High Protein',
        tips: [
          'Engage in 45-min HIIT interval sessions to trigger afterburn',
          'Maintain progressive overload in the weight room to preserve muscle tissue',
          'Replace refined carbohydrates with fibrous greens and lean protein',
        ],
      };
    } else {
      return {
        category: 'Obese',
        color: 'text-rose-400',
        borderColor: 'border-rose-500/40',
        bgColor: 'bg-rose-500/10',
        barPercent: Math.min(Math.max((bmi / 40) * 100, 80), 98),
        status: 'High Health Risk / Structured Coaching Urgently Advised',
        recommendation:
          'A dedicated, supervised approach is strongly recommended to protect joints and ensure safe, sustainable fat loss. Our certified personal trainers will design a customized, low-impact strength protocol and personalized nutrition structure.',
        recommendedProgram: '1-on-1 Personal Training',
        workoutFrequency: '3–4 Guided Sessions / Week',
        nutritionGoal: 'Structured Guided Deficit with Weekly Macro Accountability',
        tips: [
          'Work with an OCTACORE certified coach to safeguard spine & knees',
          'Focus on low-impact cardio: incline treadmill walking & rowing',
          'Consistent hydration (3.5–4L daily) and structured portion control',
        ],
      };
    }
  }, [bmi]);

  const handleWhatsAppConsult = () => {
    const text = `Hi OCTACORE Fitness Nerul! I checked my BMI on your website:
BMI: ${bmi} (${classification.category})
Height: ${displayHeightStr}, Weight: ${displayWeightStr}, Age: ${age}
TDEE: ${tdee} kcal/day
Recommended Program: ${classification.recommendedProgram}
I'd like to schedule a free fitness consultation and claim my VIP pass.`;
    const url = `https://wa.me/919069819090?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0B0C10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Interactive Health Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            BMI CALCULATOR & <span className="text-[#FF5E00]">FITNESS ROADMAP</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Calculate your Body Mass Index (BMI), estimated daily calorie burn (TDEE), and receive actionable training & nutrition recommendations tailored for your goals at OCTACORE Fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-6 rounded-2xl bg-[#14161F] border border-white/10 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#FF5E00]" />
                <span>Your Biometrics</span>
              </h3>

              {/* Unit Toggle */}
              <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setUnitSystem('metric')}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    unitSystem === 'metric'
                      ? 'bg-[#FF5E00] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Metric (cm/kg)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitSystem('imperial')}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    unitSystem === 'imperial'
                      ? 'bg-[#FF5E00] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Imperial (ft/lbs)
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Gender & Age */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Biological Sex
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                        gender === 'male'
                          ? 'bg-[#FF5E00]/20 text-[#FF5E00] border border-[#FF5E00]'
                          : 'bg-neutral-900 text-neutral-400 border border-white/5 hover:text-white'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                        gender === 'female'
                          ? 'bg-[#FF5E00]/20 text-[#FF5E00] border border-[#FF5E00]'
                          : 'bg-neutral-900 text-neutral-400 border border-white/5 hover:text-white'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      Age
                    </label>
                    <span className="text-xs font-bold text-white tabular-nums">{age} yrs</span>
                  </div>
                  <input
                    type="range"
                    min={14}
                    max={80}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-[#FF5E00] cursor-pointer"
                  />
                </div>
              </div>

              {/* Height Control */}
              <div>
                {unitSystem === 'metric' ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                        Height
                      </label>
                      <span className="text-sm font-black text-[#FF5E00] tabular-nums">
                        {heightCm} cm
                      </span>
                    </div>
                    <input
                      type="range"
                      min={120}
                      max={220}
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full accent-[#FF5E00] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                      <span>120 cm</span>
                      <span>170 cm</span>
                      <span>220 cm</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                        Height
                      </label>
                      <span className="text-sm font-black text-[#FF5E00] tabular-nums">
                        {heightFt} ft {heightIn} in
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">Feet</span>
                        <input
                          type="number"
                          min={3}
                          max={7}
                          value={heightFt}
                          onChange={(e) => setHeightFt(Number(e.target.value))}
                          className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-[#FF5E00]"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">Inches</span>
                        <input
                          type="number"
                          min={0}
                          max={11}
                          value={heightIn}
                          onChange={(e) => setHeightIn(Number(e.target.value))}
                          className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-[#FF5E00]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Weight Control */}
              <div>
                {unitSystem === 'metric' ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                        Weight
                      </label>
                      <span className="text-sm font-black text-[#FF5E00] tabular-nums">
                        {weightKg} kg
                      </span>
                    </div>
                    <input
                      type="range"
                      min={35}
                      max={180}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full accent-[#FF5E00] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                      <span>35 kg</span>
                      <span>75 kg</span>
                      <span>180 kg</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                        Weight
                      </label>
                      <span className="text-sm font-black text-[#FF5E00] tabular-nums">
                        {weightLbs} lbs
                      </span>
                    </div>
                    <input
                      type="range"
                      min={80}
                      max={400}
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(Number(e.target.value))}
                      className="w-full accent-[#FF5E00] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                      <span>80 lbs</span>
                      <span>180 lbs</span>
                      <span>400 lbs</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Activity Level for TDEE */}
              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Daily Physical Activity Level
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                  className="w-full px-3 py-2.5 bg-neutral-900 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-[#FF5E00] transition-colors"
                >
                  <option value="sedentary">Sedentary (Little or no workout / desk job)</option>
                  <option value="light">Lightly Active (Workouts 1–3 days/week)</option>
                  <option value="moderate">Moderately Active (Gym workouts 3–5 days/week)</option>
                  <option value="active">Very Active (Intense training 6–7 days/week)</option>
                  <option value="athlete">Elite Athlete (Heavy lifting + conditioning twice daily)</option>
                </select>
              </div>
            </div>

            {/* Quick Reset Button */}
            <div className="pt-6 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setHeightCm(175);
                  setWeightKg(74);
                  setHeightFt(5);
                  setHeightIn(9);
                  setWeightLbs(163);
                  setAge(26);
                }}
                className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Standard</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Results & Customized Recommendation */}
          <div className="lg:col-span-6 space-y-6">
            {/* BMI Result Scorecard */}
            <div className={`p-6 sm:p-8 rounded-2xl bg-[#14161F] border ${classification.borderColor} shadow-2xl relative overflow-hidden`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    Calculated Result
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tight">
                      {bmi}
                    </span>
                    <span className={`text-sm sm:text-base font-extrabold uppercase tracking-wide ${classification.color}`}>
                      {classification.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Ideal Weight Range
                  </span>
                  <span className="text-sm font-bold text-white tabular-nums">
                    {idealWeightRange.min} – {idealWeightRange.max} {idealWeightRange.unit}
                  </span>
                </div>
              </div>

              {/* Progress Bar / Spectrum Indicator */}
              <div className="space-y-1.5 mb-6">
                <div className="h-3 w-full rounded-full bg-neutral-900 border border-white/10 relative overflow-hidden flex">
                  <div className="w-[18.5%] h-full bg-sky-500/70" title="Underweight (<18.5)" />
                  <div className="w-[16.5%] h-full bg-emerald-500/70" title="Normal (18.5 - 24.9)" />
                  <div className="w-[12.5%] h-full bg-[#FF5E00]/70" title="Overweight (25 - 29.9)" />
                  <div className="w-[52.5%] h-full bg-rose-500/70" title="Obese (≥30)" />
                  {/* Active Indicator Pointer */}
                  <div
                    style={{ left: `${classification.barPercent}%` }}
                    className="absolute top-0 bottom-0 w-2 bg-white shadow-[0_0_8px_#fff] -translate-x-1/2 transition-all duration-300"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-500 font-semibold px-0.5">
                  <span className="text-sky-400">Underweight</span>
                  <span className="text-emerald-400">Normal (18.5-24.9)</span>
                  <span className="text-[#FF5E00]">Overweight</span>
                  <span className="text-rose-400">Obese (30+)</span>
                </div>
              </div>

              {/* Metabolic Estimates: BMR & TDEE */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 mb-6">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Basal Metabolic Rate (BMR)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">
                    {bmr} kcal/day
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Estimated Daily Maintenance (TDEE)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#FF5E00] tabular-nums">
                    {tdee} kcal/day
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <Activity className="w-4 h-4 text-[#FF5E00] shrink-0" />
                <span>{classification.status}</span>
              </div>
            </div>

            {/* Personalized Recommendations Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14161F] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E00]/15 border border-[#FF5E00]/30 flex items-center justify-center text-[#FF5E00] shrink-0">
                  <Dumbbell className="w-5 h-5 text-[#FF5E00]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#FF5E00] uppercase tracking-wider block">
                    Tailored OCTACORE Plan
                  </span>
                  <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                    Recommended: {classification.recommendedProgram}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                {classification.recommendation}
              </p>

              {/* Workout & Nutrition Specs */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-start gap-2 text-xs text-neutral-300">
                  <Flame className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Training Frequency: </strong>
                    {classification.workoutFrequency}
                  </div>
                </div>
                <div className="flex items-start gap-2 text-xs text-neutral-300">
                  <Heart className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Nutrition Focus: </strong>
                    {classification.nutritionGoal}
                  </div>
                </div>
              </div>

              {/* Action Tips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                  Action Steps For Your Transformation:
                </span>
                {classification.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E00] shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenPassModalWithProgram(classification.recommendedProgram)}
                  className="w-full sm:flex-1 py-3 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-[#FF5E00]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Start Free Trial For This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppConsult}
                  className="w-full sm:w-auto px-4 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Send BMI on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
