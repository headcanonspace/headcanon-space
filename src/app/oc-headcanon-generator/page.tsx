import type { Metadata } from "next";
import Link from "next/link";
import CharacterHeadcanonGenerator from "@/components/CharacterHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "OC Headcanon Generator - Free Original Character Ideas",
  description: "Free OC headcanon generator - create unique traits, habits, and backstory ideas for your original characters instantly. Perfect for writers and world-builders.",
  alternates: {
    canonical: "https://headcanonspace.com/oc-headcanon-generator/",
  },
};

export default function OCHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "OC Headcanon Generator",
            "url": "https://headcanonspace.com/oc-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free OC headcanon generator that creates unique personality traits, habits, and backstory ideas for original characters instantly."
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
                "name": "What is an OC headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An OC headcanon generator is a tool that creates personality traits, habits, and backstory ideas for original characters. It gives you a specific starting point instead of a blank page."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from a character headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A character headcanon generator works for both canon and original characters. This tool is framed specifically for OC development - the results are designed as starting points you adapt, not finished facts about an existing character."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for any type of OC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Fantasy OCs, sci-fi OCs, modern setting OCs, fandom insert characters - enter any name and use the results as a starting point. Adapt what fits, discard what does not."
                }
              },
              {
                "@type": "Question",
                "name": "Is this tool free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Completely free, no signup required, no generation limits. Everything runs in your browser - nothing you type is saved anywhere."
                }
              }
            ]
          })
        }}
      />

      {/* ── Hero & Intro ────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ padding: "40px 0 0px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight mb-5 animate-fade-up animate-delay-1">
            OC Headcanon Generator
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-[680px] mx-auto animate-fade-up animate-delay-2">
            Create unique personality traits, hidden habits, and backstory ideas for your original characters - instantly, for free. This oc headcanon generator creates unique personality traits, hidden habits, and backstory details for original characters. Enter your OC's name and get instant ideas tailored to them.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-4 pb-0 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <CharacterHeadcanonGenerator />
        </div>
      </section>

      {/* ── Section 1 ───────────────────────────────── */}
      <section className="section" style={{ paddingTop: '24px' }}>
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2">What Is an OC Headcanon Generator?</h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            <p>
              OC stands for original character - a character you created, not one that exists in published source material. Unlike canon characters, OCs have no official traits, no confirmed backstory, no fandom consensus to fall back on. Every detail has to come from somewhere. This tool gives you that somewhere - a specific behavior, habit, or secret to start from.
            </p>
            <p>
              The blank page problem hits hardest with original characters. You know your OC exists but you do not yet know what makes them specific. One concrete detail - the way they hold a cup, the thing they always say when they are nervous, the habit they developed after something they never talk about - unlocks everything else.
            </p>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mt-8 mb-4 flex items-center gap-2">
            How to Use This Tool for Your OC
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            <li>Enter your OC's name in the input field.</li>
            <li>Click Generate to get a trait, habit, or backstory idea.</li>
            <li>Use what fits, adapt what almost fits, discard the rest - generate again anytime.</li>
          </ol>
        </div>
      </section>

      {/* ── Section 2 ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2">Why OC Headcanons Matter</h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            <p>
              The difference between a forgettable OC and a memorable one is specificity. Not shy - but always sits near the door in any room they enter. Not brave - but rehearses difficult conversations alone until the fifth draft is the one that sounds natural. Specificity is what makes a character real.
            </p>
            <p>
              Headcanons give your OC an internal world - things they believe, things they do without thinking, things they hide from everyone including themselves. Readers and roleplay partners feel the depth of that internal world even when you never explain it directly. It shows in how the character moves through scenes.
            </p>
            <p>
              Use results from this tool as a rapid brainstorm. You will reject most of what it gives you. But the one idea that makes you think 'yes, that is them' is worth twenty hours of planning. That moment of recognition is how you know a headcanon belongs to your OC.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3 ───────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <h2 className="section__h2">Example OC Headcanons</h2>
            <p className="section__lead mx-auto">
              Here are examples of the kind of results this tool produces.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  They never ask for help directly. Instead they mention the problem in passing and hope someone offers. They have been doing this so long they have almost stopped noticing.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">For a newly created OC</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  They collect useless information about places they have never been. Maps, rumors, descriptions from people passing through. They tell themselves it is practical. It is not.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">For a fantasy or adventure OC</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  There is a version of their life where things went differently. They have thought about it so often that sometimes they slip and say 'we' when they mean 'I'.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">For an OC with a complicated past</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Section 4 ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2">OC Development vs Canon Character Headcanons</h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Canon characters come with constraints. Fans work within what the source material established - personality, history, relationships. An OC has none of those constraints, which means every trait is a choice you make. When you use a headcanon oc generator for an original character, the results are not interpretations of existing facts. They are raw material - a starting point you build on, not a reading you argue for.
            </p>
            <p>
              This also means you have complete freedom to reject results. With canon characters, a headcanon that contradicts established personality feels wrong. With OCs, nothing is established yet. Use this oc headcanon generator as a brainstorm tool - take what resonates, change what almost fits, and ignore what does not belong to the character you are building.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5 - FAQ ─────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mt-4 max-w-[600px] mx-auto">
              Find answers to common questions about our headcanon oc generator below.
            </p>
          </div>
          <FaqAccordion items={[
            {
              question: "What is an OC headcanon generator?",
              answer: "An OC headcanon generator is a tool that creates personality traits, habits, and backstory ideas for original characters. It gives you a specific starting point instead of a blank page."
            },
            {
              question: "How is this different from a character headcanon generator?",
              answer: "A character headcanon generator works for both canon and original characters. This tool is framed specifically for OC development - the results are designed as starting points you adapt, not finished facts about an existing character."
            },
            {
              question: "Can I use this for any type of OC?",
              answer: "Yes. Fantasy OCs, sci-fi OCs, modern setting OCs, fandom insert characters - enter any name and use the results as a starting point. Adapt what fits, discard what does not."
            },
            {
              question: "Is this tool free?",
              answer: "Yes. Completely free, no signup required, no generation limits. Everything runs in your browser - nothing you type is saved anywhere."
            }
          ]} />
        </div>
      </section>

      {/* ── Explore More Tools ────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">More tools</p>
          <h2 className="section__h2 mb-8">Explore More Tools</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/character-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-lt)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Character Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Traits and backstory for any named character</p>
            </Link>
            <Link href="/relationship-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Relationship Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Explore dynamics between your OC and other characters</p>
            </Link>
            <Link href="/scenario-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Scenario Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Place your OC in specific settings and situations</p>
            </Link>
            <Link href="/random-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Random Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Instant random ideas, no input needed</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
