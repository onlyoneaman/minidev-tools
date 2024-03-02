import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Welcome to Mini Tools App</h1>
      <ul className="list-disc pl-5">
        <li className="my-2">
          <Link legacyBehavior href="/password-generator">
            <a className="text-blue-600 visited:text-purple-600 hover:underline">Password Generator</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
