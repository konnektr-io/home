// Graph product page SEO Head component
import { createProductSEO, generateStructuredData } from "../../data/seo.js";
import { graphProduct } from "../../data/products.js";

const graphSEO = createProductSEO(graphProduct);

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{graphSEO.title}</title>
      <meta name="description" content={graphSEO.description} />
      <meta name="keywords" content={graphSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/graph" />

      {/* Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={graphSEO.title} />
      <meta property="og:description" content={graphSEO.description} />
      <meta property="og:url" content="https://konnektr.io/graph" />
      <meta property="og:image" content="https://konnektr.io/og-graph.jpg" />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={graphSEO.title} />
      <meta name="twitter:description" content={graphSEO.description} />
      <meta name="twitter:image" content="https://konnektr.io/og-graph.jpg" />

      {/* Product specific */}
      <meta name="product:price:amount" content="25" />
      <meta name="product:price:currency" content="USD" />
      <meta name="product:availability" content="available" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {graphSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(graphSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
