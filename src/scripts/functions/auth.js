import { doc, setDoc } from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

async function createUser (auth,{email,password}){
    try{
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        return newUser;
    }catch(e){
        if (e.code === "auth/weak-password"){
            alert("At least 6 characters");
        }
        if (e.code ==="auth/email-already-in-use"){
            alert("Try an other email");
        }
    }
    
}

async function signIn (auth,email,password){
    try{
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        alert('Bienvendio, usuario ${user,email}');
    }catch (e) {
            alert("Email or password incorrect");
        
    }
}

async function addUserToDataBase(db,userId,userInfo){
    try{
        await setDoc(doc(db, "users", userId), userInfo);
        } catch (e){
            console.log(e);
        }

    }


export {
    createUser,
    signIn,
    addUserToDataBase
}

