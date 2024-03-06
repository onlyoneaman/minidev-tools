import HomeSearch from "@/components/HomePage/HomeSearch";
import TopToolsSection from "@/components/HomePage/TopToolsSection";
import {Tool} from "@/types";

type HomeProps = {
  query: string;
  setQuery: (query: string) => void;
  topTools: Tool[];
}

const Home = (
  {
    query,
    setQuery,
    topTools
  }: HomeProps
) => {

  return (
    <div className={"text-center space-y-3"}>

      <div>
        <h1
          className={"text-2xl md:text-3xl font-bold uppercase tracking-wider p-4"}
        >
          MiniDev Tools
        </h1>
        <h2>
          An open-source, free repository of mini dev tools for your needs.
        </h2>
        <p className="space-x-1">
          <span>
            Anything you would like to be added, or have any feedback, please let us know
          </span>
          <a
            className={"text-blue-500"}
            href="https://github.com/onlyoneaman/minidev-tools/issues/new"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>

      <TopToolsSection topTools={topTools} />

      <HomeSearch
        query={query}
        setQuery={setQuery}
      />
    </div>
  )
};

export default Home;
