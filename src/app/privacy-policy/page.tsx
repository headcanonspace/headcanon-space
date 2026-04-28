import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Headcanon Generator",
  description: "Privacy policy for Headcanon Space.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24 animate-fade-up prose-page">
      <h1>Privacy Policy</h1>
      
      <div className="mt-8">
        <section>
          <p>
            At Headcanon Space, we respect your privacy and are committed to protecting it. Our philosophy is that basic creative tools should not require you to sacrifice your personal data.
          </p>
          <p>
            This Privacy Policy outlines how we handle information when you use our headcanon generators and web tools. By using this website, you agree to the practices described below.
          </p>
        </section>

        <section>
          <h2>Information We Don't Collect</h2>
          <p>
            This website does not require users to create an account, log in, or submit personal information (such as your name, email address, or phone number) to use any of our generators. 
          </p>
          <p>
            Furthermore, the names, scenarios, and prompts you type into our generators are processed locally in your browser whenever possible and are not permanently stored on our servers. Your creative ideas remain yours.
          </p>
        </section>

        <section>
          <h2>Cookies and Analytics</h2>
          <p>
            To keep the website running smoothly and analyze traffic, we use third-party analytics services. These tools collect non-personal, aggregated data, such as:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Browser type and settings</li>
            <li>Device type (mobile or desktop)</li>
            <li>General usage data (e.g., how many times a generator is used)</li>
          </ul>
          <p className="mt-4">
            This information is strictly used to improve our tools and ensure the site remains fast and accessible for everyone.
          </p>
        </section>

        <section>
          <h2>Third-Party Services and Ads</h2>
          <p>
            To keep Headcanon Space entirely free, we may use advertising networks (such as Google AdSense). These third-party providers may use cookies or similar tracking technologies to serve relevant ads based on your browsing behavior across the internet.
          </p>
          <p>
            You can control, manage, or disable these cookies at any time through your browser's security settings.
          </p>
        </section>

        <section>
          <h2>Updates to this Policy</h2>
          <p>
            We may occasionally update this Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to review this page periodically. Continued use of the website after any updates indicates your acceptance of the revised policy.
          </p>
        </section>
      </div>
    </div>
  );
}
