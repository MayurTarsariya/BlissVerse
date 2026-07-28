import { Mail } from "lucide-react";
import { YoutubeIcon } from "@/components/ui/social-icons";
import { FOOTER_COLUMNS, LEGAL_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";

const SOCIALS = [
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: YoutubeIcon },
  { label: "Email", href: `mailto:${SITE.email}`, Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-neutral-800 bg-neutral-950 px-6 pt-16 pb-10 text-white md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl tracking-widest">
            BLISS<span className="text-gold-soft">VERSE</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Thoughtfully designed essentials for home, kitchen and office. Made
            carefully, sold on the marketplaces you trust.
          </p>
          <div className="mt-6 flex gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-400 transition-colors hover:text-gold-soft"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <p className="eyebrow text-gold-soft">{column.heading}</p>
            <ul className="mt-5 grid gap-3">
              {column.links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {LEGAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <p>Amazon and Flipkart are trademarks of their respective owners.</p>
      </div>
    </footer>
  );
}
