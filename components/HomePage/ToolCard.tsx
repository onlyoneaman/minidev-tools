import {Tool} from "@/types";
import {Card} from "@/components/ui/card";
import Link from "next/link";

type ToolCardProps = {
  tool: Tool;
}

const ToolCard = (
  {
    tool
  }: ToolCardProps
) => {
  return (
    <Link
      href={`/${tool.id}`}
    >
      <Card
        className={"p-4 rounded-lg hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"}
      >
        <h3
          className={"text-center text-xl md:text-3xl font-bold tracking-wider"}
        >
          {tool.title}
        </h3>
        <p
          className={"text-center text-sm"}
        >
          {tool.description}
        </p>
      </Card>
    </Link>
  )
};

export default ToolCard;
