import { pricingSEO } from "../../data/seo.js";

export default function Head() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{pricingSEO.title}</title>
      <meta name="description" content={pricingSEO.description} />
      <meta name="keywords" content={pricingSEO.keywords.join(", ")} />
      <link rel="canonical" href="https://konnektr.io/pricing" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pricingSEO.title} />
      <meta property="og:description" content={pricingSEO.description} />
      <meta property="og:url" content="https://konnektr.io/pricing" />
      <meta
        property="og:image"
        content={`https://konnektr.io${pricingSEO.ogImage}`}
      />
      <meta property="og:site_name" content="Konnektr" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnektr" />
      <meta name="twitter:title" content={pricingSEO.title} />
      <meta name="twitter:description" content={pricingSEO.description} />
      <meta
        name="twitter:image"
        content={`https://konnektr.io${pricingSEO.ogImage}`}
      />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Konnektr" />
    </>
  );
}
