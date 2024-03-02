import React from 'react';
import Link from 'next/link';
import Home from "@/components/Home";

const HomePage: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const tools = [
    {
      title: "Password Generator",
      description: "Generate a random password",
      link: "/password-generator"
    }
  ]

  const getTools = () => {
    console.log('query', query)
    if (query) {
      return tools.filter(tool => tool.title.toLowerCase().includes(query.toLowerCase()))
    }
    return tools
  }

  return (
    <div>
      <Home
        query={query}
        setQuery={setQuery}
      />
      <h1 className="text-2xl font-bold my-6">
        Welcome to Mini Tools List
      </h1>
      <ul className="list-disc pl-5">
        {
          getTools().map((tool, index) => {
            return (
              <li key={index} className="my-2">
                <Link legacyBehavior href={tool.link}>
                  <a className="text-blue-600 visited:text-purple-600 hover:underline">{tool.title}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default HomePage;
