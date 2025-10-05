import { DatabaseZap, Play, Network, Shield, Zap } from "lucide-react";
import { MailingListDialog } from "../../components/MailingListDialog.js";
import { Button } from "../../components/ui/button.js";
import { Card } from "../../components/ui/card.js";
import { graphProduct } from "../../data/products.js";

export default function Page() {
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
            {/*
               <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                 Deploy Now
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
               */}
            <a
              href="https://docs.konnektr.io/docs/graph"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Problem & Solution Section */}
        <section
          className="py-20 md:py-28"
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

        {/* Pricing Section - Coming Soon */}
        <section className="py-20 md:py-28" aria-label="Graph Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground">
                Konnektr Graph is open source and free to self-host. Managed
                cloud pricing will be announced soon.
              </p>
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
                  Open source and free to self-host. Future managed plans start
                  with a free tier.
                </span>
              </p>
              <div className="mt-8">
                {/*
                <Button className="h-11 px-6 py-3 bg-white text-black shadow hover:bg-gray-200 text-base font-medium">
                  Start for Free
                </Button>
                */}
                <MailingListDialog
                  trigger={
                    <Button className="h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90 text-base font-medium  cursor-pointer">
                      Join Waiting List
                    </Button>
                  }
                  title="Join the Graph Waiting List"
                  description="Get notified when Konnektr Graph launches its managed cloud plans."
                  ctaText="Join List"
                  product="Graph"
                  successMessage="You're on the list! We'll notify you about Graph updates."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
