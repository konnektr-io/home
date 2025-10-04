import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import type { PricingTier } from "@/data/products";
import { redirectToKtrlPlane, isProductReady } from "@/utils/ktrlplane";

interface PricingSectionProps {
  tiers: PricingTier[];
  productName: string;
  onDeployClick?: (tier: PricingTier) => void;
}

export function PricingSection({
  tiers,
  productName,
  onDeployClick,
}: PricingSectionProps) {
  const handleTierClick = (tier: PricingTier) => {
    if (onDeployClick) {
      onDeployClick(tier);
    } else {
      // Check if product is ready for deployment
      const resourceType = productName.toLowerCase();
      if (isProductReady(resourceType)) {
        redirectToKtrlPlane(resourceType, tier);
      } else {
        console.log(`${productName} is not ready yet - waiting list only`);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your {productName} Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core
            features with different limits and support levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative p-8 ${
                tier.popular
                  ? "border-brand-teal bg-gradient-to-br from-brand-teal/10 to-brand-blue/10"
                  : "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-teal text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.audience}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.priceDescription && (
                    <span className="text-muted-foreground ml-2">
                      /{tier.priceDescription}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleTierClick(tier)}
                className={`w-full ${
                  tier.popular
                    ? "bg-brand-teal hover:bg-brand-teal/90"
                    : "bg-brand-blue hover:bg-brand-blue/90"
                }`}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
