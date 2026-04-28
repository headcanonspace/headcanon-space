import Link from "next/link";
import type { Metadata } from "next";
import HomeHeadcanonTool from "@/components/HomeHeadcanonTool";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Headcanon Generator | Free Character, Relationship & Scenario Ideas",
  description:
    "Use this free headcanon generator to instantly create unique ideas for characters, relationships, and scenarios.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://headcanonspace.com/#softwareapplication",
        name: "Headcanon Generator",
        description:
          "Generate creative headcanon ideas instantly with this free headcanon generator. Perfect for fandoms, characters, and stories.",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://headcanonspace.com/#webapplication",
        name: "Headcanon Generator",
        url: "https://headcanonspace.com/",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://headcanonspace.com/#webpage",
        url: "https://headcanonspace.com/",
        name: "Headcanon Generator | Free Character, Relationship & Scenario Ideas",
        description:
          "Use this free headcanon generator to instantly create unique ideas for characters, relationships, and scenarios.",
        inLanguage: "en-US",
        mainEntity: {
          "@id": "https://headcanonspace.com/#webapplication",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://headcanonspace.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Headcanon Generator",
            item: "https://headcanonspace.com/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://headcanonspace.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a headcanon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A headcanon is a personal interpretation, belief, or idea about a fictional character, relationship, or universe that hasn't been officially confirmed by the creator. Fans use headcanons to add depth and explore 'what if' scenarios.",
            },
          },
          {
            "@type": "Question",
            name: "How does the Headcanon Generator work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our tool uses advanced randomization combined with curated story tropes. You simply input a character's name, their fandom, and choose a specific vibe or 'tone' (like Angst or Fluff). The engine instantly synthesizes fully unique narrative prompts for you to use.",
            },
          },
          {
            "@type": "Question",
            name: "Is this tool completely free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! All of our generators—including Character, Relationship, and Scenario headcanons—are 100% free with unlimited generation and no signup required.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use these headcanons for my fanfiction or roleplay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! The generated ideas are designed specifically for writers, roleplayers, and creators to use as writing prompts, story starters, or character development exercises.",
            },
          },
          {
            "@type": "Question",
            name: "Do you save my character inputs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Our tools run completely in your browser (client-side), meaning what you type is never sent to our servers or saved anywhere. Your privacy and creative ideas are yours alone.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-gradient" style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[1120px] px-6">


          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.08, letterSpacing: "-1.5px", color: "var(--color-text)", marginBottom: "20px" }}>
            Headcanon Generator
          </h1>

          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto 24px", lineHeight: 1.6 }}>
            Generate headcanons for characters, fandoms, ships, and scenarios
            instantly.
          </p>

          <p className="animate-fade-up animate-delay-3" style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "1.5px", color: "var(--color-ink-4)", marginBottom: "16px" }}>
            Free to use · No signup required · Instant results
          </p>

        </div>
      </section>

      {/* ── Tool UI (above the fold) ────────────────── */}
      <section className="w-full px-6 pb-12 animate-scale-in" style={{ marginTop: "-20px" }}>
        <HomeHeadcanonTool />
      </section>

      {/* ── Intro / What It Does ─────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <p className="section__label">What is this?</p>
              <h2 className="section__h2">
                Generate Headcanons for Any Character or Fandom
              </h2>
              <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.75 }}>
                <p>
                  This headcanon generator gives you quick prompts you can use right
                  away. Add a name or concept, then get ideas for character headcanons,
                  relationship or ship headcanons, and scenario ideas for scenes or
                  story beats.
                </p>
                <p>
                  It is simple to use, beginner-friendly, and useful when you need inspiration
                  fast. Try different inputs, keep your favorite results, and build them into
                  fanfiction, roleplay, or personal fandom projects.
                </p>
                <p>
                  Use this AI headcanon generator to move from loose ideas to usable scene direction.
                  Build deeper characters, shape emotional dynamics, and plan plot-ready moments
                  across any fandom — instantly.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.9L8 1z" stroke="#6366f1" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Generate ideas instantly</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>No waiting. Results appear in seconds.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#6366f1" strokeWidth="1.3"/><path d="M5 8h6M8 5v6" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Works for any fandom</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>Anime, Marvel, fantasy, books, originals.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h8M2 12h10" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>Characters, ships &amp; scenarios</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>Three generator types in one place.</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 100 12A6 6 0 008 2z" stroke="#6366f1" strokeWidth="1.3"/><path d="M6 8l1.5 1.5L10 6" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <strong className="block text-sm font-medium" style={{ color: "var(--color-text)", marginBottom: "2px" }}>No signup required</strong>
                  <span className="text-[13px]" style={{ color: "var(--color-ink-3)" }}>Completely free, forever.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">How it works</p>
            <h2 className="section__h2">How to Use the Headcanon Generator</h2>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step__num" aria-hidden="true">1</div>
              <p className="step__title">Enter a character</p>
              <p className="step__desc">Type any name — a canon character or your own OC.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">2</div>
              <p className="step__title">Choose tone &amp; context</p>
              <p className="step__desc">Set the vibe and pick a fandom or setting that fits.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">3</div>
              <p className="step__title">Click generate</p>
              <p className="step__desc">Results appear instantly — no loading screens.</p>
            </div>
            <div className="step">
              <div className="step__num" aria-hidden="true">4</div>
              <p className="step__title">Copy or regenerate</p>
              <p className="step__desc">Keep the best ones; regenerate for fresh ideas anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Example Headcanons ──────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-12">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Headcanons</h2>
            <p className="section__lead">Here&apos;s a taste of the kind of ideas the generator creates.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <article className="example-card">
              <p className="example-card__type">Character Headcanon</p>
              <blockquote>
                &ldquo;Despite their serious personality, the character secretly enjoys quiet hobbies
                like cooking or sketching — a side no one in their world gets to see.&rdquo;
              </blockquote>
            </article>

            <article className="example-card">
              <p className="example-card__type">Relationship Headcanon</p>
              <blockquote>
                &ldquo;These two characters pretend to argue often, but deeply trust and protect
                each other in critical moments — the bickering is their love language.&rdquo;
              </blockquote>
            </article>

            <article className="example-card">
              <p className="example-card__type">Scenario Headcanon</p>
              <blockquote>
                &ldquo;During a stormy night, the characters are forced to work together,
                revealing hidden emotions and past secrets neither expected to share.&rdquo;
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ── What Is a Headcanon ─────────────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding headcanons</p>
          <h2 className="section__h2">✦ What Is a Headcanon?</h2>

          <div className="space-y-4" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              A headcanon is a personal idea a fan creates about a story, even if it is never
              confirmed in official canon. In fandom spaces, headcanons help people explore
              character emotions, hidden habits, and relationship dynamics in a fun, creative way.
              They are popular in fanfiction because they make characters feel more human and
              give writers new directions for scenes and dialogue. Some headcanons are light
              and funny, while others add deeper backstory or emotional conflict.
            </p>

            <div className="prose-callout">
              Example: A fan might imagine a character secretly loves cooking — even if it&apos;s
              never shown in canon. That personal interpretation is a headcanon.
            </div>

            <p>
              A good headcanon generator makes this easier by giving you quick prompts you can
              build on, whether you are new to writing or already active in fandom communities.{" "}
              <Link href="/" style={{ color: "var(--color-primary)", fontWeight: 500 }}>Try the headcanon generator →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Use Cases & Audience ─────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <p className="section__label">Use cases</p>
              <h2 className="section__h2">Who should use this headcanon generator?</h2>
              <p className="section__lead" style={{ marginBottom: 0 }}>
                Whether you write fanfiction, run roleplay sessions, or explore fandom creatively,
                this tool gives you an instant starting point.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
              <div className="usecase-item">
                <h3>Fanfiction writers</h3>
                <p>Build character arcs, fill backstory gaps, and find emotional beats for your next chapter.</p>
              </div>
              <div className="usecase-item">
                <h3>Roleplayers</h3>
                <p>Create consistent personas, reactions, and quirks for roleplay characters on any platform.</p>
              </div>
              <div className="usecase-item">
                <h3>Anime &amp; fandom fans</h3>
                <p>Explore your favorite characters from a new angle and generate fresh takes to share.</p>
              </div>
              <div className="usecase-item">
                <h3>Creative writers</h3>
                <p>Refine original characters, add depth, and develop unique personality details for OCs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AI headcanon generator section ────────────── */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Built for writers</p>
          <h2 className="section__h2">AI headcanon generator for fanfiction, roleplay, and fandom writing</h2>
          <div style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              Use this AI headcanon generator to move from loose ideas to usable
              scene direction. Build deeper characters with the{" "}
              <Link href="/character-headcanon-generator/" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                character headcanon generator
              </Link>
              , shape emotional dynamics in the{" "}
              <Link href="/relationship-headcanon-generator/" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                relationship headcanon generator
              </Link>
              , and plan plot-ready moments through the{" "}
              <Link href="/scenario-headcanon-generator/" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                scenario headcanon generator
              </Link>
              . For quick creative bursts, use the{" "}
              <Link href="/random-headcanon-generator/" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                random headcanon generator
              </Link>{" "}
              to discover fresh prompts instantly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Explore More Tools ────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">More tools</p>
            <h2 className="section__h2">Explore More Generators</h2>
            <p className="section__lead" style={{ margin: "0 auto" }}>
              Each tool is built for a different type of headcanon.
              Use them together for a full creative workflow.
            </p>
          </div>

          <nav aria-label="Generator tools" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/character-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">👤</span>
              <p className="font-medium text-sm mb-1.5" style={{ color: "var(--color-text)" }}>Character headcanon generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Deep personality traits &amp; backstories</p>
            </Link>
            <Link href="/relationship-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">💞</span>
              <p className="font-medium text-sm mb-1.5" style={{ color: "var(--color-text)" }}>Relationship headcanon generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Ship dynamics &amp; couple moments</p>
            </Link>
            <Link href="/scenario-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">🎭</span>
              <p className="font-medium text-sm mb-1.5" style={{ color: "var(--color-text)" }}>Scenario headcanon generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Story settings &amp; creative situations</p>
            </Link>
            <Link href="/random-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">🎲</span>
              <p className="font-medium text-sm mb-1.5" style={{ color: "var(--color-text)" }}>Random headcanon generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Instant random ideas, no input needed</p>
            </Link>
          </nav>
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
          <p style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            This{" "}
            <Link href="/" style={{ color: "var(--color-primary)", fontWeight: 500 }}>
              headcanon generator
            </Link>{" "}
            keeps brainstorming practical and repeatable. Generate a batch, pick
            one emotional core, add a scenario trigger, then draft your scene.
            This workflow helps you write faster while keeping characters and
            tone consistent across fanfiction, roleplay, and fandom storytelling.
          </p>
        </div>
      </section>
    </>
  );
}
