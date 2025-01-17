// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAargMi1RO1Y-BrOl7UkNuCZGxQHI5cKI",
  authDomain: "netflixgpt-dc483.firebaseapp.com",
  projectId: "netflixgpt-dc483",
  storageBucket: "netflixgpt-dc483.firebasestorage.app",
  messagingSenderId: "882138841223",
  appId: "1:882138841223:web:a50524f96771831bf2f822",
  measurementId: "G-KPG38W43ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);