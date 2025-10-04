// SEO metadata types and utilities for Konnektr Home
import type { Product } from "./products.js";

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogType?: "website" | "product" | "article";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: Record<string, any>;
}

export interface ProductSEOData extends SEOData {
  productName: string;
  productType: string;
  price?: string;
  availability?: "available" | "pre-order" | "coming-soon";
}

// Base site information
export const SITE_CONFIG = {
  name: "Konnektr",
  title: "Konnektr - The Intelligent Digital Twin Platform",
  description:
    "Build, deploy, and scale digital twin solutions with Konnektr's open-source platform. Graph database, AI builder, real-time processing, and analytics.",
  url: "https://konnektr.io",
  ogImage: "/og-image.jpg", // We'll need to create this
  twitterHandle: "@konnektr",
  keywords: [
    "digital twin",
    "graph database",
    "IoT platform",
    "real-time analytics",
    "open source",
    "ADT compatible",
    "PostgreSQL",
    "Apache AGE",
    "digital transformation",
    "industrial IoT",
    "smart manufacturing",
    "predictive analytics",
  ],
};

// Homepage SEO
export const homepageSEO: SEOData = {
  title: "Konnektr - The Intelligent Digital Twin Platform",
  description:
    "Build, deploy, and scale digital twin solutions with Konnektr's open-source platform. Graph database, AI builder, real-time processing, and analytics.",
  keywords: [
    "digital twin platform",
    "graph database",
    "IoT platform",
    "real-time analytics",
    "open source digital twin",
    "ADT compatible",
    "PostgreSQL graph",
    "Apache AGE",
    "digital transformation platform",
    "industrial IoT solutions",
  ],
  ogType: "website",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Konnektr",
    url: "https://konnektr.io",
    logo: "https://konnektr.io/logo.png",
    description: SITE_CONFIG.description,
    foundingDate: "2024",
    sameAs: ["https://github.com/konnektr-io"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressCountry: "Remote",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@konnektr.io",
    },
  },
};

// Product page SEO factory
export function createProductSEO(product: Product): ProductSEOData {
  const productName = product.title;
  const baseTitle = `${productName} - ${SITE_CONFIG.name}`;

  let availability: "available" | "pre-order" | "coming-soon" = "coming-soon";
  if (product.ready) {
    availability = "available";
  }

  // Product-specific keywords and descriptions
  const productSEOData: Record<string, Partial<ProductSEOData>> = {
    "Konnektr Graph": {
      title: `${baseTitle} | High-Performance Digital Twin Graph Database`,
      description:
        "Enterprise-grade digital twin runtime with ADT-compatible APIs. Built on PostgreSQL & Apache AGE. Self-host or fully managed. Open source.",
      keywords: [
        "digital twin database",
        "graph database",
        "ADT compatible API",
        "PostgreSQL graph",
        "Apache AGE",
        "open source graph database",
        "digital twin runtime",
        "twin graph database",
        "enterprise graph database",
        "real-time graph queries",
      ],
      productType: "Database Software",
      price: "$25/month",
    },
    "Konnektr Assembler": {
      title: `${baseTitle} | AI-Powered Digital Twin Builder`,
      description:
        "AI-powered digital twin builder that automates DTDL model creation from any data source. Visual interface, no-code required.",
      keywords: [
        "AI digital twin builder",
        "DTDL model generator",
        "digital twin automation",
        "AI twin ontology",
        "no-code digital twin",
        "visual twin builder",
        "digital twin modeling",
        "AI DTDL generator",
        "digital twin AI tools",
        "automated twin creation",
      ],
      productType: "AI Software",
      price: "Free",
    },
    "Konnektr Flow": {
      title: `${baseTitle} | Real-Time Data & Event Orchestrator`,
      description:
        "Real-time data and event orchestrator for digital twins. Visual flow builder, rich connectors, serverless execution.",
      keywords: [
        "digital twin data processing",
        "real-time event orchestration",
        "IoT data pipeline",
        "digital twin automation",
        "visual flow builder",
        "serverless data processing",
        "event-driven architecture",
        "digital twin integration",
        "real-time twin updates",
        "IoT event processing",
      ],
      productType: "Integration Software",
      price: "$10/month",
    },
    "Konnektr Compass": {
      title: `${baseTitle} | Digital Twin Analytics & Insights`,
      description:
        "Advanced analytics and insights platform for digital twins. Interactive dashboards, predictive analytics, real-time monitoring.",
      keywords: [
        "digital twin analytics",
        "twin data visualization",
        "predictive twin analytics",
        "digital twin insights",
        "twin monitoring dashboard",
        "IoT analytics platform",
        "digital twin intelligence",
        "twin performance analytics",
        "real-time twin monitoring",
        "digital twin reporting",
      ],
      productType: "Analytics Software",
    },
  };

  const specific = productSEOData[productName] || {};

  return {
    title: specific.title || baseTitle,
    description: specific.description || product.description,
    keywords: specific.keywords || [productName.toLowerCase(), "digital twin"],
    productName,
    productType: specific.productType || "Software",
    price: specific.price,
    availability,
    ogType: "product",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      description: product.description,
      url: `https://konnektr.io/${productName
        .toLowerCase()
        .replace("konnektr ", "")}`,
      brand: {
        "@type": "Brand",
        name: "Konnektr",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Konnektr",
        url: "https://konnektr.io",
      },
      category: specific.productType || "Software",
      offers: product.pricingTiers.map((tier) => ({
        "@type": "Offer",
        name: `${productName} ${tier.name}`,
        description: tier.audience,
        price: tier.price === "Free" ? "0" : tier.price.replace(/[^0-9]/g, ""),
        priceCurrency: "USD",
        availability:
          availability === "available"
            ? "https://schema.org/InStock"
            : "https://schema.org/PreOrder",
      })),
    },
  };
}

// Generate meta tags HTML
export function generateMetaTags(seoData: SEOData): string {
  const canonicalUrl = seoData.canonicalUrl || SITE_CONFIG.url;
  const ogImage = seoData.ogImage || `${SITE_CONFIG.url}/og-image.jpg`;

  return `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords.join(", ")}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="${seoData.ogType || "website"}" />
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="${SITE_CONFIG.name}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="${
      seoData.twitterCard || "summary_large_image"
    }" />
    <meta name="twitter:site" content="${SITE_CONFIG.twitterHandle}" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="${ogImage}" />
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Konnektr" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  `.trim();
}

// Generate JSON-LD structured data
export function generateStructuredData(data: Record<string, any>): string {
  return JSON.stringify(data, null, 2);
}
