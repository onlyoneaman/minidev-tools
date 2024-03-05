type Show = {
  averageRuntime: number;
  ended: string;
  genres: string[];
  id: string;
  image: {
    medium: string;
    original: string;
  };
  externals: {
    imdb: string;
    thetvdb: number;
    tvrage: number;
  };
  language: string;
  name: string;
  premiered: string;
  rating: {
    average: number;
  };
  runtime: number;
  schedule: {
    days: string[];
    time: string;
  };
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  weight: number;
  network: {
    id: number;
    name: string;
    officialSite: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
};

export type { Show };
