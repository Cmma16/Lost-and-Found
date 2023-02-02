import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC77NYf-Jv3FfkYTMhji3nA2BLGq9hGkUI",
  authDomain: "lost-and-found-db-3112c.firebaseapp.com",
  projectId: "lost-and-found-db-3112c",
  storageBucket: "lost-and-found-db-3112c.appspot.com",
  messagingSenderId: "725993089020",
  appId: "1:725993089020:web:56312b8a1d3b083aa8b479",
  measurementId: "G-DZNJ1GH5QJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };
