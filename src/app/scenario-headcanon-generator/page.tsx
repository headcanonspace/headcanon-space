import type { Metadata } from "next";
import Link from "next/link";
import ScenarioHeadcanonGenerator from "@/components/ScenarioHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Scenario Headcanon Generator (Creative Story Ideas)",
  description:
    "Free scenario headcanon generator - place characters into any setting and get dramatic story triggers instantly. Perfect for creative writing and roleplay.",
  alternates: {
    canonical: "https://headcanonspace.com/scenario-headcanon-generator/",
  },
  openGraph: {
    title: "Scenario Headcanon Generator",
    description: "Free scenario headcanon generator - place characters into any setting and get dramatic story triggers instantly. Perfect for creative writing and roleplay.",
    url: "/scenario-headcanon-generator/",
  },
};

const scenarioFaqs = [
  {
    question: "What is a scenario headcanon?",
    answer: "A scenario headcanon is an idea about how characters would behave, react, or interact in a specific setting or environment (e.g., modern coffee shop AU, fantasy quest, or locked room situation)."
  },
  {
    question: "Can I input my own custom settings?",
    answer: "Yes! You can type any setting (like 'camping trip' or 'rainy afternoon') into the prompt input, and our tool will adapt the scenarios to match that theme."
  },
  {
    question: "How does the scenario generator help writers?",
    answer: "It breaks through writer's block by giving you a clear setting, character trigger, and emotional conflict in one click. You can use it as a complete writing prompt."
  },
  {
    question: "Are the scenarios suitable for original universes?",
    answer: "Yes. They are designed to work perfectly for canon fandom characters as well as your own original characters (OCs) in custom settings."
  },
  {
    question: "Can I save the scenarios I generate?",
    answer: "Yes! Use the built-in Save feature to store your favorite scenarios in your browser's local storage so you never lose them."
  }
];

export default function ScenarioHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Scenario Headcanon Generator",
            "url": "https://headcanonspace.com/scenario-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate scenario-based headcanons instantly. Perfect for storytelling and roleplay."
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
                "name": "What is a scenario headcanon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A scenario headcanon is an idea about how characters would behave, react, or interact in a specific setting or environment (e.g., modern coffee shop AU, fantasy quest, or locked room situation)."
                }
              },
              {
                "@type": "Question",
                "name": "Can I input my own custom settings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! You can type any setting (like 'camping trip' or 'rainy afternoon') into the prompt input, and our tool will adapt the scenarios to match that theme."
                }
              },
              {
                "@type": "Question",
                "name": "How does the scenario generator help writers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It breaks through writer's block by giving you a clear setting, character trigger, and emotional conflict in one click. You can use it as a complete writing prompt."
                }
              },
              {
                "@type": "Question",
                "name": "Are the scenarios suitable for original universes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. They are designed to work perfectly for canon fandom characters as well as your own original characters (OCs) in custom settings."
                }
              },
              {
                "@type": "Question",
                "name": "Can I save the scenarios I generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Use the built-in Save feature to store your favorite scenarios in your browser's local storage so you never lose them."
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
            Scenario Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Drop your characters into any setting and generate
            story situations, dramatic twists, and creative scenes instantly.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <ScenarioHeadcanonGenerator />
        </div>
      </section>

      {/* ── What Is a Scenario Headcanon ────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Is a Scenario Headcanon?</h2>
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A scenario headcanon explores how characters behave or what happens
              within a specific situation or setting.
            </p>
            <p>
              Fans use scenario-based ideas to build stories, create prompts, and
              explore different environments.
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
                  Enter a scenario or leave it empty
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
                  Generate story ideas instantly
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Explore different settings and situations
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#10b981", marginTop: "2px" }}>•</span>
                  Improve creative writing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Example Scenario Headcanons ─────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Scenario Headcanons</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  In a coffee shop setting, they keep running into each other but never properly talk.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Coffee Shop Meeting</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  During a road trip, unresolved tension finally comes to the surface.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Road Trip Tension</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  In a high school setting, they act like rivals but secretly support each other.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Secret Rivals</span>
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
            <span className="feature-tag">Story writing</span>
            <span className="feature-tag">Roleplay scenarios</span>
            <span className="feature-tag">Creative prompts</span>
            <span className="feature-tag">Idea generation</span>
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

          <FaqAccordion items={scenarioFaqs} />
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
