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
    question: "What is this generator?",
    answer: "A random headcanon generator is a tool that creates character ideas, quirks, and scenarios instantly - without needing any input. Each result comes from a curated pool of creative writing templates."
  },
  {
    question: "Are the results truly random?",
    answer: "Yes. Each click pulls from a large pool of curated headcanon templates and applies different tone and detail variations every time. No two sessions produce the same result."
  },
  {
    question: "Can I use these for any fandom?",
    answer: "Yes. These prompts work for any character in any fandom - fantasy, anime, Marvel, original fiction, and more. You do not need fandom-specific setup."
  },
  {
    question: "What if I don't like the result?",
    answer: "Click Generate Again. There are no limits on how many times you can generate. Each click produces a completely new result."
  },
  {
    question: "How is this different from an AI chatbot?",
    answer: "This tool uses curated creative writing templates rather than open-ended AI. These templates deliver focused, immediately usable results - not generic text that could describe anyone."
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
                "name": "What is this generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A random headcanon generator is a tool that creates character ideas, quirks, and scenarios instantly - without needing any input. Each result comes from a curated pool of creative writing templates."
                }
              },
              {
                "@type": "Question",
                "name": "Are the results truly random?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Each click pulls from a large pool of curated headcanon templates and applies different tone and detail variations every time. No two sessions produce the same result."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use these for any fandom?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. These prompts work for any character in any fandom - fantasy, anime, Marvel, original fiction, and more. You do not need fandom-specific setup."
                }
              },
              {
                "@type": "Question",
                "name": "What if I don't like the result?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click Generate Again. There are no limits on how many times you can generate. Each click produces a completely new result."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from an AI chatbot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This tool uses curated creative writing templates rather than open-ended AI. These templates deliver focused, immediately usable results - not generic text that could describe anyone."
                }
              }
            ]
          })
        }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "48px 0 24px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">

          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-1.2px", color: "var(--color-text)", marginBottom: "16px" }}>
            Random Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            No setup and no prompts. Just click and discover a fresh
            creative idea every time.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-2 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <RandomHeadcanonTool />
        </div>
      </section>

      {/* ── SECTION 1 — Example Random Headcanons ───── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <h2 className="section__h2">Example Random Headcanons</h2>
            <p className="section__lead mx-auto">
              Here are examples of the kind of ideas this generator produces.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <article className="example-card">
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] italic">
                This character always carries something belonging to someone else. It might be an unreturned book, a foreign coin, or an unused lighter. They could not explain why they kept it.
              </p>
            </article>
            <article className="example-card">
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] italic">
                They have a habit of giving directions using landmarks that no longer exist. Buildings demolished years ago, shops that closed. People who've known them long enough just know to ask follow-up questions.
              </p>
            </article>
            <article className="example-card">
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] italic">
                After a long, difficult day, they always do one small, completely useless thing. Rearranging items on a shelf. Refolding something that was already folded. Not to fix anything. Just to feel in control of something.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Who Uses the Random Headcanons Generator? ───── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <h2 className="section__h2">Who Uses the Random Headcanons Generator?</h2>
            <p className="section__lead">
              Sometimes the best starting point is one you didn't choose. These randomly generated headcanons are useful when you need an idea fast and don't want to start from zero.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16">
            <div className="flex gap-5 sm:gap-6 group pt-6 border-t-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300 animate-fade-up animate-delay-1">
              <div className="text-3xl sm:text-4xl font-serif text-[var(--color-border-med)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-none pt-1">
                01
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-[var(--color-ink)] mb-3">
                  Writers with blank-page anxiety
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--color-ink-3)]">
                  When you have a character but no idea what makes them specific, one result can unlock an entire chapter. It gives you something concrete to write toward.
                </p>
              </div>
            </div>

            <div className="flex gap-5 sm:gap-6 group pt-6 border-t-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300 animate-fade-up animate-delay-2">
              <div className="text-3xl sm:text-4xl font-serif text-[var(--color-border-med)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-none pt-1">
                02
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-[var(--color-ink)] mb-3">
                  Roleplayers starting a new character
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--color-ink-3)]">
                  New character, no backstory yet? Get a random trait before your first session and build the persona from there.
                </p>
              </div>
            </div>

            <div className="flex gap-5 sm:gap-6 group pt-6 border-t-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300 animate-fade-up animate-delay-3">
              <div className="text-3xl sm:text-4xl font-serif text-[var(--color-border-med)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-none pt-1">
                03
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-[var(--color-ink)] mb-3">
                  Artists looking for a scene to draw
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--color-ink-3)]">
                  This tool suggests moments, not just traits - a character doing something specific in a specific mood. That is exactly what you need to start a piece.
                </p>
              </div>
            </div>

            <div className="flex gap-5 sm:gap-6 group pt-6 border-t-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300 animate-fade-up animate-delay-4">
              <div className="text-3xl sm:text-4xl font-serif text-[var(--color-border-med)] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-none pt-1">
                04
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-[var(--color-ink)] mb-3">
                  Anyone with 30 seconds and writer's block
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[var(--color-ink-3)]">
                  No setup. No fields to fill. One click gives you something to work with. The best ideas are the ones that surprise you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Random Headcanons vs Character-Specific Generators ───── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <h2 className="section__h2" style={{ fontFamily: "var(--font-serif)" }}>
              Random Headcanons vs Character-Specific Generators
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 relative animate-fade-up">
            {/* Center Vertical Divider (Desktop Only) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[var(--color-border)] -translate-x-1/2"></div>
            
            {/* Left Column: Broad Approach */}
            <div className="relative z-10 pr-0 md:pr-4">
              <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-[var(--color-ink)] mb-6 flex items-center gap-4">
                The Broad Approach
                <span className="w-12 h-[2px] bg-[var(--color-border-med)] rounded-full"></span>
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.85] text-[var(--color-ink-3)]">
                This random headcanon generator does not ask for a name. That makes it faster, but also broader. It produces ideas that fit dozens of characters. This means you get to decide who they belong to. Use it as a random headcanons generator when you need a starting point, not a finished character sheet.
              </p>
            </div>

            {/* Right Column: Specific Approach */}
            <div className="relative z-10 pl-0 md:pl-4 pt-10 md:pt-0 border-t border-[var(--color-border)] md:border-t-0">
              <h3 className="text-[13px] font-bold tracking-[0.15em] uppercase text-[var(--color-primary)] mb-6 flex items-center gap-4">
                The Specific Approach
                <span className="w-12 h-[2px] bg-[var(--color-primary)] opacity-40 rounded-full"></span>
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.85] text-[var(--color-ink-3)]">
                Want ideas built around a specific character name? The <Link href="/character-headcanon-generator/" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium underline underline-offset-4 decoration-2 decoration-[var(--color-primary)]/30 transition-all">character headcanon generator</Link> goes deeper. It weaves your character's name into every result. To explore what two characters share, the <Link href="/relationship-headcanon-generator/" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium underline underline-offset-4 decoration-2 decoration-[var(--color-primary)]/30 transition-all">relationship headcanon generator</Link> focuses on dynamics, rituals, and the tension between them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — FAQ ─────────────────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="section__lead mx-auto text-center" style={{ marginBottom: 0 }}>
              Find clear answers to common questions about using our free tool for your creative writing, character development, and roleplay projects.
            </p>
          </div>

          <FaqAccordion items={randomFaqs} />
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
            <Link href="/relationship-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="font-semibold text-sm mb-1 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">Relationship Generator</p>
              <p className="text-[13px] leading-relaxed text-[var(--color-ink-4)]">Ship dynamics & couple moments</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
