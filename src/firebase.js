// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDhFYDNGDJGpY0sOpT0d_d4aLSUEfD-5g",
  authDomain: "clone-96d29.firebaseapp.com",
  projectId: "clone-96d29",
  storageBucket: "clone-96d29.appspot.com",
  messagingSenderId: "818076465597",
  appId: "1:818076465597:web:d6f5fbc8efb492b177bad4",
  measurementId: "G-76N4EDLPC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);