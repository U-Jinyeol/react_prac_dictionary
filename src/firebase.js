// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2VzAJqO7bft1GWvPJyYc5ybS-f8UbciY",
  authDomain: "react-prac-209a8.firebaseapp.com",
  projectId: "react-prac-209a8",
  storageBucket: "react-prac-209a8.appspot.com",
  messagingSenderId: "254430638075",
  appId: "1:254430638075:web:11fb026a5058e73194e55e",
  measurementId: "G-BGS76EYCE8",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
