"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Opens in a new tab. On by default: most CTAs here leave for Amazon. */
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 font-display text-[0.95rem] font-bold transition-colors duration-200";

const VARIANTS = {
  primary: "bg-forest text-white hover:bg-forest-deep shadow-glow",
  secondary:
    "bg-paper text-ink border border-line hover:border-forest/40 hover:text-forest shadow-soft",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  external = true,
  ariaLabel,
  className = "",
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}
