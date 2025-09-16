import KonnektrLogo from '../assets/konnektr.svg';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DatabaseZap, ArrowRight } from 'lucide-react';

export default function GraphPage() {
  return (
    <div className="bg-[#0B111D] text-white min-h-screen antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <header className="pt-12 pb-8 text-center">
        <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-12 w-12 mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
          The Scalable Digital Twin Runtime
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Konnektr Graph is a high-performance, fully managed graph database and API layer, built on open standards and fully compatible with ADT.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="h-11 px-6 py-3 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90 text-base font-medium">Start Deploying</Button>
          <Button className="h-11 px-6 py-3 bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 text-base font-medium">See Docs</Button>
        </div>
      </header>
      <main className="pb-16">
        {/* Features Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Konnektr Graph?</h2>
              <p className="mt-4 text-lg text-gray-400">Open source, flexible, and built for scale. Your digital twin data, your way.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <DatabaseZap className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Open Standards & APIs</h3>
                <p className="mt-2 text-gray-400">ADT-compatible API. Migrate existing applications with zero code changes.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <img src={KonnektrLogo} alt="Graph Logo" className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Flexible Deployment</h3>
                <p className="mt-2 text-gray-400">Self-hosted or fully managed. Deploy on your cloud, on-prem, or use our hosted service.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <ArrowRight className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Advanced Querying & Validation</h3>
                <p className="mt-2 text-gray-400">Rich query language, validation, and event routing. Build complex digital twin logic with ease.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Key Concepts</h2>
              <p className="mt-4 text-lg text-gray-400">Everything you need for enterprise-grade digital twin graphs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">1</Badge>
                <h3 className="text-xl font-bold text-white">Migration & Integration</h3>
                <p className="mt-2 text-gray-400">Comprehensive guides for migration, upgrades, and integration with Azure Digital Twins SDKs.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">2</Badge>
                <h3 className="text-xl font-bold text-white">Performance & Security</h3>
                <p className="mt-2 text-gray-400">Optimized for speed, reliability, and enterprise-grade security. Diagnostics and logging included.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">3</Badge>
                <h3 className="text-xl font-bold text-white">Extensive Reference Docs</h3>
                <p className="mt-2 text-gray-400">API, SDK, and configuration references to accelerate your development.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-[#2D4263] to-[#1E9E95] text-center">
              <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-10 w-10 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Scale Your Digital Twin Platform?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">Open source, flexible, and built for the modern enterprise. Get started with Konnektr Graph today.</p>
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
