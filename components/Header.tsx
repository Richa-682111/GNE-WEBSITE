"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      className={`sticky top-0 z-40 transition-all duration-300 border-b backdrop-blur-md ${
        isScrolled
          ? "border-slate-200/80 bg-white/90 shadow-md dark:border-slate-800/80 dark:bg-brand-darkBg/90"
          : "border-slate-250/20 bg-white/75 dark:border-slate-800/20 dark:bg-brand-darkBg/75"
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
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </a>

        <div className="flex min-w-0 items-center justify-center">
          <MobileNav primaryNav={primaryNav} dropdownNav={dropdownNav} />

          <nav
            className="hidden flex-nowrap items-center justify-center gap-3 text-[16px] font-bold tracking-wide text-slate-800 dark:text-slate-200 lg:flex"
            aria-label="Main"
          >
            {primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navPill} relative ${
                    isActive ? "text-brand-green dark:text-emerald-400 font-extrabold" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-brand-green dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  )}
                </Link>
              );
            })}

            {dropdownNav.map((group) => {
              const isGroupActive = group.items.some((item) => pathname === item.href);
              return (
                <div key={group.label} className="group/drop relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 ${navPill} ${
                      isGroupActive ? "text-brand-green dark:text-emerald-400 font-extrabold" : ""
                    }`}
                  >
                    {group.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover/drop:rotate-180" />
                  </button>

                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full z-50 min-w-[240px] rounded-2xl border border-slate-200/60 bg-white/95 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover/drop:pointer-events-auto group-hover/drop:opacity-100 dark:border-slate-800 dark:bg-brand-darkCard/95 backdrop-blur-md">
                    {group.items.map((item) => {
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block rounded-xl px-4 py-2.5 text-[13px] font-bold transition-colors ${
                            isItemActive
                              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white"
                          }`}
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
              const isBlogsActive = pathname.startsWith("/blog");
              return (
                <Link
                  href="/blog"
                  className={`${navPill} relative ${
                    isBlogsActive ? "text-brand-green dark:text-emerald-400 font-extrabold" : ""
                  }`}
                >
                  Blogs
                  {isBlogsActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-brand-green dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  )}
                </Link>
              );
            })()}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:scale-102 hover:shadow-md hover:shadow-emerald-500/25 sm:inline-flex shine-button"
          >
            Get a Quote
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
