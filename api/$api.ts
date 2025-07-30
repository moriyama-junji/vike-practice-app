import type { AspidaClient } from 'aspida';
import type { Methods as Methods_1lvtuzw } from './rest/posts';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/rest/posts';
  const GET = 'GET';

  return {
    rest: {
      posts: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1lvtuzw['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1lvtuzw['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
