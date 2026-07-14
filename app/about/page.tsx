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
      bio: "Seasoned leader with over 35 years of global experience across the energy sector, spanning solar, nuclear, thermal, and hydro power.",
      linkedin: "https://www.linkedin.com/in/lalitkumar07/",
      image: "/lalit kumar.jpg"
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
      title: "President",
      bio: "Seasoned business leader with over 20 years of experience across telecommunications, infrastructure and renewable energy.",
      linkedin: "https://www.linkedin.com/in/shrikant-bartakke-2b977b60/",
      image: "/Shrikant.jpeg"
    },
    {
      name: "Ajit Shah",
      title: "Vice President",
      bio: "Over 18 years of diverse experience as a Business Development Leader, specializing in stakeholder management, government liaison, and project and financial management.",
      linkedin: "https://www.linkedin.com/in/ajit-shah-2a97b336a/",
      image: "/ajit shah.jpg"
    },
    {
      name: "Rajesh Kumar",
      title: "General Manager Projects & Operation",
      bio: "Over 24 years of vast experience in Project Management, Operation Management and Solar O&M.",
      linkedin: "https://www.linkedin.com/in/rajesh-pal-34b81a16/",
      image: "/rajesh kumar.jpg",
    },
    {
      name: "",
      title: "",
      bio: "",
      linkedin: "",
      image: "/default-avatar.png",
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
        <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center px-4">
          <div className="max-w-[650px] text-center space-y-6">

            {/* Heading */}
            <h1 className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-[72px] text-white leading-[1.05] tracking-tight">
              About US
            </h1>

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


      {/* 3. "Your Trusted Energy Partner" Section — 3-Image Overlapping Architectural Collage */}
      <section className="py-12 sm:py-16 bg-transparent font-inter relative overflow-hidden">
        {/* Optimized wide container to reduce wasted whitespace */}
        <div className="mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

            {/* Left Narrative Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#16a34a] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                  WELCOME TO GNE INFRA
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] tracking-tight" style={{ color: '#010101' }}>
                YOUR TRUSTED <span style={{ color: '#256c4aff' }}>ENERGY PARTNER</span>
              </h2>

              {/* Exact Description Text - Left Aligned */}
              <div className="space-y-4 text-[15.5px] leading-[1.8]" style={{ color: '#5a5249' }}>
                <p className="text-justify ">
                  GNE Infra is an integrated clean energy infrastructure company delivering end-to-end solutions across Engineering, Procurement & Construction (EPC), Project Management Consultancy (PMC), and Operations & Maintenance (O&M). Our expertise spans Solar Power, Battery Energy Storage Systems (BESS), Wind Energy, and Pumped Storage Projects (PSP), supporting projects from concept and engineering through commissioning and long-term asset management.
                  Driven by innovation and execution excellence, GNE Infra is expanding into Green Hydrogen and next-generation energy technologies to accelerate the transition towards a sustainable, resilient, and low-carbon energy future.
                </p>
              </div>




            </div>
            {/* Right Column: 3-Image Overlapping Architectural Collage + Scroll/Hover Animations */}
            <div className="lg:col-span-7 relative flex items-center justify-end py-8">
              {/* Subtle ambient lighting behind images */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

              {/* Main Primary Image Card - HUGE SIZE */}
              <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-slate-200 group transition-all duration-700 hover:shadow-[0_30px_70px_rgba(13,115,66,0.25)]">
                <Image
                  src="/new-solar-farm.jpg"
                  alt="Utility Scale Solar Plant Infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Overlapping Secondary Image Card (Bottom Right) - LARGE SIZE */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-[60%] sm:w-[56%] aspect-[16/11] rounded-[24px] overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.3)] border-[5px] border-white z-20 group/second transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <Image
                  src="/new-solar-epc.jpg"
                  alt="Solar EPC Installation & Operations"
                  fill
                  className="object-cover transition-transform duration-700 group/second-hover:scale-110"
                />

              </div>



            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Section — Split-Screen Photography Editorial Cards */}
      <section className="py-20 sm:py-28 font-inter relative overflow-hidden" style={{ background: '#fbf5eb' }}>
        {/* Subtle decorative grid lines */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
          <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-12">
          {/* Section Heading & Context */}
          <div className="mb-12 text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                PURPOSE & DIRECTION
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-5xl text-[#010101]">
              Our <span className="text-[#16a34a]">Mission</span> & <span className="text-[#ad5d50]">Vision</span>
            </h2>
          </div>

          {/* Two Card Grid — Large Split-Screen Cards with Expansive Photography Header & Frosted Glass Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

            {/* Mission Card - EXPANDED SIZE */}
            <div className="group flex flex-col rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(13,115,66,0.14)] border border-[#0d7342]/25 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(13,115,66,0.24)]">
              {/* Visual Header Band with Massive High-Res Image & Gradient Overlay */}
              <div className="relative h-56 lg:h-64 xl:h-80 2xl:h-96 w-full overflow-hidden shrink-0">
                <Image
                  src="/service-epc.jpg"
                  alt="Solar EPC & Renewable Energy Infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

                {/* Floating Emblem Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2.5 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md border border-white/35 text-white">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    01 • Mission
                  </span>
                </div>

                {/* Title Overlay - Centered in Image */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="font-sora font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-center drop-shadow-lg">
                    Our <span className="text-emerald-400">Mission</span>
                  </h3>
                </div>
              </div>

              {/* Frosted Glass Content Overlay Body - EXPANDED PADDING */}
              <div className="flex flex-col justify-center flex-grow p-8 sm:p-11 lg:p-12 bg-white/95 backdrop-blur-xl text-center">
                <p className="text-[#1e293b] font-medium text-[16.5px] sm:text-[18px] leading-[1.85] tracking-normal font-inter text-center">
                  To develop and execute bankable clean energy projects by combining strong EPC capabilities, land procurement with grid integration approval expertise, stakeholder management, and advanced energy solutions, while building future-ready capabilities to become Solar, BESS, Green Hydrogen, Developer and actively contributing to Viksit Bharat 2047.
                </p>
              </div>
            </div>

            {/* Vision Card - EXPANDED SIZE */}
            <div className="group flex flex-col rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(173,93,80,0.14)] border border-[#ad5d50]/25 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(173,93,80,0.24)]">
              {/* Visual Header Band with Massive High-Res Image & Gradient Overlay */}
              <div className="relative h-56 lg:h-64 xl:h-80 2xl:h-96 w-full overflow-hidden shrink-0">
                <Image
                  src="/hero-hybrid-2.webp"
                  alt="Intelligent Renewable Energy Ecosystem"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

                {/* Floating Emblem Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2.5 rounded-full bg-white/20 px-5 py-2 backdrop-blur-md border border-white/35 text-white">
                  <Eye className="w-4 h-4 text-orange-300" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    02 • Vision
                  </span>
                </div>

                {/* Title Overlay - Centered in Image */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h3 className="font-sora font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-center drop-shadow-lg">
                    Our <span className="text-orange-300">Vision</span>
                  </h3>
                </div>
              </div>

              {/* Frosted Glass Content Overlay Body - EXPANDED PADDING */}
              <div className="flex flex-col justify-center flex-grow p-8 sm:p-11 lg:p-12 bg-white/95 backdrop-blur-xl text-center">
                <p className="text-[#1e293b] font-medium text-[16.5px] sm:text-[18px] leading-[1.85] tracking-normal font-inter text-center">
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
      <section className="py-16 sm:py-24 bg-transparent font-inter border-y border-[#e5e7eb]/50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                WHAT WE PROVIDE
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-5xl" style={{ color: '#010101' }}>
              Our <span style={{ color: '#256c4aff' }}>Services</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              End-to-end renewable energy solutions — from engineering to operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[190px] sm:auto-rows-[210px] lg:auto-rows-[230px] xl:auto-rows-[260px]">
            {/* Solar EPC */}
            <Link
              href="/solar-epc"
              className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block cursor-pointer"
            >
              <Image
                src="/solar epc.png"
                alt="Solar EPC"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-0 p-5 sm:p-6 lg:p-8 z-10 text-left w-full">
                <span className="inline-block rounded-full bg-white/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md mb-3">
                  EPC / IPP / I&C
                </span>
                <h3 className="text-2xl font-sora font-extrabold text-white sm:text-3xl lg:text-4xl">Solar EPC</h3>
                <p className="mt-1 text-sm sm:text-base text-white font-semibold drop-shadow-md">Complete solar project lifecycle management</p>
              </div>
              <div className="absolute top-6 right-6 z-10 rounded-full bg-white/20 p-3 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* BESS */}
            <Link
              href="/bess-ems"
              className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block cursor-pointer"
            >
              <Image
                src="/bess.png"
                alt="BESS"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-0 p-5 sm:p-6 z-10 text-left w-full">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md mb-2.5">
                  EPC / I&C
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-white">BESS</h3>
                <p className="mt-1 text-xs sm:text-sm text-white font-semibold drop-shadow-md">Battery Energy Storage Systems</p>
              </div>
              <div className="absolute top-5 right-5 z-10 rounded-full bg-white/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* PMC */}
            <Link
              href="/pmc"
              className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block cursor-pointer"
            >
              <Image
                src="/pmc.png"
                alt="PMC"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-0 p-5 sm:p-6 z-10 text-left w-full">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md mb-2.5">
                  Consultancy
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-white">PMC</h3>
                <p className="mt-1 text-xs sm:text-sm text-white font-semibold drop-shadow-md">Project Management Consultancy</p>
              </div>
              <div className="absolute top-5 right-5 z-10 rounded-full bg-white/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* O&M */}
            <Link
              href="/o-and-m"
              className="group relative col-span-1 md:col-span-1 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block cursor-pointer"
            >
              <Image
                src="/o&m.png"
                alt="O&M"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-0 p-5 sm:p-6 z-10 text-left w-full">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md mb-2">
                  Operations
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-white">O&M</h3>
                <p className="mt-1 text-xs sm:text-sm text-white font-semibold drop-shadow-md">Operations &amp; Maintenance</p>
              </div>
              <div className="absolute top-5 right-5 z-10 rounded-full bg-white/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* Green Hydrogen */}
            <Link
              href="/green-hydrogen"
              className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl transition-all duration-500 ease-out hover:scale-[1.06] hover:-translate-y-3 hover:z-30 hover:shadow-[0_30px_70px_rgba(22,163,74,0.35)] block cursor-pointer"
            >
              <Image
                src="/green hydrogen.png"
                alt="green hydrogen"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-lime-600/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-0 p-5 sm:p-6 z-10 text-left w-full">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md mb-2">
                  Future Energy
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold text-white">Green Hydrogen</h3>
                <p className="mt-1 text-xs sm:text-sm text-white font-semibold drop-shadow-md">Next-generation clean fuel solutions</p>
              </div>
              <div className="absolute top-5 right-5 z-10 rounded-full bg-white/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Our Journey Section */}
      <section className="py-10 sm:py-16 bg-transparent font-inter">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                OUR GROWTH
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-5xl" style={{ color: '#010101' }}>
              Our <span style={{ color: '#ad5d50' }}>Journey</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              Five-year growth roadmap across solar, BESS, and green hydrogen
            </p>
          </div>

          <TimelineJourney />
        </div>
      </section>

      {/* 9. Leadership Section - Board Members */}
      <section className="py-16 sm:py-24 bg-transparent border-t border-[#e5e7eb]/50 font-inter">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#16a34a]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#22c55e]">
                OUR LEADERSHIP
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-5xl" style={{ color: '#010101' }}>
              Meet Our <span style={{ color: '#14b56fff' }}>Top Management</span>
            </h2>
            <p className="mt-2 text-base sm:text-lg max-w-2xl font-normal" style={{ color: '#5a5249' }}>
              Experienced leaders driving renewable energy across solar, BESS, and hydrogen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
            {leadership.map((leader, idx) => (
              <Card
                key={idx}
                className="flex h-full flex-col p-5 sm:p-6 lg:p-7 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-left"
              >
                <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-sora font-extrabold leading-tight text-[#111827] text-left">
                  {leader.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#16a34a] text-left">
                  {leader.title}
                </p>
                <p className="mt-3 flex-grow text-xs sm:text-sm leading-relaxed text-[#475569] text-left">
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#16a34a] hover:text-[#15803d] hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
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
