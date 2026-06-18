"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const SUBJECTS = [
  "Free Website Audit",
  "SEO Strategy",
  "Web Development",
  "Google Business Profile",
  "Paid Ads",
  "Email Marketing",
  "AI & Automation",
  "General Enquiry",
];

const SERVICE_ID = "service_6tji8xl";
const TEMPLATE_ID = "template_p3k2p5u";
const PUBLIC_KEY = "cnhoeGP0DPNEvIz9A";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: formData.get("email"),
          subject: formData.get("subject"),
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
      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-email`} className="text-sm text-text-secondary">
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          placeholder="you@business.co.uk"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-subject`} className="text-sm text-text-secondary">
          Subject
        </label>
        <select
          id={`${idPrefix}-subject`}
          name="subject"
          defaultValue={SUBJECTS[0]}
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary focus:outline-none focus:border-green"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-message`} className="text-sm text-text-secondary">
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          placeholder="Tell us about your business..."
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-light">
          ✓ Message sent! We&apos;ll be in touch within 48 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please email us directly at contact@struct.solutions
        </p>
      )}
    </form>
  );
}
