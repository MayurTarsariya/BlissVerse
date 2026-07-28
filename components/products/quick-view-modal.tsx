"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MarketplaceButton } from "@/components/ui/marketplace-button";
import { Stars } from "@/components/ui/stars";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { MARKETPLACES } from "@/lib/site";
import type { Product } from "@/lib/types";

type QuickViewModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  useBodyScrollLock(product !== null);
  useEscapeKey(product !== null, onClose);

  useEffect(() => {
    if (!product) return;
    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => restoreFocusTo.current?.focus();
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {/* Backdrop. A button rather than a div so it is keyboard-reachable and
          announced; the visible close button carries the same action. */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/60"
      />

      <div className="relative grid w-full max-w-2xl overflow-hidden rounded-3xl bg-white sm:grid-cols-2">
        <div
          className={`aspect-square hidden items-center justify-center sm:flex ${product.tone}`}
          aria-hidden="true"
        >
          {/* TODO: replace with next/image product photography. */}
          <span className="font-display text-4xl opacity-10">{product.cat}</span>
        </div>

        <div className="p-8">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute top-4 right-4 rounded-full p-2 transition-colors hover:bg-stone-100"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <Eyebrow>{product.cat}</Eyebrow>
          <h3 className="font-display mt-3 text-2xl leading-snug">{product.name}</h3>
          <p className="mt-3 leading-relaxed text-neutral-500">{product.desc}</p>

          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
            <Stars value={product.rating} />
            <span className="font-semibold text-neutral-950">{product.rating}</span>
            <span>· {product.count.toLocaleString("en-IN")} ratings on Amazon</span>
          </div>

          <p className="mt-3 text-lg font-semibold">{product.price}</p>

          <div className="mt-6 grid gap-2">
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
      </div>
    </div>
  );
}
