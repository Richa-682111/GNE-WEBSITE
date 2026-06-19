"use client";

import Image from "next/image";

/* ─── Logo data ───────────────────────────────────────────────────────
   Using the GNE logo repeated to form a continuous marquee.
   Add more partner / client logos here as needed.
   ──────────────────────────────────────────────────────────────────── */
const logos = [
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
  { src: "/gne-logo.png", alt: "GNE Infra" },
];

export function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200/60 bg-white py-2 sm:py-2.5">
      {/* ── Fade-edge gradient masks ────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

      {/* ── Scrolling track ─────────────────────────────────────────── */}
      <div className="flex w-max animate-marquee">
        {/* First set of logos */}
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 lg:gap-16">
          {logos.map((logo, idx) => (
            <div key={`a-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={56}
                className="h-11 w-auto object-contain sm:h-14"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0 items-center gap-10 pl-10 sm:gap-14 sm:pl-14 lg:gap-16 lg:pl-16">
          {logos.map((logo, idx) => (
            <div key={`b-${idx}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={56}
                className="h-11 w-auto object-contain sm:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
