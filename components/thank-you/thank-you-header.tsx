import Link from "next/link";
import { HEADER } from "@/lib/thank-you";
import { Wordmark } from "./wordmark";

export function ThankYouHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-7 md:px-8">
      <Link href="/" aria-label="BLISSVERSE home">
        <Wordmark />
      </Link>
      <p className="text-muted hidden text-sm sm:block">{HEADER.tagline}</p>
    </header>
  );
}
