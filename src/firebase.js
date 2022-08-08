// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRWK-ottQBu7auJfHt0uF10hnQ9ntflzc",
  authDomain: "wallpapers-de0a1.firebaseapp.com",
  projectId: "wallpapers-de0a1",
  storageBucket: "wallpapers-de0a1.appspot.com",
  messagingSenderId: "709192899259",
  appId: "1:709192899259:web:9fd8e52e7315abf9ae679e",
  measurementId: "G-4C09SBWEEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};