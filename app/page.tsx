import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ImpactStats } from "@/components/ImpactStats";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, MapPin, ChevronRight, Leaf, Zap } from "lucide-react";
export default function HomePage() {
  return (
    <div>
      {/* Hero Section — Auto-Sliding Carousel */}
      <HeroCarousel>
        <div className="flex flex-col items-center justify-center gap-3 px-4 py-2 sm:gap-3.5 lg:gap-4">


          <h1
            className="mx-auto max-w-4xl text-center text-3xl font-black leading-[1.1] text-[#f5ece5] sm:text-4xl md:text-5xl lg:text-[52px]"
            style={{
              textShadow: `
      0 0 4px rgba(0,0,0,0.9),
      0 0 8px rgba(0,0,0,0.8),
      0 0 16px rgba(0,0,0,0.7),
      2px 2px 6px rgba(0,0,0,0.9)
    `
            }}
          >
            Engineering the <br className="hidden sm:block" />
            Future
          </h1>

          {/* Subheading */}
          <p
            className="mx-auto max-w-2xl text-center text-base font-semibold leading-relaxed sm:text-lg md:text-xl"
            style={{
              color: '#4ade80',
              textShadow: `
                0 0 8px rgba(0,0,0,0.9),
                0 0 16px rgba(0,0,0,0.8),
                2px 2px 6px rgba(0,0,0,0.9)
              `
            }}
          >
            Integrating Solar, Energy Storage &amp; Green Hydrogen Solutions for a Net-Zero World
          </p>




        </div>
      </HeroCarousel>

      {/* ── OUR IMPACT ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 sm:py-20" style={{ background: '#f5ece5' }}>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(69,82,62,0.12)', color: '#0d7342ff', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}>
                Welcome to Solar Power &amp; Save Energy
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ color: '#010101' }}>
                Our&nbsp;<span style={{ color: '#256c4aff' }}>Impact</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Two-column grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT — Visual panel */}
            <ScrollReveal animation="scale">
              <div className="relative flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-sky-400/10 to-teal-400/10 blur-2xl" />

                <div className="relative w-full max-w-xl overflow-hidden rounded-3xl p-6 shadow-2xl sm:p-8" style={{ background: 'linear-gradient(135deg, #e2efe7 0%, #cbe4d5 100%)', border: '1.5px solid rgba(13,115,66,0.35)', boxShadow: '0 20px 50px rgba(13,115,66,0.12), 0 8px 20px rgba(0,0,0,0.06)' }}>
                  <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96 [--orbit-radius:85px] sm:[--orbit-radius:120px] lg:[--orbit-radius:170px]">
                    {/* Animated orbit rings */}
                    <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-emerald-300/40 dark:border-emerald-700/40" />
                    <div className="absolute inset-6 animate-[spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-sky-300/30 dark:border-sky-700/30" />

                    {/* Centre hub */}
                    <div className="relative z-10 flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-center rounded-full shadow-xl" style={{ background: 'linear-gradient(135deg, #1a4731, #0f2d1e)' }}>
                      <Leaf className="mb-0.5 h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wide text-white/90">GNE infra</span>
                    </div>

                    {/* Orbital nodes */}
                    {[
                      { label: "Supply Chain", angle: 0, icon: "🔗", color: "bg-purple-100 text-purple-900 border border-purple-200/80 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-700/50" },
                      { label: "Material", angle: 51, icon: "🏗️", color: "bg-blue-100 text-blue-900 border border-blue-200/80 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700/50" },
                      { label: "Design", angle: 102, icon: "✏️", color: "bg-pink-100 text-pink-900 border border-pink-200/80 dark:bg-pink-900/50 dark:text-pink-200 dark:border-pink-700/50" },
                      { label: "Energy", angle: 153, icon: "⚡", color: "bg-amber-100 text-amber-900 border border-amber-200/80 dark:bg-amber-900/50 dark:text-amber-200 dark:border-amber-700/50" },
                      { label: "Innovation", angle: 204, icon: "💡", color: "bg-indigo-100 text-indigo-900 border border-indigo-200/80 dark:bg-indigo-900/50 dark:text-indigo-200 dark:border-indigo-700/50" },
                      { label: "Corporate", angle: 255, icon: "🌍", color: "bg-cyan-100 text-cyan-900 border border-cyan-200/80 dark:bg-cyan-900/50 dark:text-cyan-200 dark:border-cyan-700/50" },
                      { label: "End-of-Life", angle: 306, icon: "♻️", color: "bg-rose-100 text-rose-900 border border-rose-200/80 dark:bg-rose-900/50 dark:text-rose-200 dark:border-rose-700/50" },
                    ].map(({ label, angle, icon, color }) => {
                      const rad = (angle - 90) * (Math.PI / 180);
                      const cosVal = Math.cos(rad);
                      const sinVal = Math.sin(rad);
                      return (
                        <div
                          key={label}
                          className={`absolute flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 flex-col items-center justify-center rounded-xl sm:rounded-2xl text-center text-[8px] sm:text-[9px] lg:text-[11px] font-semibold leading-none sm:leading-tight shadow-lg transition-transform hover:scale-110 ${color}`}
                          style={{
                            transform: `translate(calc(var(--orbit-radius) * ${cosVal}), calc(var(--orbit-radius) * ${sinVal}))`,
                          }}
                        >
                          <span className="text-base sm:text-lg lg:text-2xl leading-none">{icon}</span>
                          <span className="mt-0.5 px-0.5 block">{label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Label below */}
                  <p className="mt-5 text-center text-xs font-semibold uppercase tracking-widest" style={{ color: '#1a4731' }}>
                    Integrated Sustainability Framework
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — Copy */}
            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-6">
                <p className="text-xl leading-relaxed" style={{ color: '#010101' }}>
                  “Building the Infrastructure Powering India&apos;s Energy Transition”
                  GNE Infra contributes to the development of sustainable energy infrastructure through integrated Solar EPC, BESS, project development, land procurement, grid connectivity, and project management solutions. Our focus is on enabling faster project execution, improving energy reliability, and supporting the adoption of clean energy technologies across India.

                </p>


                <Link
                  href="/about"
                  className="btn-primary self-start gap-2"
                >
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* ── KPI Stats row ─────────────────────────────────────────── */}
          <ImpactStats />
        </div>
      </section>

      {/* ── WHAT WE DO — Editorial Numbered Strip ─────────────────── */}
      <section className="relative py-16 sm:py-24 overflow-hidden" style={{ background: '#fbf5eb' }}>
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
          <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>

                <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ color: '#010101' }}>
                  OUR <span style={{ color: '#256c4aff' }}>Focus Areas</span>
                </h2>
              </div>

            </div>
          </ScrollReveal>

          {/* Top Row: Points 01-03 on Left, wedo1 Image Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
            {/* Left Column: First 3 Points (Span 7) */}
            <div className="lg:col-span-7 divide-y divide-slate-200/70 dark:divide-slate-700/50">
              {[
                {
                  num: "01",
                  title: "Renewable Energy Development",
                  body: "Supporting the deployment of solar and energy storage projects through end-to-end engineering, procurement, construction, and project management capabilities.",
                  accent: "#256c4aff",
                },
                {
                  num: "02",
                  title: "Accelerating Project Readiness",
                  body: "Facilitating land procurement, stakeholder coordination, regulatory approvals, and grid integration to reduce development challenges and improve project timelines.",
                  accent: "#ad5d50",
                },
                {
                  num: "03",
                  title: "Advancing Energy Storage Adoption",
                  body: "Developing Battery Energy Storage System (BESS) solutions that enhance grid stability, renewable energy integration, and long-term energy resilience.",
                  accent: "#1a98a8ff",
                },
              ].map(({ num, title, body, accent }, i) => (
                <ScrollReveal key={num} delay={i * 60}>
                  <div className="flex gap-6 py-7 sm:gap-10 sm:py-8 rounded-xl px-2 sm:px-4 -mx-2 sm:-mx-4">
                    <div className="shrink-0 w-14 sm:w-20">
                      <span
                        className="text-4xl sm:text-5xl font-black leading-none select-none inline-block"
                        style={{ color: accent, opacity: 0.35 }}
                      >
                        {num}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-0.5 rounded-full self-stretch opacity-60"
                      style={{ background: accent }}
                    />
                    <div className="flex-1 min-w-0 py-1">
                      <h3
                        className="text-base sm:text-lg font-bold leading-snug"
                        style={{ color: accent }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed max-w-xl" style={{ color: '#5a5249' }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right Column: wedo1 Image Card (Span 5) */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] min-h-[440px] lg:min-h-[560px]">
                  <Image
                    src="/wedo1.jpg"
                    alt="Renewable Energy Development"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      End-to-End Execution
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black leading-tight">
                      Deploying Utility-Scale Clean Infrastructure
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      Comprehensive EPC and project development capabilities driving sustainable energy transformation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Row: wedo2 Image Card on Left, Points 04-06 on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: wedo2 Image Card (Span 5) - Order 2 on mobile, 1 on desktop */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] min-h-[360px] lg:min-h-[460px]">
                  <Image
                    src="/wedo2.jpg"
                    alt="Industrial Decarbonization and Sustainable Value"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-2">
                      Future-Ready Assets
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black leading-tight">
                      Powering Industrial Decarbonization
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      Securing long-term resilience and carbon reduction across commercial and industrial sectors.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Last 3 Points (Span 7) - Order 1 on mobile, 2 on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2 divide-y divide-slate-200/70 dark:divide-slate-700/50">
              {[
                {
                  num: "04",
                  title: "Supporting Industrial Decarbonization",
                  body: "Helping commercial and industrial consumers adopt Solar and BESS solutions to reduce energy costs, improve reliability, and lower carbon emissions.",
                  accent: "#e08e23ff",
                },
                {
                  num: "05",
                  title: "Building Future-Ready Infrastructure",
                  body: "Expanding capabilities across Solar, BESS, Hybrid Energy Systems, and Green Hydrogen to support India's long-term clean energy and energy security goals.",
                  accent: "#357757ff",
                },
                {
                  num: "06",
                  title: "Driving Sustainable Value",
                  body: "Delivering bankable, high-yield renewable assets with transparent governance, rigorous quality assurance, and lifecycle support — ensuring lasting impact for investors and communities.",
                  accent: "#c05a4aff",
                },
              ].map(({ num, title, body, accent }, i) => (
                <ScrollReveal key={num} delay={i * 60}>
                  <div className="flex gap-6 py-7 sm:gap-10 sm:py-8 rounded-xl px-2 sm:px-4 -mx-2 sm:-mx-4">
                    <div className="shrink-0 w-14 sm:w-20">
                      <span
                        className="text-4xl sm:text-5xl font-black leading-none select-none inline-block"
                        style={{ color: accent, opacity: 0.35 }}
                      >
                        {num}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-0.5 rounded-full self-stretch opacity-60"
                      style={{ background: accent }}
                    />
                    <div className="flex-1 min-w-0 py-1">
                      <h3
                        className="text-base sm:text-lg font-bold leading-snug"
                        style={{ color: accent }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed max-w-xl" style={{ color: '#5a5249' }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR EXPERTISE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 sm:py-20" style={{ background: '#f5ece5' }}>
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/3 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[130px]" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-teal-400/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ background: 'rgba(69,82,62,0.12)', color: '#45523e', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}>
                Process &amp; The Solutions We Can Provide
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl" style={{ color: '#010101' }}>
                Our <span style={{ color: '#256c4aff' }}>Expertise</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm" style={{ color: '#492c06ff' }}>
                End-to-end renewable energy solutions — from land identification to long-term operations — engineered for scale.
              </p>
            </div>
          </ScrollReveal>

          {/* 3×2 Service Card Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              { key: "land", img: "/service-land.jpg", label: "Land Procurement & Grid Connectivity", accent: "from-[#45523e] to-[#2a3328]", tag: "bg-[#45523e]", desc: "We support renewable energy projects through strategic land identification, aggregation, techno-legal due diligence, and regulatory coordination. Our integrated approach helps accelerate project development while minimizing land-related risks and execution delays." },
              { key: "installation", img: "/service-pmc.jpg", label: "PMC(Solar, BESS, PSP, Wind)", accent: "from-[#b0aca2] to-[#7a756f]", tag: "bg-[#b0aca2]", desc: "We offer end-to-end project management consultancy services covering project planning, execution monitoring, contract management, procurement support, quality control, and stakeholder coordination to ensure efficient and timely project delivery." },
              { key: "epc", img: "/service-epc.jpg", label: "Solar EPC", accent: "from-[#45523e] to-[#010101]", tag: "bg-[#45523e]", desc: "We provide complete Solar EPC services from feasibility studies and detailed engineering to procurement, construction, commissioning, and grid connectivity, ensuring high-quality and timely project delivery." },
              { key: "om", img: "/service-om.jpg", label: "O&M(BESS, Solar,PSP)", accent: "from-[#ad5d50] to-[#7a3f35]", tag: "bg-[#ad5d50]", desc: "We deliver end-to-end operations and maintenance services focused on maximizing plant availability, improving energy generation, reducing downtime, and extending asset life." },
              { key: "bess", img: "/service-bess.jpg", label: "BESS (EPC/C&I, I&C)", accent: "from-[#010101] to-[#45523e]", tag: "bg-[#010101]", desc: "We deliver turnkey Battery Energy Storage System (BESS) projects, including engineering, procurement, installation, commissioning, and grid integration to enhance energy reliability, flexibility, and operational efficiency." },
              { key: "manufacturing", img: "/service-manufacturing.jpg", label: "Grid Integration", accent: "from-[#ad5d50] to-[#010101]", tag: "bg-[#ad5d50]", desc: "We facilitate efficient grid connectivity through transmission planning, utility coordination, regulatory approvals, and power evacuation solutions, ensuring smooth integration of renewable energy projects into the grid." },
            ].map(({ key, img, label, accent, tag, desc }, index) => (
              <ScrollReveal key={key} delay={index * 60} className="h-full">
                <div
                  className="group relative flex h-80 flex-col overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/20 hover:shadow-2xl sm:h-96 cursor-default"
                >
                  {/* Background image */}
                  <Image
                    src={img}
                    alt={label}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Permanent dark-bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Hover colour tint */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />

                  {/* Label pill – always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">

                    <span
                      className={`inline-block rounded-full
    px-4 py-2
    sm:px-5 sm:py-2.5
    lg:px-6 lg:py-3
    text-sm sm:text-base
    font-bold text-white shadow-xl
    ${tag}`}
                    >
                      {label}
                    </span>

                    {/* Description – slides up on hover */}
                    <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/90 transition-all duration-500 group-hover:max-h-32">
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div >
      </section >

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      < section className="relative isolate overflow-hidden" >
        {/* Rich layered background */}
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #010101 0%, #45523e 50%, #010101 100%)' }} />

        <div className="absolute inset-0 -z-10 bg-[url('/cta.png')] bg-cover bg-center opacity-75" />

        {/* Radial vignette for depth */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          {/* Eyebrow */}
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-100 ring-1 ring-white/25">
            Let&apos;s Build Together
          </span>

          {/* Headline */}
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#FFF8E7] drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
            Ready to Power<br className="hidden sm:block" /> Your Future?
          </h2>

          {/* Sub-copy */}
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold text-[#FFF8E7] sm:text-lg drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            Tell us your capacity, location and timeline — our engineering team will craft a solution that delivers results from day one.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/30 hover:shadow-2xl"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918448282440"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <Zap className="h-4 w-4" />
              Call Us Now
            </a>
          </div>

          {/* Contact detail strip */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-xs font-medium text-emerald-100/80 sm:flex-row sm:gap-8">
            <a href="tel:+918448282440" className="flex items-center gap-2 transition-colors hover:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-base">📞</span>
              +91 8448282440
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <a href="mailto:info@gneinfra.com" className="flex items-center gap-2 transition-colors hover:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-base">✉️</span>
              info@gneinfra.com
            </a>

          </div>
        </div>
      </section >
    </div >
  );
}
