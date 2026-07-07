"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedBentoCard({
  children,
  idx,
}: {
  children: ReactNode;
  idx: number;
  isWide?: boolean;
}) {
  // Even index cards slide from left, Odd index cards slide from right
  const fromLeft = idx % 2 === 0;

  return (
    <motion.div
      className="col-span-1 w-full"
      initial={{
        opacity: 0,
        x: fromLeft ? -70 : 70,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: false, margin: "-20px 0px -20px 0px" }}
      transition={{
        duration: 0.35,
        delay: (idx % 3) * 0.05,
        ease: "easeOut",
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
