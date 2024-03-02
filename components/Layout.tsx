import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {

  return (
    <div className={"bg-white text-black p-3"}>
      <Header/>
      <main className="container mx-auto">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
