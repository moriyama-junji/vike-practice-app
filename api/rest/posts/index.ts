import type { DefineMethods } from "aspida";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Methods = DefineMethods<{
  get: {
    resBody: Post[];
  }
}>;

// DefineMethodsはAPIのリクエストやレスポンスをの形をあらかじめ決めておくための型定義

//=========================================================
// import type { DefineMethods } from "aspida";

// export type Methods = DefineMethods<{
//   get: {
//     resBody: {
//       userId: number;
//       id: number;
//       title: string;
//       body: string;
//     };
//   };
// }>;