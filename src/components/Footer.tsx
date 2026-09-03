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
            AI Automation and Digital Services.
          </p>
        </div>
        <div className="flex flex-wrap gap-7">
          <Link href="/services" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Services
          </Link>
          <Link href="/work" prefetch={false} className="text-sm text-text-secondary hover:text-text-primary">
            Explanation
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
        <p className="w-full text-[0.82rem] text-text-muted">
          © 2026 Struct Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
