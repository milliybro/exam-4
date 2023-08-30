
const categoryItem = document.querySelector(".category__item")

function category(el){
   const productCard = document.createElement("div")
   productCard.classList.add("product__card")
   const a = document.createElement("a")
   a.href = ("../category.html")

   const productImage= document.createElement("img")
   productImage.src = el.image
   productImage.alt = el.name
   productImage.classList.add("product__image")

   const productShadow = document.createElement("div")
   productShadow.classList.add("product__shadow")

   
   const productName = document.createElement("p")
   productName.textContent = el.name
   productName.classList.add("product__name")
   
   productShadow.append(productName)
   productCard.append(a)
   a.append(productImage, productShadow)

   return productCard
}

categories.map((el)=>{
   categoryItem.append(category(el))
})


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
 