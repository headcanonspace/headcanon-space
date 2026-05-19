import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Headcanon vs Canon vs Fanfiction: What's the Difference?",
  description:
    "Confused about headcanon vs canon vs fanfiction? This guide explains each term clearly with examples so you can use them correctly in fandom discussions.",
  alternates: {
    canonical: "https://headcanonspace.com/blog/headcanon-vs-canon/",
  },
  openGraph: {
    title: "Headcanon vs Canon vs Fanfiction: What's the Difference?",
    description:
      "Confused about headcanon vs canon vs fanfiction? This guide explains each term clearly with examples so you can use them correctly in fandom discussions.",
    url: "/blog/headcanon-vs-canon/",
  },
};

export default function HeadcanonVsCanonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://headcanonspace.com/blog/headcanon-vs-canon/#article",
        headline:
          "Headcanon vs Canon vs Fanfiction: What's the Difference?",
        description:
          "Confused about headcanon vs canon vs fanfiction? This guide explains each term clearly with examples so you can use them correctly in fandom discussions.",
        author: {
          "@type": "Person",
          name: "Headcanon Space Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Headcanon Space",
        },
        datePublished: "2026-05-27",
        mainEntityOfPage:
          "https://headcanonspace.com/blog/headcanon-vs-canon/",
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://headcanonspace.com/blog/headcanon-vs-canon/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is a headcanon the same as a theory?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A theory predicts something that will happen in canon. A headcanon fills in something canon left unsaid. Both are personal interpretations, but theories are about future events.",
            },
          },
          {
            "@type": "Question",
            name: "Can a headcanon become canon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Technically yes, if an author later confirms something fans believed. This is sometimes called canon confirmation of a headcanon. It is rare.",
            },
          },
          {
            "@type": "Question",
            name: "Is it okay to disagree with someone's headcanon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Headcanons are personal. Two fans can hold completely different headcanons about the same character and both be valid.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      question: "Is a headcanon the same as a theory?",
      answer:
        "A theory predicts something that will happen in canon. A headcanon fills in something canon left unsaid. Both are personal interpretations, but theories are about future events.",
    },
    {
      question: "Can a headcanon become canon?",
      answer:
        "Technically yes, if an author later confirms something fans believed. This is sometimes called canon confirmation of a headcanon. It is rare.",
    },
    {
      question: "Is it okay to disagree with someone's headcanon?",
      answer:
        "Yes. Headcanons are personal. Two fans can hold completely different headcanons about the same character and both be valid.",
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

        {/* Two-Column Hero with Image */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-[720px]">
            <div className="space-y-4">
              <p className="text-[10px] font-extrabold tracking-[2.5px] uppercase text-[var(--color-primary)]">
                Fandom Culture
              </p>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Headcanon vs Canon vs Fanfiction: What&apos;s the Difference?
              </h1>

              <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
                A clear breakdown of three terms every fan should know, with examples and a side-by-side comparison.
              </p>
            </div>

            {/* Author / Date Info */}
            <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] font-medium pt-4 mt-5 border-t border-[var(--color-border)] max-w-md">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 font-serif">
                HT
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="font-bold text-[var(--color-text)]">By Headcanon Space Team</span>
                <span className="text-slate-300">&bull;</span>
                <span>May 27, 2026</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[1200/630] rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 ring-4 ring-indigo-50/50 group">
            <div className="absolute inset-0 bg-indigo-900/5 mix-blend-multiply z-10 rounded-3xl" />
            <img 
              src="/images/blog/headcanon-vs-canon.svg" 
              alt="Conceptual illustration of Canon, Headcanon, and Fanfiction"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Main Article Content Container (Narrow, Readable Layout) */}
      <article className="mx-auto max-w-[740px] px-6 pb-20 relative">

        {/* Intro Section - Premium Editorial Callout Card */}
        <section className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs mb-12 transition-all hover:bg-slate-100/70">
          <p
            className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="float-left mr-3.5 mt-1.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white text-3xl font-extrabold font-serif shadow-xs select-none">
              T
            </span>
            These three words come up constantly in fandom spaces. People use them interchangeably, but they mean different things. Getting them wrong can make conversations confusing. Here is a clear breakdown so you can use each term correctly and confidently in any fandom discussion.
          </p>
        </section>

        {/* What Is Canon? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What Is Canon?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Canon is the official content. It is what actually happens in the source material: the books, films, shows, or games created by the original author or studio. If a character dies in the book, that death is canon. If two characters kiss in the show, that moment is canon. Canon is the agreed-upon baseline that all fan discussions start from. Everyone who has consumed the same source material shares the same canon, which is what makes it useful as common ground.
          </p>
        </section>

        {/* What Is a Headcanon? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What Is a Headcanon?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            A headcanon is a personal interpretation of something canon left open. It is not official. It is not confirmed by the source. It is what one fan believes to be true about a character, relationship, or world, and it only lives in their head unless they share it.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Example: a character is shown being brave in the show. A fan&apos;s headcanon might be that they are terrified of being alone and use bravery as a mask. Neither confirmed nor denied by canon.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            You can generate headcanons for any character using our free{" "}
            <Link
              href="/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              headcanon generator
            </Link>
            .
          </p>
        </section>

        {/* What Is Fanfiction? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What Is Fanfiction?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Fanfiction is a written story created by fans, set in an existing fictional world. It can follow canon events closely, ignore them completely, or explore an alternate universe. Fanfiction is more structured than a headcanon: it has scenes, dialogue, and plot. A headcanon might become the seed of a fanfiction, but the headcanon alone is just an idea.
          </p>
        </section>

        {/* A Side-by-Side Comparison */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            A Side-by-Side Comparison
          </h2>

          {/* Comparison Card Deck */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 items-stretch">
            {/* Canon Card */}
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
                <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-none pl-0 mt-4">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Official content</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Created by the original author</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Accepted by all fans</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Cannot be changed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Headcanon Card (Highlighted) */}
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
                <ul className="space-y-2 text-slate-800 text-sm sm:text-base font-semibold leading-relaxed list-none pl-0 mt-4">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Personal interpretation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Created by a fan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Accepted only by that fan (unless shared)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>Not official</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fanfiction Card */}
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
                <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-none pl-0 mt-4">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Creative written story</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Written by a fan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Built from the source material</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>Not official</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Do They Interact? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            How Do They Interact?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Fans move between all three constantly. A reader notices something canon left unexplained: why does this character always avoid crowded rooms? They form a headcanon to explain it. That headcanon becomes a backstory beat in the fanfiction they write. The fanfiction gets shared on AO3 or Wattpad. Other fans read it, adopt the headcanon as their own, and the cycle continues.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Canon creates the world. Headcanons fill in the gaps. Fanfiction brings them to life.
          </p>
        </section>

        {/* What About Ship Headcanons? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            What About Ship Headcanons?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            A ship headcanon applies the same logic to relationships. It is a personal interpretation of how two characters interact, feel about each other, or behave when together. Canon might show them as rivals. A fan&apos;s headcanon might be that they secretly respect each other deeply. If you want to explore ship dynamics, try the{" "}
            <Link
              href="/relationship-headcanon-generator/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              relationship headcanon generator
            </Link>
            .
          </p>
        </section>

        {/* Can You Have Headcanons About Original Characters? */}
        <section className="space-y-4 mb-10">
          <h2 className="section__h2 mb-4">
            Can You Have Headcanons About Original Characters?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Yes. Original characters (OCs) are not bound by canon at all, which means every choice you make about them is technically headcanon until you write it down. Many OC creators use headcanon generators to build up their character&apos;s personality before writing them into a story. Try the{" "}
            <Link
              href="/character-headcanon-generator/"
              className="underline decoration-indigo-300 hover:decoration-[var(--color-primary)] transition-all font-semibold text-[var(--color-primary)]"
            >
              character headcanon generator
            </Link>{" "}
            to get started.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4 mb-10 border-t border-[var(--color-border)] pt-12 mt-16">
          <h2 className="section__h2 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] text-center max-w-md mx-auto mb-10">
            Common questions about headcanon, canon, and fanfiction answered simply and directly.
          </p>

          <FaqAccordion items={faqs} />
        </section>

        {/* Premium Final Conversion Banner */}
        <div
          className="mt-16 p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-lg border"
          style={{
            background: "#0f1524",
            borderColor: "rgba(99,102,241,0.15)",
          }}
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-1">
              <span className="text-[9px] font-extrabold tracking-[2.5px] uppercase text-indigo-400 block mb-2">
                Start Creating
              </span>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ready to build your own headcanons?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                Turn your favorite characters into something deeper. Generate unique headcanons instantly with our free tools.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/character-headcanon-generator/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-all shadow-sm hover:scale-[1.02]"
              >
                <svg className="w-3.5 h-3.5 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Character Gen
              </Link>
              <Link
                href="/relationship-headcanon-generator/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all border border-slate-700 hover:border-slate-600 hover:scale-[1.02]"
              >
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Relationship Gen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
