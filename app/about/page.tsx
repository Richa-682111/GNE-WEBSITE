import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Heart, Globe, BookOpen, Users, Star, TrendingUp, Zap, CheckCircle2, Linkedin, Target, Lightbulb } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

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
      title: "People First",
      description: "We believe our team is our greatest asset. Investing in growth, wellness, and happiness."
    },
    {
      icon: Briefcase,
      title: "Ownership Mindset",
      description: "Every team member owns their domain. We emppower leadership at all levels."
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
    },
    {
      icon: Star,
      title: "Excellence Culture",
      description: "We celebrate wins, learn from failures, and never stop improving."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear pathways from Junior Engineer to VP. Grow with us."
    }
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
      linkedin: "https://www.linkedin.com/in/lalitkumar07/"
    },
    {
      name: "Ajit Shah",
      title: "Vice President",
      bio: "Over 18 years of diverse experience as a Business Development Leader, specializing in stakeholder management, government liaison, and project and financial management.",
      linkedin: "#"
    },
    {
      name: "Ajay Singh",
      title: "CFO",
      bio: "Chartered Accountant with over 30 years of experience in working as CFO & Board member.",
      linkedin: "#"
    },
    {
      name: "Advita Singh",
      title: "VP - Business Development",
      bio: "Built GNE Infra's presence across 15+ countries and regions.",
      linkedin: "#"
    },
    {
      name: "Shrikant Bartakke",
      title: "Director - Finance & Strategy",
      bio: "Structured $500M+ in renewable project finance and investor partnerships.",
      linkedin: "#"
    }

    {
      name: "Rajesh Kumar",
      title: "General Manager Projects & Operation",
      bio: "Over 24 years of vast experience in Project Management, Operation Management and Solar O&M.",
      linkedin: "#"
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
      <Section className="py-8 sm:py-10 bg-slate-50 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-600 sm:text-xs">
                  WELCOME TO GNE INFRA
                </span>
                <span className="h-px flex-1 bg-emerald-600 opacity-60"></span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[42px] lg:leading-tight">
                YOUR TRUSTED ENERGY PARTNER
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px] sm:leading-7">
                At GNE Infra, we are committed to providing innovative solar energy solutions and Battery Energy Solutions (BESS) that are designed to meet the growing energy demands of businesses, industries, and communities. We are dedicated to revolutionizing the energy landscape with innovative and sustainable solar solutions. As a leading EPC (Engineering, Procurement, and Construction) company, we specialize in delivering high-quality, end-to-end solar energy solutions and BESS for commercial, industrial, and utility-scale projects. We specialize in the full spectrum of solar project development, from design and engineering to procurement and constructions.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-950/5 shadow-xl shadow-slate-950/10 transition-transform duration-500 ease-out hover:scale-[1.02] lg:max-w-md lg:justify-self-end">
              <Image
                src="/solutions-bg.jpg"
                alt="Solar project overview"
                width={1400}
                height={1000}
                className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[260px] lg:h-[300px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-10 relative overflow-hidden bg-emerald-50 dark:bg-slate-950">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                    <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Our Mission</p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                  “To develop and execute bankable clean energy projects by combining strong EPC capabilities, land procurement with grid integration approval expertise, stakeholder management, and advanced energy solutions, while building future-ready capabilities to become Solar, BESS, Green Hydrogen, Developer and actively contributing to Viksit Bharat 2047.”
                </p>
              </div>
            </Card>

            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">Our Vision</p>
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



      {/* Company Culture */}
      <Section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/30 to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/20"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-3">
              Our Culture
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              We don&apos;t just build projects—we build a community where innovation thrives and people grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cultureValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/40 dark:to-emerald-900/40 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-black text-lg text-slate-950 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Timeline → Our Journey roadmap image */}
      <Section className="py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black text-center text-slate-950 dark:text-white sm:text-4xl">
            Our Journey
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400">
            Five-year growth roadmap across solar, BESS, and green hydrogen
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-lg dark:border-emerald-900/40 dark:bg-slate-900">
            <Image
              src="/our-journey-roadmap.png"
              alt="GNE Infra five-year journey roadmap from FY2025-26 to FY2029-30"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </Section>








      {/* Leadership Section - Board Members */}
      <Section className="py-8 sm:py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
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
                className="flex h-full flex-col p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="relative mb-3 flex h-16 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 sm:h-[4.5rem]">
                  <Users className="h-8 w-8 text-slate-400 dark:text-slate-500" />
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
      <Section className="py-12 relative overflow-hidden">
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
