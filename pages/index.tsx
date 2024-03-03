import React from 'react';
import Link from 'next/link';
import Home from "@/components/HomePage/Home";
import tools from "@/components/tools/tools.json";
import ToolCard from "@/components/HomePage/ToolCard";

const HomePage: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const getTools = () => {
    if (query) {
      return tools.filter(tool => tool.title.toLowerCase().includes(query.toLowerCase()));
    }
    return tools;
  };

  const toolsToShow = getTools();

  return (
    <div>
      <Home query={query} setQuery={setQuery} />
      <section className="mt-8"> {/* Use semantic HTML tags */}
        {
          toolsToShow.length > 0 ? (
            <div className="flex flex-wrap -m-4">
              {
                toolsToShow.map((tool) => (
                  <div
                    className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    key={tool.id}
                  >
                    <ToolCard
                      tool={tool}
                    />
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="text-center my-10">
              <span className="text-lg">
                {`No tools found matching your search: "${query}"`}
              </span>
              {/* TODO adding a button or link to clear the search or go back */}
            </div>
          )
        }
      </section>
    </div>
  );
};

export default HomePage;
