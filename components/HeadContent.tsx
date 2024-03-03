import Head from "next/head";

const HeadContent = () => {

  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const clarityScript = clarityId ? `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  ` : '';

  return (
    <Head>
      <title>Home - minidev.tools</title>
      <meta
        name="description"
        content="Free tools for developers like encode/decode, json formatter, minifiers, etc. No ads, no tracking, no paywalls."
        key="desc"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="decode, text, html, generate, formatbeautify, formatter, generator, code, freetools"
      />
      <link rel="icon" href="/public/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {clarityId && <script dangerouslySetInnerHTML={{ __html: clarityScript }} />}
    </Head>
  );
};

export default HeadContent;
