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


//product

let productJson = localStorage.getItem("product");
let product = JSON.parse(productJson) || [];

//modal

const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const loginForm = document.querySelector(".login-form");


function modalOpen() {
  modal.classList.add("modal-show");
  modalBody.classList.add("modal-body-show");
}

modalOpenBtn.addEventListener("click", modalOpen);

// modalCloseBtn.addEventListener("click", () => {
//   modal.classList.remove("modal-show");
//   modalBody.classList.remove("modal-body-show");
// });

function modalClose() {
  modal.classList.remove("modal-show");
  modalBody.classList.remove("modal-body-show");
}

window.addEventListener("click", (e) => {
  if (e.target === modal || modalCloseBtn.contains(e.target)) {
    modalClose();
  }
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const elements = this.querySelectorAll("[required]");
  for (let el of elements) {
    console.log(el.parentElement);
    if (el.validity.valid) {
      el.parentElement.querySelector(".valid-feedback").style.display = "block";
      el.parentElement.querySelector(".invalid-feedback").style.display =
        "none";
    } else {
      el.parentElement.querySelector(".invalid-feedback").style.display =
        "block";
      el.parentElement.querySelector(".valid-feedback").style.display = "none";
    }
  }
  if (this.checkValidity()) {
    modalClose();
  }
});
