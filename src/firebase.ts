import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "hmwebsite-b89d5.firebaseapp.com",
  projectId: "hmwebsite-b89d5",
  storageBucket: "hmwebsite-b89d5.appspot.com",
  messagingSenderId: "441279518479",
  appId: "1:441279518479:web:9c31320326c4908a69907a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, "australia-southeast1");
export const auth = getAuth(app);

// Dev Only
if (process.env.NODE_ENV !== "production") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
