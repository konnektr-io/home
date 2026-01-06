import { Users, Heart, Code, Globe } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
              About Konnektr
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Digital Twins</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize digital twin technology, making
              it accessible, affordable, and open for everyone to build
              intelligent systems that bridge the physical and digital worlds.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Digital twins have the power to revolutionize how we understand
                and interact with the physical world. From manufacturing and
                infrastructure to smart cities and healthcare, digital twins
                enable us to simulate, predict, and optimize real-world systems
                like never before.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                However, traditional digital twin solutions are complex,
                expensive, and often locked behind proprietary platforms. We
                believe this technology should be accessible to everyone – from
                individual developers and startups to large enterprises.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                That's why we built Konnektr as an open-source platform that
                simplifies digital twin creation, deployment, and management.
                Our goal is to remove the barriers and empower anyone to harness
                the power of digital twins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Open Source */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-2xl mb-4">
                  <Code className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Open Source
                </h3>
                <p className="text-muted-foreground">
                  Transparency, collaboration, and community-driven development
                  are at our core. All our code is open for inspection,
                  contribution, and self-hosting.
                </p>
              </div>

              {/* Accessibility */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-2xl mb-4">
                  <Globe className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Accessibility
                </h3>
                <p className="text-muted-foreground">
                  Digital twin technology shouldn't require a PhD to use. We
                  focus on intuitive interfaces and comprehensive documentation
                  to make our platform approachable.
                </p>
              </div>

              {/* Community */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  We believe in the power of community. Our users, contributors,
                  and partners help shape the future of the platform through
                  feedback and collaboration.
                </p>
              </div>

              {/* Quality */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-4">
                  <Heart className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Quality
                </h3>
                <p className="text-muted-foreground">
                  We're committed to building robust, reliable software that you
                  can depend on for mission-critical applications and everyday
                  use alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Built on Modern Standards
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Konnektr is built using industry-standard technologies and
                protocols. We leverage proven technologies like PostgreSQL,
                Apache AGE, and Kubernetes to ensure reliability, scalability,
                and interoperability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our APIs follow REST and GraphQL conventions, our data models
                adhere to industry standards like DTDL (Digital Twins Definition
                Language), and our deployment options support everything from
                local development to enterprise-scale infrastructure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This standards-first approach means you're never locked in – you
                can always export your data, integrate with other tools, or even
                fork our code to build your own custom solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about Konnektr? Want to contribute to the project?
              We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/konnektr-io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors"
              >
                <Code className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://docs.konnektr.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-black rounded-lg transition-colors"
              >
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
