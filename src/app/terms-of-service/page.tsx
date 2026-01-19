import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | SEASmartz',
  description: 'Terms of Service for SEASmartz - Read our terms and conditions for using our IT services and software development solutions.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-muted to-background py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Last updated: November 18, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          
          {/* Agreement to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Agreement to Terms
            </h2>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-6">
              <p className="text-card-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (whether personally or on behalf of an entity) and <strong>SEA Smartz</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of our website, services, and software development solutions.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing our website or engaging our services, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our services.
            </p>
            <div className="bg-card border border-[#ff7700]/30 rounded-lg p-4">
              <p className="text-card-foreground">
                <strong className="text-[#ff7700]">Important:</strong> We recommend that you print a copy of these Terms for future reference.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Services We Provide
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SEA Smartz provides comprehensive IT services and software development solutions, including but not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <svg className="w-5 h-5 text-[#ff7700] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Custom Software Development
                </h3>
                <p className="text-muted-foreground text-sm">Web applications, mobile apps, and enterprise solutions</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <svg className="w-5 h-5 text-[#ff7700] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  IT Consulting Services
                </h3>
                <p className="text-muted-foreground text-sm">Technical consulting and system architecture design</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <svg className="w-5 h-5 text-[#ff7700] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  UI/UX Design
                </h3>
                <p className="text-muted-foreground text-sm">User interface and experience design services</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <svg className="w-5 h-5 text-[#ff7700] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Maintenance & Support
                </h3>
                <p className="text-muted-foreground text-sm">Ongoing technical support and system maintenance</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Service availability, features, and delivery timelines will be outlined in individual project agreements or statements of work.
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              User Accounts and Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account with us or engage our services, you must provide accurate, complete, and current information. You are responsible for:
            </p>
            <div className="bg-muted rounded-lg p-6 mb-4">
              <ul className="text-muted-foreground space-y-2">
                <li>• Maintaining the confidentiality of your account credentials</li>
                <li>• All activities that occur under your account</li>
                <li>• Notifying us immediately of any unauthorized access</li>
                <li>• Ensuring compliance with all applicable laws and regulations</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Intellectual Property Rights
            </h2>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-6">
              <h3 className="font-semibold text-foreground mb-3">Our Intellectual Property</h3>
              <p className="text-card-foreground leading-relaxed">
                Unless otherwise indicated, all content, features, and functionality on our website and in our services—including but not limited to text, graphics, logos, software, code, and design—are owned by SEA Smartz and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-4">
              <h3 className="font-semibold text-foreground mb-3">Client Intellectual Property</h3>
              <p className="text-card-foreground leading-relaxed">
                Ownership of deliverables developed under specific project agreements will be governed by the terms of those individual contracts. Unless explicitly transferred in writing, all intellectual property rights remain with SEA Smartz until full payment is received and ownership is formally transferred.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our proprietary content without our express written permission.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Payment Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Payment terms for services will be outlined in individual project agreements. General payment conditions include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-3">Payment Methods</h3>
                <p className="text-muted-foreground">
                  We accept bank transfers, online payment gateways, and other methods as agreed upon in writing.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-3">Late Payments</h3>
                <p className="text-muted-foreground">
                  Late payments may incur additional charges and could result in suspension of services until payment is received.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-3">Refund Policy</h3>
                <p className="text-muted-foreground">
                  Refunds will be considered on a case-by-case basis as outlined in individual service agreements.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-3">Pricing Changes</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify our pricing with reasonable notice to existing clients.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Prohibited Activities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not access or use our services for any purpose other than that for which we make them available. Prohibited activities include:
            </p>
            <div className="bg-muted rounded-lg p-6">
              <ul className="text-muted-foreground space-y-2">
                <li>• Attempting to bypass any security measures or access restrictions</li>
                <li>• Engaging in any automated use of the system without permission</li>
                <li>• Copying, adapting, or reverse engineering any part of our services</li>
                <li>• Using our services for any illegal or unauthorized purpose</li>
                <li>• Interfering with or disrupting our services or servers</li>
                <li>• Impersonating any person or entity or misrepresenting affiliation</li>
                <li>• Harassing, abusing, or harming another person or entity</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Limitation of Liability
            </h2>
            <div className="bg-card border border-[#ff7700]/30 rounded-lg p-6 mb-4">
              <p className="text-card-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law, SEA Smartz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-7">
                <li>Your access to or use of (or inability to access or use) our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Any other matter relating to our services</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability for any claims under these Terms shall not exceed the amount paid by you to SEA Smartz for the specific services in question during the twelve (12) months prior to the claim.
            </p>
          </section>

          {/* Warranties and Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Warranties and Disclaimers
            </h2>
            <div className="bg-card border-l-4 border-[#ff7700] p-6 rounded-r-lg mb-4">
              <h3 className="font-semibold text-foreground mb-3">Our Commitment</h3>
              <p className="text-card-foreground leading-relaxed">
                We strive to provide high-quality services and will make commercially reasonable efforts to ensure our deliverables meet agreed-upon specifications.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">&quot;As Is&quot; and &quot;As Available&quot; Basis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, regarding the operation or availability of our services, or that our services will be uninterrupted, timely, secure, or error-free.
              </p>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that in the course of providing services, we may have access to confidential information. We commit to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-card-foreground">• Keeping all client information confidential</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-card-foreground">• Using information only for service delivery</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-card-foreground">• Implementing appropriate security measures</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-card-foreground">• Not disclosing information to third parties</p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Termination
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to our services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
            </p>
            <div className="bg-card border-l-4 border-[#ff7700] p-4 rounded-r-lg">
              <p className="text-card-foreground leading-relaxed">
                Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in Mohali, Punjab, India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 border-b-2 border-[#ff7700]/20 pb-2">
              Changes to These Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
            <div className="bg-card border border-[#ff7700]/30 rounded-lg p-4">
              <p className="text-card-foreground">
                <strong className="text-[#ff7700]">Your Responsibility:</strong> By continuing to access or use our services after revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-muted to-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions or concerns about these Terms of Service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="mailto:info@seasmartz.com" 
                className="inline-flex items-center px-6 py-3 bg-[#ff7700] hover:bg-[#ff7700]/90 text-black rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@seasmartz.com
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700]/10 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
