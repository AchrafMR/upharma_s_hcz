

window.addEventListener("DOMContentLoaded", () => {
  const PRODUCTS = window.PRODUCTS || [];
  let cart = [];

  const cartContainer = document.getElementById("cart-items-container");
  const subtotalElement = document.getElementById("cart-subtotal");

  document.querySelectorAll(".top-right-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (!product) return;

      const existing = cart.find((p) => p.id === productId);
      const stock = product.quantity;

      if (existing) {
        if (existing.quantity < stock) {
          existing.quantity++;
        }
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      renderCart();
    });
  });

  function renderCart() {
    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item) => {
      const stock = PRODUCTS.find((p) => p.id === item.id)?.quantity ?? 0;
      subtotal += item.price * item.quantity;

      cartContainer.innerHTML += `
        <div class="d-flex justify-content-between align-items-center cart-item" data-id="${item.id}">
          <span class="text-uppercase fw-semibold cart-item-name">${item.name}</span>
          <span class="text-danger fw-bold cart-item-price">${item.price.toFixed(2)} DH</span>
          <div class="d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control">
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
                    onclick="decreaseQty(${item.id})">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input"
                   value="${item.quantity}" readonly />
            ${item.quantity < stock
              ? `<button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
                          onclick="increaseQty(${item.id})">
                  <i class="fa-solid fa-plus"></i>
                 </button>`
              : ""}
          </div>
          <button class="btn btn-sm btn-remove text-danger p-1 bg-transparent border-0"
                  onclick="removeItem(${item.id})" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    });

    subtotalElement.innerText = `${subtotal.toFixed(2)} DH`;
  }

  window.increaseQty = function (id) {
    const item = cart.find((p) => p.id === id);
    const stock = PRODUCTS.find((p) => p.id === id)?.quantity ?? 0;
    if (item && item.quantity < stock) {
      item.quantity++;
      renderCart();
    }
  };

  window.decreaseQty = function (id) {
    const item = cart.find((p) => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
      renderCart();
    }
  };

  window.removeItem = function (id) {
    cart = cart.filter((item) => item.id !== id);
    renderCart();
  };
});

