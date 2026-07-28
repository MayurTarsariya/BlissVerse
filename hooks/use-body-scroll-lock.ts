"use client";

import { useEffect } from "react";

// Reference-counted so overlapping overlays (mobile menu + quick view) can't
// restore scrolling while the other is still open.
let lockCount = 0;
let restoreOverflow = "";

/** Freezes background scrolling while `locked` is true. */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    if (lockCount === 0) {
      restoreOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) document.body.style.overflow = restoreOverflow;
    };
  }, [locked]);
}
