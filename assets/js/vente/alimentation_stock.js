import facke_img_product from "../../images/facke_img_product.png";

window.addEventListener("DOMContentLoaded", () => {
  window.PRODUCTS = window.PRODUCTS || [];
  let cart = [];
  let selectedCategory = "all";
  let searchQuery = "";
  let pendingDemande = [];

  const cartContainer = document.getElementById("cart-items-container");
  const subtotalElement = document.getElementById("cart-subtotal");
  const productGrid = document.getElementById("product-list");
  const searchInput = document.getElementById("product-search");
  const categoryButtons = document.querySelectorAll(".category-nav-btn");

  const getProductImage = (product) => {
    const basePath = "/images/products/";
    return product.image?.trim()
      ? `${basePath}${product.image}`
      : facke_img_product;
  };

  const addProductToCart = (productId) => {
    const id = Number(productId);
    const product = window.PRODUCTS.find((p) => p.id === id);
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

  $("#magasin-select").on("change", async function () {
    const selectedMagasinId = this.value;
    productGrid.innerHTML = `<p class="text-center text-muted">Chargement...</p>`;

    try {
      const res = await fetch(`/vente/api/produits/${selectedMagasinId}`);
      const data = await res.json();

      window.PRODUCTS = data;
      cart = [];
      searchQuery = "";
      selectedCategory = "all";

      renderFilteredProducts();
      renderCart();
    } catch (err) {
      console.error("Erreur lors du chargement des produits", err);
      toastr.error("Impossible de charger les produits.");
    }
  });

  const renderFilteredProducts = () => {
    const filtered = window.PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    productGrid.innerHTML = filtered
      .map(
        (product) => `
      <div class="col-6 p-1 col-sm-4 col-md-3 col-lg-2-4">
        <div class="card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between">
          <button class="btn btn-sm btn-primary position-absolute top-right-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i>
          </button>

          <div class="position-absolute top-left-badge">
            <div class="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge">
              ${product.quantity}
            </div>
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
              ${product.name.length > 16 ? product.name.substring(0, 16) + "..." : product.name}
            </h6>
            <p class="text-danger fw-bold mb-0 product-price">
              ${Number(product.price).toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).replace(/\s/g, "\u00A0")} DH
            </p>
          </div>
        </div>
      </div>`
      )
      .join("");
  };

  const renderCart = () => {
    let subtotal = 0;

    const cartHTML = cart
      .map((item) => {
        const product = window.PRODUCTS.find((p) => p.id === item.id);
        const stock = product?.quantity ?? 0;
        subtotal += item.price * item.quantity;

        return `
      <div class="d-flex align-items-center border-bottom py-1 cart-item" data-id="${item.id}" style="width: 100%; font-size: 0.85rem">
        <div style="width: 75%" class="d-flex justify-content-between align-items-center text-uppercase fw-semibold text-truncate">
          <span class="text-truncate" style="max-width: 80%">${item.name}</span>
          <span class="text-danger fw-bold">${item.price.toLocaleString("fr-FR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).replace(/\s/g, "\u00A0")}</span>
        </div>

        <div style="width: 30%" class="d-flex justify-content-end align-items-center gap-2 text-end ps-2">
          <div class="d-flex align-items-center bg-light rounded-pill qty-control" style="font-size: 0.8rem">
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease" style="width: 18px">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input" value="${item.quantity}" style="width: auto; max-width: 36px; padding: 0 4px;" />
            <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase" style="width: 18px">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <button class="btn btn-sm btn-remove text-danger bg-transparent border-0" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>`;
      })
      .join("");

    cartContainer.innerHTML = cartHTML;
    subtotalElement.innerText = `${subtotal.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).replace(/\s/g, "\u00A0")} DH`;
  };

  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-id]");
    if (
      target?.classList.contains("top-right-btn") ||
      target?.classList.contains("img-clickable")
    ) {
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

  const commanderButton = document.querySelector('[data-target="#addCommandeAlimentation"]');
  let isCommandLocked = false;

  commanderButton?.addEventListener("click", (e) => {
    e.preventDefault();
    if (isCommandLocked) return;

    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }

    isCommandLocked = true;

    pendingDemande = cart.map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      category: item.category,
      magasin_id: item.magasin_id,
    }));

    const magasinId = pendingDemande[0]?.magasin_id;
    const demandeurSelect = document.getElementById("demandeur_id");
    if (demandeurSelect && magasinId) {
      $(demandeurSelect).val(magasinId).trigger("change");
    }

    $("#addCommandeAlimentation").modal("show");

    $("#addCommandeAlimentation").on("hidden.bs.modal", () => {
      isCommandLocked = false;
    });
  });

  const handleTraitementOptions = () => {
    const selectedDemandeurId = document.getElementById("demandeur_id").value;
    const $traitementSelect = $("#recepteur_id");
    const $demandeurSelect = $("#demandeur_id");
    const currentTraitementId = $traitementSelect.val();
    let stillValid = false;
    let hasSameOption = false;

    $traitementSelect.find("option").each(function () {
      const option = $(this);
      const value = option.attr("value");
      if (!value) return;

      const isDefault = window.DEFAULT_TRAITEMENT_IDS.includes(Number(value));
      const isSame = value === selectedDemandeurId;
      const shouldDisable = isDefault && !isSame;

      option.prop("disabled", shouldDisable);

      if (!shouldDisable && value === currentTraitementId) stillValid = true;
      if (isSame && !shouldDisable) hasSameOption = true;
    });

    if (!stillValid) $traitementSelect.val("");
    if (hasSameOption) $traitementSelect.val(selectedDemandeurId);

    $traitementSelect.trigger("change.select2");
    $demandeurSelect.trigger("change.select2");
  };

  $("#demandeur_id").on("change", () => setTimeout(handleTraitementOptions, 0));
  handleTraitementOptions();

  document.getElementById("submit-demande").addEventListener("click", async () => {
    const btn = document.getElementById("submit-demande");
    if (btn.disabled) return;
    btn.disabled = true;

    if (!pendingDemande || pendingDemande.length === 0) {
      toastr.error("Aucune donnée de panier à envoyer.");
      btn.disabled = false;
      btn.innerHTML = "Commander";
      return;
    }

    const requiredFields = [
      { id: "demandeur_id", label: "Magasin Demandeur" },
      { id: "recepteur_id", label: "Magasin de Traitement" },
      { id: "description", label: "Description" },
    ];

    for (let field of requiredFields) {
      const el = document.getElementById(field.id);
      if (!el || !el.value.trim()) {
        toastr.error(`Veuillez remplir le champ : ${field.label}`);
        el.focus();
        btn.disabled = false;
        btn.innerHTML = "Commander";
        return;
      }
    }

    const demandeurId = document.getElementById("demandeur_id").value;
    const recepteurId = document.getElementById("recepteur_id").value;

    if (demandeurId === recepteurId) {
      toastr.error("Veuillez changer le magasin de traitement car cette demande est de type Alimentation.");
      btn.disabled = false;
      btn.innerHTML = "Commander";
      return;
    }

    const data = {
      type_demande: 4,
      demandeur_id: demandeurId,
      recepteur_id: recepteurId,
      urgent: document.getElementById("urgent").checked ? 1 : 0,
      description: document.getElementById("description").value,
      lignes: pendingDemande,
    };

    try {
      const res = await fetch("/vente/save-demande", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      await res.json();

      toastr.success("Commande enregistrée avec succès!");
      $("#addCommandeAlimentation").modal("hide");

      cart = [];
      pendingDemande = [];
      renderCart();

      ["description"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
      document.getElementById("urgent").checked = false;
    } catch (err) {
      console.error(err);
      toastr.error("Erreur lors de l'enregistrement de la commande.");
    } finally {
      btn.disabled = false;
      btn.innerHTML = "Commander";
    }
  });

  renderFilteredProducts();
});
