"use client";
import { BadgeCheck } from "lucide-react";
import { ArrowRight, Globe2, LineChart, Sparkles, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    end: 100,
    suffix: " MW",
    label: "Project Under Execution",
    sub: "projects in progress",
  },
  {
    icon: <LineChart className="h-6 w-6 text-sky-500" />,
    bg: "bg-sky-50",
    ring: "ring-sky-200",
    end: 500,
    suffix: " MW",
    label: "Projects Pipeline",

  },
  {
    icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
    end: 5,
    suffix: " MW",
    label: "O&M Projects",
    sub: "executed",
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-green-500" />,
    bg: "bg-violet-50",
    ring: "ring-violet-200",
    end: 24,
    suffix: " MW",
    label: "Project Completed",

  },
];

export function ImpactStats() {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 100}>
          <div
            className={`stat-card group flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 transition ${stat.ring}`}
          >
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg} ring-1 ${stat.ring}`}
            >
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-900">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="mt-0.5 text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                <ArrowRight className="h-3 w-3 rotate-45" />
                {stat.sub}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
