import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Headcanon Generator",
  description: "Get in touch with us for any questions, suggestions, or feedback.",
  alternates: {
    canonical: "https://headcanonspace.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24 animate-fade-up prose-page">
      <h1>Contact</h1>
      
      <div className="mt-8">
        <section>
          <p className="text-lg" style={{ color: "var(--color-ink-2)" }}>
            We value your input! Whether you have a question, a brilliant idea for a new generator, or just want to say hi, we're always happy to hear from our users.
          </p>
        </section>

        <section>
          <h2>How Can We Help?</h2>
          <p>
            Since Headcanon Space is managed by a very small, passionate team, we prioritize specific types of feedback:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4">
            <li><strong>🐞 Bug Reports:</strong> Is a generator spitting out broken sentences? Did styling break on your phone? Let us know!</li>
            <li><strong>✨ Feature Requests:</strong> Want a specific fandom trope added? A new color scheme? A dedicated "Found Family" generator? Drop your ideas.</li>
            <li><strong>💬 General Feedback:</strong> Tell us what you love or what you feel is missing from the experience.</li>
          </ul>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>
            The absolute best way to reach us is via email. We read every single message.
          </p>
          <div className="mt-6 p-6 rounded-xl flex items-center gap-4" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <span className="flex items-center justify-center w-12 h-12 rounded-full text-xl" style={{ background: "var(--color-primary-lt)", color: "var(--color-primary)" }}>✉️</span>
            <div>
              <p className="font-medium text-[16px] cursor-pointer hover:underline" style={{ color: "var(--color-text)" }}>your@email.com</p>
              <p className="text-[14px]" style={{ color: "var(--color-ink-4)" }}>We aim to respond within 24-48 hours.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="prose-callout mt-8 text-[14px]">
            Please note: As a free platform, we cannot always respond immediately. However, if your email includes a bug report or a feature suggestion, rest assured it has been logged and we are actively looking into it!
          </div>
        </section>
      </div>
    </div>
  );
}
