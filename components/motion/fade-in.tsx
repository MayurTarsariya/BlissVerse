"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
};

/**
 * Fade-up on scroll.
 *
 * `children` is a prop, so markup passed in from a Server Component stays
 * server-rendered — only this wrapper ships to the client. The `fade-in` class
 * is what the <noscript> rule in app/layout.tsx targets to force content
 * visible when JS never runs.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: delay / 1000, ease: EASE },
    },
  };

  return (
    <motion.div
      className={`fade-in ${className ?? ""}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
