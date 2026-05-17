import type { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback | Headcanon Generator",
  description: "Help us improve Headcanon Space! Send us your ideas, feature requests, or report bugs directly to our development team.",
  alternates: {
    canonical: "https://headcanonspace.com/feedback/",
  },
};

export default function FeedbackPage() {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24 animate-fade-up">
      <div className="text-center mb-10 max-w-[620px] mx-auto">
        <p className="section__label">Help Us Improve</p>
        <h1 className="text-[32px] md:text-[40px] font-normal leading-tight tracking-[-1px] mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
          Share Your Feedback
        </h1>
        <p className="section__lead mx-auto text-center" style={{ color: "var(--color-ink-3)", fontSize: "16px" }}>
          We love hearing from our community! Tell us what features you want, what you love, or report any bugs you find.
        </p>
      </div>

      <div className="max-w-[620px] mx-auto">
        <FeedbackForm />
      </div>

      <hr className="my-16" style={{ borderColor: "var(--color-border)" }} />

      <div className="prose-page mt-12 space-y-8" style={{ color: "var(--color-ink-2)" }}>
        <section className="space-y-4">
          <h2 className="text-[22px] font-semibold tracking-[-0.5px]" style={{ color: "var(--color-text)" }}>
            Why Your Feedback Shapes the Future of Headcanon Space
          </h2>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            Every generator on this website was built to solve a real creative hurdle. Whether it is character development, relationship pacing, or sudden scenario generation, our goal is to provide authors and roleplayers with tools that feel specific, organic, and inspiring. Because we built Headcanon Space for the community, your insights are the primary drivers of our updates.
          </p>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            When you submit feedback, it does not just sit in an inbox. It goes directly to our development queue. We review every feature request, bug report, and general suggestion to determine how we can refine our generation algorithms, expand our database of tropes, and make the interface smoother on every screen size.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[22px] font-semibold tracking-[-0.5px]" style={{ color: "var(--color-text)" }}>
            What Makes a Great Bug Report?
          </h2>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            If you have run into a glitch, an error, or a styling quirk, we want to squash it immediately. To help us track down and fix the issue quickly, here are a few specific details that are helpful to include in your message:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[15px] pl-2" style={{ color: "var(--color-ink-3)" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Where it happened:</strong> Mention which specific tool you were using (e.g., the Relationship Generator or the Random Generator) and what filters or inputs were active at the time.</li>
            <li><strong style={{ color: "var(--color-text)" }}>What went wrong:</strong> Describe the unexpected behavior clearly. For example, did the sentence generator output incomplete phrases, did the styling break on a specific phone resolution, or did buttons stop responding?</li>
            <li><strong style={{ color: "var(--color-text)" }}>Device & browser information:</strong> Let us know if you were on a phone, tablet, or desktop, and what browser you were using (Safari, Chrome, Firefox, etc.).</li>
            <li><strong style={{ color: "var(--color-text)" }}>Steps to reproduce:</strong> If the bug happens consistently after clicking certain configurations, outlining those quick steps allows us to reproduce it in our local test suite within minutes.</li>
          </ul>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            By providing clear details, you help us identify the root cause instantly, ensuring a cleaner experience for thousands of other creators who use this platform daily.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[22px] font-semibold tracking-[-0.5px]" style={{ color: "var(--color-text)" }}>
            Suggesting New Generators & Fandom Tropes
          </h2>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            Are you looking for a highly specific type of generator? Our current line-up includes dedicated tools for Character traits, Relationship bonds, Scenarios, and Random prompts, but we are always eager to expand.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[15px] pl-2" style={{ color: "var(--color-ink-3)" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Fandom-Specific Needs:</strong> If you belong to a particular fandom that has deep, unique tropes (e.g., sci-fi anomalies, modern high-school alternate universes, or historic fantasy settings), tell us! We can build dedicated vocabulary templates to capture those specific moods.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Algorithmic Tropes:</strong> If you feel the sentence structures are missing key creative styles (such as rivals-to-lovers tension, slow-burn emotional details, or comedic banter), drop a suggestion. Our team constantly updates our database files to add rich vocabulary.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Workflow Tools:</strong> Do you want exportable formats, dark mode overrides, or quick character card saves? Share your tool integration requests so we can design premium utilities that speed up your writing workflow.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[22px] font-semibold tracking-[-0.5px]" style={{ color: "var(--color-text)" }}>
            Our Roadmap & Review Process: What to Expect
          </h2>
          <p className="leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
            Because Headcanon Space is maintained by a small, dedicated team of creators, we process submissions on a rolling weekly schedule.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[15px] pl-2" style={{ color: "var(--color-ink-3)" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Logging & Review:</strong> All submitted form responses are categorized automatically by our dashboard. Bug reports are prioritized immediately to keep the platform fully stable, while feature suggestions are reviewed during weekly creative planning sessions.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Community Feasibility:</strong> We evaluate new generator ideas based on community demand, creative value, and layout simplicity. We love keeping our tools completely free, clean, and blazingly fast, so we choose feature additions that fit within this minimalist, high-performance aesthetic.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Rollout & Updates:</strong> When a new trope set or generator goes live, we push updates directly to our main system. We regularly share update logs so the community knows which community ideas have been brought to life.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
