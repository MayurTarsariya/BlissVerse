/**
 * PLACEHOLDER CONTENT — every product, price, rating, review count and stat
 * below is invented. Replace with real marketplace data before launch.
 *
 * Publishing invented reviews/ratings violates Amazon's policy and Indian
 * consumer-protection rules on fake reviews (BIS IS 19000:2022).
 */

import type {
  Category,
  Faq,
  Product,
  Review,
  Standard,
  Stat,
} from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    cat: "Kitchen",
    name: "Vessel Insulated Bottle · 950 ml",
    desc: "Triple-wall steel. Cold for 24 hours, hot for 12.",
    rating: 4.5,
    count: 2317,
    price: "₹1,299",
    badge: "Bestseller",
    tone: "bg-stone-100",
  },
  {
    id: 2,
    cat: "Office",
    name: "Halo Desk Lamp",
    desc: "Wireless-charging base with three warmth modes.",
    rating: 4.6,
    count: 1204,
    price: "₹2,499",
    badge: "New",
    tone: "bg-stone-200",
  },
  {
    id: 3,
    cat: "Home",
    name: "Fold Bamboo Organizer",
    desc: "Modular drawer system in solid, sealed bamboo.",
    rating: 4.4,
    count: 986,
    price: "₹899",
    badge: null,
    tone: "bg-cream",
  },
  {
    id: 4,
    cat: "Kitchen",
    name: "Terra Spice Rack · Set of 12",
    desc: "Airtight glass jars on a rotating walnut base.",
    rating: 4.7,
    count: 3521,
    price: "₹1,499",
    badge: "Top rated",
    tone: "bg-stone-100",
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Ananya R.",
    place: "Bengaluru, India",
    date: "2026-06-14",
    rating: 5,
    helpful: 214,
    source: "Amazon",
    text: "The bottle genuinely keeps water ice-cold through a full work day. Packaging felt like unboxing a phone, not a bottle.",
  },
  {
    id: 2,
    name: "Vikram S.",
    place: "Pune, India",
    date: "2026-07-02",
    rating: 5,
    helpful: 96,
    source: "Flipkart",
    text: "Halo lamp replaced two chargers and a lamp on my desk. The warm mode is perfect for late nights.",
  },
  {
    id: 3,
    name: "Meera K.",
    place: "Kochi, India",
    date: "2026-05-21",
    rating: 4,
    helpful: 158,
    source: "Amazon",
    text: "Organizer is sturdy and smells faintly of bamboo, in a good way. One drawer runner needed adjusting.",
  },
  {
    id: 4,
    name: "Rahul D.",
    place: "Jaipur, India",
    date: "2026-04-09",
    rating: 5,
    helpful: 342,
    source: "Amazon",
    text: "Spice rack is the most-complimented thing in my kitchen. Jars seal tight, labels are tasteful.",
  },
  {
    id: 5,
    name: "Ishita P.",
    place: "Surat, India",
    date: "2026-06-28",
    rating: 5,
    helpful: 61,
    source: "Flipkart",
    text: "Ordered as a wedding gift. The recipient thought it cost three times the price. Will buy again.",
  },
  {
    id: 6,
    name: "Arjun M.",
    place: "Delhi, India",
    date: "2026-03-17",
    rating: 4,
    helpful: 127,
    source: "Amazon",
    text: "Quality control is clearly real — zero scratches, perfectly aligned seams. Delivery was next-day.",
  },
];

export const FAQS: Faq[] = [
  {
    q: "Why do I check out on Amazon or Flipkart?",
    a: "You get the checkout you already trust — saved addresses, all payment options including COD and EMI, GST invoices, and full marketplace buyer protection. We focus on making the products; they handle payments and logistics best.",
  },
  {
    q: "How fast is shipping?",
    a: "Orders ship from Amazon and Flipkart fulfilment centres, so most pin codes receive delivery in 1–3 days. Exact dates show at checkout on the marketplace.",
  },
  {
    q: "What is the return policy?",
    a: "Every product follows the marketplace's standard return window — typically 7–10 days, no questions asked. Returns are picked up from your door and refunded by the marketplace.",
  },
  {
    q: "How do I reach support?",
    a: "Email blissverse6@gmail.com — a real person replies within one business day, seven days a week. No bots, no ticket mazes.",
  },
  {
    q: "Are the products on this site in stock?",
    a: "Live stock and pricing always come from the marketplace listing. If a product page shows as unavailable there, a restock is usually 1–2 weeks away — join the newsletter to hear first.",
  },
];

export const CATEGORIES: Category[] = [
  { name: "Home", note: "Storage & living", tone: "bg-stone-100 text-neutral-950" },
  { name: "Kitchen", note: "Prep & serve", tone: "bg-cream text-neutral-950" },
  { name: "Office", note: "Desk & focus", tone: "bg-neutral-950 text-white" },
  { name: "Lifestyle", note: "Daily rituals", tone: "bg-stone-200 text-neutral-950" },
  { name: "Accessories", note: "Small essentials", tone: "bg-stone-100 text-neutral-950" },
];

export const STATS: Stat[] = [
  { to: 10000, suffix: "+", label: "Happy customers" },
  { to: 500, suffix: "+", label: "Five-star reviews" },
  { to: 50, suffix: "+", label: "Products in range" },
  { to: 99, suffix: "%", label: "Customer satisfaction" },
];

export const STANDARDS: Standard[] = [
  {
    n: "01",
    t: "Materials first",
    d: "Food-safe steel, sealed bamboo, borosilicate glass — chosen to last, never to hit a price point.",
  },
  {
    n: "02",
    t: "Detail, deliberated",
    d: "Every radius, finish and weight is prototyped and argued over before anything ships.",
  },
  {
    n: "03",
    t: "Inspected twice",
    d: "Each batch passes quality checks at production and again before dispatch to marketplace fulfilment.",
  },
  {
    n: "04",
    t: "Care after purchase",
    d: "Human support and marketplace-backed returns. The sale is the start.",
  },
];
