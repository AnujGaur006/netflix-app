// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo__lgWhXVLCZiqOFozXV4TBAq059dNkM",
  authDomain: "netflix-cd822.firebaseapp.com",
  projectId: "netflix-cd822",
  storageBucket: "netflix-cd822.appspot.com",
  messagingSenderId: "185931697213",
  appId: "1:185931697213:web:a77dabe839e39acda5ee54",
  measurementId: "G-JGVK1K40LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();