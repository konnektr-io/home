import { eventsFeatureSEO } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{eventsFeatureSEO.title}</title>
      <meta name="description" content={eventsFeatureSEO.description} />
      <meta name="keywords" content={eventsFeatureSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/events" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={eventsFeatureSEO.title} />
      <meta property="og:description" content={eventsFeatureSEO.description} />
      <meta property="og:url" content="https://konnektr.io/events" />
      {/* <meta
        property="og:image"
        content={`https://konnektr.io${eventsFeatureSEO.ogImage}`}
      /> */}
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={eventsFeatureSEO.title} />
      <meta name="twitter:description" content={eventsFeatureSEO.description} />
      {/* <meta
        name="twitter:image"
        content={`https://konnektr.io${eventsFeatureSEO.ogImage}`}
      /> */}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />
    </>
  );
}
