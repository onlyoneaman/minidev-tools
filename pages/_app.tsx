import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Layout from "@/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Mini Tools App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Favicon */}
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
};

export default MyApp;
