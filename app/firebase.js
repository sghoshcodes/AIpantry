// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6QMMnV-i--tTvg7g4OFeYW-G3_MY3sus",
  authDomain: "aipantry-4abaf.firebaseapp.com",
  projectId: "aipantry-4abaf",
  storageBucket: "aipantry-4abaf.appspot.com",
  messagingSenderId: "772656250052",
  appId: "1:772656250052:web:ad98efaafedb0c9a0d1d91",
  measurementId: "G-T8Y0LQ47S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);