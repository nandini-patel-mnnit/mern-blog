// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6c3c4.firebaseapp.com",
  projectId: "mern-blog-6c3c4",
  storageBucket: "mern-blog-6c3c4.appspot.com",
  messagingSenderId: "693566007413",
  appId: "1:693566007413:web:75cfd1a502ee425ab9b03c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

