/**
 * Copy for the post-purchase thank-you experience.
 *
 * Product data lives in data/products.json (see lib/products.ts).
 * Support channels and marketplace URLs live in lib/site.ts.
 */

import { SITE } from "@/lib/site";
import type { Faq } from "@/lib/types";

const BRAND = SITE.name.toUpperCase();

export const HEADER = {
  tagline: "Thoughtfully designed for everyday living.",
} as const;

export const HERO = {
  eyebrow: "With gratitude",
  title: "Thank you",
  subtitle: "We’re delighted you’re here.",
  body: `Every ${BRAND} product is carefully selected, inspected, and packed with attention to detail. We truly appreciate your trust.`,
  reviewCta: "Leave an Honest Review",
  shopCta: "Shop More",
  /** Shown on the floating card when no product context is available. */
  genericProductLabel: `Your ${BRAND} pick`,
  qualityChip: "Quality checked before dispatch",
} as const;

export const TRUST = [
  {
    icon: "badge",
    title: "Quality checked",
    body: "Each piece is inspected by hand before it leaves us — no exceptions.",
  },
  {
    icon: "pen",
    title: "Thoughtfully designed",
    body: "Simple, useful objects made to earn a place in your everyday.",
  },
  {
    icon: "heart",
    title: "Customer first",
    body: "Real people, quick answers, and a brand that stands behind its products.",
  },
] as const;

export type TrustIcon = (typeof TRUST)[number]["icon"];

export const REVIEW_SECTION = {
  title: "How’s your experience?",
  /**
   * COMPLIANCE NOTE — this opens by conditioning the ask on enjoying the
   * product. Amazon's Communication Guidelines forbid soliciting reviews only
   * from satisfied customers, and review-request inserts are a common
   * enforcement trigger. The closing line ("good or bad") pulls the other way.
   *
   * Fully neutral alternative:
   * "Reviews help us improve and help future customers decide. Whatever your
   *  experience, we'd genuinely value hearing it."
   */
  body: `If you’re enjoying your ${BRAND} product, we’d genuinely appreciate your honest review. Your feedback helps us improve — and helps future customers make informed decisions.`,
  cta: "Leave an Honest Review",
  /** Pill row under the CTA. */
  reviewPill: "Write a review",
  productPill: "View product",
  note: "Honest feedback only — good or bad, it all helps.",
} as const;

export const EXPLORE = {
  eyebrow: "Keep exploring",
  title: `Discover more from ${BRAND}`,
  cta: "Explore Products",
} as const;

/**
 * Decorative category tiles. Every tile links to the brand store.
 * TODO: replace the gradients with product photography and point each tile at
 * its own category listing.
 */
export const EXPLORE_TILES = [
  { label: "Home & Living", tone: "from-sand-tint to-sand/50" },
  { label: "Kitchen Essentials", tone: "from-forest-tint to-forest/20" },
  { label: "Everyday Comfort", tone: "from-card to-sand-tint" },
  { label: "Travel & Utility", tone: "from-forest-tint to-sand-tint" },
] as const;

export const SUPPORT_SECTION = {
  eyebrow: "We’re here",
  title: "Need help?",
  responsePill: "We respond within 24 hours",
  faqTitle: "Frequently asked",
  whatsapp: {
    title: "WhatsApp",
    body: "Chat with us directly — the fastest way to sort anything out.",
    cta: "Start a chat",
  },
  email: {
    title: "Email",
    body: "Prefer writing? Send the details and we’ll take it from there.",
  },
} as const;

export const THANK_YOU_FAQS: Faq[] = [
  {
    q: "How do I leave a review?",
    a: "Tap “Leave an Honest Review” above. Amazon opens your recent orders with this product ready to rate — sign in with the account you ordered from and the review form appears. Reviews are usually available a day or two after delivery.",
  },
  {
    q: "The review button didn’t open the form.",
    a: "Amazon sometimes redirects to sign-in or to your orders list. Use “View product”, scroll to the reviews section and choose “Write a customer review”. Either route reaches the same form.",
  },
  {
    q: "Something arrived damaged or missing.",
    a: "Please don’t return it before contacting us — message us on WhatsApp or email with your order ID and a photo, and we’ll arrange a replacement or refund straight away.",
  },
  {
    q: "How do returns work?",
    a: "Returns follow Amazon’s standard window, typically 7–10 days. The marketplace picks up from your door and issues the refund.",
  },
];
