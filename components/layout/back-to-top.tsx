"use client";

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";

export function BackToTop() {
  const scrolled = useScrolled();

  if (!scrolled) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-gold-soft shadow-lg transition-transform hover:-translate-y-1"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
