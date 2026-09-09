"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const SERVICE_ID = "service_8wjxfiw";
const TEMPLATE_ID = "template_5dbqcal";
const PUBLIC_KEY = "547Y5-X7Qy3MgqjUh";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const business = formData.get("business");
    const website = formData.get("website");
    const improve = formData.get("improve");
    const friction = formData.get("friction");
    const context = formData.get("context");
    setStatus("sending");

    const message = [
      `What they're trying to improve: ${improve}`,
      `What's taking too much time or causing problems: ${friction}`,
      `Additional context: ${context || "None provided"}`,
    ].join("\n\n");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: formData.get("email"),
          business_name: business || "Not provided",
          website: website || "Not provided",
          subject: `Website enquiry from ${name}${business ? ` (${business})` : ""}`,
          message,
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          <label htmlFor="contact-website" className="text-sm text-text-secondary">
            Website (optional)
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            placeholder="yourbusiness.co.uk"
            className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-improve" className="text-sm text-text-secondary">
          What are you trying to improve?
        </label>
        <textarea
          id="contact-improve"
          name="improve"
          rows={2}
          required
          placeholder="e.g. How we handle new enquiries"
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-friction" className="text-sm text-text-secondary">
          What currently takes too much time or causes problems?
        </label>
        <textarea
          id="contact-friction"
          name="friction"
          rows={4}
          required
          placeholder="e.g. We get a lot of enquiries and reply to them manually. It takes hours every week."
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-context" className="text-sm text-text-secondary">
          Anything else we should know? (optional)
        </label>
        <textarea
          id="contact-context"
          name="context"
          rows={3}
          placeholder="Any extra context that would help"
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
