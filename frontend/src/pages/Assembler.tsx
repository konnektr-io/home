// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaitingListSection } from "@/components/WaitingList";
import { PricingSection } from "@/components/PricingSection";
import { assemblerProduct } from "@/data/products";
import {
  // Bot,
  BrainCircuit,
  DatabaseZap,
  Sparkles,
  Zap,
  Users,
} from "lucide-react";
import { redirectToKtrlPlane } from "@/utils/ktrlplane";

export default function AssemblerPage() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            <Sparkles className="h-4 w-4" />
            Powered by Agentic AI
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Assembler</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            {assemblerProduct.description}
          </p>
          {/* Temporarily commented out - product not ready yet */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-foreground hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div> */}

          {/* Waiting List Section */}
          <div className="max-w-2xl mx-auto">
            <WaitingListSection
              productName="Konnektr Assembler"
              description="Be the first to experience AI-powered digital twin creation. Join our waiting list for early access."
            />
          </div>
        </div>
        {/* Hero Image/Visualization */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative rounded-xl shadow-2xl shadow-brand-teal/10 border border-white/10 bg-brand-dark/50 p-4 md:p-6 backdrop-blur-sm">
            {/* Placeholder for Assembler Engine UI visualization */}
            <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <BrainCircuit className="h-16 w-16 text-brand-teal mx-auto mb-4" />
                <p className="text-lg font-medium text-white">
                  Assembler Engine UI Visualization
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Interactive digital twin model generation
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The End of Manual Modeling
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We directly address the core challenges that prevent digital
                twin adoption, validated by industry leaders.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {assemblerProduct.features.map((feature, index) => (
                <Card
                  key={index}
                  className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                    {index === 0 && <BrainCircuit className="h-6 w-6" />}
                    {index === 1 && <Zap className="h-6 w-6" />}
                    {index === 2 && <DatabaseZap className="h-6 w-6" />}
                    {index === 3 && <Users className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Three Steps to an Intelligent Twin
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Our agentic framework automates the entire process, from
                connection to deployment.
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
                    <span className="text-2xl font-bold text-brand-teal">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Connect Your Data
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Securely connect to your existing data stores—data lakes,
                    databases, or event streams—with our guided wizard.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-brand-dark border-2 border-brand-teal mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-teal">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI Generates the Model
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Our Assembler Engine analyzes your data and automatically
                    generates an interactive digital twin graph for your review
                    and approval.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-brand-dark border-2 border-brand-teal mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-teal">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Deploy & Analyze
                  </h3>
                  <p className="mt-2 text-gray-400">
                    With one click, deploy the twin, connectors, and query
                    services to your cloud, and start generating immediate
                    operational insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section - commented out, product not ready yet
        /*
        <section className="py-20 md:py-28 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Experience the{" "}
                <span className="gradient-text">Assembler Engine</span>{" "}
                Instantly
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Paste a sample of your JSON data below. Our AI will analyze it
                and suggest a digital twin model in real-time.
              </p>
            </div>
            <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="data-input"
                >
                  Your Sample Data (JSON)
                </label>
                <textarea
                  id="data-input"
                  className="w-full p-4 rounded-lg bg-[#0B111D] border border-white/20 text-gray-300 font-mono text-sm focus:ring-2 focus:ring-[#1E9E95] focus:border-[#1E9E95] transition"
                  rows={15}
                  placeholder={`{
    "deviceId": "Pump-101",
    "telemetry": {
        "rpm": 1500,
        "pressure_out": 45.2,
        "temperature": 65.1
    },
    "metadata": {
        "location": "Sector-A",
        "lastMaintenance": "2025-08-21T10:00:00Z"
    }
}`}
                />
                <Button className="mt-4 w-full inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90">
                  ✨ Generate Twin Suggestion
                </Button>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  AI-Generated Model Suggestion
                </label>
                <div className="w-full h-[380px] p-6 rounded-lg bg-[#0B111D] border border-white/20 text-gray-300 text-sm bg-white/3 hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Bot className="h-12 w-12 text-gray-500 mb-4" />
                    <p className="text-gray-500">
                      Your AI-generated model analysis will appear here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Pricing Section */}
        <PricingSection
          tiers={assemblerProduct.pricingTiers}
          productName="Assembler"
          onDeployClick={(tier) => {
            redirectToKtrlPlane("assembler", tier);
          }}
        />

        {/* Final CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-brand-blue to-brand-teal">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Build Your First Intelligent Twin?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                  Stop wrestling with DTDL and complex cloud architectures.
                  Start delivering value. Explore the Assembler Engine today.
                </p>
                {/* Temporarily commented out - product not ready yet */}
                {/* <div className="mt-8">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
