// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

const signup = document.getElementById("signup__form");
const login = document.getElementById("login__form");

if(signup != null){
signup.addEventListener("submit", e => {
    e.preventDefault();

    const name = signup.name.value;
    const email = signup.email.value;
    const password = signup.password.value;

    createUser(name,email,password);

    window.location.href="index.html"


})
} 

if (login != null){
login.addEventListener("submit", e => {
    e.preventDefault();

    const email = login.email.value;
    const password = login.password.value;

    signIn(email,password);


})
}

async function createUser (name,email,password){
    try{
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        alert('Bienvendio, usuario ${uid}');
    }catch(e){
        if (e.code === "auth/weak-password"){
            alert("At least 6 characters");
        }
        if (e.code ==="auth/email-already-in-use"){
            alert("Try an other email");
        }
    }
    
}

async function signIn (email,password){
    try{
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        alert('Bienvendio, usuario ${user,email}');
    }catch (e) {
            alert("Email or password incorrect");
        
    }
}


