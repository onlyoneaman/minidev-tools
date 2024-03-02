import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import Head from 'next/head';
import Layout from "@/components/Layout";
import {ThemeProvider} from "@/components/ThemeProvider";

const MyApp = ({Component, pageProps}: AppProps) => {

  return (
    <>
      <Head>
        <title>
          Home - Mini Tools | minitools
        </title>
        <meta
          name="description"
          content="Free tools for developers like encode/decode, json formatter, minifiers, etc. No ads, no tracking, no paywalls."
          key="desc"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        <meta
          name="keywords"
          content="decode, text, html, generate, formatbeautify, formatter, generator, code, freetools"
        />

        <link rel="icon" href="/public/favicon.ico"/>

      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        // enableSystem={true}
        // disableTransitionOnChange
      >
        <div className="min-h-screen">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
