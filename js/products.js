const productsRow = document.querySelector(".product-row");
const productsCount = document.querySelector(".products-count");
const searchInput = document.querySelector(".search-input");
const pagination = document.querySelector(".pagination");

let search = "";

let activePage = 1;

function getProductCard({ images, name, description, id, price }) {
  let cartProduct = cart.find((el) => el.id === id);
  let favoriteProduct = cart.find((el) => el.id === id);

  return `
  <div class="">
  <div class="cards">
     <img src="${images[0]}" class="card-img-top" alt="...">
     <button onClick="addToFavorite(${id})" class=" card-like  btn ${favoriteProduct}"">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25641 12.7046 4.25647 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z" fill="#414141"/>
</svg>
         </button>
     <div class="card-body">
     <h4 class="card-price">${price} ₽</h4>
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <img style="padding-bottom: 8px; border-radius: 4px;" src="../image/home/star33.svg" alt="">
         
         <button onClick="addToCart(${id})" class="btn ${cartProduct ? "btn-danger" : "btn-primary"}"">
         В корзину
         </button>
         
     </div>
   </div>
</div>
`;
}

function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / 8);

  
  if (pages > 1) {
    pagination.innerHTML = `
   <li class="page-item ${activePage === 1 ? "disabled" : ""}">
      <button onclick="getPage('-')" class="page-link">
         <
      </button>
   </li>
`;

    for (i = 1; i <= pages; i++) {
      pagination.innerHTML += `
      <li class="page-item ${i === activePage ? "active" : ""}">
         <button onclick="getPage (${i})" class="page-link">${i}</button>
      </li>
   `;
    }

    pagination.innerHTML += `
   <li class="page-item ${activePage === pages ? "disabled" : ""}">
      <button onclick="getPage('-')" class="page-link">
         >
      </button>
   </li>
`;
  } else {
    pagination.innerHTML = " ";
  }

  let start = (activePage - 1) * 8;
  let end = activePage * 8;

  let pageResults = results.slice(start, end);

  productsRow.innerHTML = " ";

  pageResults.map((el) => {
    productsRow.innerHTML += getProductCard(el);
  });

  productsCount.textContent = results.length;
}

getProducts();

searchInput.addEventListener("keyup", function () {
  activePage = 1;
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  if (page == "+") {
    activePage++;
  } else if (page == "-") {
    activePage--;
  } else {
    activePage = page;
  }
  activePage = page;
  getProducts();
}

//addToCard

function addToCart(id) {
  let product = products.find((el) => el.id === id);

  let cartProduct = cart.find((el) => el.id === id);

  if (cartProduct) {
    cart = cart.map((el) => {
      if (el.id === id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
  getCartCount();
}

//addToFavorites

function addToFavorite(id) {
  let productes = products.find((el) => el.id === id);

  let favoriteProduct = favorite.find((el) => el.id === id);

  if (favoriteProduct) {
    favorite = favorite.map((el) => {
      if (el.id === id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    productes.quantity = 1;
    favorite.push(productes);
  }

  localStorage.setItem("favorite", JSON.stringify(favorite));
  getProducts();
  getFavoriteCount();
}


// categoryMenu

const categoryMenu = document.querySelector(".burger");
const categorydown = document.querySelector(".menu");

categoryMenu.addEventListener("click", () => {
  categorydown.classList.toggle("d-none");
});

function getCategory(categories) {
  const categoryCard = document.createElement("li");
  categoryCard.className = "menu-link";

  const category = document.createElement("a")
  category.textContent = categories.name;
  category.href = `../category.html`;

  categoryCard.append(category);
  return categoryCard;
}

categories.map((el, i) => {
  let category = getCategory(el);
  categorydown.append(category);
});