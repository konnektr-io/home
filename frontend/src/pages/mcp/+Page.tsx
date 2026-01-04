import {
  Network,
  Shield,
  Bot,
  Database,
  Search,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useEffect } from "react";
import { trackProductPageView } from "../../utils/analytics.js";

// Code block with syntax highlighting
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

// Tool documentation component
function ToolDoc({
  name,
  description,
  example,
}: {
  name: string;
  description: string;
  example: string;
}) {
  return (
    <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 hover:border-brand-teal/30 transition-colors">
      <code className="text-sm font-mono text-brand-teal">{name}</code>
      <p className="text-sm text-muted-foreground mt-2 mb-3">{description}</p>
      <pre className="text-xs text-muted-foreground overflow-x-auto bg-white/[0.02] p-2 rounded">
        {example}
      </pre>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/mcp");
  }, []);

  const claudeConfigCode = `{
  <span class="property">"mcpServers"</span>: {
    <span class="property">"konnektr-memory"</span>: {
      <span class="property">"httpUrl"</span>: <span class="string">"https://mcp.graph.konnektr.io/mcp?resource_id={resource_id}"</span>
    }
  }
}`;

  const pythonAgentCode = `<span class="keyword">from</span> mcp <span class="keyword">import</span> ClientSession
<span class="keyword">from</span> mcp.client.streamable_http <span class="keyword">import</span> streamablehttp_client

<span class="keyword">async def</span> <span class="function">build_codebase_knowledge</span>(repo_path: str):
    url = <span class="string">"https://mcp.graph.konnektr.io/mcp?resource_id={resource_id}"</span>

    <span class="keyword">async with</span> streamablehttp_client(url) <span class="keyword">as</span> (read, write):
        <span class="keyword">async with</span> ClientSession(read, write) <span class="keyword">as</span> session:
            <span class="keyword">await</span> session.initialize()

            <span class="comment"># Create a module entity in the graph</span>
            result = <span class="keyword">await</span> session.call_tool(
                <span class="string">"create_or_replace_digital_twin"</span>,
                arguments={
                    <span class="string">"twin_id"</span>: <span class="string">"module-auth-service"</span>,
                    <span class="string">"model_id"</span>: <span class="string">"dtmi:code:Module;1"</span>,
                    <span class="string">"properties"</span>: {
                        <span class="string">"path"</span>: <span class="string">"src/auth/service.ts"</span>,
                        <span class="string">"description"</span>: <span class="string">"Authentication service"</span>,
                        <span class="string">"embedding"</span>: embedding_vector
                    }
                }
            )

            <span class="comment"># Query for related modules</span>
            deps = <span class="keyword">await</span> session.call_tool(
                <span class="string">"query_digital_twins"</span>,
                arguments={
                    <span class="string">"query"</span>: <span class="string">"""
                        MATCH (m:Twin)-[:imports]->(auth:Twin)
                        WHERE auth.\`$dtId\` = 'module-auth-service'
                        RETURN m.path, m.description
                    """</span>
                }
            )`;

  const searchExampleCode = `<span class="comment">// Semantic search for relevant context</span>
<span class="keyword">await</span> session.call_tool(<span class="string">"search_digital_twins"</span>, {
    <span class="property">"search_text"</span>: <span class="string">"user authentication JWT validation"</span>,
    <span class="property">"model_id"</span>: <span class="string">"dtmi:code:Module;1"</span>,  <span class="comment">// Optional filter</span>
    <span class="property">"limit"</span>: <span class="number">10</span>
});

<span class="comment">// Returns entities ranked by semantic similarity</span>
<span class="comment">// [</span>
<span class="comment">//   { "$dtId": "jwt-validator", "path": "src/auth/jwt.ts", ... },</span>
<span class="comment">//   { "$dtId": "session-handler", "path": "src/auth/session.ts", ... }</span>
<span class="comment">// ]</span>`;

  const cypherExampleCode = `<span class="comment">// Traverse graph relationships with Cypher</span>
<span class="keyword">await</span> session.call_tool(<span class="string">"query_digital_twins"</span>, {
    <span class="property">"query"</span>: <span class="string">\`
        MATCH (root:Twin {name: 'api-gateway'})
        MATCH (root)-[:imports*1..3]->(dep:Twin)
        WHERE dep.\\\`$metadata\\\`.\\\`$model\\\` = 'dtmi:code:Module;1'
        RETURN DISTINCT dep.path, dep.description
        ORDER BY dep.path
    \`</span>
});

<span class="comment">// Find all modules within 3 hops of api-gateway</span>`;

  const hybridExampleCode = `<span class="comment">// Combine vector search with graph traversal</span>
<span class="keyword">await</span> session.call_tool(<span class="string">"query_digital_twins"</span>, {
    <span class="property">"query"</span>: <span class="string">\`
        MATCH (m:Twin)-[:imports]->(dep:Twin)
        WHERE dep.name = 'auth-service'
        RETURN m.path, m.description
        ORDER BY l2_distance(m.embedding, $query_vector)
        LIMIT 5
    \`</span>
});

<span class="comment">// Find modules that import auth-service, ranked by similarity to query</span>`;

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-24 md:py-32" aria-label="Hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-teal font-mono text-sm mb-6 tracking-wide">
              MODEL CONTEXT PROTOCOL
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Connect your agents
              <br />
              to structured memory
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The MCP server exposes your Konnektr Graph as tools. Claude,
              Cursor, and custom agents can create entities, build
              relationships, and query the graph through natural conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://docs.konnektr.io/docs/graph/mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 bg-brand-teal text-black hover:bg-brand-teal/90 transition-colors"
              >
                Read MCP Docs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 transition-colors"
              >
                Deploy a Graph
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Setup */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Connection Setup"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Connect in minutes
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every Konnektr Graph instance includes a hosted MCP server.
                  Just add the httpUrl to your client config with your resource
                  ID.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Streamable HTTP Transport
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Low-latency bidirectional communication via httpUrl.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Resource-Scoped Access
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Each graph instance has its own isolated endpoint.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bot className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Works with any MCP client
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Claude Desktop, Cursor, Windsurf, or custom agents.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={claudeConfigCode}
                language="JSON"
                filename="claude_desktop_config.json"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Tool Categories"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                16 tools for graph operations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your agent gets a complete toolkit for creating, querying, and
                managing entities in the knowledge graph.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Search Tools */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-5 w-5 text-brand-teal" />
                  <h3 className="text-lg font-semibold text-white">
                    Search & Query
                  </h3>
                </div>
                <ToolDoc
                  name="search_digital_twins"
                  description="Semantic search across all entities using embeddings."
                  example={`{ "search_text": "authentication", "limit": 10 }`}
                />
                <ToolDoc
                  name="search_models"
                  description="Find DTDL models by name or description."
                  example={`{ "search_text": "user module" }`}
                />
                <ToolDoc
                  name="query_digital_twins"
                  description="Execute Cypher queries for graph traversal."
                  example={`{ "query": "MATCH (n:Twin) RETURN n LIMIT 5" }`}
                />
              </div>

              {/* CRUD Tools */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-brand-teal" />
                  <h3 className="text-lg font-semibold text-white">
                    Create & Update
                  </h3>
                </div>
                <ToolDoc
                  name="create_or_replace_digital_twin"
                  description="Create or update an entity with validated properties."
                  example={`{ "twin_id": "sensor-1", "model_id": "dtmi:...", "properties": {...} }`}
                />
                <ToolDoc
                  name="create_or_replace_relationship"
                  description="Create typed relationships between entities."
                  example={`{ "source_id": "room-1", "target_id": "sensor-1", "relationship_name": "contains" }`}
                />
                <ToolDoc
                  name="update_digital_twin"
                  description="Patch entity properties using JSON Patch operations."
                  example={`{ "twin_id": "sensor-1", "patch": [{"op": "replace", "path": "/value", "value": 72}] }`}
                />
              </div>

              {/* Schema Tools */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-5 w-5 text-brand-teal" />
                  <h3 className="text-lg font-semibold text-white">
                    Schema & Models
                  </h3>
                </div>
                <ToolDoc
                  name="create_model"
                  description="Define new DTDL models with properties and relationships."
                  example={`{ "model": { "@id": "dtmi:example:Sensor;1", ... } }`}
                />
                <ToolDoc
                  name="get_model"
                  description="Get full model definition including inherited properties."
                  example={`{ "model_id": "dtmi:example:Sensor;1" }`}
                />
                <ToolDoc
                  name="list_models"
                  description="List all models in the graph with summaries."
                  example={`{}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="py-20 border-t border-white/5" aria-label="Examples">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Real-world patterns
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how agents use these tools to build and query knowledge
                graphs.
              </p>
            </div>

            <div className="space-y-12">
              {/* Semantic Search Example */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Semantic search for context
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Use vector embeddings stored on entities to find
                    semantically similar content. Filter by model type and limit
                    results.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The search tool combines keyword matching with embedding
                    similarity, giving you the best of both approaches.
                  </p>
                </div>
                <CodeBlock
                  code={searchExampleCode}
                  language="JavaScript"
                  filename="semantic-search.js"
                />
              </div>

              {/* Graph Traversal Example */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Traverse relationships
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Use Cypher to navigate the graph structure. Find
                    dependencies, trace lineage, or explore connections between
                    entities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Variable-length path matching lets you explore N-hop
                    relationships without knowing the exact depth.
                  </p>
                </div>
                <CodeBlock
                  code={cypherExampleCode}
                  language="JavaScript"
                  filename="graph-traversal.js"
                />
              </div>

              {/* Hybrid Query Example */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Hybrid graph + vector queries
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Combine structural graph queries with vector similarity
                    ranking. Find entities that match a pattern AND are
                    semantically similar.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This is the power of Konnektr: structural constraints from
                    the graph with semantic ranking from embeddings.
                  </p>
                </div>
                <CodeBlock
                  code={hybridExampleCode}
                  language="JavaScript"
                  filename="hybrid-query.js"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Python Integration */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Python Integration"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Build custom agents
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Use the Python MCP library to build agents that maintain their
                  own knowledge graphs. Perfect for codebase understanding,
                  document processing, or any domain where relationships matter.
                </p>
                <div className="p-4 rounded-lg bg-brand-teal/5 border border-brand-teal/20">
                  <code className="text-sm font-mono text-brand-teal">
                    pip install mcp
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">
                    The official MCP Python library handles connection
                    management and authentication automatically.
                  </p>
                </div>
              </div>
              <CodeBlock
                code={pythonAgentCode}
                language="Python"
                filename="agent.py"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Get Started"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to connect your agents?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Deploy a graph and get MCP credentials in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 bg-brand-teal text-black hover:bg-brand-teal/90 transition-colors"
            >
              Deploy Graph
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://docs.konnektr.io/docs/graph/mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 transition-colors"
            >
              Read the Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
