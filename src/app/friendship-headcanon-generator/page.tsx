import type { Metadata } from "next";
import Link from "next/link";
import RelationshipHeadcanonGenerator from "@/components/RelationshipHeadcanonGenerator";

export const metadata: Metadata = {
  title: "Friendship Headcanon Generator (Free & Instant)",
  description:
    "Explore platonic bonds, found family dynamics, and loyalty moments between any two characters. Free tool, no signup, works for any fandom — results in seconds.",
  alternates: {
    canonical: "https://headcanonspace.com/friendship-headcanon-generator/",
  },
  openGraph: {
    title: "Platonic Headcanon Tool (Free & Instant)",
    description:
      "Explore platonic bonds, found family dynamics, and loyalty moments between any two characters. Free tool, no signup, works for any fandom — results in seconds.",
    url: "/friendship-headcanon-generator/",
  },
};

export default function FriendshipHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Platonic Headcanon Tool",
            url: "https://headcanonspace.com/friendship-headcanon-generator/",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Generate instant platonic headcanon ideas for any two characters. Free, no signup, and built for fandom writers.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Platonic Headcanon Page",
            url: "https://headcanonspace.com/friendship-headcanon-generator/",
            description:
              "Explore platonic bonds, found family dynamics, and loyalty moments between any two characters.",
          }),
        }}
      />

      <section className="relative overflow-hidden" style={{ padding: "44px 0 24px", textAlign: "center", background: "var(--color-bg)" }}>
        <div className="relative mx-auto max-w-[820px] px-6">
          <h1
            className="animate-fade-up animate-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.08,
              letterSpacing: "-1.2px",
              color: "var(--color-text)",
              marginBottom: "14px",
            }}
          >
            Friendship Headcanon Generator
          </h1>
          <p
            className="animate-fade-up animate-delay-2"
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "var(--color-ink-3)",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.55,
            }}
          >
            Generate platonic bond ideas for any two characters — loyalty moments, shared rituals, and the quiet ways friends show they care. Instantly.
          </p>

          <div className="tool-intro animate-fade-up animate-delay-3" style={{ marginTop: "1.15rem" }}>
            <p>
              Enter two character names and get instant platonic headcanon ideas — built for fanfiction writers,
              roleplayers, and anyone exploring friendship dynamics between characters in any fandom.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 pt-2 pb-16 animate-scale-in">
        <div style={{ minHeight: "520px", position: "relative" }}>
          <RelationshipHeadcanonGenerator />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2">What Does This Tool Generate?</h2>
          <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              Platonic bonds are built on history, not declaration. Two characters who have been through something together
              develop a private language — shared signals, running jokes, the specific way one of them always knows when
              the other is struggling. This tool generates those moments. The kind of friendship detail that makes
              a character feel real on the page.
            </p>
            <p>
              It works for any type of platonic dynamic — best friends, found family, rival-to-friends arcs, childhood
              bonds that survived distance and time. Enter two names from any fandom: anime, fantasy, Marvel, original
              fiction, AO3 ships with a platonic read, Discord RP characters. The results focus on loyalty, shared
              history, and the quiet weight of trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4" style={{ color: "var(--color-text)" }}>How to Use This Tool</h3>
              <ol className="space-y-3 text-sm" style={{ color: "var(--color-ink-3)" }}>
                <li>1. Enter two character names.</li>
                <li>2. Click Generate for a platonic headcanon idea.</li>
                <li>3. Copy it, save it, or generate again — no limits.</li>
              </ol>
            </div>

            <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px 28px" }}>
              <h3 className="text-lg font-medium mb-4" style={{ color: "var(--color-text)" }}>Why a Platonic-Specific Tool?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                A general relationship tool mixes romance, rivalry, and friendship together. This one focuses only on
                platonic dynamics — which means every result stays grounded in loyalty and shared history rather than
                drifting toward romantic subtext.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="section__h2">Example Results</h2>
          <p className="section__lead mt-3">Here is what this tool produces.</p>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  One of them always knows when the other is having a bad day before anything is said. They have never
                  explained how. The other stopped pretending everything was fine a long time ago.
                </blockquote>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  They built a shared language of small signals — one look that means &apos;do you need to leave&apos;, one
                  that means &apos;I&apos;ve got you&apos;, one that means &apos;we&apos;ll talk about this later&apos;. Neither of them
                  remembers when it started.
                </blockquote>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">&ldquo;</span>
                <blockquote className="example-card__quote">
                  They disagree on almost everything except the things that matter. That is exactly why both of them
                  trust the other&apos;s judgment when it counts.
                </blockquote>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="section__h2">Who Uses This Tool?</h2>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Fanfiction writers on AO3 and Wattpad</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Use generated platonic moments to build consistency across chapters. A friendship that has its own private
                language is easier to write — and more believable to read.
              </p>
            </article>

            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Roleplayers in Discord and forum RPs</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Get a shared dynamic for two characters before a session starts. Something both players can reference — a
                signal, a habit, a line neither of them would cross.
              </p>
            </article>

            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>Writers building found family dynamics</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Found family is one of the most complex relationship types to write. It needs specificity — the moment
                the bond formed, what holds it together, what it survives. Use these results as a starting point.
              </p>
            </article>

            <article style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "24px" }}>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--color-text)" }}>OC developers</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
                Original characters need relationships as much as they need personality. A platonic bond with specific
                shared history makes both characters feel more real than either would alone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2">Platonic vs Romantic Headcanons</h2>
          <div className="space-y-4 mt-6" style={{ fontSize: "16px", color: "var(--color-ink-3)", lineHeight: 1.8 }}>
            <p>
              Romantic headcanons carry longing and subtext. Platonic ones carry weight and history. The signals are
              quieter. A romantic headcanon is about what might happen. A platonic one is about what already has — the
              accumulated trust of shared time, shared crisis, shared ordinary days that nobody else witnessed.
            </p>
            <p>
              Both types matter for character depth, but they need different approaches to explore. Romantic results
              drift toward tension and possibility. Friendship results stay grounded in loyalty, comfort, and the
              specific private world two people build when they choose to keep showing up for each other.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2 mb-6">Perfect For</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Platonic ships",
              "Found family",
              "Best friend dynamics",
              "Rival-to-friends arcs",
              "Childhood friend headcanons",
              "Non-romantic OTP",
              "Canon friendship exploration"
            ].map((tag) => (
              <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-ink-2)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
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
