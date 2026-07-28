import type { Product } from "@/lib/types";

/**
 * Placeholder product panel.
 * TODO: replace with `next/image` product photography (4:5, ~1200×1500).
 */
export function ProductImage({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`zoom-img absolute inset-0 flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <span className="font-display text-3xl text-neutral-950 opacity-10">
        {product.cat}
      </span>
    </div>
  );
}
