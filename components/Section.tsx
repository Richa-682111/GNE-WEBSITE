import type { ReactNode } from "react";
import { cn } from "@/components/cn";

export function Section({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <section className={cn("py-16", className)}>{children}</section>;
}

