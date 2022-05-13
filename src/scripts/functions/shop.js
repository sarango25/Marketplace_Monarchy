import {db} from "./properties"
import{getProducts} from "../functions/products";

const productSection = document.getElementById("products");

async function loadProducts(){
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";
    firebaseProducts.forEach (product => {
        renderProducts(product);
    });
    console.log(firebaseProducts);
}


function renderProducts(item){
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href",`./product.html?id=abcdef`)

    const coverImage = item.images ? item.images[0]: "./img/placeholder.jpg"

    product.innerHTML = ` <a class="product" href="#">
    <img src="${coverImage}" alt="" class="product__image">
    <div class="product__info">
        <h2 class="product__name">${item.name}</h2>
        <h3 class="product__price">${item.price}</h3>
        <button class="product__btn">Añadir al carrito</button>
    </div>
</a>
`;

productSection.appendChild(product);
}
loadProducts();