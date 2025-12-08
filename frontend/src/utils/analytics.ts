// Analytics tracking utilities for Konnektr marketing site

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event through Google Analytics (GTM)
 * Clarity events are automatically tracked via GTM integration
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }

  // GTM Data Layer (Clarity picks up events from here via GTM integration)
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log("[Analytics]", eventName, eventParams);
  }
};

/**
 * Track conversion events with value
 */
export const trackConversion = (
  conversionType: string,
  value?: number,
  params?: Record<string, any>
) => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    value,
    currency: "USD",
    ...params,
  });
};

/**
 * Track when user clicks Deploy Graph CTA
 */
export const trackDeployClick = (
  tier: string,
  source: "homepage" | "graph_page" | "hero"
) => {
  trackEvent("deploy_graph_click", {
    tier,
    source,
    destination: "ktrlplane",
    event_category: "conversion_intent",
  });
};

/**
 * Track when user clicks Sign In
 */
export const trackSignInClick = (source: string) => {
  trackEvent("sign_in_click", {
    source,
    destination: "ktrlplane",
    event_category: "navigation",
  });
};

/**
 * Track waiting list form submission
 */
export const trackWaitingListSubmit = (product: string) => {
  trackEvent("waiting_list_submit", {
    product,
    event_category: "lead_generation",
  });
};

/**
 * Track product page views
 */
export const trackProductPageView = (product: string) => {
  trackEvent("product_page_view", {
    product,
    event_category: "engagement",
  });
};

/**
 * Track documentation link clicks
 */
export const trackDocumentationClick = (source: string) => {
  trackEvent("documentation_click", {
    source,
    destination: "docs",
    event_category: "engagement",
  });
};

/**
 * Track Graph Explorer link clicks
 */
export const trackGraphExplorerClick = (source: string = "graph_page") => {
  trackEvent("graph_explorer_click", {
    source,
    destination: "explorer",
    event_category: "engagement",
  });
};

/**
 * Track pricing tier selection/hover
 */
export const trackPricingTierView = (tier: string, product: string) => {
  trackEvent("pricing_tier_view", {
    tier,
    product,
    event_category: "engagement",
  });
};

/**
 * Track when user clicks "Learn More" about a product
 */
export const trackLearnMoreClick = (
  product: string,
  source: "homepage" | "navigation"
) => {
  trackEvent("learn_more_click", {
    product,
    source,
    event_category: "engagement",
  });
};

/**
 * Track demo request clicks
 */
export const trackDemoRequest = (source: string) => {
  trackEvent("demo_request_click", {
    source,
    event_category: "lead_generation",
  });
};

/**
 * Track outbound links
 */
export const trackOutboundLink = (
  destination: string,
  url: string,
  source: string
) => {
  trackEvent("outbound_link_click", {
    destination,
    url,
    source,
    event_category: "navigation",
  });
};
