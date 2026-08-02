/**
 * BLISSVERSE — generic thank-you page (no product context).
 *
 * Reached when someone types the bare domain. The per-product QR destination
 * is app/p/[asin]/page.tsx; here the review CTA points at Amazon's "review
 * your purchases" hub instead of one product's form.
 *
 * The marketplace landing page that used to live at `/` is COMMENTED OUT
 * below, not deleted — every component it referenced still exists under
 * components/sections/, components/products/, components/reviews/,
 * components/faq/ and components/newsletter/, and still typechecks.
 */

import { ThankYouScreen } from "@/components/thank-you/thank-you-screen";

export default function HomePage() {
  return <ThankYouScreen product={null} />;
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
