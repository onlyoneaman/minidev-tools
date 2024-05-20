import axios from 'axios';
import {
  ApiResponse,
  DeleteApiParams,
  GetApiParams,
  PostApiParams,
  PutApiParams,
} from '@/types/apiParams';

const errHandler = async (promise: Promise<ApiResponse>) => {
  try {
    const {data} = await promise;

    return {data, err: null};
  } catch (e: any) {
    if (!e.response) {
      return {data: null, err: e.message};
    }
    return {data: null, err: e?.response?.data.error};
  }
};

const api = {
  delete: ({url, params = {}}: DeleteApiParams) => {
    return errHandler(
      axios.delete(url, {
        params,
      }),
    );
  },

  get: ({url, params = {}, headers = {}}: GetApiParams) => {
    return errHandler(
      axios.get(url, {
        headers,
        params,
      }),
    );
  },

  init: async () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  },

  post: ({url, data = null, headers = {}}: PostApiParams) => {
    return errHandler(
      axios.post(url, data, {
        headers,
      }),
    );
  },

  put: ({url, data = null}: PutApiParams) => {
    return errHandler(axios.put(url, data));
  },
};

export default api;
