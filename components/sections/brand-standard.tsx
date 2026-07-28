import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { STANDARDS } from "@/lib/content";

export function BrandStandard() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div className="self-start lg:sticky lg:top-28">
          <Reveal>
            <Eyebrow>Our promise</Eyebrow>
            <h2 className="font-display mt-4 text-4xl leading-tight font-light md:text-5xl">
              The Blissverse standard.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-neutral-500">
              Four steps every product passes through — in this order — before it earns
              the name.
            </p>
          </Reveal>
        </div>

        <div>
          {STANDARDS.map((standard, i) => (
            <Reveal key={standard.n} delay={i * 80}>
              <div className="flex gap-6 border-b border-line py-8">
                <span className="font-display text-gold pt-0.5 text-xl">
                  {standard.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{standard.t}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-500">{standard.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
