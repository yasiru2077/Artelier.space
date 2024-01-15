import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCD6hhMkqM8rUsEneOpFozl6sRhFysXtO0",
    authDomain: "agrotechnew-d9d46.firebaseapp.com",
    projectId: "agrotechnew-d9d46",
    storageBucket: "agrotechnew-d9d46.appspot.com",
    messagingSenderId: "645806509763",
    appId: "1:645806509763:web:625f32bf5b53722debdc76"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()