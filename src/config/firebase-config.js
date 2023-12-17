// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLs9qMYzx97U80Zz5NAyXpGu_xXXQ2oww",
  authDomain: "expense-tracker-7177e.firebaseapp.com",
  projectId: "expense-tracker-7177e",
  storageBucket: "expense-tracker-7177e.appspot.com",
  messagingSenderId: "517592017375",
  appId: "1:517592017375:web:9fbb4552957a594653fc6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
