"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export interface FlowStep {
  title: string;
}

export function InteractiveHorizontalFlow({
  title = "Our Scope",
  steps,
}: {
  title?: string;
  steps: FlowStep[];
}) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-brand-green/[0.02] dark:bg-brand-green/[0.01] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-6 mx-auto h-1.5 w-20 rounded-full bg-brand-green" />
          </div>
        </ScrollReveal>

        {/* Desktop Interactive Flow Track */}
        <ScrollReveal className="hidden lg:block relative max-w-6xl mx-auto pb-12">
          {/* Track background line */}
          <div className="absolute top-8 left-8 right-8 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
          {/* Active Track line */}
          <div 
            className="absolute top-8 left-8 h-1.5 bg-brand-green transition-all duration-700 ease-out rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            style={{ width: `calc(${(activeStep / (steps.length - 1)) * 100}% - ${(activeStep / (steps.length - 1)) * 64}px)` }}
          />

          <div className="relative flex justify-between items-start z-10 px-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center group cursor-pointer w-32"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 shadow-lg
                    ${isActive ? 'bg-brand-green border-emerald-300 dark:border-emerald-700 scale-125 shadow-emerald-500/40' : 
                      isPast ? 'bg-brand-green border-brand-green scale-100' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 scale-100 group-hover:scale-110 group-hover:border-emerald-300'}
                  `}>
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isActive || isPast ? 'bg-white' : 'bg-slate-300 dark:bg-slate-600'}`} />
                  </div>
                  
                  <div className={`
                    mt-8 text-center transition-all duration-500
                    ${isActive ? 'text-brand-green scale-110 font-black drop-shadow-sm translate-y-2' : 'text-slate-500 dark:text-slate-400 font-bold group-hover:text-emerald-500'}
                  `}>
                    <span className="text-[10px] uppercase tracking-widest block mb-2 opacity-80">Step 0{idx + 1}</span>
                    <span className="text-sm leading-tight block">{step.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Mobile Vertical Flow */}
        <ScrollReveal className="lg:hidden relative max-w-xl mx-auto px-2">
          <div className="absolute top-4 bottom-4 left-[23px] w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <div className="flex flex-col gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-700 group-hover:border-brand-green transition-colors duration-300 shadow-md flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-brand-green transition-colors" />
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex-1 group-hover:shadow-md transition-shadow">
                  <span className="text-[10px] text-brand-green font-black uppercase tracking-widest block mb-1">Step 0{idx + 1}</span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
