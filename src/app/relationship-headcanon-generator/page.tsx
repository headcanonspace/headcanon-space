import type { Metadata } from "next";
import Link from "next/link";
import RelationshipHeadcanonGenerator from "@/components/RelationshipHeadcanonGenerator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Relationship Headcanon Generator",
  description:
    "Free relationship headcanon generator - create unique ship dynamics, emotional moments, and couple tension instantly. Perfect for fanfiction and roleplay.",
  alternates: {
    canonical: "https://headcanonspace.com/relationship-headcanon-generator/",
  },
  openGraph: {
    title: "Relationship Headcanon Generator",
    description: "Free relationship headcanon generator - create unique ship dynamics, emotional moments, and couple tension instantly. Perfect for fanfiction and roleplay.",
    url: "/relationship-headcanon-generator/",
  },
};

const relationshipFaqs = [
  {
    question: "What is a relationship headcanon?",
    answer: "A relationship headcanon is an idea about how two characters interact or feel about each other that isn't officially confirmed in canon."
  },
  {
    question: "Does this only work for romantic ships?",
    answer: "No! You can use it for romantic pairings, platonic friends, fierce rivals, or complicated enemies."
  },
  {
    question: "Can I use original characters?",
    answer: "Yes, you can enter any two names, including OCs. The generator creates scenarios and emotional moments that work for any dynamic."
  },
  {
    question: "How do I save the results?",
    answer: "Click the Save button on any generated result to keep it in your browser's local storage for future reference."
  },
  {
    question: "What is a relationship headcanon generator?",
    answer: "A relationship headcanon generator is a tool that creates personal interpretations of how two fictional characters interact, relate, and behave with each other: beyond what canon officially shows."
  },
  {
    question: "Can I use this for friendships, not just romance?",
    answer: "Yes. Enter any two characters, friends, rivals, siblings, or a romantic pair. The relationship headcanon generator works for any type of relationship dynamic, not just romantic ships."
  },
  {
    question: "How do I get better results?",
    answer: "Use both characters' names and pick the tone that matches your story. Soft for tender moments, Dark for angst, Chaotic for unpredictable dynamics. This works whether you need a ship headcanon generator result or a platonic dynamic."
  },
  {
    question: "Is this the same as a two person headcanon generator?",
    answer: "Yes, any tool that generates headcanons for a pair of characters is a two person headcanon generator. Enter two names, pick a tone, and get results focused on the dynamic between them specifically."
  },
  {
    question: "Can I generate multiple headcanons at once?",
    answer: "Yes. Click Generate again to get a new set of ideas. Each click produces a unique result from the curated template pool, no limits on how many you can create."
  }
];

