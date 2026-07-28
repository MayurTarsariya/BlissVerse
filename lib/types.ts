/** Shared content types for the Blissverse marketing site. */

/** Background utility class used for a product's placeholder image panel. */
export type Tone = "bg-stone-100" | "bg-stone-200" | "bg-cream";

export type Product = {
  id: number;
  /** Display category, also used as the placeholder image caption. */
  cat: string;
  name: string;
  desc: string;
  /** 0–5. Must mirror the live marketplace listing. */
  rating: number;
  /** Number of marketplace ratings. */
  count: number;
  /** Pre-formatted, e.g. "₹1,299". */
  price: string;
  badge: string | null;
  tone: Tone;
};

export type Marketplace = "Amazon" | "Flipkart";

export type Review = {
  id: number;
  name: string;
  place: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  rating: number;
  helpful: number;
  source: Marketplace;
  text: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Category = {
  name: string;
  note: string;
  /** Background + text utility classes for the category tile. */
  tone: string;
};

export type Stat = {
  to: number;
  suffix: string;
  label: string;
};

export type Standard = {
  n: string;
  t: string;
  d: string;
};

export type ReviewSort = "Newest" | "Highest rated" | "Most helpful";
