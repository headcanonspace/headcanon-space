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
    question: "What is a random headcanon generator?",
    answer: "A tool that creates character ideas, quirks, and scenarios instantly, without needing any input. Each result is randomized from a curated pool of creative prompts."
  },
  {
    question: "Are the results truly random?",
    answer: "Yes. Each click pulls from a large pool of curated headcanon templates and applies random tone and detail variations."
  },
  {
    question: "Can I use these for any fandom?",
    answer: "Yes. The prompts are written to work for any character in any fandom, such as fantasy, anime, Marvel, original fiction, and more."
  },
  {
    question: "What if I don't like the result?",
    answer: "Click Generate Again. There are no limits on how many times you can generate."
  },
  {
    question: "How is this different from an AI headcanon generator?",
    answer: "This uses curated creative writing templates rather than open-ended AI, which produces focused, immediately usable results rather than generic text."
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
                "name": "What is a random headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A tool that creates character ideas, quirks, and scenarios instantly, without needing any input. Each result is randomized from a curated pool of creative prompts."
                }
              },
              {
                "@type": "Question",
                "name": "Are the results truly random?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Each click pulls from a large pool of curated headcanon templates and applies random tone and detail variations."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use these for any fandom?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The prompts are written to work for any character in any fandom, such as fantasy, anime, Marvel, original fiction, and more."
                }
              },
              {
                "@type": "Question",
                "name": "What if I don't like the result?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Click Generate Again. There are no limits on how many times you can generate."
                }
              },
              {
                "@type": "Question",
                "name": "How is this different from an AI headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This uses curated creative writing templates rather than open-ended AI, which produces focused, immediately usable results rather than generic text."
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
            Random Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            No setup and no prompts. Just click and discover a fresh
            creative idea every time.
          </p>
        </div>
      </section>

      {/* ── Tool UI ─────────────────────────────────── */}
      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <RandomHeadcanonTool />
        </div>
      </section>

      {/* ── SECTION 1 — Example Random Headcanons ───── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">Inspiring Samples</p>
            <h2 className="section__h2">Example Random Headcanons</h2>
            <p className="section__lead mx-auto">
              Here are examples of the kind of ideas this generator produces. Small, quiet actions and subtle details can make fictional characters feel real, deep, and fully realized.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <span className="example-card__type">Random Quirk</span>
              <blockquote>
                This character always carries something that belongs to someone else, such as a borrowed book never returned, a coin from a different country, or a lighter they don't use. They couldn't explain why they kept it.
              </blockquote>
            </article>
            <article className="example-card">
              <span className="example-card__type">Behavioral Habit</span>
              <blockquote>
                They have a habit of giving directions using landmarks that no longer exist. Buildings demolished years ago, shops that closed. People who've known them long enough just know to ask follow-up questions.
              </blockquote>
            </article>
            <article className="example-card">
              <span className="example-card__type">Daily Ritual</span>
              <blockquote>
                After a long, difficult day, they always do one small, completely useless thing. Rearranging items on a shelf. Refolding something that was already folded. Not to fix anything. Just to feel in control of something.
              </blockquote>
            </article>
          </div>

          <div className="mt-12 max-w-[760px] mx-auto text-center px-4">
            <div className="w-12 h-[1px] bg-[var(--color-border-med)] mx-auto mb-8" aria-hidden="true"></div>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-3)]" style={{ fontFamily: "var(--font-sans)" }}>
              A great headcanon doesn't require a sweeping plot change. Instead, it shifts the lens slightly to reveal the characters when they are alone, focus on their minor rituals, or highlight how they cope with stress. By reading through these examples, you can see how specific habits build emotional resonance and help you write more compelling dialogue and narrative arcs.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-border-med)] mx-auto mt-8" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Who Is This For? ───── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Use Cases</p>
          <h2 className="section__h2">Who Uses the Random Headcanon Generator?</h2>
          <p className="section__lead mb-8">
            Sometimes the best starting point is one you didn't choose. These random headcanons are useful when you need ideas fast, offering unexpected angles that break through writer's block and spark immediate creativity.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <div className="premium-usecase-card__icon">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Writers with blank-page anxiety
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                When you have a character but no idea what makes them specific, one random headcanon can unlock an entire chapter. It gives you something concrete to write toward. Instead of staring at a blank document, you can focus on a single, compelling trait and build a scene around how it manifests in their daily life.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <div className="premium-usecase-card__icon">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Roleplayers starting a new character
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                New character, no backstory yet? Get a random trait before your first session and build the persona from there. It allows you to develop consistent reactions, speech patterns, and physical habits that will make your interactions with other players feel more organic, spontaneous, and engaging.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <div className="premium-usecase-card__icon">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Artists looking for a scene to draw
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                Random headcanons suggest moments, not just traits, like a character doing something specific in a specific mood. That is exactly what you need to start a piece. Drawing a character in a passive pose can be dull, but depicting them in a quiet, unique routine creates immediate narrative tension and visual interest.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <div className="premium-usecase-card__icon">
                  4
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)]" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Anyone with 30 seconds and writer's block
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
                No setup. No fields to fill. One click gives you something to work with. The best random headcanons are the ones that surprise you. When your brain is tired from outlining or plotting, letting a randomized system make the initial decision can bypass your self-doubt and open up entirely new avenues of thought.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
            <p>
              By removing the need for user input, the random generator acts as a neutral creative partner. It doesn't know your characters, their relationships, or their settings, which means it won't repeat your own writing patterns or habits. Every generation offers a clean slate, inviting you to connect the dots in ways you might not have otherwise considered.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Random Headcanons vs Other Generators ───── */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="section__label">Comparison</p>
              <h2 className="section__h2" style={{ fontFamily: "var(--font-serif)", margin: 0 }}>
                Random Headcanons vs Character-Specific Generators
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-6">
                The random headcanon generator does not ask for a name. This makes it faster, but also broader. It produces ideas that could fit dozens of characters, which means you get to decide who they belong to. You can test a prompt against different figures in your story to see where it creates the most interesting friction or emotional depth.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="pb-6 border-b border-[var(--color-border)]">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-primary)] block mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Option A
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-3" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Random Generator
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-2" style={{ margin: 0 }}>
                  Instant, one-click creative prompts. No setup or inputs required. Perfect for immediate, unexpected inspiration across any genre or fandom setting.
                </p>
              </div>

              <div className="pb-6 border-b border-[var(--color-border)]">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-primary)] block mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Option B
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-3" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Character-Specific Generator
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-2" style={{ margin: 0 }}>
                  If you want ideas tailored to a specific character, use the <Link href="/character-headcanon-generator/" className="text-[var(--color-primary)] hover:underline font-semibold">character headcanon generator</Link> instead.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-primary)] block mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Option C
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-3" style={{ fontFamily: "var(--font-sans)", margin: 0 }}>
                  Relationship Generator
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mt-2" style={{ margin: 0 }}>
                  If you want to explore what two characters share, use the <Link href="/relationship-headcanon-generator/" className="text-[var(--color-primary)] hover:underline font-semibold">relationship headcanon generator</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — FAQ ─────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <p className="section__label">FAQ</p>
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="section__lead mx-auto text-center" style={{ marginBottom: 0 }}>
              Find clear answers to common questions about using our free random headcanon generator for your creative writing, character development, and roleplay projects.
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
            <Link href="/scenario-headcanon-generator/" className="tool-link-card">
              <span className="tool-icon">🎭</span>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--color-text)" }}>Scenario Generator</p>
              <p className="text-[13px]" style={{ color: "var(--color-ink-4)" }}>Story settings & situations</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
