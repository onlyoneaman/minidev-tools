import HomeSearch from "@/components/HomeSearch";

type HomeProps = {
  query: string;
  setQuery: (query: string) => void;
}

const Home = (
  {
    query,
    setQuery
  }: HomeProps
) => {

  return (
    <div className={"text-center space-y-3"}>
      <h1
        className={"text-2xl md:text-3xl font-bold uppercase tracking-wider p-4"}
      >
        MiniDev Tools
      </h1>
      <h2>
        A free repository of minidev tools for your needs
      </h2>

      <HomeSearch
        query={query}
        setQuery={setQuery}
      />
    </div>
  )
};

export default Home;
