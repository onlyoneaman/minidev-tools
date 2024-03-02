import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {Toaster} from "sonner";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {

  return (
    <div className={"min-h-screen flex flex-col bg-eerie text-white p-3"}>
      <Header/>

      <Toaster position="top-center" />

      <main className="grow container mx-auto py-5">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
