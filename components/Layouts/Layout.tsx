import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import React from "react";
import {Toaster} from "sonner";
import {GoogleAnalytics} from "nextjs-google-analytics";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {

  return (
    <div className={"min-h-screen flex flex-col bg-stone-200 text-eerie dark:bg-eerie dark:text-white p-3"}>
      <Header/>

      <Toaster position="top-center" />

      <GoogleAnalytics trackPageViews />

      <main className="grow container mx-auto p-2 sm:p-3 md:p-5">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
