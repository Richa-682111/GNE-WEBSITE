import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/components/cn";

export function Section({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-16", className)} {...props}>
      {children}
    </section>
  );
}

