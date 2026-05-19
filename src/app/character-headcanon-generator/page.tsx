import type { Metadata } from "next";
import Link from "next/link";
import CharacterHeadcanonGenerator from "@/components/CharacterHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Character Headcanon Generator (Create Unique Ideas)",
  description: "Free character headcanon generator - create unique personality traits, habits, and backstory ideas for any character or OC instantly. No signup needed. Try it now.",
  alternates: {
    canonical: "https://headcanonspace.com/character-headcanon-generator/",
  },
  openGraph: {
    title: "Character Headcanon Generator",
    description: "Free character headcanon generator - create unique personality traits, habits, and backstory ideas for any character or OC instantly. No signup needed. Try it now.",
    url: "/character-headcanon-generator/",
  },
};

const characterFaqs = [
  {
    question: "What is a character headcanon generator?",
    answer: "A character headcanon generator is a tool that creates personal interpretations of a character's traits, habits, and backstory - details not officially confirmed by the source material."
  },
  {
    question: "Can I use this for original characters?",
    answer: "Yes. The tool works for any character name, including original characters (OCs). You do not need to use a canon character name."
  },
  {
    question: "How many headcanons can I generate?",
    answer: "Unlimited. Click generate as many times as you need. Each result is unique."
  },
  {
    question: "Is this the same as an AI headcanon generator?",
    answer: "This character headcanon generator uses curated template logic rather than open-ended AI, which means results stay focused and usable rather than generic."
  },
  {
    question: "Can I save my headcanons?",
    answer: "Yes. Use the Save button to store results in your browser's local storage. They will remain after you close the tab."
  }
];

export default function CharacterHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Character Headcanon Generator",
            "url": "https://headcanonspace.com/character-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate headcanons for any character instantly."
          })
        }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">

          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-1.2px", color: "var(--color-text)", marginBottom: "20px" }}>
            Character Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Give your character a life they never got on screen - generate
            unique traits, habits, and secrets instantly.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <CharacterHeadcanonGenerator />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a character headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A character headcanon generator is a tool that creates personal interpretations of a character's traits, habits, and backstory - details not officially confirmed by the source material."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for original characters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The tool works for any character name, including original characters (OCs). You do not need to use a canon character name."
                }
              },
              {
                "@type": "Question",
                "name": "How many headcanons can I generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlimited. Click generate as many times as you need. Each result is unique."
                }
              },
              {
                "@type": "Question",
                "name": "Is this the same as an AI headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This character headcanon generator uses curated template logic rather than open-ended AI, which means results stay focused and usable rather than generic."
                }
              },
              {
                "@type": "Question",
                "name": "Can I save my headcanons?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Use the Save button to store results in your browser's local storage. They will remain after you close the tab."
                }
              }
            ]
          })
        }}
      />

      {/* ── What Is a Character Headcanon Generator? ───── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Is a Character Headcanon Generator?</h2>
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

      {/* ── SECTION 1 - Example Character Headcanons ── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">Inspiring Samples</p>
            <h2 className="section__h2">Example Character Headcanons</h2>
            <p className="section__lead mx-auto">
              Examples help you understand how to write deep traits. Fictional characters feel real when they have subtle habits. These samples show how small actions reveal a character's inner thoughts.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Despite rarely speaking in groups, this character keeps a worn notebook. It contains jokes, confessions, and small observations they save for no one.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Reserved Character</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Before any difficult conversation, they rehearse it alone. The bravado others see is the fifth draft. The first four fall apart quietly, in private.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Team Leader</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  They have memorized the other's schedule without meaning to. They know what time they arrive, where they sit, and what they order. This is not out of obsession. Patterns are just hard to ignore.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Rivals or Enemies</span>
              </div>
            </article>
          </div>

          <div className="space-y-4 mt-10 max-w-[760px] mx-auto" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A good headcanon focuses on quiet moments. It does not change the core story. Instead, it adds layers of meaning to how a character acts when no one is watching.
            </p>
            <p>
              You can use these examples as inspiration. Try reading them to see how specific details create mood. They show how small shifts in routine build emotional depth.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 - Who Should Use This? ── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Use Cases</p>
          <h2 className="section__h2">Who Should Use This Character Headcanon Generator?</h2>
          <p className="section__lead mb-8">
            Whether you are building a character from scratch or adding depth to an existing one, this tool gives you a starting point that feels specific.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">✍️</span>
                <h3 className="premium-usecase-card__title">Fanfiction Writers</h3>
              </div>
              <blockquote className="premium-usecase-card__quote">
                "Use generated traits to build backstory, fill emotional gaps between canon scenes, or give your character a consistent inner world."
              </blockquote>
              <p className="premium-usecase-card__desc">
                Writing fanfiction requires staying true to canon while adding new ideas. You can use these generated traits to explore what happened off-screen. It helps fill the spaces between official episodes or chapters. Your stories will feel more complete and emotionally resonant.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">🎭</span>
                <h3 className="premium-usecase-card__title">Roleplayers</h3>
              </div>
              <blockquote className="premium-usecase-card__quote">
                "Get a character hook before a session. Quirks, habits, and reactions that stay consistent across RPs."
              </blockquote>
              <p className="premium-usecase-card__desc">
                Roleplay sessions move quickly and need fast decisions. Having a clear hook makes your character easier to play. You can use these quirks to decide how your character reacts to unexpected events. This keeps your writing consistent and engaging for other players.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">👤</span>
                <h3 className="premium-usecase-card__title">OC Developers</h3>
              </div>
              <blockquote className="premium-usecase-card__quote">
                "Original characters need specificity to feel real. Find the one detail that makes your OC unforgettable."
              </blockquote>
              <p className="premium-usecase-card__desc">
                Creating an original character from scratch is a big challenge. They need more than just a name and an outfit. They need small contradictions that make them human. This generator helps you find those subtle details. Your original characters will stand out in any story.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">✨</span>
                <h3 className="premium-usecase-card__title">Anime and Fandom Fans</h3>
              </div>
              <blockquote className="premium-usecase-card__quote">
                "Explore the gaps canon leaves open. What does your favorite character do on a rest day? What do they keep hidden?"
              </blockquote>
              <p className="premium-usecase-card__desc">
                Fandom fans love thinking about their favorite worlds. Canon stories often leave many details unresolved. You can use this tool to imagine everyday scenes. It lets you explore their secrets and quiet moments. It is a fun way to engage with the media you love.
              </p>
            </div>
          </div>

          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              Many creators struggle to find unique details for their stories. Generic traits make characters feel flat. This generator helps you find specific quirks that spark fresh ideas.
            </p>
            <p>
              Using this tool saves time during brainstorming. It keeps your creative writing sessions productive. You can quickly generate a batch of ideas and choose the best ones for your project.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 - FAQ ── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">FAQ</p>
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="section__lead mx-auto text-center" style={{ marginBottom: 0 }}>
              Read these common questions to learn how the generator works. Find out how to use the results in your own stories. Learn how to save your favorite ideas.
            </p>
          </div>

          <FaqAccordion items={characterFaqs} />
        </div>
      </section>

      {/* ── Explore More Tools ────────────────────────── */}
      <section className="section section--alt">
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
