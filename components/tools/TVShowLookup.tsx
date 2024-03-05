import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Show} from "@/types/movies";
import {Cross2Icon} from "@radix-ui/react-icons";

type ShowReturnType = {
  show: Show;
  score: number;
};

const TvShowLookup = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shows, setShows] = useState<ShowReturnType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setShows(data);
      setError(null);
    } catch (error) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const yearFromDateString = (dateString: string) => {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    return date.getFullYear();
  }

  const handleClearSearch = () => {
    setSearchTerm('');
    setShows([]);
    setError(null);
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex justify-center items-center space-x-2 mt-4">
        <Input
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter TV show name"
          onKeyPress={onPressEnter}
        />
        <Button onClick={handleSearch}>Search</Button>
        {searchTerm && (
          <Button
            onClick={handleClearSearch}
            className="bg-red-500 text-white p-2 py-3 rounded"
          >
            <Cross2Icon
              className="w-6 h-6"
            />
          </Button>
        )}
      </div>
      {loading && <p className="mt-4">Fetching TV shows...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {!loading && !error && shows.length === 0 && (
        <p className="mt-4">No TV shows found.</p>
      )}
      <ul className="mt-4">
        {shows.map((show) => (
          <li
            key={show.show.id}
            className="border border-gray-300 rounded p-4 mt-2"
          >
            <div className="flex gap-2 items-center">
              <img
                src={show.show.image?.medium}
                alt={show.show.name}
                className="mt-2 w-16 sm:w-32 md:w-40 object-cover rounded"
              />
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-medium">{show.show.name}</h2>
                <div className="space-x-1">
                  {show.show.externals.imdb && (
                    <a
                      href={`https://www.imdb.com/title/${show.show.externals.imdb}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-indigo-700 font-bold space-x-1"
                    >
                      <span>IMDB</span>
                      {show.show.rating.average && (
                        <span>({show.show.rating.average} / 10)</span>
                      )}
                    </a>
                  )}
                  <p className="space-x-1 text-sm opacity-70">
                    <span>{yearFromDateString(show.show.premiered)}</span>
                    <span>- {yearFromDateString(show.show.ended)}</span>
                    <span>({show.show.status})</span>
                  </p>
                </div>
                <p className="text-sm opacity-70">{show.show.genres.join(', ')}</p>
                <p className="text-sm opacity-85" dangerouslySetInnerHTML={{__html: show.show.summary}}/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TvShowLookup;
