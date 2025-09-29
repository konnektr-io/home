// https://vike.dev/Head

import logoUrl from "../assets/konnektr.svg";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={logoUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${
          import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS
        }`}
      ></script>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: GTM
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS}');`,
        }}
      ></script>
    </>
  );
}
