import type { ReactNode } from "react";
import { cn } from "@/components/cn";

export function Card({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "box-animated rounded-2xl border p-6 shadow-md backdrop-blur-md transition-all duration-300",
        "border-slate-200/60 bg-white/80 dark:border-brand-darkBorder/45 dark:bg-brand-darkCard/75",
        "hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 hover:border-emerald-300/40 dark:hover:border-brand-green/30",
        className
      )}
    >
      {children}
    </div>
  );
}

