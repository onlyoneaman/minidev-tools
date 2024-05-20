import React, {useState, useEffect} from 'react';
import {services} from "@/services";
import {Joke} from "@/types/random";
import {Skeleton} from "@/components/ui/skeleton";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

const RandomJokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const fetchRandomJoke = async () => {
    setLoading(true);
    try {
      const params = {
        format: "json",
        lang: "en",
        type: "single"
      }
      const response = await services.randomDataApis.get_jokes_v2(params);
      const data: Joke = response.data;
      console.log(data);
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
    setLoading(false);
  };

  const copyJoke = () => {
    if (joke) {
      toast.success("Copied to clipboard");
      navigator.clipboard.writeText(joke);
    }
  }

  const handleClick = () => {
    fetchRandomJoke();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12">

      <div className="min-w-[200px] max-w-lg space-y-3">
        <div className="">
          {
            joke && !loading ? (
              <div>
                <blockquote className="text-lg md:text-xl leading-relaxed">
                  {joke}
                </blockquote>
              </div>
            ) : (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-full"/>
              </div>
            )
          }

        </div>
        <div
          className="text-center space-x-3"
        >
          <Button
            onClick={handleClick}
            disabled={loading}
          >
            {
              loading ? 'Loading...' : 'Tell Another Joke'
            }
          </Button>
          <Button
            variant='secondary'
            onClick={copyJoke}
          >
            Copy Joke
          </Button>
        </div>
      </div>

    </div>
  );
};

export default RandomJokeGenerator;
