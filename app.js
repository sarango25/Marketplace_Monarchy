// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { signIn, createUser, addUserToDataBase} from "./src/scripts/functions/auth";

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

const signup = document.getElementById("signup__form");
const login = document.getElementById("login__form");

if(signup != null){
signup.addEventListener("submit",async (e) => {
    e.preventDefault();

    const name = signup.name.value;
    const email = signup.email.value;
    const password = signup.password.value;

    const newUser ={
        name,
        email,
        password,
        isAdmin:false
    }

    const userCreated = await createUser(auth,newUser);
    await addUserToDataBase(db,userCreated.user.uid,newUser);
    console.log(userCreated);

    /*window.location.href="index.html"*/

})
} 

if (login != null){
login.addEventListener("submit", e => {
    e.preventDefault();

    const email = login.email.value;
    const password = login.password.value;

    signIn(auth,email,password);
    if (user.isAdmin){
        location.href ="#";
        
    }else{
        location.href ="#";
    }


})
}

export {
    app, auth, db
}






