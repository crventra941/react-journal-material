// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtU459bW8KIZp-wPWhxoq6113uQQcmOGQ",
  authDomain: "react-course-d2b7b.firebaseapp.com",
  projectId: "react-course-d2b7b",
  storageBucket: "react-course-d2b7b.appspot.com",
  messagingSenderId: "119706848426",
  appId: "1:119706848426:web:759232d78000bffcc414d3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
