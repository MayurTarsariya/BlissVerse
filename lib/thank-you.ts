/**
 * Copy and links for the post-purchase thank-you page (the insert-card / QR
 * destination). Replace every PLACEHOLDER before printing anything that
 * points here.
 */

import { MARKETPLACES, SITE } from "@/lib/site";

/* --------------------------- Amazon review link --------------------------- */

/**
 * Live Blissverse catalogue on amazon.in.
 *
 * Each entry is the `asin` to put on this page's URL so the review button
 * deep-links to that product — /?asin=B0H9HNQWMM. Generate one QR code per
 * ASIN. Add new products here when they go live.
 *
 * Not used for validation: any well-formed ASIN works, so a product launched
 * before this list is updated still links correctly.
 */
export const PRODUCT_ASINS = [
  "B0H9HHW4ZB",
  "B0H9HNQWMM",
  "B0H9HBQKWQ",
  "B0HB3WXXKZ",
  "B0HB3TGD7D",
  "B0HB461NTD",
  "B0HB46M237",
  "B0HB3ZWTRD",
  "B0HB455PT8",
  "B0HB3SFG26",
  "B0HB3XX167",
  "B0HB3RRTQF",
  "B0HB3WNGZ7",
  "B0HB3VHRXL",
  "B0HB46FRCY",
  "B0HB44MC9Y",
  "B0HB3WKH1L",
  "B0HB3W76KZ",
  "B0HB43WHJH",
  "B0HB3Z3S9Y",
] as const;

/** Amazon ASINs are exactly 10 alphanumeric characters, e.g. B0H9HNQWMM. */
const ASIN_PATTERN = /^[A-Z0-9]{10}$/i;

/** Query-string aliases accepted on the thank-you URL: /?asin=B0CXXXXXXX */
const ASIN_PARAMS = ["asin", "id", "product"] as const;

export type SearchParams = Record<string, string | string[] | undefined>;

/**
 * Pulls a product ASIN off the incoming query string.
 * Returns null unless the value is a well-formed ASIN — the value is about to
 * be placed in an outbound URL, so anything unexpected is discarded rather
 * than passed through.
 */
export function resolveAsin(params: SearchParams): string | null {
  for (const key of ASIN_PARAMS) {
    const raw = params[key];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (value && ASIN_PATTERN.test(value)) return value.toUpperCase();
  }
  return null;
}

/**
 * Path prefixes tolerated in front of the ASIN, so the QR can encode any of
 * /B0H9HNQWMM, /product/B0H9HNQWMM, /p/B0H9HNQWMM …
 */
const ROUTE_PREFIXES = new Set(["product", "products", "p", "item"]);

export type RouteMatch =
  | { found: true; asin: string | null }
  | { found: false };

/**
 * Resolves the ASIN from the URL path, falling back to the query string when
 * the path carries no segments (bare `/`).
 *
 * Returns `{ found: false }` for anything that isn't a recognisable product
 * URL so the caller can 404 — this route sits at the root and would otherwise
 * swallow every unmatched path.
 */
export function resolveAsinFromRoute(
  segments: string[],
  params: SearchParams,
): RouteMatch {
  if (segments.length === 0) return { found: true, asin: resolveAsin(params) };
  if (segments.length > 2) return { found: false };

  const [first, second] = segments;
  if (segments.length === 2 && !ROUTE_PREFIXES.has(first.toLowerCase())) {
    return { found: false };
  }

  const candidate = segments.length === 2 ? second : first;
  if (!ASIN_PATTERN.test(candidate)) return { found: false };

  return { found: true, asin: candidate.toUpperCase() };
}

/**
 * Deep link to a product's "write a review" form, in the shape Amazon's
 * glance-detail review entry point uses:
 *   /review/create-review/?ie=UTF8&channel=glance-detail&asin=<ASIN>
 *
 * Falls back to the storefront search when no usable ASIN was supplied, so the
 * button is never dead.
 */
export function amazonReviewUrl(asin: string | null): string {
  if (!asin) return MARKETPLACES.amazon;

  // Trailing slash is significant — it matches Amazon's own review links.
  const url = new URL("https://www.amazon.in/review/create-review/");
  url.searchParams.set("ie", "UTF8");
  url.searchParams.set("channel", "glance-detail");
  url.searchParams.set("asin", asin);
  return url.toString();
}

export const WHATSAPP_NUMBER = "+91 94099 73003";
/** wa.me requires country code, digits only. */
export const WHATSAPP_URL = "https://wa.me/919409973003";

export const HERO = {
  eyebrow: "A note of thanks",
  title: "Thank You for Choosing",
  brand: SITE.name.toUpperCase(),
  body: "We genuinely appreciate your trust in our brand. Every product is carefully selected, quality checked, and packed with care. We hope it brings value to your everyday life.",
  pillars: ["Carefully selected", "Quality checked", "Packed with care"],
} as const;

export const REVIEW_REQUEST = {
  eyebrow: "Your honest opinion",
  title: "Love your purchase?",
  /**
   * COMPLIANCE RISK — this copy conditions the ask on the buyer being happy.
   * Amazon's Communication Guidelines forbid soliciting reviews only from
   * satisfied customers, and review-request package inserts are a common
   * enforcement trigger.
   *
   * Neutral alternative that keeps the section intact:
   * "Reviews help other customers decide, and they help us improve. Whatever
   *  your experience with your BLISSVERSE product, we'd value hearing it on
   *  Amazon."
   * ...with the CTA relabelled "Share your experience on Amazon".
   */
  body: "If you're happy with your BLISSVERSE product, we'd truly appreciate it if you shared your honest experience on Amazon. Your feedback helps other customers make informed decisions and helps us continue improving.",
  cta: "Leave an Honest Review on Amazon",
  // href is resolved per-request from the ASIN — see amazonReviewUrl().
} as const;

export const DISCOVER = {
  eyebrow: "Keep exploring",
  title: `Discover More from ${SITE.name.toUpperCase()}`,
  body: "Explore our collection of thoughtfully designed products for your home and everyday life.",
  cta: "Shop More on Amazon",
  href: MARKETPLACES.amazon,
} as const;

export type ChannelIcon = "mail" | "whatsapp";

export const ASSISTANCE = {
  eyebrow: "We're here",
  title: "Need Assistance?",
  body: "If you have any questions or need support, we're always happy to help.",
  channels: [
    {
      icon: "mail" as ChannelIcon,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: "whatsapp" as ChannelIcon,
      label: "WhatsApp",
      value: WHATSAPP_NUMBER,
      href: WHATSAPP_URL,
    },
  ],
} as const;

export const THANK_YOU_FOOTER = {
  tagline: "Thoughtfully designed products for everyday living.",
  links: [
    { label: "Amazon", href: MARKETPLACES.amazon },
    { label: SITE.email, href: `mailto:${SITE.email}` },
  ],
  note: "Available on Amazon.in",
} as const;
