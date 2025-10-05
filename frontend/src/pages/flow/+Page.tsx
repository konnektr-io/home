import { Workflow, ArrowRight, Zap, DatabaseZap } from "lucide-react";
import { Button } from "../../components/ui/button.js";
import { Card } from "../../components/ui/card.js";
import { Badge } from "../../components/ui/badge.js";
import { WaitingListSection } from "../../components/WaitingList.js";
import KonnektrLogo from "../../assets/konnektr.svg";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Flow Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Flow Hero Content"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            <Workflow className="h-4 w-4" />
            In Ideation • Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            <span className="gradient-text">Flow</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            We're designing the automation layer that will connect your digital
            twins to the real world.{" "}
            <strong className="text-white">Join our waiting list</strong> to
            help shape how digital twins drive real-world actions.
          </p>

          {/* Waiting List Section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <WaitingListSection
              productName="Konnektr Flow"
              description="We're exploring how digital twins can trigger real-world actions. Be the first to know when Flow is ready."
            />
          </div>
        </div>
      </section>
      <main className="pb-16">
        {/* Features Section */}
        <section
          className="py-12 md:py-20 bg-black/10"
          aria-label="Flow Features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Vision for Flow
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Digital twins should drive real-world actions. We're designing
                Flow to bridge that gap with intelligent automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Visual Flow Builder
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Design complex data ingestion and business logic workflows
                  with a simple drag-and-drop interface.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <DatabaseZap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Rich Connector Library
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Connect to dozens of services out-of-the-box, from IoT Hubs
                  and message brokers to databases and SaaS APIs.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Event-Driven Automation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Initiate flows automatically based on state changes in your
                  Konnektr Graph instances or external triggers.
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-12 md:py-20" aria-label="Flow Capabilities">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What We're Building
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Flow will be the automation layer that turns digital twin
                insights into real-world actions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-brand-teal">1</Badge>
                <h3 className="text-xl font-bold text-white">
                  Triggered by Graph Events
                </h3>
                <p className="mt-2 text-muted-foreground">
                  React instantly to changes in your digital twin graph. When a
                  property updates, a relationship changes, or a threshold is
                  crossed.
                </p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-brand-teal">2</Badge>
                <h3 className="text-xl font-bold text-white">
                  Serverless Execution
                </h3>
                <p className="mt-2 text-muted-foreground">
                  All flows run on our scalable, serverless infrastructure. You
                  only pay for what you use, with automatic scaling.
                </p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-brand-teal">3</Badge>
                <h3 className="text-xl font-bold text-white">
                  Enterprise Integrations
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Native connectors for Slack, Teams, ServiceNow, Salesforce,
                  and hundreds of other enterprise systems.
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section
          className="py-12 md:py-20 bg-black/10"
          aria-label="Flow Use Cases"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Common Use Cases
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From simple notifications to complex automation workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <ArrowRight className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Predictive Maintenance
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Automatically create work orders when equipment shows signs of
                  wear, notify technicians, and order replacement parts.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Real-Time Alerting
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Send intelligent alerts to the right people at the right time,
                  with context and recommended actions.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Data Pipeline Automation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Automatically ingest, transform, and route data from multiple
                  sources to keep your digital twin up-to-date.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <img
                  src={KonnektrLogo}
                  alt="Integration Logo"
                  className="h-10 w-10 text-brand-teal"
                />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Business Process Integration
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Connect your digital twin to ERP, CRM, and other business
                  systems for seamless operational workflows.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section - Coming Soon */}
        <section className="py-20 md:py-28" aria-label="Flow Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground">
                Konnektr Flow is coming soon. Pricing will be announced when we
                launch.
              </p>
            </div>
          </div>
        </section>

        {/* Commented out pricing section
        <section className="py-12 md:py-20" aria-label="Flow Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PricingSection
              tiers={flowProduct.pricingTiers}
              productName={flowProduct.title}
              onDeployClick={(tier) => {
                import("@/utils/ktrlplane").then(({ redirectToKtrlPlane }) => {
                  redirectToKtrlPlane("flow", tier);
                });
              }}
            />
          </div>
        </section>
        */}

        {/* Final CTA Section */}
        <section className="py-12 md:py-20" aria-label="Flow Call to Action">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-brand-blue to-brand-teal text-center">
              <img
                src={KonnektrLogo}
                alt="Konnektr Logo"
                className="mx-auto h-10 w-10 mb-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Orchestrate Your Digital Twin?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Start building intelligent workflows that connect your digital
                twin to the real world. No complex setup required.
              </p>
              <div className="mt-8">
                <Button className="h-11 px-6 py-3 bg-white text-black shadow hover:bg-gray-200 text-base font-medium">
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
