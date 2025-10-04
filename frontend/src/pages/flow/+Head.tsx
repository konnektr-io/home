// Flow product page SEO Head component
import { createProductSEO, generateStructuredData } from "../../data/seo.js";
import { flowProduct } from "../../data/products.js";

const flowSEO = createProductSEO(flowProduct);

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{flowSEO.title}</title>
      <meta name="description" content={flowSEO.description} />
      <meta name="keywords" content={flowSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/flow" />

      {/* Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={flowSEO.title} />
      <meta property="og:description" content={flowSEO.description} />
      <meta property="og:url" content="https://konnektr.io/flow" />
      <meta
        property="og:image"
        content={`https://konnektr.io${flowSEO.ogImage}`}
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={flowSEO.title} />
      <meta name="twitter:description" content={flowSEO.description} />
      <meta
        name="twitter:image"
        content={`https://konnektr.io${flowSEO.ogImage}`}
      />

      {/* Product specific */}
      <meta name="product:price:amount" content="10" />
      <meta name="product:price:currency" content="USD" />
      <meta name="product:availability" content="pre-order" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {flowSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(flowSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
