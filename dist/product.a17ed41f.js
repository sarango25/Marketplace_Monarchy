function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
}
function getProduct() {}
getParam("id");

//# sourceMappingURL=product.a17ed41f.js.map
