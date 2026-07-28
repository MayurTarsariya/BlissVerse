"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in ms, applied as a transition delay. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts its children into view on first scroll-in.
 *
 * `children` is a prop, so server-rendered markup passed in stays on the
 * server — only this wrapper ships to the client.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
