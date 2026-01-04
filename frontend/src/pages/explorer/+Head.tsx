import { explorerFeatureSEO } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{explorerFeatureSEO.title}</title>
      <meta name="description" content={explorerFeatureSEO.description} />
      <meta name="keywords" content={explorerFeatureSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/explorer" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={explorerFeatureSEO.title} />
      <meta
        property="og:description"
        content={explorerFeatureSEO.description}
      />
      <meta property="og:url" content="https://konnektr.io/explorer" />
      <meta
        property="og:image"
        content={`https://konnektr.io${explorerFeatureSEO.ogImage}`}
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={explorerFeatureSEO.title} />
      <meta
        name="twitter:description"
        content={explorerFeatureSEO.description}
      />
      <meta
        name="twitter:image"
        content={`https://konnektr.io${explorerFeatureSEO.ogImage}`}
      />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />
    </>
  );
}
