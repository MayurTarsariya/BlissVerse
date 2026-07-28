import { Eyebrow } from "@/components/ui/eyebrow";
import { MarketplaceButton } from "@/components/ui/marketplace-button";
import { Reveal } from "@/components/ui/reveal";
import { MARKETPLACES } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Blissverse · Home — Kitchen — Office</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display mt-6 text-5xl leading-none font-light md:text-7xl">
              Premium products, designed for{" "}
              <em className="text-gold not-italic">everyday</em> living.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Simple, elegant, thoughtfully made essentials — trusted by thousands of
              customers across India, delivered through the marketplaces you already
              trust.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MarketplaceButton href={MARKETPLACES.amazon}>
                Shop on Amazon
              </MarketplaceButton>
              <MarketplaceButton href={MARKETPLACES.flipkart} variant="outline">
                Shop on Flipkart
              </MarketplaceButton>
              <a
                href="#products"
                className="ml-1 text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-950"
              >
                Explore the collection ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 text-xs text-neutral-400">
              Sold &amp; fulfilled via Amazon and Flipkart — secure checkout, marketplace
              returns, GST invoice.
            </p>
          </Reveal>
        </div>

        {/* TODO: replace this panel with lifestyle photography (next/image, 2400×1200). */}
        <Reveal delay={200}>
          <div className="relative mt-14 aspect-video overflow-hidden rounded-3xl bg-stone-100 md:mt-20">
            <div
              aria-hidden="true"
              className="orb drift-1 -top-20 -left-16 h-96 w-96"
              style={{ background: "rgb(169 130 76 / 0.28)" }}
            />
            <div
              aria-hidden="true"
              className="orb drift-2 right-10 -bottom-32 h-96 w-96"
              style={{ background: "rgb(10 10 10 / 0.1)" }}
            />

            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display font-light text-neutral-950 opacity-5 select-none"
                style={{ fontSize: "min(18vw, 220px)" }}
              >
                Blissverse
              </span>
            </div>

            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-40 w-40 rounded-full border md:h-64 md:w-64"
                style={{ borderColor: "rgb(169 130 76 / 0.5)" }}
              />
            </div>

            <a
              href={MARKETPLACES.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift absolute right-4 bottom-4 flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-4 py-3 backdrop-blur md:right-8 md:bottom-8"
            >
              <span aria-hidden="true" className="h-10 w-10 rounded-xl bg-cream" />
              <span className="text-left">
                <span className="block text-xs font-semibold">
                  Vessel Bottle · ₹1,299
                </span>
                <span className="text-gold block text-xs font-semibold">
                  View on Amazon ↗
                </span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
