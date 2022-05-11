// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB-xOwIS7wFd3w8yx8H5UNtBp_50hs_Wa0",
  authDomain: "taller-2-web-35197.firebaseapp.com",
  projectId: "taller-2-web-35197",
  storageBucket: "taller-2-web-35197.appspot.com",
  messagingSenderId: "351844915270",
  appId: "1:351844915270:web:43ef4a973f3535f7d75247",
  measurementId: "G-EVXMQHWZJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {
    app, auth, db
}






