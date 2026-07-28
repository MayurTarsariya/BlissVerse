import type { ReactNode } from "react";

/** Centred kicker flanked by short hairlines — "— A NOTE OF THANKS —". */
export function RuleEyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  const rule = onDark ? "bg-gold-soft/50" : "bg-gold/45";
  const text = onDark ? "text-gold-soft" : "text-gold";

  return (
    <p className={`flex items-center justify-center gap-3 ${text}`}>
      <span aria-hidden="true" className={`h-px w-6 ${rule}`} />
      <span className="eyebrow">{children}</span>
      <span aria-hidden="true" className={`h-px w-6 ${rule}`} />
    </p>
  );
}
