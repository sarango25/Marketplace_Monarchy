import {app, auth, db} from "./properties"
import { addProduct } from "./addProduct";


const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener ("submit", e => {
e.preventDefault();
console.log("Add a new product");



const name = createProductForm.name.value;
const description = createProductForm.description.value;
const price = createProductForm.price.value;
const category = createProductForm.category.value;
const img = createProductForm.img.files;

const newProduct = {
    name,
    description,
    price,
    category,
   // img
};

addProduct(db,newProduct);


});