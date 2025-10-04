import { Button } from "../../components/ui/button.js";
import { Card } from "../../components/ui/card.js";
import { WaitingListSection } from "../../components/WaitingList.js";
import { PricingSection } from "../../components/PricingSection.js";
import { compassProduct } from "../../data/products.js";
import {
  Compass,
  ArrowRight,
  // Play,
  BarChart3,
  TrendingUp,
  Eye,
  Target,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 hero-glow"
        aria-label="Compass Hero Section"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          role="region"
          aria-label="Compass Hero Content"
        >
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-muted-foreground mb-4 border border-white/10">
            ✨ Analytics & Insights Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Navigate Your Digital Twin Universe with{" "}
            <span className="gradient-text">Compass</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {compassProduct.description}
          </p>

          {/* Waiting List Section */}
          <div className="max-w-2xl mx-auto">
            <WaitingListSection
              productName="Konnektr Compass"
              description="Be the first to experience advanced analytics and insights. Join our waiting list for early access."
            />
          </div>
        </div>

        {/* Hero Image/Visualization */}
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16"
          role="region"
          aria-label="Compass Visualization"
        >
          <div className="relative rounded-xl shadow-2xl shadow-brand-teal/10 border border-white/10 bg-brand-dark/50 p-4 md:p-6 backdrop-blur-sm">
            {/* Placeholder for Compass Analytics UI visualization */}
            <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Compass className="h-16 w-16 text-brand-teal mx-auto mb-4" />
                <p className="text-lg font-medium text-white">
                  Compass Analytics Dashboard
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive data visualization and insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Key Features Section */}
        <section className="py-20 md:py-32" aria-label="Compass Key Features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Illuminate Your Digital Twin{" "}
                <span className="gradient-text">Intelligence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Turn your digital twin data into strategic advantages with
                advanced analytics, real-time monitoring, and predictive
                insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Advanced Visualization */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <BarChart3 className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Advanced Visualization
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Interactive dashboards, 3D visualizations, and customizable
                  charts that bring your digital twin data to life. Create
                  compelling stories from complex data.
                </p>
              </Card>

              {/* Feature 2: Predictive Analytics */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <TrendingUp className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Predictive Analytics
                </h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered forecasting and trend analysis. Identify patterns,
                  predict failures, and optimize operations before issues occur.
                </p>
              </Card>

              {/* Feature 3: Real-time Monitoring */}
              <Card className="feature-card rounded-xl p-8 bg-white/3 border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-brand-teal hover:-translate-y-1">
                <Eye className="h-10 w-10 text-brand-teal" />
                <h3 className="mt-6 text-xl font-bold text-white">
                  Real-time Monitoring
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Live data streams, automated alerts, and continuous health
                  monitoring. Stay informed about your digital twin ecosystem's
                  performance.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          className="py-20 md:py-32 bg-white/3"
          aria-label="Compass Use Cases"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Navigate Every{" "}
                <span className="gradient-text">Business Challenge</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From operational efficiency to strategic planning, Compass
                provides the insights you need to make data-driven decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Use Case 1: Performance Optimization */}
              <Card className="feature-card rounded-xl p-6">
                <Target className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Performance Optimization
                </h3>
                <p className="text-muted-foreground text-sm">
                  Identify bottlenecks, optimize resource allocation, and
                  improve system efficiency across your digital infrastructure.
                </p>
              </Card>

              {/* Use Case 2: Predictive Maintenance */}
              <Card className="feature-card rounded-xl p-6">
                <TrendingUp className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Predictive Maintenance
                </h3>
                <p className="text-muted-foreground text-sm">
                  Forecast equipment failures, schedule maintenance proactively,
                  and reduce downtime costs.
                </p>
              </Card>

              {/* Use Case 3: Operational Intelligence */}
              <Card className="feature-card rounded-xl p-6">
                <Eye className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Operational Intelligence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Real-time operational insights, KPI tracking, and performance
                  benchmarking for continuous improvement.
                </p>
              </Card>

              {/* Use Case 4: Strategic Planning */}
              <Card className="feature-card rounded-xl p-6">
                <Compass className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Strategic Planning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Long-term trend analysis, scenario modeling, and strategic
                  decision support for business growth.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section
          className="py-20 md:py-32"
          aria-label="Compass Interactive Demo"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Experience{" "}
                <span className="gradient-text">Compass Analytics</span>{" "}
                Instantly
              </h2>
              <p className="text-xl text-muted-foreground mt-4 mb-12">
                See how Compass transforms raw digital twin data into actionable
                business intelligence in real-time.
              </p>

              {/* Interactive Demo Placeholder */}
              <div className="bg-gray-800 rounded-xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Demo Card 1: Live Dashboard */}
                  <div className="bg-brand-blue/30 rounded-lg p-6 border border-brand-teal/30">
                    <BarChart3 className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Live Dashboard
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Interactive analytics dashboard with real-time data
                      visualization
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full border-brand-teal/50 text-brand-teal hover:bg-brand-teal/10"
                    >
                      Explore Demo
                    </Button>
                  </div>

                  {/* Demo Card 2: Predictive Models */}
                  <div className="bg-brand-blue/30 rounded-lg p-6 border border-brand-teal/30">
                    <TrendingUp className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Predictive Models
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      AI-powered forecasting and trend analysis capabilities
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full border-brand-teal/50 text-brand-teal hover:bg-brand-teal/10"
                    >
                      Try Predictions
                    </Button>
                  </div>

                  {/* Demo Card 3: Custom Reports */}
                  <div className="bg-brand-blue/30 rounded-lg p-6 border border-brand-teal/30">
                    <Target className="h-10 w-10 text-brand-teal mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Custom Reports
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Build custom reports and share insights across your
                      organization
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full border-brand-teal/50 text-brand-teal hover:bg-brand-teal/10"
                    >
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-20" aria-label="Compass Pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PricingSection
              tiers={compassProduct.pricingTiers}
              productName={compassProduct.title}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 md:py-32 bg-gradient-to-r from-brand-blue to-brand-teal"
          aria-label="Compass Call to Action"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Navigate Your Data Universe?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Stop drowning in data and start surfing insights. Transform your
                digital twin ecosystem into a strategic advantage with Compass
                Analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-gray-100"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
