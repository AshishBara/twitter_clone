// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRzqg43NOuKnbum99wnRJ5dQEuW_dNESQ",
  authDomain: "twitter-clone-me.firebaseapp.com",
  projectId: "twitter-clone-me",
  storageBucket: "twitter-clone-me.appspot.com",
  messagingSenderId: "428418625667",
  appId: "1:428418625667:web:a5547a6198776e8497abb6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };