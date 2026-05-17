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
    <div className="mx-auto max-w-[620px] px-6 py-16 md:py-24 animate-fade-up">
      <div className="text-center mb-10">
        <p className="section__label">Help Us Improve</p>
        <h1 className="text-[32px] md:text-[40px] font-normal leading-tight tracking-[-1px] mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
          Share Your Feedback
        </h1>
        <p className="section__lead mx-auto text-center" style={{ color: "var(--color-ink-3)", fontSize: "16px" }}>
          We love hearing from our community! Tell us what features you want, what you love, or report any bugs you find.
        </p>
      </div>

      <FeedbackForm />
    </div>
  );
}
