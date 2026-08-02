import Link from "next/link";
import { AMAZON_BRAND_STORE, SITE, SUPPORT } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function Footer({ supportEmail }: { supportEmail?: string }) {
  const email = supportEmail ?? SUPPORT.email;

  const links = [
    { label: "Amazon Store", href: AMAZON_BRAND_STORE },
    { label: "WhatsApp", href: SUPPORT.whatsappUrl },
    { label: "Contact", href: `mailto:${email}` },
  ];

  return (
    <footer className="border-line border-t">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-8">
        <Link href="/" aria-label="BLISSVERSE">
          <Wordmark size="sm" />
        </Link>

        <nav aria-label="Footer">
          <ul className="text-muted flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-forest transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-muted text-xs">
          &copy; {new Date().getFullYear()} {SITE.name.toUpperCase()}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
