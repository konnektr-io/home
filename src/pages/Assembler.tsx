import KonnektrLogo from '../assets/konnektr.svg';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, ArrowRight } from 'lucide-react';

export default function AssemblerPage() {
  return (
    <div className="bg-[#0B111D] text-white min-h-screen antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <header className="pt-12 pb-8 text-center">
        <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-12 w-12 mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
          Go from Raw Data to Digital Twin in <span className="gradient-text">Minutes</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          The AI-powered digital twin builder. Automate the creation of DTDL models and graph relationships from any data source with an intuitive, low-code visual interface.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="h-11 px-6 py-3 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90 text-base font-medium">Start Building</Button>
          <Button className="h-11 px-6 py-3 bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 text-base font-medium">See How It Works</Button>
        </div>
      </header>
      <main className="pb-16">
        {/* Features Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Konnektr Assembler?</h2>
              <p className="mt-4 text-lg text-gray-400">Solve for complexity, cost, and context. Deliver value instantly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <Bot className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">AI-Powered Modeling</h3>
                <p className="mt-2 text-gray-400">Let our Genesis Engine analyze your data and propose a complete, valid DTDL model in seconds.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <img src={KonnektrLogo} alt="Graph Logo" className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">No Vendor Lock-In</h3>
                <p className="mt-2 text-gray-400">Deploy to your own cloud or use our fully managed service. Your data, your control.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <ArrowRight className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Instant Value</h3>
                <p className="mt-2 text-gray-400">Paste your sample data and get instant model suggestions. No lengthy onboarding or configuration required.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
              <p className="mt-4 text-lg text-gray-400">Three steps to an intelligent twin.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">1</Badge>
                <h3 className="text-xl font-bold text-white">Connect Your Data</h3>
                <p className="mt-2 text-gray-400">Securely connect to your existing data stores—data lakes, databases, or event streams—with our guided wizard.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">2</Badge>
                <h3 className="text-xl font-bold text-white">AI Generates the Model</h3>
                <p className="mt-2 text-gray-400">Genesis Engine analyzes your data and automatically generates an interactive digital twin graph for your review and approval.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">3</Badge>
                <h3 className="text-xl font-bold text-white">Deploy & Analyze</h3>
                <p className="mt-2 text-gray-400">With one click, deploy the twin, connectors, and query services to your cloud, and start generating immediate operational insights.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-[#2D4263] to-[#1E9E95] text-center">
              <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-10 w-10 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Your First Intelligent Twin?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">Stop wrestling with DTDL and complex cloud architectures. Start delivering value. Explore the Genesis Engine today.</p>
              <div className="mt-8">
                <Button className="h-11 px-6 py-3 bg-white text-black shadow hover:bg-gray-200 text-base font-medium">Start Your Free Trial</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
