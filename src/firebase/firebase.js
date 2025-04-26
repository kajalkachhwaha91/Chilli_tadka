// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD0YJOL5PuEHShzEjM1nV2wTaZa8QdJHQ",
    authDomain: "chilli-takda.firebaseapp.com",
    projectId: "chilli-takda",
    storageBucket: "chilli-takda.appspot.com",   // <-- FIXED HERE
    messagingSenderId: "960390182385",
    appId: "1:960390182385:web:0470ef24b593429d424050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

export { db };
