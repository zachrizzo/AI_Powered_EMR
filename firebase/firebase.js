// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX95rDU11CSSvV3q77jPkkbaLbHOsPrrg",
  authDomain: "saturn-emr.firebaseapp.com",
  projectId: "saturn-emr",
  storageBucket: "saturn-emr.appspot.com",
  messagingSenderId: "1031543591726",
  appId: "1:1031543591726:web:f95582748585643a7e60bf",
  measurementId: "G-6YDTN5N8X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, storage, auth };
