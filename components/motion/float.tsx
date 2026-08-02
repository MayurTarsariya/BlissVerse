"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FloatProps = {
  children?: ReactNode;
  className?: string;
  /** Seconds for one full cycle. */
  duration?: number;
  /** Travel distance in px. */
  distance?: number;
  delay?: number;
};

/** Gentle infinite vertical float for decorative cards and ambient shapes. */
export function Float({
  children,
  className,
  duration = 6,
  distance = 10,
  delay = 0,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
