"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { MarketplaceButton } from "@/components/ui/marketplace-button";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useEscapeKey } from "@/hooks/use-escape-key";
import { useScrolled } from "@/hooks/use-scrolled";
import { MARKETPLACES, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);
  useEscapeKey(menuOpen, () => setMenuOpen(false));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b bg-white transition-all duration-500 ${
          scrolled ? "border-line shadow-sm" : "border-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#"
            aria-label="Blissverse home"
            className="font-display text-xl font-medium tracking-widest"
          >
            BLISS<span className="text-gold">VERSE</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#products" className="btn btn-sm btn-ink">
              Shop now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="p-2 lg:hidden"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-neutral-950 p-6 text-white"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl tracking-widest">
              BLISS<span className="text-gold-soft">VERSE</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light transition-colors hover:text-gold-soft"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="grid gap-3">
            <MarketplaceButton href={MARKETPLACES.amazon} block>
              Shop on Amazon
            </MarketplaceButton>
            <a
              href={MARKETPLACES.flipkart}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full justify-center"
            >
              Shop on Flipkart
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
