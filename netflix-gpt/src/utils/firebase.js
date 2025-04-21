// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* TODO: Add SDKs for Firebase products that you want to usefir
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66rNXVVmEXhJ8Jtf7rmI2XMlcZYRGKd0",
  authDomain: "netflixgpt-60e8d.firebaseapp.com",
  projectId: "netflixgpt-60e8d",
  storageBucket: "netflixgpt-60e8d.firebasestorage.app",
  messagingSenderId: "290326379011",
  appId: "1:290326379011:web:41ef03885db440c0edac36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
