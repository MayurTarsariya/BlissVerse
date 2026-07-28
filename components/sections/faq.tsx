import { FaqAccordion } from "@/components/faq/faq-accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { FAQS } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
            Questions, answered.
          </h2>
        </Reveal>

        <FaqAccordion faqs={FAQS} />
      </div>
    </section>
  );
}
