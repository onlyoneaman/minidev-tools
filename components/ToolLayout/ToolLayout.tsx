import React from "react";
import {Tool} from "@/types";
import SEO from "@/components/SEO";
import ToolPageSider from "@/components/ToolLayout/ToolPageSider";

type ToolLayoutProps = {
  children: React.ReactNode;
  tool: Tool;
}

const ToolLayout = ({children, tool}: ToolLayoutProps) => {

  return (
    <>

      <SEO title={tool.title} description={tool.longDescription} />

      <div
        className={"flex"}
      >

        <div
          className="min-w-64 max-w-64 hidden md:block"
        >
          <ToolPageSider />
        </div>

        <div
          className="grow text-center"
        >
          <div className={"p-3 space-y-3"}>
            <h1
              className={"text-xl md:text-3xl font-bold uppercase tracking-wider"}
            >
              {tool.title}
            </h1>
            <h3 className={""}>
              {tool.description}
            </h3>
          </div>

          <main className="space-y-3">
            {children}
          </main>
        </div>

      </div>

    </>
  );
};

export default ToolLayout;
