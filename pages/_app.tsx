import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React, {useEffect} from 'react';
import Layout from "@/components/Layouts/Layout";
import {ThemeProvider} from "@/components/ThemeProvider";
import HeadContent from "@/components/HeadContent";
import {increaseVisitCounterOncePerSession} from "@/utils/visitCounter";

const MyApp = ({Component, pageProps}: AppProps) => {

  useEffect(() => {
    increaseVisitCounterOncePerSession();
  }, []);

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
