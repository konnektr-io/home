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
  ogImage: "/og-images/homepage-og.png",
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
  ogImage: "/og-images/homepage-og.png",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Konnektr",
    url: "https://konnektr.io",
    logo: "https://konnektr.io/konnektr.svg",
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
      email: "info@konnektr.io",
    },
  },
};

// About page SEO
export const aboutSEO: SEOData = {
  title: "About Konnektr - Building the Future of Digital Twins",
  description:
    "Learn about Konnektr's mission to democratize digital twin technology through open-source solutions. Our values, technology, and commitment to the community.",
  keywords: [
    "about konnektr",
    "digital twin company",
    "open source mission",
    "digital transformation",
    "technology values",
    "community driven",
    "accessibility",
    "innovation",
  ],
  ogType: "website",
  ogImage: "/og-images/about-og.png",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Konnektr",
    description: "Learn about Konnektr's mission to democratize digital twin technology through open-source solutions.",
    url: "https://konnektr.io/about",
    mainEntity: {
      "@type": "Organization",
      name: "Konnektr",
      url: "https://konnektr.io",
      foundingDate: "2024",
      description: "Open-source digital twin platform provider",
      sameAs: ["https://github.com/konnektr-io"],
    },
  },
};

// Privacy page SEO
export const privacySEO: SEOData = {
  title: "Privacy Policy - Konnektr",
  description:
    "Learn how Konnektr protects your privacy and handles your data. Our comprehensive privacy policy explains data collection, usage, and your rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "data rights",
    "GDPR compliance",
    "data security",
    "personal information",
  ],
  ogType: "website",
  ogImage: "/og-images/privacy-og.png",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Konnektr's privacy policy explaining how we handle and protect user data.",
    url: "https://konnektr.io/privacy",
  },
};

// Terms of Service page SEO
export const termsSEO: SEOData = {
  title: "Terms of Service - Konnektr",
  description:
    "Terms of Service for Konnektr's open-source digital twin platform. Learn about user rights, service usage, and legal obligations.",
  keywords: [
    "terms of service",
    "user agreement",
    "service terms",
    "legal terms",
    "platform usage",
    "user rights",
    "open source license",
    "service agreement",
  ],
  ogType: "website",
  ogImage: "/og-images/terms-og.png",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description: "Terms of Service for Konnektr's open-source digital twin platform.",
    url: "https://konnektr.io/terms",
  },
};

// Product page SEO factory
export function createProductSEO(product: Product): ProductSEOData {
  const productName = product.title;
  
  let availability: "available" | "pre-order" | "coming-soon" = "coming-soon";
  if (product.ready) {
    availability = "available";
  }

  // Helper: get absolute image URL from product SEO data
  const imageUrl = `https://konnektr.io${product.seo.ogImage}`;
  
  // Helper: priceValidUntil (1 year from today)
  const priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  
  // Helper: merchant return policy (14-day money-back guarantee worldwide)
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 14,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
    refundType: "https://schema.org/FullRefund",
  };
  
  // Helper: default shipping details for digital products
  const defaultShippingDetails = {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: "USD",
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "US",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
    },
  };

  // Build structured data - only include offers for ready products with valid pricing
  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: product.description,
    url: `https://konnektr.io${product.path}`,
    image: imageUrl,
    brand: {
      "@type": "Brand",
      name: "Konnektr",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Konnektr",
      url: "https://konnektr.io",
    },
    category: product.seo.productType,
  };

  // Only add offers, ratings, and reviews for ready products with finalized pricing
  if (product.ready && product.pricingTiers && product.pricingTiers.length > 0) {
    // Filter out tiers with invalid pricing (TBD, Custom, etc.)
    const validTiers = product.pricingTiers.filter((tier) => {
      const price = tier.price.toLowerCase();
      return price !== "tbd" && price !== "custom" && price !== "coming soon";
    });

    if (validTiers.length > 0) {
      structuredData.offers = validTiers.map((tier) => {
        // Parse price - handle "Free" and "$XX" formats
        let priceValue = "0";
        if (tier.price.toLowerCase() === "free") {
          priceValue = "0";
        } else {
          // Extract numeric value from price string (e.g., "$99" -> "99")
          const numericPrice = tier.price.replace(/[^0-9.]/g, "");
          if (numericPrice && numericPrice !== "") {
            priceValue = numericPrice;
          }
        }

        const offer: Record<string, any> = {
          "@type": "Offer",
          name: `${productName} ${tier.name}`,
          description: tier.audience,
          price: priceValue,
          priceCurrency: "USD",
          availability:
            availability === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/PreOrder",
          priceValidUntil,
          url: `https://konnektr.io${product.path}`,
          hasMerchantReturnPolicy: returnPolicy,
          shippingDetails: defaultShippingDetails,
        };

        return offer;
      });

      // Only add aggregateRating and review for products with valid offers
      if (structuredData.offers.length > 0) {
        structuredData.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "1",
        };

        structuredData.review = [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Konnektr User",
            },
            datePublished: "2025-01-01",
            reviewBody: `${productName} provides excellent functionality for digital twin management.`,
            name: "Excellent platform",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
        ];
      }
    }
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    productName,
    productType: product.seo.productType,
    availability,
    ogType: "product",
    ogImage: product.seo.ogImage,
    structuredData,
  };
}

// Generate meta tags HTML
export function generateMetaTags(seoData: SEOData): string {
  const canonicalUrl = seoData.canonicalUrl || SITE_CONFIG.url;
  const ogImage = seoData.ogImage || SITE_CONFIG.ogImage;

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
