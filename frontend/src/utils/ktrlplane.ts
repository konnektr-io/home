import type { PricingTier } from "@/data/products";

export interface DeploymentConfig {
  resourceType: string;
  tier: string;
}

export function getKtrlPlaneUrl(
  config: DeploymentConfig,
  theme?: "dark" | "light"
): string {
  const baseUrl =
    import.meta.env.VITE_KTRLPLANE_BASE_URL || "https://ktrlplane.konnektr.io";
  const endpoint =
    import.meta.env.VITE_KTRLPLANE_RESOURCES_ENDPOINT || "/resources/create";

  const params = new URLSearchParams({
    resourceType: config.resourceType,
    tier: config.tier,
    ...(theme && { theme }),
  });

  return `${baseUrl}${endpoint}?${params.toString()}`;
}

export function redirectToKtrlPlane(
  resourceType: string,
  tier: PricingTier
): void {
  const url = getKtrlPlaneUrl(
    {
      resourceType: resourceType.toLowerCase(),
      tier: tier.name.toLowerCase(),
    },
    "dark"
  );

  // Open in new tab for better user experience
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getResourceTypeFromPath(): string {
  const path = window.location.pathname;
  if (path.includes("/assembler")) return "assembler";
  if (path.includes("/graph")) return "graph";
  if (path.includes("/flow")) return "flow";
  if (path.includes("/compass")) return "compass";
  return "unknown";
}

// Utility to check if a product is ready for deployment
export function isProductReady(resourceType: string): boolean {
  const readyProducts = ["graph"]; // Only Graph is ready currently
  return readyProducts.includes(resourceType.toLowerCase());
}
