import {db,storage} from "./properties"
import{getProducts} from "../functions/products";

const productSection = document.getElementById("products");
const categoryFilter = document.getElementById("category");

let products = [];

async function loadProducts(){
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";
    firebaseProducts.forEach (product => {
        renderProducts(product);
    });

    products.firebaseProducts;
    
}

function renderProducts(item){
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href",`./product.html?id=abcdef`)

    const coverImage = item.images ? item.images[0]: "./img/placeholder.jpg";

    product.innerHTML = ` <a class="product" href="#">
    <img src="${coverImage}" alt="" class="product__image">
    <div class="product__info">
        <p class="product__category">${item.category}</p>
        <h2 class="product__name">${item.name}</h2>
        <h3 class="product__price">${item.price}</h3>
        <button class="product__btn">Añadir al carrito</button>
    </div>
</a>
`;

productSection.appendChild(product);
}

function filterBy(){
    const newCategory = categoryFilter.value;
    const filteredProducts = products.filter((product)=>product.category === newCategory);

    productSection.innerHTML ="";

    filteredProducts.forEach (product => {
        renderProducts(product);
    });
    
}

categoryFilter.addEventListener("change",e => {
    filterBy();
})

loadProducts();