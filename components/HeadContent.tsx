import Head from "next/head";

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

  return (
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
      <meta property="og:image:width" content="1270"/>
      <meta property="og:image:height" content="812"/>
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

      {clarityId && <script dangerouslySetInnerHTML={{__html: clarityScript}}/>}
    </Head>
  );
};

export default HeadContent;
