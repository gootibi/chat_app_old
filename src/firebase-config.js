// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY54xluRcDT3382dHopNNsGP4Zs4xjPCo",
  authDomain: "chatappold.firebaseapp.com",
  projectId: "chatappold",
  storageBucket: "chatappold.appspot.com",
  messagingSenderId: "1089371983850",
  appId: "1:1089371983850:web:fe16c25a3366d1ad606c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();