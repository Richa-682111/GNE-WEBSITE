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
  return (
    <motion.div
      className="col-span-1 w-full h-full flex flex-col"
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.85,
        delay: (idx % 3) * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

