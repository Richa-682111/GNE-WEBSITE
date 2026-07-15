"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

import { usePathname } from "next/navigation";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" }
];

const dropdownNav = [
  {
    label: "Services",
    items: [
      { href: "/solar-epc", label: "SOLAR (EPC/IPP, I&C)" },
      { href: "/bess-ems", label: "BESS (EPC / I&C)" },
      { href: "/pmc", label: "Project Management Consultancy (PMC)" },
      { href: "/o-and-m", label: "O&M" },
      { href: "/green-hydrogen", label: "Green Hydrogen" }
    ]
  }
];

const navPill =
  "whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-brand-green hover:text-white hover:shadow-sm";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b backdrop-blur-md bg-white/95 dark:bg-[#0B132B]/95 ${
        isScrolled
          ? "border-slate-200 dark:border-slate-800 shadow-md"
          : "border-slate-200/60 dark:border-slate-800/60 shadow-sm"
      }`}
    >
      <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-3 py-2 sm:px-5 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full document navigation */}
        <a href="/" className="group inline-flex items-center">
          <Image
            src="/gne-logo.png"
            alt="GNE Infra logo"
            width={315}
            height={190}
            className="logo-img h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </a>

        <div className="flex min-w-0 items-center justify-center">
          <MobileNav primaryNav={primaryNav} dropdownNav={dropdownNav} />

          <nav
            className="hidden flex-nowrap items-center justify-center gap-3 text-[16px] font-bold tracking-wide lg:flex"
            style={{ color: '#2a2a2a' }}
            aria-label="Main"
          >
            {primaryNav.map((item) => {
              const isActive = mounted && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navPill} relative ${
                    isActive ? "font-extrabold" : ""
                  }`}
                  style={isActive ? { color: '#1a4731' } : {}}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-1 w-4 rounded-full" style={{ background: '#1a4731' }} />
                  )}
                </Link>
              );
            })}

            {dropdownNav.map((group) => {
              const isGroupActive = mounted && group.items.some((item) => pathname === item.href);
              return (
                <div key={group.label} className="group/drop relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 ${navPill} ${
                      isGroupActive ? "font-extrabold" : ""
                    }`}
                    style={isGroupActive ? { color: '#1a4731' } : {}}
                  >
                    {group.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover/drop:rotate-180" />
                  </button>

                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full z-50 min-w-[240px] rounded-2xl border border-slate-200/60 bg-white/95 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover/drop:pointer-events-auto group-hover/drop:opacity-100 dark:border-slate-800 dark:bg-brand-darkCard/95 backdrop-blur-md">
                    {group.items.map((item) => {
                      const isItemActive = mounted && pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block rounded-xl px-4 py-2.5 text-[13px] font-bold transition-colors ${
                            isItemActive
                              ? "font-extrabold"
                              : "text-slate-700 hover:bg-[#45523e]/10 hover:text-[#1a4731]"
                          }`}
                          style={isItemActive ? { background: 'rgba(26,71,49,0.1)', color: '#1a4731' } : {}}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Blogs link */}
            {(() => {
              const isBlogsActive = mounted && Boolean(pathname?.startsWith("/blog"));
              return (
                <Link
                  href="/blog"
                  className={`${navPill} relative ${
                    isBlogsActive ? "font-extrabold" : ""
                  }`}
                  style={isBlogsActive ? { color: '#1a4731' } : {}}
                >
                  Blogs
                  {isBlogsActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-1 w-4 rounded-full" style={{ background: '#1a4731' }} />
                  )}
                </Link>
              );
            })()}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-102 hover:shadow-md sm:inline-flex shine-button"
            style={{ background: '#1a4731' }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
