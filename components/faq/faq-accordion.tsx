"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/lib/types";

type FaqAccordionProps = {
  faqs: Faq[];
  /** Index open on load. -1 starts fully collapsed. */
  defaultOpenIndex?: number;
};

export function FaqAccordion({ faqs, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className="mt-4">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={faq.q} className="border-line border-b">
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="group font-display text-ink flex w-full items-center justify-between gap-6 py-5 text-left text-[0.95rem] font-bold"
            >
              <span className="group-hover:text-forest transition-colors">
                {faq.q}
              </span>
              {open ? (
                <Minus size={16} className="text-forest shrink-0" aria-hidden="true" />
              ) : (
                <Plus
                  size={16}
                  className="text-muted group-hover:text-forest shrink-0 transition-colors"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* grid-rows 0fr → 1fr animates to the answer's natural height, so
                long answers are never clipped. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className="grid transition-all duration-500"
              style={{
                gridTemplateRows: open ? "1fr" : "0fr",
                opacity: open ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="text-muted pb-5 text-[0.95rem]">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
