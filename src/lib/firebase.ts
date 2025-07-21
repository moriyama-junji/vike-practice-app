import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDHiHfC9NWFEXSqLeVx3FSqxbW6TUhz3A",
  authDomain: "my-app-vike.firebaseapp.com",
  projectId: "my-app-vike",
  storageBucket: "my-app-vike.firebasestorage.app",
  messagingSenderId: "696139091108",
  appId: "1:696139091108:web:5d97197afcefc71ba62a31",
  measurementId: "G-2E9SVZHTKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// データベース初期化
const db = getFirestore(app);

export default db;