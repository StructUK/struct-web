"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const SERVICE_ID = "service_6tji8xl";
const TEMPLATE_ID = "template_p3k2p5u";
const PUBLIC_KEY = "cnhoeGP0DPNEvIz9A";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const business = formData.get("business");
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: formData.get("email"),
          subject: `Website enquiry from ${name}${business ? ` (${business})` : ""}`,
          message: formData.get("message"),
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-lg text-text-primary">Send a message</h3>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm text-text-secondary">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm text-text-secondary">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@business.co.uk"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-business" className="text-sm text-text-secondary">
          Business name (optional)
        </label>
        <input
          id="contact-business"
          name="business"
          type="text"
          placeholder="Your business"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm text-text-secondary">
          What would you like to automate?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder={'e.g. "We get a lot of enquiries and reply to them manually — it takes hours every week."'}
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-light">
          ✓ Message received. We&apos;ll be back to you as soon as possible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please email us directly at hello@struct.solutions
        </p>
      )}
    </form>
  );
}
