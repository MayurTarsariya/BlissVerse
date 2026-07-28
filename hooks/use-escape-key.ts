"use client";

import { useEffect, useRef } from "react";

/** Calls `onEscape` when Escape is pressed, while `active` is true. */
export function useEscapeKey(active: boolean, onEscape: () => void) {
  // Kept in a ref so a fresh inline callback doesn't re-subscribe every render.
  const handler = useRef(onEscape);

  useEffect(() => {
    handler.current = onEscape;
  });

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handler.current();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
}
