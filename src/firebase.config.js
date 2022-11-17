// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgf2gb_wAsLj_dI6ylG0nbOvz-RC6BpwI",
  authDomain: "fir-project-45d0e.firebaseapp.com",
  projectId: "fir-project-45d0e",
  storageBucket: "fir-project-45d0e.appspot.com",
  messagingSenderId: "806954928176",
  appId: "1:806954928176:web:a2dc087b3ac46eae4c85f5",
  measurementId: "G-TRJNRB7XVQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
;