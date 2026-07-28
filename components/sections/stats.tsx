import { CountUp } from "@/components/ui/count-up";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-neutral-950 px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow onDark>By the numbers</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="font-display text-gold-soft text-5xl font-light md:text-6xl">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-neutral-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 text-xs text-neutral-600">
            Figures aggregated from our Amazon and Flipkart listings, updated quarterly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
