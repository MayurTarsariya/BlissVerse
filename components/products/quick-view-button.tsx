"use client";

import type { Product } from "@/lib/types";
import { useQuickView } from "./quick-view-provider";

export function QuickViewButton({ product }: { product: Product }) {
  const openQuickView = useQuickView();

  return (
    <button
      type="button"
      onClick={() => openQuickView(product)}
      className="absolute right-3 bottom-3 rounded-full border border-line bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur transition-colors hover:border-neutral-950"
    >
      Quick view
      <span className="sr-only"> — {product.name}</span>
    </button>
  );
}
