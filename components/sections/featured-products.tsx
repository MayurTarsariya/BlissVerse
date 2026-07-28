import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { QuickViewProvider } from "@/components/products/quick-view-provider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS } from "@/lib/content";
import { MARKETPLACES } from "@/lib/site";

export function FeaturedProducts() {
  return (
    <section id="products" className="scroll-mt-24 bg-stone-50 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>The collection</Eyebrow>
              <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
                Featured products
              </h2>
            </div>
            <a
              href={MARKETPLACES.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold inline-flex items-center gap-1 text-sm font-semibold transition-colors"
            >
              View the full range on Amazon
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <QuickViewProvider>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 90} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </QuickViewProvider>
      </div>
    </section>
  );
}
