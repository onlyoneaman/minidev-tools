import React from "react";
import {Tool} from "@/types";

type ToolLayoutProps = {
  children: React.ReactNode;
  tool: Tool;
}

const ToolLayout = ({children, tool}: ToolLayoutProps) => {

  return (
    <div>

      <div
         className={"text-center text-xl font-bold uppercase tracking-wider p-4"}
      >
        {tool.title}
      </div>

      <main className="">
        {children}
      </main>

    </div>
  );
};

export default ToolLayout;
