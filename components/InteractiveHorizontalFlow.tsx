"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Eye } from "lucide-react";

export interface FlowStep {
  title: string;
  image?: string;
  description?: string;
}

const DEFAULT_IMAGES = [
  "/wedo1.jpg",
  "/service-epc.jpg",
  "/service-manufacturing.jpg",
  "/hero-hybrid-2.webp",
  "/service-bess.jpg",
  "/innovation.png",
  "/solutions-bg.jpg",
  "/sustainablility.jpg",
];

// Rich accent palette matching the Bento Feature Grid (Image 2)
const ACCENTS = [
  { color: '#4ade80', dark: '#0d7342ff', bg: 'rgba(13,115,66,0.25)', border: 'rgba(74,222,128,0.5)', glow: 'rgba(74,222,128,0.4)' }, // Jade Green
  { color: '#fb923c', dark: '#ad5d50', bg: 'rgba(173,93,80,0.25)', border: 'rgba(251,146,60,0.5)', glow: 'rgba(251,146,60,0.4)' }, // Terracotta / Warm Orange
  { color: '#38bdf8', dark: '#1a98a8ff', bg: 'rgba(26,152,168,0.25)', border: 'rgba(56,189,248,0.5)', glow: 'rgba(56,189,248,0.4)' }, // Teal / Cyan
  { color: '#a78bfa', dark: '#7c3aed', bg: 'rgba(124,58,237,0.25)', border: 'rgba(167,139,250,0.5)', glow: 'rgba(167,139,250,0.4)' }, // Violet / Purple
  { color: '#34d399', dark: '#256c4aff', bg: 'rgba(37,108,74,0.25)', border: 'rgba(52,211,153,0.5)', glow: 'rgba(52,211,153,0.4)' }, // Deep Emerald
  { color: '#facc15', dark: '#b45309', bg: 'rgba(180,83,9,0.25)', border: 'rgba(250,204,21,0.5)', glow: 'rgba(250,204,21,0.4)' }, // Amber / Gold
  { color: '#f472b6', dark: '#db2777', bg: 'rgba(219,39,119,0.25)', border: 'rgba(244,114,182,0.5)', glow: 'rgba(244,114,182,0.4)' }, // Rose
  { color: '#60a5fa', dark: '#2563eb', bg: 'rgba(37,99,235,0.25)', border: 'rgba(96,165,250,0.5)', glow: 'rgba(96,165,250,0.4)' }, // Electric Blue
];

