import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { DISCOVER } from "@/lib/thank-you";
import { RuleEyebrow } from "./rule-eyebrow";

export function DiscoverCard() {
  return (
    <Reveal>
      <section className="rounded-2xl bg-ink px-6 py-12 text-center sm:px-10">
        <RuleEyebrow onDark>{DISCOVER.eyebrow}</RuleEyebrow>

        <h2 className="font-display mt-5 text-2xl font-normal text-white sm:text-[1.7rem]">
          {DISCOVER.title}
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-neutral-400 sm:text-sm">
          {DISCOVER.body}
        </p>

        <a
          href={DISCOVER.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-paper btn-sm mt-7"
        >
          <ShoppingBag size={14} aria-hidden="true" />
          {DISCOVER.cta}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </section>
    </Reveal>
  );
}
