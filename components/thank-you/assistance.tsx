import { Mail, MessageCircle } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ASSISTANCE, type ChannelIcon } from "@/lib/thank-you";
import { RuleEyebrow } from "./rule-eyebrow";

const ICONS: Record<ChannelIcon, ComponentType<{ size?: number }>> = {
  mail: Mail,
  whatsapp: MessageCircle,
};

export function Assistance() {
  return (
    <section className="text-center">
      <Reveal>
        <RuleEyebrow>{ASSISTANCE.eyebrow}</RuleEyebrow>

        <h2 className="font-display text-navy mt-5 text-2xl font-normal sm:text-[1.7rem]">
          {ASSISTANCE.title}
        </h2>

        <p className="text-taupe mx-auto mt-4 max-w-sm text-xs leading-relaxed sm:text-sm">
          {ASSISTANCE.body}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {ASSISTANCE.channels.map((channel) => {
            const Icon = ICONS[channel.icon];

            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:border-gold/50 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 transition-colors"
                >
                  <span className="bg-cream text-gold flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Icon size={14} />
                  </span>
                  <span className="text-left">
                    <span className="eyebrow text-taupe block">{channel.label}</span>
                    <span className="text-navy mt-1 block text-xs font-medium">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
