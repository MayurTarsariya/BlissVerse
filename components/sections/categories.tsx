import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CATEGORIES } from "@/lib/content";
import { MARKETPLACES } from "@/lib/site";

export function Categories() {
  return (
    <section className="px-6 pb-16 md:px-10 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Browse</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
            Find your fit.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 70}>
              {/* TODO: point each tile at its own marketplace category listing. */}
              <a
                href={MARKETPLACES.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className={`zoom-parent group relative block aspect-[4/5] overflow-hidden rounded-2xl ${category.tone}`}
              >
                <span aria-hidden="true" className="zoom-img absolute inset-0" />
                <span className="absolute inset-x-0 bottom-0 block p-5">
                  <span className="font-display block text-2xl">{category.name}</span>
                  <span className="mt-1 block text-xs opacity-60">{category.note}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Shop
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
