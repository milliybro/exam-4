const favoriteRow = document.querySelector(".favotive-row");

function getFavoriteCard({ images, name, description, id, quantity }) {
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
            
            <button onClick="addToCart(${id})" class="btn-favorite">
            
            В корзину
            </button>
            <button onclick="decreaseQuantity(${id})" type="button" class="btn btn-delete">Delete</button>


          </div>
        </div>
      </div>
    </div>
  `;
}

function getFavoriteProducts() {
  favoriteRow.innerHTML = " ";
  favorite.map((el) => {
    favoriteRow.innerHTML += getFavoriteCard(el);
  });
}

getFavoriteProducts();

function decreaseQuantity(id) {
  let productes = favorite.find((el) => el.id === id);
  if (productes.quantity === 1) {
    let confirmDelete = confirm("Do you want to remove this product ?");
    console.log(confirmDelete);
    if (confirmDelete) {
      favorite = favorite.filter((el) => el.id !== id);
    }
  } else {
    favorite = favorite.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }
      return el;
    });
  }
  localStorage.setItem("favorite", JSON.stringify(favorite));
  getFavoriteProducts();
}

function increaseQuantity(id) {
  favorite = favorite.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem("favorite", JSON.stringify(favorite));
  getFavoriteProducts();
}
