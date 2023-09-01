const actionItem = document.querySelector(".action__item");

function getProductCard(el) {
  const productCard = document.createElement("div");

  productCard.className = "action__item__card";

  productCard.style = `
     position: relative;
     background-color: #fff
     `;

  const productCardImg = document.createElement("img");
  productCardImg.src = el.images[2];
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

  a.append(productCardImg);

  const productCardTitle = document.createElement("h3");
  const productCardTitleText = document.createTextNode(el.name);
  productCardTitle.style = `font-size: 26px margin-top:8px color:#000; text-decoration: none`;
  productCardTitle.appendChild(productCardTitleText);
  productCardTitle.className = "product-card-title";

  const nameLink = document.createElement("a");
  nameLink.href = "../product.html";
  nameLink.append(productCardTitle);

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

  cardMain.append(nameLink, productCardContent, productCardRating, cartLink);
  productCard.append(a, discountCard, cardHead, cardBody, cardMain);

  return productCard;
}

const discountProducts = products.filter((el) => {
  if (el.category == "Fruit") {
    return el;
  }
});

discountProducts.map((el, i) => {
  let card = getProductCard(el);
  actionItem.append(card);
});
