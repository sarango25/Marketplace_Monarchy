import {app, auth, db, storage} from "./properties"
import {collection,getDocs} from "firebase/firestore";

async function getProducts(db) {
    const collectionRef = collection(db, "products");
        try {

            const { docs } = await getDocs(collectionRef);
            const firebaseProducts = docs.map((doc) =>{
                console.log(doc);
                return{
                    ...doc.data(),
                    id: doc.id,
                };
            });
        
            return firebaseProducts;
        } catch(e){
            console.log(e);
        }
}

export{
    getProducts,
}