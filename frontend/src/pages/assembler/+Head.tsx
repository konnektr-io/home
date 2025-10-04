// Assembler product page SEO Head component
import { createProductSEO, generateStructuredData } from "../../data/seo.js";
import { assemblerProduct } from "../../data/products.js";

const assemblerSEO = createProductSEO(assemblerProduct);

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{assemblerSEO.title}</title>
      <meta name="description" content={assemblerSEO.description} />
      <meta name="keywords" content={assemblerSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/assembler" />

      {/* Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={assemblerSEO.title} />
      <meta property="og:description" content={assemblerSEO.description} />
      <meta property="og:url" content="https://konnektr.io/assembler" />
      <meta
        property="og:image"
        content="https://konnektr.io/og-assembler.jpg"
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={assemblerSEO.title} />
      <meta name="twitter:description" content={assemblerSEO.description} />
      <meta
        name="twitter:image"
        content="https://konnektr.io/og-assembler.jpg"
      />

      {/* Product specific */}
      <meta name="product:price:amount" content="0" />
      <meta name="product:price:currency" content="USD" />
      <meta name="product:availability" content="pre-order" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {assemblerSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(assemblerSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
