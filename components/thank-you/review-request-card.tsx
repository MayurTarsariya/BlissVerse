import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { REVIEW_REQUEST } from "@/lib/thank-you";
import { RuleEyebrow } from "./rule-eyebrow";

/** `reviewUrl` is resolved per-request from the ?asin= query param. */
export function ReviewRequestCard({ reviewUrl }: { reviewUrl: string }) {
  return (
    <Reveal>
      <section className="bg-cream rounded-2xl px-6 py-10 text-center sm:px-10">
        <RuleEyebrow>{REVIEW_REQUEST.eyebrow}</RuleEyebrow>

        <h2 className="font-display text-cocoa mt-5 text-2xl font-normal sm:text-[1.7rem]">
          {REVIEW_REQUEST.title}
        </h2>

        <p className="text-taupe mx-auto mt-4 max-w-sm text-xs leading-relaxed sm:text-sm">
          {REVIEW_REQUEST.body}
        </p>

        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-sm mt-7"
        >
          <Star size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          {REVIEW_REQUEST.cta}
        </a>
      </section>
    </Reveal>
  );
}
