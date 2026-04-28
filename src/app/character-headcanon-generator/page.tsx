import type { Metadata } from "next";
import Link from "next/link";
import CharacterHeadcanonGenerator from "@/components/CharacterHeadcanonGenerator";

export const metadata: Metadata = {
  title: "Character Headcanon Generator (Create Unique Ideas)",
  description: "Generate headcanons for any character instantly.",
  alternates: {
    canonical: "/character-headcanon-generator/",
  },
  openGraph: {
    title: "Character Headcanon Generator",
    description: "Generate headcanons for any character instantly.",
    url: "/character-headcanon-generator/",
  },
};

export default function CharacterHeadcanonGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Character Headcanon Generator",
    description: "Generate headcanons for any character instantly.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">

          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-1.2px", color: "var(--color-text)", marginBottom: "20px" }}>
            Character Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Give your character a life they never got on screen — generate
            unique traits, habits, and secrets instantly.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <CharacterHeadcanonGenerator />
      </section>

      {/* ── What Is a Character Headcanon Generator? ── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">👤 What Is a Character Headcanon Generator?</h2>
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A character headcanon generator creates personalized ideas and
              interpretations for any fictional character. It takes a name you
              provide and builds unique traits, habits, and backstory details around them.
            </p>
            <p>
              Unlike random generators, this tool makes every result feel personal
              by weaving the character&apos;s name directly into the output.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Use & Why Use It ─────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* How It Works */}
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg" style={{ background: "var(--color-primary-lt)", color: "var(--color-primary)" }}>1</span>
                How to Use This Tool
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "var(--color-ink-3)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Type the name of any character into the input field
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Click &quot;Generate Headcanon&quot; to create a unique idea
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Copy the result or click again for a new headcanon
                </li>
              </ul>
            </div>

            {/* Why Use It */}
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <span className="w-8 h-8 flex items-center justify-center text-sm rounded-lg" style={{ background: "#ecfdf5", color: "#059669" }}>✓</span>
                Why Use It?
              </h3>
              <ul className="space-y-3 text-sm" style={{ color: "var(--color-ink-3)" }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Generate unique ideas for any character instantly
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Explore personality traits and hidden details
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Improve fanfiction and storytelling
                </li>
              </ul>
            </div>
          </div>
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
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>General Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>All-purpose headcanon ideas</p>
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
            <Link href="/random-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">🎲</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Random Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Instant random ideas</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
