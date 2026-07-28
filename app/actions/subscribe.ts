"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const INITIAL_SUBSCRIBE_STATE: SubscribeState = {
  status: "idle",
  message: "",
};

// Deliberately loose: a stricter regex rejects valid addresses more often than
// it catches typos. The provider confirms deliverability.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter signup.
 *
 * TODO: forward the address to the email provider (Mailchimp / Resend / Brevo)
 * using a server-side API key from the environment, and handle duplicates.
 */
export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  return { status: "success", message: "Thanks — you're on the list." };
}
