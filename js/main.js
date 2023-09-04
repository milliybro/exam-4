const cartCount = document.querySelector(".cart-count");

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartCount() {
  cartCount.textContent = cart.length;
}

getCartCount();


const favoriteCount = document.querySelector(".favorite-count");

let favoriteJson = localStorage.getItem("favorite");

let favorite = JSON.parse(favoriteJson) || [];

function getFavoriteCount() {
  favoriteCount.textContent = favorite.length;
}

getFavoriteCount();
