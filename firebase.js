// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZOOfLMaIEdzKwVCHEhHGAZoQ8m2dmfnM",
  authDomain: "flashcardsstripes.firebaseapp.com",
  projectId: "flashcardsstripes",
  storageBucket: "flashcardsstripes.appspot.com",
  messagingSenderId: "583129573423",
  appId: "1:583129573423:web:021d7eecb5a6d9ebfb3eda",
  measurementId: "G-8KXFHHDKQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { firestore, storage, analytics, auth };
