import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000,
});

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

function get<T>(url: string, query: any): Promise<AxiosResponse<T>> {
  return instance.get(url, {
    params: {
      ...query,
      ...baseQueryParams,
    },
  });
};

export { instance as api, get };
