import {
  Bot,
  DatabaseZap,
  ArrowRight,
  MonitorPlay,
  Terminal,
  Code2,
  Radio,
  Network,
  Share2,
  Shield,
  Zap,
} from "lucide-react";
import { navigate } from "vike/client/router";
import { Card } from "../../components/ui/card.js";
import { Button } from "../../components/ui/button.js";
import { trackDeployClick } from "../../utils/analytics.js";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Home Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Home Hero Content"
        >
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10 font-mono">
            $ init graph-memory
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            <span className="gradient-text">Industrial Memory</span> for AI
            Agents
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            The only AI Memory platform built on{" "}
            <strong className="text-white">Postgres</strong> and{" "}
            <strong className="text-white">Industrial Graph Theory</strong>.
            <br />
            Give your agents hallucination-proof context with validated schemas
            and hybrid search.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&utm_source=home&utm_medium=cta&utm_campaign=launch&utm_content=hero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
            >
              Deploy Graph
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://docs.konnektr.io/docs/graph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 border border-white/20 text-foreground bg-brand-dark hover:bg-white/10"
            >
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* Why AI Agents Need Semantic Graphs */}
      <section
        className="py-20 md:py-28 bg-black/10"
        aria-label="Why AI Agents Need Semantic Graphs"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why AI Agents Need Semantic Graphs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vector databases give you similarity search. But AI agents need
              more than embeddings—they need relationships they can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem Side */}
            <div className="rounded-xl p-8 bg-red-950/20 border border-red-500/20">
              <h3 className="text-xl font-bold text-white mb-4">
                The Problem with Vector-Only RAG
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <span>
                    No guaranteed relationships between retrieved chunks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <span>
                    Embeddings can contradict without schema enforcement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <span>No way to traverse connections between entities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <span>Context degrades as knowledge base scales</span>
                </li>
              </ul>
            </div>

            {/* Solution Side */}
            <div className="rounded-xl p-8 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border border-brand-teal/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Graph + Vector = Agent Intelligence
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                  <span>
                    <strong className="text-white">Similarity search</strong>{" "}
                    (vector) + relationship traversal (graph)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                  <span>
                    <strong className="text-white">Schema validation</strong>{" "}
                    prevents contradictory information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                  <span>
                    <strong className="text-white">
                      Traverse entity connections
                    </strong>{" "}
                    for richer context
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                  <span>
                    <strong className="text-white">Hybrid query:</strong> "Find
                    similar sensors AND their upstream assets"
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Steps / How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1: Define */}
            <div className="bg-[#0B111D] border border-white/10 rounded-xl p-6 font-mono text-sm relative overflow-hidden group hover:border-brand-teal/50 transition-colors">
              <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-brand-teal/20 transition-colors">
                01
              </div>
              <div className="flex items-center gap-2 mb-4 text-brand-teal">
                <Code2 className="h-4 w-4" />
                <span className="font-bold">DEFINE</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Enforce strict DTDL schemas. Agents cannot write invalid data.
              </p>
            </div>

            {/* Step 2: Ingest */}
            <div className="bg-[#0B111D] border border-white/10 rounded-xl p-6 font-mono text-sm relative overflow-hidden group hover:border-brand-teal/50 transition-colors">
              <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-brand-teal/20 transition-colors">
                02
              </div>
              <div className="flex items-center gap-2 mb-4 text-brand-teal">
                <Terminal className="h-4 w-4" />
                <span className="font-bold">INGEST</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Stream vectors and graph nodes via robust APIs.
              </p>
            </div>

            {/* Step 3: Query */}
            <div className="bg-[#0B111D] border border-white/10 rounded-xl p-6 font-mono text-sm relative overflow-hidden group hover:border-brand-teal/50 transition-colors">
              <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-brand-teal/20 transition-colors">
                03
              </div>
              <div className="flex items-center gap-2 mb-4 text-brand-teal">
                <DatabaseZap className="h-4 w-4" />
                <span className="font-bold">QUERY</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Retrieve context with hybrid vector + graph search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid ("Konnektr Platform") */}
      <section
        id="features"
        className="py-20 md:py-28 bg-black/10"
        aria-label="Platform Features"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Konnektr Platform
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete suite of tools to build, manage, and scale your AI
              Memory.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Graph Database */}
            <div
              onClick={() => navigate("/features/graph")}
              className="feature-card group rounded-xl bg-[#0B111D] border border-white/10 p-6 cursor-pointer hover:border-brand-teal/50 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-brand-teal/10 flex items-center justify-center mb-6 text-brand-teal group-hover:scale-110 transition-transform">
                <DatabaseZap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-teal transition-colors">
                Graph Database
              </h3>
              <p className="text-sm text-muted-foreground">
                Industrial-grade graph engine built on Postgres & Apache AGE.
                Hybrid vector search included.
              </p>
            </div>

            {/* Events & Streaming */}
            <div
              onClick={() => navigate("/features/events")}
              className="feature-card group rounded-xl bg-[#0B111D] border border-white/10 p-6 cursor-pointer hover:border-brand-teal/50 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Radio className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Events & Streaming
              </h3>
              <p className="text-sm text-muted-foreground">
                Push graph updates to Kafka, MQTT, and Webhooks. Sync history to
                Azure Data Explorer.
              </p>
            </div>

            {/* MCP Server */}
            <div
              onClick={() => navigate("/features/mcp")}
              className="feature-card group rounded-xl bg-[#0B111D] border border-white/10 p-6 cursor-pointer hover:border-brand-teal/50 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                MCP Server
              </h3>
              <p className="text-sm text-muted-foreground">
                Standard protocol to connect Claude, Cursor, and other agents
                directly to your memory.
              </p>
            </div>

            {/* Graph Explorer */}
            <div
              onClick={() => navigate("/features/explorer")}
              className="feature-card group rounded-xl bg-[#0B111D] border border-white/10 p-6 cursor-pointer hover:border-brand-teal/50 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <MonitorPlay className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Graph Explorer
              </h3>
              <p className="text-sm text-muted-foreground">
                Visual debugger and query builder. Inspect your ontology and
                verify agent actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28" aria-label="Use Cases">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for Complexity
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how Graph enables digital twins that bring value to the
              physical world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use Case 1: Complex System Modeling */}
            <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10">
              <div className="bg-brand-dark inline-block p-3 rounded-lg mb-4 text-brand-teal">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Complex Dependencies
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Codebases, supply chains, and industrial processes have strict
                dependencies. Vectors alone miss the context of "what depends on
                what".
              </p>
              <div className="text-sm text-brand-teal font-mono">
                "If we update Module A, which 50 other services will break?"
              </div>
            </Card>

            {/* Use Case 2: Spatial Reasoning */}
            <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10">
              <div className="bg-brand-dark inline-block p-3 rounded-lg mb-4 text-purple-400">
                <Radio className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Spatial Reasoning
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Traffic, logistics, and robotics agents need to understand
                "where". Konnektr models topology natively.
              </p>
              <div className="text-sm text-purple-400 font-mono">
                "Find the optimal path from A to B avoiding Zone X."
              </div>
            </Card>

            {/* Use Case 3: Lineage & Governance */}
            <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10">
              <div className="bg-brand-dark inline-block p-3 rounded-lg mb-4 text-blue-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Lineage & Governance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Legal and Compliance agents must trace every decision back to a
                source. Graph lineage provides an audit trail.
              </p>
              <div className="text-sm text-blue-400 font-mono">
                "Show me the regulation node that justified this decision."
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer / Open Source */}
      <section
        className="py-20 bg-gradient-to-b from-brand-dark to-brand-blue/10"
        aria-label="Bottom CTA"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to upgrade your Agent's Memory?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=free"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-black rounded-lg hover:bg-brand-teal/90 transition-colors font-medium text-lg"
              >
                <span>Start Free</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
