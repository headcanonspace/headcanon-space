import type { Metadata } from "next";
import Link from "next/link";
import ScenarioHeadcanonGenerator from "@/components/ScenarioHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Scenario Headcanon Generator — Free Story Settings & AU Ideas",
  description: "Free scenario headcanon generator. Drop characters into any setting — coffee shop AU, school, war, modern — and get story moments and dramatic scenes instantly. No signup.",
  alternates: {
    canonical: "https://headcanonspace.com/scenario-headcanon-generator/",
  },
  openGraph: {
    title: "Scenario Headcanon Generator — Free Story Settings & AU Ideas",
    description: "Free scenario headcanon generator. Drop characters into any setting — coffee shop AU, school, war, modern — and get story moments and dramatic scenes instantly. No signup.",
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
                  "text": "A scenario headcanon places characters in a specific setting or situation and explores how they would behave, react, or feel in that context. It is a 'what if' moment, grounded in who the characters are, set somewhere new."
                }
              },
              {
                "@type": "Question",
                "name": "What settings can I use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Any setting. The tool works with realistic modern settings, fantasy worlds, sci-fi environments, historical periods, and alternate universes. The setting is your choice, and the tool creates the moment inside it."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for AU ideas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. This is one of the most useful applications. Use it to find a specific scenario that becomes the seed of your alternate universe. The best AU ideas come from one concrete moment, not a general premise."
                }
              },
              {
                "@type": "Question",
                "name": "How many scenarios can I generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlimited. Each click produces a new result from the curated prompt pool. Generate as many times as you need."
                }
              },
              {
                "@type": "Question",
                "name": "Can I combine this with the character headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Generate a character headcanon first to establish who your character is, then use this tool to place them in a specific situation. The character headcanon generator and this tool work well as a pair."
                }
              },
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

      {/* ── Popular Scenario Types in Fandom Writing ──── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="section__label">Scenario types</p>
          <h2 className="section__h2">Popular Scenario Types in Fandom Writing</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Coffee shop AU</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                One of the most-used settings in fandom writing. Two characters meet, or re-meet, in a mundane space that strips away whatever made them complicated. This tool creates the specific moment that defines who they are to each other in this version of the world: the first exchange, the thing one of them notices, the reason they come back.
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>War and conflict settings</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                High-stakes scenarios where survival, loyalty, and moral choices get forced into a single moment. Canon characters in war AUs reveal things that ordinary life never surfaces. This tool creates the dramatic trigger: the order given, the decision made, the cost that follows.
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>School and academy AU</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Structured environments with social hierarchies, secret lives, and the weight of other people's expectations. High school AU and academy settings work because the pressure is constant and inescapable. This tool places characters inside those pressures and creates a moment that reveals something true about them.
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Modern AU</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Canon characters lifted out of their original setting and placed into the present day. The powers are gone, the stakes are smaller, but the personalities remain. Modern AU headcanons work because who someone is does not change with the world around them. This tool creates the everyday moment that carries the full weight of who they are.
              </p>
            </article>
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

      {/* ── Who Uses This Tool? ────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="section__label">Audience</p>
          <h2 className="section__h2">Who Uses This Tool?</h2>
          <p className="section__lead mt-3">
            This tool is used by anyone who needs a specific story moment fast.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Fanfiction writers planning a chapter</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Use it to find the setting before you plan the plot. The environment shapes the scene, and the scene shapes the character. AO3 writers use scenario headcanons to build the specific moment a chapter turns on.
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Roleplayers setting a scene</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Generate a scenario before a Discord RP or forum session to give both players a concrete situation to react to. Specific is always better than "we are somewhere in the city."
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Artists looking for a scene to draw</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                A specific scenario, like two characters in a power cut, in a train station, or in a borrowed coat, is easier to visualize and draw than an abstract mood. This tool gives you the moment, not just the feeling.
              </p>
            </article>
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Writers building AU ideas</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Use it to find a scenario type you have not tried, then build an alternate universe around it. The best AUs on Tumblr and Wattpad start from one specific moment, not a vague premise.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Scenario Headcanon Generator — FAQ ─────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">Common questions</p>
            <h2 className="section__h2">Scenario Headcanon Generator - FAQ</h2>
          </div>

          <div className="space-y-6">
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>What is a scenario headcanon?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                A scenario headcanon places characters in a specific setting or situation and explores how they would behave, react, or feel in that context. It is a "what if" moment, grounded in who the characters are, set somewhere new.
              </p>
            </div>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>What settings can I use?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Any setting. The tool works with realistic modern settings, fantasy worlds, sci-fi environments, historical periods, and alternate universes. The setting is your choice, and the tool creates the moment inside it.
              </p>
            </div>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Can I use this for AU ideas?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Yes. This is one of the most useful applications. Use it to find a specific scenario that becomes the seed of your alternate universe. The best AU ideas come from one concrete moment, not a general premise.
              </p>
            </div>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>How many scenarios can I generate?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Unlimited. Each click produces a new result from the curated prompt pool. Generate as many times as you need.
              </p>
            </div>
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Can I combine this with the character headcanon generator?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Yes. Generate a character headcanon first to establish who your character is, then use this tool to place them in a specific situation. The{" "}
                <Link href="/character-headcanon-generator/">character headcanon generator</Link>
                {" "}and this tool work well as a pair.
              </p>
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

          <FaqAccordion items={scenarioFaqs} />
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
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">All-purpose headcanon ideas</p>
            </Link>
            <Link href="/relationship-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Relationship Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Ship dynamics & couple moments</p>
            </Link>
            <Link href="/scenario-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Scenario Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Story settings & situations</p>
            </Link>
            <Link href="/random-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Random Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Instant random ideas</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
