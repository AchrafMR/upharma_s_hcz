import facke_img_product from "../../images/facke_img_product.png";

window.addEventListener("DOMContentLoaded", () => {
  const PRODUCTS = window.PRODUCTS || [];
  let cart = [];
  let selectedCategory = "all";
  let searchQuery = "";

  const cartContainer = document.getElementById("cart-items-container");
  const subtotalElement = document.getElementById("cart-subtotal");
  const productGrid = document.getElementById("product-list");
  const searchInput = document.getElementById("product-search");
  const categoryButtons = document.querySelectorAll(".category-nav-btn");

  // Handle Category Click
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedCategory = this.dataset.category;
      renderFilteredProducts();
    });
  });

  // Handle Search Input
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderFilteredProducts();
  });

  function renderFilteredProducts() {
    const filtered = PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    function getProductImage(product) {
      const basePath = "/images/products/";
      if (product.image && product.image.trim() !== "") {
        return `${basePath}${product.image}`;
      }
      return facke_img_product;
    }

    productGrid.innerHTML = "";
    filtered.forEach((product) => {
      productGrid.innerHTML += `
        <div class="col-6 p-1 col-sm-4 col-md-3 col-lg-2-4">
          <div class="card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between">
            <button class="btn btn-sm btn-primary position-absolute top-right-btn" data-id="${
              product.id
            }">
              <i class="fa-solid fa-cart-plus"></i>
            </button>

            <div class="position-absolute top-left-badge">
              <div class="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge">${
                product.quantity
              }</div>
            </div>

            <div class="d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper">
          <img
            src="${getProductImage(product)}"
            onerror="this.onerror=null;this.src='${facke_img_product}'"
            alt="${product.name}"
            class="img-fluid"
            style="max-height: 80px; object-fit: contain"
          />
            </div>

            <div class="text-center mt-2">
              <h6 class="text-uppercase mb-1 product-title">${product.name}</h6>
              <p class="text-danger fw-bold mb-0 product-price">${parseFloat(
                product.price
              ).toFixed(2)} DH</p>
            </div>
          </div>
        </div>
      `;
    });

    // Rebind add to cart events
    bindAddToCartButtons();
  }

  function bindAddToCartButtons() {
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
  }

  function renderCart() {
    cartContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item) => {
      const stock = PRODUCTS.find((p) => p.id === item.id)?.quantity ?? 0;
      subtotal += item.price * item.quantity;

      cartContainer.innerHTML += `
        <div class="d-flex justify-content-between align-items-center cart-item" data-id="${
          item.id
        }">
          <span class="text-uppercase fw-semibold cart-item-name">${
            item.name
          }</span>
          <span class="text-danger fw-bold cart-item-price">${item.price.toFixed(
            2
          )} DH</span>
          <div class="d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control">
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
                    onclick="decreaseQty(${item.id})">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input"
                   value="${item.quantity}" readonly />
            ${
              item.quantity < stock
                ? `<button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
                            onclick="increaseQty(${item.id})">
                    <i class="fa-solid fa-plus"></i>
                   </button>`
                : ""
            }
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
   renderFilteredProducts();

// Holds the current cart before sending to the server
let pendingDemande = [];

const commanderButton = document.querySelector('[data-target="#addCommande"]');
if (commanderButton) {
  commanderButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.")
      return;
    }

    pendingDemande = [...cart.map((item) => ({ ...item }))];
    // console.log(pendingDemande);
    $("#addCommande").modal("show");
  });
}
// Save Demande logic
document.getElementById("submit-demande").addEventListener("click", () => {
  if (!pendingDemande || pendingDemande.length === 0) {
    toastr.error("Aucune donnée de panier à envoyer.");
    return;
  }

  // Define required input/select fields 
  const requiredFields = [
    { id: "demandeur_id", label: "Demandeur" },
    { id: "recepteur_id", label: "Récepteur" },
    { id: "description", label: "description" },
    { id: "ipp", label: "IPP" },
    { id: "nom_patient", label: "Nom du patient" },
    { id: "dossier_patient", label: "Dossier du patient" }
  ];

  // Validate each field
  for (let field of requiredFields) {
    const el = document.getElementById(field.id);
    if (!el || !el.value.trim()) {
      toastr.error(`Veuillez remplir le champ : ${field.label}`);
      el.focus();
      return;
    }
  }


  const data = {
    demandeur_id: document.getElementById("demandeur_id").value,
    recepteur_id: document.getElementById("recepteur_id").value,
    urgent: document.getElementById("urgent").checked ? 1 : 0,
    description: document.getElementById("description").value,
    ipp: document.getElementById("ipp").value,
    nom_patient: document.getElementById("nom_patient").value,
    dossier_patient: document.getElementById("dossier_patient").value,
    lignes: pendingDemande,
  };

  fetch("/vente/save-demande", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Erreur serveur");
      return res.json();
    })
    .then((response) => {
      toastr.success("Demande enregistrée avec succès!");
      $("#addCommande").modal("hide");

      // Clear cart
      cart = [];
      renderCart();

      // Reset modal form fields
      document.getElementById("demandeur_id").value = "";
      document.getElementById("recepteur_id").value = "";
      document.getElementById("urgent").checked = false;
      document.getElementById("description").value = "";
      document.getElementById("ipp").value = "";
      document.getElementById("nom_patient").value = "";
      document.getElementById("dossier_patient").value = "";


    })
    .catch((err) => {
      console.error(err);
      toastr.error("Erreur lors de l'enregistrement de la demande.");
    });
});
});
