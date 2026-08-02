import { REVIEW_YOUR_PURCHASES_URL, type Product } from "@/lib/products";
import { AMAZON_BRAND_STORE, SUPPORT } from "@/lib/site";
// import { ExploreSection } from "./explore-section"; // hidden — see below
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ReviewSection } from "./review-section";
import { SupportSection } from "./support-section";
import { ThankYouHeader } from "./thank-you-header";
import { TrustSection } from "./trust-section";

/**
 * The whole thank-you experience.
 *
 * `product` is null on the generic `/` page — the review CTA then points at
 * Amazon's "review your purchases" hub instead of one product's form, and the
 * product-page fallback is hidden.
 */
export function ThankYouScreen({ product }: { product: Product | null }) {
  const reviewUrl = product?.amazonReviewUrl ?? REVIEW_YOUR_PURCHASES_URL;
  const supportEmail = product?.supportEmail ?? SUPPORT.email;

  return (
    <>
      <a
        href="#content"
        className="rounded-pill bg-forest sr-only fixed top-2 left-2 z-50 px-4 py-2 text-sm text-white focus:not-sr-only"
      >
        Skip to content
      </a>

      <ThankYouHeader />

      <main id="content" className="flex-1 overflow-x-clip">
        <Hero
          product={product}
          reviewUrl={reviewUrl}
          shopUrl={AMAZON_BRAND_STORE}
        />
        <TrustSection />
        <ReviewSection
          reviewUrl={reviewUrl}
          productUrl={product?.amazonProductUrl}
        />
        {/* "Discover more from BLISSVERSE" — hidden for now. The component
            still exists at ./explore-section; restore by uncommenting its
            import above and this line. Its category tiles are placeholders. */}
        {/* <ExploreSection /> */}
        <SupportSection supportEmail={supportEmail} />
      </main>

      <Footer supportEmail={supportEmail} />
    </>
  );
}
