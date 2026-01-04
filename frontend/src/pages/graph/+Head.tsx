import { graphFeatureSEO } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{graphFeatureSEO.title}</title>
      <meta name="description" content={graphFeatureSEO.description} />
      <meta name="keywords" content={graphFeatureSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/graph" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={graphFeatureSEO.title} />
      <meta property="og:description" content={graphFeatureSEO.description} />
      <meta property="og:url" content="https://konnektr.io/graph" />
      {/*  <meta
        property="og:image"
        content={`https://konnektr.io${graphFeatureSEO.ogImage}`}
      /> */}
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={graphFeatureSEO.title} />
      <meta name="twitter:description" content={graphFeatureSEO.description} />
      {/* <meta
        name="twitter:image"
        content={`https://konnektr.io${graphFeatureSEO.ogImage}`}
      /> */}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />
    </>
  );
}
