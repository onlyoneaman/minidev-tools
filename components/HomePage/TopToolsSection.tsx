import {Tool} from "@/types";
import Link from "next/link";

type TopToolsSectionProps = {
  topTools: Tool[];
}

const TopToolsSection = (
  {
    topTools
  }: TopToolsSectionProps
) => {

  if (!topTools.length) return null;

  return (
    <section className="mx-auto text-xs md:text-sm">
      <div className="flex flex-wrap gap-x-1 gap-0 md:gap-3 items-center justify-center">
        <span className="">
          {
            `Your Most Used Tool${topTools.length > 1 ? 's' : ''}:`
          }
        </span>
        {
          topTools.map((tool) => (
            <Link
              className="underline"
              key={tool.id}
              href={`/${tool.id}`}
            >
              {tool.title}
            </Link>
          ))
        }
      </div>
    </section>
  )
};

export default TopToolsSection;
