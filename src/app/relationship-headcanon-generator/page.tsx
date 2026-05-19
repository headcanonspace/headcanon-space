import type { Metadata } from "next";
import Link from "next/link";
import RelationshipHeadcanonGenerator from "@/components/RelationshipHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Relationship Headcanon Generator (Free & Instant)",
  description:
    "Free relationship headcanon generator - explore ship dynamics, private rituals, and unspoken tension between any two characters instantly. Perfect for fanfiction and roleplay.",
  alternates: {
    canonical: "https://headcanonspace.com/relationship-headcanon-generator/",
  },
  openGraph: {
    title: "Relationship Headcanon Generator",
    description: "Free relationship headcanon generator - explore ship dynamics, private rituals, and unspoken tension between any two characters instantly. Perfect for fanfiction and roleplay.",
    url: "/relationship-headcanon-generator/",
  },
};

const relationshipFaqs = [
  {
    question: "What is a relationship headcanon?",
    answer: "A relationship headcanon is a fan-created theory or interpretation about the dynamic, habits, or private interactions between two characters, whether they are romantic partners (ships), friends, or rivals."
  },
  {
    question: "How do I generate couple or ship headcanons?",
    answer: "Simply type two character names in the inputs and click the generate button. The tool creates unique dynamics, soft fluff, emotional angst, or situational moments customized with their names."
  },
  {
    question: "Can I use the generated ship ideas for roleplaying?",
    answer: "Yes! Thousands of roleplayers use these prompts to set up RP starters, discord threads, and character dynamic sheets. They are 100% free for any creative use."
  },
  {
    question: "Does the generator support LGBTQ+ ships?",
    answer: "Absolutely. The prompts are gender-neutral and focus purely on emotional and situational dynamics, making them perfect for any ship type, including M/M, F/F, and M/F."
  },
  {
    question: "Is there a limit to how many couples I can generate?",
    answer: "No. The tool is free with no registration, no limits, and works instantly for any pairing in any fandom."
  }
];

export default function RelationshipHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Relationship Headcanon Generator",
            "url": "https://headcanonspace.com/relationship-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate relationship headcanons for any two characters instantly. Perfect for fanfiction."
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
                "name": "What is a relationship headcanon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A relationship headcanon is a fan-created theory or interpretation about the dynamic, habits, or private interactions between two characters, whether they are romantic partners (ships), friends, or rivals."
                }
              },
              {
                "@type": "Question",
                "name": "How do I generate couple or ship headcanons?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply type two character names in the inputs and click the generate button. The tool creates unique dynamics, soft fluff, emotional angst, or situational moments customized with their names."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use the generated ship ideas for roleplaying?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Thousands of roleplayers use these prompts to set up RP starters, discord threads, and character dynamic sheets. They are 100% free for any creative use."
                }
              },
              {
                "@type": "Question",
                "name": "Does the generator support LGBTQ+ ships?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. The prompts are gender-neutral and focus purely on emotional and situational dynamics, making them perfect for any ship type, including M/M, F/F, and M/F."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a limit to how many couples I can generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The tool is free with no registration, no limits, and works instantly for any pairing in any fandom."
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
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <RelationshipHeadcanonGenerator />
        </div>
      </section>

      {/* ── What Is a Relationship Headcanon ────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Is a Relationship Headcanon?</h2>
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
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Relationship Headcanons</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character A always notices when Character B is overwhelmed, even before they say anything.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Intuitive Connection</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character B trusts Character A more than anyone else, but struggles to admit it.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Silent Trust</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character A and Character B argue often, but it never changes how much they care about each other.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Dynamic Bond</span>
              </div>
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

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">FAQ</p>
            <h2 className="section__h2">Frequently Asked Questions</h2>
          </div>

          <FaqAccordion items={relationshipFaqs} />
        </div>
      </section>

      {/* ── Explore More Tools ────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">More tools</p>
          <h2 className="section__h2 mb-8">Explore More Tools</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-lt)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Headcanon Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">All-purpose headcanon ideas</p>
            </Link>
            <Link href="/character-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-lt)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Character Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Deep traits & backstories</p>
            </Link>
            <Link href="/scenario-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Scenario Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Story settings & situations</p>
            </Link>
            <Link href="/random-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Random Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Instant random ideas</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
