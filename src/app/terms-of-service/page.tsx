import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Headcanon Generator",
  description: "Terms of service for Headcanon Space.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24 animate-fade-up prose-page">
      <h1>Terms of Service</h1>
      
      <div className="mt-8">
        <section>
          <p>
            Welcome to Headcanon Space. By accessing and using our website and its generator tools, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use our website.
          </p>
          <p>
            These terms are designed to keep the platform safe, creative, and accessible for everyone.
          </p>
        </section>

        <section>
          <h2>1. Intended Use and Purpose</h2>
          <p>
            The headcanon generators provided on this site are intended strictly for creative, inspirational, and entertainment purposes. They are designed to help writers, roleplayers, and fans brainstorm fictional scenarios.
          </p>
        </section>

        <section>
          <h2>2. Generated Content and User Responsibility</h2>
          <p>
            Headcanon Space operates on randomized code logic to instantly construct textual prompts. We do not guarantee the accuracy, originality, or appropriateness of every generated possibility.
          </p>
          <p>
            Since users can input their own character names and contexts, <strong>users are solely responsible for how they use and share the generated ideas</strong>. You agree not to use this tool to generate content that promotes hate speech, targeted harassment, or illegal activities.
          </p>
        </section>

        <section>
          <h2>3. Fair Use and Automation</h2>
          <p>
            We love that you use our tools to create! However, you agree to interact with the site manually. The use of automated bots, scrapers, or scripts to bulk-generate queries or overwhelm our servers is strictly prohibited and can result in access restrictions to maintain site performance for everyday users.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            The website's design, code, interface, and structural templates belong to Headcanon Space. However, we claim no ownership over the character names you input or the specific generated text output. You are free to take the generated prompt and incorporate it directly into your own creative fan-works, fiction, or roleplays.
          </p>
        </section>

        <section>
          <h2>5. Modifications to the Service</h2>
          <p>
            We reserve the right to update, modify, or discontinue any feature on the website at any time without prior notice. This includes adding new generator modes, updating the UI, or modifying these Terms of Service. Continued use of the site following any changes means you accept the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
