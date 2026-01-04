import { mcpFeatureSEO } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{mcpFeatureSEO.title}</title>
      <meta name="description" content={mcpFeatureSEO.description} />
      <meta name="keywords" content={mcpFeatureSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/mcp" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={mcpFeatureSEO.title} />
      <meta property="og:description" content={mcpFeatureSEO.description} />
      <meta property="og:url" content="https://konnektr.io/mcp" />
      <meta
        property="og:image"
        content={`https://konnektr.io${mcpFeatureSEO.ogImage}`}
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={mcpFeatureSEO.title} />
      <meta name="twitter:description" content={mcpFeatureSEO.description} />
      <meta
        name="twitter:image"
        content={`https://konnektr.io${mcpFeatureSEO.ogImage}`}
      />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />
    </>
  );
}
