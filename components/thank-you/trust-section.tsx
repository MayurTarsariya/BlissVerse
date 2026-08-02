import { BadgeCheck, HeartHandshake, PenLine, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { TRUST, type TrustIcon } from "@/lib/thank-you";

const ICONS: Record<TrustIcon, LucideIcon> = {
  badge: BadgeCheck,
  pen: PenLine,
  heart: HeartHandshake,
};

export function TrustSection() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 py-20 md:px-8 md:py-28">
      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {TRUST.map((item, i) => {
          const Icon = ICONS[item.icon];

          return (
            <FadeIn key={item.title} delay={i * 120} className="h-full">
              <article className="group rounded-card border-line bg-card shadow-soft hover:shadow-glow h-full border p-8 transition-all duration-300 hover:-translate-y-1.5">
                <div className="bg-forest-tint text-forest group-hover:bg-forest grid size-12 place-items-center rounded-2xl transition-colors duration-300 group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h2 className="font-display text-ink mt-6 text-lg font-bold tracking-tight">
                  {item.title}
                </h2>
                <p className="text-muted mt-2 text-[0.95rem]">{item.body}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
