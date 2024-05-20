import React, { useState, useEffect } from 'react';
import {services} from "@/services";
import {Quote} from "@/types/random";

const RandomQuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await services.quoteApis.get_quotes({});
      // const data: Quote[] = await response.json();
      const data: Quote[] = response.data;
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuote(randomQuote.content);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  const handleClick = () => {
    fetchRandomQuote();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12">

      <div className="max-w-lg">
        <div className="mb-4">
          <blockquote className="text-xl font-semibold text-gray-800 leading-relaxed">
            {quote || 'Loading quote...'}
          </blockquote>
        </div>
        <div className="text-right">
          <cite className="text-gray-600 font-medium">
            {author || '...'}
          </cite>
        </div>
        <div className="mt-4 text-center">
          <button
            className="px-4 py-2 rounded-md bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors duration-300"
            onClick={handleClick}
          >
            Get New Quote
          </button>
        </div>
      </div>

    </div>
  );
};

export default RandomQuoteGenerator;
