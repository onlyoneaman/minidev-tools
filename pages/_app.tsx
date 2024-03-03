import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import Head from 'next/head';
import Layout from "@/components/Layouts/Layout";
import {ThemeProvider} from "@/components/ThemeProvider";

const MyApp = ({Component, pageProps}: AppProps) => {

  return (
    <>
      <Head>
        <title>
          Home - minidev.tools
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
