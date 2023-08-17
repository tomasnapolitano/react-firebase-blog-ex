// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmQ622dVQ7S-Q1A7pN68gAIGxLI9lRQgM",
  authDomain: "react-firebase-blog-ex.firebaseapp.com",
  projectId: "react-firebase-blog-ex",
  storageBucket: "react-firebase-blog-ex.appspot.com",
  messagingSenderId: "979980128683",
  appId: "1:979980128683:web:d1436e545920d7ed89c2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);