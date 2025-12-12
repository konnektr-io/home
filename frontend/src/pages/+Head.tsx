// https://vike.dev/Head

import logoUrl from "../assets/konnektr.svg";

export default function HeadDefault() {
  return (
    <>
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href={logoUrl} />
      <link rel="apple-touch-icon" sizes="180x180" href={logoUrl} />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* SEO Essentials */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />

      {/* Theme */}
      <meta name="theme-color" content="#1E9E95" />
      <meta name="color-scheme" content="dark" />

      {/* Google Tag Manager */}
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: GTM
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${
            import.meta.env.PUBLIC_ENV__GTM_ID
          }');`,
        }}
      ></script>
    </>
  );
}
