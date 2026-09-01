import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.struct.solutions"),
  title: {
    default: "Struct Solutions — AI Automation for Small Businesses",
    template: "%s - Struct Solutions",
  },
  description:
    "Struct Solutions builds AI-powered workflow automations for UK small businesses. Stop doing it manually — we automate your enquiries, follow-ups, and admin.",
  icons: {
    icon: [
      { url: "/imgs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/imgs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/imgs/apple-touch-icon.png",
  },
  manifest: "/imgs/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Struct Solutions",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
