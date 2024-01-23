const products =JSON.parse(localStorage.getItem("products"));

console.log(products);

function generateStars(rating){
    const fullStar = '<i class="bi bi-star-fill"></i>', 
        halfStar='<i class="bi bi-star-half"></i>', 
        emptyStar='<i class="bi bi-star"></i>';
    let dynamicHTML = "";
    const countOffFullStars = Math.floor(rating),//pilnu zvaigzduciu kiekis
        halfStarShouldExist = (rating - countOffFullStars) >= 0.5,// rezultatas true arba false reiksme
        // console.log(halfStarShouldExist)
        // inline if = halfStarShouldExist jeigu true, ? yra if reiksme tai ziurima i 4- reiksme, jei false tai else reiksme yra : ir ziurima i 5-
        emptyStarCount = halfStarShouldExist 
            ? 5 - countOffFullStars - 1
            : 5 - countOffFullStars;
    //eiliskumo ciklo ir ifo keisti negalima
    for(let i=0; i <countOffFullStars; i++ )dynamicHTML+=fullStar;
    if(halfStarShouldExist)dynamicHTML+=halfStar;
    for(let i=0; i<emptyStarCount; i++)dynamicHTML+=emptyStar;
    return dynamicHTML;
}

function showProducts(){
    let dynamicHTML = "";
    for(const product of products){
        dynamicHTML +=`<hr />
        <div class="product">
            <div class="product-image">
                <span class="discount">-${Math.round(product.discountPercentage)}%</span>
                <img
                    src="${product.thumbnail}"
                    alt="product image"
                    class="product-img"
                />
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <span class="stars">
                ${generateStars(product.rating)}
                </span>
                <p class="product-description">
                ${product.description}
                </p>
            </div>
            <div class="product-price">
                <div class="price">
                    $${(((100-product.discountPercentage)/100)*product.price).toFixed(2)} <sup class="older-price">$${product.price.toFixed(2)} </sup>
                </div>
                <button class="add-to-cart">Add to cart</button>
            </div>
        </div>`;
    }
    document.querySelector('.container').innerHTML = dynamicHTML;
}
showProducts();