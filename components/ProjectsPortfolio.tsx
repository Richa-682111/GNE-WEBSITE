"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  Lightbulb,
  ClipboardList,
  Hammer,
  Wrench,
  Sun,
  Battery,
  Award,
  Users,
  Leaf,
  Compass,
  Package,
  Zap,
} from "lucide-react";

import {
  Building2,
  DraftingCompass,
  ShieldCheck,
  TowerControl,
  BriefcaseBusiness,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const lifecyclePhases = [
  {
    number: "01",
    title: "Land Identification",
    image: "/service-land.jpg",
    icon: Compass,
    accent: "#256c4aff",
    tagline: "Sourcing & securing high-yield locations",
    description: "Identifying prime solar radiation & wind zones, assessing topography, grid connectivity, and securing land rights.",
    deliverables: [
      "Solar radiation mapping",
      "Topographical & soil surveys",
      "Grid connection feasibility",
      "Land lease & easement security"
    ]
  },
  {
    number: "02",
    title: "Feasibility Study",
    image: "/service-pmc.jpg",
    icon: ClipboardList,
    accent: "#ad5d50",
    tagline: "Assessing viability & optimizing parameters",
    description: "In-depth geotechnical, hydrological, and financial analysis to ensure maximum return on investment.",
    deliverables: [
      "Detailed financial modeling",
      "Hydrological & geotechnical studies",
      "Environmental risk mitigation",
      "Regulatory compliance clearance"
    ]
  },
  {
    number: "03",
    title: "Engineering",
    image: "/service-epc.jpg",
    icon: Lightbulb,
    accent: "#1a98a8ff",
    tagline: "Precision design for optimal performance",
    description: "Precision electrical, civil, and mechanical design utilizing advanced simulation tools for optimal energy yield.",
    deliverables: [
      "Plant layout optimization",
      "Electrical string & inverter sizing",
      "Structural wind load analysis",
      "Detailed SLDs & civil drawings"
    ]
  },
  {
    number: "04",
    title: "Procurement",
    image: "/service-manufacturing.jpg",
    icon: Package,
    accent: "#e08e23ff",
    tagline: "Strategic sourcing of tier-1 technology",
    description: "Sourcing tier-1 solar modules, high-efficiency inverters, and premium structures through a robust global supply chain.",
    deliverables: [
      "Tier-1 equipment selection",
      "Global supply chain negotiation",
      "Quality assurance audits",
      "Logistics & on-site delivery tracking"
    ]
  },
  {
    number: "05",
    title: "Construction",
    image: "/service-installation.jpg",
    icon: Hammer,
    accent: "#357757ff",
    tagline: "Rapid and safe on-site implementation",
    description: "Safe, rapid, and high-quality civil and electrical works, adhering strictly to global execution standards.",
    deliverables: [
      "Site grading & pile ramming",
      "Module mounting & cabling",
      "Inverter & transformer installation",
      "SCADA & sub-station construction"
    ]
  },
  {
    number: "06",
    title: "Commissioning",
    image: "/hero-solar-farm.png",
    icon: Zap,
    accent: "#c05a4aff",
    tagline: "Grid integration & performance validation",
    description: "Comprehensive hot & cold testing, grid synchronization, and final compliance approval for seamless power export.",
    deliverables: [
      "Pre-commissioning cold testing",
      "Hot commissioning & energization",
      "Grid synchronization & output checks",
      "Regulatory inspection & COD sign-off"
    ]
  },
  {
    number: "07",
    title: "O&M",
    image: "/o&m.png",
    icon: Wrench,
    accent: "#2b6cb0",
    tagline: "Asset management & uptime maximization",
    description: "Long-term predictive maintenance, real-time performance monitoring, and maximum plant uptime.",
    deliverables: [
      "24/7 remote monitoring (SCADA)",
      "Predictive thermal imaging",
      "Preventative module cleaning & maintenance",
      "Rapid-response component replacement"
    ]
  }
];

const getOuterPopupPosition = (idx: number) => {
  switch (idx) {
    case 0: // Top (12 o'clock) - card pops up above
      return "bottom-[105%] left-1/2 -translate-x-1/2 mb-2";
    case 1: // Top-Right (~1:30)
      return "left-[105%] bottom-0 ml-4";
    case 2: // Right (~3:30)
      return "left-[105%] top-1/2 -translate-y-1/2 ml-4";
    case 3: // Bottom-Right (~5:00)
      return "left-[105%] top-0 ml-4";
    case 4: // Bottom-Left (~7:00)
      return "right-[105%] top-0 mr-4";
    case 5: // Left (~8:30)
      return "right-[105%] top-1/2 -translate-y-1/2 mr-4";
    case 6: // Top-Left (~10:30)
      return "right-[105%] bottom-0 mr-4";
    default:
      return "left-[105%] ml-4";
  }
};

export function ProjectsPortfolio({ projects }: { projects?: any[] }) {
  const [activeTab, setActiveTab] = useState<"completed" | "execution" | "pipeline" | string>("completed");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Our Project Portfolio Heading */}
      <ScrollReveal className="text-center mb-10">
        <span
          className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
          style={{ background: 'rgba(69,82,62,0.12)', color: '#45523e', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}
        >
          Track Record of Excellence
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-sora tracking-tight" style={{ color: '#010101' }}>
          Our Project <span style={{ color: '#256c4aff' }}>Portfolio</span>
        </h2>
        <div className="mt-3.5 mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0d7342ff] to-teal-400" />
        <p className="mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto leading-relaxed" style={{ color: '#492c06ff' }}>
          Explore our completed renewable energy assets, projects currently under execution, and our nationwide growth pipeline across solar EPC, BESS, and O&amp;M.
        </p>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal className="w-full max-w-2xl mb-12">
        <div className="flex rounded-2xl p-1.5 shadow-md backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(176,125,58,0.3)' }}>
          <button
            type="button"
            onClick={() => setActiveTab("completed")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "completed"
              ? "text-white shadow-md shadow-emerald-500/20"
              : "hover:bg-slate-100/80"
              }`}
            style={{
              background: activeTab === "completed" ? '#0d7342ff' : 'transparent',
              color: activeTab === "completed" ? '#ffffff' : '#334155'
            }}
          >
            Completed Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("execution")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "execution"
              ? "text-white shadow-md shadow-emerald-500/20"
              : "hover:bg-slate-100/80"
              }`}
            style={{
              background: activeTab === "execution" ? '#0d7342ff' : 'transparent',
              color: activeTab === "execution" ? '#ffffff' : '#334155'
            }}
          >
            Projects Under Execution
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "pipeline"
              ? "text-white shadow-md shadow-emerald-500/20"
              : "hover:bg-slate-100/80"
              }`}
            style={{
              background: activeTab === "pipeline" ? '#0d7342ff' : 'transparent',
              color: activeTab === "pipeline" ? '#ffffff' : '#334155'
            }}
          >
            Growth Pipeline
          </button>
        </div>
      </ScrollReveal>

      {/* Tab Contents */}
      <div className="w-full">
        {/* COMPLETED PROJECTS */}
        {activeTab === "completed" && (
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1: Bondada Group */}
              <div className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900/90 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 backdrop-blur-xl">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src="/hero-solar-farm.png"
                    alt="Bondada Group solar project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/90 px-3.5 py-2 text-xs font-black text-slate-850 shadow-md backdrop-blur-xl">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Completed
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black" style={{ color: '#010101' }}>
                    41 MW Solar EPC
                  </h3>
                  <p className="mt-1.5 text-lg font-extrabold" style={{ color: '#0d7342ff' }}>

                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold" style={{ color: '#492c06ff' }}>
                    <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                    Maharashtra
                  </div>
                </div>
              </div>

              {/* Card 2: Jackson Group */}
              <div className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900/90 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 backdrop-blur-xl">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src="/service-installation.jpg"
                    alt="Jackson Group O&M project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/90 px-3.5 py-2 text-xs font-black text-slate-855 shadow-md backdrop-blur-xl">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Operational
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black" style={{ color: '#010101' }}>
                    15 MW O&amp;M
                  </h3>
                  <p className="mt-1.5 text-lg font-extrabold" style={{ color: '#0d7342ff' }}>

                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold" style={{ color: '#492c06ff' }}>
                    <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                    Noida, Uttar Pradesh
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* PROJECTS UNDER EXECUTION */}
        {activeTab === "execution" && (
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 dark:border-slate-800 dark:bg-slate-900/90 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row min-h-[320px]">
                {/* Image panel */}
                <div className="relative md:w-5/12 min-h-[250px] md:min-h-full">
                  <Image
                    src="/service-epc.jpg"
                    alt="Projects Under Execution"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 dark:to-slate-900/10" />
                </div>

                {/* Info panel */}
                <div className="md:w-7/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em]" style={{ color: '#0d7342ff' }}>
                        Projects Under Execution
                      </span>
                      <span className="rounded-xl border border-emerald-250 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-800">
                        Under Execution
                      </span>
                    </div>

                    {/* Details */}
                    <h3 className="mt-4 text-2xl sm:text-3xl font-black leading-tight" style={{ color: '#010101' }}>
                      100 MW Solar EPC
                    </h3>

                    <div className="mt-3.5 flex items-center gap-2 text-sm font-semibold" style={{ color: '#492c06ff' }}>
                      <MapPin className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                      Maharashtra
                    </div>
                  </div>

                  {/* Horizontal timeline */}
                  <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="relative flex items-center justify-between w-full">
                      {/* Timeline Background Line */}
                      <div className="absolute left-0 right-0 top-6 h-1 -translate-y-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" />

                      {/* Progress Line (up to step 3 / Construction 50% which is 66% width) */}
                      <div className="absolute left-0 w-[66%] top-6 h-1 -translate-y-1/2 bg-brand-green rounded-full" />

                      {/* Step 1: Engineering */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-green dark:bg-slate-900 shadow-[0_0_12px_rgba(22,163,74,0.15)] transition-all hover:scale-105">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-150">
                          Engineering
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 dark:text-slate-400">

                        </span>
                      </div>

                      {/* Step 2: Procurement */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-green dark:bg-slate-900 shadow-[0_0_12px_rgba(22,163,74,0.15)] transition-all hover:scale-105">
                          <ClipboardList className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-150">
                          Procurement
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 dark:text-slate-400">

                        </span>
                      </div>

                      {/* Step 3: Construction */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-green bg-white text-brand-green dark:bg-slate-900 shadow-[0_0_12px_rgba(22,163,74,0.15)] transition-all hover:scale-105">
                          <Hammer className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-150">
                          Construction
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 dark:text-slate-400">

                        </span>
                      </div>

                      {/* Step 4: Commissioning */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-350 bg-white text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500 transition-all hover:scale-105">
                          <Wrench className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-slate-400 dark:text-slate-500">
                          Commissioning
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 dark:text-slate-500">

                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* GROWTH PIPELINE */}
        {activeTab === "pipeline" && (
          <ScrollReveal>
            <div className="flex flex-col gap-8">
              {/* Pipeline header */}
              <div className="text-center mb-2">
                <h3 className="text-2xl sm:text-4xl font-black" style={{ color: '#010101' }}>
                  Growth <span style={{ color: '#256c4aff' }}>Pipeline</span>
                </h3>
              </div>

              {/* Grid for Solar & BESS */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Solar Pipeline */}
                <div className="rounded-[2rem] border border-white/80 bg-white/95 p-6 sm:p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/90 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-brand-solar dark:bg-amber-950/20">
                      <Sun className="h-5.5 w-5.5 fill-current" />
                    </div>
                    <h4 className="text-xl font-black" style={{ color: '#010101' }}>
                      Solar EPC Pipeline
                    </h4>
                  </div>
                  <div className="max-w-md mx-auto overflow-x-auto">
                    <table className="w-full text-center text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em]" style={{ color: '#5a5249' }}>
                          <th className="pb-3 text-center">Capacity</th>
                          <th className="pb-3 text-center">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>100 MW</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>50 MW</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>50 MW</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>100 MW</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Maharashtra</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* BESS Pipeline */}
                <div className="rounded-[2rem] border border-white/80 bg-white/95 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/90 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-brand-green dark:bg-emerald-950/20">
                      <Battery className="h-5.5 w-5.5 fill-current" />
                    </div>
                    <h4 className="text-xl font-black" style={{ color: '#010101' }}>
                      BESS Pipeline
                    </h4>
                  </div>

                  <div className="max-w-md mx-auto overflow-x-auto">
                    <table className="w-full text-center text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em]" style={{ color: '#5a5249' }}>
                          <th className="pb-3 text-center">Capacity</th>
                          <th className="pb-3 text-center">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>45 MW / 180 MWh</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Odisha</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>25 MW / 100 MWh</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Tamil Nadu</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>100 MW / 200 MWh</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>Rajasthan</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black" style={{ color: '#010101' }}>50 MW / 200 MWh</td>
                          <td className="py-3.5 text-center font-medium" style={{ color: '#5a5249' }}>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Progress Summary Bars */}
              <div className="grid gap-6 md:grid-cols-2 mt-4">
                {/* Total Solar Summary */}
                <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/90 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-brand-solar dark:bg-amber-950/20">
                        <Sun className="h-5 w-5 fill-current" />
                      </div>
                      <span className="text-sm font-bold" style={{ color: '#010101' }}>
                        Total Solar Pipeline
                      </span>
                    </div>
                    <span className="text-xl font-extrabold" style={{ color: '#0d7342ff' }}>
                      250 MW
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                    <div className="h-full bg-brand-green rounded-full w-[62.5%]" />
                  </div>
                </div>

                {/* Total BESS Summary */}
                <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/90 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green dark:bg-emerald-950/20">
                        <Battery className="h-5 w-5 fill-current" />
                      </div>
                      <span className="text-sm font-bold" style={{ color: '#010101' }}>
                        Total BESS Pipeline
                      </span>
                    </div>
                    <span className="text-xl font-extrabold" style={{ color: '#0d7342ff' }}>
                      480 MWh
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                    <div className="h-full bg-brand-green rounded-full w-[80%]" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* PROJECT EXECUTION LIFECYCLE */}
      <ScrollReveal className="w-full mt-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
            style={{ background: 'rgba(69,82,62,0.12)', color: '#45523e', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}
          >
            From Concept to Commissioning
          </span>
          <h2 className="mt-2 text-3xl font-black sm:text-5xl font-sora tracking-tight" style={{ color: '#010101' }}>
            Project Execution <span style={{ color: '#256c4aff' }}>Lifecycle</span>
          </h2>
          <div className="mt-3.5 mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-[#0d7342ff] to-teal-400 animate-pulse" />
          <p className="mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto leading-relaxed" style={{ color: '#492c06ff' }}>
            A structured 7-phase execution framework ensuring precision engineering, tier-1 procurement, and rapid on-site commissioning.
          </p>
        </div>

        {/* Circular Lifecycle Layout */}
        <div className="mx-auto max-w-6xl w-full mt-12 md:mt-28 md:mb-16">

          {/* Desktop Circular Layout */}
          <div className="hidden md:flex relative w-[900px] h-[900px] mx-auto items-center justify-center">

            {/* Decorative Background Orbs to fill empty space */}
            <div className="absolute w-[800px] h-[800px] blur-[100px] rounded-full pointer-events-none -z-20 transition-colors duration-700" style={{ backgroundColor: `${lifecyclePhases[activePhase].accent}15` }} />
            <div className="absolute w-[600px] h-[600px] blur-[80px] rounded-full pointer-events-none -z-20 animate-pulse-slow transition-colors duration-700" style={{ backgroundColor: `${lifecyclePhases[activePhase].accent}20` }} />

            {/* Background Dashed Circle (Arrows concept) */}
            <svg className="absolute w-[660px] h-[660px] -z-10 animate-[spin_80s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49.5" fill="none" stroke="currentColor" className="text-brand-green/30 dark:text-brand-green/20" strokeWidth="0.5" strokeDasharray="2,3" />
            </svg>

            {/* Central Core Content (Interactive) */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl shadow-2xl border border-white/60 dark:border-slate-700 flex flex-col items-center justify-center text-center p-14 z-0 transition-all duration-300">
              <span className="text-[13px] font-black uppercase tracking-[0.25em] mb-3 transition-colors duration-300" style={{ color: lifecyclePhases[activePhase].accent }}>
                Phase {lifecyclePhases[activePhase].number}
              </span>
              <h3 className="text-3xl font-black mb-4 transition-colors duration-300" style={{ color: lifecyclePhases[activePhase].accent }}>
                {lifecyclePhases[activePhase].title}
              </h3>
              <p className="text-[14.5px] font-medium leading-relaxed mb-6" style={{ color: '#475569' }}>
                {lifecyclePhases[activePhase].description}
              </p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-6" />
              <ul className="text-[13.5px] text-center w-full mx-auto space-y-3 font-semibold" style={{ color: '#334155' }}>
                {lifecyclePhases[activePhase].deliverables.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 shrink-0 transition-colors duration-300" style={{ color: lifecyclePhases[activePhase].accent }} />
                    <span className="leading-tight">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Circular Floating Items */}
            {lifecyclePhases.map((phase, idx) => {
              const angle = (idx * (360 / 7)) - 90;
              const isActive = activePhase === idx;
              return (
                <button
                  key={phase.number}
                  onMouseEnter={() => setActivePhase(idx)}
                  onClick={() => setActivePhase(idx)}
                  className={`absolute w-[180px] flex flex-col items-center justify-center text-center transition-all duration-500 z-10 group ${isActive ? 'scale-110' : 'scale-100 hover:scale-105 opacity-85 hover:opacity-100'}`}
                  style={{
                    transform: `rotate(${angle}deg) translate(330px) rotate(${-angle}deg)`
                  }}
                >
                  {/* Interactive Hover Image Popup Card on Outer Side */}
                  <div className={`absolute ${getOuterPopupPosition(idx)} w-[230px] rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/60 dark:border-slate-700 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100] text-left overflow-hidden`}>
                    <div className="relative w-full h-[120px] rounded-xl overflow-hidden mb-2.5 bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={(phase as any).image}
                        alt={phase.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-black uppercase tracking-wider text-white px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm" style={{ backgroundColor: phase.accent }}>
                        Phase {phase.number}
                      </span>
                    </div>
                    <h5 className="text-[13px] font-extrabold leading-tight mb-1" style={{ color: phase.accent }}>
                      {phase.title}
                    </h5>
                    <p className="text-[11px] leading-normal font-medium line-clamp-2" style={{ color: '#475569' }}>
                      {phase.tagline}
                    </p>
                  </div>

                  {/* Glassmorphic 3D-like Box wrapper */}
                  <div 
                    className={`relative w-24 h-24 mb-4 rounded-3xl shadow-xl flex items-center justify-center transition-all duration-500 ${isActive ? '-translate-y-2' : 'bg-white dark:bg-slate-800 shadow-slate-200/50 dark:shadow-none'}`}
                    style={{
                      backgroundColor: isActive ? phase.accent : `${phase.accent}15`,
                      color: isActive ? '#ffffff' : phase.accent,
                      boxShadow: isActive ? `0 12px 30px -5px ${phase.accent}60` : '',
                      border: !isActive ? `1.5px solid ${phase.accent}35` : 'none'
                    }}
                  >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl pointer-events-none" />
                    <phase.icon className="h-10 w-10 relative z-10" />
                  </div>
                  <div 
                    className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl transition-all duration-500 w-full border"
                    style={{
                      borderColor: isActive ? phase.accent : `${phase.accent}35`,
                      boxShadow: isActive ? `0 8px 25px -5px ${phase.accent}30` : ''
                    }}
                  >
                    <span className="text-[11px] font-black uppercase tracking-wider block mb-1.5 transition-colors" style={{ color: phase.accent }}>Phase {phase.number}</span>
                    <h4 className="text-[14px] font-bold leading-tight transition-colors duration-300" style={{ color: phase.accent }}>{phase.title}</h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Vertical Layout (Fallback) */}
          <div className="md:hidden flex flex-col gap-6 relative px-2 mt-8">
            <div className="absolute left-[36px] top-8 bottom-8 w-[2px] transition-colors duration-500" style={{ backgroundColor: `${lifecyclePhases[activePhase].accent}40` }} />
            {lifecyclePhases.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <div key={phase.number} className="relative flex flex-col gap-2 text-left w-full group">
                  <button
                    onClick={() => setActivePhase(idx)}
                    className="flex items-center gap-4 z-10 text-left w-full"
                  >
                    <div 
                      className={`w-14 h-14 shrink-0 rounded-2xl shadow-lg flex items-center justify-center transition-colors duration-300 ${isActive ? '' : 'bg-white dark:bg-slate-800'}`}
                      style={{
                        backgroundColor: isActive ? phase.accent : `${phase.accent}15`,
                        color: isActive ? '#ffffff' : phase.accent,
                        border: !isActive ? `1px solid ${phase.accent}40` : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none" />
                      <phase.icon className="h-6 w-6 relative z-10" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider block" style={{ color: phase.accent }}>Phase {phase.number}</span>
                      <h4 className="text-base font-bold transition-colors duration-300" style={{ color: phase.accent }}>{phase.title}</h4>
                    </div>
                  </button>

                  {isActive && (
                    <div className="ml-[72px] bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white/20 dark:border-slate-800 mt-1 mb-2 animate-in slide-in-from-top-2 fade-in duration-300">
                      <p className="text-[13px] font-medium leading-relaxed mb-3" style={{ color: '#475569' }}>
                        {phase.description}
                      </p>
                      <ul className="text-[12px] space-y-2 font-semibold" style={{ color: '#334155' }}>
                        {phase.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: phase.accent }} />
                            <span className="leading-tight">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* WHY CHOOSE GNE INFRA SECTION */}
      <ScrollReveal className="w-full mt-24">
        <div className="rounded-[2.5rem] border border-white/80 bg-white/95 p-8 sm:p-12 shadow-xl dark:border-slate-800 dark:bg-slate-900/90 backdrop-blur-xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span
              className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
              style={{ background: 'rgba(69,82,62,0.12)', color: '#45523e', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}
            >
              The GNE Infra Advantage
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-black font-sora tracking-tight" style={{ color: '#010101' }}>
              Why Clients Trust <span style={{ color: '#256c4aff' }}>GNE Infra</span>
            </h3>
            <p className="mt-3 text-base sm:text-lg font-semibold max-w-2xl mx-auto leading-relaxed" style={{ color: '#492c06ff' }}>
              Delivering bankable clean energy infrastructure with uncompromising engineering excellence, transparent governance, and lifecycle reliability.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug" style={{ color: '#010101' }}>
                  End-to-End EPC Delivery
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed font-medium" style={{ color: '#5a5249' }}>
                  Comprehensive project execution from engineering to commissioning.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <DraftingCompass className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug" style={{ color: '#010101' }}>
                  Engineering Excellence
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed font-medium" style={{ color: '#5a5249' }}>
                  Optimized system design for maximum performance and reliability.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug" style={{ color: '#010101' }}>
                  Quality-Driven Execution
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed font-medium" style={{ color: '#5a5249' }}>
                  Strict quality assurance at every stage of construction.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <TowerControl className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug" style={{ color: '#010101' }}>
                  Land &amp; Grid Expertise
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed font-medium" style={{ color: '#5a5249' }}>
                  Integrated support for land development and grid connectivity.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4 sm:col-span-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold leading-snug" style={{ color: '#010101' }}>
                  Experienced Project Management
                </h4>
                <p className="mt-1.5 text-[15px] leading-relaxed font-medium" style={{ color: '#5a5249' }}>
                  Structured planning and execution with schedule adherence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
