import { BadgeCheck, Headphones, ShieldCheck, Truck } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const VALUE_PROPS = [
  {
    Icon: ShieldCheck,
    title: "Premium quality",
    body: "Materials and finishes chosen to outlast the trend cycle.",
  },
  {
    Icon: BadgeCheck,
    title: "Quality checked",
    body: "Every batch inspected twice before it reaches fulfilment.",
  },
  {
    Icon: Truck,
    title: "Fast delivery",
    body: "Shipped from Amazon & Flipkart fulfilment centres, pan-India.",
  },
  {
    Icon: Headphones,
    title: "Human support",
    body: "Real people, one-business-day replies, 12-month warranty.",
  },
];

export function ValueProps() {
  return (
    <section className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Why Blissverse</Eyebrow>
          <h2 className="font-display mt-4 text-4xl font-light md:text-5xl">
            Considered in every detail.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-line bg-white p-7">
                <span className="border-gold inline-flex h-11 w-11 items-center justify-center rounded-full border">
                  <Icon size={19} className="text-gold" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
