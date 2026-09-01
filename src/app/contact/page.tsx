import type { Metadata } from "next";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 20-minute call with Struct Solutions or send us a message. We'll get back to you as soon as possible.",
  alternates: { canonical: "/contact" },
};

const NEXT_STEPS = [
  {
    n: "01",
    title: "You hear back as soon as possible",
    desc: "We'll reply with a few questions or a link to book a call - whichever makes more sense for what you've told us.",
  },
  {
    n: "02",
    title: "Free 20-minute call",
    desc: "No pitch. We ask about your business, where the time is going, and whether automation would actually help. Honest conversation.",
  },
  {
    n: "03",
    title: "We quote before we start",
    desc: "If there's a fit, we send a fixed-price quote. No day rates, no vague estimates. You approve before anything gets built.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Contact</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">Let&apos;s talk.</h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Book a free 20-minute call or send us a message. We&apos;ll get back to you
            as soon as possible.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <SectionSpine side="left" branch="out" />
        <GlowBloom className="top-1/3 right-0 -translate-y-1/2 translate-x-1/3" size={420} />
        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Email
                </span>
                <a
                  href="mailto:hello@struct.solutions"
                  className="mt-2 block text-text-primary hover:text-green-light"
                >
                  hello@struct.solutions
                </a>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Based in
                </span>
                <p className="mt-2 text-text-primary">
                  Manchester · Working with businesses throughout the UK
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-24">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">What happens next</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              What happens after you reach out.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {NEXT_STEPS.map((s) => (
              <div key={s.n}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-light/40 font-display text-sm text-green-light">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
