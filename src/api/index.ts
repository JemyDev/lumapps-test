import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000,
});

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

const get = (url: string, query: any): Promise<AxiosInstance> => instance.get(url, {
  params: {
    ...query,
    ...baseQueryParams,
  },
});

export { instance as api, get };
