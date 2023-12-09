// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZUBzpiI_hd5AsE9O7VCVCMJ9b-r1MkyE",
  authDomain: "xpenser-14b53.firebaseapp.com",
  projectId: "xpenser-14b53",
  storageBucket: "xpenser-14b53.appspot.com",
  messagingSenderId: "883013767999",
  appId: "1:883013767999:web:63472df1dba8ef4b13b98a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");
export default app;
