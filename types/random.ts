type Quote = {
  author: string,
  authorSlug: string,
  content: string,
  dateAdded: string,
  dateModified: string,
  length: number,
  tags: string[],
  _id: string
};

type Joke = {
  error: boolean,
  category: string,
  type: string,
  joke: string,
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
  },
  id: number,
  lang: string
  safe: boolean
}

export type {
  Quote, Joke
};
