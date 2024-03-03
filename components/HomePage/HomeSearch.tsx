import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";

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
      className={"p-2 md:p-4 rounded-lg"}
    >

      <Input
        className="text-black bg-white dark:text-white dark:bg-gray-500 max-w-lg mx-auto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Search for a tool"}
      />

    </div>
  )
};

export default HomeSearch;
