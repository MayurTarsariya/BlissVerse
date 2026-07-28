"use client";

import { useActionState } from "react";
import { INITIAL_SUBSCRIBE_STATE, subscribe } from "@/app/actions/subscribe";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribe,
    INITIAL_SUBSCRIBE_STATE,
  );

  if (state.status === "success") {
    return (
      <p className="text-gold-soft mt-9 font-semibold" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <>
      <form action={formAction} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby={state.status === "error" ? "newsletter-error" : undefined}
          className="focus:border-gold-soft flex-1 rounded-full border border-neutral-700 bg-transparent px-5 py-3 text-sm placeholder-neutral-500"
        />
        <button type="submit" disabled={pending} className="btn btn-paper disabled:opacity-60">
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {state.status === "error" && (
        <p id="newsletter-error" role="alert" className="mt-3 text-sm text-red-300">
          {state.message}
        </p>
      )}
    </>
  );
}
