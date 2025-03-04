// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIzBoH4aREwWciuWKA-tZ_8A_-u34HSw",
  authDomain: "knitstore-cdfc7.firebaseapp.com",
  projectId: "knitstore-cdfc7",
  storageBucket: "knitstore-cdfc7.appspot.com",
  messagingSenderId: "349627914518",
  appId: "1:349627914518:web:9c03dc46983109407ed837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app