import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Heart, Globe, BookOpen, Users, Star, TrendingUp, Zap, CheckCircle2, Linkedin, Target, Lightbulb } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import TimelineJourney from "@/components/TimelineJourney";

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
    { number: "10+", label: "Years of Excellence", icon: TrendingUp },
    { number: "500+", label: "MWp Delivered", icon: Zap },
    { number: "15+", label: "Countries Presence", icon: Globe },
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

    <div>
      {/* About Hero Section */}
      <Section className="py-8 sm:py-10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
          <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-emerald-300/30 blur-[100px] dark:bg-emerald-900/20 animate-slow-float" />
          <div className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-300/25 blur-[80px] dark:bg-blue-900/15 animate-slow-float delay-500" />
          <div className="absolute right-1/4 top-1/2 h-[200px] w-[200px] rounded-full bg-amber-200/20 blur-[60px] dark:bg-amber-900/10 animate-slow-float delay-1000" />
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.05] dark:opacity-[0.08]">
            <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 L 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-600 sm:text-xs">
                  WELCOME TO GNE INFRA
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-60"></span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[42px] lg:leading-tight">
                YOUR TRUSTED ENERGY{" "}
                <span className="relative inline-block">
                  PARTNER
                  <span className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 animate-pulse-light-green" />
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px] sm:leading-7">
                At GNE Infra, we are committed to providing innovative solar energy solutions and Battery Energy Solutions (BESS) that are designed to meet the growing energy demands of businesses, industries, and communities. We are dedicated to revolutionizing the energy landscape with innovative and sustainable solar solutions. As a leading EPC (Engineering, Procurement, and Construction) company, we specialize in delivering high-quality, end-to-end solar energy solutions and BESS for commercial, industrial, and utility-scale projects. We specialize in the full spectrum of solar project development, from design and engineering to procurement and constructions
              </p>
            </div>

            <div className="group w-full max-w-lg mx-auto lg:mx-0 relative overflow-hidden rounded-3xl border-2 border-emerald-300/60 dark:border-emerald-700/60 bg-slate-950/5 shadow-2xl shadow-emerald-500/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-emerald-500/20 hover:border-emerald-400/80 lg:max-w-md lg:justify-self-end">
              {/* Glow ring effect */}
              <div className="pointer-events-none absolute -inset-1.5 z-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-transparent to-blue-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse-border-glow" />
              <Image
                src="/solutions-bg.jpg"
                alt="Solar project overview"
                width={1400}
                height={1000}
                className="relative z-10 h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[260px] lg:h-[300px] opacity-90 group-hover:opacity-100" // Added opacity for subtle gradient overlay effect
              />
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-emerald-900/20" />
              {/* Floating badge on image */}
              <div className="absolute bottom-4 left-4 z-30 rounded-full bg-emerald-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-lg">
                ☀ Powering India&apos;s Future
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gradient divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent dark:via-emerald-700/30" />

      {/* Mission & Vision */}
      <Section className="py-10 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-200/30 blur-[80px] dark:bg-emerald-900/20 animate-slow-float delay-700" />
          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-blue-200/20 blur-[60px] dark:bg-blue-900/15 animate-slow-float delay-1200" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-10">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-start gap-4 min-h-[72px]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                    <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-emerald-600">Our Mission</p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                  “To develop and execute bankable clean energy projects by combining strong EPC capabilities, land procurement with grid integration approval expertise, stakeholder management, and advanced energy solutions, while building future-ready capabilities to become Solar, BESS, Green Hydrogen, Developer and actively contributing to Viksit Bharat 2047.”
                </p>
              </div>
            </Card>

            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-start gap-4 min-h-[72px]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-blue-600">Our Vision</p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                  “To become a leading intelligent renewable energy ecosystem, delivering solar, storage, hybrid, and green hydrogen infrastructure through execution excellence, indigenous technology, and sustainable innovation.”
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Gradient divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-700/25" />

      {/* Company Culture */}
      <Section className="py-10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/40 via-white to-emerald-50/30 dark:from-blue-950/20 dark:via-slate-950 dark:to-emerald-950/20"></div>
        {/* Decorative accents */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-200/20 blur-[90px] dark:bg-blue-900/15 animate-slow-float delay-300" />
          <div className="absolute left-0 bottom-1/4 h-56 w-56 rounded-full bg-emerald-200/20 blur-[70px] dark:bg-emerald-900/15 animate-slow-float delay-800" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-3">
              Our Values
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              We don&apos;t just build projects—we build a community where innovation thrives and people grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cultureValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="group/card overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200/60 dark:hover:border-emerald-800/50 transition-all duration-400 transform hover:-translate-y-2 animate-fade-in-up"
                >
                  {/* Card image */}
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  {/* Card content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/40 dark:to-emerald-900/40 rounded-lg transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                        <Icon className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="font-black text-base text-slate-950 dark:text-white">{value.title}</h3>
                    </div>
                    <p className="text-[15px] text-slate-800 dark:text-slate-200 leading-7 font-medium">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
      <Section className="py-10 sm:py-14 relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0 z-0">

          <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-emerald-200/20 blur-[90px] dark:bg-emerald-900/15" />

          <div className="absolute -left-20 bottom-1/4 h-56 w-56 rounded-full bg-blue-200/20 blur-[70px] dark:bg-blue-900/15" />

        </div>



        <div className="relative z-10 mx-auto max-w-6xl px-4">

          <div className="text-center mb-6">

            <h2 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">

              Our Services

            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">

              End-to-end renewable energy solutions — from engineering to operations

            </p>

          </div>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">

            {/* Solar EPC — spans 2 rows on left */}

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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 z-10">

                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">

                  EPC / IPP / I&C

                </span>

                <h3 className="text-lg font-black text-white lg:text-xl">Solar EPC</h3>

                <p className="mt-0.5 text-xs text-white/85">Complete solar project lifecycle management</p>

              </div>

              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

              </div>

            </Link>



            {/* BESS — top right */}

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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 z-10">

                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">

                  EPC / I&C

                </span>

                <h3 className="text-lg font-black text-white">BESS</h3>

                <p className="mt-0.5 text-xs text-white/85">Battery Energy Storage Systems</p>

              </div>

              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

              </div>

            </Link>



            {/* PMC — bottom of right column */}

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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 z-10">

                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">

                  Consultancy

                </span>

                <h3 className="text-lg font-black text-white">PMC</h3>

                <p className="mt-0.5 text-xs text-white/85">Project Management Consultancy</p>

              </div>

              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

              </div>

            </Link>



            {/* O&M — bottom left */}

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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-3 z-10">

                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">

                  Operations

                </span>

                <h3 className="text-base font-black text-white">O&M</h3>

              </div>

              <div className="absolute top-3 right-3 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

              </div>

            </Link>



            {/* Green Hydrogen — bottom right wide */}

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

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-3 z-10">

                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-2">

                  Future Energy

                </span>

                <h3 className="text-lg font-black text-white">Green Hydrogen</h3>

                <p className="mt-0.5 text-xs text-white/85">Next-generation clean fuel solutions</p>

              </div>

              <div className="absolute top-3 right-3 z-10 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">

                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

              </div>

            </Link>

          </div>

        </div>

      </Section>

      {/* Timeline → Our Journey roadmap image */}
      <Section className="py-8 sm:py-10 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-center text-slate-950 dark:text-white sm:text-4xl relative z-10">
            Our Journey
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse-line" />
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400">
            Five-year growth roadmap across solar, BESS, and green hydrogen
          </p>
        </div>

        <TimelineJourney />
      </Section>




      {/* Leadership Section - Board Members */}
      <Section className="py-8 sm:py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/20 rounded-full blur-3xl -mr-48 -mt-48 animate-slow-float delay-200"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl -ml-48 -mb-48 animate-slow-float delay-900"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5" />
              World-Class Leadership
            </div>
            <h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
              Meet Our Board Members
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Experienced leaders driving renewable energy across solar, BESS, and hydrogen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {leadership.map((leader, idx) => (
              <Card
                key={idx}
                className="flex h-full flex-col p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 animate-fade-in-up"

              >
                <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-lg">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold leading-tight text-slate-950 dark:text-white">
                  {leader.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  {leader.title}
                </p>
                <p className="mt-1.5 line-clamp-3 flex-grow text-[10px] leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[11px]">
                  {leader.bio}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline sm:text-[11px]"
                >
                  <Linkedin className="h-3 w-3" />
                  Connect
                </a>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="py-8 sm:py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/30 dark:to-blue-950/30"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-4">
            Let&apos;s Build the Energy Future Together
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            From vision to execution, GNE Infra delivers integrated renewable solutions that drive real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Back to Home
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 backdrop-blur-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </Section>


    </div>
  );
}
