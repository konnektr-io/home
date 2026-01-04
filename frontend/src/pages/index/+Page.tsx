import {
  ArrowRight,
  Database,
  Network,
  Search,
  Shield,
  Layers,
  GitBranch,
  Bot,
  ExternalLink,
  Check,
  ChevronRight,
} from "lucide-react";
import { navigate } from "vike/client/router";

// Code block component with syntax highlighting
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

// MCP Tool Call visualization component
function MCPToolCall({
  toolName,
  input,
  output,
  thinking,
}: {
  toolName: string;
  input: string;
  output: string;
  thinking?: string;
}) {
  return (
    <div className="space-y-3">
      {thinking && (
        <div className="text-sm text-muted-foreground italic">{thinking}</div>
      )}
      <div className="mcp-tool-call rounded-r-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Network className="h-4 w-4 text-brand-teal" />
          <span className="font-mono text-sm text-brand-teal">{toolName}</span>
        </div>
        <pre className="text-xs text-muted-foreground overflow-x-auto">
          {input}
        </pre>
      </div>
      <div className="pl-4 text-sm text-foreground">{output}</div>
    </div>
  );
}

export default function Page() {
  const cypherQueryCode = `<span class="keyword">MATCH</span> (file:<span class="function">Twin</span>)-[:<span class="property">imports</span>]->(dep:<span class="function">Twin</span>)
<span class="keyword">WHERE</span> file.\`$metadata\`.\`$model\` = <span class="string">'dtmi:code:Module;1'</span>
  <span class="keyword">AND</span> dep.name = <span class="string">'auth-service'</span>
<span class="keyword">RETURN</span> file.path, file.lastModified
<span class="keyword">ORDER BY</span> <span class="function">l2_distance</span>(file.embedding, $query_vector)
<span class="keyword">LIMIT</span> <span class="number">10</span>`;

  const dtdlModelCode = `{
  <span class="property">"@id"</span>: <span class="string">"dtmi:code:Module;1"</span>,
  <span class="property">"@type"</span>: <span class="string">"Interface"</span>,
  <span class="property">"contents"</span>: [
    {
      <span class="property">"@type"</span>: <span class="string">"Property"</span>,
      <span class="property">"name"</span>: <span class="string">"path"</span>,
      <span class="property">"schema"</span>: <span class="string">"string"</span>
    },
    {
      <span class="property">"@type"</span>: <span class="string">"Property"</span>,
      <span class="property">"name"</span>: <span class="string">"embedding"</span>,
      <span class="property">"schema"</span>: { <span class="property">"@type"</span>: <span class="string">"Array"</span>, <span class="property">"elementSchema"</span>: <span class="string">"double"</span> }
    },
    {
      <span class="property">"@type"</span>: <span class="string">"Relationship"</span>,
      <span class="property">"name"</span>: <span class="string">"imports"</span>,
      <span class="property">"target"</span>: <span class="string">"dtmi:code:Module;1"</span>
    }
  ]
}`;

  const mcpConfigCode = `{
  <span class="property">"mcpServers"</span>: {
    <span class="property">"konnektr-memory"</span>: {
      <span class="property">"httpUrl"</span>: <span class="string">"https://mcp.graph.konnektr.io/mcp?resource_id={resource_id}"</span>
    }
  }
}`;

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32" aria-label="Hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-teal font-mono text-sm mb-6 tracking-wide">
              SEMANTIC MEMORY FOR AI AGENTS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Build knowledge graphs
              <br />
              your agents can trust
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Validated property graphs with vector embeddings. Give your agents
              structured semantic context instead of raw document chunks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 bg-brand-teal text-black hover:bg-brand-teal/90 transition-colors"
              >
                Deploy a Graph
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://docs.konnektr.io/docs/graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 transition-colors"
              >
                Read the Docs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Problem and Solution"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem */}
              <div className="p-8 rounded-lg bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-semibold text-muted-foreground mb-6">
                  The problem with vector-only RAG
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    <span>
                      Retrieved chunks have no guaranteed relationships to each
                      other
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    <span>
                      No schema means agents can write contradictory information
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    <span>Cannot traverse dependencies or hierarchies</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0" />
                    <span>
                      Context quality degrades as the knowledge base grows
                    </span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8 rounded-lg bg-brand-teal/5 border border-brand-teal/20">
                <h3 className="text-lg font-semibold text-brand-teal mb-6">
                  Graph + Vector = Structured Memory
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-foreground">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                    <span>
                      <strong>Semantic search</strong> combined with
                      relationship traversal
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                    <span>
                      <strong>Schema validation</strong> prevents invalid data
                      at write time
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                    <span>
                      <strong>Navigate connections</strong> between entities for
                      richer context
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                    <span>
                      <strong>Hybrid queries:</strong> "Find similar modules
                      that import auth-service"
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Technical Deep Dive */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="How it works"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How it works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every graph instance runs PostgreSQL with Apache AGE and
                pgvector. You or your agents define schemas, then write
                validated entities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: Define Schema */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal font-mono text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Define your ontology
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Create DTDL models that define what entities exist and how
                  they relate. You or your agents can define schemas, and data
                  writes are validated against them.
                </p>
                <CodeBlock
                  code={dtdlModelCode}
                  language="JSON"
                  filename="module.dtdl.json"
                />
              </div>

              {/* Step 2: Ingest Data */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal font-mono text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Ingest via MCP, SDK or REST API
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use the SDK or REST API directly or connect AI agents via the
                  Model Context Protocol. Every write is validated against your
                  models.
                </p>
                <CodeBlock
                  code={mcpConfigCode}
                  language="JSON"
                  filename="claude_desktop_config.json"
                />
              </div>

              {/* Step 3: Query */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal font-mono text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Query with Cypher + vectors
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Combine graph traversal with semantic similarity in a single
                  query. Navigate relationships and rank by embedding distance.
                </p>
                <CodeBlock
                  code={cypherQueryCode}
                  language="Cypher"
                  filename="query.cypher"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Integration Demo */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="MCP Integration"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-brand-teal font-mono text-sm mb-4">
                  MODEL CONTEXT PROTOCOL
                </p>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Connect to Claude, Cursor, or any MCP client
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The MCP server exposes your graph as tools. Agents can create
                  entities, build relationships, and query the graph through
                  natural conversation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        search_digital_twins
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Semantic search across all entities
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        query_digital_twins
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Execute Cypher for graph traversal
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        create_or_replace_digital_twin
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Write validated entities to the graph
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/mcp")}
                  className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
                >
                  View all 16 MCP tools
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>

              {/* Simulated Agent Conversation */}
              <div className="terminal rounded-lg overflow-hidden">
                <div className="terminal-header px-4 py-3 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-brand-teal" />
                  <span className="text-sm text-muted-foreground">
                    Agent building codebase knowledge
                  </span>
                </div>
                <div className="p-4 space-y-6 text-sm">
                  <MCPToolCall
                    thinking="I'll search for modules related to authentication..."
                    toolName="search_digital_twins"
                    input={`{ "search_text": "authentication middleware" }`}
                    output="Found 3 modules: auth-middleware.ts, jwt-validator.ts, session-handler.ts"
                  />
                  <MCPToolCall
                    thinking="Let me see what depends on auth-middleware..."
                    toolName="query_digital_twins"
                    input={`{ "query": "MATCH (m:Twin)-[:imports]->(auth:Twin {name: 'auth-middleware'}) RETURN m.path" }`}
                    output="12 modules import auth-middleware: api/routes/users.ts, api/routes/admin.ts, ..."
                  />
                  <MCPToolCall
                    thinking="I'll add a note about this dependency pattern..."
                    toolName="create_or_replace_digital_twin"
                    input={`{ "twin_id": "note-auth-pattern", "model_id": "dtmi:code:ArchitecturalNote;1", "properties": { "content": "auth-middleware is a critical dependency..." } }`}
                    output="Created architectural note linked to auth-middleware"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-white/5" aria-label="Use Cases">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built for structured domains
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                When your agents need to understand relationships, not just
                content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-brand-teal/30 transition-colors">
                <GitBranch className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Codebase Knowledge
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Map modules, dependencies, and architectural decisions. Ask
                  "what breaks if we change this?" and get graph-backed answers.
                </p>
                <code className="text-xs text-brand-teal font-mono">
                  "Which services depend on the payment module?"
                </code>
              </div>

              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-brand-teal/30 transition-colors">
                <Layers className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Industrial Systems
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Model physical assets, sensor networks, and control systems.
                  Agents reason about topology and propagate changes correctly.
                </p>
                <code className="text-xs text-brand-teal font-mono">
                  "What downstream equipment is affected by pump failure?"
                </code>
              </div>

              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:border-brand-teal/30 transition-colors">
                <Shield className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Compliance & Audit
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track decision lineage and regulatory requirements. Every node
                  has provenance, every relationship is typed.
                </p>
                <code className="text-xs text-brand-teal font-mono">
                  "Show the regulation that requires this control"
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Technology"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white">
                Built on proven foundations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <Database className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-white mb-2">PostgreSQL</h3>
                <p className="text-sm text-muted-foreground">
                  ACID compliant, battle-tested. Your data lives in the most
                  reliable database in the world.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <Network className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-white mb-2">Apache AGE</h3>
                <p className="text-sm text-muted-foreground">
                  Graph extension for Postgres. Native Cypher queries without
                  leaving your relational database.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <Search className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="font-semibold text-white mb-2">pgvector</h3>
                <p className="text-sm text-muted-foreground">
                  Vector similarity search alongside graph nodes. True hybrid
                  queries in a single database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 border-t border-white/5" aria-label="Pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start free, scale as you grow
            </h2>
            <p className="text-muted-foreground mb-8">
              The Developer tier is free forever with 500 entities and full API
              access. Upgrade when you need more capacity or enterprise
              features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 bg-brand-teal text-black hover:bg-brand-teal/90 transition-colors cursor-pointer"
              >
                Deploy Free Graph
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <button
                onClick={() => navigate("/pricing")}
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 transition-colors cursor-pointer"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
