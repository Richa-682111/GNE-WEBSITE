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
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProjectsPortfolio({ projects }: { projects?: any[] }) {
  const [activeTab, setActiveTab] = useState<"completed" | "execution" | "pipeline" | string>("completed");

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
                      Prozeal Green Energy Ltd.
                    </h3>
                    <p className="mt-1.5 text-lg sm:text-xl font-extrabold text-brand-green">
                      100 MW Solar EPC
                    </p>
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

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                          <th className="pb-3">Client Name</th>
                          <th className="pb-3 text-right">Capacity</th>
                          <th className="pb-3 text-right">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">Prozeal Green Energy Ltd.</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">100 MW</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">Onix Renewables</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">50 MW</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">OM YASH</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">50 MW</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">GIPCL</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">100 MW</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Maharashtra</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* BESS Pipeline */}
                <div className="rounded-[2rem] border border-white/20 bg-white/55 dark:border-slate-800 dark:bg-slate-900/60 shadow-md backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-brand-green dark:bg-emerald-950/20">
                      <Battery className="h-5.5 w-5.5 fill-current" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      BESS Pipeline
                    </h4>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-150/60 text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                          <th className="pb-3">Project Name</th>
                          <th className="pb-3 text-right">Capacity</th>
                          <th className="pb-3 text-right">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">Onward Solar (BESS Project)</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">45 MW / 180 MWh</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Odisha</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">Onward Solar (BESS Project)</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">25 MW / 100 MWh</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Tamil Nadu</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">Onward Solar (BESS Project)</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">100 MW / 200 MWh</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">Rajasthan</td>
                        </tr>
                        <tr className="group/row hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                          <td className="py-3.5 font-bold text-slate-850 dark:text-slate-200">GIPCL (BESS Project)</td>
                          <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">50 MW / 200 MWh</td>
                          <td className="py-3.5 text-right text-slate-600 dark:text-slate-450">-</td>
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
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Proven Execution
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                  Delivered projects with quality and timely completion
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  End-to-End Delivery
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                  EPC, BESS, O&M and PMC solutions under one roof
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Future Ready
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                  Focused on Solar, BESS and Green Hydrogen solutions
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-brand-green dark:bg-slate-800/80 dark:text-brand-green-500 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Safety & Quality
                </h4>
                <p className="mt-1.5 text-[15px] text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                  Highest standards in safety, quality and sustainability
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
