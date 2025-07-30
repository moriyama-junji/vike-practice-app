// aspidaのfetchクライアントをインポート
import aspida from "@aspida/fetch";
// apiルートの型付きクライアントをインポート
import api from "./$api";

const fetchConfig = {
   // APIのベースURLを指定
  baseURL: "https://jsonplaceholder.typicode.com/posts",
};

// aspidaクライアントを初期化
const client = api(aspida(fetch, fetchConfig));

// データ取得関数
export const getPosts = async () => {
  const res = await client.rest.posts.$get(); 
  // postsエンドポイントからデータを取得
  console.log("responseの中身", res); // 取得したデータをコンソールに出力
}



// try {
//   // const post = await client.rest.posts._postId(postId).$get();
//   // console.log("responseの中身", post);
// } catch (e) {
//   if (e instanceof HTTPError) {
//     console.log(e.response instanceof Response); // true
//   } else {
//     // console.log(e.message);
//   }
// }

// (async () => {
//   console.log("response");
//   const postId = 1;
//   const limit = 10;

//   // 一つのデータの中身表示
//   const res = await client.rest.posts.get({ query: { limit } });
//   console.log("responseの中身", res);

//   try {
//     // const post = await client.rest.posts._postId(postId).$get();
//     // console.log("responseの中身", post);
//   } catch (e) {
//     if (e instanceof HTTPError) {
//       console.log(e.response instanceof Response); // true
//     } else {
//       // console.log(e.message);
//     }
//   }
// })();


// const getPosts = async () => {
//   const res = await client.rest.posts._id_.get({ query: { limit } });
//   console.log("responseの中身見る", res);
//   // return res;
// }

// getPosts();

// (async () => {
//   console.log("response");
//   const postId = 1;
//   // const limit = 10;

//   // const res = await client.rest.posts._id_.$get({ query: { limit } });
//   const res = await client.rest.posts._id_.get({ query: { limit } });

//   console.log("response", res);
//   // const post = await client.rest.posts._id(postId).$get();

// })();








// export const getPosts = async () => {

//   const postId = 1;
//   const limit = 10;

//   const res = await client.rest.posts._id_.$get({ query: { limit } });

//   console.log("response", res);

//   try {
//     return res
//     // const post = await client.rest.posts._id(postId).$get();
//   } catch(error) {
//     console.log(error)
//   }
// };


// (async () => {
//   const postId = 1;
//   const limit = 10;

//   const res = await client.rest.posts._id_.$get({ query: { limit } });

//   console.log("response", res);
//   try {
//     // const post = await client.rest.posts._id(postId).$get();
//   } catch {}
// })();

// (async () => {
//     const postId = 1
//     const client = api(aspida());
//     await client.rest.posts._id_.$get({'https://jsonplaceholder.typicode.com'})
// }
// )()

//  const post = await client.posts._id(postId).$get();

// import aspida from '@aspida/fetch'
// import api from "../api/$api";

// const client = api(aspida());

// // await client.rest.posts._id_.$get
// const apiClient = aspida(fetch, {
//     baseURL: 'https://jsonplaceholder.typicode.com'
// })

// export default apiClient;

// await client.rest.posts._id_.$get
// const apiClient = aspida(fetch, {
//     baseURL: 'https://jsonplaceholder.typicode.com'
// })

// export default apiClient;

// await client.rest.posts.$post({
//   body: {
//     userId: 1,
//     id:1,
//     title: "新しいタイトル",
//     body: "本文"
//   }
// });