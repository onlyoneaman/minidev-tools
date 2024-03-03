import tools from '@/components/tools/tools.json';
import {useState} from "react";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {event} from "nextjs-google-analytics";

const OtherTools = () => {
  const [query, setQuery] = useState('');

  const getTools = () => {
    if (query === '') {
      return tools;
    }
    return tools.filter(tool => tool.title.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <div>
      <h3
        className="text-xs text-gray-600"
      >
        Other Tools
      </h3>

      <Input
        className="max-w-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Search for a tool"}
        size={12}
      />

      {
        getTools()
          .map(tool => (
            <Link
              className="block"
              key={tool.id}
              href={`/${tool.id}`}
              onClick={() => {
                event("other_tools_click", {
                  category: "other_tools",
                  label: tool.id,
                })
              }}
            >
              <span
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                {tool.title}
              </span>
            </Link>
          ))
      }

    </div>
  )
};

export default OtherTools;
