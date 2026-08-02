/**
 * BLISSVERSE — per-product thank-you page.
 *
 * This is the QR destination printed on every insert card:
 *   https://blissverse.in/p/B0HB3Z3S9Y
 *
 * The ASIN in the path is looked up in data/products.json. Adding a product
 * means adding one object there — generateStaticParams() picks it up and
 * prerenders the page. No new route files, ever.
 *
 * Unknown ASINs 404 rather than rendering a page with no product context.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThankYouScreen } from "@/components/thank-you/thank-you-screen";
import { getAllAsins, getProduct } from "@/lib/products";
import { SITE } from "@/lib/site";

type PageProps = {
  // Next 16: params is a Promise and must be awaited.
  params: Promise<{ asin: string }>;
};

/** One static page per catalogue entry. */
export function generateStaticParams() {
  return getAllAsins().map((asin) => ({ asin }));
}

/**
 * Only ASINs in products.json are valid routes; anything else 404s at the
 * routing layer, before rendering.
 *
 * This is what makes an unknown ASIN a real 404 rather than a soft one: with
 * dynamic params allowed, `loading.tsx` streams the response, Next commits a
 * 200 before `notFound()` resolves, and a broken QR would look healthy to
 * monitoring. Adding a product already requires a rebuild — products.json is
 * bundled at build time — so this costs nothing.
 */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { asin } = await params;
  const product = getProduct(asin);

  if (!product) {
    return { title: "Product not found", robots: { index: false, follow: false } };
  }

  const title = `Thank you for choosing ${product.name}`;
  const description = `Share your experience with ${product.name}, explore more from ${SITE.name}, or reach our support team.`;

  return {
    title,
    description,
    alternates: { canonical: `/p/${product.asin}` },
    openGraph: {
      title,
      description,
      url: `/p/${product.asin}`,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
      ...(product.image ? { images: [{ url: product.image }] } : {}),
    },
  };
}

export default async function ProductThankYouPage({ params }: PageProps) {
  const { asin } = await params;
  const product = getProduct(asin);

  if (!product) notFound();

  return <ThankYouScreen product={product} />;
}
