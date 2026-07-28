/**
 * Radiating dotted seal above the headline. Pure SVG so it stays crisp at any
 * size and needs no image asset.
 */
export function SealOrnament({ size = 92 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="text-gold"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <circle cx="50" cy="50" r="46" strokeWidth="1.4" strokeDasharray="0.6 5" opacity="0.35" />
        <circle cx="50" cy="50" r="37" strokeWidth="1.2" strokeDasharray="0.6 4" opacity="0.45" />
        <circle cx="50" cy="50" r="28" strokeWidth="1" strokeDasharray="0.6 3" opacity="0.55" />
        <circle cx="50" cy="50" r="19" strokeWidth="0.9" opacity="0.28" />
        <circle cx="50" cy="50" r="11" strokeWidth="0.9" opacity="0.4" />
      </g>
      <circle cx="50" cy="50" r="3.4" fill="currentColor" />
    </svg>
  );
}
