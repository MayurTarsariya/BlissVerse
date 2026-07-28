import type { ReactNode } from "react";

/** Small uppercase kicker above a section heading. `onDark` picks the lighter gold. */
export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p className={`eyebrow ${onDark ? "text-gold-soft" : "text-gold"}`}>{children}</p>
  );
}
