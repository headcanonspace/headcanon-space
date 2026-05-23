import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Relationship Headcanons: A Guide for Writers and Roleplayers",
  description:
    "Everything you need to know about relationship headcanons: what they are, how to write them, and examples for ships, friendships, and rivalries.",
  alternates: {
    canonical: "https://headcanonspace.com/blog/relationship-headcanons/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Relationship Headcanons: A Guide for Writers and Roleplayers",
  author: {
    "@type": "Organization",
    name: "Headcanon Space Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Headcanon Space",
    url: "https://headcanonspace.com",
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  url: "https://headcanonspace.com/blog/relationship-headcanons/",
};

export default function RelationshipHeadcanonsPage() {
  const faqs = [
    {
      question: "What is a ship headcanon?",
      answer:
        "A ship headcanon is a relationship headcanon specifically about a romantic pairing. It explores how that couple might behave together beyond what canon shows: the moments, signals, and dynamics that exist between them off-screen.",
    },
    {
      question: "Can a relationship headcanon work for enemies?",
      answer:
        "Yes. Rivalry and antagonism produce some of the most interesting dynamics because the relationship is built on tension rather than warmth. The same principles apply: ground it in canon, extend it one step, make it behavioral.",
    },
    {
      question: "How many headcanons should I have for one ship?",
      answer:
        "As many as feel true. There is no limit. Some writers build hundreds for a single pairing over time, each one adding a specific detail to a larger picture of who these two people are together.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section Container (Wide Layout) */}
      <section className="mx-auto max-w-[1100px] px-6 pt-6 pb-12 md:pt-12 md:pb-16 relative">
        {/* Back Link Button */}
        <div className="mb-8">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[9px] font-extrabold tracking-[1.5px] uppercase text-[var(--color-text-muted)] transition-all shadow-xs"
          >
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Two Column Split Hero */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-left space-y-5 flex flex-col justify-center pr-0 md:pr-8">
            <p className="text-[10px] font-extrabold tracking-[2.5px] uppercase text-[var(--color-primary)]">
              Writing Guides
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Relationship Headcanons: A Guide for Writers and Roleplayers
            </h1>

            <p className="text-sm font-semibold text-[var(--color-text-muted)]">By Headcanon Space Team · June 1, 2026</p>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
              Everything you need to know about relationship headcanons: what they are, how to write them, and examples for ships, friendships, and rivalries.
            </p>
          </div>

          {/* Vertical Editorial Column Rule Separator on Desktop */}
          <div className="hidden md:block w-px bg-slate-100 self-stretch my-4" />

          {/* Right Column: Featured Image with Creative 3D Layer Offset */}
          <div className="flex-1 w-full max-w-[480px] flex items-center justify-center">
            <div className="relative w-full aspect-[1200/630]">
              {/* Creative 3D solid backing layer */}
              <div className="absolute -inset-2 bg-indigo-50 border border-indigo-100/50 rounded-3xl -z-10 transform translate-x-3 translate-y-3" />

              {/* Main image card wrapper */}
              <div className="w-full h-full relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                <img
                  src="/images/blog/relationship-headcanons.svg"
                  alt="Relationship Headcanons Guide Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content Container (Narrow, Readable Layout) */}
      <article className="mx-auto max-w-[740px] px-6 pb-20 relative text-[var(--color-text)]">

        {/* Intro Section - Premium Editorial Callout Card */}
        <section className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs mb-12 transition-all hover:bg-slate-100/70">
          <p
            className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="float-left mr-3.5 mt-1.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white text-3xl font-extrabold font-serif shadow-xs select-none">
              R
            </span>
            elationship headcanons are some of the most powerful things in fandom. They take two characters and find what is unspoken between them: the tension, the rituals, the looks across a room. When they work, they feel more true than anything in canon. When they do not, they feel forced. This guide explains what makes one strong and how to write it.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What Are Relationship Headcanons?
          </h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            A relationship headcanon is a personal interpretation of how two characters relate to each other, behave around each other, or feel about each other (none of which is officially confirmed by the source material). It could be about a romantic ship, a rivalry, a friendship, or a family bond. Canon might show two characters talking occasionally. A headcanon explores what they talk about when no one is watching, and what they would never say out loud.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            The Three Types of Relationship Headcanons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 items-stretch">
            {/* Dynamic Card */}
            <div className="bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-slate-50 flex flex-col justify-between animate-fade-up">
              <div>
                <h3 className="text-lg font-extrabold text-[var(--color-text)] leading-tight mb-3">
                  Dynamic headcanons
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  These explore how two characters interact on a day-to-day level. Who talks more. Who goes quiet first. Who defends the other without being asked. Dynamic headcanons are built on observable behavior: the kind of thing a third person would notice if they watched long enough.
                </p>
              </div>
            </div>

            {/* Ritual Card */}
            <div className="bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-slate-50 flex flex-col justify-between animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div>
                <h3 className="text-lg font-extrabold text-[var(--color-text)] leading-tight mb-3">
                  Private ritual headcanons
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  These explore what two characters do that only they know about. A phrase that means something specific. A look that has its own translation. A habit that developed from time spent together that neither of them has ever tried to explain to anyone else.
                </p>
              </div>
            </div>

            {/* Tension Card */}
            <div className="bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-slate-50 flex flex-col justify-between animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <h3 className="text-lg font-extrabold text-[var(--color-text)] leading-tight mb-3">
                  Tension headcanons
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  These explore what goes unsaid. The argument they never finished. The thing one of them knows and has not mentioned yet. The silence that sits between them in certain rooms and means something specific to both of them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What Makes a Relationship Headcanon Feel True?
          </h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            The strongest ones are built on something canon already established and extended one step further. They do not contradict what exists: they grow from it. If canon shows rivalry, the headcanon might explore what the rivalry is protecting. If canon shows friendship, it might name the exact moment the friendship became real. Ground it in something specific. Then take one step past it. Use the{" "}
            <Link
              href="/relationship-headcanon-generator/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              relationship headcanon generator
            </Link>{" "}
            to explore dynamics between any two characters as a starting point.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Relationship Headcanon Examples
          </h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            Here are three examples across different relationship types.
          </p>

          <div className="space-y-4 my-8">
            {/* Example 1 */}
            <div className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-auto px-4 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-105 select-none uppercase tracking-wide">
                Rivals
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors m-0">
                They can predict each other's next move in any argument. Neither of them admits how much attention it took to learn that.
              </p>
            </div>

            {/* Example 2 */}
            <div className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-auto px-4 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-105 select-none uppercase tracking-wide">
                Friends
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors m-0">
                One of them always knows when the other is lying. Not because of anything they say, just posture. They have never pointed it out.
              </p>
            </div>

            {/* Example 3 */}
            <div className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-auto px-4 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-105 select-none uppercase tracking-wide">
                Romantic
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors m-0">
                They have not said it. But they have not needed to. There is a particular kind of quiet that only exists between them.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            How to Write Relationship Headcanons
          </h2>

          <div className="border-l-2 border-indigo-100/70 ml-5 my-8">
            {/* Step 1 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                1
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  Choose a relationship type
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Decide whether you are writing romantic, platonic, or antagonistic. The type determines the emotional stakes and what kind of behavior to look for.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                2
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  Pick one canon dynamic and extend it
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Find something the source material already established between these two characters. Extend it one step further without contradicting it.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                3
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  Ground it in behavior, not feeling
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Feelings are invisible. Behavior is observable. Write what the character does, not what they feel, and let the feeling come through the action.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-8 pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                4
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  Test it in a scene
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Can you write a single moment where this headcanon appears naturally? If not, the idea is too abstract. Find the specific version that could happen in one scene.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mt-6">
            If you need a starting point, the{" "}
            <Link
              href="/relationship-headcanon-generator/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              relationship headcanon generator
            </Link>{" "}
            produces instant ideas for any pairing.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Ship Headcanons vs Friendship Headcanons
          </h2>
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            Ship headcanons tend to focus on tension, longing, and the gap between what is said and what is meant. The unfinished sentence. The touch that almost happened. The thing one of them knows and has decided not to act on yet. They carry the weight of possibility: everything that exists between two people who have not resolved it.
          </p>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            Friendship headcanons carry history and trust instead. The signals are quieter. These relationship headcanons tend to focus on loyalty, the private language of people who have been through something together, and the small ways someone shows they care without saying it. For platonic-focused results, the{" "}
            <Link
              href="/friendship-headcanon-generator/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              friendship headcanon generator
            </Link>{" "}
            focuses specifically on those dynamics.
          </p>
        </section>

        <section className="space-y-4 mb-10 border-t border-[var(--color-border)] pt-12 mt-16">
          <h2 className="section__h2 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] text-center max-w-md mx-auto mb-10">
            Got questions about relationship headcanons? Discover simple, straightforward answers to the most common questions below.
          </p>

          <FaqAccordion items={faqs} />
        </section>

      </article>
    </>
  );
}
