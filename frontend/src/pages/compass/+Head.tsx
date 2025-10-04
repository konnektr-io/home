// Compass product page SEO Head component
import { createProductSEO, generateStructuredData } from "../../data/seo.js";
import { compassProduct } from "../../data/products.js";

const compassSEO = createProductSEO(compassProduct);

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{compassSEO.title}</title>
      <meta name="description" content={compassSEO.description} />
      <meta name="keywords" content={compassSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/compass" />

      {/* Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={compassSEO.title} />
      <meta property="og:description" content={compassSEO.description} />
      <meta property="og:url" content="https://konnektr.io/compass" />
      <meta property="og:image" content="https://konnektr.io/og-compass.jpg" />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={compassSEO.title} />
      <meta name="twitter:description" content={compassSEO.description} />
      <meta name="twitter:image" content="https://konnektr.io/og-compass.jpg" />

      {/* Product specific */}
      <meta name="product:availability" content="pre-order" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {compassSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(compassSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
