import type { Metadata } from "next";
import Link from "next/link";
import RelationshipHeadcanonGenerator from "@/components/RelationshipHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Sibling Headcanon Generator (Free & Instant)",
  description:
    "Explore sibling dynamics, shared history, and family tension between any two characters. Free tool, no signup, works for any fandom - results in seconds.",
  alternates: {
    canonical: "https://headcanonspace.com/sibling-headcanon-generator/",
  },
};

export default function SiblingHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Sibling Headcanon Generator",
            url: "https://headcanonspace.com/sibling-headcanon-generator/",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            description: "Free tool for generating sibling dynamics, shared history, and family tension headcanons between any two characters instantly."
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What kind of sibling dynamics does this tool generate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The tool generates headcanons for any sibling dynamic: protective bonds, rival siblings, estranged pairs, found family relationships, and childhood habits that carried into adulthood."
                }
              },
              {
                "@type": "Question",
                name: "Can I use this for found family dynamics?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Found family siblings work exactly the same way. The bond formed through time and crisis rather than biology, so enter any two names and the tool generates dynamics specific to that pair."
                }
              },
              {
                "@type": "Question",
                name: "Does this work for canon sibling pairs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Enter any canon sibling pair from any fandom, like anime, Marvel, fantasy, or games, and get headcanon ideas that extend what canon already established between them."
                }
              },
              {
                "@type": "Question",
                name: "Is this tool free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Completely free, no signup required, no generation limits. Everything runs in your browser, meaning nothing you type is saved anywhere."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-bg)] pt-11 pb-6 text-center">
        <div className="relative mx-auto max-w-[820px] px-6">
          <h1
            className="animate-fade-up animate-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.08,
              letterSpacing: "-1.2px",
              color: "var(--color-text)",
              marginBottom: "20px",
            }}
          >
            Sibling Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Enter two character names to instantly generate sibling dynamics, shared history, and family tension. Explore the specific loyalty and bonds that only siblings carry. Works for biological siblings, found family, and any fandom.
          </p>
        </div>
      </section>

      {/* Tool Component */}
      <section className="w-full px-6 pt-2 pb-16 animate-scale-in">
        <div style={{ minHeight: "520px", position: "relative" }}>
          <RelationshipHeadcanonGenerator />
        </div>
      </section>

      {/* Section 1 */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="section__label">Understanding the tool</p>
          <h2 className="section__h2">What Does This Tool Generate?</h2>
          
          <div className="space-y-4 mt-6 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Sibling bonds carry something no other relationship does: shared history that neither person chose. The same childhood, the same rooms, the same parents.
            </p>

            <div className="prose-callout">
              The older sibling who checked the door was locked. The younger sibling who learned to be funny because the older one laughed first. This tool generates those moments, detailing the specific, unspoken things that only siblings carry.
            </div>

            <p>
              It works for any sibling dynamic: the protective older sibling, the rival siblings who compete about everything, the estranged pair where distance changed something that used to be easy, the found family bond that formed through crisis rather than blood. Enter two names from any fandom, like anime, Marvel, fantasy, or AO3 ships with a sibling read, and get family-focused headcanon ideas instantly.
            </p>
          </div>

          <div className="mt-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-[var(--shadow-xs)]">
            <h3 className="text-lg font-medium mb-5 flex items-center gap-3" style={{ color: "var(--color-text)" }}>
              <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-lg" style={{ background: "var(--color-primary-lt)", color: "var(--color-primary)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 5l-6 6-3-3"/></svg>
              </span>
              How to Use This Tool
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-[var(--color-text-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0" style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                <span>Enter two character names.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0" style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                <span>Click Generate for a sibling-focused headcanon.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0" style={{ color: "var(--color-primary)", marginTop: "2px" }}>•</span>
                <span>Copy it, save it, or generate again with no limits.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="section__h2">Example Sibling Headcanons</h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mt-3">Here is what this tool produces.</p>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  The older sibling never stopped checking whether the door was locked before bed. Even years later, in a different building, in a different life. Some habits do not know when they are no longer needed.
                </blockquote>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  They have an argument they have been having since they were children. Neither of them remembers who started it. Neither of them wants to be the one who ends it.
                </blockquote>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  The younger sibling learned to be funny because the older one always laughed first. Neither of them ever talked about it. But the older one knows.
                </blockquote>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">Story Themes</p>
            <h2 className="section__h2">Types of Sibling Dynamics to Explore</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </span>
                <h3 className="premium-usecase-card__title">Protective siblings</h3>
              </div>
              <p className="premium-usecase-card__desc">
                One always shields the other. Even when it is not asked for. Even when it is actively unwanted. The protection is not conditional on whether the other person wants it, as it is just how one of them is built.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </span>
                <h3 className="premium-usecase-card__title">Rival siblings</h3>
              </div>
              <p className="premium-usecase-card__desc">
                Competition runs through everything. Grades, achievements, the approval of the same people. Neither of them admits how much the other's opinion still matters after all of it.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </span>
                <h3 className="premium-usecase-card__title">Estranged siblings</h3>
              </div>
              <p className="premium-usecase-card__desc">
                Distance and time have changed something that used to be easy. What they talk about now is different from what they used to talk about. Neither of them says so out loud.
              </p>
            </div>

            <div className="premium-usecase-card">
              <div className="premium-usecase-card__header">
                <span className="premium-usecase-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </span>
                <h3 className="premium-usecase-card__title">Found family siblings</h3>
              </div>
              <p className="premium-usecase-card__desc">
                Not biological. But the bond formed the same way: through time, through shared crisis, through choosing to stay when leaving would have been easier. The found family trope exists because this kind of sibling bond is real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="section__label">Audience</p>
              <h2 className="section__h2">Who Uses This Tool?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
              <div className="usecase-item">
                <h3>Fanfiction writers on AO3 and Tumblr</h3>
                <p>
                  Use generated sibling dynamics to build consistency across chapters. A sibling relationship with specific shared history is easier to write, and more believable to read, than one built from generic family moments.
                </p>
              </div>

              <div className="usecase-item">
                <h3>Roleplayers building family backstory</h3>
                <p>
                  Get a specific sibling dynamic before a session. Something both players can reference: a habit, a tension, a line neither of them would cross.
                </p>
              </div>

              <div className="usecase-item">
                <h3>OC developers</h3>
                <p>
                  Original characters need family relationships as much as they need personality. A sibling bond with specific shared history makes both characters feel more real than either would alone.
                </p>
              </div>

              <div className="usecase-item">
                <h3>Writers exploring canon sibling pairs</h3>
                <p>
                  Canon often establishes that two characters are siblings but leaves the dynamic mostly unexplored. Use this tool to find what exists in the gaps, detailing the moments canon never showed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="text-center mb-10">
            <p className="section__label">The Core Difference</p>
            <h2 className="section__h2">Sibling Bonds vs Friendship Bonds</h2>
            <p className="section__lead mx-auto">
              Many writers treat sibling dynamics like close friendships. While they share similarities, the core tension is different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="highlight-item">
              <div className="highlight-icon" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-ink-3)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2">Friendships</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed m-0">
                  Friendships are built on choice. You choose to stay. If a friend is annoying, you can leave.
                </p>
              </div>
            </div>

            <div className="highlight-item" style={{ borderColor: "var(--color-primary)", background: "var(--color-surface)" }}>
              <div className="highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">Sibling Bonds</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed m-0">
                  Sibling bonds, even found family ones, are built on inevitability. If a sibling is annoying, you have to sit next to them at dinner. This creates a specific kind of bluntness. Siblings do not have to perform for each other the way friends sometimes do. They have already seen the worst of it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-primary-lt)] border-l-[3px] border-[var(--color-primary)] p-5 sm:p-6 rounded-r-[var(--radius-md)]">
            <p className="text-[15px] sm:text-base text-[var(--color-ink-2)] font-medium leading-relaxed m-0">
              This generator creates ideas that reflect that forced proximity, resulting in headcanons that feel earned rather than idealized.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10">
            <p className="section__label">Versatility</p>
            <h2 className="section__h2">Perfect For</h2>
            <p className="section__lead mx-auto">
              Whether you are writing a 100k-word slow burn or just brainstorming for an RP, this tool fits any fandom context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
            {[
              "Found family ships",
              "Canon sibling dynamics",
              "OC family relationships",
              "Fandom sibling pairs",
              "Rival siblings AUs",
              "Protective sibling trope",
              "Estranged reunions",
              "Siblings AU fanfiction"
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[var(--color-primary-lt)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-[15px] text-[var(--color-ink-2)] font-medium leading-tight">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - FAQ Component */}
      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-10">
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-[600px] mx-auto">
              Answers to common questions about using the sibling headcanon generator.
            </p>
          </div>
          
          <FaqAccordion items={[
            {
              question: "What kind of sibling dynamics does this tool generate?",
              answer: "The tool generates headcanons for any sibling dynamic: protective bonds, rival siblings, estranged pairs, found family relationships, and childhood habits that carried into adulthood."
            },
            {
              question: "Can I use this for found family dynamics?",
              answer: "Yes. Found family siblings work exactly the same way. The bond formed through time and crisis rather than biology, so enter any two names and the tool generates dynamics specific to that pair."
            },
            {
              question: "Does this work for canon sibling pairs?",
              answer: "Yes. Enter any canon sibling pair from any fandom, like anime, Marvel, fantasy, or games, and get headcanon ideas that extend what canon already established between them."
            },
            {
              question: "Is this tool free?",
              answer: "Yes. Completely free, no signup required, no generation limits. Everything runs in your browser, meaning nothing you type is saved anywhere."
            }
          ]} />
        </div>
      </section>

      {/* Section 8 */}
      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2 mb-4">Explore More Tools</h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-8">Each tool focuses on a different type of headcanon.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link href="/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-lt)] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">All-purpose headcanon ideas for any fandom</p>
            </Link>
            <Link href="/character-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Character Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Individual traits, habits, and backstory ideas</p>
            </Link>
            <Link href="/friendship-headcanon-generator/" className="group flex flex-col p-6 bg-white border border-[var(--color-border)] rounded-2xl transition-all duration-300 hover:border-[var(--color-border-med)] hover:shadow-md hover:-translate-y-1.5">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-6a3 3 0 00-6 0v6m6 0H7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">Friendship Headcanon Generator</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">Platonic bonds, found family, loyalty moments</p>
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
