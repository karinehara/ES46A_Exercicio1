// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6zHo4etduX8kPmmUoXjHKqaHz03mBYac",
  authDomain: "es46a-exercicio1-bf73a.firebaseapp.com",
  projectId: "es46a-exercicio1-bf73a",
  storageBucket: "es46a-exercicio1-bf73a.appspot.com",
  messagingSenderId: "365221869034",
  appId: "1:365221869034:web:09e0593b856a25a5fc6e93",
  measurementId: "G-8B08X72RY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };