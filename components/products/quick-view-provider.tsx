"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { Product } from "@/lib/types";
import { QuickViewModal } from "./quick-view-modal";

const QuickViewContext = createContext<((product: Product) => void) | null>(null);

export function useQuickView() {
  const open = useContext(QuickViewContext);
  if (!open) {
    throw new Error("useQuickView must be used inside <QuickViewProvider>");
  }
  return open;
}

/**
 * Holds the quick-view modal state so product cards can stay Server Components —
 * only the trigger button and the modal itself ship to the client.
 */
export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const open = useCallback((next: Product) => setProduct(next), []);
  const close = useCallback(() => setProduct(null), []);

  return (
    <QuickViewContext.Provider value={open}>
      {children}
      <QuickViewModal product={product} onClose={close} />
    </QuickViewContext.Provider>
  );
}
