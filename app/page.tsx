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
            className="mx-auto max-w-5xl text-center text-4xl font-malgiva font-normal leading-[1.08] text-[#f5ece5] sm:text-6xl md:text-[64px] lg:text-[72px] xl:text-[80px]"
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
              color: '#f5ece5',
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
      <section className="relative overflow-hidden py-10 sm:py-16 xl:py-14" style={{ background: '#f5ece5' }}>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-14 text-center">

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

                <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl p-6 shadow-2xl sm:p-10" style={{ background: 'linear-gradient(135deg, #e2efe7 0%, #cbe4d5 100%)', border: '1.5px solid rgba(13,115,66,0.35)', boxShadow: '0 20px 50px rgba(13,115,66,0.12), 0 8px 20px rgba(0,0,0,0.06)' }}>
                  <div className="orbital-wrap relative mx-auto flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[380px] lg:w-[380px] xl:h-[420px] xl:w-[420px] [--orbit-radius:76px] sm:[--orbit-radius:98px] md:[--orbit-radius:118px] lg:[--orbit-radius:145px] xl:[--orbit-radius:165px]">
                    {/* Animated orbit rings */}
                    <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-emerald-300/40" />
                    <div className="absolute inset-6 sm:inset-8 xl:inset-10 animate-[spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-sky-300/30" />

                    {/* Centre hub */}
                    <div className="relative z-10 flex h-16 w-16 sm:h-24 sm:w-24 xl:h-32 xl:w-32 flex-col items-center justify-center rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #1a4731, #0f2d1e)' }}>
                      <Leaf className="mb-1 h-4 w-4 sm:h-6 sm:w-6 xl:h-9 xl:w-9 text-white" />
                      <span className="hidden sm:block text-[10px] sm:text-xs font-black uppercase tracking-wider text-white/95">GNE INFRA</span>
                    </div>

                    {/* Orbital nodes */}
                    {[
                      { label: "Environment", angle: 0, icon: "🌱", color: "bg-emerald-100 text-emerald-950 border-2 border-emerald-300/80" },
                      { label: "Economic", angle: 60, icon: "📈", color: "bg-blue-100 text-blue-950 border-2 border-blue-300/80" },
                      { label: "Operational", angle: 120, icon: "⚙️", color: "bg-amber-100 text-amber-950 border-2 border-amber-300/80" },
                      { label: "Innovation", angle: 180, icon: "💡", color: "bg-purple-100 text-purple-950 border-2 border-purple-300/80" },
                      { label: "Social", angle: 240, icon: "🤝", color: "bg-rose-100 text-rose-950 border-2 border-rose-300/80" },
                      { label: "Technical", angle: 300, icon: "⚡", color: "bg-cyan-100 text-cyan-950 border-2 border-cyan-300/80" },
                    ].map(({ label, angle, icon, color }) => {
                      const rad = (angle - 90) * (Math.PI / 180);
                      const cosVal = Math.cos(rad);
                      const sinVal = Math.sin(rad);
                      return (
                        <div
                          key={label}
                          className={`absolute flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-28 xl:w-28 flex-col items-center justify-center rounded-xl sm:rounded-2xl lg:rounded-3xl text-center text-[7px] sm:text-[9px] lg:text-xs xl:text-sm font-bold leading-none sm:leading-tight shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-20 ${color}`}
                          style={{
                            transform: `translate(calc(var(--orbit-radius) * ${cosVal}), calc(var(--orbit-radius) * ${sinVal}))`,
                          }}
                        >
                          <span className="text-base sm:text-xl lg:text-3xl xl:text-4xl leading-none mb-0.5 sm:mb-1">{icon}</span>
                          <span className="px-1 block tracking-tight font-extrabold">{label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Label below */}

                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — Copy */}
            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-6">
                <p className="text-xl leading-relaxed text-left md:text-justify" style={{ color: '#010101' }}>
                  GNE Infra delivers integrated renewable energy solutions across Solar EPC, Battery Energy Storage Systems (BESS), Project Development, Land Acquisition, Grid Connectivity, and Project Management Consultancy (PMC). Combining engineering excellence, execution capability, and strategic advisory, we help clients accelerate project delivery, optimize investments, and develop reliable, future-ready energy infrastructure.

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
      <section className="relative py-12 sm:py-20 xl:py-16 overflow-hidden" style={{ background: '#fbf5eb' }}>
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
            <div className="lg:col-span-7 divide-y divide-slate-200/70">
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
                  <div className="flex gap-6 py-7 sm:gap-10 sm:py-8 rounded-xl px-2 sm:px-4 -mx-2 sm:-mx-4 items-stretch">
                    <div className="shrink-0 w-14 sm:w-20 pt-0.5">
                      <span
                        className="text-4xl sm:text-5xl font-black leading-none select-none inline-block"
                        style={{ color: accent, opacity: 0.45 }}
                      >
                        {num}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-0.5 rounded-full self-stretch opacity-60"
                      style={{ background: accent }}
                    />
                    <div className="flex-1 min-w-0 py-0.5">
                      <h3
                        className="text-base sm:text-lg font-bold leading-snug"
                        style={{ color: accent }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed max-w-xl font-medium" style={{ color: '#374151' }}>
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
                <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group aspect-[3/4] sm:aspect-[16/10] lg:aspect-[4/5] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[540px]">
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
                <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group aspect-[3/4] sm:aspect-[16/10] lg:aspect-[4/5] sm:min-h-[360px] lg:min-h-[460px]">
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

                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Last 3 Points (Span 7) - Order 1 on mobile, 2 on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2 divide-y divide-slate-200/70">
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
                  accent: "#991b1b", // Deep ruby red for rich contrast and executive weight
                },
              ].map(({ num, title, body, accent }, i) => (
                <ScrollReveal key={num} delay={i * 60}>
                  <div className="flex gap-6 py-7 sm:gap-10 sm:py-8 rounded-xl px-2 sm:px-4 -mx-2 sm:-mx-4 items-stretch">
                    <div className="shrink-0 w-14 sm:w-20 pt-0.5">
                      <span
                        className="text-4xl sm:text-5xl font-black leading-none select-none inline-block"
                        style={{ color: accent, opacity: 0.45 }}
                      >
                        {num}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-0.5 rounded-full self-stretch opacity-60"
                      style={{ background: accent }}
                    />
                    <div className="flex-1 min-w-0 py-0.5">
                      <h3
                        className="text-base sm:text-lg font-bold leading-snug"
                        style={{ color: accent }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed max-w-xl font-medium" style={{ color: '#374151' }}>
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
      <section className="relative overflow-x-hidden overflow-y-visible py-10 sm:py-16 xl:py-14" style={{ background: '#f5ece5' }}>
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
              <p className="mx-auto mt-3 max-w-2xl text-sm text-center" style={{ color: '#492c06ff' }}>
                End-to-end renewable energy solutions — from land identification to long-term operations — engineered for scale.
              </p>
            </div>
          </ScrollReveal>

          {/* 3×2 Service Card Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              { key: "land", href: "/solar-epc", img: "/service-land.jpg", label: "Land Procurement & Grid Connectivity", accent: "from-[#45523e] to-[#2a3328]", tag: "bg-[#45523e]", desc: "We enable renewable energy projects through strategic land procurement, techno-legal due diligence, grid connectivity planning, regulatory approvals, and stakeholder coordination—ensuring faster project development with minimized execution risks." },
              { key: "installation", href: "/pmc", img: "/service-pmc.jpg", label: "PMC(Solar, BESS, PSP, Wind)", accent: "from-[#b0aca2] to-[#7a756f]", tag: "bg-[#b0aca2]", desc: "We deliver end-to-end PMC services for Solar, BESS, PSP, and Wind projects, covering planning, engineering coordination, procurement, execution monitoring, quality assurance, and stakeholder management for timely project delivery." },
              { key: "epc", href: "/solar-epc", img: "/service-epc.jpg", label: "Solar EPC", accent: "from-[#45523e] to-[#010101]", tag: "bg-[#45523e]", desc: "We provide complete Solar EPC services from feasibility studies and detailed engineering to procurement, construction, commissioning, and grid connectivity, ensuring high-quality and timely project delivery." },
              { key: "om", href: "/o-and-m", img: "/service-om.jpg", label: "O&M(BESS, Solar,PSP)", accent: "from-[#ad5d50] to-[#7a3f35]", tag: "bg-[#ad5d50]", desc: "We deliver end-to-end operations and maintenance services focused on maximizing plant availability, improving energy generation, reducing downtime, and extending asset life." },
              { key: "bess", href: "/bess-ems", img: "/service-bess.jpg", label: "BESS (EPC/C&I, I&C)", accent: "from-[#010101] to-[#45523e]", tag: "bg-[#010101]", desc: "We deliver turnkey Battery Energy Storage System (BESS) projects, including engineering, procurement, installation, commissioning, and grid integration to enhance energy reliability, flexibility, and operational efficiency." },
              { key: "manufacturing", href: "/green-hydrogen", img: "/grid-integration.png", label: "Grid Integration", accent: "from-[#ad5d50] to-[#010101]", tag: "bg-[#ad5d50]", desc: "We facilitate efficient grid connectivity through transmission planning, utility coordination, regulatory approvals, and power evacuation solutions, ensuring smooth integration of renewable energy projects into the grid." },
            ].map(({ key, img, label, accent, tag, desc }, index) => (
              <ScrollReveal key={key} delay={index * 60} className="h-full">
                <div
                  className="group relative flex h-64 sm:h-72 lg:h-72 xl:h-96 flex-col overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block"
                >
                  {/* Background image */}
                  <Image
                    src={img}
                    alt={label}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Permanent dark-bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Hover colour tint */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />

                  {/* Label & Description Box */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 transition-colors duration-500 group-hover:bg-black/60">
                    <span
                      className={`inline-block rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-xl ${tag}`}
                    >
                      {label}
                    </span>

                    {/* Description – slides up on hover */}
                    <p className="mt-3 max-h-0 overflow-hidden text-xs leading-relaxed text-white transition-all duration-500 group-hover:max-h-48">
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
          <p className="mx-auto mt-5 max-w-xl text-center text-base font-semibold text-[#FFF8E7] sm:text-lg drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
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
