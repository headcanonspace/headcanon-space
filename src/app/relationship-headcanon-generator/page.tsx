import type { Metadata } from "next";
import Link from "next/link";
import RelationshipHeadcanonGenerator from "@/components/RelationshipHeadcanonGenerator";

export const metadata: Metadata = {
  title: "Relationship Headcanon Generator (Free & Instant)",
  description:
    "Generate relationship headcanons for any two characters instantly. Perfect for fanfiction, roleplay, and storytelling.",
  alternates: {
    canonical: "/relationship-headcanon-generator/",
  },
  openGraph: {
    title: "Relationship Headcanon Generator",
    description: "Generate relationship headcanons for any two characters instantly. Perfect for fanfiction, roleplay, and storytelling.",
    url: "/relationship-headcanon-generator/",
  },
};

export default function RelationshipHeadcanonGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Relationship Headcanon Generator",
    description: "Generate relationship headcanons for any two characters instantly. Perfect for fanfiction.",
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
            Relationship Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Explore the dynamics between any two characters and generate
            ship moments, conflicts, and tender scenes instantly.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <RelationshipHeadcanonGenerator />
      </section>

      {/* ── What Is a Relationship Headcanon ────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">💞 What Is a Relationship Headcanon?</h2>
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A relationship headcanon describes how two characters interact,
              behave, or feel about each other beyond what is officially shown.
            </p>
            <p>
              Fans use relationship headcanons to explore emotional dynamics, hidden
              connections, and unique character interactions.
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
                  Enter two character names
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Click generate to create a headcanon
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                  Generate more ideas instantly
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
                  Explore character dynamics instantly
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Improve storytelling and fanfiction
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Discover new emotional interactions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Example Relationship Headcanons ─────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-10">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Relationship Headcanons</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <article className="example-card">
              <p className="example-card__type">Relationship</p>
              <blockquote>&ldquo;Character A always notices when Character B is overwhelmed, even before they say anything.&rdquo;</blockquote>
            </article>
            <article className="example-card">
              <p className="example-card__type">Relationship</p>
              <blockquote>&ldquo;Character B trusts Character A more than anyone else, but struggles to admit it.&rdquo;</blockquote>
            </article>
            <article className="example-card">
              <p className="example-card__type">Relationship</p>
              <blockquote>&ldquo;Character A and Character B argue often, but it never changes how much they care about each other.&rdquo;</blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Use cases</p>
          <h2 className="section__h2 mb-6">Perfect For</h2>
          <div className="flex flex-wrap gap-2">
            <span className="feature-tag">Fanfiction writing</span>
            <span className="feature-tag">Character relationship building</span>
            <span className="feature-tag">Roleplay scenarios</span>
            <span className="feature-tag">Creative storytelling</span>
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
            <Link href="/character-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">👤</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Character Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Deep traits & backstories</p>
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
