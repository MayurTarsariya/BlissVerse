import { Reveal } from "@/components/ui/reveal";
import { HERO } from "@/lib/thank-you";
import { RuleEyebrow } from "./rule-eyebrow";
import { SealOrnament } from "./seal-ornament";

export function ThankYouHero() {
  return (
    <section className="text-center">
      <Reveal>
        <div className="flex justify-center">
          <SealOrnament />
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8">
          <RuleEyebrow>{HERO.eyebrow}</RuleEyebrow>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <h1 className="font-display text-navy mt-6 text-[2.1rem] leading-[1.15] font-normal sm:text-[2.6rem]">
          {HERO.title}
          <br />
          <em className="italic">{HERO.brand}</em>
          <span className="text-gold">.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-taupe mx-auto mt-6 max-w-md text-sm leading-relaxed">
          {HERO.body}
        </p>
      </Reveal>

      <Reveal delay={260}>
        <ul className="text-taupe mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {HERO.pillars.map((pillar, i) => (
            <li key={pillar} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-gold/70 text-[10px]">
                  ◆
                </span>
              )}
              <span className="eyebrow">{pillar}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
