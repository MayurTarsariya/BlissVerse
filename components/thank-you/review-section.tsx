import { ArrowUpRight, Star } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { REVIEW_SECTION } from "@/lib/thank-you";

type ReviewSectionProps = {
  /** Amazon "write a review" entry point for the scanned product. */
  reviewUrl: string;
  /**
   * Product detail page — the fallback route for when Amazon bounces the
   * customer to sign-in or their orders list instead of the review form.
   * Omitted on the generic page, where there is no product context.
   */
  productUrl?: string | null;
};

const PILL =
  "inline-flex items-center gap-1 rounded-pill border border-line bg-paper px-4 py-2 font-semibold text-ink transition-colors hover:border-forest/40 hover:text-forest";

export function ReviewSection({ reviewUrl, productUrl }: ReviewSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 py-10 md:px-8">
      <FadeIn>
        <div className="rounded-panel border-line bg-card shadow-lift relative overflow-hidden border px-8 py-14 text-center md:px-16 md:py-20">
          {/* Soft wash */}
          <div
            aria-hidden="true"
            className="bg-forest-tint pointer-events-none absolute -top-32 left-1/2 size-[420px] -translate-x-1/2 rounded-full blur-3xl"
          />

          <div className="relative">
            <div
              className="mx-auto mb-7 flex w-fit items-center gap-1.5"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="fill-sand stroke-sand size-5" />
              ))}
            </div>

            <h2 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
              {REVIEW_SECTION.title}
            </h2>

            <p className="text-muted mx-auto mt-4 max-w-xl">{REVIEW_SECTION.body}</p>

            <div className="mt-9 flex justify-center">
              <Button href={reviewUrl} ariaLabel="Leave an honest review on Amazon">
                <Star className="size-4 fill-current" aria-hidden="true" />
                {REVIEW_SECTION.cta}
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={PILL}
              >
                {REVIEW_SECTION.reviewPill}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>

              {productUrl && (
                <a
                  href={productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PILL}
                >
                  {REVIEW_SECTION.productPill}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>

            <p className="text-muted mt-6 text-xs">{REVIEW_SECTION.note}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
