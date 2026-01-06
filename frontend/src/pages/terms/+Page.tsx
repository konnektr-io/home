import { Scale, FileText, AlertCircle, Shield, Users, Ban } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
              Terms of Service
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of the Konnektr platform and services.
              By using our platform, you agree to these terms.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: October 11, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-gradient-to-b from-brand-dark to-brand-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="h-6 w-6 text-brand-blue" />
                Terms Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-brand-blue mb-2">
                    You can:
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Use our platform for legitimate purposes</li>
                    <li>• Create and manage digital twins</li>
                    <li>• Export your data at any time</li>
                    <li>• Self-host our open-source software</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue mb-2">
                    You cannot:
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Use our services for illegal activities</li>
                    <li>• Attempt to compromise our systems</li>
                    <li>• Violate others' intellectual property</li>
                    <li>• Resell our services without permission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-brand-teal" />
                Acceptance of Terms
              </h2>

              <p className="text-muted-foreground mb-6">
                By accessing or using the Konnektr platform, websites, or
                services (collectively, "Services"), you agree to be bound by
                these Terms of Service ("Terms"). If you disagree with any part
                of these terms, you may not access or use our Services.
              </p>

              <p className="text-muted-foreground mb-6">
                These Terms apply to all visitors, users, and others who access
                or use our Services, whether you are accessing our hosted
                platform or using our open-source software.
              </p>
            </div>

            {/* Description of Service */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Description of Service
              </h2>

              <p className="text-muted-foreground mb-4">
                Konnektr provides an open-source digital twin platform that
                includes:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Digital twin creation and management tools</li>
                <li>Graph database services for storing twin data</li>
                <li>Data processing and workflow orchestration</li>
                <li>Analytics and visualization capabilities</li>
                <li>APIs and integrations for third-party systems</li>
              </ul>

              <p className="text-muted-foreground mb-6">
                Our Services may be accessed through our hosted platform or by
                self-hosting our open-source software. These Terms apply to both
                deployment methods.
              </p>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-400" />
                User Accounts
              </h2>

              <p className="text-muted-foreground mb-4">
                To access certain features of our Services, you may need to
                create an account. You agree to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>
                  Provide accurate and complete information during registration
                </li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your account information if it changes</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <p className="text-muted-foreground mb-6">
                You are responsible for maintaining the confidentiality of your
                account and password. Konnektr will not be liable for any loss
                or damage arising from your failure to comply with this security
                obligation.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-brand-teal" />
                Acceptable Use
              </h2>

              <p className="text-muted-foreground mb-4">
                You agree to use our Services only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Infringe upon the rights of others, including intellectual
                  property rights
                </li>
                <li>
                  Transmit any malicious code, viruses, or harmful content
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users' accounts
                </li>
                <li>Use our Services to spam, harass, or abuse others</li>
                <li>Interfere with or disrupt our Services or servers</li>
                <li>
                  Reverse engineer or attempt to extract source code (except for
                  open-source components)
                </li>
                <li>
                  Use our Services for competitive analysis without prior
                  written consent
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                Open Source Components
              </h3>
              <p className="text-muted-foreground mb-4">
                Konnektr's core platform is open-source software released under
                the Apache License 2.0. You may use, modify, and distribute this
                software in accordance with the license terms.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">
                Your Content
              </h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of any content, data, or digital twins you
                create using our Services. By using our Services, you grant us a
                limited license to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>
                  Host, store, and process your content to provide our Services
                </li>
                <li>
                  Make backup copies for security and reliability purposes
                </li>
                <li>
                  Access your content for support and troubleshooting when
                  requested
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                Trademarks
              </h3>
              <p className="text-muted-foreground mb-6">
                The Konnektr name, logo, and related marks are trademarks of
                Konnektr. You may not use these marks without our prior written
                permission, except as permitted by applicable law.
              </p>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Privacy and Data Protection
              </h2>

              <p className="text-muted-foreground mb-6">
                Your privacy is important to us. Our collection, use, and
                protection of your personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by
                reference.
              </p>

              <p className="text-muted-foreground mb-6">
                For self-hosted deployments, you are responsible for complying
                with applicable data protection laws and regulations in your
                jurisdiction.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Payment Terms
              </h2>

              <p className="text-muted-foreground mb-4">
                Some of our Services are provided on a paid subscription basis.
                If you choose a paid plan:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>
                  Fees are billed in advance and are non-refundable except as
                  required by law
                </li>
                <li>
                  You authorize us to charge your payment method for all fees
                </li>
                <li>Prices may change with 30 days' notice</li>
                <li>
                  Your subscription will automatically renew unless cancelled
                </li>
                <li>You may cancel your subscription at any time</li>
              </ul>

              <p className="text-muted-foreground mb-6">
                Free tiers and open-source software remain available regardless
                of paid subscription status.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Service Availability
              </h2>

              <p className="text-muted-foreground mb-6">
                We strive to maintain high availability for our hosted Services,
                but we do not guarantee uninterrupted service. We may experience
                downtime due to maintenance, updates, or unforeseen
                circumstances.
              </p>

              <p className="text-muted-foreground mb-6">
                We reserve the right to modify, suspend, or discontinue any part
                of our Services with reasonable notice. For critical services,
                we will provide migration paths and export tools.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-orange-400" />
                Disclaimers
              </h2>

              <p className="text-muted-foreground mb-6">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM
                ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>

              <p className="text-muted-foreground mb-6">
                We do not warrant that our Services will be error-free, secure,
                or available at all times. You use our Services at your own
                risk.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Limitation of Liability
              </h2>

              <p className="text-muted-foreground mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KONNEKTR SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR
                SERVICES.
              </p>

              <p className="text-muted-foreground mb-6">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR
                RELATING TO OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US
                IN THE TWELVE MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Indemnification
              </h2>

              <p className="text-muted-foreground mb-6">
                You agree to indemnify and hold harmless Konnektr, its officers,
                directors, employees, and agents from any claims, damages,
                losses, or expenses (including reasonable attorney fees) arising
                from your use of our Services, violation of these Terms, or
                infringement of any third-party rights.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Ban className="h-6 w-6 text-red-400" />
                Termination
              </h2>

              <p className="text-muted-foreground mb-6">
                You may terminate your account at any time by following the
                cancellation process in your account settings. Upon termination,
                your right to access our Services will cease immediately.
              </p>

              <p className="text-muted-foreground mb-6">
                We may terminate or suspend your account and access to our
                Services at any time, with or without notice, for conduct that
                we believe violates these Terms or is harmful to other users,
                us, or third parties.
              </p>

              <p className="text-muted-foreground mb-6">
                Upon termination, we will provide reasonable opportunity for you
                to export your data, subject to technical limitations and legal
                requirements.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Governing Law and Disputes
              </h2>

              <p className="text-muted-foreground mb-6">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law provisions.
              </p>

              <p className="text-muted-foreground mb-6">
                Any disputes arising from these Terms or our Services shall be
                resolved through binding arbitration in accordance with the
                rules of [Arbitration Organization], except that either party
                may seek injunctive relief in court for intellectual property
                violations.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Changes to These Terms
              </h2>

              <p className="text-muted-foreground mb-6">
                We may modify these Terms at any time. If we make material
                changes, we will notify you by:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Posting the updated Terms on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice in our platform</li>
              </ul>

              <p className="text-muted-foreground mb-6">
                Your continued use of our Services after any changes constitutes
                acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="text-muted-foreground mb-6">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@konnektr.io"
                    className="text-brand-teal hover:underline"
                  >
                    info@konnektr.io
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/konnektr-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:underline"
                  >
                    https://github.com/konnektr-io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
