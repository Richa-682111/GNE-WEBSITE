"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Calendar } from "lucide-react";

interface BulletPoint {
  text: string;
}

interface RoadmapStep {
  id: string;
  fy: string;
  phase: string;
  image: string;
  hex: string;
  glow: string;
  textClass: string;
  borderClass: string;
  bgGlow: string;
  bullets: BulletPoint[];
}

const STEPS: RoadmapStep[] = [
  {
    id: "fy26",
    fy: "FY2025-26",
    phase: "Year 1",
    image: "/service-epc.jpg",
    hex: "#2563eb",
    glow: "rgba(37, 99, 235, 0.45)",
    textClass: "text-[#3b82f6]",
    borderClass: "border-[#2563eb]",
    bgGlow: "rgba(37, 99, 235, 0.2)",
    bullets: [
      { text: "Solar EPC > 100 MW" },
      { text: "Office In Pune" },
      { text: "Entry to Green Hydrogen Business" },
    ],
  },
  {
    id: "fy27",
    fy: "FY2026-27",
    phase: "Year 2",
    image: "/service-bess.jpg",
    hex: "#16a34a",
    glow: "rgba(22, 163, 74, 0.45)",
    textClass: "text-[#22c55e]",
    borderClass: "border-[#16a34a]",
    bgGlow: "rgba(22, 163, 74, 0.2)",
    bullets: [
      { text: "Solar EPC > 450 MW" },
      { text: "Business Expansion for BESS EPC > 50MW/200MWh" },
      { text: "PMC - 1.5 GW BESS" },
      { text: "Develop 100 MW IPP Solar + BESS" },
      { text: "GH2 Electrolyser Business Growth" },
      { text: "BESS Manufacturing factory" },
      { text: "Inviting and onboarding of Investors" },
      { text: "Development of indigenous EMS in collaboration with IIT Delhi" },
    ],
  },
  {
    id: "fy28",
    fy: "FY2027-28",
    phase: "Year 3",
    image: "/service-green-hydrogen.jpg",
    hex: "#eab308",
    glow: "rgba(234, 179, 8, 0.45)",
    textClass: "text-[#eab308]",
    borderClass: "border-[#eab308]",
    bgGlow: "rgba(234, 179, 8, 0.2)",
    bullets: [
      { text: "Develop off grid hybrid projects for 500 MW PV + 2GWh MWh BESS" },
      { text: "Expanding the portfolio for 100 MW Solar as a developer" },
      { text: "BESS Expansion > 2 GWh" },
      { text: "Become a developer of Green Hydrogen" },
      { text: "Innovation" },
    ],
  },
  {
    id: "fy29",
    fy: "FY2028-29",
    phase: "Year 4",
    image: "/service-manufacturing.jpg",
    hex: "#f97316",
    glow: "rgba(249, 115, 22, 0.45)",
    textClass: "text-[#fb923c]",
    borderClass: "border-[#f97316]",
    bgGlow: "rgba(249, 115, 22, 0.2)",
    bullets: [
      { text: "Innovation" },
      { text: "Market Growth" },
      { text: "Preparation for IPO" },
    ],
  },
  {
    id: "fy30",
    fy: "FY2029-30",
    phase: "Year 5",
    image: "/hero-solar-farm.png",
    hex: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.45)",
    textClass: "text-[#a78bfa]",
    borderClass: "border-[#8b5cf6]",
    bgGlow: "rgba(139, 92, 246, 0.2)",
    bullets: [
      { text: "Upscaling to Public Limited Company" },
    ],
  },
];

