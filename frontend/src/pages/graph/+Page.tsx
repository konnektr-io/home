import {
  Database,
  Shield,
  Search,
  Layers,
  Network,
  ArrowRight,
  ExternalLink,
  Check,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { trackProductPageView } from "../../utils/analytics.js";
import { navigate } from "vike/client/router";

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

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/graph");
  }, []);

  const dtdlSchemaCode = `{
  <span class="property">"@id"</span>: <span class="string">"dtmi:code:Module;1"</span>,
  <span class="property">"@type"</span>: <span class="string">"Interface"</span>,
  <span class="property">"displayName"</span>: { <span class="property">"en"</span>: <span class="string">"Code Module"</span> },
  <span class="property">"contents"</span>: [
    {
      <span class="property">"@type"</span>: <span class="string">"Property"</span>,
      <span class="property">"name"</span>: <span class="string">"path"</span>,
      <span class="property">"schema"</span>: <span class="string">"string"</span>,
      <span class="property">"description"</span>: { <span class="property">"en"</span>: <span class="string">"File path relative to repo root"</span> }
    },
    {
      <span class="property">"@type"</span>: <span class="string">"Property"</span>,
      <span class="property">"name"</span>: <span class="string">"embedding"</span>,
      <span class="property">"schema"</span>: { <span class="property">"@type"</span>: <span class="string">"Array"</span>, <span class="property">"elementSchema"</span>: <span class="string">"double"</span> }
    },
    {
      <span class="property">"@type"</span>: <span class="string">"Relationship"</span>,
      <span class="property">"name"</span>: <span class="string">"imports"</span>,
      <span class="property">"target"</span>: <span class="string">"dtmi:code:Module;1"</span>,
      <span class="property">"description"</span>: { <span class="property">"en"</span>: <span class="string">"Module import dependency"</span> }
    }
  ],
  <span class="property">"@context"</span>: <span class="string">"dtmi:dtdl:context;4"</span>
}`;

  const validationErrorCode = `<span class="comment">// Agent attempts to write invalid data</span>
<span class="keyword">await</span> session.call_tool(<span class="string">"create_or_replace_digital_twin"</span>, {
  <span class="property">"twin_id"</span>: <span class="string">"module-auth"</span>,
  <span class="property">"model_id"</span>: <span class="string">"dtmi:code:Module;1"</span>,
  <span class="property">"properties"</span>: {
    <span class="property">"path"</span>: <span class="string">"src/auth.ts"</span>,
    <span class="property">"temprature"</span>: <span class="number">72.5</span>  <span class="comment">// Typo + wrong property</span>
  }
});

<span class="comment">// Error: Property 'temprature' is not defined in model</span>
<span class="comment">//        'dtmi:code:Module;1'. Did you mean 'path' or 'embedding'?</span>
<span class="comment">// Transaction rolled back.</span>`;

  const hybridQueryCode = `<span class="keyword">MATCH</span> (m:<span class="function">Twin</span>)-[:<span class="property">imports</span>]->(dep:<span class="function">Twin</span>)
<span class="keyword">WHERE</span> dep.name = <span class="string">'auth-service'</span>
  <span class="keyword">AND</span> m.\`$metadata\`.\`$model\` = <span class="string">'dtmi:code:Module;1'</span>
<span class="keyword">RETURN</span> m.path, m.description
<span class="keyword">ORDER BY</span> <span class="function">l2_distance</span>(m.embedding, $query_vector)
<span class="keyword">LIMIT</span> <span class="number">10</span>

<span class="comment">-- Find modules that import auth-service</span>
<span class="comment">-- Ranked by semantic similarity to query</span>`;

  const spatialQueryCode = `<span class="keyword">MATCH</span> (sensor:<span class="function">Twin</span>)-[:<span class="property">locatedIn</span>]->(zone:<span class="function">Twin</span>)
<span class="keyword">WHERE</span> sensor.\`$metadata\`.\`$model\` = <span class="string">'dtmi:facility:Sensor;1'</span>
  <span class="keyword">AND</span> <span class="function">ST_DWithin</span>(
    sensor.location::geometry,
    <span class="function">ST_MakePoint</span>(<span class="number">-122.4194</span>, <span class="number">37.7749</span>)::geometry,
    <span class="number">1000</span>  <span class="comment">-- meters</span>
  )
<span class="keyword">RETURN</span> sensor.\`$dtId\`, sensor.reading, zone.name`;

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-24 md:py-32" aria-label="Hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-teal font-mono text-sm mb-6 tracking-wide">
              GRAPH DATABASE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              PostgreSQL with graph
              <br />
              and vector superpowers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every Graph instance runs PostgreSQL with Apache AGE for Cypher
              queries and pgvector for embeddings. Schema validation ensures
              data integrity.
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

      {/* Tech Stack */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Technology Stack"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                <Database className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  PostgreSQL
                </h3>
                <p className="text-sm text-muted-foreground">
                  The world's most advanced open-source relational database.
                  ACID compliant, battle-tested, with decades of reliability.
                  Your data is stored in standard Postgres tables.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                <Network className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Apache AGE
                </h3>
                <p className="text-sm text-muted-foreground">
                  Graph extension for PostgreSQL. Execute Cypher queries
                  directly on your data without leaving Postgres. Traverse
                  relationships with native graph performance.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                <Search className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  pgvector
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vector similarity search for embeddings. Store vectors as
                  entity properties and query with cosine or L2 distance. True
                  hybrid graph + vector queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Validation */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Schema Validation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Schema-enforced entities
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Define DTDL models that specify exactly what properties and
                  relationships are allowed. Every write is validated against
                  your schema before it touches the database.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Property validation
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Type checking, required fields, and allowed values
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Model inheritance
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Extend base models with additional properties
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-brand-teal mt-0.5" />
                    <div>
                      <div className="font-medium text-white">
                        Relationship constraints
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Define allowed relationship types and targets
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={dtdlSchemaCode}
                language="JSON"
                filename="module.dtdl.json"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Validation Error Demo */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Validation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <CodeBlock
                code={validationErrorCode}
                language="JavaScript"
                filename="validation-demo.js"
              />
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Prevent bad data at write time
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When an agent tries to write invalid data, the transaction is
                  rejected with a clear error message. No corrupted state, no
                  contradictory information.
                </p>
                <div className="p-4 rounded-lg bg-brand-teal/5 border border-brand-teal/20">
                  <p className="text-sm text-foreground">
                    <strong>Why this matters:</strong> Vector databases accept
                    any JSON. Over time, your knowledge base fills with
                    inconsistent data that confuses agents. Schema validation
                    prevents this from happening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Query Capabilities */}
      <section className="py-20 border-t border-white/5" aria-label="Queries">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Powerful query capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combine graph traversal with vector similarity in a single
                query.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hybrid Query */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Hybrid graph + vector
                </h3>
                <p className="text-sm text-muted-foreground">
                  Traverse relationships with Cypher, then rank results by
                  embedding similarity. Structure AND semantics in one query.
                </p>
                <CodeBlock
                  code={hybridQueryCode}
                  language="Cypher"
                  filename="hybrid-query.cypher"
                />
              </div>

              {/* Spatial Query */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Spatial queries with PostGIS
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full PostGIS support for geospatial data. Find entities near a
                  location, within a polygon, or along a path.
                </p>
                <CodeBlock
                  code={spatialQueryCode}
                  language="Cypher"
                  filename="spatial-query.cypher"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="Comparison"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How it compares
              </h2>
              <p className="text-muted-foreground">
                Different databases for different problems.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full comparison-table">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-muted-foreground font-medium py-4 px-6">
                      Capability
                    </th>
                    <th className="text-left text-brand-teal font-semibold py-4 px-6 bg-brand-teal/5">
                      Konnektr Graph
                    </th>
                    <th className="text-left text-muted-foreground font-medium py-4 px-6">
                      Vector DBs
                    </th>
                    <th className="text-left text-muted-foreground font-medium py-4 px-6">
                      SQL Databases
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-4 px-6 text-white">Schema validation</td>
                    <td className="py-4 px-6 bg-brand-teal/5">
                      <span className="flex items-center gap-2 text-brand-teal">
                        <Check className="h-4 w-4" /> DTDL models
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> None
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" /> Rigid tables
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white">
                      Relationship traversal
                    </td>
                    <td className="py-4 px-6 bg-brand-teal/5">
                      <span className="flex items-center gap-2 text-brand-teal">
                        <Check className="h-4 w-4" /> Native Cypher
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> Not supported
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" /> Slow JOINs
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white">Vector similarity</td>
                    <td className="py-4 px-6 bg-brand-teal/5">
                      <span className="flex items-center gap-2 text-brand-teal">
                        <Check className="h-4 w-4" /> pgvector
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" /> Primary feature
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> Extension only
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white">Hybrid queries</td>
                    <td className="py-4 px-6 bg-brand-teal/5">
                      <span className="flex items-center gap-2 text-brand-teal">
                        <Check className="h-4 w-4" /> Graph + Vector
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> Vector only
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> Keyword only
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white">ACID transactions</td>
                    <td className="py-4 px-6 bg-brand-teal/5">
                      <span className="flex items-center gap-2 text-brand-teal">
                        <Check className="h-4 w-4" /> PostgreSQL
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4" /> Eventually consistent
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" /> Full support
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Integration Callout */}
      <section
        className="py-20 border-t border-white/5"
        aria-label="MCP Integration"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-teal font-mono text-sm mb-4">
              AGENT INTEGRATION
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Every graph includes an MCP server
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect Claude, Cursor, or custom agents directly to your graph.
              16 tools for creating, querying, and managing entities.
            </p>
            <button
              onClick={() => navigate("/mcp")}
              className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-brand-teal/30 text-brand-teal hover:bg-brand-teal/5 transition-colors cursor-pointer"
            >
              Learn about MCP
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 border-t border-white/5" aria-label="Pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple, predictable pricing
            </h2>
            <p className="text-muted-foreground mb-8">
              Start free with 500 entities. Pay for capacity as you grow.
              Upgrade to Standard ($49/mo) or Enterprise when you need more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 bg-brand-teal text-black hover:bg-brand-teal/90 transition-colors"
              >
                Deploy Free Graph
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <button
                onClick={() => navigate("/pricing")}
                className="inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-8 border border-white/20 text-foreground hover:bg-white/5 transition-colors cursor-pointer"
              >
                View All Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
