/**
 * Shown while an uncached ASIN renders. Catalogue pages are prerendered, so
 * this is mostly a first-paint courtesy on a cold edge.
 *
 * The three pulsing forest dots are the brand's signature motif; the staggered
 * delays come from inline styles because the values are per-dot.
 */
export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32">
      <div className="flex items-center gap-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="bg-forest size-2.5 animate-bounce rounded-full"
            style={{ animationDelay: `${i * 140}ms`, animationDuration: "900ms" }}
          />
        ))}
      </div>

      <p className="eyebrow mt-8">Preparing your page</p>

      <span className="sr-only" role="status">
        Loading
      </span>
    </main>
  );
}
