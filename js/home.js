const actionItem = document.querySelector(".action__item");
const newsItem = document.querySelector(".news__item");
const shopItem = document.querySelector(".shop__item");

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

const newProducts = products.slice(-4);

newProducts.map((el, i) => {
  let newPro = getProductCard(el);
  newsItem.append(newPro);
});

const popularProducts = products
  .toSorted((a, b) => a.rating - b.rating)
  .slice(-4);

popularProducts.map((el) => {
  let popular = getProductCard(el);
  shopItem.append(popular);
});

// special app

const specialApp = [
  {
    id: 1,
    name: "Оформите карту «Северяночка»",
    description: "И получайте бонусы при покупке в магазинах и на сайте",
    image: "../image/home/app1.png",
    background: "/image/home/app2-bg.png",
  },
  {
    id: 2,
    name: "Покупайте акционные товары",
    description: "И получайте вдвое больше бонусов",
    image: "../image/home/app2.png",
    background: "#e5ffde",
  },
];

const appItem = document.querySelector(".app__item");

function getSpecialApp(app) {
  const specialCard = document.createElement("div");
  specialCard.className = "app__item__card";
  specialCard.style = `
    position: relative;
    background: ${app.background}

    `;

  const specialCardLeft = document.createElement("div");
  specialCardLeft.className = "app__item__card__left";

  const specialCardTitle = document.createElement("h3");
  specialCardTitle.innerHTML = app.name;
  specialCardTitle.className = "specialCard__title";

  const specialCardContent = document.createElement("p");
  specialCardContent.innerHTML = app.description;
  specialCardContent.className = "specialCard__content";

  specialCardLeft.append(specialCardTitle, specialCardContent);

  const specialAppImg = document.querySelector("img");
  specialAppImg.src = app.image;
  specialAppImg.alt = app.name;
  specialAppImg.className = "app1";
  specialAppImg.style = `
  width: 35%;

  `;

  specialCard.append(specialCardLeft, specialAppImg);

  return specialCard;
}

specialApp.map((el, i) => {
  let apps = getSpecialApp(el);
  appItem.append(apps);
});

// surface

const surface = [
  {
    id: 1,
    name: "Режим использования масок и перчаток на территории магазинов",
    description: `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,
    image: "../image/home/surface1.png",
    data: "05.03.2021",
  },
  {
    id: 2,
    name: "Весеннее настроение для каждой",
    description:
      "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
    image: "../image/home/surface2.png",
    data: "05.03.2021",
  },
  {
    id: 3,
    name: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description:
      "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
    image: "../image/home/surface3.png",
    data: "22.02.2020",
  },
];

const surfaceItem = document.querySelector(".surface__items");

function getSurface(surface) {
  const surfaceCard = document.createElement("div");
  surfaceCard.className = "surface__items__card";

  const surfaceCardImg = document.createElement("img");
  surfaceCardImg.src = surface.image;
  surfaceCardImg.alt = surface.name;
  surfaceCardImg.className = "surface1";

  const surfaceContent = document.createElement("div");
  surfaceContent.className = "surface__content";

  const surfaceCardTitle = document.createElement("h3");
  surfaceCardTitle.innerHTML = surface.name;
  surfaceCardTitle.className = "surfaceCard__title";

  const surfaceCardContent = document.createElement("p");
  surfaceCardContent.innerHTML = surface.description;
  surfaceCardContent.className = "surfaceCard__content";

  const surfaceCardDate = document.createElement("p");
  surfaceCardDate.innerHTML = surface.data;
  surfaceCardDate.className = "surfaceCard__date";

  const surfaceButton = document.createElement("button");
  surfaceButton.textContent = "Подробнее";

  const surfaceLink = document.createElement("a");
  surfaceLink.href = "../articles.html";
  surfaceLink.append(surfaceButton);

  surfaceContent.append(
    surfaceCardDate,
    surfaceCardTitle,
    surfaceCardContent,
    surfaceLink
  );
  surfaceCard.append(surfaceCardImg, surfaceContent);
  return surfaceCard;
}

surface.map((el, i) => {
  let surfaces = getSurface(el);
  surfaceItem.append(surfaces);
});

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