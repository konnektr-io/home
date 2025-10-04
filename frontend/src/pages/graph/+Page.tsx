import { DatabaseZap, Play, Network, Shield, Zap } from "lucide-react";
import { MailingListDialog } from "../../components/MailingListDialog.js";
import { Button } from "../../components/ui/button.js";
import { Card } from "../../components/ui/card.js";
import { graphProduct } from "../../data/products.js";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Graph Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Graph Hero Content"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            <DatabaseZap className="h-4 w-4" />
            High-Performance Graph Database
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Graph</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            {graphProduct.description}
            <br />
            <span className="block mt-4 text-brand-teal font-semibold text-lg">
              <span className="bg-brand-teal/10 px-2 py-1 rounded">
                Open Source
              </span>{" "}
              &mdash; All Konnektr products are open-source and available for
              self-hosting.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/*
               <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                 Deploy Now
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
               */}
            <a
              href="https://docs.konnektr.io/docs/graph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 border border-white/20 text-foreground bg-brand-dark hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              View Docs
            </a>
          </div>
        </div>
        {/* Hero Image/Visualization */}
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16"
          role="region"
          aria-label="Graph Visualization"
        >
          <div className="relative rounded-xl shadow-2xl shadow-brand-teal/10 border border-white/10 bg-brand-dark/50 p-4 md:p-6 backdrop-blur-sm">
            <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-lg"
                  >
                    <defs>
                      <linearGradient
                        id="heroGraphGrad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#1E9E95", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#2D4263", stopOpacity: 1 }}
                        />
                      </linearGradient>
                      <linearGradient
                        id="heroGraphGrad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#2D4263", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#1E9E95", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>

                    {/* Main nodes */}
                    <circle
                      cx="30"
                      cy="30"
                      r="12"
                      fill="url(#heroGraphGrad1)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="90"
                      cy="30"
                      r="10"
                      fill="url(#heroGraphGrad2)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="14"
                      fill="url(#heroGraphGrad1)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="25"
                      cy="90"
                      r="10"
                      fill="url(#heroGraphGrad2)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="85"
                      cy="85"
                      r="11"
                      fill="url(#heroGraphGrad1)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="90"
                      cy="60"
                      r="8"
                      fill="url(#heroGraphGrad2)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />

                    {/* Connection lines */}
                    <path
                      d="M30 30 L60 60"
                      stroke="url(#heroGraphGrad1)"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <path
                      d="M90 30 L60 60"
                      stroke="url(#heroGraphGrad2)"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <path
                      d="M60 60 L25 90"
                      stroke="url(#heroGraphGrad1)"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <path
                      d="M60 60 L85 85"
                      stroke="url(#heroGraphGrad2)"
                      strokeWidth="3"
                      opacity="0.8"
                    />
                    <path
                      d="M90 30 L90 60"
                      stroke="url(#heroGraphGrad1)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <path
                      d="M85 85 L90 60"
                      stroke="url(#heroGraphGrad2)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <path
                      d="M30 30 L90 30"
                      stroke="url(#heroGraphGrad1)"
                      strokeWidth="2"
                      opacity="0.4"
                    />

                    {/* Highlight dots */}
                    <circle
                      cx="30"
                      cy="30"
                      r="4"
                      fill="rgba(255,255,255,0.9)"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="5"
                      fill="rgba(255,255,255,0.9)"
                    />
                    <circle
                      cx="90"
                      cy="30"
                      r="3"
                      fill="rgba(255,255,255,0.9)"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-white">
                  Graph Database Runtime
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Real-time twin relationship queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        {/* Features Section */}
        <section
          className="py-20 md:py-28 bg-black/10"
          aria-label="Graph Features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Enterprise-Grade Digital Twin Infrastructure
              </h2>
              <p className="mt-4 text-lg text-brand-teal font-semibold">
                100% Open Source. Flexible, scalable, and built for enterprise
                reliability. Your digital twin data, your way.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Open Standards & APIs */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <DatabaseZap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  ADT-Compatible APIs
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Fully compatible with Azure Digital Twins API. Migrate
                  existing applications with zero code changes while gaining
                  superior performance.
                </p>
              </Card>
              {/* Feature 2: Flexible Deployment */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Flexible Deployment
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Self-hosted or fully managed. Deploy on your cloud,
                  on-premises, or use our hosted service. Your data sovereignty,
                  guaranteed.
                </p>
              </Card>
              {/* Feature 3: Advanced Querying */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Advanced Querying & Events
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Rich Cypher query language, real-time validation, and
                  intelligent event routing. Build complex digital twin logic
                  with ease.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28" aria-label="Graph Technology">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built on Battle-Tested Technology
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powered by Apache AGE and PostgreSQL, with enterprise features
                you can trust in production.
              </p>
            </div>
            <div className="mt-20 relative">
              {/* The connecting line */}
              <div
                className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 hidden md:block"
                aria-hidden="true"
              ></div>
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-brand-dark border-2 border-brand-teal mx-auto mb-4">
                    <DatabaseZap className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    PostgreSQL Foundation
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Built on the world's most advanced open source database,
                    with ACID transactions and enterprise reliability.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-brand-dark border-2 border-brand-teal mx-auto mb-4">
                    <Network className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Apache AGE Graph Engine
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Powerful graph processing with Cypher queries, enabling
                    complex relationship analysis and traversals.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-brand-dark border-2 border-brand-teal mx-auto mb-4">
                    <Shield className="h-8 w-8 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Enterprise Security
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Row-level security, encryption at rest and in transit, audit
                    logging, and compliance-ready features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section - Coming Soon */}
        <section className="py-20 md:py-28" aria-label="Graph Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground">
                Konnektr Graph is open source and free to self-host. Managed
                cloud pricing will be announced soon.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-20" aria-label="Graph Call to Action">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-brand-blue to-brand-teal text-center">
              <DatabaseZap className="mx-auto h-10 w-10 mb-4 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Scale Your Digital Twin Platform?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Open source, flexible, and built for the modern enterprise. Get
                started with Konnektr Graph today.
                <br />
                <span className="block mt-2 text-brand-light text-base font-semibold">
                  Future managed cloud plans will include a free tier for
                  everyone.
                </span>
              </p>
              <div className="mt-8">
                {/*
                <Button className="h-11 px-6 py-3 bg-white text-black shadow hover:bg-gray-200 text-base font-medium">
                  Start for Free
                </Button>
                */}
                <MailingListDialog
                  trigger={
                    <Button className="h-11 px-6 py-3 bg-brand-teal text-white shadow hover:bg-brand-teal/90 text-base font-medium  cursor-pointer">
                      Join Waiting List
                    </Button>
                  }
                  title="Join the Graph Waiting List"
                  description="Get notified when Konnektr Graph launches its managed cloud plans."
                  ctaText="Join List"
                  product="Graph"
                  successMessage="You're on the list! We'll notify you about Graph updates."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
