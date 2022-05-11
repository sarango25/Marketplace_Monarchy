import {app, auth, db, storage} from "./properties"
import { addProduct, uploadImages } from "./addProduct";

const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener ("submit",async (e) => {
e.preventDefault();
console.log("Add a new product");



const name = createProductForm.name.value;
const description = createProductForm.description.value;
const price = createProductForm.price.value;
const category = createProductForm.category.value;
const img = createProductForm.img.files;

let gallery = [];

if (img.lenght) {
    const uploadImages = await uploadImages(storage, [...img]);
    
    gallery = await Promise.all(uploadImages)
}

const newProduct = {
    name,
    description,
    price,
    category,
    img: gallery,
};

await addProduct(db,newProduct);


});