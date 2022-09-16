// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqpOaJ5lkeqaKaJ9HIyc1daLux5UVB4IA",
    authDomain: "twitter-clone-1d44b.firebaseapp.com",
    projectId: "twitter-clone-1d44b",
    storageBucket: "twitter-clone-1d44b.appspot.com",
    messagingSenderId: "43959126837",
    appId: "1:43959126837:web:722c03cb56fa3d6e891a7c"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };