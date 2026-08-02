"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { Float } from "@/components/motion/float";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { HERO } from "@/lib/thank-you";

const EASE = [0.22, 1, 0.36, 1] as const;

type HeroProps = {
  product: Product | null;
  /** Resolved per product; falls back to Amazon's review hub on the generic page. */
  reviewUrl: string;
  shopUrl: string;
};

export function Hero({ product, reviewUrl, shopUrl }: HeroProps) {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative mx-auto w-full max-w-[1100px] overflow-visible px-6 pt-10 pb-24 md:px-8 md:pt-16 md:pb-32">
      {/* Ambient organic shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Float
          duration={9}
          distance={14}
          className="bg-sand-tint absolute top-8 -left-24 size-72 rounded-full blur-3xl"
        />
        <Float
          duration={11}
          distance={18}
          delay={1}
          className="bg-forest-tint absolute top-40 -right-16 size-80 rounded-full blur-3xl"
        />
      </div>

      <div className="grid items-center gap-14 md:grid-cols-[7fr_5fr] md:gap-10">
        {/* Copy */}
        <div>
          <motion.p {...fadeUp(0.1)} className="eyebrow mb-6">
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-ink text-[clamp(3.25rem,9vw,6rem)] leading-[1.02] font-bold tracking-[-0.035em]"
          >
            {HERO.title}
            <motion.span
              aria-hidden="true"
              className="bg-forest ml-[0.08em] inline-block size-[0.16em] rounded-full align-baseline"
              initial={reduce ? { opacity: 0 } : { y: "-3em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={
                reduce
                  ? { duration: 0.3, delay: 0.6 }
                  : { type: "spring", stiffness: 300, damping: 16, delay: 0.65 }
              }
            />
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="font-display text-ink mt-4 text-xl font-semibold tracking-tight md:text-2xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.p {...fadeUp(0.45)} className="text-muted mt-5 max-w-md">
            {HERO.body}
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={reviewUrl} ariaLabel="Leave an honest review on Amazon">
              <Star className="size-4 fill-current" aria-hidden="true" />
              {HERO.reviewCta}
            </Button>
            <Button
              href={shopUrl}
              variant="secondary"
              ariaLabel="Shop more BLISSVERSE products"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              {HERO.shopCta}
            </Button>
          </motion.div>
        </div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="relative"
        >
          <div className="from-sand-tint via-paper to-forest-tint rounded-panel shadow-soft relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br">
            {product?.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover"
                priority
              />
            ) : (
              <>
                {/* TODO: drop a lifestyle photo in /public and render it here,
                    or set `image` on the product in data/products.json. */}
                <div
                  aria-hidden="true"
                  className="bg-sand/40 absolute -top-10 -left-10 size-56 rounded-full blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="bg-forest/15 absolute -right-8 -bottom-12 size-64 rounded-full blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="bg-paper/70 absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-[38%_62%_58%_42%/48%_44%_56%_52%] backdrop-blur-sm"
                />
              </>
            )}
          </div>

          {/* Floating glass product card */}
          <Float
            duration={6}
            distance={10}
            className="absolute -bottom-8 left-1/2 w-[78%] max-w-[300px] -translate-x-1/2"
          >
            <div className="rounded-card shadow-lift border border-white/60 bg-white/70 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="from-forest to-forest-deep grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br"
                >
                  <span className="size-2 rounded-full bg-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-ink truncate text-sm font-bold">
                    {product?.name ?? HERO.genericProductLabel}
                  </p>
                  <div className="mt-1 flex items-center gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="fill-sand stroke-sand size-3.5" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-pill bg-forest-tint text-forest mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                {HERO.qualityChip}
              </div>
            </div>
          </Float>
        </motion.div>
      </div>
    </section>
  );
}
