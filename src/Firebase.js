import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDSnYzyYNMDWSzLhYhxgce5ONbV8yR6JqY",
  authDomain: "midnight-63074.firebaseapp.com",
  projectId: "midnight-63074",
  storageBucket: "midnight-63074.firebasestorage.app",
  messagingSenderId: "792496919352",
  appId: "1:792496919352:web:86b69b02f2ac48c07aa7cd"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