export default function RelationshipHeadcanonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Relationship Headcanon Generator",
            "url": "https://headcanonspace.com/relationship-headcanon-generator/",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Generate relationship-based headcanons instantly."
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
                "name": "What is a relationship headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A relationship headcanon generator is a tool that creates personal interpretations of how two fictional characters interact, relate, and behave with each other: beyond what canon officially shows."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for friendships, not just romance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Enter any two characters, friends, rivals, siblings, or a romantic pair. The relationship headcanon generator works for any type of relationship dynamic, not just romantic ships."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get better results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use both characters' names and pick the tone that matches your story. Soft for tender moments, Dark for angst, Chaotic for unpredictable dynamics. This works whether you need a ship headcanon generator result or a platonic dynamic."
                }
              },
              {
                "@type": "Question",
                "name": "Is this the same as a two person headcanon generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, any tool that generates headcanons for a pair of characters is a two person headcanon generator. Enter two names, pick a tone, and get results focused on the dynamic between them specifically."
                }
              },
              {
                "@type": "Question",
                "name": "Can I generate multiple headcanons at once?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Click Generate again to get a new set of ideas. Each click produces a unique result from the curated template pool, no limits on how many you can create."
                }
              }
            ]
          })
        }}
      />

      <section className="relative overflow-hidden hero-gradient" style={{ padding: "80px 0 64px", textAlign: "center" }}>
        <div className="relative mx-auto max-w-[760px] px-6">
          <h1 className="animate-fade-up animate-delay-1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-1.2px", color: "var(--color-text)", marginBottom: "20px" }}>
            Relationship Headcanon Generator
          </h1>
          <p className="animate-fade-up animate-delay-2" style={{ fontSize: "18px", fontWeight: 300, color: "var(--color-ink-3)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            Explore the dynamics between any two characters and generate
            ship moments, conflicts, and tender scenes instantly.
          </p>
        </div>
      </section>

      <section className="w-full px-6 pt-8 pb-16 animate-scale-in">
        <div style={{ minHeight: '520px', position: 'relative' }}>
          <RelationshipHeadcanonGenerator />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-primary)] mb-3 text-center sm:text-left">
            Understanding the tool
          </p>
          <h2 className="section__h2 mb-8 text-center sm:text-left">
            What Is a Relationship Headcanon Generator?
          </h2>
          
          <div className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs transition-all hover:bg-slate-100/70">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-6">
              <span className="float-left mr-3.5 mt-1.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white text-3xl font-extrabold font-serif shadow-xs select-none">
                A
              </span>
              relationship headcanon describes how two characters interact,
              behave, or feel about each other beyond what is officially shown.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Fans use relationship headcanons to explore emotional dynamics, hidden
              connections, and unique character interactions. For results focused entirely on platonic dynamics,
              the <Link href="/friendship-headcanon-generator/" className="font-semibold text-[var(--color-primary)] hover:underline decoration-2 underline-offset-4 transition-colors">friendship headcanon generator</Link> focuses
              specifically on loyalty, found family, and shared history between characters.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2 mb-6">
            How to Use This Tool
          </h2>
          
          <div className="border-l-2 border-indigo-100/70 ml-5 my-8">
            {/* Step 1 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                1
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-1">
                  Enter two character names
                </h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                2
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-1">
                  Click generate to create a headcanon
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                3
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-1">
                  Generate more ideas instantly
                </h3>
              </div>
            </div>
          </div>

          <h2 className="section__h2 mt-12 mb-6">
            Why Use This Headcanon Generator for Relationships?
          </h2>
          
          <ul className="space-y-4 list-none pl-0 my-6">
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base font-semibold leading-relaxed">
                Explore character dynamics instantly
              </span>
            </li>
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base font-semibold leading-relaxed">
                Improve storytelling and fanfiction
              </span>
            </li>
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base font-semibold leading-relaxed">
                Discover new emotional interactions
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <p className="section__label">See what you can make</p>
            <h2 className="section__h2">Example Results from the Character Relationship Headcanon Generator</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character A always notices when Character B is overwhelmed, even before they say anything.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Intuitive Connection</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character B trusts Character A more than anyone else, but struggles to admit it.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Silent Trust</span>
              </div>
            </article>
            <article className="example-card">
              <div className="example-card__quote-container">
                <span className="example-card__quote-mark">“</span>
                <blockquote className="example-card__quote">
                  Character A and Character B argue often, but it never changes how much they care about each other.
                </blockquote>
              </div>
              <div className="example-card__footer">
                <span className="example-card__author">Dynamic Bond</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="section__h2 mb-6">Use It as a Couple Headcanon Generator</h2>
          
          <div className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs my-8 transition-all duration-300 hover:bg-slate-100/50">
            <div className="space-y-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              <p>
                This tool works equally well as a couple headcanon generator for romantic ships. Enter both characters' names to get relationship moments, shared habits, and tender scenes focused on the romantic dynamic between them.
              </p>
              <p>
                Whether you are writing slow burn, established relationship, or enemies-to-lovers, the generator adapts to the tone you choose. Pick Romantic or Soft for tender moments. Pick Dark or Chaotic for tension-heavy dynamics. The headcanon generator relationship between tone and output means every result matches the story you are writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="mx-auto max-w-[760px] px-6">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[var(--color-primary)] mb-3 text-center sm:text-left">
            Use cases
          </p>
          <h2 className="section__h2 mb-6 text-center sm:text-left">Perfect For Ship Writers and Roleplayers</h2>
          
          <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
            <span className="feature-tag shadow-xs">Fanfiction</span>
            <span className="feature-tag shadow-xs">Roleplay scenarios</span>
            <span className="feature-tag shadow-xs">Character shipping</span>
            <span className="feature-tag shadow-xs">Idea generation</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            <div className="p-6 sm:p-8 bg-white border border-[var(--color-border)] rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col">
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-text)] mb-3">Ship writers on AO3 and Wattpad</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Writing a multi-chapter fic and need to stay consistent with how a ship behaves across chapters? Use this character relationship headcanon generator to build a reference sheet before you start writing. Every result gives you a specific behavior or dynamic to reference.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-white border border-[var(--color-border)] rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col">
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-text)] mb-3">Discord and forum roleplayers</h3>
              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                In collaborative RP, consistency matters. Generate headcanons for your pairing before a session so both players understand the dynamic: what they argue about, what they would never say, what they do without thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="text-center mb-12">
            <h2 className="section__h2">Frequently Asked Questions</h2>
            <p className="text-sm text-[var(--color-ink-3)] text-center max-w-md mx-auto mt-4">
              Got more questions about the generator and its features? Here is everything else you need to know.
            </p>
          </div>
          
          <FaqAccordion items={relationshipFaqs} />
        </div>
      </section>

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
