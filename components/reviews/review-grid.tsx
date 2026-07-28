"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import type { Review, ReviewSort } from "@/lib/types";
import { ReviewCard } from "./review-card";

const SORTS: ReviewSort[] = ["Newest", "Highest rated", "Most helpful"];

const COMPARATORS: Record<ReviewSort, (a: Review, b: Review) => number> = {
  Newest: (a, b) => Date.parse(b.date) - Date.parse(a.date),
  "Highest rated": (a, b) => b.rating - a.rating || b.helpful - a.helpful,
  "Most helpful": (a, b) => b.helpful - a.helpful,
};

type ReviewGridProps = {
  reviews: Review[];
  /** Server-rendered section heading, laid out beside the sort controls. */
  heading: ReactNode;
};

export function ReviewGrid({ reviews, heading }: ReviewGridProps) {
  const [sort, setSort] = useState<ReviewSort>("Newest");

  const sorted = useMemo(
    () => [...reviews].sort(COMPARATORS[sort]),
    [reviews, sort],
  );

  return (
    <>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          {heading}

          <div className="flex gap-2" role="group" aria-label="Sort reviews">
            {SORTS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSort(option)}
                aria-pressed={sort === option}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  sort === option
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-line text-neutral-600 hover:border-neutral-950"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((review, i) => (
          <Reveal key={review.id} delay={i * 60} className="h-full">
            <ReviewCard review={review} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
