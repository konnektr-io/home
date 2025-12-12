import {
  Bot,
  DatabaseZap,
  Workflow,
  Compass,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";
import { navigate } from "vike/client/router";
import { Card } from "../../components/ui/card.js";
import { Button } from "../../components/ui/button.js";
import { MailingListDialog } from "../../components/MailingListDialog.js";
import { trackDeployClick } from "../../utils/analytics.js";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Home Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Home Hero Content"
        >
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            Now Available: Konnektr Graph
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            The <span className="gradient-text">Semantic Property Graph</span>{" "}
            for Digital Twins & AI Agents
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Build meaningful data relationships with validated property graphs.
            Rich semantic context without RDF complexity—perfect for digital
            twin infrastructures and AI agent knowledge bases. Built on
            PostgreSQL & Apache AGE.
            <br />
            <span className="block mt-4 text-brand-teal font-semibold text-lg">
              <span className="bg-brand-teal/10 px-2 py-1 rounded">
                Open Source
              </span>{" "}
              &mdash; Free to self-host. Deploy managed instances in minutes.
            </span>
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/graph")}
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
            >
              Explore Graph
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <a
              href="https://docs.konnektr.io/docs/graph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 border border-white/20 text-foreground bg-brand-dark hover:bg-white/10"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* Why Graph Now Section */}
      <section
        className="py-20 md:py-28 bg-black/10"
        aria-label="Why Graph Now"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Deploy Today
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Konnektr Graph is production-ready and available now. Start
              building semantic property graphs for digital twins, AI agents,
              and complex data relationships without the complexity of
              traditional solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="feature-card rounded-xl p-8">
              <DatabaseZap className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Deploy in Minutes
              </h3>
              <p className="mt-2 text-muted-foreground">
                Click deploy and get a fully managed Graph instance. No complex
                setup, no infrastructure headaches. Start building immediately.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="feature-card rounded-xl p-8">
              <Check className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Built-in Validation
              </h3>
              <p className="mt-2 text-muted-foreground">
                Schema validation prevents data corruption as you scale. Rich
                semantic relationships with the safety of structured data.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="feature-card rounded-xl p-8">
              <Star className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Open Source Foundation
              </h3>
              <p className="mt-2 text-muted-foreground">
                Built on PostgreSQL & Apache AGE. Fully auditable,
                self-hostable, and free from vendor lock-in. Your data, your
                control.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/graph")}
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
            >
              Explore Graph
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Graph Key Features Section */}
      <section className="py-20 md:py-28" aria-label="Graph Key Features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What You Can Build with Graph
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From digital twin infrastructures to AI agent knowledge
              bases—Graph powers meaningful data relationships at any scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case 1: Digital Twin Infrastructure */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  Digital Twin Infrastructures
                </h3>
                <p className="text-muted-foreground mb-4">
                  Model complex physical systems—water networks, traffic
                  infrastructure, railway operations—with validated semantic
                  relationships.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Track asset dependencies and cascading impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Optimize maintenance and resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>
                      Visualize infrastructure relationships in real-time
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 2: AI Agent Knowledge Bases */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  AI Agent Knowledge Bases
                </h3>
                <p className="text-muted-foreground mb-4">
                  Give your AI agents rich semantic context. Graph provides the
                  structured knowledge they need to reason and act
                  intelligently.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Semantic context without RDF complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Compatible with Azure Digital Twins SDK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Query relationships via standard REST APIs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 3: IoT & Sensor Networks */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  IoT & Sensor Networks
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect devices, sensors, and infrastructure. Model complex
                  relationships between physical assets and their telemetry.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Model device hierarchies and dependencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Correlate sensor data with physical context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Trace impact zones for maintenance and failures</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 4: Enterprise Data Relationships */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">
                  Complex Business Relationships
                </h3>
                <p className="text-muted-foreground mb-4">
                  Model intricate business entities, dependencies, and
                  workflows. Replace fragmented SQL joins with intuitive graph
                  queries.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Navigate multi-level organizational structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>
                      Track project dependencies and resource allocation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>Prevent data corruption with schema validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/graph")}
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 border border-white/20 text-foreground bg-brand-dark hover:bg-white/10"
            >
              Explore Graph Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Graph Only */}
      <section
        id="pricing"
        className="py-20 md:py-28 bg-gradient-to-b from-transparent to-brand-dark/50"
        aria-label="Pricing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start building with Graph today. Free for development, affordable
              for production. No hidden costs, no surprises.
            </p>
          </div>

          {/* Graph Pricing - Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Developer Tier */}
            <Card className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
              <div className="text-center mb-6">
                <DatabaseZap className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Developer
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For development & testing
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    Free
                  </span>
                  <span className="text-muted-foreground ml-2 text-sm">
                    per month / resource
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Up to 500 twin instances
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    User authentication (Device Code Flow)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Rate limits: 1000 QU/min
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Community support
                  </span>
                </li>
              </ul>
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=free&utm_source=home&utm_medium=pricing&utm_campaign=launch&utm_content=developer_tier"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDeployClick("developer", "homepage")}
                className="block w-full"
              >
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  Start Deploying
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Free tier • No credit card
                <br />
                Sign up required
              </p>
            </Card>

            {/* Standard Tier */}
            <Card className="relative p-8 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border-brand-teal">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-teal text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-6">
                <DatabaseZap className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Standard
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For production applications
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    $99
                  </span>
                  <span className="text-muted-foreground ml-2 text-sm">
                    per month / resource
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Up to 1M twin instances
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    M2M Authentication with Client ID & Secret
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">No rate limits</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Events & data history (coming soon)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Email support</span>
                </li>
              </ul>
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=standard&utm_source=home&utm_medium=pricing&utm_campaign=launch&utm_content=standard_tier"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDeployClick("standard", "homepage")}
                className="block w-full"
              >
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                  Choose Standard
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sign up and credit card required
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Konnektr Graph Section */}
      <section
        id="features"
        className="py-20 md:py-28"
        aria-label="Why Konnektr Graph"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Konnektr Graph?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <span className="block mb-2">
                Graph is production-ready, 100% open source, and built on the
                trusted PostgreSQL foundation. No vendor lock-in, no hidden
                costs.
              </span>
              <span className="block mb-2">
                Self-host for complete control, or deploy managed instances in
                minutes. You choose how to run Graph—we provide the tools.
              </span>
              <span className="block mb-2">
                Need custom integrations or enterprise support? Our team
                delivers bespoke IoT and digital twin solutions tailored to your
                infrastructure.
              </span>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1: Open Source Foundation */}
            <div className="feature-card rounded-xl p-8">
              <Star className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                100% Open Source
              </h3>
              <p className="mt-2 text-muted-foreground">
                Graph is fully open source and available on GitHub. Audit the
                code, contribute improvements, or self-host on your
                infrastructure with complete transparency.
              </p>
            </div>
            {/* Feature 2: Production Ready Now */}
            <div className="feature-card rounded-xl p-8">
              <DatabaseZap className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Production Ready Today
              </h3>
              <p className="mt-2 text-muted-foreground">
                Graph is available now—not in beta, not "coming soon." Deploy
                semantic property graphs to production with confidence, backed
                by PostgreSQL's reliability.
              </p>
            </div>
            {/* Feature 3: Built on PostgreSQL */}
            <div className="feature-card rounded-xl p-8">
              <Check className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                PostgreSQL Foundation
              </h3>
              <p className="mt-2 text-muted-foreground">
                Leverage PostgreSQL's battle-tested reliability with graph
                capabilities. Your team already knows SQL—no need to learn
                exotic query languages or proprietary systems.
              </p>
            </div>
            {/* Feature 4: Enterprise Support */}
            <div className="feature-card rounded-xl p-8">
              <Compass className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Custom Solutions Available
              </h3>
              <p className="mt-2 text-muted-foreground">
                Need more than Graph? Our team builds complete IoT and digital
                twin platforms for enterprises, customizing every layer to fit
                your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section - Future Products */}
      <section className="py-20 md:py-28 bg-black/10" aria-label="What's Next">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What's Next for Konnektr?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Graph is just the beginning. We're building a complete digital
              twin platform with AI-powered tools for modeling, orchestration,
              and analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Assembler Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/assembler")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                Early Access
              </span>
              <div className="relative text-center">
                <Bot className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Assembler
                </h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered digital twin builder that automates DTDL model
                  creation from any data source with a low-code visual
                  interface.
                </p>
                <MailingListDialog
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-foreground hover:bg-white/10 cursor-pointer"
                      size="sm"
                    >
                      Join Waiting List
                    </Button>
                  }
                  title="Join the Assembler Waiting List"
                  description="Be the first to know when Assembler launches."
                  ctaText="Join List"
                  product="Assembler"
                  successMessage="You're on the list! We'll notify you as soon as Assembler is available."
                />
              </div>
            </div>

            {/* Flow Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/flow")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                Coming Soon
              </span>
              <div className="relative text-center">
                <Workflow className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Flow
                </h3>
                <p className="text-muted-foreground mb-6">
                  Real-time data and event orchestrator that serves as the
                  nervous system for your digital twin, enabling intelligent
                  automation.
                </p>
                <MailingListDialog
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-foreground hover:bg-white/10 cursor-pointer"
                      size="sm"
                    >
                      Join Waiting List
                    </Button>
                  }
                  title="Join the Flow Waiting List"
                  description="Be the first to know when Flow launches."
                  ctaText="Join List"
                  product="Flow"
                  successMessage="You're on the list! We'll notify you as soon as Flow is available."
                />
              </div>
            </div>

            {/* Compass Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/compass")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                Coming Soon
              </span>
              <div className="relative text-center">
                <Compass className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Compass
                </h3>
                <p className="text-muted-foreground mb-6">
                  Analytics and insights platform that transforms complex
                  digital twin data into actionable intelligence.
                </p>
                <MailingListDialog
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-foreground hover:bg-white/10 cursor-pointer"
                      size="sm"
                    >
                      Join Waiting List
                    </Button>
                  }
                  title="Join the Compass Waiting List"
                  description="Be the first to know when Compass launches."
                  ctaText="Join List"
                  product="Compass"
                  successMessage="You're on the list! We'll notify you as soon as Compass is available."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section
        className="py-20 bg-gradient-to-b from-brand-dark to-brand-blue/10"
        aria-label="Open Source Commitment"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-medium text-brand-teal">
                Open Source
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built in the Open, For Everyone
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              All Konnektr products are open-source and available on GitHub.
              Self-host on your infrastructure, contribute to development, or
              simply inspect the code. No vendor lock-in, no black boxes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/konnektr-io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
              <a
                href="https://docs.konnektr.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Read Documentation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
