import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Mini Tools App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Favicon */}
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white text-black">
        <main className="container mx-auto p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
