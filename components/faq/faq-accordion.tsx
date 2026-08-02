"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import type { Faq } from "@/lib/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="mt-10">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <Reveal key={faq.q} delay={i * 40}>
            <div className="border-b border-line">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-semibold">{faq.q}</span>
                {open ? (
                  <Minus size={18} className="text-gold shrink-0" aria-hidden="true" />
                ) : (
                  <Plus size={18} className="shrink-0" aria-hidden="true" />
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
                  <p className="pb-6 leading-relaxed text-neutral-500">{faq.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
