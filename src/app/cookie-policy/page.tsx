import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | SeaSmartz',
  description: 'Cookie Policy for SeaSmartz - Learn how we use cookies and similar technologies, and how you can control your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-muted to-background py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Last updated: November 18, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Introduction
            </h2>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-6">
              <p className="text-card-foreground leading-relaxed">
                This Cookie Policy explains how <strong>SEA Smartz</strong> (“we,” “us,” or “our”) uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By continuing to browse our site, you consent to our use of cookies in accordance with this policy unless you have disabled them.
            </p>
          </section>

          {/* What are Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              What Are Cookies?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small data files placed on your device when you visit a website. They are widely used to make websites work, or to work more efficiently, as well as to provide reporting information and personalize services.
            </p>
          </section>
          
          {/* How We Use Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              How We Use Cookies
            </h2>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-6">
              <p className="text-card-foreground leading-relaxed">
                We use cookies to:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-7">
                <li>Remember your preferences and settings</li>
                <li>Enable core site functionality and security</li>
                <li>Analyze how you interact with our website</li>
                <li>Provide a personalized experience</li>
                <li>Monitor performance and improve our site</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Some cookies are set by us (first-party cookies), while others are set by third parties (third-party cookies) to enable features like embedded content or analytics.
            </p>
          </section>
          
          {/* Types of Cookies We Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be switched off in our systems.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our site by collecting and reporting information anonymously.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-2">Preference Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies enable enhanced functionality and personalization, such as remembering language preferences.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies may be set through our site by external services to provide additional features or to serve ads.
                </p>
              </div>
            </div>
          </section>
          
          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Managing Cookies & Your Choices
            </h2>
            <p className="text-muted-foreground mb-4">
              You can manage your cookie preferences by changing the settings in your browser. Note that disabling some types of cookies may impact your site experience and the services we are able to offer.
            </p>
            <div className="bg-card border-l-4 border-[#ff7700] p-4 rounded-r-lg">
              <h4 className="font-semibold text-foreground mb-2">How to Control Cookies</h4>
              <ul className="text-card-foreground list-disc pl-7 space-y-2">
                <li>Most browsers accept cookies by default but allow you to block or delete them.</li>
                <li>Refer to your browser&apos;s help section for instructions on managing cookies.</li>
                <li>You can often opt out of third-party cookies via their own opt-out mechanisms or privacy tools.</li>
              </ul>
            </div>
          </section>
          
          {/* Updates and Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Policy Updates
            </h2>
            <p className="text-muted-foreground mb-4">
              We may update this Cookie Policy from time to time for operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
            </p>
            <div className="bg-card border border-[#ff7700]/30 rounded-lg p-4">
              <p className="text-card-foreground">
                <strong className="text-[#ff7700]">Contact:</strong> For any questions or concerns regarding our Cookie Policy, reach out to us at <Link href="mailto:info@seasmartz.com" className="underline">info@seasmartz.com</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
