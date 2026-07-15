"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isContactPage = mounted && pathname === "/contact";

  useEffect(() => {
    setMounted(true);
  }, []);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }
      (e.target as HTMLFormElement).reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  }

  return (
    <footer className="font-inter text-white">
      {/* ── TOP SECTION: Let's Build the Clean Energy Future Together ───────── */}
      {!isContactPage && (
        <div className="bg-[#113823] py-10 sm:py-12 lg:py-8 border-t border-emerald-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              {/* Left Column — Copy & Contact Details (Span 5) */}
              <div className="lg:col-span-5 space-y-3 lg:space-y-4 text-left">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#4ade80]">
                  GET IN TOUCH
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight">
                  Let&apos;s Build the Clean Energy Future Together
                </h2>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Whether you&apos;re a developer, investor, utility, or industrial buyer — our team is ready to explore the right renewable solution for you.
                </p>

                {/* Contact Icon Boxes */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href="mailto:info@gneinfra.com"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-white font-medium transition-colors">
                      info@gneinfra.com
                    </span>
                  </a>

                  <a
                    href="tel:+918448282440"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 group-hover:text-white font-medium transition-colors">
                      +91 8448282440
                    </span>
                  </a>

                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-[#1a4a30] border border-[#265e3e] flex items-center justify-center text-[#4ade80] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 font-medium">
                      A - 114, Urbtech Trade Center, Sector - 132, Noida, UP
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column — Contact Form (Span 7) */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-3.5 lg:space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 mb-1 text-left" htmlFor="footer-name">
                        Name <span className="text-[#4ade80]">*</span>
                      </label>
                      <input
                        type="text"
                        id="footer-name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-3.5 py-2 lg:py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 mb-1 text-left" htmlFor="footer-email">
                        Email <span className="text-[#4ade80]">*</span>
                      </label>
                      <input
                        type="email"
                        id="footer-email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-3.5 py-2 lg:py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 mb-1 text-left" htmlFor="footer-phone">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="footer-phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-3.5 py-2 lg:py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-white/80 mb-1 text-left" htmlFor="footer-company">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        id="footer-company"
                        name="company"
                        placeholder="Your organization"
                        className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-3.5 py-2 lg:py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/80 mb-1 text-left" htmlFor="footer-message">
                      Message <span className="text-[#4ade80]">*</span>
                    </label>
                    <textarea
                      rows={2}
                      id="footer-message"
                      name="message"
                      required
                      placeholder="How can we help you?"
                      className="w-full rounded-xl bg-[#18442c] border border-[#23583a] px-3.5 py-2 lg:py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#4ade80] transition-colors resize-none"
                    />
                  </div>

                  {status === "success" && (
                    <div className="rounded-xl border border-emerald-500/50 bg-[#163c26] px-4 py-2.5 text-xs sm:text-sm text-[#4ade80] flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#4ade80] shrink-0" />
                      <span>Thank you! Your inquiry has been sent successfully.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-xl border border-rose-500/50 bg-rose-950/40 px-4 py-2.5 text-xs sm:text-sm text-rose-300 flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{error || "Failed to submit. Please try again."}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-1 text-left">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm px-6 py-2.5 lg:py-3 shadow-md shadow-emerald-950/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span>Sending...</span>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-white animate-bounce" />
                          Message Sent!
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
      )}

      {/* ── BOTTOM BAR: Dark Forest Green with Logo & Copyright ─────────────── */}
      <div className="bg-[#0b2617] py-4 lg:py-3.5 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo at Bottom Left */}
          <div className="shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/gne-logo.png"
                alt="GNE Infra logo"
                width={130}
                height={38}
                className="h-8 lg:h-9 w-auto"
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
