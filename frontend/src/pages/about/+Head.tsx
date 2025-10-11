// About page SEO Head component
import { aboutSEO, generateStructuredData } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{aboutSEO.title}</title>
      <meta name="description" content={aboutSEO.description} />
      <meta name="keywords" content={aboutSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/about" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={aboutSEO.title} />
      <meta property="og:description" content={aboutSEO.description} />
      <meta property="og:url" content="https://konnektr.io/about" />
      <meta
        property="og:image"
        content={`https://konnektr.io${aboutSEO.ogImage}`}
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={aboutSEO.title} />
      <meta name="twitter:description" content={aboutSEO.description} />
      <meta
        name="twitter:image"
        content={`https://konnektr.io${aboutSEO.ogImage}`}
      />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {aboutSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(aboutSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
