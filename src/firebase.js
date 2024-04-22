// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4IneWaRdwmy7InhqT-6y2iRVsPmcG4ag",
    authDomain: "react-portfolio-jaimin.firebaseapp.com",
    projectId: "react-portfolio-jaimin",
    storageBucket: "react-portfolio-jaimin.appspot.com",
    messagingSenderId: "576637830765",
    appId: "1:576637830765:web:d4bfa767a02105f8ea2164",
    measurementId: "G-QW9NCLBTDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();