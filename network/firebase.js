import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwgfdJ952hlcNA4PvnYqVs5dbdUmOZKps",
  authDomain: "chatooapp-5f274.firebaseapp.com",
  projectId: "chatooapp-5f274",
  storageBucket: "chatooapp-5f274.appspot.com",
  messagingSenderId: "406861413401",
  appId: "1:406861413401:web:06339228e2545bf97cbe88",
  measurementId: "G-SNBZ2XBTJZ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
