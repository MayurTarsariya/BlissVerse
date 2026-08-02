import { ArrowUpRight, Clock, Mail, MessageCircle } from "lucide-react";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { SUPPORT } from "@/lib/site";
import { SUPPORT_SECTION, THANK_YOU_FAQS } from "@/lib/thank-you";

/** `supportEmail` comes from the product record, so a line can have its own inbox. */
export function SupportSection({ supportEmail }: { supportEmail: string }) {
  const channels = [
    {
      Icon: MessageCircle,
      title: SUPPORT_SECTION.whatsapp.title,
      body: SUPPORT_SECTION.whatsapp.body,
      cta: SUPPORT_SECTION.whatsapp.cta,
      href: SUPPORT.whatsappUrl,
      external: true,
    },
    {
      Icon: Mail,
      title: SUPPORT_SECTION.email.title,
      body: SUPPORT_SECTION.email.body,
      cta: supportEmail,
      href: `mailto:${supportEmail}`,
      external: false,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-24 md:px-8 md:pb-32">
      <FadeIn className="text-center">
        <p className="eyebrow mb-4">{SUPPORT_SECTION.eyebrow}</p>
        <h2 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
          {SUPPORT_SECTION.title}
        </h2>
        <div className="rounded-pill bg-forest-tint text-forest mx-auto mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
          <Clock className="size-4" aria-hidden="true" />
          {SUPPORT_SECTION.responsePill}
        </div>
      </FadeIn>

      <div className="mx-auto mt-10 grid max-w-[760px] gap-5 sm:grid-cols-2">
        {channels.map(({ Icon, title, body, cta, href, external }, i) => (
          <FadeIn key={title} delay={100 + i * 120} className="h-full">
            <a
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-card border-line bg-card shadow-soft hover:shadow-glow flex h-full flex-col border p-8 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="bg-forest-tint text-forest group-hover:bg-forest grid size-12 place-items-center rounded-2xl transition-colors duration-300 group-hover:text-white">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="font-display text-ink mt-6 text-lg font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-muted mt-2 flex-1 text-[0.95rem]">{body}</p>
              <span className="text-forest mt-5 inline-flex items-center gap-1 text-sm font-bold break-all">
                {cta}
                <ArrowUpRight
                  className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={160}>
        <div className="mx-auto mt-16 max-w-[760px]">
          <p className="eyebrow mb-2 text-center">{SUPPORT_SECTION.faqTitle}</p>
          <FaqAccordion faqs={THANK_YOU_FAQS} defaultOpenIndex={-1} />
        </div>
      </FadeIn>
    </section>
  );
}
