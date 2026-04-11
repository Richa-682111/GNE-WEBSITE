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
        "box-animated rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur",
        "border-emerald-100 dark:border-emerald-900/40 dark:bg-slate-950/50",
        className
      )}
    >
      {children}
    </div>
  );
}

