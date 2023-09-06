
let categoriesRow = document.querySelector(".category__item");

function getCategoryCard({ name, image }) {
  return `
    <div class="">
      <div class="card">
        <img height="200" src=${image} class="object-fit-cover card-img-top" alt=${name} />
        <div class="card-body">
          <a href="../products.html" class="btn btn-primary" onclick="getCategore('${name}')">${name}</a>
        </div>
      </div>
    </div>
  `;
}

categories.forEach((el) => {
  categoriesRow.innerHTML += getCategoryCard(el);
});


function getCategore(name) {
  localStorage.setItem(CATEGORY, name);
}

//categoryMenu



const categoryMenu = document.querySelector(".burger");
const categorydown = document.querySelector(".menu");

categoryMenu.addEventListener("click", () => {
  categorydown.classList.toggle("d-none");
});

function getCategory(categories) {
  const categoryCard = document.createElement("li");
  categoryCard.className = "menu-link";

  const newCategory = document.createElement("a")
  newCategory.textContent = categories.name;
  newCategory.href = `../category.html`;

  categoryCard.append(newCategory);
  return categoryCard;
}

categories.map((el, i) => {
  let newCategory = getCategory(el);
  categorydown.append(newCategory);
});
 

