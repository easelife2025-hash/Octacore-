'use client';

import React from 'react';
import { Check, Flame, MessageSquare, ArrowRight } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

const PLANS = [
  {
    name: '1 Month Kickstart',
    duration: 'Monthly Commitment',
    price: '₹2,499',
    badge: 'FLEXIBLE',
    popular: false,
    features: [
      'Full access to all gym equipment',
      'Cardio & strength training floor',
      'Locker room & shower access',
      'General trainer floor guidance',
      'Free mobile workout tracking app',
    ],
  },
  {
    name: '3 Months Pro',
    duration: 'Quarterly Block',
    price: '₹5,999',
    badge: 'SAVE 20%',
    popular: false,
    features: [
      'All 1-Month plan benefits',
      '1 Complimentary Personal Training session',
      '1 Initial Body Composition Scan (InBody)',
      'Free access to Aerobics group classes',
      'Complimentary steam bath sessions',
    ],
  },
  {
    name: '6 Months Transformation',
    duration: 'Half-Year Goal',
    price: '₹9,999',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'All 3-Month plan benefits',
      '3 Complimentary Personal Training sessions',
      'Customized workout & nutrition macro plan',
      'Unlimited HIIT & CrossFit group batches',
      'Monthly InBody body fat scan & analysis',
      'Free gym shaker bottle & towel kit',
    ],
  },
  {
    name: '12 Months VIP Annual',
    duration: 'Best Value Commitment',
    price: '₹15,999',
    badge: 'MAX VALUE',
    popular: false,
    features: [
      'All 6-Month plan benefits',
      '6 Complimentary Personal Training sessions',
      '1-on-1 Nutritionist dietary consultation',
      'Unlimited steam bath & VIP locker privileges',
      '1 Month complimentary membership freeze option',
      'VIP guest passes for family/friends',
    ],
  },
];

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5E00] bg-[#FF5E00]/10 px-3.5 py-1.5 rounded-full border border-[#FF5E00]/30 mb-4">
            <Flame className="w-3.5 h-3.5 text-[#FF5E00]" />
            <span>Transparent Memberships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            INVEST IN <span className="text-[#FF5E00]">YOUR POWER</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No hidden maintenance fees or registration surprises. Choose the plan that aligns with your fitness goals and start transforming today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#151824] border-2 border-[#FF5E00] shadow-[0_0_35px_rgba(255,94,0,0.25)] scale-[1.02]'
                  : 'bg-[#111319] border border-white/10 hover:border-white/25'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded ${
                    plan.popular
                      ? 'bg-[#FF5E00] text-black'
                      : 'bg-white/10 text-neutral-300'
                  }`}
                >
                  {plan.badge}
                </span>
                <span className="text-xs text-neutral-400">{plan.duration}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">/ all inclusive</span>
                </div>

                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#FF5E00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#FF5E00] hover:bg-[#FF7A1A] text-white shadow-lg shadow-[#FF5E00]/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/919069819090?text=Hi%20OCTACORE%20Fitness%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    plan.name
                  )}%20plan%20(${plan.price}).%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-[11px] font-semibold text-neutral-400 hover:text-[#25D366] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#14161F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Want to try before you commit?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Claim a 100% Free 1-Day VIP Pass to test all machines, attend any group class, and consult our coaches.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan('Free VIP 1-Day Trial Pass')}
            className="px-6 py-3 bg-[#FF5E00] hover:bg-[#FF7A1A] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shrink-0 cursor-pointer shadow-md"
          >
            Claim Free Day Pass
          </button>
        </div>
      </div>
    </section>
  );
}
