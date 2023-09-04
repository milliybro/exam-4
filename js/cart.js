const cartRow = document.querySelector(".cart-row");

function getCartCard({ images, name, description, id, quantity }) {
  return `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${images[0]}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <div class="btn-group">
              <button onclick="decreaseQuantity(${id})" type="button" class="btn btn-danger">-</button>
              <button type="button" class="btn btn-primary">${quantity}</button>
              <button onclick="increaseQuantity(${id})" type="button" class="btn btn-success">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  cart.map((el) => {
    cartRow.innerHTML += getCartCard(el);
  });
}

getCartProducts();

function decreaseQuantity(id) {
  let product = cart.find((el) => el.id === id);
  if (product.quantity === 1) {
    let confirmDelete = confirm("Do you want to remove this product ?");
    console.log(confirmDelete);
    if (confirmDelete) {
      cart = cart.filter((el) => el.id !== id);
    }
  } else {
    cart = cart.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }
      return el;
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function increaseQuantity(id) {
  cart = cart.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}
