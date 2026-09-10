import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Case Study: Missed Call to WhatsApp System",
  description:
    "How two of Struct Solutions' systems work together: turning a missed call into a WhatsApp conversation, then handling that conversation with an AI agent grounded in the business's own knowledge base.",
  alternates: { canonical: "/work" },
};

const FOLLOWUP_STEPS = [
  {
    n: "01",
    title: "Call goes unanswered",
    desc: "A Twilio status webhook fires the moment a call to the business goes unanswered.",
  },
  {
    n: "02",
    title: "Filter for genuine misses",
    desc: "Answered calls and voicemails are filtered out. Only real missed calls carry on.",
  },
  {
    n: "03",
    title: "Check the log",
    desc: "A quick Google Sheets lookup and a dedupe check make sure the same caller doesn't get messaged twice in a short window.",
  },
  {
    n: "04",
    title: "Send the WhatsApp message",
    desc: "An approved WhatsApp template goes out immediately with a friendly first message.",
  },
  {
    n: "05",
    title: "Watch for failures",
    desc: "If the send fails, a bad number or an opt-out, it's logged separately so nothing silently disappears.",
  },
  {
    n: "06",
    title: "Log everything",
    desc: "Every outcome, sent, skipped, or failed, gets written back to the sheet.",
  },
];

const HANDOFF_STEPS = [
  {
    n: "01",
    title: "They reply",
    desc: "The moment the lead responds on WhatsApp, a webhook catches the inbound message.",
  },
  {
    n: "02",
    title: "Check who's already talking to them",
    desc: "The system checks whether a team member is already mid-conversation with this lead.",
  },
  {
    n: "03",
    title: "Stay quiet if a human's on it",
    desc: "If someone's actively handling the conversation, the bot doesn't jump in and talk over them.",
  },
  {
    n: "04",
    title: "Otherwise, the AI agent takes it",
    desc: "It answers from a knowledge base built on the business's own FAQ and pricing information, and remembers the whole conversation by phone number.",
  },
  {
    n: "05",
    title: "It knows when to hand off",
    desc: "If a question genuinely needs a person, the agent calls a second workflow that logs the handoff and alerts the team by email, Slack and text.",
  },
  {
    n: "06",
    title: "The team steps in",
    desc: "Once notified, a person takes over the conversation, and the bot stays out of the way.",
  },
];

const STATS = [
  { value: "2", label: "Connected systems" },
  { value: "<1 min", label: "Time to first message" },
  { value: "24/7", label: "Coverage" },
  { value: "0", label: "Conversations left hanging" },
];

export default function Work() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Case Study</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            From missed call
            <br />
            <em className="text-green-light not-italic">to handled conversation.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Here&apos;s exactly how two of our systems work together, start to finish,
            the same kind of build we do for the businesses we work with.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <SectionSpine side="left" branch="out" />
        <div className="mx-auto max-w-[760px] px-6">
          <Reveal>
            <div className="eyebrow">The problem</div>
            <h2 className="mt-4 text-2xl sm:text-[1.75rem]">
              A missed call is a lead calling the next number on the list.
            </h2>
            <p className="mt-5 text-text-secondary">
              Most people don&apos;t leave a voicemail when a call goes unanswered,
              they just try somewhere else. By the time anyone gets around to calling
              back, the moment, and often the job, has already gone to whoever
              happened to pick up.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-20">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">The build</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Two systems, one handoff.</h2>
            <p className="mt-5 text-text-secondary">
              The first system catches the missed call and starts the conversation.
              The second picks that conversation up, answers it properly, and knows
              when to bring in a person. Neither one does the whole job alone.
            </p>
          </Reveal>

          <Reveal className="mb-10">
            <h3 className="text-xl sm:text-[1.5rem]">1. Missed-Call Follow-up</h3>
            <p className="mt-3 max-w-2xl text-text-secondary">
              The moment a call goes unanswered, this system sends the caller a
              WhatsApp message before they&apos;ve even thought about calling anyone
              else.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-2 p-4 sm:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/whatsapp-missed-call-followup.svg"
                alt="Missed-Call WhatsApp Follow-up workflow diagram"
                style={{ width: 1000, maxWidth: "none" }}
              />
            </div>
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {FOLLOWUP_STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-green-light/40 font-display text-sm text-green-light">
                  {s.n}
                </div>
                <div>
                  <h4 className="text-base">{s.title}</h4>
                  <p className="mt-1.5 text-sm text-text-secondary">{s.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <a
              href="https://github.com/StructUK/n8n-missed-call-whatsapp-followup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-green-light hover:text-green"
            >
              See the full workflow file on GitHub →
            </a>
          </Reveal>

          <div className="my-16 h-px bg-border" />

          <Reveal className="mb-10">
            <h3 className="text-xl sm:text-[1.5rem]">2. AI Support Handoff</h3>
            <p className="mt-3 max-w-2xl text-text-secondary">
              When the lead replies, this system takes the conversation from there,
              answering from the business&apos;s own knowledge, remembering the
              thread, and calling in a person the moment it should.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-2 p-4 sm:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/whatsapp-support-chatbot.svg"
                alt="WhatsApp AI Support Chatbot workflow diagram"
                style={{ width: 900, maxWidth: "none" }}
              />
            </div>
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {HANDOFF_STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-green-light/40 font-display text-sm text-green-light">
                  {s.n}
                </div>
                <div>
                  <h4 className="text-base">{s.title}</h4>
                  <p className="mt-1.5 text-sm text-text-secondary">{s.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <a
              href="https://github.com/StructUK/n8n-whatsapp-support-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-green-light hover:text-green"
            >
              See the full workflow file on GitHub →
            </a>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative overflow-hidden py-20">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={480} />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">The outcome</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              No missed call goes unanswered, and no reply goes unhandled.
            </h2>
            <p className="mt-5 text-text-secondary">
              Every missed call gets an instant, human-sounding follow-up on
              WhatsApp. Every reply gets answered within seconds, grounded in the
              business&apos;s own information rather than a generic script. And when
              a conversation genuinely needs a person, the right person finds out
              immediately, not the next time someone happens to check WhatsApp.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl text-green-light sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-text-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Have something similar?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              If missed calls, slow replies, or conversations falling through the
              cracks cost you leads, we can build the same thing for your business.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
