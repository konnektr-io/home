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
            The Intelligent Digital Twin Platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            Go from Raw Data to{" "}
            <span className="gradient-text">Intelligent Digital Twin</span> in
            Minutes
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Konnektr automates digital twin creation, deployment, and
            orchestration. We solve for complexity, cost, and context, turning
            your disconnected data into intelligent systems that bring value to
            the physical world.
            <br />
            <span className="block mt-4 text-brand-teal font-semibold text-lg">
              <span className="bg-brand-teal/10 px-2 py-1 rounded">
                Open Source
              </span>{" "}
              &mdash; All Konnektr products are open-source and available for
              self-hosting.
            </span>
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/*
                <button
                  onClick={() => navigate("/assembler")}
                  className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                */}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section
        className="py-20 md:py-28 bg-black/10"
        aria-label="Products Overview"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Complete Digital Twin Platform
            </h2>
            <p className="mt-4 text-lg text-brand-teal font-semibold">
              100% Open Source. Build semantic property graphs, process
              real-time data, and monitor physical infrastructure with tools
              designed for growing companies.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            onClick={() => navigate("/assembler")}
          >
            {/* Assembler Product Card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/20 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                Early Access
              </span>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-teal/20 border border-brand-teal/30 mb-6">
                  <Bot className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Assembler
                </h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered digital twin builder that automates DTDL model
                  creation from any data source with a low-code visual
                  interface.
                </p>
                {/* <div className="flex items-center text-brand-teal font-medium text-sm group-hover:text-white transition-colors">
                  Start Building{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>

            {/* Graph Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/20 cursor-pointer"
              onClick={() => navigate("/graph")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-teal/20 border border-brand-teal/30 mb-6">
                  <DatabaseZap className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Graph
                </h3>
                <p className="text-muted-foreground mb-6">
                  Semantic property graph with built-in validation. Rich data
                  relationships made simple - no complexity, just meaningful
                  connections that scale.
                </p>
                <div className="flex items-center text-brand-teal font-medium text-sm group-hover:text-white transition-colors">
                  Build Semantic Context{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Flow Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/20 cursor-pointer"
              onClick={() => navigate("/flow")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                Coming Soon
              </span>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-teal/20 border border-brand-teal/30 mb-6">
                  <Workflow className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Flow
                </h3>
                <p className="text-muted-foreground mb-6">
                  Real-time data and event orchestrator that serves as the
                  nervous system for your digital twin, enabling intelligent
                  automation.
                </p>
                {/* <div className="flex items-center text-brand-teal font-medium text-sm group-hover:text-white transition-colors">
                  Start Flowing{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>

            {/* Compass Product Card */}
            <div
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/20 cursor-pointer"
              onClick={() => navigate("/compass")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                Coming Soon
              </span>
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-teal/20 border border-brand-teal/30 mb-6">
                  <Compass className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Konnektr Compass
                </h3>
                <p className="text-muted-foreground mb-6">
                  Analytics and insights platform that transforms complex
                  digital twin data into actionable intelligence.
                </p>
                {/* <div className="flex items-center text-brand-teal font-medium text-sm group-hover:text-white transition-colors">
                  Join Waiting List{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 md:py-28 bg-gradient-to-b from-transparent to-brand-dark/50"
        aria-label="Pricing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with our ready-to-deploy Graph platform, or join the waiting
              list for our upcoming AI-powered tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Assembler Pricing - Coming Soon */}
            <Card className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
              <div className="text-center mb-6">
                <Bot className="h-8 w-8 text-brand-teal mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Assembler
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered digital twin builder
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    Coming Soon
                  </span>
                </div>
              </div>
              <MailingListDialog
                trigger={
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 cursor-pointer">
                    Join Waiting List
                  </Button>
                }
                title="Join the Assembler Waiting List"
                description="Be the first to know when Assembler launches."
                ctaText="Join List"
                product="Assembler"
                successMessage="You're on the list! We'll notify you as soon as Assembler is available."
              />
            </Card>

            {/* Graph Pricing - Ready */}
            <Card className="relative p-6 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border-brand-teal">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-teal text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Ready Now
                </div>
              </div>
              <div className="text-center mb-6">
                <DatabaseZap className="h-8 w-8 text-brand-teal mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Graph
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Semantic property graph with validation
                </p>
                <div className="mb-4">
                  {/*
                  <span className="text-2xl font-bold text-foreground">
                    $25
                  </span>
                  <span className="text-muted-foreground ml-2">/month</span>
                  */}
                  <span className="text-2xl font-bold text-foreground">
                    Coming Soon
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-brand-teal flex-shrink-0" />
                  <span className="text-muted-foreground">
                    1,000 Twin Instances
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-brand-teal flex-shrink-0" />
                  <span className="text-muted-foreground">
                    1M API Calls/month
                  </span>
                </li>
              </ul>
              <MailingListDialog
                trigger={
                  <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 cursor-pointer">
                    Join Waiting List
                  </Button>
                }
                title="Join the Graph Waiting List"
                description="Get notified about updates and new features for Graph."
                ctaText="Join List"
                product="Graph"
                successMessage="You're on the list! We'll notify you about Graph updates."
              />
            </Card>

            {/* Flow Pricing - Coming Soon */}
            <Card className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
              <div className="text-center mb-6">
                <Workflow className="h-8 w-8 text-brand-teal mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Flow</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time data orchestrator
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    Coming Soon
                  </span>
                </div>
              </div>
              <MailingListDialog
                trigger={
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 cursor-pointer">
                    Join Waiting List
                  </Button>
                }
                title="Join the Flow Waiting List"
                description="Be the first to know when Flow launches."
                ctaText="Join List"
                product="Flow"
                successMessage="You're on the list! We'll notify you as soon as Flow is available."
              />
            </Card>

            {/* Compass Pricing - Coming Soon */}
            <Card className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
              <div className="text-center mb-6">
                <Compass className="h-8 w-8 text-brand-teal mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Compass
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Analytics & insights platform
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    Coming Soon
                  </span>
                </div>
              </div>
              <MailingListDialog
                trigger={
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 cursor-pointer">
                    Join Waiting List
                  </Button>
                }
                title="Join the Compass Waiting List"
                description="Be the first to know when Compass launches."
                ctaText="Join List"
                product="Compass"
                successMessage="You're on the list! We'll notify you as soon as Compass is available."
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Why Konnektr Section */}

      <section
        id="features"
        className="py-20 md:py-28"
        aria-label="Why Konnektr"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Konnektr?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <span className="block mb-2">
                Konnektr is 100% open source—no vendor lock-in, no hidden costs.
                Our platform is built for transparency, flexibility, and
                community-driven innovation.
              </span>
              <span className="block mb-2">
                We don't just build products—we build solutions. Our team
                delivers bespoke IoT and digital twin platforms for enterprises,
                customizing every layer to your needs.
              </span>
              <span className="block mb-2">
                Whether you want to self-host, use our managed cloud, or need
                expert help building your next digital twin solution, Konnektr
                is your partner for success.
              </span>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 3: Open Source & Customization */}
            <div className="feature-card rounded-xl p-8">
              <Star className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                100% Open Source
              </h3>
              <p className="mt-2 text-muted-foreground">
                All Konnektr products are open source and available for
                self-hosting. We also offer managed cloud and enterprise
                support.
              </p>
            </div>
            {/* Feature 4: Enterprise Customization */}
            <div className="feature-card rounded-xl p-8">
              <Compass className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Bespoke Solutions for Enterprises
              </h3>
              <p className="mt-2 text-muted-foreground">
                Need a custom IoT or digital twin platform? Our team builds
                tailored solutions for enterprises, from architecture to
                deployment.
              </p>
            </div>
            {/* Feature 1: Fast Modeling */}
            <div className="feature-card rounded-xl p-8">
              <Bot className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Speed to Value
              </h3>
              <p className="mt-2 text-muted-foreground">
                Go from raw data to deployed digital twin in minutes, not
                months. Our AI eliminates the complexity of manual modeling.
              </p>
            </div>
            {/* Feature 2: Scalable Graph */}
            <div className="feature-card rounded-xl p-8">
              <DatabaseZap className="h-10 w-10 text-brand-teal" />
              <h3 className="mt-6 text-xl font-bold text-white">
                Enterprise-Grade Scale
              </h3>
              <p className="mt-2 text-muted-foreground">
                Built for the demands of enterprise workloads with open
                standards, flexible deployment, and no vendor lock-in.
              </p>
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
                href="https://docs.konnektr.com"
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
