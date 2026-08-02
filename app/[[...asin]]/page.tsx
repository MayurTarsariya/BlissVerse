/**
 * BLISSVERSE — post-purchase thank-you page (insert-card / QR destination).
 *
 * ROUTING — this is an optional catch-all, so one file serves every URL shape
 * a printed QR might carry:
 *
 *   /                          → generic; review button goes to the storefront
 *   /B0H9HNQWMM                → deep-links to that product's review form
 *   /product/B0H9HNQWMM        → same (also /products/, /p/, /item/)
 *   /?asin=B0H9HNQWMM          → same, via query string
 *
 * Anything else 404s. Because this route sits at the root it would otherwise
 * swallow every unmatched path, so resolveAsinFromRoute() is deliberately
 * strict: two segments maximum, a known prefix, and a well-formed ASIN.
 *
 * The marketplace landing page that used to live here is COMMENTED OUT below,
 * not deleted — every component it referenced still exists under
 * components/sections/, components/products/, components/reviews/,
 * components/faq/ and components/newsletter/.
 *
 * Design system
 *  Display type : Fraunces (serif) — headlines only
 *  Body / UI    : Manrope
 *  Shell #FDFCFA · Navy #17293A · Taupe #8B7D6B · Cocoa #6B4C2E
 *  Cream #F3EDE1 · Ink #0A0A0A · Gold #A9824C / #D8BC86
 *
 * Copy and links live in lib/thank-you.ts.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Assistance } from "@/components/thank-you/assistance";
import { DiscoverCard } from "@/components/thank-you/discover-card";
import { ReviewRequestCard } from "@/components/thank-you/review-request-card";
import { ThankYouFooter } from "@/components/thank-you/thank-you-footer";
import { ThankYouHero } from "@/components/thank-you/thank-you-hero";
import { Wordmark } from "@/components/thank-you/wordmark";
import {
  amazonReviewUrl,
  resolveAsinFromRoute,
  type SearchParams,
} from "@/lib/thank-you";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Thank you for choosing Blissverse. Share your experience, explore the collection, or reach our support team.",
};

export default async function ThankYouPage({
  params,
  searchParams,
}: {
  // Next 16: both are Promises and must be awaited.
  params: Promise<{ asin?: string[] }>;
  searchParams: Promise<SearchParams>;
}) {
  const [{ asin: segments = [] }, query] = await Promise.all([
    params,
    searchParams,
  ]);

  const match = resolveAsinFromRoute(segments, query);
  if (!match.found) notFound();

  const reviewUrl = amazonReviewUrl(match.asin);

  return (
    <>
      <a
        href="#content"
        className="sr-only fixed top-2 left-2 z-50 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white focus:not-sr-only"
      >
        Skip to content
      </a>

      <main id="content" className="bg-shell flex-1 px-6 pt-12 pb-20 md:pt-16">
        <div className="mx-auto flex max-w-xl justify-center">
          <Wordmark />
        </div>

        <div className="mx-auto mt-10 max-w-xl space-y-14 md:mt-14">
          <ThankYouHero />
          <ReviewRequestCard reviewUrl={reviewUrl} />
          <DiscoverCard />
          <Assistance />
        </div>
      </main>

      <ThankYouFooter />
    </>
  );
}

/* ---------------------------------------------------------------------------
 * PREVIOUS UI — marketplace landing page. Commented out, kept for restore.
 *
 * import { BackToTop } from "@/components/layout/back-to-top";
 * import { SiteFooter } from "@/components/layout/site-footer";
 * import { SiteHeader } from "@/components/layout/site-header";
 * import { BrandStandard } from "@/components/sections/brand-standard";
 * import { Categories } from "@/components/sections/categories";
 * import { Faq } from "@/components/sections/faq";
 * import { FeaturedProducts } from "@/components/sections/featured-products";
 * import { Hero } from "@/components/sections/hero";
 * import { Newsletter } from "@/components/sections/newsletter";
 * import { Reviews } from "@/components/sections/reviews";
 * import { Stats } from "@/components/sections/stats";
 * import { ValueProps } from "@/components/sections/value-props";
 *
 * export default function HomePage() {
 *   return (
 *     <>
 *       <SiteHeader />
 *       <main id="content">
 *         <Hero />
 *         <ValueProps />
 *         <FeaturedProducts />
 *         <Stats />
 *         <BrandStandard />
 *         <Categories />
 *         <Reviews />
 *         <Faq />
 *         <Newsletter />
 *       </main>
 *       <SiteFooter />
 *       <BackToTop />
 *     </>
 *   );
 * }
 * ------------------------------------------------------------------------- */
