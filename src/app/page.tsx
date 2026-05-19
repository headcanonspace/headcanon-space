import Link from "next/link";
import type { Metadata } from "next";
import HomeHeadcanonTool from "@/components/HomeHeadcanonTool";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Headcanon Generator | Free Character, Relationship & Scenario Ideas",
  description:
    "Free headcanon generator - create unique ideas for characters, relationships, and scenarios instantly. No signup, no limits, works for any fandom. Try it now.",
  alternates: {
    canonical: "https://headcanonspace.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "Headcanon Generator",
                "url": "https://headcanonspace.com",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                "description": "Free headcanon generator for characters, relationships, and scenarios."
              },
              {
                "@type": "WebApplication",
                "name": "Headcanon Space",
                "url": "https://headcanonspace.com",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Web",
                "browserRequirements": "Requires JavaScript. Requires HTML5."
              },
              {
                "@type": "WebPage",
                "@id": "https://headcanonspace.com/#webpage",
                "url": "https://headcanonspace.com",
                "name": "Headcanon Space - Free Character ship and relationship ideas",
                "description": "Free headcanon generator - instantly create ideas for characters, relationships, and scenarios. No signup, no limits, works for any fandom. Try it now."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is a headcanon?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A headcanon is a personal interpretation, belief, or idea about a fictional character, relationship, or universe that hasn't been officially confirmed by the creator. Fans use headcanons to add depth and explore 'what if' scenarios."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the Headcanon Generator work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our tool uses advanced randomization combined with curated story tropes. You simply input a character's name, their fandom, and choose a specific vibe or 'tone' (like Angst or Fluff). The engine instantly synthesizes fully unique narrative prompts for you to use."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is this tool completely free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! All of our generators, including Character, Relationship, and Scenario headcanons, are 100% free with unlimited generation and no signup required."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use these headcanons for my fanfiction or roleplay?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! The generated ideas are designed specifically for writers, roleplayers, and creators to use as writing prompts, story starters, or character development exercises."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you save my character inputs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Our tools run completely in your browser (client-side), meaning what you type is never sent to our servers or saved anywhere. Your privacy and creative ideas are yours alone."
                    }
                  }
                ]
              },
              {
                "@type": "WebSite",
                "name": "Headcanon Space",
                "url": "https://headcanonspace.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://headcanonspace.com/?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "2rem 0 0", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[1120px] px-6">
          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.08, letterSpacing: "-1.5px", color: "var(--color-text)", marginBottom: "0.5rem", marginTop: "1.5rem" }}>
            Headcanon Generator
          </h1>

          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "16px", fontWeight: 400, color: "var(--color-ink-3)", maxWidth: "720px", margin: "0 auto 1.5rem", lineHeight: 1.75, textWrap: "balance", letterSpacing: "-0.1px" }}>
            Generate headcanons for characters, fandoms, ships, and scenarios
            instantly. Enter a character name, pick a tone, and get ideas in seconds.
            Free to use, no signup required, works for any fandom, including
            anime, Marvel, fantasy, original fiction, and everything in between.
          </p>
        </div>
      </section>

      {/* ── Tool UI (above the fold) ────────────────── */}
      <section className="w-full px-6 pb-12 animate-scale-in" style={{ marginTop: "0" }}>
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <HomeHeadcanonTool />
        </div>
      </section>

      {/* ── SECTION 2 - Generate Headcanons for Any Character or Fandom ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="section__h2">Generate Headcanons for Any Character or Fandom</h2>
              <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.75 }}>
                <p>
                  This tool creates instant headcanon ideas for characters, relationships, and scenarios.
                  Type a name, choose a tone, and results appear in seconds.
                </p>
                <p>
                  No loading screens, no account required, no generation limits.
                  We draw every unique result from a curated pool of creative templates for fandom writers and roleplayers.
                </p>
                <p>
                  Use it for fanfiction, Discord roleplay, OC development, or any time you need a specific character detail fast.
                  The generator works for anime characters, book characters, and Marvel heroes.
                </p>
                <p>
                  It also supports fantasy originals.
                  This utility serves as a headcanon generator for any fandom, not just the popular ones.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.9L8 1z" stroke="#6366f1" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Instant results</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>No waiting. Results appear in seconds.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#6366f1" strokeWidth="1.3"/><path d="M5 8h6M8 5v6" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Any fandom</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>Our templates cover anime, Marvel, fantasy, books, and original fiction.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h8M2 12h10" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Four generator types</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>Access character, relationship, scenario, and random ideas in one place.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 100 12A6 6 0 008 2z" stroke="#6366f1" strokeWidth="1.3"/><path d="M6 8l1.5 1.5L10 6" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>No signup</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>The tool is completely free forever with no account requirements.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 - How to Use the Tool ── */}
      <section className="section">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">How it works</p>
            <h2 className="section__h2">How to Use the Tool</h2>
            <p className="section__lead mt-4">
              Four steps from blank page to a usable headcanon idea.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step__num" aria-hidden="true">1</div>
              <h3 className="step__title">Enter a character name</h3>
              <p className="step__desc">Type any name, such as a canon character, a ship pairing, or your own original character.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">2</div>
              <h3 className="step__title">Choose tone and context</h3>
              <p className="step__desc">Pick a tone that matches your story: Soft, Dark, Chaotic, Romantic, or Fluffy. Add a fandom or setting if you want more focused results.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">3</div>
              <h3 className="step__title">Click generate</h3>
              <p className="step__desc">Results appear instantly. The system requires no loading bar, no page reload, and no waiting.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">4</div>
              <h3 className="step__title">Copy, save, or regenerate</h3>
              <p className="step__desc">Copy the result in one click. Save it to your browser for later. Or click generate again for a completely different idea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 - Example Headcanons ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="mb-12 max-w-[760px]">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Headcanons</h2>
            <p className="section__lead">Here is a sample of what this tool produces.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Despite their serious personality, this character keeps a worn notebook of things they want to say but never do. It holds small observations, half-finished thoughts, and jokes they save for no one.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Character headcanon</span>
              </div>
            </article>

            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  These two pretend to argue constantly, but they always ensure the other stays safe before leaving. This unspoken routine has defined their bond for years.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Relationship headcanon</span>
              </div>
            </article>

            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  During a power cut, the characters remain stuck in one room with nothing to do. They share their first honest conversation in months. Neither of them planned it.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Scenario headcanon</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 - What Is a Headcanon? ── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding headcanons</p>
          <h2 className="section__h2">What Is a Headcanon?</h2>

          <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A headcanon represents a personal interpretation of a character, relationship, or story world.
              The source material never officially confirms these details.
            </p>
            <p>
              Fans use headcanons to fill in the gaps canon leaves open.
              This headcanon generator gives you a starting point when the blank page is the hardest part.
            </p>

            <div className="prose-callout">
              A headcanon represents a personal fan interpretation of a character or story.
              The original creator does not officially confirm these details.
            </div>

            <p>
              Headcanons can cover habits, fears, backstory moments, or the way two characters behave when no one is watching.
              They are the details that make characters feel like real people: specific, contradictory, and fully human.
            </p>
            <p>
              Use these as headcanon prompts to start a scene or build a character from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 - Who Should Use This Tool? ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="section__label">Audience</p>
              <h2 className="section__h2">Who Should Use This Tool?</h2>
              <p className="section__lead">
                We built this tool for anyone who needs a specific character idea fast.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
              <div className="usecase-item">
                <h3>Fanfiction writers</h3>
                <p>
                  Build character arcs, fill backstory gaps, and find the one emotional detail that makes a scene work.
                  Use it before drafting a chapter to give your character something consistent to do under pressure.
                </p>
              </div>
              <div className="usecase-item">
                <h3>Roleplayers</h3>
                <p>
                  Get a hook before a session.
                  This quirk stays consistent across every Discord RP or forum scene.
                </p>
              </div>
              <div className="usecase-item">
                <h3>Anime and fandom fans</h3>
                <p>
                  Explore the gaps the source material never filled.
                  Imagine what your favorite character does on a rest day or look for a hidden canon quirk.
                </p>
              </div>
              <div className="usecase-item">
                <h3>Creative writers and OC developers</h3>
                <p>
                  Original characters need specificity to feel real.
                  Use this to find the one contradiction that defines your OC, the detail that makes them unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 - What This Tool Does ── */}
      <section className="section">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">Features</p>
            <h2 className="section__h2">What This Tool Does</h2>
            <p className="section__lead mt-4">
              Eight things that make this tool different from a generic AI chatbot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="usecase-item">
              <h3>Results in under one second</h3>
              <p>Ideas appear the moment you click generate, without any loading bars.</p>
            </div>
            <div className="usecase-item">
              <h3>Works for any fandom</h3>
              <p>Enter any character name and the tool adapts to anime, Marvel, fantasy, or original fiction.</p>
            </div>
            <div className="usecase-item">
              <h3>Four generator types in one place</h3>
              <p>Explore character, relationship, scenario, and random ideas without switching tools.</p>
            </div>
            <div className="usecase-item">
              <h3>Tone control</h3>
              <p>Choose Soft, Dark, Chaotic, Romantic, or Fluffy to match the energy of your story.</p>
            </div>
            <div className="usecase-item">
              <h3>Name-woven output</h3>
              <p>The tool weaves your character's name directly into the results instead of using generic placeholder text.</p>
            </div>
            <div className="usecase-item">
              <h3>Save to browser</h3>
              <p>Results save directly to your browser's local storage so you can retrieve them later.</p>
            </div>
            <div className="usecase-item">
              <h3>Privacy first</h3>
              <p>Your names and story ideas stay in your browser because we never send data to servers.</p>
            </div>
            <div className="usecase-item">
              <h3>Completely free</h3>
              <p>Enjoy unlimited runs with no signup or paywalls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 - AI Headcanon Generator vs Generic Chatbot ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Comparison</p>
          <h2 className="section__h2">AI Headcanon Generator vs Generic Chatbot</h2>

          <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              Ask a generic AI chatbot for a headcanon and you get something that could fit any character in any fandom.
              This ai headcanon generator uses curated fandom-specific templates.
            </p>
            <p>
              This approach means results are specific, usable, and ready to write from without editing.
              Chatbots need a detailed prompt before they give you something useful.
            </p>
            <p>
              You need to know what to ask.
              This headcanons generator works with just a name.
              It handles the creative direction so you can focus on the writing.
            </p>
            <p>
              There is also a privacy difference.
              AI chatbots store your conversations.
              This tool runs entirely in your browser.
            </p>
            <p>
              Nothing is sent anywhere, and we save nothing to a server.
              What you type stays with you.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 - Explore More Generators ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-10 max-w-[800px]">
            <p className="section__label">More tools</p>
            <h2 className="section__h2">Explore More Generators</h2>
            
            <div className="mt-5 space-y-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              <p className="text-[17px] font-light text-[var(--color-ink-3)] mb-2">
                Each tool is built for a different type of headcanon.
              </p>
              <p>
                There are four generators on this site.
                Each one focuses on a specific type of headcanon, such as character depth, relationship dynamics, scenario building, or random ideas.
              </p>
              <p>
                This headcanon generator serves as the main tool.
                The four options below go deeper.
              </p>
            </div>
          </div>

          <nav aria-label="Generator tools" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {/* Character Generator Card */}
            <Link
              href="/character-headcanon-generator/"
              className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-lt)] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1.5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Character headcanon generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Deep personality traits and backstory ideas</p>
              <span className="mt-auto pt-5 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Try it
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Relationship Generator Card */}
            <Link
              href="/relationship-headcanon-generator/"
              className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1.5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Relationship headcanon generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Ship dynamics, rituals, and unspoken tension</p>
              <span className="mt-auto pt-5 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Try it
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Friendship Generator Card */}
            <Link
              href="/friendship-headcanon-generator/"
              className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-6a3 3 0 00-6 0v6m6 0H7" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1.5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Friendship Headcanon Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Platonic dynamics, found family, and loyalty moments between any two characters</p>
              <span className="mt-auto pt-5 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Try it
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Scenario Generator Card */}
            <Link
              href="/scenario-headcanon-generator/"
              className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1.5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Scenario headcanon generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Story settings and dramatic creative situations</p>
              <span className="mt-auto pt-5 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Try it
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Random Generator Card */}
            <Link
              href="/random-headcanon-generator/"
              className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1.5 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Random headcanon generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Random ideas with no input required</p>
              <span className="mt-auto pt-5 text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Try it
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </nav>
        </div>
      </section>

      {/* ── SECTION 10 - Built for Fanfiction, Roleplay, and Fandom Writing ── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Specialized tools</p>
          <h2 className="section__h2">Built for Fanfiction, Roleplay, and Fandom Writing</h2>
          <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              This site has four specialized tools for fandom writing.
              The{" "}
              <Link href="/character-headcanon-generator/">
                character headcanon generator
              </Link>{" "}
              focuses on individual character depth, including traits, habits, and backstory secrets.
            </p>
            <p>
              The{" "}
              <Link href="/relationship-headcanon-generator/">
                relationship headcanon generator
              </Link>{" "}
              explores how two characters interact, from ship dynamics to unspoken tension.
            </p>
            <p>
              The{" "}
              <Link href="/scenario-headcanon-generator/">
                scenario headcanon generator
              </Link>{" "}
              places characters into specific settings.
            </p>
            <p>
              The{" "}
              <Link href="/random-headcanon-generator/">
                random headcanon generator
              </Link>{" "}
              delivers instant ideas with no input needed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">Common questions</p>
            <h2 className="section__h2">Frequently Asked Questions</h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* ── Micro Reinforcement ─────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              This tool keeps brainstorming practical.
              Generate a batch, choose one core, and draft your scene.
            </p>
            <p>
              This workflow helps you write faster across fanfiction, roleplay, and fandom storytelling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
