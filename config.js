import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvWkmo51ulT8IudR9tvYVy1w5kRgi6D8",
  authDomain: "storytellingapp-e450b.firebaseapp.com",
  projectId: "storytellingapp-e450b",
  storageBucket: "storytellingapp-e450b.appspot.com",
  messagingSenderId: "854054026823",
  appId: "1:854054026823:web:8df0033505765029203b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
