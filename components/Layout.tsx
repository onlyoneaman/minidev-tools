import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

const Layout: React.FC = ({children}) => {

  return (
    <div className={"bg-white text-black p-3"}>
      <Header />
      <main className="container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
