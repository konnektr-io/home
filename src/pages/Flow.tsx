import KonnektrLogo from '../assets/konnektr.svg';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow, ArrowRight, Zap } from 'lucide-react';

export default function FlowPage() {
  return (
    <div className="bg-[#0B111D] text-white min-h-screen antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <header className="pt-12 pb-8 text-center">
        <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-12 w-12 mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
          The Real-Time Data & Event <span className="gradient-text">Orchestrator</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Konnektr Flow is the nervous system for your digital twin, enabling you to ingest data, trigger notifications, and automate complex actions in real-time.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="h-11 px-6 py-3 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90 text-base font-medium">Start Flowing</Button>
          <Button className="h-11 px-6 py-3 bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 text-base font-medium">See Workflows</Button>
        </div>
      </header>
      <main className="pb-16">
        {/* Features Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Konnektr Flow?</h2>
              <p className="mt-4 text-lg text-gray-400">Connect, automate, and orchestrate. Your digital twin's nervous system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Visual Flow Builder</h3>
                <p className="mt-2 text-gray-400">Design complex data ingestion and business logic workflows with a simple drag-and-drop interface.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <img src={KonnektrLogo} alt="Flow Logo" className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Rich Connector Library</h3>
                <p className="mt-2 text-gray-400">Connect to dozens of services out-of-the-box, from IoT Hubs and message brokers to databases and SaaS APIs.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Event-Driven Automation</h3>
                <p className="mt-2 text-gray-400">Initiate flows automatically based on state changes in your Konnektr Graph instances or external triggers.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Flow Capabilities</h2>
              <p className="mt-4 text-lg text-gray-400">Everything you need for intelligent data orchestration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">1</Badge>
                <h3 className="text-xl font-bold text-white">Triggered by Graph Events</h3>
                <p className="mt-2 text-gray-400">React instantly to changes in your digital twin graph. When a property updates, a relationship changes, or a threshold is crossed.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">2</Badge>
                <h3 className="text-xl font-bold text-white">Serverless Execution</h3>
                <p className="mt-2 text-gray-400">All flows run on our scalable, serverless infrastructure. You only pay for what you use, with automatic scaling.</p>
              </Card>
              <Card className="rounded-xl p-8 text-center">
                <Badge className="mb-4 bg-[#1E9E95]">3</Badge>
                <h3 className="text-xl font-bold text-white">Enterprise Integrations</h3>
                <p className="mt-2 text-gray-400">Native connectors for Slack, Teams, ServiceNow, Salesforce, and hundreds of other enterprise systems.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-12 md:py-20 bg-black/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Common Use Cases</h2>
              <p className="mt-4 text-lg text-gray-400">From simple notifications to complex automation workflows.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="feature-card rounded-xl p-8">
                <ArrowRight className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Predictive Maintenance</h3>
                <p className="mt-2 text-gray-400">Automatically create work orders when equipment shows signs of wear, notify technicians, and order replacement parts.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Zap className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Real-Time Alerting</h3>
                <p className="mt-2 text-gray-400">Send intelligent alerts to the right people at the right time, with context and recommended actions.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <Workflow className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Data Pipeline Automation</h3>
                <p className="mt-2 text-gray-400">Automatically ingest, transform, and route data from multiple sources to keep your digital twin up-to-date.</p>
              </Card>
              <Card className="feature-card rounded-xl p-8">
                <img src={KonnektrLogo} alt="Integration Logo" className="h-10 w-10 text-[#1E9E95]" />
                <h3 className="mt-6 text-xl font-bold text-white">Business Process Integration</h3>
                <p className="mt-2 text-gray-400">Connect your digital twin to ERP, CRM, and other business systems for seamless operational workflows.</p>
              </Card>
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-[#2D4263] to-[#1E9E95] text-center">
              <img src={KonnektrLogo} alt="Konnektr Logo" className="mx-auto h-10 w-10 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Orchestrate Your Digital Twin?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">Start building intelligent workflows that connect your digital twin to the real world. No complex setup required.</p>
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