import {helpers} from "@/helpers";

const randomDataApis = {
  get_quotes: async (params: any, headers: any = {}) => {
    return helpers.api.get({
      url: 'https://api.quotable.io/quotes/random',
      headers, params
    })
  },
  get_jokes: async (params: any, headers: any = {}) => {
    return helpers.api.get({
      url: 'https://official-joke-api.appspot.com/jokes/random',
      headers, params
    })
  },
  get_jokes_v2: async (params: any, headers: any = {}) => {
    return helpers.api.get({
      url: 'https://v2.jokeapi.dev/joke/Any',
      headers, params
    })
  }
};

export default randomDataApis
