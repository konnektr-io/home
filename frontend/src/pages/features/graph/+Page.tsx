import {
  DatabaseZap,
  Shield,
  Zap,
  Layers,
  Code2,
  Terminal,
  Network,
} from "lucide-react";
import { useEffect } from "react";
import { Card } from "../../../components/ui/card.js";
import { trackProductPageView } from "../../../utils/analytics.js";

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/graph");
  }, []);

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero: The Engine */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-brand-teal mb-4 border border-brand-teal/20 bg-brand-teal/5 rounded">
            <DatabaseZap className="h-3 w-3" />
            ENGINE_SPEC
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The <span className="gradient-text">Graph Engine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Under the hood: PostgreSQL + Apache AGE + pgvector.
            <br />
            The robustness of a relational database with the flexibility of a
            graph.
          </p>
        </div>
      </section>

      {/* Tech Stack Spec */}
      <section className="py-20 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0B111D] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <DatabaseZap className="text-brand-teal" /> Postgres 16
              </h3>
              <p className="text-muted-foreground">
                The world's most advanced open source relational database. ACID
                compliant, battle-tested, and ubiquitous. We don't reinvent the
                wheel; we stand on the shoulders of giants.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-[#0B111D] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="text-brand-teal" /> Apache AGE
              </h3>
              <p className="text-muted-foreground">
                A Graph extension for PostgreSQL. Enables Cypher queries
                directly within SQL. Treat your data as a graph whiles keeping
                relational reliability.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-[#0B111D] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="text-brand-teal" /> pgvector
              </h3>
              <p className="text-muted-foreground">
                Open-source vector similarity search for Postgres. Store
                embeddings alongside graph nodes for true hybrid search
                (Semantic + Structural).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Schema Validation */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Hallucination-Proof Schemas
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most vector DBs are schema-less JSON dumps. That works for chat
              bots, but fails for industrial agents.
              <br />
              <br />
              Konnektr enforces strict{" "}
              <strong>DTDL (Digital Twin Definition Language)</strong> models.
              If an agent tries to write a property that doesn't exist in the
              model, the database rejects it.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white">
                <Shield className="text-brand-teal h-5 w-5" /> Strict Typing
                (Inheritance, Interfaces)
              </li>
              <li className="flex items-center gap-3 text-white">
                <Shield className="text-brand-teal h-5 w-5" /> Relationship
                Cardinality Validation
              </li>
              <li className="flex items-center gap-3 text-white">
                <Shield className="text-brand-teal h-5 w-5" /> Unit Validation
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0B111D] p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">
                STDERR
              </span>
            </div>
            <pre className="font-mono text-sm text-red-400 overflow-x-auto">
              Error: Property 'temprature' is not defined in model
              'dtmi:com:example:Sensor;1'.
              <br />
              Did you mean 'temperature'?
              <br />
              <br />
              Transaction rolled back.
            </pre>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section
        className="py-20 md:py-28 bg-black/10"
        aria-label="Graph Code Examples"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for Developers & AI Agents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Integrate Graph with your existing tools or build semantic
              knowledge bases for AI applications. Compatible with Azure Digital
              Twins SDK and standard REST APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Azure Digital Twins SDK Compatibility */}
            <Card className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/20 text-brand-teal rounded-full text-sm font-medium mb-4">
                  <Shield className="h-4 w-4" />
                  Azure DT SDK Compatible
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Use Existing Azure Tools
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Drop-in replacement for Azure Digital Twins. Use the official
                  Azure SDK with your Konnektr Graph endpoint—no code changes
                  required.
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-white/10 overflow-x-auto">
                <pre className="text-xs text-green-400 font-mono">
                  <code>{`# Python example
from azure.digitaltwins.core import DigitalTwinsClient
from azure.identity import DefaultAzureCredential

# Point to your Konnektr Graph instance
endpoint = "https://<resource-id>.api.graph.konnektr.io"
credential = DefaultAzureCredential()

client = DigitalTwinsClient(endpoint, credential)

# Query your digital twins
query = "SELECT twin, rel, sensor FROM DIGITALTWINS MATCH (twin:Twin)-[rel:isObservedBy]->(sensor:Twin)
WHERE sensor.$dtId = 'sensor-001'
twins = client.query_twins(query)

for twin in twins:
    print(twin)`}</code>
                </pre>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Works with Azure.DigitalTwins.Core SDK (Python, .NET,
                JavaScript)
              </div>
            </Card>

            {/* AI Agent Integration */}
            <Card className="p-8 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border-brand-teal/30">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-sm font-medium mb-4">
                  <Network className="h-4 w-4" />
                  Perfect for AI Agents
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Semantic Knowledge for AI
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Provide rich contextual knowledge to your AI agents. Query
                  relationships and semantic data through simple REST APIs.
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-brand-teal/30 overflow-x-auto">
                <pre className="text-xs text-green-400 font-mono">
                  <code>{`# REST API example for AI agent context
import requests

api_url = "https://<resource-id>.api.graph.konnektr.io"
headers = {"Authorization": "Bearer <token>"}

# Get related entities for RAG context
query = """
MATCH (twin:Twin)-[rel:isObservedBy]->(sensor:Twin {\`$dtId\`: 'sensor-001'})
RETURN twin, rel, sensor
"""

response = requests.post(
    f"{api_url}/query",
    headers=headers,
    json={"query": query}
)

context = response.json()
# Feed context to your LLM or agent`}</code>
                </pre>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Standard REST API—works with any programming language or AI
                framework
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Graph vs Alternatives */}
      <section className="py-20 md:py-28" aria-label="Graph Advantages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Graph Over Alternatives?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Compare Graph with other solutions and see why growing companies
              choose us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* vs SQL Databases */}
            <Card className="p-6 bg-white/3 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  vs SQL Databases
                </h3>
                <p className="text-sm text-muted-foreground">
                  Traditional relational databases
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Complex JOINs for relationships
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Multiple table joins get expensive fast
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Schema migrations are painful
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Adding relationships breaks existing code
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Graph: Natural relationships
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Query relationships as you think about them
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* vs Graph Databases */}
            <Card className="p-6 bg-white/3 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  vs Proprietary Graphs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Neo4j, Amazon Neptune, etc.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Expensive licensing costs
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Enterprise pricing that hurts growth
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Vendor lock-in risks
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hard to migrate away when you grow
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Graph: Open source & PostgreSQL
                      </p>
                      <p className="text-xs text-muted-foreground">
                        No lock-in, audit the code, trust the foundation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* vs Document Databases */}
            <Card className="p-6 bg-white/3 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  vs Document Databases
                </h3>
                <p className="text-sm text-muted-foreground">
                  MongoDB, CouchDB, etc.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      No relationship enforcement
                    </p>
                    <p className="text-xs text-muted-foreground">
                      References can break without validation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Complex queries for connected data
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Multiple queries needed for relationship traversal
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Graph: Relationships as first-class citizens
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Validate connections, traverse efficiently
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
