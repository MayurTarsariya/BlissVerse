import { SITE } from "@/lib/site";
import { THANK_YOU_FOOTER } from "@/lib/thank-you";
import { Wordmark } from "./wordmark";

export function ThankYouFooter() {
  return (
    <footer className="bg-ink px-6 pt-12 pb-8 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Wordmark onDark />
            <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-neutral-500">
              {THANK_YOU_FOOTER.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {THANK_YOU_FOOTER.links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-xs text-neutral-400 transition-colors hover:text-gold-soft"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-6 text-[11px] text-neutral-600">
          <p>
            © 2026 {SITE.name.toUpperCase()}. All rights reserved.
          </p>
          <p>{THANK_YOU_FOOTER.note}</p>
        </div>
      </div>
    </footer>
  );
}
