import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ServicePageHeroProps = {
  badge: ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  className?: string;   // ADD THIS
};

export function ServicePageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  className = "bg-service-gradient",
}: ServicePageHeroProps) {
  return (
    <section className={`${className} py-10 sm:py-12`}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          {badge}
          <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-700 dark:text-slate-200 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/60 shadow-xl dark:border-emerald-900/40">
          <Image
            src={image}
            alt={imageAlt}
            width={1400}
            height={900}
            className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
