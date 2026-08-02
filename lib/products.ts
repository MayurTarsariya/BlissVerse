/**
 * Product catalogue for the QR / thank-you system.
 *
 * `data/products.json` is the single source of truth — adding a product means
 * adding one object there. Everything below turns those raw records into fully
 * resolved `Product` objects with both Amazon URLs guaranteed present.
 */

import rawProducts from "@/data/products.json";
import { SITE } from "@/lib/site";

/** Amazon ASINs are exactly 10 alphanumeric characters, e.g. B0HB3Z3S9Y. */
export const ASIN_PATTERN = /^[A-Z0-9]{10}$/;

/** Shape as authored in products.json — everything but asin/name is optional. */
export type ProductRecord = {
  asin: string;
  name: string;
  category?: string;
  image?: string;
  amazonReviewUrl?: string;
  amazonProductUrl?: string;
  supportEmail?: string;
};

/** Shape the UI consumes — no optional URLs left to guard against. */
export type Product = {
  asin: string;
  name: string;
  category: string | null;
  image: string | null;
  amazonReviewUrl: string;
  amazonProductUrl: string;
  supportEmail: string;
};

/* ------------------------------- URL builders ------------------------------ */

/**
 * Amazon's "review your purchases" hub — every item awaiting a review.
 * Used on the generic page, where there is no product context.
 */
export const REVIEW_YOUR_PURCHASES_URL =
  "https://www.amazon.in/review/review-your-purchases/";

/** "Write a review" entry point for a purchased item. */
export function buildReviewUrl(asin: string): string {
  return `https://www.amazon.in/review/review-your-purchases/?asin=${asin}`;
}

/** Product detail page — the fallback when the review form won't open. */
export function buildProductUrl(asin: string): string {
  return `https://www.amazon.in/dp/${asin}`;
}

/* --------------------------------- loading -------------------------------- */

function blankToNull(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function resolveProduct(record: ProductRecord, asin: string): Product {
  return {
    asin,
    name: record.name?.trim() || SITE.name,
    category: blankToNull(record.category),
    image: blankToNull(record.image),
    amazonReviewUrl: blankToNull(record.amazonReviewUrl) ?? buildReviewUrl(asin),
    amazonProductUrl: blankToNull(record.amazonProductUrl) ?? buildProductUrl(asin),
    supportEmail: blankToNull(record.supportEmail) ?? SITE.email,
  };
}

/**
 * Built once at module load. A malformed or duplicated ASIN throws here, which
 * fails the build rather than shipping a QR code that resolves to nothing.
 */
const PRODUCTS_BY_ASIN: ReadonlyMap<string, Product> = (() => {
  const map = new Map<string, Product>();

  for (const record of rawProducts as ProductRecord[]) {
    const asin = record.asin?.trim().toUpperCase() ?? "";

    if (!ASIN_PATTERN.test(asin)) {
      throw new Error(
        `data/products.json: "${record.asin}" is not a valid 10-character ASIN.`,
      );
    }
    if (map.has(asin)) {
      throw new Error(`data/products.json: duplicate ASIN "${asin}".`);
    }

    map.set(asin, resolveProduct(record, asin));
  }

  return map;
})();

/* --------------------------------- lookups -------------------------------- */

/** Uppercases and validates a raw route segment. Null when it isn't an ASIN. */
export function normalizeAsin(raw: string | undefined | null): string | null {
  const asin = raw?.trim().toUpperCase();
  return asin && ASIN_PATTERN.test(asin) ? asin : null;
}

/** Catalogue lookup. Null for anything not in products.json. */
export function getProduct(raw: string | undefined | null): Product | null {
  const asin = normalizeAsin(raw);
  return asin ? (PRODUCTS_BY_ASIN.get(asin) ?? null) : null;
}

export function getAllProducts(): Product[] {
  return [...PRODUCTS_BY_ASIN.values()];
}

export function getAllAsins(): string[] {
  return [...PRODUCTS_BY_ASIN.keys()];
}
