import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PricingSection } from "@/components/PricingSection";
import { graphProduct } from "@/data/products";
import {
  DatabaseZap,
  ArrowRight,
  Play,
  Network,
  Shield,
  Zap,
} from "lucide-react";

export default function GraphPage() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            <DatabaseZap className="h-4 w-4" />
            High-Performance Graph Database
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Graph</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            {graphProduct.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
              Start Deploying
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-foreground hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              View API Docs
            </Button>
          </div>
        </div>
        {/* Hero Image/Visualization */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative rounded-xl shadow-2xl shadow-[#1E9E95]/10 border border-white/10 bg-[#0B111D]/50 p-4 md:p-6 backdrop-blur-sm">
            {/* Placeholder for Graph Network visualization */}
            <div className="rounded-lg bg-gradient-to-br from-[#2D4263]/20 to-[#1E9E95]/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Network className="h-16 w-16 text-[#1E9E95] mx-auto mb-4" />
                <p className="text-lg font-medium text-white">
                  Graph Database Runtime
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Real-time twin relationship queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        {/* Features Section */}
        <section className="py-20 md:py-28 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Enterprise-Grade Digital Twin Infrastructure
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Open source, flexible, and built for scale. Your digital twin
                data, your way, with enterprise reliability.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Open Standards & APIs */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-[#1E9E95] hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#2D4263]/50 text-[#1E9E95] border border-[#1E9E95]/50">
                  <DatabaseZap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  ADT-Compatible APIs
                </h3>
                <p className="mt-2 text-gray-400">
                  Fully compatible with Azure Digital Twins API. Migrate
                  existing applications with zero code changes while gaining
                  superior performance.
                </p>
              </Card>
              {/* Feature 2: Flexible Deployment */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-[#1E9E95] hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#2D4263]/50 text-[#1E9E95] border border-[#1E9E95]/50">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Flexible Deployment
                </h3>
                <p className="mt-2 text-gray-400">
                  Self-hosted or fully managed. Deploy on your cloud,
                  on-premises, or use our hosted service. Your data sovereignty,
                  guaranteed.
                </p>
              </Card>
              {/* Feature 3: Advanced Querying */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-[#1E9E95] hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#2D4263]/50 text-[#1E9E95] border border-[#1E9E95]/50">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Advanced Querying & Events
                </h3>
                <p className="mt-2 text-gray-400">
                  Rich Cypher query language, real-time validation, and
                  intelligent event routing. Build complex digital twin logic
                  with ease.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built on Battle-Tested Technology
              </h2>
              <p className="mt-4 text-lg text-gray-400">
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
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-[#0B111D] border-2 border-[#1E9E95] mx-auto mb-4">
                    <DatabaseZap className="h-8 w-8 text-[#1E9E95]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    PostgreSQL Foundation
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Built on the world's most advanced open source database,
                    with ACID transactions and enterprise reliability.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-[#0B111D] border-2 border-[#1E9E95] mx-auto mb-4">
                    <Network className="h-8 w-8 text-[#1E9E95]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Apache AGE Graph Engine
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Powerful graph processing with Cypher queries, enabling
                    complex relationship analysis and traversals.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-[#0B111D] border-2 border-[#1E9E95] mx-auto mb-4">
                    <Shield className="h-8 w-8 text-[#1E9E95]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Enterprise Security
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Row-level security, encryption at rest and in transit, audit
                    logging, and compliance-ready features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <PricingSection
          tiers={graphProduct.pricingTiers}
          productName="Graph"
          onDeployClick={(tier) => {
            // TODO: Implement KtrlPlane redirect
            console.log(`Deploy Graph with ${tier.name} tier`);
          }}
        />

        {/* Final CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-[#2D4263] to-[#1E9E95] text-center">
              <DatabaseZap className="mx-auto h-10 w-10 mb-4 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Scale Your Digital Twin Platform?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Open source, flexible, and built for the modern enterprise. Get
                started with Konnektr Graph today.
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
