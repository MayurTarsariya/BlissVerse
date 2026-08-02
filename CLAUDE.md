# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server on http://localhost:3000 (Turbopack, default in Next 16)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config; `next lint` was removed in Next 16)
npx tsc --noEmit # typecheck — there is no `typecheck` script
```

No test framework is configured. If tests are needed, pick and set one up rather than assuming one exists.

## What this is

A post-purchase **thank-you site** for Blissverse. It sells nothing — every CTA is an outbound link to Amazon. Each product ships with an insert card whose QR code opens that product's page, where the customer can leave a review, browse the store, or reach support. This directory is not a git repository.

**`data/products.json` is the single source of truth.** Adding a product means adding one object there — `generateStaticParams()` prerenders its page and no route file changes. See `data/README.md` for the field reference. Every `name` in it is still a placeholder; replace with real listing titles.

**Routing.** All 20 product pages prerender as static SSG.

| URL | Behaviour |
|---|---|
| `/p/B0HB3Z3S9Y` | product page; review CTA → `amazon.in/review/review-your-purchases/?asin=…`, fallback → `amazon.in/dp/…` |
| `/p/b0hb3z3s9y` | 308 → uppercase, via `proxy.ts` |
| `/p/<unknown>` | real 404 |
| `/` | generic thank-you; review CTA → Amazon's review-your-purchases hub, no product fallback |
| `/product/…`, `/products/…`, `/item/…` | 307 → `/p/…` (legacy QR shapes, `next.config.ts`) |

Two non-obvious decisions hold that together:

- **`dynamicParams = false`** in `app/p/[asin]/page.tsx`. Without it, `loading.tsx` makes the response stream, Next commits a `200` before `notFound()` resolves, and an unknown ASIN returns a **soft 404** — a broken QR would look healthy to monitoring. Products are bundled at build time anyway, so restricting routes to the known params costs nothing.
- **`proxy.ts` uppercases the ASIN segment.** With `dynamicParams = false` only the exact (uppercase) params match. A case-insensitive filesystem makes lowercase work in Windows dev and 404 on Linux; the redirect makes both platforms behave the same.

**The marketplace landing page is commented out** at the bottom of `app/page.tsx` — every component it referenced still exists under `components/sections/`, `products/`, `reviews/`, `newsletter/` and still typechecks. Its placeholder catalogue lives in `lib/content.ts`: products, prices, ratings, review counts and stats are all invented, and publishing fabricated reviews breaches Amazon's policy and Indian fake-review rules.

## Architecture

```
app/           layout (fonts + metadata), page (generic), p/[asin]/ (QR target),
               not-found, globals.css, actions/
components/    thank-you/ (live) · motion/ ui/ faq/ (shared)
               layout/ sections/ products/ reviews/ newsletter/ (landing, dormant)
data/          products.json — the catalogue
hooks/         scroll, in-view, body-scroll-lock, escape-key
lib/           products.ts (loader + URL builders) · thank-you.ts (copy)
               site.ts (config) · content.ts (landing placeholders) · types.ts
proxy.ts       ASIN case normalisation
```

`lib/products.ts` resolves raw JSON records into `Product` objects with both Amazon URLs guaranteed present, deriving them from the ASIN when the JSON omits them. It throws on a malformed or duplicate ASIN at module load, so bad data fails the build instead of shipping a dead QR destination.

Every page and section is a **Server Component**. Interactivity is pushed to the smallest possible leaves — when adding a section, keep it a Server Component and extract only the stateful part. On the thank-you pages only `<FadeIn>` and `<FaqAccordion>` reach the client.

Three patterns carry that split, and they're the thing to understand before editing:

- **`<FadeIn>` takes `children` as a prop.** It's a Client Component (Framer Motion `whileInView`), but markup passed into it stays server-rendered. Wrapping content in it does not move that content to the client. `<Reveal>` is the older IntersectionObserver equivalent still used by the dormant landing sections. Both carry a class the `<noscript>` rule in `app/layout.tsx` targets, because their initial state is `opacity: 0`.
- **Quick view uses context, not lifted state.** `QuickViewProvider` (client) owns the modal; `ProductCard` stays a Server Component and embeds the client `QuickViewButton`. Same trick as `<Reveal>` — don't collapse this into one client grid.
- **`ReviewGrid` receives its heading as a `ReactNode` prop.** Sorting needs client state, but the heading beside the sort buttons is server-rendered and passed in.

Body scroll locking is reference-counted in `hooks/use-body-scroll-lock.ts` because the mobile menu and quick-view modal can overlap; don't set `document.body.style.overflow` directly.

The newsletter posts to a Server Action (`app/actions/subscribe.ts`) via `useActionState`, so it works without JS. The action currently only validates — wiring the email provider is a TODO there.

## Stack

- **Next.js 16.2.12** (App Router — not 15), **React 19.2.4**, **TypeScript strict**, **Tailwind CSS v4**, **framer-motion 12** for scroll-in animation, **lucide-react** for icons.
- Tailwind v4 is configured entirely in `app/globals.css` — **there is no `tailwind.config.*`**. Brand colours are `@theme` tokens (`--color-gold`, `--color-gold-soft`, `--color-ink`, `--color-cream`, `--color-line`), so `text-gold`, `bg-cream`, `border-line` are real utilities. Reusable classes (`.btn`, `.eyebrow`, `.reveal`, `.card-lift`, `.orb`) live in `@layer components` so utilities can always override them.
- **`.font-display` is a component class, not a theme token.** Registering Fraunces as `--font-display` would generate a competing `font-display` utility and drop the class's letter-spacing. There's a comment in `globals.css` guarding this — don't "fix" it by moving it into `@theme`.
- Fraunces (display) and Manrope (body/UI) load via `next/font/google` in `app/layout.tsx` as `--font-fraunces` / `--font-manrope`. No `@import` from Google's CDN.
- This is a light-only design. There is no dark mode — the dark sections are deliberate `bg-neutral-950` blocks, which is what `--color-gold-soft` and `<Eyebrow onDark>` exist for.
- **lucide-react v1 removed all brand icons.** The YouTube mark is a local SVG in `components/ui/social-icons.tsx`; add any further brand icons there rather than downgrading the package.
- Path alias `@/*` maps to the project root.

## Next.js 16 specifics

Per `AGENTS.md`, read the version-matched docs bundled at `node_modules/next/dist/docs/` before writing Next.js code — training data predates this release. Start at `01-app/02-guides/upgrading/version-16.md` for the breaking-change list. Points that most often bite:

- **Request APIs are async.** `params`, `searchParams`, `cookies()`, `headers()`, and `draftMode()` return Promises and must be awaited. This also applies to `params` in `icon`/`opengraph-image` generators and `id` in `sitemap`.
- **`middleware.ts` is now `proxy.ts`** at the project root.
- **Turbopack is the default** for `dev` and `build`; Turbopack config lives at the top level of `next.config.ts` (not under `experimental`).
- `next/image` defaults changed (`minimumCacheTTL`, `imageSizes`, `qualities`), `images.domains` is deprecated in favour of `remotePatterns`, and local images with query strings are no longer supported.

## Editing agent instructions

`AGENTS.md` is the shared instruction file (Claude Code reads it through the `@AGENTS.md` import above). Its `<!-- BEGIN:nextjs-agent-rules -->` / `<!-- END:nextjs-agent-rules -->` block is managed by Next.js and gets overwritten on upgrade — put project-specific rules outside those markers, or here.
