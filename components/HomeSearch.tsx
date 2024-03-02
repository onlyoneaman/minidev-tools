import {useEffect, useState} from "react";

type HomeSearchProps = {
  query: string;
  setQuery: (query: string) => void;
}

const HomeSearch = (
  {
    query,
    setQuery
  }: HomeSearchProps
) => {
  const [debounceQuery, setDebounceQuery] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceQuery(query)
      }, 300);
    return () => {
      clearTimeout(handler);
    }
  });

  useEffect(() => {
    if (debounceQuery !== query) {
      setQuery(debounceQuery);
    }
  }, [debounceQuery]);

  return (
    <div
      className={"p-4 rounded-lg"}
    >
      <input
        className={"w-full max-w-lg p-2 rounded-lg bg-transparent border border-gray-300"}
        type="text"
        placeholder={"Search for a tool"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
};

export default HomeSearch;
