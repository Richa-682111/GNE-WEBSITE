"use client";

import { motion } from "framer-motion";
import { Factory, Globe, TrendingUp, Zap, Target } from "lucide-react";

const roadmap = [
  {
    fy: "FY2025-26",
    yearLabel: "Year 1",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500",
    glowColor: "shadow-emerald-500/20",
    icon: Factory,
    summary: [
      "Solar EPC > 100 MW",
      "Office established in Pune",
      "Strategic entry into Green Hydrogen Business",
    ],
    expanded: [],
  },
  {
    fy: "FY2026-27",
    yearLabel: "Year 2",
    color: "text-sky-500",
    bgColor: "bg-sky-500",
    glowColor: "shadow-sky-500/20",
    icon: Zap,
    summary: [
      "Solar EPC > 450 MW",
      "BESS EPC Expansion > 50MW / 200MWh",
      "PMC for 1.5 GW BESS projects",
    ],
    expanded: [
      "Develop 100 MW IPP Solar + BESS",
      "GH2 Electrolyser Business Growth",
      "Commission BESS Manufacturing factory",
      "Onboard strategic investors",
      "Develop indigenous EMS with IIT Delhi",
    ],
  },
  {
    fy: "FY2027-28",
    yearLabel: "Year 3",
    color: "text-violet-500",
    bgColor: "bg-violet-500",
    glowColor: "shadow-violet-500/20",
    icon: Target,
    summary: [
      "Develop off-grid hybrid projects (500 MW PV + 2GWh BESS)",
      "Expand IPP portfolio to 100 MW Solar",
      "BESS Expansion > 2 GWh globally",
    ],
    expanded: [
      "Establish position as Green Hydrogen developer",
      "Advance R&D and tech innovation",
    ],
  },
  {
    fy: "FY2028-29",
    yearLabel: "Year 4",
    color: "text-amber-500",
    bgColor: "bg-amber-500",
    glowColor: "shadow-amber-500/20",
    icon: TrendingUp,
    summary: [
      "Drive deep technological innovation",
      "Accelerate global market growth",
      "Initiate preparation for IPO",
    ],
    expanded: [],
  },
  {
    fy: "FY2029-30",
    yearLabel: "Year 5",
    color: "text-slate-900 dark:text-white",
    bgColor: "bg-slate-900 dark:bg-slate-100",
    glowColor: "shadow-slate-500/20",
    icon: Globe,
    summary: [
      "Upscaling to Public Limited Company",
      "Establish as top-tier global renewable EPC",
    ],
    expanded: [],
  },
];

export default function TimelineJourney() {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Central Glowing Line */}
      <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" />
      
      <div className="space-y-16 sm:space-y-24">
        {roadmap.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.fy}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col sm:flex-row items-start ${
                isEven ? "sm:justify-start" : "sm:justify-end"
              } group`}
            >
              {/* Central Node */}
              <div className="absolute left-8 sm:left-1/2 top-0 sm:top-6 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 ${item.bgColor} shadow-lg ${item.glowColor} flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-5 h-5 text-white dark:text-slate-950" />
                </div>
              </div>

              {/* Content Box */}
              <div className={`w-full pl-20 sm:pl-0 sm:w-1/2 ${isEven ? "sm:pr-16" : "sm:pl-16"} pt-1 sm:pt-0`}>
                <div className={`p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 shadow-xl ${item.glowColor} transition-shadow duration-300 hover:shadow-2xl`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 ${item.color}`}>
                      {item.yearLabel}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.fy}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {item.summary.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.bgColor}`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {item.expanded.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Strategic Initiatives</p>
                      <ul className="space-y-2.5">
                        {item.expanded.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-slate-300 dark:bg-slate-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}