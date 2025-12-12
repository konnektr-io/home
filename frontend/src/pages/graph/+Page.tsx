import {
  DatabaseZap,
  Play,
  Network,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { MailingListDialog } from "../../components/MailingListDialog.js";
import explorerScreenshot from "../../assets/explorer-screenshot.png";
import { Button } from "../../components/ui/button.js";
import { Card } from "../../components/ui/card.js";
import { graphProduct } from "../../data/products.js";
import {
  trackDeployClick,
  trackProductPageView,
  trackDocumentationClick,
} from "../../utils/analytics.js";

export default function Page() {
  useEffect(() => {
    trackProductPageView("graph");
  }, []);

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Graph Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Graph Hero Content"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            <DatabaseZap className="h-4 w-4" />
            Semantic Property Graph with Validation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Graph</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            {graphProduct.description}
            <br />
            <span className="block mt-4 text-brand-teal font-semibold text-lg">
              <span className="bg-brand-teal/10 px-2 py-1 rounded">
                Open Source
              </span>{" "}
              &mdash; All Konnektr products are open-source and available for
              self-hosting.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col items-center">
              <a
                href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&utm_source=home&utm_medium=cta&utm_campaign=launch&utm_content=graph_hero"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDeployClick("all", "graph_page")}
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
              >
                Deploy Graph Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Free tier • No credit card
                <br />
                One click signup
              </p>
            </div>
            <a
              href="https://docs.konnektr.io/docs/graph"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDocumentationClick("graph_hero")}
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 border border-white/20 text-foreground bg-brand-dark hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              View Docs
            </a>
          </div>
        </div>
      </section>
      <main>
        {/* Features Section */}
        <section
          className="py-20 md:py-28 bg-black/10"
          aria-label="Graph Features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Rich Semantic Context Made Simple
              </h2>
              <p className="mt-4 text-lg text-brand-teal font-semibold">
                Skip the RDF complexity. Property graphs with built-in
                validation for startups and growing companies who need
                meaningful data relationships.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Semantic Relationships */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <Network className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Meaningful Relationships
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Connect your data with rich semantic relationships. No RDF
                  complexity, just intuitive property graphs that grow with your
                  business.
                </p>
              </Card>
              {/* Feature 2: Built-in Validation */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Schema Validation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Prevent data corruption with built-in model validation. Ensure
                  data integrity as your startup scales without breaking
                  changes.
                </p>
              </Card>
              {/* Feature 3: Self-Hosted Trust */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue/50 text-brand-teal border border-brand-teal/50">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  Your Data, Your Control
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Built on PostgreSQL foundation you can audit and trust. Start
                  small, scale smart, without vendor lock-in or enterprise
                  complexity.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Graph Explorer Section */}
        <section className="py-20 md:py-28" aria-label="Graph Explorer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Visualize & Query with Graph Explorer
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Graph Explorer provides an intuitive interface to interact
                  with your digital twin graph. Query your data, visualize
                  relationships, and explore your semantic model without writing
                  code.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Shield className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Full Model & Data Management
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Load and inspect DTDL models, create twin and
                        relationship instances, update properties, and run
                        Cypher queries with an integrated code editor.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Network className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Relationship Visualization
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        See your digital twin relationships in an interactive
                        graph view. Understand complex data structures at a
                        glance.
                      </p>
                    </div>
                  </div>
                  {/* Future */}
                  {/* <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Real-Time Updates
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor your digital twins in real-time. See changes as
                        they happen with live data refresh.
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="mt-8">
                  <a
                    href="https://docs.konnektr.io/docs/graph/explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
                  >
                    Learn more about Graph Explorer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <div className="aspect-video rounded-xl border border-brand-teal/30 overflow-hidden">
                  <img
                    src={explorerScreenshot}
                    alt="Graph Explorer interface showing query builder and relationship visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-teal/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section
          className="py-20 md:py-28 bg-black/10"
          aria-label="Graph Problems and Solutions"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Problem Statement */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Stop Fighting Your Database
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Your growing company has complex data that traditional
                    databases can't handle. You have:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Complex relationships
                        </strong>{" "}
                        that SQL makes painful to query
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Data validation nightmares
                        </strong>{" "}
                        when your schema evolves
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Semantic context loss
                        </strong>{" "}
                        in rigid database schemas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Vendor lock-in fears
                        </strong>{" "}
                        with proprietary graph databases
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 rounded-xl p-8 border border-brand-teal/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Graph Makes It Simple
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Property graphs with built-in validation, powered by
                    PostgreSQL you already trust.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Natural relationships
                        </strong>{" "}
                        - model how you think
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          Schema validation
                        </strong>{" "}
                        - prevent breaking changes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">
                          PostgreSQL foundation
                        </strong>{" "}
                        - audit & trust
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                      <span>
                        <strong className="text-white">Open source</strong> - no
                        vendor lock-in
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Use Cases Section */}
        <section className="py-20 md:py-28" aria-label="Graph Use Cases">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Real-World Use Cases
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how Graph enables digital twins that bring value to the
                physical world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Use Case 1: Water Distribution Systems */}
              <Card className="p-8 bg-white/3 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <Network className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Water Distribution Systems
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">
                      Utilities • Infrastructure • Smart Cities
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">The Challenge:</strong> Water
                  networks have complex pipe connections, pressure dependencies,
                  and sensor relationships. Leaks cascade through the system
                  unpredictably.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">With Graph:</strong> Model
                  pipes, valves, sensors, and pressure zones as connected
                  assets. Detect leak impact zones and optimize meter
                  commissioning workflows.
                </p>
                <div className="text-sm text-brand-teal">
                  "When leak detected at Pipe-A47, which downstream meters and
                  pressure zones are affected?"
                </div>
              </Card>

              {/* Use Case 2: Traffic Infrastructure */}
              <Card className="p-8 bg-white/3 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <DatabaseZap className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Traffic Infrastructure
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">
                      Transportation • Smart Cities • Asset Management
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">The Challenge:</strong> Traffic
                  lights, bridges, signs, and sensors form an interconnected
                  system. Asset failures create cascading traffic impacts.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">With Graph:</strong> Model
                  traffic infrastructure as connected assets. Predict failure
                  impacts and assess traffic flow consequences before they
                  happen.
                </p>
                <div className="text-sm text-brand-teal">
                  "If Bridge-B12 needs maintenance, which traffic routes and
                  zones will be impacted?"
                </div>
              </Card>

              {/* Use Case 3: Railway Operations */}
              <Card className="p-8 bg-white/3 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Railway Operations
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">
                      Rail Transport • Energy Management • Operations
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">The Challenge:</strong> Train
                  schedules, track sections, power grids, and energy consumption
                  are deeply interconnected. Optimization requires understanding
                  complex dependencies.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">With Graph:</strong> Connect
                  trains, tracks, power systems, and schedules in one model.
                  Optimize energy usage and detect conflicts before they impact
                  service.
                </p>
                <div className="text-sm text-brand-teal">
                  "Which trains will be affected if PowerGrid-7 reaches 90%
                  capacity during peak hours?"
                </div>
              </Card>

              {/* Use Case 4: Infrastructure Monitoring */}
              <Card className="p-8 bg-white/3 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Infrastructure Monitoring
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">
                      Civil Engineering • Asset Health • Environmental
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">The Challenge:</strong>{" "}
                  Structural sensors, environmental conditions, and asset health
                  create complex monitoring networks. Anomalies need contextual
                  analysis.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">With Graph:</strong> Model
                  sensors, structures, and environmental factors as connected
                  entities. Correlate deformation, temperature, and groundwater
                  data intelligently.
                </p>
                <div className="text-sm text-brand-teal">
                  "Correlate Bridge-C3 deformation sensors with temperature and
                  groundwater level changes"
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="py-20 md:py-28" aria-label="Graph Code Examples">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built for Developers & AI Agents
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Integrate Graph with your existing tools or build semantic
                knowledge bases for AI applications. Compatible with Azure
                Digital Twins SDK and standard REST APIs.
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
                    Drop-in replacement for Azure Digital Twins. Use the
                    official Azure SDK with your Konnektr Graph endpoint—no code
                    changes required.
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

            <div className="text-center mt-12">
              <a
                href="https://docs.konnektr.io/docs/graph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-teal/80 font-medium"
              >
                View Full Documentation & Examples
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Graph vs Alternatives */}
        <section
          className="py-20 md:py-28 bg-black/10"
          aria-label="Graph Advantages"
        >
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

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-sm border border-brand-teal/20">
                <Shield className="h-4 w-4 text-brand-teal" />
                <span className="text-brand-teal font-medium">
                  Built on PostgreSQL
                </span>
              </div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Get the best of both worlds: graph power with SQL reliability.
                Battle-tested foundation that your team can audit, trust, and
                extend.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-28" aria-label="Graph Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Start free for development and testing. Scale to production with
                our Standard plan. All plans include the full power of semantic
                property graphs.
              </p>
            </div>

            {/* Pricing Comparison Table */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Features Column */}
                <div className="lg:col-span-1">
                  {/* Header Spacer Row */}
                  <div className="min-h-20 py-4"></div>
                  <div className="h-32 flex items-end pb-6">
                    <h3 className="text-xl font-bold text-white">Features</h3>
                  </div>
                  <div className="space-y-0 divide-y divide-white/10">
                    {/* Row 1: Twin Instances */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">
                        Twin Instances
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Maximum digital twins per resource
                      </p>
                    </div>
                    {/* Row 2: Rate Limits */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">Rate Limits</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Query units per minute
                      </p>
                    </div>
                    {/* Row 3: Authentication */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">
                        Authentication
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Access control methods
                      </p>
                    </div>
                    {/* Row 4: Events & History */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">
                        Events & History
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Real-time notifications and audit logs
                      </p>
                    </div>
                    {/* Row 5: Support */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">Support</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Help and assistance level
                      </p>
                    </div>
                    {/* Row 6: Use Case */}
                    <div className="flex flex-col justify-center min-h-20 py-4">
                      <p className="font-medium text-foreground">Use Case</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Best suited for
                      </p>
                    </div>
                  </div>
                </div>

                {/* Developer Tier Column */}
                <Card className="lg:col-span-1 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 flex flex-col">
                  <div className="text-center pb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Developer
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For development & testing
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">
                        Free
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        per month / resource
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-white/10">
                    {/* Row 1: Twin Instances */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="font-semibold text-foreground">Up to 500</p>
                    </div>
                    {/* Row 2: Rate Limits */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="font-semibold text-foreground">
                        1,000 QU/min
                      </p>
                    </div>
                    {/* Row 3: Authentication */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-foreground">User Authentication</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Device Code Flow only
                      </p>
                    </div>
                    {/* Row 4: Events & History */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-muted-foreground">Not available</p>
                    </div>
                    {/* Row 5: Support */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-foreground">Community</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        GitHub Issues
                      </p>
                    </div>
                    {/* Row 6: Use Case */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-muted-foreground text-sm">
                        Development & Testing
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=free&utm_source=home&utm_medium=pricing_table&utm_campaign=launch&utm_content=graph_developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackDeployClick("developer", "graph_page")
                      }
                      className="block w-full"
                    >
                      <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                        Start Deploying
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Free tier • No credit card
                      <br />
                      Sign up required
                    </p>
                  </div>
                </Card>

                {/* Standard Tier Column */}
                <Card className="lg:col-span-1 p-6 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 border-brand-teal relative flex flex-col">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-teal text-black px-4 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                  <div className="text-center pb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Standard
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For production applications
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">
                        $99
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        per month / resource
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-white/10">
                    {/* Row 1: Twin Instances */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="font-semibold text-foreground">Up to 1M</p>
                    </div>
                    {/* Row 2: Rate Limits */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="font-semibold text-brand-teal">Unlimited</p>
                    </div>
                    {/* Row 3: Authentication */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-foreground">M2M Authentication</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Client ID & Secret
                      </p>
                    </div>
                    {/* Row 4: Events & History */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-brand-teal">Coming Soon</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        After launch
                      </p>
                    </div>
                    {/* Row 5: Support */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-foreground">Email Support</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Business hours
                      </p>
                    </div>
                    {/* Row 6: Use Case */}
                    <div className="flex flex-col justify-center min-h-20 py-4 text-center">
                      <p className="text-muted-foreground text-sm">
                        Production Applications
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=standard&utm_source=home&utm_medium=pricing_table&utm_campaign=launch&utm_content=graph_standard"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackDeployClick("standard", "graph_page")}
                      className="block w-full"
                    >
                      <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
                        Choose Standard
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Sign up and credit card required
                    </p>
                  </div>
                </Card>
              </div>

              {/* Enterprise Note */}
              <div className="text-center mt-12 p-8 bg-white/3 border border-white/10 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-2">
                  Need More?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Enterprise plans available with unlimited twins, custom API
                  limits, high-availability SLA, and dedicated support.
                </p>
                <MailingListDialog
                  trigger={
                    <Button
                      variant="outline"
                      className="border-white/20 text-foreground hover:bg-white/10 cursor-pointer"
                    >
                      Contact Sales
                    </Button>
                  }
                  title="Contact Sales"
                  description="Tell us about your needs and we'll get back to you with a custom enterprise plan."
                  ctaText="Send Message"
                  product="Graph Enterprise"
                  successMessage="Thank you! Our sales team will contact you shortly."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-20" aria-label="Graph Call to Action">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-gradient-to-r from-brand-blue to-brand-teal text-center">
              <Network className="mx-auto h-10 w-10 mb-4 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Build with Semantic Context?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                Skip RDF complexity. Get meaningful data relationships with
                validation, built on PostgreSQL you can trust.
                <br />
                <span className="block mt-2 text-brand-light text-base font-semibold">
                  Open source and free to self-host. Managed plans start with a
                  free tier.
                </span>
              </p>
              <div className="mt-8 flex flex-col items-center">
                <a
                  href="https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&utm_source=graph_page&utm_medium=cta&utm_campaign=launch&utm_content=final_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDeployClick("all", "graph_page")}
                  className="inline-block"
                >
                  <Button className="h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90 text-base font-medium cursor-pointer">
                    Deploy Graph Now
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Free tier available • One-click signup with Google or GitHub
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
