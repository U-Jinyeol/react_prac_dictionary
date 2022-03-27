// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTp0IrVsspm1nPBqyUQkUJhqjOgj2Vg8w",
  authDomain: "sparta-react-basic-22569.firebaseapp.com",
  projectId: "sparta-react-basic-22569",
  storageBucket: "sparta-react-basic-22569.appspot.com",
  messagingSenderId: "1089512299892",
  appId: "1:1089512299892:web:1dccaab6460c784c9de021",
  measurementId: "G-6HGSWLQ6P0",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
