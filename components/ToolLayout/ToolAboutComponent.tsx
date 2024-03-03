import React from "react";
import {Tool} from "@/types";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

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
          <Card>
            <CardHeader>
              <h2
                className="text-xl font-bold uppercase tracking-wider"
              >
                About {tool.title}
              </h2>
            </CardHeader>
            <CardContent>
              <div
                className={"markdown"}
                dangerouslySetInnerHTML={{__html: content}}
              />
            </CardContent>
          </Card>
        )
      }
    </div>
  )
};

export default ToolAboutComponent;
