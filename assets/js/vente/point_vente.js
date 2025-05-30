import facke_img_product from "../../images/facke_img_product.png";

window.addEventListener("DOMContentLoaded", () => {
  const PRODUCTS = window.PRODUCTS || [];
  let cart = [];
  let selectedCategory = "all";
  let searchQuery = "";
  let pendingDemande = [];

  const cartContainer = document.getElementById("cart-items-container");
  const subtotalElement = document.getElementById("cart-subtotal");
  const productGrid = document.getElementById("product-list");
  const searchInput = document.getElementById("product-search");
  const categoryButtons = document.querySelectorAll(".category-nav-btn");

  // Utilities
  const getProductImage = (product) => {
    const basePath = "/images/products/";
    return product.image?.trim() ? `${basePath}${product.image}` : facke_img_product;
  };

  const addProductToCart = (productId) => {
    const id = Number(productId);
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;

    const existing = cart.find((p) => p.id === id);
    const stock = product.quantity;

    if (existing) {
      if (existing.quantity < stock) existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    renderCart();
  };

  const renderFilteredProducts = () => {
    const filtered = PRODUCTS.filter((product) => {
      const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    productGrid.innerHTML = filtered.map(product => `
      <div class="col-6 p-1 col-sm-4 col-md-3 col-lg-2-4">
        <div class="card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between">
          <button class="btn btn-sm btn-primary position-absolute top-right-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i>
          </button>

          <div class="position-absolute top-left-badge">
            <div class="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge">${product.quantity}</div>
          </div>

          <div class="d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper">
            <button class="img-clickable border-0 bg-transparent p-0" data-id="${product.id}" style="cursor: pointer">
              <img
                src="${getProductImage(product)}"
                onerror="this.onerror=null;this.src='${facke_img_product}'"
                alt="${product.name}"
                class="img-fluid"
                style="max-height: 80px; object-fit: contain"
              />
            </button>
          </div>

          <div class="text-center mt-2">
            
            <h6 class="text-uppercase mb-1 product-title">
              ${product.name.length > 18 ? product.name.substring(0, 18) + '...' : product.name}
            </h6>
            <p class="text-danger fw-bold mb-0 product-price">${Number(product.price).toFixed(2)} DH</p>
          </div>
        </div>
      </div>
    `).join("");
  };

  const renderCart = () => {
  let subtotal = 0;

  const cartHTML = cart.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    const stock = product?.quantity ?? 0;
    subtotal += item.price * item.quantity;

    return `
      <div class="d-flex align-items-center border-bottom py-1 cart-item" data-id="${item.id}" style="width: 100%; font-size: 0.85rem">
        
        <!-- Product Name -->
        <div style="width: 50%" class="text-uppercase fw-semibold text-truncate">
          ${item.name}
        </div>

        <!-- Price -->
        <div style="width: 20%; margin-left: 15px;" class="text-danger fw-bold text-end">
          ${item.price.toFixed(2)} DH
        </div>

        <!-- Quantity Controls -->
        <div style="width: 20%" class="d-flex justify-content-end">
          <div class="d-flex align-items-center bg-light rounded-pill px-2 py-1 qty-control" style="font-size: 0.8rem">
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease" style="width: 22px">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input" value="${item.quantity}" readonly style="width: 28px" />
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase" style="width: 22px">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <!-- Delete Icon -->
        <div class="text-end" style="width: 10%">
          <button class="btn btn-sm btn-remove text-danger p-1 bg-transparent border-0" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  cartContainer.innerHTML = cartHTML;
  subtotalElement.innerText = `${subtotal.toFixed(2)} DH`;
};

  // Validate form fields
  const validateFormFields = (fields) => {
    for (let field of fields) {
      const el = document.getElementById(field.id);
      if (!el || !el.value.trim()) {
        toastr.error(`Veuillez remplir le champ : ${field.label}`);
        el.focus();
        return false;
      }
    }
    return true;
  };

  // Events
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      selectedCategory = this.dataset.category;
      renderFilteredProducts();
    });
  });

  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderFilteredProducts();
  });

  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-id]");
    if (target?.classList.contains("top-right-btn") || target?.classList.contains("img-clickable")) {
      addProductToCart(target.dataset.id);
    }

    const cartItem = e.target.closest(".cart-item");
    if (!cartItem) return;

    const id = Number(cartItem.dataset.id);
    if (e.target.closest(".btn-increase")) {
      const item = cart.find((p) => p.id === id);
      if (item) item.quantity++;
      renderCart();
    }

    if (e.target.closest(".btn-decrease")) {
      const item = cart.find((p) => p.id === id);
      if (item && item.quantity > 1) item.quantity--;
      renderCart();
    }

    if (e.target.closest(".btn-remove")) {
      cart = cart.filter((p) => p.id !== id);
      renderCart();
    }
  });

  renderFilteredProducts();

  // Handle Submit
  const commanderButton = document.querySelector('[data-target="#addCommande"]');
  commanderButton?.addEventListener("click", (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }

    pendingDemande = [...cart.map((item) => ({ ...item }))];
    $("#addCommande").modal("show");
  });

  document.getElementById("submit-demande").addEventListener("click", () => {
    if (!pendingDemande || pendingDemande.length === 0) {
      toastr.error("Aucune donnée de panier à envoyer.");
      return;
    }

    const requiredFields = [
      { id: "demandeur_id", label: "Magasin Demandeur" },
      { id: "recepteur_id", label: "Magasin de Traitement" },
      { id: "ipp", label: "IPP" },
      { id: "nom_patient", label: "Nom du patient" },
      { id: "dossier_patient", label: "Dossier du patient" },
      { id: "description", label: "description" }
      
    ];

    if (!validateFormFields(requiredFields)) return;

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
      .then(() => {
        toastr.success("Demande enregistrée avec succès!");
        $("#addCommande").modal("hide");

        cart = [];
        renderCart();

        // Clear form
        ["demandeur_id", "recepteur_id", "description", "ipp", "nom_patient", "dossier_patient"].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
        document.getElementById("urgent").checked = false;
      })
      .catch((err) => {
        console.error(err);
        toastr.error("Erreur lors de l'enregistrement de la demande.");
      });
  });
});



// import facke_img_product from "../../images/facke_img_product.png";

// window.addEventListener("DOMContentLoaded", () => {
//   const PRODUCTS = window.PRODUCTS || [];
//   let cart = [];
//   let selectedCategory = "all";
//   let searchQuery = "";

//   const cartContainer = document.getElementById("cart-items-container");
//   const subtotalElement = document.getElementById("cart-subtotal");
//   const productGrid = document.getElementById("product-list");
//   const searchInput = document.getElementById("product-search");
//   const categoryButtons = document.querySelectorAll(".category-nav-btn");

//   function addProductToCart(productId) {
//     const product = PRODUCTS.find((p) => p.id === parseInt(productId));
//     if (!product) return;

//     const existing = cart.find((p) => p.id === productId);
//     const stock = product.quantity;

//     if (existing) {
//       if (existing.quantity < stock) {
//         existing.quantity++;
//       }
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     renderCart();
//   }
//   // Handle Category Click
//   categoryButtons.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       categoryButtons.forEach((b) => b.classList.remove("active"));
//       this.classList.add("active");
//       selectedCategory = this.dataset.category;
//       renderFilteredProducts();
//     });
//   });

//   // Handle Search Input
//   searchInput.addEventListener("input", () => {
//     searchQuery = searchInput.value;
//     renderFilteredProducts();
//   });

//   function renderFilteredProducts() {
//     const filtered = PRODUCTS.filter((product) => {
//       const matchCategory =
//         selectedCategory === "all" || product.category === selectedCategory;
//       const matchSearch = product.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       return matchCategory && matchSearch;
//     });

//     function getProductImage(product) {
//       const basePath = "/images/products/";
//       if (product.image && product.image.trim() !== "") {
//         return `${basePath}${product.image}`;
//       }
//       return facke_img_product;
//     }

//     productGrid.innerHTML = "";
//     filtered.forEach((product) => {
//       productGrid.innerHTML += `
//         <div class="col-6 p-1 col-sm-4 col-md-3 col-lg-2-4">
//           <div class="card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between">
//             <button class="btn btn-sm btn-primary position-absolute top-right-btn" data-id="${
//               product.id
//             }">
//               <i class="fa-solid fa-cart-plus"></i>
//             </button>

//             <div class="position-absolute top-left-badge">
//               <div class="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge">${
//                 product.quantity
//               }</div>
//             </div>

//             <div class="d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper">
//               <button
//                 class="img-clickable border-0 bg-transparent p-0"
//                 data-id="${product.id}"
//                 style="cursor: pointer"
//               >
//                 <img
//                   src="${getProductImage(product)}"
//                   onerror="this.onerror=null;this.src='${facke_img_product}'"
//                   alt="${product.name}"
//                   class="img-fluid"
//                   style="max-height: 80px; object-fit: contain"
//                 />
//               </button>
//             </div>

//             <div class="text-center mt-2">
//               <h6 class="text-uppercase mb-1 product-title">${product.name}</h6>
//               <p class="text-danger fw-bold mb-0 product-price">${parseFloat(
//                 product.price
//               ).toFixed(2)} DH</p>
//             </div>
//           </div>
//         </div>
//       `;
//     });

//     // Rebind add to cart events
//     bindAddToCartButtons();
//   }

//   function bindAddToCartButtons() {
//     document.querySelectorAll(".top-right-btn").forEach((button) => {
//       button.addEventListener("click", () => {
//         addProductToCart(button.dataset.id);
//       });
//     });
//   }
//   document.addEventListener("click", function (e) {
//     const imgButton = e.target.closest(".img-clickable");
//     if (imgButton) {
//       const id = imgButton.dataset.id;
//       addProductToCart(id); 
//     }
//   });

//   function renderCart() {
//     cartContainer.innerHTML = "";
//     let subtotal = 0;

//     cart.forEach((item) => {
//       const stock = PRODUCTS.find((p) => p.id === item.id)?.quantity ?? 0;
//       subtotal += item.price * item.quantity;

//       cartContainer.innerHTML += `
//         <div class="d-flex justify-content-between align-items-center cart-item" data-id="${
//           item.id
//         }">
//           <span class="text-uppercase fw-semibold cart-item-name">${
//             item.name
//           }</span>
//           <span class="text-danger fw-bold cart-item-price">${item.price.toFixed(
//             2
//           )} DH</span>
//           <div class="d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control">
//             <button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
//                     onclick="decreaseQty(${item.id})">
//               <i class="fa-solid fa-minus"></i>
//             </button>
//             <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input"
//                    value="${item.quantity}" readonly />
//             <button class="btn btn-sm p-0 border-0 bg-transparent text-dark" style="width: 22px"
//                     onclick="increaseQty(${item.id})">
//                     <i class="fa-solid fa-plus"></i>
//             </button>
//           </div>
//           <button class="btn btn-sm btn-remove text-danger p-1 bg-transparent border-0"
//                   onclick="removeItem(${item.id})" title="Supprimer">
//             <i class="fa-solid fa-trash"></i>
//           </button>
//         </div>
//       `;
//     });

//     subtotalElement.innerText = `${subtotal.toFixed(2)} DH`;
//   }

//   // window.increaseQty = function (id) {
//   //   const item = cart.find((p) => p.id === id);
//   //   const stock = PRODUCTS.find((p) => p.id === id)?.quantity ?? 0;
//   //   if (item && item.quantity < stock) {
//   //     item.quantity++;
//   //     renderCart();
//   //   }
//   // };

//   window.increaseQty = function (id) {
//     const item = cart.find((p) => p.id === id);
//     if (item) {
//       item.quantity++;
//       renderCart();
//     }
//   };
//   window.decreaseQty = function (id) {
//     const item = cart.find((p) => p.id === id);
//     if (item && item.quantity > 1) {
//       item.quantity--;
//       renderCart();
//     }
//   };

//   window.removeItem = function (id) {
//     cart = cart.filter((item) => item.id !== id);
//     renderCart();
//   };
//    renderFilteredProducts();

// // Holds the current cart before sending to the server
// let pendingDemande = [];

// const commanderButton = document.querySelector('[data-target="#addCommande"]');
// if (commanderButton) {
//   commanderButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (cart.length === 0) {
//       toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.")
//       return;
//     }

//     pendingDemande = [...cart.map((item) => ({ ...item }))];
//     // console.log(pendingDemande);
//     $("#addCommande").modal("show");
//   });
// }
// // Save Demande logic
// document.getElementById("submit-demande").addEventListener("click", () => {
//   if (!pendingDemande || pendingDemande.length === 0) {
//     toastr.error("Aucune donnée de panier à envoyer.");
//     return;
//   }

//   // Define required input/select fields 
//   const requiredFields = [
//     { id: "demandeur_id", label: "Demandeur" },
//     { id: "recepteur_id", label: "Récepteur" },
//     { id: "description", label: "description" },
//     { id: "ipp", label: "IPP" },
//     { id: "nom_patient", label: "Nom du patient" },
//     { id: "dossier_patient", label: "Dossier du patient" }
//   ];

//   // Validate each field
//   for (let field of requiredFields) {
//     const el = document.getElementById(field.id);
//     if (!el || !el.value.trim()) {
//       toastr.error(`Veuillez remplir le champ : ${field.label}`);
//       el.focus();
//       return;
//     }
//   }


//   const data = {
//     demandeur_id: document.getElementById("demandeur_id").value,
//     recepteur_id: document.getElementById("recepteur_id").value,
//     urgent: document.getElementById("urgent").checked ? 1 : 0,
//     description: document.getElementById("description").value,
//     ipp: document.getElementById("ipp").value,
//     nom_patient: document.getElementById("nom_patient").value,
//     dossier_patient: document.getElementById("dossier_patient").value,
//     lignes: pendingDemande,
//   };

//   fetch("/vente/save-demande", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error("Erreur serveur");
//       return res.json();
//     })
//     .then((response) => {
//       toastr.success("Demande enregistrée avec succès!");
//       $("#addCommande").modal("hide");

//       // Clear cart
//       cart = [];
//       renderCart();

//       // Reset modal form fields
//       document.getElementById("demandeur_id").value = "";
//       document.getElementById("recepteur_id").value = "";
//       document.getElementById("urgent").checked = false;
//       document.getElementById("description").value = "";
//       document.getElementById("ipp").value = "";
//       document.getElementById("nom_patient").value = "";
//       document.getElementById("dossier_patient").value = "";


//     })
//     .catch((err) => {
//       console.error(err);
//       toastr.error("Erreur lors de l'enregistrement de la demande.");
//     });
// });
// });
