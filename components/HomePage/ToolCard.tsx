import {Tool} from "@/types";
import {Card} from "@/components/ui/card";
import Link from "next/link";

type ToolCardProps = {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = (
  {
    tool
  }
) => {
  return (
    <Link href={`/${tool.id}`} passHref legacyBehavior>
      <a aria-label={`Go to ${tool.title}`}>
        <Card className="p-4 h-full rounded-lg hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <h3 className="text-center text-lg md:text-xl font-bold tracking-wider mb-2">
            {tool.title}
          </h3>
          <p className="text-center text-xs">
            {tool.description}
          </p>
        </Card>
      </a>
    </Link>
  );
};

export default ToolCard;
