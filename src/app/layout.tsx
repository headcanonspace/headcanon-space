import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://headcanonspace.com"),
  title: "Free Headcanon Generator – Create Ideas Instantly",
  description:
    "Generate creative headcanon ideas instantly with this free headcanon generator. Perfect for fandoms, characters, and stories.",
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Headcanon Generator – Create Ideas Instantly",
    description: "Generate creative headcanon ideas instantly with this free headcanon generator. Perfect for fandoms, characters, and stories.",
    url: "https://headcanonspace.com",
    siteName: "Headcanon Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Headcanon Generator",
    description: "Generate creative headcanon ideas instantly with this free headcanon generator.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        {/* AdSense publisher verification script. Keep this in the root layout; do not remove. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0S0GHTYEEB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0S0GHTYEEB');
          `}
        </Script>
      </head>

      <body className={`${dmSans.variable} ${dmSerif.variable} min-h-screen flex flex-col`} style={{ fontFamily: "var(--font-sans)" }}>
        <Navbar />

        {/* ── Main ───────────────────────────────────── */}
        <main className="flex-1">{children}</main>

        {/* ── Footer ─────────────────────────────────── */}
        <footer className="mt-24" style={{ background: "#0a0e1a", color: "rgba(255,255,255,0.5)" }}>
          <div className="mx-auto max-w-[1120px] px-6 pt-14 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

              {/* Brand Col */}
              <div>
                <p className="text-xl mb-3" style={{ fontFamily: "var(--font-serif)", color: "#fff" }}>
                  Headcanon Space
                </p>
                <p className="text-sm leading-relaxed max-w-[280px]">
                  Explore different types of headcanon generators to create unique
                  ideas for characters, relationships, and scenarios instantly.
                </p>
                <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>Designed for storytelling and fan creativity.</p>
              </div>

              {/* Tools Col */}
              <div>
                <p className="text-[11px] font-medium tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Generators</p>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <Link href="/" className="text-sm hover:text-white transition-colors">Headcanon Generator</Link>
                  </li>
                  <li>
                    <Link href="/character-headcanon-generator/" className="text-sm hover:text-white transition-colors">Character Generator</Link>
                  </li>
                  <li>
                    <Link href="/relationship-headcanon-generator/" className="text-sm hover:text-white transition-colors">Relationship Generator</Link>
                  </li>
                  <li>
                    <Link href="/scenario-headcanon-generator/" className="text-sm hover:text-white transition-colors">Scenario Generator</Link>
                  </li>
                  <li>
                    <Link href="/random-headcanon-generator/" className="text-sm hover:text-white transition-colors">Random Generator</Link>
                  </li>
                </ul>
              </div>

              {/* Legal Col */}
              <div>
                <p className="text-[11px] font-medium tracking-[2px] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Legal &amp; Contact</p>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <Link href="/about/" className="text-sm hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact/" className="text-sm hover:text-white transition-colors">Contact</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service/" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Copyright */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p>© {new Date().getFullYear()} Headcanon Generator. All rights reserved.</p>
              <div className="flex gap-5">
                <Link href="/privacy-policy/" className="hover:text-white/80 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy</Link>
                <Link href="/terms-of-service/" className="hover:text-white/80 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Terms</Link>
                <Link href="/contact/" className="hover:text-white/80 transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
