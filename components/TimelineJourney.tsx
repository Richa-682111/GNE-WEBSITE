"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const roadmap = [
  {
    fy: "FY2025-26",
    yearLabel: "Year 1",
    color: "#1976d2",
    top: "22%", // Shifted up and right
    left: "8%", // Shifted up and right
    summary: [
      "Solar EPC > 100 MW",
      "Office in Pune",
      "Entry to Green Hydrogen Business",
    ],
    expanded: [] as string[],
  },
  {
    fy: "FY2026-27",
    yearLabel: "Year 2",
    color: "#4caf50",
    top: "18%", // Shifted up and right
    left: "27%", // Shifted up and right
    summary: [
      "Solar EPC > 450 MW",
      "Business Expansion for BESS EPC > 50MW/200MWh",
      "PMC - 1.5 GW BESS",
    ],
    expanded: [
      "Develop 100 MW IPP Solar + BESS",
      "GH2 Electrolyser Business Growth",
      "BESS Manufacturing factory",
      "Inviting and onboarding of Investors",
      "Development of indigenous EMS in collaboration with IIT Delhi",
    ],
  },
  {
    fy: "FY2027-28",
    yearLabel: "Year 3",
    color: "#f4c20d",
    top: "14%", // Shifted up and right
    left: "46%", // Shifted up and right
    summary: [
      "Develop off grid hybrid projects for 500 MW PV + 2GWh MWh BESS",
      "Expanding the portfolio for 100 MW Solar as a developer",
      "BESS Expansion > 2 GWh",


    ],
    expanded: [
      "Become a developer of Green Hydrogen",
      "Innovation",
    ],
  },
  {
    fy: "FY2028-29",
    yearLabel: "Year 4",
    color: "#f57c00",
    top: "8%", // Shifted up and right
    left: "65%", // Shifted up and right
    summary: [
      "Innovation",
      "Market Growth",
      "Preparation for IPO",
    ],
    expanded: [] as string[],
  },
  {
    fy: "FY2029-30",
    yearLabel: "Year 5",
    color: "#7e57c2",
    top: "2%", // Shifted up and right
    left: "84%", // Shifted up and right
    summary: [
      "Upscaling to Public Limited Company",
    ],
    expanded: [] as string[],
  },
];

function StaircaseCard({
  item,
  index,
  inView,
}: {
  item: (typeof roadmap)[number];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [animatedIn, setAnimatedIn] = useState(false);
  const hasExpanded = item.expanded.length > 0;

  return (
    <div key={item.fy}>
      {/* Arrow badge */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
        transition={{
          delay: index * 0.15,
          duration: 0.7,
          type: "spring",
          bounce: 0.4,
        }}
        style={{ top: item.top, left: item.left }}
        className="absolute z-10"
      >
        <div
          className="relative flex h-10 w-36 items-center justify-center text-[15px] font-bold text-white shadow-lg lg:h-11 lg:w-40 lg:text-base"
          style={{ backgroundColor: item.color }}
        >
          {item.fy}
          <div
            className="absolute right-[-24px] top-0 h-0 w-0 border-b-[20px] border-l-[24px] border-t-[20px] border-b-transparent border-t-transparent lg:right-[-26px] lg:border-b-[22px] lg:border-l-[26px] lg:border-t-[22px]"
            style={{ borderLeftColor: item.color }}
          />
        </div>
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? (hovered && hasExpanded ? -80 : 0) : 18,
        }}
        transition={{
          delay: animatedIn ? 0 : index * 0.15 + 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          if (inView) {
            setAnimatedIn(true);
          }
        }}
        style={{
          top: `calc(${item.top} + 52px)`,
          left: item.left,
          boxShadow: hovered
            ? `0 8px 32px ${item.color}22, 0 0 0 2px ${item.color}33`
            : undefined,
        }}
        className="absolute z-20 w-44 lg:w-48 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-500 ease-in-out"
          style={{
            maxHeight: hovered && hasExpanded ? "650px" : "160px",
            minHeight: "160px", // Ensure minimum height to prevent flickering
            transition: "max-height 0.5s ease-in-out, box-shadow 0.3s ease-in-out",

            boxShadow: hovered
              ? `0 8px 32px ${item.color}22, 0 0 0 2px ${item.color}33`
              : undefined,
          }}
        >
          {/* Year label */}
          <div
            className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: item.color }}
          >
            {item.yearLabel}
          </div>

          <div className="p-3">
            {/* Summary (always visible) */}
            <ul className="space-y-1.5 text-[12px] font-semibold leading-snug text-slate-800 lg:text-[13px]">
              {item.summary.map((point) => (
                <li key={point} className="flex gap-1.5">
                  <span className="mt-0.5 text-emerald-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Expanded content (revealed on hover) */}
            {hasExpanded && (
              <div
                className="transition-all duration-500 ease-in-out px-3 pb-3"
                style={{
                  maxHeight: hovered ? "300px" : "0px",
                  opacity: hovered ? 1 : 0,
                  overflow: "hidden",
                  paddingTop: hovered ? "8px" : "0px",
                  marginTop: hovered ? "6px" : "0px",
                }}
              >
                <div className="border-t border-dashed border-slate-200 pt-2">
                  <ul className="space-y-1.5 text-[12px] font-medium leading-snug text-slate-600 lg:text-[13px]">
                    {item.expanded.map((point) => (
                      <li key={point} className="flex gap-1.5">
                        <span className="mt-0.5 text-blue-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Expand hint */}
            {hasExpanded && !hovered && (
              <p className="mt-2 text-center text-[10px] font-medium text-slate-400 animate-pulse">
                Hover to see more ↓
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TimelineJourney() {
  const [inView, setInView] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      <motion.div
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, amount: 0.15 }}
        className="relative h-[380px] overflow-visible rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 shadow-xl lg:h-[480px]"
      >
        {/* Faint dotted path */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dotted-path" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1.3" fill="#86efac" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotted-path)" />
          </svg>
        </div>

        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Gradient blobs */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-amber-200/50 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 h-36 w-36 rounded-full bg-purple-200/50 blur-3xl" />
          {/* Dot grid pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* Decorative icons */}
          <div className="absolute bottom-8 right-8 text-4xl opacity-80">☀️</div>
          <div className="absolute bottom-20 right-24 text-3xl opacity-80">🔋</div>
          <div className="absolute bottom-10 right-44 text-2xl opacity-80">⚡</div>
        </div>

        {/* Upward path line (diagonal) */}
        <div className="absolute left-[20%] top-[78%] h-[2px] w-[65%] rotate-[-15deg] rounded-full bg-gradient-to-r from-blue-300 via-emerald-300 to-purple-300" />

        {/* Staircase cards */}
        {roadmap.map((item, index) => (
          <StaircaseCard key={item.fy} item={item} index={index} inView={inView} />
        ))}

        {/* Title */}
        <div className="absolute left-6 top-5 z-30">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Growth Roadmap
          </p>
          <h3 className="mt-1 text-xl font-black text-slate-900 lg:text-2xl">
            5-Year Strategic Journey
          </h3>
        </div>
      </motion.div>
    </div>
  );
}