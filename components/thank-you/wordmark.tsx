import { SITE } from "@/lib/site";

/** "BLISSVERSE ·" lockup — letterspaced, with the gold dot. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <p
      className={`eyebrow flex items-center gap-1.5 ${
        onDark ? "text-white" : "text-navy"
      }`}
    >
      {SITE.name.toUpperCase()}
      <span aria-hidden="true" className={onDark ? "text-gold-soft" : "text-gold"}>
        ·
      </span>
    </p>
  );
}
