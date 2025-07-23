import type { DefineMethods } from "aspida";

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userId: number;
      id: number;
      title: string;
      body: string;
    };
  };
}>;