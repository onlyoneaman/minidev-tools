import React, {useState, useEffect} from 'react';
import {services} from "@/services";
import {Quote} from "@/types/random";
import {Skeleton} from "@/components/ui/skeleton";

const RandomQuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  const handleClick = () => {
    setAuthor(null);
    setQuote(null);
    fetchRandomQuote();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12">

      <div className="min-w-[200px] max-w-lg space-y-3">
        <div className="">
          {
            quote ? (
              <div>
                <blockquote className="text-lg md:text-xl leading-relaxed">
                  {quote}
                </blockquote>
                <span
                  className="block text-right mt-2"
                >
                  {author && <cite className="text-gray-600 font-medium ml-2">{author}</cite>}
                </span>
              </div>
            ) : (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-1/2 "/>
              </div>
            )
          }

        </div>
        <div className="text-center">
          <button
            className={
            `px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300
            ${loading ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-black hover:bg-gray-800'}
            `}
            disabled={loading}
            onClick={handleClick}
          >
            {
              loading ? 'Loading...' : 'Generate Random Quote'
            }
          </button>
        </div>
      </div>

    </div>
  );
};

export default RandomQuoteGenerator;
