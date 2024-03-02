import React from "react";
import {Tool} from "@/types";

type ToolAboutComponentProps = {
  content: string;
  tool: Tool;
}

const ToolAboutComponent = (
  {
    content,
    tool
  }: ToolAboutComponentProps
) => {

  return (
    <div>
      {
        content && (
          <div
            className={"p-3 mt-12 bg-white dark:bg-granite rounded my-5"}
          >
            <h2
              className={"border-b text-lg"}
            >
              About {tool.title}
            </h2>
            <div
              className={"markdown"}
              dangerouslySetInnerHTML={{__html: content}}
            />
          </div>
        )
      }
    </div>
  )
};

export default ToolAboutComponent;
