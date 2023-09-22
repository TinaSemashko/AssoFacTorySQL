// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/storage";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNgEzCAJlnlRHVoi21OXJgzWl13wqKSCg",
  authDomain: "assofactory-b7f0b.firebaseapp.com",
  projectId: "assofactory-b7f0b",
  storageBucket: "assofactory-b7f0b.appspot.com",
  messagingSenderId: "528163036489",
  appId: "1:528163036489:web:a0af3a6f172a6d8c6bce98",
  measurementId: "G-JKG8WC2ZV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
