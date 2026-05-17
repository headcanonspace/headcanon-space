import type { Metadata } from "next";
import Link from "next/link";
import RandomHeadcanonTool from "@/components/RandomHeadcanonTool";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Random Headcanon Generator (Instant & Free)",
  description: "Free random headcanon generator - get instant character quirks, relationship moments, and story ideas with one click. No input needed. Unlimited generations.",
  alternates: {
    canonical: "https://headcanonspace.com/random-headcanon-generator/",
  },
  openGraph: {
    title: "Random Headcanon Generator",
    description: "Free random headcanon generator - get instant character quirks, relationship moments, and story ideas with one click. No input needed. Unlimited generations.",
    url: "/random-headcanon-generator/",
  },
};

const randomFaqs = [
  {
    question: "What is a random headcanon generator?",
    answer: "A random headcanon generator creates instant character quirks, couple dynamics, and story prompts without requiring any input or setup. Perfect for quick inspiration."
  },
  {
    question: "How is this different from the other generators?",
    answer: "Unlike the other specialized tools where you input a name or setting, the random generator is designed for one-click discovery. It mixes traits, ships, and settings together completely randomly."
  },
  {
    question: "Can I use these prompts for writing challenges?",
    answer: "Yes! Many writers use them for daily writing prompts, 100-word drabbles, or drawing prompts for fanart challenges."
  },
  {
    question: "Do I need to sign up to save my generated prompts?",
    answer: "No. You can save your favorite prompts directly inside the browser using local storage, completely free and without an account."
  },
  {
    question: "Are the generated random headcanons safe for work?",
    answer: "Yes. All our prompts focus on emotional depth, character development, and narrative scenarios, keeping the content fully PG-13 and safe for all writing communities."
  }
];

export default function RandomHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Random Headcanon Generator",
            "url": "https://headcanonspace.com/random-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate random headcanons instantly with this free tool."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a random headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A random headcanon generator creates instant character quirks, couple dynamics, and story prompts without requiring any input or setup. Perfect for quick inspiration."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from the other generators?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike the other specialized tools where you input a name or setting, the random generator is designed for one-click discovery. It mixes traits, ships, and settings together completely randomly."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use these prompts for writing challenges?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Many writers use them for daily writing prompts, 100-word drabbles, or drawing prompts for fanart challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to sign up to save my generated prompts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. You can save your favorite prompts directly inside the browser using local storage, completely free and without an account."
                }
              },
              {
                "@type": "Question",
                "name": "Are the generated random headcanons safe for work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All our prompts focus on emotional depth, character development, and narrative scenarios, keeping the content fully PG-13 and safe for all writing communities."
                }
              }
            ]
          })
        }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">

          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-1.2px", color: "var(--color-text)", marginBottom: "20px" }}>
            Random Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            No setup and no prompts. Just click and discover a fresh
            creative idea every time.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <RandomHeadcanonTool />
        </div>
      </section>

      {/* ── What Is a Random Headcanon Generator? ───── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Is a Random Headcanon Generator?</h2>
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A random headcanon generator creates unique character ideas,
              personality traits, and story scenarios with a single click. No inputs
              are needed because every result is completely randomized.
            </p>
            <p>
              It&apos;s built for fans, writers, and anyone who wants quick creative
              inspiration without overthinking the details.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Use & Why Use It ─────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg" style={{ background: "var(--color-primary-lt)", color: "var(--color-primary)" }}>1</span>
                How to Use This Tool
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "var(--color-ink-3)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Open the tool and a headcanon is generated instantly
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Click &quot;Generate Again&quot; to get a new idea
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Copy and use the headcanon for writing or inspiration
                </li>
              </ul>
            </div>

            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg" style={{ background: "#ecfdf5", color: "#059669" }}>✓</span>
                Why Use It?
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "var(--color-ink-3)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Instant ideas with zero setup
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Break through creative blocks fast
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Discover unexpected character traits and angles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">FAQ</p>
            <h2 className="section__h2">Frequently Asked Questions</h2>
          </div>

          <FaqAccordion items={randomFaqs} />
        </div>
      </section>

      {/* ── Explore More Tools ────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">More tools</p>
          <h2 className="section__h2 mb-8">Explore More Tools</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/" className="tool-link-card">
              <span className="tool-icon">✦</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Headcanon Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>All-purpose headcanon ideas</p>
            </Link>
            <Link href="/character-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">👤</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Character Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Deep traits & backstories</p>
            </Link>
            <Link href="/relationship-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">💞</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Relationship Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Ship dynamics & couple moments</p>
            </Link>
            <Link href="/scenario-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">🎭</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Scenario Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Story settings & situations</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
