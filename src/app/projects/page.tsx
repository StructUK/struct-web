import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source n8n automations built by Struct Solutions - real workflow templates for quoting, inbox triage, reporting, and content distribution.",
  alternates: { canonical: "/projects" },
};

const PROJECTS = [
  {
    name: "Missed-Call WhatsApp Follow-up",
    tag: "n8n · WhatsApp",
    desc: "The moment a call goes unanswered, the caller gets an instant WhatsApp message so the lead isn't lost - with duplicate protection and a searchable log of every missed call.",
    repoUrl: "https://github.com/StructUK/n8n-missed-call-whatsapp-followup",
    diagramSrc: "/projects/whatsapp-missed-call-followup.svg",
  },
  {
    name: "RAG Quote Generator",
    tag: "n8n · RAG",
    desc: "Drafts itemised job quotes grounded in your own pricing knowledge base, so estimates stay consistent no matter who's asking.",
    repoUrl: "https://github.com/StructUK/n8n-rag-quote-generator",
    diagramSrc: "/projects/rag-quote-generator.svg",
  },
  {
    name: "emailPlus",
    tag: "n8n · Inbox AI",
    desc: "Reads inbound enquiries, drafts a reply with AI, auto-sends the routine ones and hands anything sensitive to a human first.",
    repoUrl: "https://github.com/StructUK/emailPlus",
    diagramSrc: "/projects/email-plus.svg",
  },
  {
    name: "WhatsApp AI Support Chatbot",
    tag: "n8n · WhatsApp",
    desc: "Picks up the conversation the moment a lead replies - answering from your own FAQ and pricing docs, remembering the thread, and handing off to a human by email, Slack and SMS when it's out of its depth.",
    repoUrl: "https://github.com/StructUK/n8n-whatsapp-support-chatbot",
    diagramSrc: "/projects/whatsapp-support-chatbot.svg",
  },
  {
    name: "Video Cross-Posting Framework",
    tag: "n8n · Social",
    desc: "Publishes one finished video across TikTok, Instagram, YouTube, Facebook, LinkedIn, Pinterest and X through a swappable adapter.",
    repoUrl: "https://github.com/StructUK/n8n-video-cross-posting-framework",
    diagramSrc: "/projects/video-cross-posting.svg",
  },
  {
    name: "Monthly Report Generator",
    tag: "n8n · Reporting",
    desc: "Summarises last month's revenue and jobs from a spreadsheet and emails the report on schedule, with zero manual pulling.",
    repoUrl: "https://github.com/StructUK/n8n-monthly-report-generator",
    diagramSrc: "/projects/monthly-report-generator.svg",
  },
];

export default function Projects() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-20">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Projects</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Automations we&apos;ve
            <br />
            <em className="text-green-light not-italic">open-sourced.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            A few of the n8n workflows behind our own automation builds - real
            templates, not slideware, published on GitHub for anyone to inspect
            or adapt.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="card-hover overflow-hidden rounded-2xl border border-border bg-bg-2"
              >
                <div className="flex h-48 items-center justify-center bg-[#0d0d0d] sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.diagramSrc}
                    alt={`${p.name} workflow diagram`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="px-6 py-6">
                  <div className="eyebrow">{p.tag}</div>
                  <h3 className="mt-3 text-lg">{p.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{p.desc}</p>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-green-light hover:text-green"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Want one built for you?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              These are templates - the version we&apos;d build for your business
              plugs into your own tools and data.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Book a free call →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
