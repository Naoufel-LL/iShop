// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Pn1DmhM5EPcyjXkaUYrTk03sRFNR5CA",
  authDomain: "reactnativefr.firebaseapp.com",
  projectId: "reactnativefr",
  storageBucket: "reactnativefr.appspot.com",
  messagingSenderId: "781709127135",
  appId: "1:781709127135:web:39e3f352baa485cd90286a",
  measurementId: "G-3Q35Q8KPWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}