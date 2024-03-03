import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import Layout from "@/components/Layouts/Layout";
import {ThemeProvider} from "@/components/ThemeProvider";
import HeadContent from "@/components/HeadContent";

const MyApp = ({Component, pageProps}: AppProps) => {

  return (
    <>
      <HeadContent />
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
