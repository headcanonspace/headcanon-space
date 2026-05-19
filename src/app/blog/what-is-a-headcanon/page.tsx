import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "What Is a Headcanon? Meaning, Examples, and How to Write One",
  description:
    "Learn what a headcanon is, see clear examples, and discover how to write better character and story headcanons for fanfiction and roleplay.",
  alternates: {
    canonical: "https://headcanonspace.com/blog/what-is-a-headcanon/",
  },
  openGraph: {
    title: "What Is a Headcanon? Meaning, Examples, and How to Write One",
    description:
      "A complete beginner-friendly guide to headcanon meaning, examples, writing tips, and use cases for fanfiction and roleplay.",
    url: "/blog/what-is-a-headcanon/",
  },
};

export default function WhatIsAHeadcanonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://headcanonspace.com/blog/what-is-a-headcanon/#article",
        headline: "What Is a Headcanon? Meaning, Examples, and How to Write One",
        description:
          "Learn what a headcanon is, see clear examples, and discover how to write better character and story headcanons for fanfiction and roleplay.",
        datePublished: "2026-04-20",
        dateModified: "2026-05-18",
        author: {
          "@type": "Organization",
          name: "Headcanon Space Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Headcanon Space",
        },
        mainEntityOfPage:
          "https://headcanonspace.com/blog/what-is-a-headcanon/",
      },
      {
        "@type": "FAQPage",
        "@id": "https://headcanonspace.com/blog/what-is-a-headcanon/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a headcanon in simple words?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A headcanon is your personal idea about a character, relationship, or story world that is not officially confirmed in canon.",
            },
          },
          {
            "@type": "Question",
            name: "Is headcanon the same as fanfiction?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not exactly. A headcanon is usually a concept or interpretation, while fanfiction is a full written story. A headcanon can become a fanfiction scene or plot.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use a headcanon generator for roleplay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A headcanon generator is useful for roleplay because it gives quick character hooks, emotional dynamics, and scene ideas you can use in sessions.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "What is a headcanon in simple words?",
      answer: "It is your personal idea about a character or story world that is not officially confirmed in canon."
    },
    {
      question: "Is headcanon the same as fanfiction?",
      answer: "No. Headcanon is usually a concept. Fanfiction is a complete story. A headcanon often becomes the foundation for fanfiction."
    },
    {
      question: "Can a headcanon be wrong?",
      answer: "It can conflict with canon, but it is not \"wrong\" as a creative interpretation. The key is clarity: know whether you are expanding canon or intentionally reimagining it."
    },
    {
      question: "Can I use a headcanon generator for roleplay?",
      answer: "Yes. It is one of the fastest ways to get fresh motivations, emotional hooks, and scene starters before a session."
    },
    {
      question: "What makes a headcanon feel believable?",
      answer: "Specific behavior + emotional reason + context. When all three are present, the headcanon feels natural and easy to write."
    }
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
              Fandom Culture
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What Is a Headcanon?
            </h1>

            <p className="blog-meta">By Headcanon Space Team · April 2026</p>

            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
              A clear guide to headcanon meaning, examples, and practical writing tips for fanfiction, roleplay, and fandom storytelling.
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
                src="/images/blog/what-is-a-headcanon.svg"
                alt="Fandom Culture Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Main Article Content Container (Narrow, Readable Layout) */}
      <article className="mx-auto max-w-[740px] px-6 pb-20 relative">

        {/* Intro Section - Redesigned as a Premium Editorial Callout Card */}
        <section className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs mb-12 transition-all hover:bg-slate-100/70">
          <h2
            className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)] tracking-tight mb-4 animate-fade-up"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What is a headcanon?
          </h2>
          <p
            className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="float-left mr-3.5 mt-1.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white text-3xl font-extrabold font-serif shadow-xs select-none">
              A
            </span>
            <strong>headcanon</strong> is a personal interpretation about a
            fictional character, relationship, or world that is not officially
            confirmed by the source material. Fans use headcanons to explore
            character depth, fill story gaps, and imagine new scenarios.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What is a headcanon in fandom culture?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            In fandom communities, a headcanon is how you interpret details that
            canon leaves open. Canon shows official facts: what happened, who
            said what, and which relationships are confirmed. A headcanon starts
            where official information stops. It helps fans answer questions
            like: Why does this character react that way? What habits do they
            have off-screen? How does a relationship work when no one else is
            watching?
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            This is why headcanons are so common in fanfiction and roleplay.
            They give emotional and behavioral logic to stories. A good
            headcanon does not need to rewrite canon completely. It simply adds
            believable depth. For example, if a character is always composed in
            public, your headcanon might be that they use routines to manage
            anxiety in private. That does not break canon. It expands it.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            If you want quick ideas while building these interpretations, start
            with the{" "}
            <Link 
              href="/" 
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              headcanon generator
            </Link>
            . It is useful when you need inspiration but do not want to spend
            an hour brainstorming from scratch.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Headcanon vs canon vs fanfiction
          </h2>
          
          {/* High-End Comparative Card Deck */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 items-stretch">
            {/* Canon Card - Baseline */}
            <div className="bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-slate-50 flex flex-col justify-between animate-fade-up">
              <div>
                <span className="text-[10px] font-extrabold tracking-[2px] uppercase text-slate-400 mb-5 block select-none">
                  Official Baseline
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-extrabold text-[var(--color-text)] leading-tight">
                    Canon
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Official content from the original source.
                </p>
              </div>
            </div>

            {/* Headcanon Card - Creative Bridge (Highlighted Star!) */}
            <div className="bg-white border-2 border-[var(--color-primary)] p-6 sm:p-8 rounded-3xl shadow-xs transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:bg-indigo-50/10 flex flex-col justify-between relative overflow-hidden animate-fade-up ring-4 ring-indigo-50">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/40 rounded-full -mr-8 -mt-8 -z-10" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] text-[10px] font-extrabold tracking-[2px] uppercase mb-5 select-none">
                  <svg className="w-2.5 h-2.5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.858 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                  </svg>
                  Creative Bridge
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-lg font-extrabold text-[var(--color-primary)] leading-tight">
                    Headcanon
                  </h3>
                </div>
                <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                  Personal interpretation not officially confirmed.
                </p>
              </div>
            </div>

            {/* Fanfiction Card - Expanded Narrative */}
            <div className="bg-slate-50/70 border border-slate-200/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-slate-50 flex flex-col justify-between animate-fade-up">
              <div>
                <span className="text-[10px] font-extrabold tracking-[2px] uppercase text-slate-400 mb-5 block select-none">
                  Expanded Story
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.754 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-lg font-extrabold text-[var(--color-text)] leading-tight">
                    Fanfiction
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A complete story written by fans, often built using one or more headcanons.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Think of headcanon as the bridge between canon facts and fan-created
            stories. You can keep a headcanon as a short concept, or turn it
            into a chapter, roleplay scene, or full fic arc.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Real examples of headcanons
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
            Here are simple, practical examples that show what a headcanon can
            look like in different contexts:
          </p>
          
          <div className="space-y-4 my-8">
            {/* Example 1 */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-110 select-none">
                01
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                A quiet character keeps a notebook of things they never say out
                loud, which explains why they notice details others miss.
              </p>
            </div>

            {/* Example 2 */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-110 select-none">
                02
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                Two rivals memorize each other&apos;s routines, not to win, but
                to make sure the other one gets home safely.
              </p>
            </div>

            {/* Example 3 */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-110 select-none">
                03
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                A confident team leader secretly rehearses difficult
                conversations beforehand because they are afraid of saying the
                wrong thing.
              </p>
            </div>

            {/* Example 4 */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-110 select-none">
                04
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                In an AU school setting, a pair that argues constantly is the
                first to defend each other when outsiders criticize them.
              </p>
            </div>

            {/* Example 5 */}
            <div className="group flex gap-4 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] font-black text-xs shrink-0 mt-0.5 shadow-xs transition-transform duration-300 group-hover:scale-110 select-none">
                05
              </span>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                After a major canon event, a character starts collecting harmless
                routines (tea, playlists, small rituals) to stay grounded.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            How to write a strong headcanon
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            A strong headcanon is specific, emotionally clear, and easy to use
            in scenes. You do not need perfect wording. You need a useful
            concept that creates story movement.
          </p>
          
          {/* Custom Standalone Process Timeline Board */}
          <div className="border-l-2 border-indigo-100/70 ml-5 my-8">
            
            {/* Step 1 */}
            <div className="relative pl-8 pb-8 last:pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                1
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  1) Start with one clear behavior
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Pick one behavior that feels true to the character: avoiding eye
                  contact, over-preparing, joking under stress, protecting others at
                  personal cost.
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
                  2) Add the emotional reason
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Why do they do this? Fear, guilt, trust issues, loyalty, pride.
                  This is what makes the headcanon feel grounded instead of random.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-8 pb-0 animate-fade-up">
              <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--color-primary)] text-white font-black text-sm -ml-[21px] border-4 border-white shadow-xs select-none">
                3
              </span>
              <div className="bg-slate-50/40 border border-slate-100/50 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2">
                  3) Place it in a scenario
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Put the idea into a concrete moment where it can be shown through
                  action. That is where your fanfiction or roleplay scene starts.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Use cases: fanfiction, roleplay, and fandom writing
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Headcanons are useful across multiple writing formats:
          </p>
          
          <ul className="space-y-4 list-none pl-0 my-6">
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                <strong className="text-[var(--color-text)] font-extrabold mr-1">Fanfiction planning:</strong> Build emotional continuity across chapters and avoid out-of-character scenes.
              </span>
            </li>
            
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                <strong className="text-[var(--color-text)] font-extrabold mr-1">Roleplay sessions:</strong> Create character hooks, dialogue tone, and conflict triggers for better interactions.
              </span>
            </li>

            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/40 border border-slate-100/50 transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 text-[var(--color-primary)] shrink-0 mt-0.5 select-none shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                <strong className="text-[var(--color-text)] font-extrabold mr-1">Fandom writing practice:</strong> Turn short prompts into drabbles, dialogue exercises, and AU one-shots.
              </span>
            </li>
          </ul>

          {/* Premium Generator Resources Board */}
          <div className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs my-8 transition-all duration-300 hover:bg-slate-100/50">
            <div className="space-y-4">
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed my-0">
                If you need focused ideas, try the{" "}
                <Link 
                  href="/character-headcanon-generator/" 
                  className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
                >
                  character headcanon generator
                </Link>{" "}
                for personality depth, the{" "}
                <Link 
                  href="/relationship-headcanon-generator/" 
                  className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
                >
                  relationship headcanon generator
                </Link>{" "}
                for ship dynamics, and the{" "}
                <Link 
                  href="/scenario-headcanon-generator/" 
                  className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
                >
                  scenario headcanon generator
                </Link>{" "}
                for plot-ready setups.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed my-0">
                Need something quick? Use the{" "}
                <Link 
                  href="/random-headcanon-generator/" 
                  className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
                >
                  random headcanon generator
                </Link>{" "}
                to get instant prompts when you are stuck.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed my-0">
                For platonic character dynamics specifically, the <Link href="/friendship-headcanon-generator/" className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]">friendship headcanon generator</Link> generates loyalty moments and shared history between any two characters.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Common mistakes to avoid
          </h2>
          
          {/* Premium Mistakes Warning Board */}
          <div className="p-6 sm:p-8 rounded-3xl border border-rose-100 bg-rose-50/20 my-6 space-y-4 animate-fade-up">
            <span className="inline-flex items-center gap-1.5 text-rose-700 font-extrabold text-xs uppercase tracking-[1.5px] mb-2 select-none">
              <svg className="w-4 h-4 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Common Traps to Skip
            </span>
            <ul className="space-y-4 list-none pl-0 my-0">
              <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-rose-100/50 transition-all duration-300 hover:bg-rose-50/50">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-500 shrink-0 mt-0.5 select-none border border-rose-100 shadow-2xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Making the idea too vague (for example: &quot;they are deep&quot;) without
                  a scene-level behavior.
                </span>
              </li>
              
              <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-rose-100/50 transition-all duration-300 hover:bg-rose-50/50">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-500 shrink-0 mt-0.5 select-none border border-rose-100 shadow-2xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Ignoring canon tone entirely unless your goal is a full AU rewrite.
                </span>
              </li>

              <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-rose-100/50 transition-all duration-300 hover:bg-rose-50/50">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-500 shrink-0 mt-0.5 select-none border border-rose-100 shadow-2xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Piling too many traits into one headcanon instead of focusing on
                  one strong emotional thread.
                </span>
              </li>

              <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-rose-100/50 transition-all duration-300 hover:bg-rose-50/50">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-500 shrink-0 mt-0.5 select-none border border-rose-100 shadow-2xs">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
                  Writing only concept notes but never testing the idea in dialogue
                  or action.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 mb-10 border-t border-[var(--color-border)] pt-12 mt-16">
          <h2 className="section__h2 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] text-center max-w-md mx-auto mb-10">
            Got questions about what headcanons are and how to use them? Discover simple, straightforward answers to the most common questions below.
          </p>

          <FaqAccordion items={faqs} />
        </section>
      </article>
    </>
  );
}
