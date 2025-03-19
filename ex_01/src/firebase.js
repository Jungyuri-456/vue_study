// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBz9OfXzP6fSiFsukbRrThWGi8lqjXowwg",
  authDomain: "crud-study-6971b.firebaseapp.com",
  projectId: "crud-study-6971b",
  storageBucket: "crud-study-6971b.firebasestorage.app",
  messagingSenderId: "947034404875",
  appId: "1:947034404875:web:3c07d58a423a48712e6f0e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
