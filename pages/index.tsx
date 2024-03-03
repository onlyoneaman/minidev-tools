import React from 'react';
import Link from 'next/link';
import Home from "@/components/HomePage/Home";
import tools from "@/components/tools/tools.json";
import ToolCard from "@/components/HomePage/ToolCard";

const HomePage: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const getTools = () => {
    if (query) {
      return tools.filter(tool => tool.title.toLowerCase().includes(query.toLowerCase()))
    }
    return tools
  }

  const toolsToShow = getTools();

  return (
    <div>
      <Home
        query={query}
        setQuery={setQuery}
      />
      {
        toolsToShow.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {
              toolsToShow.map((tool, index) => {
                return (
                  <ToolCard
                    tool={tool}
                    key={index}
                  />
                )
              })
            }
          </div>
        ) : (
          <span>
            No tools found matching your search ({query})
          </span>
        )
      }
    </div>
  );
};

export default HomePage;
