import { Star } from "lucide-react";

const POSITIONS = [0, 1, 2, 3, 4];

export function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${value} out of 5 stars`}
    >
      {POSITIONS.map((i) => (
        <Star
          key={i}
          size={13}
          className={i < Math.round(value) ? "text-gold" : "text-stone-300"}
          fill="currentColor"
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
