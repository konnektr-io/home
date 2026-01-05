import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../../components/ui/button.js";
import { trackProductPageView } from "../../utils/analytics.js";

interface PricingTierProps {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

function PricingTier({
  name,
  price,
  priceNote,
  description,
  features,
  cta,
  ctaHref,
  highlighted,
}: PricingTierProps) {
  return (
    <div
      className={`p-8 rounded-xl ${
        highlighted
          ? "bg-brand-teal/5 border-2 border-brand-teal/30 relative"
          : "bg-white/[0.02] border border-white/10"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-teal text-black text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-muted-foreground ml-2">{priceNote}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full h-11 ${
          highlighted
            ? "bg-brand-teal text-black hover:bg-brand-teal/90"
            : "bg-white/5 text-foreground hover:bg-white/10 border border-white/20 cursor-pointer"
        }`}
        onClick={() => window.open(ctaHref, "_blank")}
      >
        {cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    trackProductPageView("pricing");
  }, []);

  const tiers: PricingTierProps[] = [
    {
      name: "Developer",
      price: "Free",
      priceNote: "per resource",
      description: "For development, testing, and personal projects.",
      features: [
        "Up to 500 entities",
        "1,000 query units per minute",
        "REST API access",
        "MCP server included",
        "Community support (GitHub)",
      ],
      cta: "Start Free",
      ctaHref:
        "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=free",
    },
    {
      name: "Standard",
      price: "$49",
      priceNote: "per resource / month",
      description: "For production applications and growing teams.",
      features: [
        "Up to 1M entities",
        "10,000 query units per minute",
        "M2M authentication",
        "Event notifications (Kafka, webhooks)",
        "Data history & audit logs",
        "Email support",
      ],
      cta: "Start Standard",
      ctaHref:
        "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph&sku=standard",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      priceNote: "pay-as-you-go",
      description: "For large-scale deployments with custom requirements.",
      features: [
        "Unlimited entities",
        "Custom rate limits",
        "Custom authentication (SSO)",
        "High-availability configuration",
        "On-premise deployment option",
        "Dedicated support & SLA",
      ],
      cta: "Contact Sales",
      ctaHref: "mailto:sales@konnektr.io",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Capacity",
      features: [
        {
          name: "Entities (nodes)",
          developer: "500",
          standard: "5,000,000",
          enterprise: "Unlimited",
        },
        {
          name: "Relationships (edges)",
          developer: "500",
          standard: "5,000,000",
          enterprise: "Unlimited",
        },
        {
          name: "Models (schema types)",
          developer: "100",
          standard: "1,000,000",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Performance",
      features: [
        {
          name: "Query rate limit",
          developer: "1,000 QU/min",
          standard: "10,000 QU/min",
          enterprise: "Custom",
        },
      ],
    },
    {
      category: "API & Integration",
      features: [
        {
          name: "REST API",
          developer: true,
          standard: true,
          enterprise: true,
        },
        {
          name: "MCP Server",
          developer: true,
          standard: true,
          enterprise: true,
        },
        {
          name: "Cypher queries",
          developer: true,
          standard: true,
          enterprise: true,
        },
        {
          name: "Vector similarity search",
          developer: true,
          standard: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Events,  Streaming and Data History",
      features: [
        {
          name: "Webhooks",
          developer: false,
          standard: true,
          enterprise: true,
        },
        {
          name: "Kafka / Event Hubs",
          developer: false,
          standard: true,
          enterprise: true,
        },
        {
          name: "Azure Data Explorer",
          developer: false,
          standard: true,
          enterprise: true,
        },
        {
          name: "MQTT publish",
          developer: false,
          standard: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Security & Compliance",
      features: [
        {
          name: "Role-based access control",
          developer: true,
          standard: true,
          enterprise: true,
        },
        {
          name: "M2M OAuth",
          developer: false,
          standard: true,
          enterprise: true,
        },
        {
          name: "SSO / Custom IdP",
          developer: false,
          standard: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support",
      features: [
        {
          name: "Community support",
          developer: true,
          standard: true,
          enterprise: true,
        },
        {
          name: "Email support",
          developer: false,
          standard: true,
          enterprise: true,
        },
        {
          name: "Dedicated support",
          developer: false,
          standard: false,
          enterprise: true,
        },
      ],
    },
  ];

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-28 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay for active graph resources. All plans include MCP server, REST
            API, and unlimited queries.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <PricingTier key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-teal" />
                What is a "resource"?
              </h3>
              <p className="text-sm text-muted-foreground">
                A resource is an isolated graph instance with its own schema,
                data, and API endpoint. Most teams start with one resource per
                environment (dev, staging, production).
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-teal" />
                What counts as an "entity"?
              </h3>
              <p className="text-sm text-muted-foreground">
                An entity is a node in your graph—any object you create with a
                unique ID and model type. Relationships between entities don't
                count toward the entity limit.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-teal" />
                Can I self-host Konnektr Graph?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes. Konnektr Graph is open source (Apache 2.0) and can be
                self-hosted on your infrastructure. Enterprise plans include
                support for on-premise deployments.
              </p>
            </div>
            {/* <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-teal" />
                Is there a free trial for paid plans?
              </h3>
              <p className="text-sm text-muted-foreground">
                The Developer tier is free forever. For Standard, you can start
                with a 14-day trial. Contact us for Enterprise trials.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Compare plans
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            All plans include the core graph database with schema validation,
            vector search, and Cypher queries.
          </p>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full comparison-table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white font-semibold w-1/3">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-white font-semibold">
                    Developer
                  </th>
                  <th className="text-center py-4 px-4 text-brand-teal font-semibold">
                    Standard
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={category.category}>
                      <td
                        colSpan={4}
                        className="py-4 px-4 text-sm font-medium text-muted-foreground uppercase tracking-wide bg-white/[0.02]"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-b border-white/5"
                      >
                        <td className="py-3 px-4 text-sm text-foreground">
                          {feature.name}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.developer === "boolean" ? (
                            feature.developer ? (
                              <Check className="h-5 w-5 text-brand-teal mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-sm text-foreground">
                              {feature.developer}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-brand-teal/5">
                          {typeof feature.standard === "boolean" ? (
                            feature.standard ? (
                              <Check className="h-5 w-5 text-brand-teal mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-sm text-foreground">
                              {feature.standard}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-brand-teal mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="text-sm text-foreground">
                              {feature.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Deploy a graph in minutes. Start with the free Developer tier and
            upgrade when you need more capacity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-brand-teal text-black hover:bg-brand-teal/90 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph",
                  "_blank"
                )
              }
            >
              Deploy a Graph
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-8 cursor-pointer"
              onClick={() => window.open("mailto:sales@konnektr.io", "_blank")}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
