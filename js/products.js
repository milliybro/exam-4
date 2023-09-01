const productsRow = document.querySelector(".product-row");
const productsCount = document.querySelector(".products-count");
const searchInput = document.querySelector(".search-input");
const pagination = document.querySelector(".pagination");

let search = "";

let activePage = 1;

function getProductCard(el) {
  return `
  <div class="">
  <div class="cards">
     <img src="${el.images[0]}" class="card-img-top" alt="...">
     <img src="../image/home/like.svg" class="card-like" alt="...">
     <div class="card-body">
     <h4 class="card-price">${el.price} ₽</h4>
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">${el.description}</p>
      <img style="padding-bottom: 8px; border-radius: 4px;" src="../image/home/star33.svg" alt="">
         <a href='../cart.html'><button class="btn btn-primary">В корзину</button></a>
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