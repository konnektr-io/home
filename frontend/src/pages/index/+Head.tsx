// Homepage SEO Head component
import { homepageSEO, generateStructuredData } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{homepageSEO.title}</title>
      <meta name="description" content={homepageSEO.description} />
      <meta name="keywords" content={homepageSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={homepageSEO.title} />
      <meta property="og:description" content={homepageSEO.description} />
      <meta property="og:url" content="https://konnektr.io" />
      <meta property="og:image" content="https://konnektr.io/og-image.jpg" />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={homepageSEO.title} />
      <meta name="twitter:description" content={homepageSEO.description} />
      <meta name="twitter:image" content="https://konnektr.io/og-image.jpg" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />

      {/* Structured Data */}
      {homepageSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(homepageSEO.structuredData),
          }}
        />
      )}
    </>
  );
}
