// Terms page SEO Head component
import { termsSEO, generateStructuredData } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{termsSEO.title}</title>
      <meta name="description" content={termsSEO.description} />
      <meta name="keywords" content={termsSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/terms" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={termsSEO.title} />
      <meta property="og:description" content={termsSEO.description} />
      <meta property="og:url" content="https://konnektr.io/terms" />
      {/* <meta
        property="og:image"
        content={`https://konnektr.io${termsSEO.ogImage}`}
      /> */}
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={termsSEO.title} />
      <meta name="twitter:description" content={termsSEO.description} />
      {/* <meta
        name="twitter:image"
        content={`https://konnektr.io${termsSEO.ogImage}`}
      /> */}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {termsSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(termsSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
