import {
  MonitorPlay,
  Network,
  DatabaseZap,
  List,
  ArrowRight,
  Search,
  Eye,
  Edit3,
  Table,
  GitBranch,
  Layers,
  Terminal,
} from "lucide-react";
import { useEffect } from "react";
import { Button } from "../../components/ui/button.js";
import { trackProductPageView } from "../../utils/analytics.js";

function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}) {
  return (
    <div className="code-block rounded-lg overflow-hidden">
      {filename && (
        <div className="terminal-header px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            {filename}
          </span>
          <span className="text-xs text-muted-foreground">{language}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}

function ExplorerUIDemo() {
  return (
    <div className="code-block rounded-xl overflow-hidden">
      {/* Window Header */}
      <div className="terminal-header px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono">
            Graph Explorer — konnektr.io
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-brand-teal/20 text-brand-teal rounded">
            Connected
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[400px]">
        {/* Left Sidebar - Ontology Browser */}
        <div className="w-56 border-r border-white/10 p-3 flex flex-col">
          <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
            Ontology
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-brand-teal/10 text-brand-teal">
              <Layers className="h-3.5 w-3.5" />
              <span>Customer</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded text-muted-foreground hover:bg-white/5">
              <Layers className="h-3.5 w-3.5" />
              <span>Product</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded text-muted-foreground hover:bg-white/5">
              <Layers className="h-3.5 w-3.5" />
              <span>Order</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded text-muted-foreground hover:bg-white/5">
              <GitBranch className="h-3.5 w-3.5" />
              <span className="text-muted-foreground/70">purchased</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded text-muted-foreground hover:bg-white/5">
              <GitBranch className="h-3.5 w-3.5" />
              <span className="text-muted-foreground/70">contains</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="text-xs text-muted-foreground">
              <span className="text-white font-medium">3</span> models,{" "}
              <span className="text-white font-medium">2</span> relationships
            </div>
          </div>
        </div>

        {/* Center - Graph Visualization */}
        <div className="flex-1 relative bg-[oklch(0.06_0.02_240)]">
          {/* Query Bar */}
          <div className="absolute top-3 left-3 right-3 z-10">
            <div className="bg-[oklch(0.10_0.02_240)] rounded-lg border border-white/10 px-3 py-2 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-mono text-muted-foreground">
                MATCH (c:Customer)-[:purchased]-&gt;(p:Product) RETURN c, p
                LIMIT 10
              </span>
            </div>
          </div>

          {/* Graph Nodes */}
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Edges */}
            <line
              x1="200"
              y1="150"
              x2="100"
              y2="80"
              className="schematic-line schematic-line-active"
            />
            <line
              x1="200"
              y1="150"
              x2="300"
              y2="80"
              className="schematic-line schematic-line-active"
            />
            <line
              x1="200"
              y1="150"
              x2="120"
              y2="220"
              className="schematic-line schematic-line-active"
            />
            <line
              x1="200"
              y1="150"
              x2="280"
              y2="220"
              className="schematic-line schematic-line-active"
            />

            {/* Central Node */}
            <circle
              cx="200"
              cy="150"
              r="24"
              className="fill-brand-teal/20 stroke-brand-teal"
              strokeWidth="2"
            />
            <text
              x="200"
              y="154"
              textAnchor="middle"
              className="fill-brand-teal text-xs font-medium"
            >
              Acme
            </text>

            {/* Connected Nodes */}
            <circle
              cx="100"
              cy="80"
              r="18"
              className="fill-white/10 stroke-white/40"
              strokeWidth="1.5"
            />
            <text
              x="100"
              y="84"
              textAnchor="middle"
              className="fill-white/70 text-[10px]"
            >
              Pro
            </text>

            <circle
              cx="300"
              cy="80"
              r="18"
              className="fill-white/10 stroke-white/40"
              strokeWidth="1.5"
            />
            <text
              x="300"
              y="84"
              textAnchor="middle"
              className="fill-white/70 text-[10px]"
            >
              Basic
            </text>

            <circle
              cx="120"
              cy="220"
              r="18"
              className="fill-white/10 stroke-white/40"
              strokeWidth="1.5"
            />
            <text
              x="120"
              y="224"
              textAnchor="middle"
              className="fill-white/70 text-[10px]"
            >
              Widget
            </text>

            <circle
              cx="280"
              cy="220"
              r="18"
              className="fill-white/10 stroke-white/40"
              strokeWidth="1.5"
            />
            <text
              x="280"
              y="224"
              textAnchor="middle"
              className="fill-white/70 text-[10px]"
            >
              Gadget
            </text>
          </svg>

          {/* View Toggle */}
          <div className="absolute bottom-3 left-3 flex gap-1">
            <button className="px-3 py-1.5 text-xs rounded bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
              Graph
            </button>
            <button className="px-3 py-1.5 text-xs rounded text-muted-foreground hover:bg-white/5 border border-white/10">
              Table
            </button>
          </div>
        </div>

        {/* Right Panel - Node Details */}
        <div className="w-64 border-l border-white/10 p-3">
          <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            Node Details
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-xs text-muted-foreground mb-1">ID</div>
              <div className="text-sm font-mono text-white">
                customer-acme-corp
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Model</div>
              <div className="text-sm font-mono text-brand-teal">
                dtmi:konnektr:Customer;1
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">
                Properties
              </div>
              <div className="space-y-1 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">name</span>
                  <span className="text-white">"Acme Corp"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">tier</span>
                  <span className="text-white">"enterprise"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">healthScore</span>
                  <span className="text-white">85</span>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs text-muted-foreground mb-1">
                Relationships
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-white">4</span> outgoing,{" "}
                <span className="text-white">2</span> incoming
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/explorer");
  }, []);

  const cypherExample = `<span class="comment">-- Find customers who purchased multiple products</span>
<span class="keyword">MATCH</span> (c<span class="punctuation">:</span>Customer)<span class="punctuation">-[</span><span class="punctuation">:</span>purchased<span class="punctuation">]-></span>(p<span class="punctuation">:</span>Product)
<span class="keyword">WITH</span> c<span class="punctuation">,</span> <span class="function">count</span><span class="punctuation">(</span>p<span class="punctuation">)</span> <span class="keyword">AS</span> productCount
<span class="keyword">WHERE</span> productCount <span class="operator">></span> <span class="number">1</span>
<span class="keyword">RETURN</span> c<span class="punctuation">.</span>name<span class="punctuation">,</span> productCount
<span class="keyword">ORDER BY</span> productCount <span class="keyword">DESC</span>`;

  const traversalExample = `<span class="comment">-- Trace relationship path between entities</span>
<span class="keyword">MATCH</span> path <span class="operator">=</span> <span class="punctuation">(</span>start<span class="punctuation">:</span>Customer <span class="punctuation">{</span>id<span class="punctuation">:</span> <span class="string">'acme-corp'</span><span class="punctuation">})</span>
      <span class="punctuation">-[*</span><span class="number">1</span><span class="punctuation">..</span><span class="number">3</span><span class="punctuation">]-></span><span class="punctuation">(</span>end<span class="punctuation">)</span>
<span class="keyword">RETURN</span> path<span class="punctuation">,</span> <span class="function">length</span><span class="punctuation">(</span>path<span class="punctuation">)</span> <span class="keyword">AS</span> depth`;

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-brand-teal mb-4 border border-brand-teal/30 bg-brand-teal/5 rounded">
            <MonitorPlay className="h-3 w-3" />
            VISUAL_DEBUGGER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Graph Explorer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See what your agents see. Inspect the knowledge graph, debug
            relationships, execute queries, and validate schema in real-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-brand-teal text-black hover:bg-brand-teal/90 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open("https://explorer.graph.konnektr.io", "_blank")
              }
            >
              Launch Explorer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://docs.konnektr.io/docs/graph-explorer",
                  "_blank"
                )
              }
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Visual Demo */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <ExplorerUIDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Debug Your Knowledge Graph
            </h2>
            <p className="text-muted-foreground">
              A visual interface designed for developers building AI agents.
              Understand exactly what data your agents can access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card p-6 rounded-xl">
              <Network className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Ontology Browser
              </h3>
              <p className="text-sm text-muted-foreground">
                Browse your DTDL schema hierarchy. See what entity types and
                relationships are defined before creating data.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <DatabaseZap className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Query Console
              </h3>
              <p className="text-sm text-muted-foreground">
                Write Cypher queries with syntax highlighting. Execute against
                your graph and see results instantly.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Eye className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Graph Visualization
              </h3>
              <p className="text-sm text-muted-foreground">
                Interactive force-directed graph. Click nodes to expand
                relationships, drag to rearrange, zoom to explore.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Table className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Table View</h3>
              <p className="text-sm text-muted-foreground">
                Switch to tabular view for detailed property inspection. Sort,
                filter, and export query results.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Edit3 className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Inline Editing
              </h3>
              <p className="text-sm text-muted-foreground">
                Modify node properties directly. Changes are validated against
                your DTDL schema before saving.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Search className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                Semantic Search
              </h3>
              <p className="text-sm text-muted-foreground">
                Test vector similarity queries. See which nodes match your
                semantic search and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Query Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Query with Cypher
            </h2>
            <p className="text-muted-foreground">
              The same query language your agents use. Test queries in the
              Explorer before deploying them in production.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <List className="h-5 w-5 text-brand-teal" />
                Aggregation Queries
              </h3>
              <CodeBlock
                code={cypherExample}
                language="Cypher"
                filename="aggregation.cypher"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-brand-teal" />
                Path Traversal
              </h3>
              <CodeBlock
                code={traversalExample}
                language="Cypher"
                filename="traversal.cypher"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for Agent Development
            </h2>
            <p className="text-muted-foreground">
              The Explorer is your window into what AI agents experience when
              they query your knowledge graph.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <Search className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Debug Agent Queries
              </h3>
              <p className="text-sm text-muted-foreground">
                Run the exact same MCP tool calls your agent makes. See what
                data it receives and understand its decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <Network className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Validate Relationships
              </h3>
              <p className="text-sm text-muted-foreground">
                Verify that entity connections are correct. Catch missing or
                incorrect relationships before they confuse your agents.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <Layers className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Schema Evolution
              </h3>
              <p className="text-sm text-muted-foreground">
                Preview schema changes before applying them. See how new models
                and relationships fit into your existing ontology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Your Knowledge Graph
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Graph Explorer is available to all Konnektr users. Start
            visualizing and debugging your agent's memory today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-brand-teal text-black hover:bg-brand-teal/90 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open("https://explorer.graph.konnektr.io", "_blank")
              }
            >
              Launch Explorer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph",
                  "_blank"
                )
              }
            >
              Deploy Graph
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
