import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { AMAZON_BRAND_STORE } from "@/lib/site";
import { EXPLORE, EXPLORE_TILES } from "@/lib/thank-you";

export function ExploreSection() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 py-20 md:px-8 md:py-28">
      <FadeIn className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">{EXPLORE.eyebrow}</p>
          <h2 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
            {EXPLORE.title}
          </h2>
        </div>
        <Button
          href={AMAZON_BRAND_STORE}
          ariaLabel="Explore all products in the BLISSVERSE store"
        >
          {EXPLORE.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="snap-row mt-10 flex gap-5 overflow-x-auto pb-4">
          {EXPLORE_TILES.map((tile) => (
            <a
              key={tile.label}
              href={AMAZON_BRAND_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-card border-line shadow-soft hover:shadow-glow relative flex aspect-[4/5] w-[240px] shrink-0 flex-col justify-end overflow-hidden border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1.5 md:w-[256px] ${tile.tone}`}
            >
              <span
                aria-hidden="true"
                className="bg-forest/60 absolute top-5 right-5 size-2 rounded-full transition-transform duration-300 group-hover:scale-150"
              />
              <span className="font-display text-ink text-lg font-bold tracking-tight">
                {tile.label}
              </span>
              <span className="text-forest mt-1 inline-flex items-center gap-1 text-sm font-semibold">
                View on Amazon
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
