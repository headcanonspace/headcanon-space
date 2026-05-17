import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Headcanon Generator",
  description: "Learn more about Headcanon Space and our simple, fast generator tools.",
  alternates: {
    canonical: "https://headcanonspace.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Headcanon Space",
            "url": "https://headcanonspace.com",
            "description": "Free headcanon generator tools for fandom writers and roleplayers."
          })
        }}
      />
      <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24 animate-fade-up prose-page">
        <h1>About Headcanon Space</h1>
        
        <div className="mt-8">
          <section>
            <p>
              <strong>Welcome to Headcanon Space</strong> - your go-to online tool for generating creative, fandom-inspired headcanons. Our mission is simple: to provide writers, roleplayers, and creators with a fun, fast, and easy-to-use platform to explore unique story settings and character dynamics.
            </p>
            <p>
              We built this completely free, web-based tool because we wanted everyone to have instant access to storytelling inspiration without needing to sign up, log in, or navigate complicated interfaces.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our goal is to make creative writing prompts and character building accessible to everyone. We believe that brainstorming shouldn't be a tedious process. Whether you are developing a new OC (original character), exploring a dynamic between your favorite ship, or simply curing writer's block, you should be able to spark new ideas in seconds.
            </p>
            <p>
              We focus on giving you a fast, clear, and focused way to generate creative ideas online. No paywalls, no clutter - just a straightforward generator that works seamlessly whenever inspiration strikes.
            </p>
          </section>

          <section>
            <h2>Why We Built This Tool</h2>
            <p>
              Writers and roleplayers often run into the same problem: they want to explore a new scenario, but they hit a creative roadblock. Finding good prompts online usually involves scrolling through endless forums or social media threads.
            </p>
            <p>
              We built Headcanon Space so anyone could press a button and immediately get randomized, specific prompts tailored to their storytelling needs.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>No login required:</strong> Start generating ideas instantly without any friction.</li>
              <li><strong>Four distinct generators:</strong> Choose between Character, Relationship, Scenario, and Random modes.</li>
              <li><strong>Unlimited generations:</strong> Discover infinite unique prompt combinations for free.</li>
              <li><strong>Mobile-friendly design:</strong> The site works flawlessly on phones, tablets, and desktops.</li>
              <li><strong>Privacy first:</strong> We don't save your custom character names or personal story inputs.</li>
            </ul>
          </section>

          <section>
            <h2>Commitment to Free Tools</h2>
            <p>
              We strongly believe that creative tools for the fandom community should remain free. Headcanon Space is, and always will be, completely free to use. Keeping the tool fast, accessible, and simple is our deliberate choice.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
