"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type NavItem = { href: string; label: string };
type DropdownGroup = { label: string; items: NavItem[] };

const mobileLink =
  "block rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700";

export function MobileNav({
  primaryNav,
  dropdownNav
}: {
  primaryNav: NavItem[];
  dropdownNav: DropdownGroup[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = wrapRef.current;
      if (el && !el.contains(e.target as Node)) close();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative z-30 lg:hidden">
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px]"
            aria-hidden
            onClick={close}
          />
          <div
            id={panelId}
            className="fixed left-4 right-4 top-[4.75rem] z-50 max-h-[min(70vh,calc(100dvh-6rem))] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className={mobileLink} onClick={close}>
                  {item.label}
                </Link>
              ))}
              {dropdownNav.map((group) => (
                <div key={group.label} className="pt-2">
                  <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className={mobileLink} onClick={close}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link key="/blog" href="/blog" className={mobileLink} onClick={close}>
                Blogs
              </Link>
              <div className="mt-2 border-t border-emerald-100 pt-2">
                <Link
                  href="/contact"
                  className={`${mobileLink} font-bold text-brand-green`}
                  onClick={close}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
