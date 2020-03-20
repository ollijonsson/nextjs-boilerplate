import axios, { AxiosResponse, AxiosError } from 'axios';

const serverPrefix = 'http://localhost:3000';

export const loadMessage = (isServer: boolean = false): Promise<string> => {
  const endpoint = '/api/demo';
  const url = isServer ?
    serverPrefix + endpoint + '?server=true':
    endpoint;
  return axios.get(url).then((response: AxiosResponse) => {
    return response.data;
  }).catch((error: AxiosError) => {
    return error.code;
  });
}