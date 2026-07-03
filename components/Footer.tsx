"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer className="font-inter text-white">
      {/* ── TOP SECTION: Let's Build the Clean Energy Future Together ───────── */}
      <div className="bg-[#113823] py-16 sm:py-20 border-t border-emerald-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column — Copy & Contact Details (Span 5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#4ade80]">
                GET IN TOUCH
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                Let&apos;s Build the Clean Energy Future Together
              </h2>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Whether you&apos;re a developer, investor, utility, or industrial buyer — our team is ready to explore the right renewable solution for you.
              </p>

              {/* Contact Icon Boxes */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:info@gneinfra.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-white/90 group-hover:text-white font-medium transition-colors">
                    info@gneinfra.com
                  </span>
                </a>

                <a
                  href="tel:+918448282440"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-white/90 group-hover:text-white font-medium transition-colors">
                    +91 8448282440
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">
                    Greater Noida, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column — Contact Form (Span 7) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5 text-left">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul"
                      className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/80 mb-1.5 text-left">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sharma"
                      className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 text-left">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                  />
                </div>

                {/* Row 3: Area of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 text-left">
                    Area of Interest
                  </label>
                  <select
                    defaultValue="Select a solution"
                    className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#4ade80] transition-colors"
                  >
                    <option disabled value="Select a solution">
                      Select a solution
                    </option>
                    <option value="solar">Solar (EPC / IPP / I&C)</option>
                    <option value="bess">Battery Energy Storage Systems (BESS)</option>
                    <option value="pmc">Project Management Consultancy (PMC)</option>
                    <option value="om">Operations & Maintenance (O&M)</option>
                    <option value="hydrogen">Green Hydrogen Solutions</option>
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 text-left">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, capacity needs, or how we can collaborate..."
                    className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm px-8 py-4 shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-white animate-bounce" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR: Dark Forest Green with Logo & Copyright ─────────────── */}
      <div className="bg-[#0b2617] py-8 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo at Bottom Left */}
          <div className="shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/gne-logo.png"
                alt="GNE Infra logo"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Copyright Center */}
          <div className="text-xs text-white/50 text-center md:text-left">
            © 2026 GNE Infra. All rights reserved.
          </div>

          {/* Links Right */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 font-medium">
            <Link href="/solar-epc" className="hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
