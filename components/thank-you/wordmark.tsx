import { SITE } from "@/lib/site";

/** BLISSVERSE lockup with the signature forest dot. */
export function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const text = size === "sm" ? "text-sm" : "text-lg";
  const dot = size === "sm" ? "size-1" : "size-1.5";

  return (
    <span className="flex items-baseline gap-1">
      <span
        className={`font-display ${text} text-ink font-extrabold tracking-[0.22em]`}
      >
        {SITE.name.toUpperCase()}
      </span>
      <span aria-hidden="true" className={`${dot} bg-forest mb-0.5 rounded-full`} />
    </span>
  );
}
