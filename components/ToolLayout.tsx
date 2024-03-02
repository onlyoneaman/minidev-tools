import React from "react";
import {Tool} from "@/types";
import SEO from "@/components/SEO";
import ToolPageSider from "@/components/ToolPageSider";

type ToolLayoutProps = {
  children: React.ReactNode;
  tool: Tool;
}

const ToolLayout = ({children, tool}: ToolLayoutProps) => {

  return (
    <>

      <SEO title={tool.title} description={tool.description} />

      <div
        className={"flex"}
      >

        <div
          className="min-w-64 max-w-64 hidden md:block"
        >
          <ToolPageSider />
        </div>

        <div
          className="grow"
        >
          <div
            className={"text-center text-xl md:text-3xl font-bold uppercase tracking-wider p-4"}
          >
            {tool.title}
          </div>

          <main className="">
            {children}
          </main>
        </div>

      </div>

    </>
  );
};

export default ToolLayout;
