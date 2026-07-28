/** Site-wide configuration: identity, navigation and outbound marketplace links. */

export const SITE = {
  name: "Blissverse",
  tagline: "Premium products, designed for everyday living.",
  description:
    "Simple, elegant, thoughtfully made essentials for home, kitchen and office — sold and fulfilled through Amazon and Flipkart.",
  email: "blissverse6@gmail.com",
  // TODO: set NEXT_PUBLIC_SITE_URL in the deployment environment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://blissverse.in",
} as const;

/**
 * Outbound storefront links.
 * TODO before launch: append the Amazon Attribution tag / Flipkart affiliate
 * + UTM parameters, and swap Flipkart for a real storefront URL.
 */
export const MARKETPLACES = {
  amazon: "https://www.amazon.in/s?k=BLISSVERSE",
  flipkart: "https://www.flipkart.com/",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  // TODO: replace with the real profile URL.
  youtube: "#",
} as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Products", href: "#products" },
      { label: "About", href: "#about" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Buy",
    links: [
      { label: "Amazon storefront", href: MARKETPLACES.amazon },
      { label: "Flipkart storefront", href: MARKETPLACES.flipkart },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Warranty claims", href: "#faq" },
      { label: "Shipping & returns", href: "#faq" },
    ],
  },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Returns", href: "#" },
] as const;
