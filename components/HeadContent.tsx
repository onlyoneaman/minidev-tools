import Head from "next/head";
import Script from "next/script";

const HeadContent = () => {

  const title = "Home";
  const description = "Free tools for developers like encode/decode, json formatter, minifiers, etc. No ads, no tracking, no paywalls.";
  const ogImage = "https://minidev.tools/minidev-tools.webp";

  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const clarityScript = clarityId ? `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  ` : '';

  const fullTitle = `${title} | minidev.tools`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'minidev.tools',
    applicationName: 'minidev.tools',
    applicationCategory: 'Developer Tools',
    url: "https://minidev.tools",
    operatingSystem: 'Any',
    headline: fullTitle,
    description: description,
    features: [
      "Code Formatter",
      "Encode/Decode",
      "Minifiers",
    ],
    datePublished: '2024-03-05T08:00:00+08:00',
    screenshot: [ogImage],
    creator: {
      '@type': 'Person',
      name: 'Aman Kumar',
      url: 'https://amankumar.ai',
      sameAs: [
        'https://twitter.com/onlyoneaman',
        'https://github.com/onlyoneaman',
      ]
    }
  };

  return (
    <>
      <Head>
        <title>
          {fullTitle}
        </title>
        <meta
          name="description"
          content={description}
          key="desc"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta
          name="keywords"
          content="decode, text, html, generate, formatbeautify, formatter, generator, code, freetools"
        />
        <link rel="icon" href="/public/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        <meta property="og:title" content="minidev.tools"/>
        <meta property="og:description" content={description}/>
        <meta property="og:url" content="https://minidev.tools"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="minidev.tools"/>
        <meta property="og:image" content={ogImage}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="minidev.tools"/>
        <meta property="og:locale" content="en_US"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:creator" content="@onlyoneaman"/>
        <meta property="twitter:title" content="minidev.tools"/>
        <meta property="twitter:description" content={description}/>
        <meta property="twitter:image" content={ogImage}/>
        <meta property="twitter:image:alt" content="minidev.tools"/>
        <meta property="twitter:url" content="https://minidev.tools"/>
        <meta property="twitter:domain" content="minidev.tools"/>

      </Head>
      <Script
        id="structured-data"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />
      {
        clarityId && (
          <Script
            strategy="afterInteractive"
            id="clarity-script"
            dangerouslySetInnerHTML={{__html: clarityScript}}
          />
        )
      }
    </>
  );
};

export default HeadContent;
