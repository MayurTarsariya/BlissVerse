import { NewsletterForm } from "@/components/newsletter/newsletter-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-20 text-white md:px-10 md:py-28">
      <div
        aria-hidden="true"
        className="orb drift-2 -top-40 right-0 h-96 w-96"
        style={{ background: "rgb(216 188 134 / 0.14)" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow onDark>Stay close</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
            New launches, first.
          </h2>
          <p className="mt-4 text-neutral-400">
            Occasional notes on new products, honest offers and care tips.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <NewsletterForm />
          <p className="mt-5 text-xs text-neutral-600">
            One email a month at most. No spam, no sharing your address — unsubscribe
            anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
