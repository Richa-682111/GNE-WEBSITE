import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Heart,
  Globe,
  BookOpen,
  Users,
  Star,
  TrendingUp,
  Zap,
  CheckCircle2,
  Linkedin,
  Target,
  Lightbulb,
  Eye,
  ArrowRight
} from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import TimelineJourney from "@/components/TimelineJourney";
import { CoreValuesSection } from "@/components/CoreValuesSection";

export const metadata: Metadata = {
  title: "About GNE Infra | Our Story, Culture & Team",
  description:
    "Discover GNE Infra's founding story, company culture, global offices, and the passionate team building the renewable energy future.",
};

export default function AboutPage() {
  const offices = [
    {
      city: "Bangalore, India",
      country: "Headquarters",
      description: "Global headquarters and R&D center",
      team: "200+ team members"
    },
    {
      city: "Delhi, India",
      country: "Operations Hub",
      description: "Project execution and commercial hub",
      team: "80+ professionals"
    },
    {
      city: "Singapore",
      country: "Asia-Pacific",
      description: "Regional office and business development",
      team: "40+ staff"
    },
    {
      city: "Dubai, UAE",
      country: "Middle East Hub",
      description: "Gateway to ME and Africa expansion",
      team: "30+ professionals"
    },
    {
      city: "London, UK",
      country: "Europe Office",
      description: "European market expansion center",
      team: "25+ team members"
    },
    {
      city: "Sydney, Australia",
      country: "APAC Center",
      description: "Australia and Oceania operations",
      team: "20+ professionals"
    }
  ];

  const cultureValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We are committed to upholding the highest standards of professionalism, ethics, and transparency in all our operations.",
      image: "/collaboration.jpg",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continually explore new technologies and strategies to provide cutting-edge solar energy solutions that address evolving energy needs.",
      image: "/value.jpg",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We strive to minimize environmental impact while helping our clients transition to renewable energy sources.",
      image: "/sustainablility.jpg",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Our dedication to quality ensures that every project we undertake is completed to the highest standards of craftsmanship and efficiency.",
      image: "/excellence.jpg",
    },
  ];

  const achievements = [
    { metric: "500+", label: "MWp Installed", color: "from-emerald-500 to-green-500" },
    { metric: "15+", label: "Countries", color: "from-blue-500 to-cyan-500" },
    { metric: "€2.5B+", label: "Projects Value", color: "from-purple-500 to-pink-500" },
    { metric: "50k+", label: "Lives Impacted", color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      quote: "GNE Infra didn't just build our solar plant—they built a partnership. Their team's commitment to excellence is unmatched.",
      company: "Fortune 500 Energy Company",
      author: "VP Operations"
    },
    {
      quote: "From concept to commissioning in record time, GNE delivered a 200% ROI project. Exceptional execution.",
      company: "Industrial Manufacturing Group",
      author: "CFO"
    },
    {
      quote: "The integrated solar-BESS solution they designed reduced our grid dependency by 80%. Truly innovative.",
      company: "Regional Utility Provider",
      author: "Chief Technology Officer"
    }
  ];

  const teamBenefits = [
    "Competitive salary & stock options",
    "100% health insurance coverage",
    "Flexible work arrangements",
    "Annual international conferences",
    "Career development budget",
    "Wellness programs & gym",
    "Parental leave (4+ months)",
    "Learning stipend (₹100k/year)"
  ];

  const stats = [
    { number: "500+", label: "MWp Delivered", icon: Zap },
    { number: "98%", label: "Client Satisfaction", icon: Star }
  ];

  const whyUs = [
    {
      title: "Integrated Approach",
      description: "Solar + BESS + Hydrogen engineered as one coordinated system, not isolated projects."
    },
    {
      title: "Execution Excellence",
      description: "98% on-time project delivery with transparent milestones and dedicated project management."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe our team is our greatest asset. Investing in growth, wellness, and happiness."
    },
    {
      icon: Briefcase,
      title: "Ownership Mindset",
      description: "Every team member owns their domain. We empower leadership at all levels."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Industry certifications, training programs, and mentorship opportunities for all."
    },
    {
      icon: Globe,
      title: "Global Diversity",
      description: "40+ nationalities working together. Diversity strengthens our innovation."
    }
  ];

  const leadership = [
    {
      name: "Lalit Kumarr",
      title: "Founder & CEO",
      bio: "20+ years in renewable energy. Led large-scale solar across Asia-Pacific.",
      linkedin: "https://www.linkedin.com/in/lalitkumar07/",
      image: "/lalit kumar.jpg"
    },
    {
      name: "Ajit Shah",
      title: "Vice President",
      bio: "Over 18 years of diverse experience as a Business Development Leader, specializing in stakeholder management, government liaison, and project and financial management.",
      linkedin: "https://www.linkedin.com/in/ajit-shah-2a97b336a/",
      image: "/ajit shah.jpg"
    },
    {
      name: "Ajay Singh",
      title: "CFO",
      bio: "Chartered Accountant with over 30 years of experience in working as CFO & Board member.",
      linkedin: "-",
      image: "/ajay singh.jpg"
    },
    {
      name: "Shrikant Bartakke",
      title: "Director - Finance & Strategy",
      bio: "Structured $500M+ in renewable project finance and investor partnerships.",
      linkedin: "https://www.linkedin.com/in/shrikant-bartakke-2b977b60/",
      image: "/default-avatar.png"
    },
    {
      name: "Rajesh Kumar",
      title: "General Manager Projects & Operation",
      bio: "Over 24 years of vast experience in Project Management, Operation Management and Solar O&M.",
      linkedin: "https://www.linkedin.com/in/rajesh-pal-34b81a16/",
      image: "/rajesh kumar.jpg",
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Founded by Lalit Kumarr with a vision to democratize renewable energy in Asia",
      event: "Founded GNE Infra with vision to democratize renewable energy",
      icon: "🌱"
    },
    {
      year: "2017",
      title: "First Major Success",
      description: "Completed India's first 50 MWp utility-scale solar plant in record time",
      event: "Completed first 50 MWp utility-scale solar project",
      icon: "⚡"
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened Singapore office and secured $50M in Series A funding",
      event: "Expanded to 200+ MWp installations across 8 countries",
      icon: "🌍"
    },
    {
      year: "2019",
      title: "BESS Innovation",
      description: "Launched integrated battery energy storage solutions with AI-powered EMS",
      event: "Launched integrated BESS solutions for grid stability",
      icon: "🔋"
    },
    {
      year: "2021",
      title: "Global Reach",
      description: "Established presence in 8 countries with 300+ MWp portfolio",
      event: "Expanded to 200+ MWp installations across 8 countries",
      icon: "🗺️"
    },
    {
      year: "2023",
      title: "The H2 Leap",
      description: "Pioneered green hydrogen integration for industrial decarbonization",
      event: "Pioneered green hydrogen integration with solar systems",
      icon: "♻️"
    },
    {
      year: "2025",
      title: "Carbon Neutral",
      description: "Achieved carbon-neutral operations and 500k+ tons CO₂ reduction impact",
      event: "Achieved carbon-neutral operations with 500k+ tons CO₂ reduction",
      icon: "🌿"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-inter bg-transparent text-[#111827] antialiased">

      {/* 1. Hero Section */}
      <section className="relative h-[88vh] min-h-[560px] w-full flex items-center justify-start overflow-hidden bg-slate-950">
        {/* Background Image */}
        <Image
          src="/about-hero.png"
          alt="About GNE Infra"
          fill
          priority
          className="absolute inset-0 object-cover object-top"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)"
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="max-w-[650px] text-left space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#16a34a] shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                ABOUT GNE INFRA
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-[72px] text-white leading-[1.05] tracking-tight">
              About GNE Infra
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-white/65 max-w-[500px] leading-[1.7] font-normal">
              Discover GNE Infra&apos;s founding story, company culture, global offices, and the passionate team building the renewable energy future.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] bg-[#16a34a] px-[28px] py-[14px] text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#15803d]"
              >
                <span>Discuss Your Project</span>
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
          </div>
        </div>
      </section>


      {/* 3. "Your Trusted Energy Partner" Section */}
      <section className="py-[100px] bg-transparent font-inter">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6 text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#16a34a] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                  WELCOME TO GNE INFRA
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-tight" style={{ color: '#010101' }}>
                YOUR TRUSTED <span style={{ color: '#256c4aff' }}>ENERGY PARTNER</span>
              </h2>

              {/* Description */}
              <div className="space-y-4 text-[15px] leading-[1.8]" style={{ color: '#5a5249' }}>
                <p>
                  GNE Infra is an integrated clean energy infrastructure company delivering end-to-end solutions across Engineering, Procurement & Construction (EPC), Project Management Consultancy (PMC), and Operations & Maintenance (O&M). Our expertise spans Solar Power, Battery Energy Storage Systems (BESS), Wind Energy, and Pumped Storage Projects (PSP), supporting projects from concept and engineering through commissioning and long-term asset management.
                  Driven by innovation and execution excellence, GNE Infra is expanding into Green Hydrogen and next-generation energy technologies to accelerate the transition towards a sustainable, resilient, and low-carbon energy future.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative border behind image */}
              <div
                className="absolute border-2 border-[#dcfce7] rounded-[20px] -z-10"
                style={{ top: "-12px", right: "-12px", bottom: "12px", left: "12px" }}
              />

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[16px] shadow-lg">
                <Image
                  src="/solutions-bg.jpg"
                  alt="Solar project overview"
                  fill
                  className="object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 z-30 rounded-full bg-[#16a34a] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 shrink-0" />
                  Powering India&apos;s Future
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Section — Home Page Editorial Theme */}
      <section className="py-20 sm:py-28 font-inter relative overflow-hidden" style={{ background: '#fbf5eb' }}>
        {/* Subtle decorative grid lines matching home page */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
          <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Two Card Grid — Dark Keynote Presentation Grade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Mission Card */}
            <div className="bg-[#0B132B] text-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(11,19,43,0.35)] border border-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between">

              {/* Glowing Emerald Neon Aura */}
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#0d7342ff]/25 blur-3xl pointer-events-none group-hover:bg-[#0d7342ff]/40 transition-all duration-700" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />

              <div>
                {/* Frosted Glass Icon Emblem */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-10 text-[#4ade80] shadow-[0_0_30px_rgba(13,115,66,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8" />
                </div>

                {/* Large Keynote Heading */}
                <h3 className="font-sora font-extrabold text-4xl sm:text-5xl tracking-tight mb-6 text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-emerald-400 to-teal-300">Mission</span>
                </h3>

                {/* Clean Executive Typography (No Italic, No Blockquote Borders!) */}
                <p className="text-slate-300 font-normal text-base sm:text-lg lg:text-xl leading-[1.85] tracking-wide font-inter max-w-2xl">
                  To develop and execute bankable clean energy projects by combining strong EPC capabilities, land procurement with grid integration approval expertise, stakeholder management, and advanced energy solutions, while building future-ready capabilities to become Solar, BESS, Green Hydrogen, Developer and actively contributing to Viksit Bharat 2047.
                </p>
              </div>


            </div>

            {/* Vision Card */}
            <div className="bg-[#0B132B] text-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(11,19,43,0.35)] border border-white/10 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between">

              {/* Glowing Terracotta Neon Aura */}
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ad5d50]/25 blur-3xl pointer-events-none group-hover:bg-[#ad5d50]/40 transition-all duration-700" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-700" />

              <div>
                {/* Frosted Glass Icon Emblem */}
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-10 text-[#ff9e8a] shadow-[0_0_30px_rgba(173,93,80,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8" />
                </div>

                {/* Large Keynote Heading */}
                <h3 className="font-sora font-extrabold text-4xl sm:text-5xl tracking-tight mb-6 text-white">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9e8a] via-orange-400 to-amber-300">Vision</span>
                </h3>

                {/* Clean Executive Typography (No Italic, No Blockquote Borders!) */}
                <p className="text-slate-300 font-normal text-base sm:text-lg lg:text-xl leading-[1.85] tracking-wide font-inter max-w-2xl">
                  To become a leading intelligent renewable energy ecosystem, delivering solar, storage, hybrid, and green hydrogen infrastructure through execution excellence, indigenous technology, and sustainable innovation.
                </p>
              </div>



            </div>

          </div>

        </div>
      </section>

      {/* 5. Our Values Section (10-Stage Apple/Tesla Style Scroll Animation) */}
      <CoreValuesSection />



      {/* 7. Our Services Section */}
      <section className="py-[100px] bg-transparent font-inter border-y border-[#e5e7eb]/50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                WHAT WE PROVIDE
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl" style={{ color: '#010101' }}>
              Our <span style={{ color: '#256c4aff' }}>Services</span>
            </h2>
            <p className="mt-2 text-[15px] max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              End-to-end renewable energy solutions — from engineering to operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
            {/* Solar EPC */}
            <Link
              href="/solar-epc"
              className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/solar epc.png"
                alt="Solar EPC"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 z-10 text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">
                  EPC / IPP / I&C
                </span>
                <h3 className="text-lg font-sora font-extrabold text-white lg:text-xl">Solar EPC</h3>
                <p className="mt-0.5 text-xs text-white/85">Complete solar project lifecycle management</p>
              </div>
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* BESS */}
            <Link
              href="/bess-ems"
              className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/bess.png"
                alt="BESS"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 z-10 text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">
                  EPC / I&C
                </span>
                <h3 className="text-lg font-sora font-extrabold text-white">BESS</h3>
                <p className="mt-0.5 text-xs text-white/85">Battery Energy Storage Systems</p>
              </div>
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* PMC */}
            <Link
              href="/pmc"
              className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/pmc.png"
                alt="PMC"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 z-10 text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">
                  Consultancy
                </span>
                <h3 className="text-lg font-sora font-extrabold text-white">PMC</h3>
                <p className="mt-0.5 text-xs text-white/85">Project Management Consultancy</p>
              </div>
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* O&M */}
            <Link
              href="/o-and-m"
              className="group relative col-span-1 md:col-span-1 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/o&m.png"
                alt="O&M"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 z-10 text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">
                  Operations
                </span>
                <h3 className="text-base font-sora font-extrabold text-white">O&M</h3>
              </div>
              <div className="absolute top-3 right-3 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* Green Hydrogen */}
            <Link
              href="/green-hydrogen"
              className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src="/green hydrogen.png"
                alt="green hydrogen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-lime-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 z-10 text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">
                  Future Energy
                </span>
                <h3 className="text-lg font-sora font-extrabold text-white">Green Hydrogen</h3>
                <p className="mt-0.5 text-xs text-white/85">Next-generation clean fuel solutions</p>
              </div>
              <div className="absolute top-3 right-3 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Our Journey Section */}
      <section className="py-[100px] bg-transparent font-inter">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                OUR GROWTH
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl" style={{ color: '#010101' }}>
              Our <span style={{ color: '#ad5d50' }}>Journey</span>
            </h2>
            <p className="mt-2 text-[15px] max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              Five-year growth roadmap across solar, BESS, and green hydrogen
            </p>
          </div>

          <TimelineJourney />
        </div>
      </section>

      {/* 9. Leadership Section - Board Members */}
      <section className="py-[100px] bg-transparent border-t border-[#e5e7eb]/50 font-inter">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                OUR LEADERSHIP
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl" style={{ color: '#010101' }}>
              Meet Our <span style={{ color: '#1a98a8ff' }}>Board Members</span>
            </h2>
            <p className="mt-2 text-[15px] max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              Experienced leaders driving renewable energy across solar, BESS, and hydrogen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {leadership.map((leader, idx) => (
              <Card
                key={idx}
                className="flex h-full flex-col p-4 bg-white/60 backdrop-blur-md border border-[#e5e7eb] rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-left"
              >
                <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-sora font-bold leading-tight text-[#111827]">
                  {leader.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[#16a34a]">
                  {leader.title}
                </p>
                <p className="mt-2 line-clamp-3 flex-grow text-xs leading-relaxed text-[#6b7280]">
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#16a34a] hover:underline"
                >
                  <Linkedin className="h-3 w-3" />
                  Connect
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
}
