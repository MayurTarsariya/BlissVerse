import { MarketplaceButton } from "@/components/ui/marketplace-button";
import { Stars } from "@/components/ui/stars";
import { MARKETPLACES } from "@/lib/site";
import type { Product } from "@/lib/types";
import { ProductImage } from "./product-image";
import { QuickViewButton } from "./quick-view-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <div
        className={`zoom-parent relative aspect-[4/5] overflow-hidden ${product.tone}`}
      >
        <ProductImage product={product} />

        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-neutral-950 px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}

        <QuickViewButton product={product} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{product.desc}</p>

        <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
          <Stars value={product.rating} />
          <span className="font-semibold text-neutral-950">{product.rating}</span>
          <span>· {product.count.toLocaleString("en-IN")} on Amazon</span>
        </div>

        <p className="mt-2 text-sm font-semibold">{product.price}</p>

        <div className="mt-auto grid gap-2 border-t border-line pt-4">
          <MarketplaceButton href={MARKETPLACES.amazon} size="sm" block>
            Buy on Amazon
          </MarketplaceButton>
          <MarketplaceButton
            href={MARKETPLACES.flipkart}
            variant="outline"
            size="sm"
            block
          >
            Buy on Flipkart
          </MarketplaceButton>
        </div>
      </div>
    </article>
  );
}
