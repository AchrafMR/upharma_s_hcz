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
        <div style="width: 60%" class="text-uppercase fw-semibold text-truncate">
          ${item.name}
        </div>

        <!-- Price -->
        <div style="width: 15%; margin-left: 15px;" class="text-danger fw-bold text-end">
          ${item.price.toFixed(2)}
        </div>

        <!-- Quantity Controls -->
        <div style="width: 20%" class="d-flex justify-content-end">
          <div class="d-flex align-items-center bg-light rounded-pill qty-control" style="font-size: 0.8rem">
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
          <button class="btn btn-sm btn-remove text-danger bg-transparent border-0" title="Supprimer">
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


  // Handle Submit coomander
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

  // Handle Demandeur and Traitement options
  const defaultTraitementMagasins = window.DEFAULT_TRAITEMENT_IDS || [];
  const handleTraitementOptions = () => {
    const selectedDemandeurId = document.getElementById("demandeur_id").value;
    const $traitementSelect = $('#recepteur_id');
    const $demandeurSelect = $('#demandeur_id');
    const currentTraitementId = $traitementSelect.val();
    let stillValid = false;

    $traitementSelect.find('option').each(function () {
      const option = $(this);
      const value = option.attr('value');
      if (!value) return;

      const isDefault = defaultTraitementMagasins.includes(Number(value));
      const isSame = value === selectedDemandeurId;
      const shouldDisable = isDefault && !isSame;

      option.prop('disabled', shouldDisable);

      if (!shouldDisable && value === currentTraitementId) {
        stillValid = true;
      }
    });

    if (!stillValid) {
      $traitementSelect.val('');
    }

    //  Refresh Select2 dropdowns
    $traitementSelect.trigger('change.select2');
    $demandeurSelect.trigger('change.select2');
  };

  // Bind change event for Demandeur
  $('#demandeur_id').on('change', () => {
    setTimeout(handleTraitementOptions, 0);
  });

  handleTraitementOptions(); // Run on load


  // IPP autofill on Enter for set patient name and dossier
  const ippInput = document.getElementById("ipp");
  const nomInput = document.getElementById("nom_patient");
  const dossierInput = document.getElementById("dossier_patient");

  nomInput.disabled = true;
  dossierInput.disabled = true;
  ippInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const ipp = ippInput.value.trim();
      const patient = (window.infos_patient || []).find(p => p.ipp === ipp);

      if (patient) {
        nomInput.value = patient.nom;
        dossierInput.value = patient.dossier;
      } else {
        nomInput.value = "";
        dossierInput.value = "";
        toastr.error("Aucun patient trouvé avec cet IPP");
      }
    }
  });


  // Handle form submission
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



