import React from 'react';
import Link from 'next/link';
import Home from "@/components/Home";
import tools from "@/components/tools/tools.json";

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
      <h3 className="text-xl font-bold my-6">
        Welcome to MiniDev Tools List
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        {
          toolsToShow.length>0 ? toolsToShow.map((tool, index) => {
            return (
              <li key={index}>
                <Link legacyBehavior href={tool.id}>
                  <a className="text-blue-600 visited:text-purple-600 hover:underline">{tool.title}</a>
                </Link>
              </li>
            )
          }) : (
            <span>
              No tools found matching your search ({query})
            </span>
          )
        }
      </ul>
    </div>
  );
};

export default HomePage;
