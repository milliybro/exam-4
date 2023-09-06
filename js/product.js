const productRow = document.querySelector("#product")

function getProduct ({images, name, description, id, discount, category, price}){
   return `
   <div class="hero__head container">
            <a href="index.html">Главная</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#414141" />
            </svg>
            <a href="categories.html" class="href">Каталог</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#414141" />
            </svg>
            <a href="../products.html" class="products">${category}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                  fill="#414141" />
            </svg>
            <a href="product.html" class="products">${name}</a>
         </div>
   <div class="container product">
         <h1>${name}</h1>
         <div class="product__infor">
            <h6>id. ${id}</h6>
            <div class="rating">
               <img src="image/product/rating2.png" alt="">
               <a href="">3 отзыва</a>
            </div>
            <div class="share">
               <img src="image/product/share.png" alt="">
               <h5>Поделиться</h5>
            </div>
            <div class="like">
               <img src="image/product/like.png" alt="">
               <h5>В избраное</h5>
            </div>
         </div>
         <div class="product__img">
            <div class="product__img__left">
               <div class="left__img">
                  <img src="${images[0]}" alt="">
                  <img src="${images[1]}" alt="">
                  <img src="${images[2]}" alt="">
                  <img src="${images[3]}" alt="">
               </div>
               <img class="header-img" src="${images[0]}" alt="">
            </div>
            <div class="product__img__right">
               <div class="product__price">
                  <div class="product__price__left">
                     <h4>${price} ₽</h4>
                     <p>Обычная цена</p>
                  </div>
                  <div class="product__price__right">
                     <h3>${price-(price/100*discount)} ₽</h3>
                     <div class="info">
                        <p>С картой Северяночки</p>
                        <img src="image/product/info.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="product__cart">
                  <button>
                     <img src="image/product/cart.png" alt="">
                     <h4>В корзину</h4>
                  </button>
               </div>
               <div class="product__extra">
                  <div class="brend">
                     <h5>Бренд</h5>
                     <h6>ПРОСТОКВАШИНО</h6>
                  </div>
                  <div class="made">
                     <h5>Страна производителя</h5>
                     <h6>Uzbekistan</h6>
                  </div>
                  <div class="weight">
                     <h5>Упаковка</h5>
                     <h6>${price}0 g</h6>
                  </div>
               </div>
            </div>
         </div>
      </div>
   `
}

let productAll =localStorage.getItem(PRODUCT)

function getproducts(){
   productRow.innerHTML = '';
   products.forEach((el) => {
      console.log(productAll);
     if(el.id==productAll) productRow.innerHTML=getProduct(el);
      // productRow.innerHTML += getProduct(el);
    });
}

getproducts();

const showImg = document.querySelector(".header-img");
const indicators = document.querySelector(".left__img");

indicators.addEventListener("click", (e) => {
  e.target.src && (showImg.src = e.target.src);
});

//action

const actionItem = document.querySelector(".action__item");
const newsItem = document.querySelector(".news__item");

function getProductCard(el) {
   const productCard = document.createElement("div");
 
   productCard.className = "action__item__card";
 
   productCard.style = `
     position: relative;
     background-color: #fff
     `;
 
   const productCardImg = document.createElement("img");
   productCardImg.src = el.images[0];
   productCardImg.alt = el.name;
   productCardImg.className = "action1";
   const a = document.createElement("a");
   a.href = "../product.html";
 
   const discountCard = document.createElement("h4");
   discountCard.textContent = `-${el.discount}%`;
   discountCard.style = `
    position: absolute;
    left: 8px;
    top: 118px;
    border-radius: 4px;
    background: var(--main-primary, #F63);
    color: var(--main-on-primary, #FFF);
    text-align: center;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    padding: 4px 8px
    `;
   const cardMain = document.createElement("div");
   cardMain.className = "card__main";
   cardMain.style.padding = "8px 8px";
 
 a.append(productCardImg)
 
   const productCardTitle = document.createElement("h3");
   const productCardTitleText = document.createTextNode(el.name);
   productCardTitle.style = `font-size: 26px margin-top:8px`;
   productCardTitle.appendChild(productCardTitleText);
   productCardTitle.className = "product-card-title";
 
   const nameLink = document.createElement("a");
   nameLink.href = "../product.html";
   nameLink.append(productCardTitle)
 
   const cardHead = document.createElement("div");
   cardHead.className = "card__head";
 
   const productCardDiscount = document.createElement("h4");
   productCardDiscount.innerHTML = `${
     el.price - (el.price * el.discount) / 100
   } $`;
 
   const productCardPrice = document.createElement("h4");
   productCardPrice.innerHTML = `${el.price} $`;
   productCardPrice.className = "product-card-price";
 
   cardHead.append(productCardDiscount, productCardPrice);
 
   const cardBody = document.createElement("div");
   cardBody.className = "card__body";
 
   const productCardPriceDiscount = document.createElement("p");
   productCardPriceDiscount.innerHTML = `С картой`;
 
   const productCardPriceOrginal = document.createElement("p");
   productCardPriceOrginal.innerHTML = `Обычная`;
 
   cardBody.append(productCardPriceDiscount, productCardPriceOrginal);
 
   const productCardContent = document.createElement("p");
   productCardContent.textContent = el.description;
   productCardContent.className = "productCardContent";
 
   const productCardRating = document.createElement("img");
   productCardRating.src = "../image/home/star33.svg";
   productCardRating.alt = el.name;
   productCardRating.className = "star-card";
 
   const productCardButton = document.createElement("button");
   productCardButton.textContent = "В корзину";
 
   const cartLink = document.createElement("a");
   cartLink.href = "../cart.html";
   cartLink.append(productCardButton);
 
 
   cardMain.append(
     nameLink,
     productCardContent,
     productCardRating,
     productCardButton
   );
   productCard.append(
     a,
     discountCard,
     cardHead,
     cardBody,
     cardMain
   );
 
   return productCard;
 }
 
 const discountProducts = products.filter((el) => el.discount).slice(-4);
 
 discountProducts.map((el, i) => {
   let card = getProductCard(el);
   actionItem.append(card);
 });

 const newsProducts = products.filter((el) =>!el.discount).slice(-4);
 
 newsProducts.map((el, i) => {
   let card = getProductCard(el);
   newsItem.append(card);
 });