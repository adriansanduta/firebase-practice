// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "NA",
  authDomain: "fir-practice-3706f.firebaseapp.com",
  projectId: "fir-practice-3706f",
  storageBucket: "fir-practice-3706f.firebasestorage.app",
  messagingSenderId: "11809236004",
  appId: "1:11809236004:web:8ff350959cd97cb60e24b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);