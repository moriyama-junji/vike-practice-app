
// import { getPosts } from 'api/rest/posts';
// import React, { useState, useEffect } from 'react';

// type PostData = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const Fetch = () => {
//   // post
//   const [post, setPost] = useState<PostData | null>(null); 

//   useEffect(() => {
//     // コンポーネントがマウントされたときにfetchを実行
//     const fetchPost = async () => {
//       // fetchPost()
//       const fetchedPostData = await getPosts();
//       setPost(fetchedPostData); 
//     };
//     fetchPost()
//   }, []); 

//   if (!post) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// export default Fetch;



//  import React from 'react';

//  const Fetch = async () => {
//     // ディレクトリ構造により 'api.users' が利用可能になります
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 

//     const users = await res.json()

//     console.log(users)
//     // const result = users.map(user => <div key={user.id}>{user.name}</div>);
//     return (
//     <div>
//       fetch
//       {users}
//     </div>

//     )
// };

// export default Fetch;


// import React, { useState, useEffect } from 'react'; // useState と useEffect をインポート

// const Fetch = () => {
//     // ユーザーデータを保持するための状態変数
//     const [users, setUsers] = useState<any[]>([]); // 型は適宜調整してください (例: User[])
//     const [loading, setLoading] = useState(true); // ロード状態を管理
//     const [error, setError] = useState<string | null>(null); // エラー状態を管理

//     // コンポーネントがマウントされた後にデータをフェッチするための useEffect
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const res = await fetch('https://jsonplaceholder.typicode.com/users');

//                 if (!res.ok) { // レスポンスが成功でなかった場合
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }

//                 const data = await res.json(); // ここで await を使ってPromiseを解決
//                 setUsers(data); // 取得したデータを状態にセット
//             } catch (err: any) {
//                 setError(err.message); // エラーを状態にセット
//             } finally {
//                 setLoading(false); // ロードが完了
//             }
//         };

//         fetchUsers();
//     }, []); // 空の依存配列は、コンポーネントがマウントされたときに一度だけ実行されることを意味します

//     if (loading) {
//         return <div>ロード中...</div>; // データ取得中はローディング表示
//     }

//     if (error) {
//         return <div>エラーが発生しました: {error}</div>; // エラー表示
//     }

//     return (
//         <div>
//             <h1>ユーザーリスト</h1>
//             {/* 取得したユーザーデータをマップして表示 */}
//             {users.map(user => (
//                 <div key={user.id}>
//                     {user.name} ({user.id})
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Fetch;