export function TimelineJourney() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = STEPS[activeIdx];

  return (
    <div className="relative py-2 sm:py-4 font-inter bg-transparent overflow-hidden">
      {/* Subtle Background Glow matching active step */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] pointer-events-none transition-all duration-1000 opacity-25"
        style={{ background: activeStep.hex }}
      />

      <div className="w-full max-w-none mx-auto px-0 relative z-10">

        {/* EXECUTIVE 3D KEYNOTE DECK LAYOUT (40% / 60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT PANEL (40% - 5 Cols): WARM PEACH-TERRACOTTA GLASSMORPHIC CARD */}
          <div
            className="lg:col-span-5 flex flex-col justify-between rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(56,142,60,0.12)] relative overflow-hidden transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, #fff8e7 0%, #f8ecd4 100%)',
              border: '1.5px solid rgba(180, 140, 70, 0.2)',
            }}
          >

            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-200/60 blur-3xl pointer-events-none" />

            {/* Top Heading inside Lavender Card */}
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/10 border border-slate-900/20">
                <Sparkles className="w-4 h-4 text-[#d97706]" />
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#d97706]">
                  FUTURE INFRASTRUCTURE
                </span>
              </div>

              <h2 className="font-sora font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight leading-[1.15]">
                5-Year Strategic Roadmap
              </h2>


            </div>

            {/* 5 Multi-Colored Interactive Tabs */}
            <div className="mt-8 space-y-3 relative z-10">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#334155] mb-2 px-1">
                SELECT FISCAL YEAR MILESTONE:
              </div>

              {STEPS.map((step, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left group flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${isActive
                      ? "bg-slate-900 text-white shadow-xl scale-[1.02] border-2"
                      : "bg-white/70 border-white/90 hover:bg-white hover:shadow-md shadow-sm"
                      }`}
                    style={{
                      borderColor: isActive ? step.hex : undefined,
                      boxShadow: isActive ? `0 8px 30px ${step.glow}` : undefined,
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                      {/* Year badge pill */}
                      <span
                        className={`font-mono text-[10px] sm:text-sm font-extrabold px-3 py-1.5 sm:px-3.5 rounded-xl transition-all duration-300 border truncate max-w-[5rem] sm:max-w-none ${isActive
                          ? "bg-white text-slate-950 border-white shadow-md scale-105"
                          : "bg-slate-800 text-white border-slate-700 shadow-sm group-hover:bg-slate-900"
                          }`}
                      >
                        {step.fy}
                      </span>

                      {/* Phase Title in distinct color */}
                      <div className={`font-sora font-black text-sm sm:text-xl tracking-tight transition-colors duration-200 truncate min-w-0 ${step.textClass}`}>
                        {step.phase}
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "scale-100 opacity-100 shadow-md" : "scale-90 opacity-75 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      style={{
                        backgroundColor: isActive ? step.bgGlow : "rgba(0,0,0,0.06)",
                        color: step.hex,
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>



          </div>

          {/* RIGHT PANEL (60% - 7 Cols): 3D IMAGE CARD WITH HIGH-CLARITY PHOTOGRAPHY & EXACT BULLETS */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <div className="group relative w-full min-h-[420px] lg:min-h-[440px] xl:min-h-[600px] rounded-[36px] overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:z-30 hover:shadow-[0_25px_60px_rgba(22,163,74,0.35)] bg-slate-950 border-2 flex flex-col justify-between p-6 sm:p-8 md:p-10 shadow-2xl"
              style={{
                borderColor: activeStep.hex,
                boxShadow: `0 0 50px ${activeStep.glow}, inset 0 0 25px ${activeStep.glow}`,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* High-Resolution Photography Background - Kept Bright and Crisp */}
                  <img
                    src={activeStep.image}
                    alt={activeStep.phase}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gentle Gradient Overlay: Leaves center photography vivid while creating readability for text */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />
                </motion.div>
              </AnimatePresence>

              {/* Top Banner inside Image Card */}
              <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
                  <Calendar className="w-4 h-4" style={{ color: activeStep.hex }} />
                  <span>Strategic Roadmap Milestone</span>
                </div>

                <div
                  className="font-mono font-black text-sm sm:text-base px-5 py-2 rounded-full text-white shadow-xl backdrop-blur-md border border-white/30"
                  style={{ backgroundColor: activeStep.hex }}
                >
                  {activeStep.fy} • {activeStep.phase}
                </div>
              </div>

              {/* Middle & Bottom Area: EXACT BULLET POINTS FROM IMAGE 2 */}
              <div className="relative z-10 my-auto py-4 space-y-4 max-w-3xl">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 px-1">
                  <span>KEY STRATEGIC OBJECTIVES:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeStep.bullets.map((bullet, i) => (
                    <motion.div
                      key={`${activeStep.id}-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/20 hover:bg-slate-900/80 hover:border-white/30 transition-all shadow-lg group"
                      style={{
                        boxShadow: `0 8px 20px rgba(0,0,0,0.3)`,
                      }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                        style={{ color: activeStep.hex }}
                      />
                      <span className="text-sm sm:text-base text-white font-semibold leading-snug drop-shadow-sm">
                        {bullet.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Footer */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>PHASE: <strong className="text-white">{activeStep.phase.toUpperCase()}</strong></span>
                <span className="uppercase font-semibold" style={{ color: activeStep.hex }}>
                  100% EXECUTABLE BLUEPRINT
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TimelineJourney;