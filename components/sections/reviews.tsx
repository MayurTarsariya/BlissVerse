import { ReviewGrid } from "@/components/reviews/review-grid";
import { Eyebrow } from "@/components/ui/eyebrow";
import { REVIEWS } from "@/lib/content";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-stone-50 px-6 py-16 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ReviewGrid
          reviews={REVIEWS}
          heading={
            <div>
              <Eyebrow>Customer stories</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
                Loved across India.
              </h2>
              <p className="mt-4 text-sm text-neutral-500">
                Independent reviews from our Amazon and Flipkart listings.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
