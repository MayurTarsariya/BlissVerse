import { Stars } from "@/components/ui/stars";
import type { Review } from "@/lib/types";

// Fixed locale + UTC so the server and client render the same string.
const DATE_FORMAT = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="card-lift flex h-full flex-col rounded-2xl border border-line bg-white p-7">
      <Stars value={review.rating} />

      <blockquote className="mt-4 flex-1 leading-relaxed text-neutral-700">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold">{review.name}</p>
        <p className="mt-1 text-xs text-neutral-400">
          {review.place} · {DATE_FORMAT.format(new Date(review.date))}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span
            className="text-gold rounded-full border px-2.5 py-1 text-xs font-semibold"
            style={{ borderColor: "rgb(169 130 76 / 0.4)" }}
          >
            Verified purchase · {review.source}
          </span>
          <span className="text-xs text-neutral-400">{review.helpful} found helpful</span>
        </div>
      </figcaption>
    </figure>
  );
}
