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

A single-page marketing site for Blissverse that does **not** sell anything itself — every buy action is an outbound link to an Amazon or Flipkart listing. The whole page is one static route (`/`) composed of stacked sections. This directory is not a git repository.

**All catalogue content in `lib/content.ts` is placeholder.** Products, prices, ratings, review counts, review text and the headline stats are invented. Publishing fabricated reviews/ratings breaches Amazon's policy and Indian fake-review rules — replace with live marketplace data before launch. `lib/site.ts` marketplace URLs also still point at the bare `amazon.in` / `flipkart.com` homepages and need real storefront URLs plus attribution/affiliate tags.

The site currently serves the **post-purchase thank-you page** (`components/thank-you/`) from a single optional catch-all, `app/[[...asin]]/page.tsx`. The marketplace landing page is commented out at the bottom of that file — every component it referenced still exists and still typechecks, so restoring it means swapping the two blocks back.

**Routing.** The QR printed on each product's insert card carries that product's ASIN in the path, and the review button deep-links to `amazon.in/review/create-review/?ie=UTF8&channel=glance-detail&asin=…`:

| URL | Review button |
|---|---|
| `/` | storefront search (no product context) |
| `/B0H9HNQWMM` | that product's review form |
| `/product/B0H9HNQWMM` | same — `products`, `p`, `item` prefixes also accepted |
| `/?asin=B0H9HNQWMM` | same, via query string |
| anything else | 404 |

Because this route sits at the root it would swallow every unmatched path, so `resolveAsinFromRoute()` in `lib/thank-you.ts` is deliberately strict — two segments maximum, a known prefix, and a well-formed 10-character ASIN — and the page calls `notFound()` otherwise. The same validation stops arbitrary input reaching an outbound URL. **Reading `searchParams` is what makes this route dynamic (`ƒ`); dropping the `?asin=` fallback would let the 20 known ASINs prerender.**

`PRODUCT_ASINS` in the same file lists the live catalogue (20 ASINs) for generating one QR code per product. It is deliberately **not** used as a validation allowlist, so a newly launched product still deep-links correctly before someone remembers to add it.

## Architecture

```
app/           layout (fonts + metadata), page (section composition), globals.css, actions/
components/    layout/ sections/ products/ reviews/ faq/ newsletter/ ui/
hooks/         scroll, in-view, body-scroll-lock, escape-key
lib/           content.ts (placeholder data) · site.ts (config) · types.ts
```

`app/page.tsx` and every file in `components/sections/` are **Server Components**. Interactivity is pushed to the smallest possible leaves — when adding a section, keep it a Server Component and extract only the stateful part.

Three patterns carry that split, and they're the thing to understand before editing:

- **`<Reveal>` takes `children` as a prop.** It's a Client Component (IntersectionObserver), but markup passed into it stays server-rendered. Wrapping content in `<Reveal>` does not move it to the client.
- **Quick view uses context, not lifted state.** `QuickViewProvider` (client) owns the modal; `ProductCard` stays a Server Component and embeds the client `QuickViewButton`. Same trick as `<Reveal>` — don't collapse this into one client grid.
- **`ReviewGrid` receives its heading as a `ReactNode` prop.** Sorting needs client state, but the heading beside the sort buttons is server-rendered and passed in.

Body scroll locking is reference-counted in `hooks/use-body-scroll-lock.ts` because the mobile menu and quick-view modal can overlap; don't set `document.body.style.overflow` directly.

The newsletter posts to a Server Action (`app/actions/subscribe.ts`) via `useActionState`, so it works without JS. The action currently only validates — wiring the email provider is a TODO there.

## Stack

- **Next.js 16.2.12** (App Router), **React 19.2.4**, **TypeScript strict**, **Tailwind CSS v4**, **lucide-react** for icons.
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
