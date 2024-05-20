import {helpers} from "@/helpers";

const quoteApis = {
  get_quotes: async (params: any, headers: any = {}) => {
    return helpers.api.get({
      url: 'https://api.quotable.io/quotes/random',
      headers, params
    })
  }
};

export default quoteApis
