import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50 Headcanon Ideas for Any Character or Fandom",
  description: "50 creative headcanon ideas for characters, relationships, and scenarios. Use as writing prompts for fanfiction, roleplay, or OC development.",
  alternates: {
    canonical: "https://headcanonspace.com/blog/headcanon-ideas/",
  },
  openGraph: {
    title: "50 Headcanon Ideas for Any Character or Fandom",
    description: "50 creative headcanon ideas for characters, relationships, and scenarios. Use as writing prompts for fanfiction, roleplay, or OC development.",
    url: "/blog/headcanon-ideas/",
  },
};

export default function HeadcanonIdeasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "50 Headcanon Ideas for Any Character or Fandom",
    "author": {
      "@type": "Organization",
      "name": "Headcanon Space Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Headcanon Space",
      "url": "https://headcanonspace.com"
    },
    "datePublished": "2026-05-29",
    "dateModified": "2026-05-29",
    "url": "https://headcanonspace.com/blog/headcanon-ideas/",
    "description": "50 creative headcanon ideas for characters, relationships, and scenarios across any fandom."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section Container (Wide Layout) */}
      <section className="mx-auto max-w-[1100px] px-6 pt-6 pb-12 md:pt-12 md:pb-16 relative">
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

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-16">
          <div className="flex-1 text-left space-y-5 flex flex-col justify-center pr-0 md:pr-8">
            <div className="space-y-4">
              <p className="text-[10px] font-extrabold tracking-[2.5px] uppercase text-[var(--color-primary)]">
                Writing Prompts
              </p>

              <h1
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                50 Headcanon Ideas for Any Character or Fandom
              </h1>

              <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
                50 creative headcanon ideas for characters, relationships, and scenarios. Use as writing prompts for fanfiction, roleplay, or OC development.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] font-medium pt-4 border-t border-[var(--color-border)] max-w-md">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 font-serif">
                HT
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="font-bold text-[var(--color-text)]">By Headcanon Space Team</span>
                <span className="text-slate-300">·</span>
                <span>May 29, 2026</span>
              </div>
            </div>
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
                  src="/images/blog/headcanon-ideas.svg"
                  alt="50 Headcanon Ideas Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-[740px] px-6 pb-20 relative">
        <section className="relative border-l-4 border-[var(--color-primary)] bg-slate-50 p-6 sm:p-8 rounded-r-3xl rounded-l-md shadow-xs mb-16 transition-all hover:bg-slate-100/70">
          <p
            className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="float-left mr-3.5 mt-1.5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white text-3xl font-extrabold font-serif shadow-xs select-none">
              S
            </span>
            ometimes the best headcanon ideas are ones you did not come up with yourself. Use this list as a starting point - pick the ones that fit, adapt the ones that almost fit, and ignore the ones that do not. Every item here is specific enough to write from but flexible enough to fit almost any character in any fandom.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="space-y-5 mb-16 relative pl-0 md:pl-6 border-l-0 md:border-l-2 border-slate-100">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-[var(--color-primary)] mb-1.5">
              Category 01
            </span>
            <h2 className="section__h2 mb-4">
              Character Headcanon Ideas
            </h2>
          </div>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base mb-8">
            These focus on what a character does - habits, routines, and small patterns of behavior.
          </p>
          
          <div className="space-y-6">
            {[
              "They always apologize for things that are not their fault and never for things that are.",
              "They keep a list - of debts, of names, of things they plan to say one day. The list is never finished.",
              "They laugh at exactly the wrong moment. Not because they find it funny. Because discomfort makes them nervous.",
              "They always arrive early and spend the extra time watching the door. They tell themselves it is just a habit.",
              "They memorize exits. Every room, every building, every unfamiliar place. They stopped noticing they do it years ago.",
              "They never finish the last bite of anything. Not from habit. From something older than that - something they cannot name.",
              "They always face the door when sitting anywhere. Coffee shops, waiting rooms, classrooms. Always.",
              "They rehearse conversations before they happen. The real ones never go the way they planned. They rehearse them again afterward.",
              "They hold their breath when walking past certain buildings. They have never told anyone which ones or why.",
              "They give very specific compliments. Not 'you did well' - but the exact thing you did, named precisely, at the exact moment it happened.",
              "They never ask what someone meant. They decide what it meant and carry that version quietly for years.",
              "They always leave a situation with one thing unsaid. Not by accident.",
              "They know which floorboards creak in every place they have ever lived. They use that knowledge more than they admit.",
              "They write things down and then never look at them again. The writing is the point. Not the remembering.",
              "They make themselves useful in a crisis so that no one has time to ask if they are fine.",
            ].map((idea, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <span className="text-3xl font-serif font-black text-indigo-100 transition-colors group-hover:text-[var(--color-primary)] select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-slate-700 leading-relaxed pt-1.5 font-medium">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-5 mb-16 relative pl-0 md:pl-6 border-l-0 md:border-l-2 border-slate-100">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-[var(--color-primary)] mb-1.5">
              Category 02
            </span>
            <h2 className="section__h2 mb-4">
              Emotional Headcanon Ideas
            </h2>
          </div>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base mb-8">
            These explore how a character processes emotion - what they feel and what they hide.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "They have never once asked for help and convinced themselves this is a strength.",
              "They still think about a conversation from three years ago. It ended badly. They have rewritten it two hundred times.",
              "They do not cry in front of people. They wait until they are driving, or showering, or somewhere the sound will not carry.",
              "They have a version of themselves they perform for different people. They are not sure which version is real anymore.",
              "They get very quiet right before they say something they cannot take back.",
              "They apologize with actions, not words. It is a flaw they have dressed up as a personality trait.",
              "They feel things first and understand them weeks later, alone, in the middle of something unrelated.",
              "They are always slightly braced for bad news. Good news takes longer to land.",
              "They have one memory they return to when things are bad. They have never told anyone what it is.",
              "They do not know how to accept care without immediately trying to earn it.",
            ].map((idea, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl transition-all hover:bg-slate-100/80 hover:border-indigo-100">
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-[1.5px] block mb-2">
                  Idea {index + 16}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-5 mb-16 relative pl-0 md:pl-6 border-l-0 md:border-l-2 border-slate-100">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-[var(--color-primary)] mb-1.5">
              Category 03
            </span>
            <h2 className="section__h2 mb-4">
              Headcanon Ideas for Ships and Relationships
            </h2>
          </div>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base mb-8">
            These work for ships, friendships, rivalries, or family dynamics.
          </p>
          
          <div className="space-y-6">
            {[
              "One of them always walks on the outside of the pavement. The other noticed years ago and never said anything.",
              "They argue constantly but have never once let the other leave without knowing they were safe.",
              "One of them learned the other's coffee order without being told. They have never mentioned knowing it.",
              "They have a disagreement they have been having since the beginning. Neither of them wants to be the one who ends it.",
              "One of them always checks that the other got home. They frame it as something else. It is never something else.",
              "They have a word - just one - that means 'I need to leave'. The other always hears it.",
              "They never talk about the thing that changed everything. They both know exactly which moment it was.",
              "One of them is better at goodbyes. The other has never figured out how to start them.",
              "They have separate playlists they have never shared that were made entirely for the other person.",
              "One of them always knows when the other is lying. They choose when to say so very carefully.",
            ].map((idea, index) => (
              <div key={index} className="flex flex-col sm:flex-row bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="bg-slate-50 px-4 py-3 sm:w-20 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-200/80">
                  <span className="text-xs font-bold text-slate-400">#{index + 26}</span>
                </div>
                <div className="p-4 sm:p-5 flex-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-100/50"></div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium pl-2">
                    {idea}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-indigo-50/30 rounded-xl border border-indigo-100/50">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base text-center">
              Generate more with the <Link href="/relationship-headcanon-generator/" className="text-[var(--color-primary)] font-bold hover:underline">relationship headcanon generator</Link>.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="space-y-5 mb-16 relative pl-0 md:pl-6 border-l-0 md:border-l-2 border-slate-100">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-[var(--color-primary)] mb-1.5">
              Category 04
            </span>
            <h2 className="section__h2 mb-4">
              Scenario Headcanon Ideas
            </h2>
          </div>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base mb-8">
            These place characters in specific moments - situations that reveal who they really are.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "During a power cut, they sit in the dark for an hour before admitting they do not know how to be still.",
              "They volunteer for the dangerous assignment not because they are brave but because they do not want anyone else to have to go.",
              "In a waiting room with strangers, they make up entire lives for everyone else in the room. They are always at least partly right.",
              "When they think no one is watching, they talk to objects. Not out of habit. Out of something they have not named.",
              "The first time something goes wrong, they fix it. The second time, they ask why it keeps happening.",
              "In an argument they are losing, they go very quiet. That is when they are most dangerous.",
              "Given one hour with nothing to do, they spend the first twenty minutes deciding what to do with it.",
              "When they have to deliver bad news, they practice in the mirror. It never helps.",
              "They are the person everyone calls in a crisis. They have never once called anyone else in theirs.",
              "On the last day of something, they always look back once. Just once. Then they do not look again.",
            ].map((idea, index) => (
              <div key={index} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-xs transition-all hover:bg-slate-50">
                <span className="text-[9px] font-extrabold text-[var(--color-primary)] uppercase tracking-[1.5px] block mb-2">
                  Scenario {index + 36}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {idea}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base text-center">
              Try the <Link href="/scenario-headcanon-generator/" className="text-[var(--color-primary)] font-bold hover:underline">scenario headcanon generator</Link> for more situation-based prompts.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="space-y-5 mb-16 relative pl-0 md:pl-6 border-l-0 md:border-l-2 border-slate-100">
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-[var(--color-primary)] mb-1.5">
              Category 05
            </span>
            <h2 className="section__h2 mb-4">
              Random and Unexpected Headcanon Ideas
            </h2>
          </div>
          
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base mb-8">
            These do not fit a category - that is what makes them useful.
          </p>
          
          <div className="space-y-4">
            {[
              "They know every exit in every room they walk into. They stopped noticing they do it years ago.",
              "Their handwriting changes depending on their mood. Only one person has ever figured out what each version means.",
              "They have a specific order for how they do everything. If the order is interrupted, the whole day feels wrong.",
              "They remember the exact clothes people were wearing during important conversations. They do not know why.",
              "They have never thrown away a note someone wrote them. Not one.",
            ].map((idea, index) => (
              <div key={index} className="relative bg-indigo-50/20 p-6 rounded-2xl border border-indigo-100/30 transition-all hover:bg-indigo-50/40">
                <span className="absolute -top-3 left-4 text-5xl font-serif text-[var(--color-primary)] opacity-20 select-none">
                  “
                </span>
                <div className="flex gap-4">
                  <span className="text-xs font-bold text-slate-400 mt-1">{index + 46}</span>
                  <p className="text-slate-800 font-medium italic text-sm sm:text-base leading-relaxed">
                    {idea}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200/60">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base text-center">
              For instant random ideas with no input needed, try the <Link href="/random-headcanon-generator/" className="text-[var(--color-primary)] font-bold hover:underline">random headcanon generator</Link>.
            </p>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="mb-16">
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 sm:p-10 relative overflow-hidden group transition-all hover:bg-indigo-50/70">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[var(--color-primary)] text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-sm shrink-0 font-serif">
                  OC
                </div>
                <h2 className="section__h2 mb-0 border-none">
                  Headcanon Ideas for OCs
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                    Original characters need these headcanon ideas more than canon characters do. Canon characters have an established personality to interpret. OCs have nothing yet - every trait is a choice. Use this list to find the one specific behavior that makes your OC feel real. The detail that makes a reader think 'yes, I know this person.'
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-indigo-100/80 shadow-xs relative">
                  <span className="absolute -top-3 right-6 bg-indigo-100 text-[var(--color-primary)] px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest rounded-md border border-indigo-200/50">Pro Tip</span>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    These headcanons ideas work for any OC regardless of setting - fantasy, sci-fi, modern, fandom insert. Pick one behavior from the list and write one scene where it appears. For ideas tailored to your OC's specific name, the <Link href="/oc-headcanon-generator/" className="text-[var(--color-primary)] font-bold hover:underline">oc headcanon generator</Link> weaves your character's name into every result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="mb-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Left large graphic */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-full max-w-[240px]">
                 <div className="absolute inset-0 bg-slate-900 rounded-3xl transform rotate-6 scale-105 opacity-5"></div>
                 <div className="bg-slate-900 text-white p-8 rounded-3xl relative shadow-md flex flex-col items-center justify-center aspect-square text-center">
                    <svg className="w-12 h-12 text-indigo-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    <span className="font-serif text-3xl font-bold tracking-tight">Execution</span>
                    <span className="text-[10px] uppercase tracking-[2px] text-slate-400 mt-3 font-extrabold">Over Explanation</span>
                 </div>
              </div>
            </div>

            {/* Right content */}
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <span className="block text-[10px] font-extrabold uppercase tracking-[2.5px] text-slate-400 mb-2">
                  Final Step
                </span>
                <h2 className="section__h2 mb-4">
                  How to Use These Ideas
                </h2>
              </div>
              
              <div className="space-y-5 relative border-l-2 border-[var(--color-primary)] pl-6 py-2">
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base">
                  Pick one and write a single scene around it. Do not try to explain the headcanon - show it happening. One moment, one behavior, one specific detail in action.
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base">
                  For ideas tailored to a specific character name, the <Link href="/character-headcanon-generator/" className="text-[var(--color-primary)] font-bold hover:underline">character headcanon generator</Link> weaves your character's name into every result - so the output feels personal to your character, not generic.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
