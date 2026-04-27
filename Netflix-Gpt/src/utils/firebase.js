// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDKPUrgQXhDII4qf0U40o4NKSEboHj8LFw",
 authDomain: "netflix-a80ea.firebaseapp.com",
 projectId: "netflix-a80ea",
 storageBucket: "netflix-a80ea.firebasestorage.app",
 messagingSenderId: "76027063923",
 appId: "1:76027063923:web:354572589abb7e754d8406",
 measurementId: "G-0BCF70CLZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
