// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYjw6uooTHbLtdiUEO9OrAwp1AtCsMqzc",
  authDomain: "try-on-8c4b6.firebaseapp.com",
  projectId: "try-on-8c4b6",
  storageBucket: "try-on-8c4b6.firebasestorage.app",
  messagingSenderId: "411893872613",
  appId: "1:411893872613:web:bb816fb4966fc960ac210c",
  measurementId: "G-KS8LMSSJDS",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
