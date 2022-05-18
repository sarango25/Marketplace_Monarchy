import {db} from "./properties"
import { doc, getDoc } from "firebase/firestore";

const productInfoSection = document.getElementById("productInfo");

function getParam(param){
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
}

async function getProduct(){
    const productId = getParam("id");
    const docRef = doc(db, "product", productId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    const product = {
        ...data,
        id: productId,
    }

    renderProduct(product);
    
}

function renderProduct(product){
    productInfoSection.innerHTML = `
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">${product.description}</p>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    ${productButtonCart}`;
}

getProduct();
