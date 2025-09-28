import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaitingListSection } from "@/components/WaitingList";
import { PricingSection } from "@/components/PricingSection";
import { flowProduct } from "@/data/products";
import { Workflow, ArrowRight, Zap } from "lucide-react";
import { DatabaseZap } from "lucide-react";
import KonnektrLogo from "../assets/konnektr.svg";

export default function FlowPage() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300 mb-4 border border-white/10">
            <Workflow className="h-4 w-4" />
            Real-Time Event Processing
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            <span className="gradient-text">Flow</span>: The Real-Time Data &
            Event Orchestrator
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
            {flowProduct.description}
          </p>

          {/* Waiting List Section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <WaitingListSection
              productName="Konnektr Flow"
              description="Be the first to experience real-time event orchestration. Join our waiting list for early access."
            />
          </div>
        </div>
        {/* Hero Image/Visualization */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative rounded-xl shadow-2xl shadow-brand-teal/10 border border-white/10 bg-brand-dark/50 p-4 md:p-6 backdrop-blur-sm">
            {/* Placeholder for Flow Pipeline visualization */}
            <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Workflow className="h-16 w-16 text-brand-teal mx-auto mb-4" />
                <p className="text-lg font-medium text-white">
                  Visual Flow Designer
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Drag-and-drop pipeline builder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="pb-16">
        {/* Features Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Konnektr Flow?
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Connect, automate, and orchestrate. Your digital twin's nervous
                system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Visual Flow Builder
                </h3>
                <p className="mt-2 text-gray-400">
                  Design complex data ingestion and business logic workflows
                  with a simple drag-and-drop interface.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <DatabaseZap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Rich Connector Library
                </h3>
                <p className="mt-2 text-gray-400">
                  Connect to dozens of services out-of-the-box, from IoT Hubs
                  and message brokers to databases and SaaS APIs.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Event-Driven Automation
                </h3>
                <p className="mt-2 text-gray-400">
                  Initiate flows automatically based on state changes in your
                  Konnektr Graph instances or external triggers.
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Flow Capabilities
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Everything you need for intelligent data orchestration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-brand-teal">1</Badge>
                <h3 className="text-xl font-bold text-white">
                  Triggered by Graph Events
                </h3>
                <p className="mt-2 text-gray-400">
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
                <p className="mt-2 text-gray-400">
                  All flows run on our scalable, serverless infrastructure. You
                  only pay for what you use, with automatic scaling.
                </p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-brand-teal">3</Badge>
                <h3 className="text-xl font-bold text-white">
                  Enterprise Integrations
                </h3>
                <p className="mt-2 text-gray-400">
                  Native connectors for Slack, Teams, ServiceNow, Salesforce,
                  and hundreds of other enterprise systems.
                </p>
              </Card>
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Common Use Cases
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                From simple notifications to complex automation workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <ArrowRight className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Predictive Maintenance
                </h3>
                <p className="mt-2 text-gray-400">
                  Automatically create work orders when equipment shows signs of
                  wear, notify technicians, and order replacement parts.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Real-Time Alerting
                </h3>
                <p className="mt-2 text-gray-400">
                  Send intelligent alerts to the right people at the right time,
                  with context and recommended actions.
                </p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Data Pipeline Automation
                </h3>
                <p className="mt-2 text-gray-400">
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
                <p className="mt-2 text-gray-400">
                  Connect your digital twin to ERP, CRM, and other business
                  systems for seamless operational workflows.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-20">
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

        {/* Final CTA Section */}
        <section className="py-12 md:py-20">
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