export function InteractiveHorizontalFlow({
  title = "Our Scope",
  steps,
}: {
  title?: string;
  steps: FlowStep[];
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const activeAccent = ACCENTS[activeStep % ACCENTS.length];

  // Helper to format title with accent keywords matching Image 2
  const renderStyledTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 1) return text;
    // Highlight the last 2 words if 3+ words (e.g. "EPC Scope"), or last word if 2 words
    const highlightCount = words.length > 2 ? 2 : 1;
    const normalWords = words.slice(0, words.length - highlightCount);
    const highlightedWords = words.slice(words.length - highlightCount);

    return (
      <>
        {normalWords.join(" ")}{" "}
        <span style={{ color: '#4ade80' }}>
          {highlightedWords.join(" ")}
        </span>
      </>
    );
  };

  return (
    <section className="py-14 sm:py-16 overflow-visible relative bg-[#0B132B]">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0d7342ff]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            {/* Eyebrow badge matching Image 2 */}
            <span
              className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
              style={{ background: 'rgba(13,115,66,0.18)', color: '#4ade80', outline: '1px solid rgba(13,115,66,0.35)' }}
            >
              Our EPC Scope
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-sora tracking-tight text-white">
              {renderStyledTitle(title)}
            </h2>
            <div
              className="mt-5 mx-auto h-1.5 w-24 rounded-full transition-all duration-500"
              style={{ background: `linear-gradient(to right, ${activeAccent.dark}, ${activeAccent.color})` }}
            />
          </div>
        </ScrollReveal>

        {/* Desktop Interactive Flow Track - compact pb-44 provides exact space for popup without excess empty space */}
        <ScrollReveal className="hidden lg:block relative max-w-6xl mx-auto pb-44">
          {/* Track background line */}
          <div className="absolute top-8 left-8 right-8 h-1.5 bg-white/10 rounded-full" />
          {/* Active Track line matching active accent color */}
          <div
            className="absolute top-8 left-8 h-1.5 transition-all duration-700 ease-out rounded-full"
            style={{
              width: `calc(${(activeStep / Math.max(1, steps.length - 1)) * 100}% - ${(activeStep / Math.max(1, steps.length - 1)) * 64}px)`,
              background: `linear-gradient(to right, #0d7342ff, ${activeAccent.color})`,
              boxShadow: `0 0 20px ${activeAccent.glow}`,
            }}
          />

          <div className="relative flex justify-between items-start z-10 px-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              const isHovered = hoveredStep === idx;
              const imgUrl = step.image || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length];
              const accent = ACCENTS[idx % ACCENTS.length];

              // Smart alignment to prevent edge screen overflow
              let tooltipAlignClass = "left-1/2 -translate-x-1/2";
              if (idx === 0 || idx === 1) tooltipAlignClass = "left-0";
              else if (idx === steps.length - 1 || idx === steps.length - 2) tooltipAlignClass = "right-0";

              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center group cursor-pointer w-32"
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setHoveredStep(idx);
                  }}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* FLOATING HOVER RELEVANCY PREVIEW MODAL CARD */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.92 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`absolute top-[175px] z-50 w-64 sm:w-72 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border bg-[#0f1d30] text-left pointer-events-none ${tooltipAlignClass}`}
                        style={{ borderColor: accent.border }}
                      >
                        {/* Decorative top accent glow inside modal */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1 z-20"
                          style={{ background: `linear-gradient(to right, ${accent.dark}, ${accent.color})` }}
                        />

                        <div className="relative h-28 w-full">
                          <img
                            src={imgUrl}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d30] via-[#0f1d30]/30 to-transparent" />
                          <div
                            className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md"
                            style={{ color: accent.color, borderColor: accent.border }}
                          >
                            <Eye className="w-3 h-3" style={{ color: accent.color }} />
                            <span>STEP 0{idx + 1} RELEVANCE</span>
                          </div>
                        </div>
                        <div className="p-3 bg-[#0d1a28]/95 border-t border-white/10">
                          <div
                            className="text-xs font-black leading-snug transition-colors duration-300"
                            style={{ color: accent.color }}
                          >
                            {step.title}
                          </div>
                          {step.description && (
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-2">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step circle matching Image 2 colored accents */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 shadow-lg
                    ${isActive
                      ? 'scale-125'
                      : isPast
                        ? 'scale-100'
                        : 'scale-100 border-white/20 group-hover:scale-110'}
                  `}
                    style={{
                      borderColor: isActive ? accent.color : isPast ? accent.dark : undefined,
                      background: isActive
                        ? `linear-gradient(135deg, ${accent.dark}, ${accent.color})`
                        : isPast
                          ? accent.dark
                          : 'rgba(255,255,255,0.06)',
                      boxShadow: isActive ? `0 0 24px ${accent.glow}` : undefined,
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isActive || isPast ? 'bg-white' : 'bg-white/30'}`} />
                  </div>

                  {/* Step label matching Image 2 colored accents */}
                  <div className={`
                    mt-8 text-center transition-all duration-500
                    ${isActive ? 'scale-110 font-black translate-y-2' : 'font-bold group-hover:scale-105'}
                  `}
                    style={{ color: isActive ? accent.color : isPast ? accent.dark : 'rgba(255,255,255,0.5)' }}
                  >
                    <span className="text-[10px] uppercase tracking-widest block mb-2 opacity-80">Step 0{idx + 1}</span>
                    <span
                      className="text-sm leading-tight block transition-colors duration-300"
                      style={{ color: isActive ? accent.color : 'rgba(255,255,255,0.75)' }}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Mobile Vertical Flow with Tap/Hover Preview */}
        <ScrollReveal className="lg:hidden relative max-w-xl mx-auto px-2">
          <div className="absolute top-4 bottom-4 left-[23px] w-1 bg-white/10 rounded-full" />
          <div className="flex flex-col gap-10 relative z-10">
            {steps.map((step, idx) => {
              const isHovered = hoveredStep === idx;
              const imgUrl = step.image || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length];
              const accent = ACCENTS[idx % ACCENTS.length];

              return (
                <div
                  key={idx}
                  className="flex flex-col gap-3 group"
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setHoveredStep(isHovered ? null : idx)}
                >
                  <div className="flex items-center gap-6 cursor-pointer">
                    <div
                      className="w-12 h-12 shrink-0 rounded-full border-2 border-white/20 transition-all duration-300 shadow-md flex items-center justify-center"
                      style={{
                        background: isHovered ? `linear-gradient(135deg, ${accent.dark}, ${accent.color})` : 'rgba(255,255,255,0.06)',
                        borderColor: isHovered ? accent.color : undefined,
                      }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                    </div>
                    <div
                      className="border border-white/10 p-5 rounded-2xl flex-1 transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderColor: isHovered ? accent.border : undefined,
                      }}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color: accent.color }}>
                        Step 0{idx + 1}
                      </span>
                      <h4
                        className="text-base font-bold leading-tight transition-colors duration-300"
                        style={{ color: isHovered ? accent.color : '#FFFFFF' }}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  {/* Mobile Preview Box */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-18 rounded-xl overflow-hidden border bg-[#0f1d30] shadow-lg"
                        style={{ borderColor: accent.border }}
                      >
                        <div
                          className="h-1 w-full"
                          style={{ background: `linear-gradient(to right, ${accent.dark}, ${accent.color})` }}
                        />
                        <img src={imgUrl} alt={step.title} className="w-full h-36 object-cover" />
                        <div className="p-3 bg-[#0d1a28] text-xs text-white">
                          <div className="font-bold" style={{ color: accent.color }}>{step.title}</div>
                          {step.description && <p className="text-[11px] text-slate-400 mt-1">{step.description}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
