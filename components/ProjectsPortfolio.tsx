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
    icon: Compass,
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
    icon: ClipboardList,
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
    icon: Lightbulb,
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
    icon: Package,
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
    icon: Hammer,
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
    icon: Zap,
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
    icon: Wrench,
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

export function ProjectsPortfolio({ projects }: { projects?: any[] }) {
  const [activeTab, setActiveTab] = useState<"completed" | "execution" | "pipeline" | string>("completed");
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Our Project Portfolio Heading */}
      <ScrollReveal className="text-center mb-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
          Our Project Portfolio
        </h2>
        <div className="mt-2.5 mx-auto h-1.5 w-16 rounded-full bg-brand-green animate-pulse" />
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal className="w-full max-w-2xl mb-12">
        <div className="flex rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveTab("completed")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "completed"
              ? "bg-brand-green text-white shadow-md shadow-emerald-500/20"
              : "text-slate-650 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
          >
            Completed Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("execution")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "execution"
              ? "bg-brand-green text-white shadow-md shadow-emerald-500/20"
              : "text-slate-650 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
          >
            Projects Under Execution
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`w-full rounded-xl py-3 text-center text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === "pipeline"
              ? "bg-brand-green text-white shadow-md shadow-emerald-500/20"
              : "text-slate-650 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
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
              <div className="group overflow-hidden rounded-[2rem] border border-white/20 bg-white/55 dark:border-slate-800 dark:bg-slate-900/60 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1.5 backdrop-blur-xl">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src="/hero-solar-farm.png"
                    alt="Bondada Group solar project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/55 px-3.5 py-2 text-xs font-black text-slate-850 shadow-md backdrop-blur-xl">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Completed
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    41 MW Solar EPC
                  </h3>
                  <p className="mt-1.5 text-lg font-extrabold text-brand-green">

                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-550 dark:text-slate-400">
                    <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                    Maharashtra
                  </div>
                </div>
              </div>

              {/* Card 2: Jackson Group */}
              <div className="group overflow-hidden rounded-[2rem] border border-white/20 bg-white/55 dark:border-slate-800 dark:bg-slate-900/60 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1.5 backdrop-blur-xl">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src="/service-installation.jpg"
                    alt="Jackson Group O&M project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/55 px-3.5 py-2 text-xs font-black text-slate-855 shadow-md backdrop-blur-xl">
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    Operational
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    15 MW O&M
                  </h3>
                  <p className="mt-1.5 text-lg font-extrabold text-brand-green">

                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-550 dark:text-slate-400">
                    <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
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
            <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/55 dark:border-slate-800 dark:bg-slate-900/60 shadow-md hover:shadow-lg transition-all duration-500 backdrop-blur-xl">
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
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-600">
                        Projects Under Execution
                      </span>
                      <span className="rounded-xl border border-emerald-250 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                        Under Execution
                      </span>
                    </div>

                    {/* Details */}
                    <h3 className="mt-4 text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight">
                      100 MW Solar EPC
                    </h3>

                    <div className="mt-3.5 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      <MapPin className="h-4.5 w-4.5 text-slate-400 shrink-0" />
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
                <h3 className="text-2xl font-black text-brand-green">
                  Growth Pipeline
                </h3>
              </div>

              {/* Grid for Solar & BESS */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Solar Pipeline */}
                <div className="rounded-[2rem] border border-white/20 bg-white/55 p-6 sm:p-8 shadow-md dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-brand-solar dark:bg-amber-950/20">
                      <Sun className="h-5.5 w-5.5 fill-current" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      Solar EPC Pipeline
                    </h4>
                  </div>
                  <div className="max-w-md mx-auto overflow-x-auto">
                    <table className="w-full text-center text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-500">
                          <th className="pb-3 text-center">Capacity</th>
                          <th className="pb-3 text-center">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">100 MW</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">50 MW</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">50 MW</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">100 MW</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* BESS Pipeline */}
                <div className="rounded-[2rem] border border-white/20 bg-white/55 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60 shadow-md backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-brand-green dark:bg-emerald-950/20">
                      <Battery className="h-5.5 w-5.5 fill-current" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      BESS Pipeline
                    </h4>
                  </div>

                  <div className="max-w-md mx-auto overflow-x-auto">
                    <table className="w-full text-center text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                          <th className="pb-3 text-center">Capacity</th>
                          <th className="pb-3 text-center">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">45 MW / 180 MWh</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Odisha</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">25 MW / 100 MWh</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Tamil Nadu</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">100 MW / 200 MWh</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">Rajasthan</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 text-center font-black text-slate-900 dark:text-white">50 MW / 200 MWh</td>
                          <td className="py-3.5 text-center text-slate-600 dark:text-slate-450">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Progress Summary Bars */}
              <div className="grid gap-6 md:grid-cols-2 mt-4">
                {/* Total Solar Summary */}
                <div className="rounded-2xl border border-white/20 bg-white/55 p-5 shadow-md dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-brand-solar dark:bg-amber-950/20">
                        <Sun className="h-5 w-5 fill-current" />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Total Solar Pipeline
                      </span>
                    </div>
                    <span className="text-xl font-extrabold text-brand-green">
                      250 MW
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                    <div className="h-full bg-brand-green rounded-full w-[62.5%]" />
                  </div>
                </div>

                {/* Total BESS Summary */}
                <div className="rounded-2xl border border-white/20 bg-white/55 p-5 shadow-md dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-brand-green dark:bg-emerald-950/20">
                        <Battery className="h-5 w-5 fill-current" />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Total BESS Pipeline
                      </span>
                    </div>
                    <span className="text-xl font-extrabold text-brand-green">
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
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Project Execution Lifecycle
          </h2>
          <p className="mt-2 text-lg font-bold text-brand-green uppercase tracking-[0.15em]">
            From Concept to Commissioning
          </p>
          <div className="mt-3.5 mx-auto h-1.5 w-16 rounded-full bg-brand-green animate-pulse" />
        </div>

        {/* Circular Lifecycle Layout */}
        <div className="mx-auto max-w-6xl w-full mt-8 md:mt-20">

          {/* Desktop Circular Layout */}
          <div className="hidden md:flex relative w-[900px] h-[900px] mx-auto items-center justify-center">

            {/* Decorative Background Orbs to fill empty space */}
            <div className="absolute w-[800px] h-[800px] bg-brand-green/5 dark:bg-brand-green/10 blur-[100px] rounded-full pointer-events-none -z-20" />
            <div className="absolute w-[600px] h-[600px] bg-emerald-200/10 dark:bg-emerald-800/10 blur-[80px] rounded-full pointer-events-none -z-20 animate-pulse-slow" />

            {/* Background Dashed Circle (Arrows concept) */}
            <svg className="absolute w-[660px] h-[660px] -z-10 animate-[spin_80s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49.5" fill="none" stroke="currentColor" className="text-brand-green/30 dark:text-brand-green/20" strokeWidth="0.5" strokeDasharray="2,3" />
            </svg>

            {/* Central Core Content (Interactive) */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl shadow-2xl border border-white/60 dark:border-slate-700 flex flex-col items-center justify-center text-center p-14 z-0 transition-all duration-300">
              <span className="text-[13px] font-black text-brand-green uppercase tracking-[0.25em] mb-3">
                Phase {lifecyclePhases[activePhase].number}
              </span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                {lifecyclePhases[activePhase].title}
              </h3>
              <p className="text-[14.5px] font-medium text-slate-650 dark:text-slate-400 leading-relaxed mb-6">
                {lifecyclePhases[activePhase].description}
              </p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-6" />
              <ul className="text-[13.5px] text-center w-full mx-auto space-y-3 font-semibold text-slate-700 dark:text-slate-300">
                {lifecyclePhases[activePhase].deliverables.slice(0, 3).map((d, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-green shrink-0" />
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
                  {/* Glassmorphic 3D-like Box wrapper */}
                  <div className={`relative w-24 h-24 mb-4 rounded-3xl shadow-xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-brand-green text-white shadow-emerald-500/30 -translate-y-2' : 'bg-white dark:bg-slate-800 text-brand-green shadow-slate-200/50 dark:shadow-none'}`}>
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl pointer-events-none" />
                    <phase.icon className="h-10 w-10 relative z-10" />
                  </div>
                  <div className={`bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl transition-colors duration-500 w-full border ${isActive ? 'border-brand-green/50 ring-2 ring-brand-green/20' : 'border-white/50 dark:border-slate-700'}`}>
                    <span className={`text-[11px] font-black uppercase tracking-wider block mb-1.5 transition-colors ${isActive ? 'text-brand-green' : 'text-slate-500'}`}>Phase {phase.number}</span>
                    <h4 className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight">{phase.title}</h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Vertical Layout (Fallback) */}
          <div className="md:hidden flex flex-col gap-6 relative px-2 mt-8">
            <div className="absolute left-[36px] top-8 bottom-8 w-[2px] bg-brand-green/20" />
            {lifecyclePhases.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <div key={phase.number} className="relative flex flex-col gap-2 text-left w-full group">
                  <button
                    onClick={() => setActivePhase(idx)}
                    className="flex items-center gap-4 z-10 text-left w-full"
                  >
                    <div className={`w-14 h-14 shrink-0 rounded-2xl shadow-lg flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-brand-green text-white' : 'bg-white dark:bg-slate-800 text-brand-green border border-slate-100 dark:border-slate-700'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none" />
                      <phase.icon className="h-6 w-6 relative z-10" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-wider block ${isActive ? 'text-brand-green' : 'text-emerald-600'}`}>Phase {phase.number}</span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{phase.title}</h4>
                    </div>
                  </button>

                  {isActive && (
                    <div className="ml-[72px] bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white/20 dark:border-slate-800 mt-1 mb-2 animate-in slide-in-from-top-2 fade-in duration-300">
                      <p className="text-[13px] font-medium text-slate-650 dark:text-slate-400 leading-relaxed mb-3">
                        {phase.description}
                      </p>
                      <ul className="text-[12px] space-y-2 font-semibold text-slate-700 dark:text-slate-300">
                        {phase.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
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

      {/* WHY CHOOSE GNE INFRA SECTION (Image 4) */}
      <ScrollReveal className="w-full mt-24">
        <div className="rounded-[2.5rem] border border-white/20 bg-white/55 p-8 sm:p-12 shadow-lg dark:border-slate-800 dark:bg-slate-900/40 backdrop-blur-xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-green">
              Why Clients Trust GNE Infra
            </h3>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  End-to-End EPC Delivery
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
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
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Engineering Excellence
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
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
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Quality-Driven Execution
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
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
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Land & Grid Expertise
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
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
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Experienced Project Management
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
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
