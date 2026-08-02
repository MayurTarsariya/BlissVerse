# `products.json`

The single source of truth for the QR / thank-you system. **Adding a product means
adding one object here — no new pages, no code changes.**

`app/p/[asin]/page.tsx` reads this file at build time via `lib/products.ts`, and
`generateStaticParams()` prerenders one static page per entry.

## Fields

| Field | Required | Notes |
|---|---|---|
| `asin` | ✅ | Exactly 10 alphanumeric characters. Becomes the URL: `/p/<asin>` |
| `name` | ✅ | Shown under the headline. **Currently a placeholder on every entry — replace with the real listing title.** |
| `category` | — | Small kicker above the product name. Empty string hides it. |
| `image` | — | `/public` path (`/products/foo.jpg`) or a remote URL on an allowed host (see `next.config.ts` → `images.remotePatterns`). Empty string falls back to the engraved monogram. |
| `amazonReviewUrl` | — | Defaults to `amazon.in/review/review-your-purchases/?asin=<asin>`. Set it only to override. |
| `amazonProductUrl` | — | Defaults to `amazon.in/dp/<asin>`. Set it only to override. |
| `supportEmail` | — | Defaults to `SITE.email` in `lib/site.ts`. Per-product override for lines with their own inbox. |

## Minimum viable entry

Both URLs are derived from the ASIN, so this is enough:

```json
{ "asin": "B0HB3Z3S9Y", "name": "Vessel Insulated Bottle · 950 ml" }
```

## Validation

`lib/products.ts` throws at build time on a malformed ASIN or a duplicate, so a
bad entry fails the build rather than shipping a broken QR destination.
