// Privacy page SEO Head component
import { privacySEO, generateStructuredData } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{privacySEO.title}</title>
      <meta name="description" content={privacySEO.description} />
      <meta name="keywords" content={privacySEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/privacy" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={privacySEO.title} />
      <meta property="og:description" content={privacySEO.description} />
      <meta property="og:url" content="https://konnektr.io/privacy" />
      {/* <meta
        property="og:image"
        content={`https://konnektr.io${privacySEO.ogImage}`}
      /> */}
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={privacySEO.title} />
      <meta name="twitter:description" content={privacySEO.description} />
      {/* <meta
        name="twitter:image"
        content={`https://konnektr.io${privacySEO.ogImage}`}
      /> */}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {privacySEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(privacySEO.structuredData),
          }}
        />
      )}
    </>
  );
}
