import { Shield, Eye, Lock, Database, Users, FileCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
              Your Privacy, <span className="gradient-text">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in transparency about how we collect, use, and protect
              your information. This policy explains our privacy practices for
              the Konnektr platform and website.
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
            <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="h-6 w-6 text-brand-teal" />
                Privacy at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-brand-teal mb-2">
                    We collect minimal data:
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Email for account creation and communication</li>
                    <li>• Usage analytics to improve our platform</li>
                    <li>• Technical logs for security and performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-teal mb-2">
                    We never:
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Sell your personal information</li>
                    <li>• Share data without consent</li>
                    <li>• Track you across unrelated websites</li>
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
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-brand-blue" />
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-white mb-4">
                Information You Provide
              </h3>
              <p className="text-muted-foreground mb-4">
                When you create an account or use our services, you may provide:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Email address for account creation and communication</li>
                <li>Name and organization details (optional)</li>
                <li>Digital twin data and configurations you create</li>
                <li>Support inquiries and feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">
                Information We Collect Automatically
              </h3>
              <p className="text-muted-foreground mb-4">
                To provide and improve our services, we automatically collect:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Usage patterns and feature interactions</li>
                <li>Device and browser information</li>
                <li>IP addresses and general location data</li>
                <li>Performance metrics and error logs</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-brand-teal" />
                How We Use Your Information
              </h2>

              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Provide, maintain, and improve our platform</li>
                <li>Process your requests and communicate with you</li>
                <li>Ensure security and prevent fraud</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Send important updates about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-400" />
                Information Sharing
              </h2>

              <p className="text-muted-foreground mb-4">
                We do not sell, rent, or trade your personal information. We may
                share information only in these limited circumstances:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>
                  <strong>With your consent:</strong> When you explicitly
                  authorize sharing
                </li>
                <li>
                  <strong>Service providers:</strong> Third-party vendors who
                  help us operate our platform (under strict data protection
                  agreements)
                </li>
                <li>
                  <strong>Legal compliance:</strong> When required by law or to
                  protect our rights and users
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger
                  or acquisition (with continued privacy protection)
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-orange-400" />
                Data Security
              </h2>

              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your
                information:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Encryption in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure data centers and infrastructure</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                While we take extensive precautions, no system is 100% secure.
                We continuously work to improve our security measures and will
                notify you of any significant data breaches as required by law.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FileCheck className="h-6 w-6 text-brand-blue" />
                Your Rights and Choices
              </h2>

              <p className="text-muted-foreground mb-4">
                You have several rights regarding your personal information:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we have about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@konnektr.com"
                  className="text-brand-teal hover:underline"
                >
                  privacy@konnektr.com
                </a>
                .
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cookies and Tracking
              </h2>

              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our platform</li>
                <li>Provide personalized experiences</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                You can control cookie settings through your browser, but some
                features may not work properly if cookies are disabled.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Data Retention
              </h2>

              <p className="text-muted-foreground mb-6">
                We retain your information only as long as necessary to provide
                our services and comply with legal obligations. Specifically:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Account information: Until you delete your account</li>
                <li>Usage analytics: Up to 2 years for service improvement</li>
                <li>Security logs: Up to 1 year for security purposes</li>
                <li>Legal compliance: As required by applicable laws</li>
              </ul>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                International Data Transfers
              </h2>

              <p className="text-muted-foreground mb-6">
                Our services are hosted globally to provide the best
                performance. When we transfer your information internationally,
                we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Changes to This Policy
              </h2>

              <p className="text-muted-foreground mb-6">
                We may update this privacy policy from time to time. We will
                notify you of any material changes by:
              </p>
              <ul className="text-muted-foreground mb-6 list-disc ml-6">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice in our platform</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Your continued use of our services after any changes constitutes
                acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>

              <p className="text-muted-foreground mb-4">
                If you have questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <ul className="text-muted-foreground mb-6">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:privacy@konnektr.com"
                    className="text-brand-teal hover:underline"
                  >
                    privacy@konnektr.com
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
