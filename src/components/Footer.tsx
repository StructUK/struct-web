import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/imgs/structlogo1w.png"
            alt="Struct Solutions"
            width={336}
            height={68}
            className="h-[24px] w-auto"
          />
          <p className="text-sm text-text-secondary">
            Business systems and digital infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-7">
          <Link href="/services" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Services
          </Link>
          <Link href="/work" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Case Study
          </Link>
          <Link href="/projects" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Projects
          </Link>
          <Link href="/about" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            About
          </Link>
          <Link href="/contact" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Contact
          </Link>
          <a
            href="mailto:hello@struct.solutions"
            className="text-sm text-text-secondary hover:text-text-primary"
          >
            hello@struct.solutions
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/company/struct-solutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Struct Solutions on LinkedIn"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <line x1="7" y1="10.5" x2="7" y2="17" />
              <circle cx="7" cy="6.7" r="0.3" fill="currentColor" stroke="none" />
              <path d="M11 17v-4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" />
              <line x1="11" y1="10.5" x2="11" y2="17" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/structuk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Struct Solutions on Instagram"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="0.4" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <p className="w-full text-[0.82rem] text-text-muted">
          © 2026 Struct Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
