var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire6113;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire6113=o);var c=o("9SbQW");o("9SbQW");var r=o("etBjH");const a=document.getElementById("products"),i=document.getElementById("category");let s=[];function d(e){const t=document.createElement("a");t.className="product",t.setAttribute("href","./product.html?id=abcdef");const n=e.images?e.images[0]:"./img/placeholder.jpg";t.innerHTML=` <a class="product" href="#">\n    <img src="${n}" alt="" class="product__image">\n    <div class="product__info">\n        <p class="product__category">${e.category}</p>\n        <h2 class="product__name">${e.name}</h2>\n        <h3 class="product__price">${e.price}</h3>\n        <button class="product__btn">Añadir al carrito</button>\n    </div>\n</a>\n`,a.appendChild(t)}i.addEventListener("change",(e=>{!function(){const e=i.value,t=s.filter((t=>t.category===e));a.innerHTML="",t.forEach((e=>{d(e)}))}()})),async function(){const e=await async function(e){const t=r.collection(e,"products");try{const{docs:e}=await r.getDocs(t);return e.map((e=>(console.log(e),{...e.data(),id:e.id})))}catch(e){console.log(e)}}(c.db);a.innerHTML="",e.forEach((e=>{d(e)})),s.firebaseProducts}();
//# sourceMappingURL=shop.bb6709d4.js.map
