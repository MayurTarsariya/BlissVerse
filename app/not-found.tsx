import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/thank-you/footer";
import { ThankYouHeader } from "@/components/thank-you/thank-you-header";
import { Button } from "@/components/ui/button";
import { AMAZON_BRAND_STORE, SUPPORT } from "@/lib/site";

/**
 * Branded 404. Covers both unmatched URLs and unrecognised QR codes — an ASIN
 * that isn't in data/products.json 404s here (see `dynamicParams` in
 * app/p/[asin]/page.tsx).
 */
export default function NotFound() {
  return (
    <>
      <ThankYouHeader />

      <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center px-6 py-24 text-center md:px-8">
        <p className="eyebrow mb-6">Page not found</p>

        <h1 className="font-display text-ink text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] font-bold tracking-[-0.035em] text-balance">
          We couldn&rsquo;t find that one
          <span
            aria-hidden="true"
            className="bg-forest ml-[0.08em] inline-block size-[0.16em] rounded-full align-baseline"
          />
        </h1>

        <p className="text-muted mt-6 max-w-md">
          The link may be mistyped, or the QR code may be from a product we
          haven&rsquo;t listed yet. Browse the store, or send us the code and
          we&rsquo;ll sort it out.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={AMAZON_BRAND_STORE} ariaLabel="Visit the BLISSVERSE store">
            Visit the store
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button
            href={`mailto:${SUPPORT.email}`}
            variant="secondary"
            external={false}
            ariaLabel="Contact BLISSVERSE support"
          >
            Contact support
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
