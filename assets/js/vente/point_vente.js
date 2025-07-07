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

  // Utilities
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

  $('#magasin-select').on('change', async function () {
  const selectedMagasinId = this.value;

  console.log("Changed to magasin:", selectedMagasinId); // debug

  const productGrid = document.getElementById("product-list");
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
            <button class="img-clickable border-0 bg-transparent p-0" data-id="${
              product.id
            }" style="cursor: pointer">
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
              ${
                product.name.length > 16
                  ? product.name.substring(0, 16) + "..."
                  : product.name
              }
            </h6>
            <p class="text-danger fw-bold mb-0 product-price">
              ${Number(product.price).toLocaleString('fr-FR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).replace(/\s/g, '\u00A0')} DH
            </p>
          </div>
        </div>
      </div>
    `
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
      <div class="d-flex align-items-center border-bottom py-1 cart-item" data-id="${
        item.id
      }" style="width: 100%; font-size: 0.85rem">
        
      <div style="width: 75%" class="d-flex justify-content-between align-items-center text-uppercase fw-semibold text-truncate">
        <span class="text-truncate" style="max-width: 80%">${item.name}</span>
        <span class="text-danger fw-bold">
        ${item.price.toLocaleString('fr-FR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
        }).replace(/\s/g, '\u00A0')}
        </span>
        </div>

      <div style="width: 30%" class="d-flex justify-content-end align-items-center gap-2 text-end ps-2">
        <div class="d-flex align-items-center bg-light rounded-pill qty-control" style="font-size: 0.8rem">
          <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease" style="width: 18px">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input type="text" class="form-control form-control-sm text-center border-0 bg-transparent qty-input" value="${
            item.quantity
          }" readonly style="width: 24px" />
          <button class="btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase" style="width: 18px">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

        <button class="btn btn-sm btn-remove text-danger bg-transparent border-0" title="Supprimer">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
      </div>
    `;
      })
      .join("");

    cartContainer.innerHTML = cartHTML;
    subtotalElement.innerText = `${subtotal.toLocaleString('fr-FR', 
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).replace(/\s/g, '\u00A0')} DH`;
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

  renderFilteredProducts();

  // Handle Submit coomander
  const commanderButton = document.querySelector('[data-target="#addCommande"]');
  let isCommandLocked = false;

  commanderButton?.addEventListener("click", (e) => {
    e.preventDefault();
    if (isCommandLocked) return;

    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }

    isCommandLocked = true;

    pendingDemande = cart.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      category: item.category,
      magasin_id: item.magasin_id,
    }));

    // Set the select box value to the magasin_id
    const magasinId = pendingDemande[0]?.magasin_id;
    const demandeurSelect = document.getElementById("demandeur_id");
    if (demandeurSelect && magasinId) {
      $(demandeurSelect).val(magasinId).trigger('change'); // 💡 Select2 update
    }

    // Show modal
    $("#addCommande").modal("show");

    // Reset lock when modal is closed
    $('#addCommande').on('hidden.bs.modal', () => {
      isCommandLocked = false;
    });
  });

  // const commanderButton = document.querySelector(
  //   '[data-target="#addCommande"]'
  // );
  // commanderButton?.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   if (cart.length === 0) {
  //     toastr.error(
  //       "Votre panier est vide. Ajoutez des produits avant de commander."
  //     );
  //     return;
  //   }

  //   pendingDemande = [...cart.map((item) => ({ ...item }))];
  //   console.log("Pending Demande:", pendingDemande);
  //   $("#addCommande").modal("show");
  // });

  // Handle Demandeur and Traitement options
  const defaultTraitementMagasins = window.DEFAULT_TRAITEMENT_IDS || [];
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

      const isDefault = defaultTraitementMagasins.includes(Number(value));
      const isSame = value === selectedDemandeurId;
      const shouldDisable = isDefault && !isSame;

      option.prop("disabled", shouldDisable);

      if (!shouldDisable && value === currentTraitementId) {
        stillValid = true;
      }

      if (isSame && !shouldDisable) {
        hasSameOption = true;
      }
    });

    if (!stillValid) {
      $traitementSelect.val("");
    }
    if (hasSameOption) {
      $traitementSelect.val(selectedDemandeurId);
    }

    //  Refresh Select2 dropdowns
    $traitementSelect.trigger("change.select2");
    $demandeurSelect.trigger("change.select2");
  };

$(document).ready(function () {
  const $typeDemande = $('#type_demande');
  const $patientFields = $('#patient-fields');
  const $notPatientFields = $('#not-patient-fields');
  const $ipp = $('#ipp');
  const $nomPatient = $('#nom_patient');
  const $dossierPatient = $('#dossier_patient');

  // Initialize Select2 only if not already initialized
  if (!$typeDemande.hasClass("select2-hidden-accessible")) {
    $typeDemande.select2({ width: '100%' });
  }

  function togglePatientFields() {
    const selectedValue = $typeDemande.val();

    if (selectedValue === '2') {
      // Show patient fields, hide non-patient fields
      $patientFields.show();
      $notPatientFields.hide();

      // Make fields required
      $ipp.prop('required', true);
      $nomPatient.prop('required', true);
      $dossierPatient.prop('required', true);
    } else {
      // Hide patient fields, show non-patient fields
      $patientFields.hide();
      $notPatientFields.show();

      // Clear and remove required attributes
      $ipp.val('').prop('required', false);
      $nomPatient.val('').prop('required', false);
      $dossierPatient.empty().prop('required', false);
    }
  }

  // Initial toggle on page load
  togglePatientFields();

  // Toggle on change
  $typeDemande.on('change', togglePatientFields);
});





  // Bind change event for Demandeur
  $("#demandeur_id").on("change", () => {
    setTimeout(handleTraitementOptions, 0);
  });

  handleTraitementOptions(); // Run on load

  // IPP autofill on Enter for set patient name and dossier
  const ippInput = document.getElementById("ipp");
  const nomInput = document.getElementById("nom_patient");
  const dossierSelect = document.getElementById("dossier_patient");

  nomInput.disabled = true;
  dossierSelect.disabled = true;

  ippInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const ipp = ippInput.value.trim();
      const patient = (window.infos_patient || []).find((p) => p.ipp === ipp);

      if (patient) {
        nomInput.value = patient.nom;
        dossierSelect.innerHTML = ""; // clear previous

        const dossiers = Array.isArray(patient.dossier)
          ? patient.dossier
          : [patient.dossier];

        dossiers.forEach((d) => {
          const option = document.createElement("option");
          option.value = d;
          option.textContent = d;
          dossierSelect.appendChild(option);
        });

        dossierSelect.disabled = false;
      } else {
        nomInput.value = "";
        dossierSelect.innerHTML = "";
        dossierSelect.disabled = true;
        toastr.error("Aucun patient trouvé avec cet IPP");
      }
    }
  });

  // Handle form submission
  document.getElementById("submit-demande").addEventListener("click", async () => {
  const btn = document.getElementById("submit-demande");

  // Prevent multiple submissions
  if (btn.disabled) return;
  btn.disabled = true;

  if (!pendingDemande || pendingDemande.length === 0) {
    toastr.error("Aucune donnée de panier à envoyer.");
    btn.disabled = false;
    btn.innerHTML = 'Commander'; 
    return;
  }

  const typeDemande = document.getElementById("type_demande").value;

  const requiredFields = [
    { id: "demandeur_id", label: "Magasin Demandeur" },
    { id: "recepteur_id", label: "Magasin de Traitement" },
  ];

  // Conditionally add fields based on type
  if (typeDemande === "2") {
    // Consommation
    requiredFields.push(
      { id: "ipp", label: "IPP" },
      { id: "nom_patient", label: "Nom du patient" },
      { id: "dossier_patient", label: "Dossier du patient" },
      { id: "description_patient", label: "Description" }
    );
  } else {
    // Alimentation
    requiredFields.push(
      { id: "description", label: "Description" }
    );
  }

  // Validate
  if (!validateFormFields(requiredFields)) {
    btn.disabled = false;
    btn.innerHTML = 'Commander';
    return;
  }


  const data = {
    type_demande: typeDemande,
    demandeur_id: document.getElementById("demandeur_id").value,
    recepteur_id: document.getElementById("recepteur_id").value,
    urgent: document.getElementById("urgent").checked ? 1 : 0,
    description: typeDemande === "2"
      ? document.getElementById("description_patient").value
      : document.getElementById("description").value,
    ipp: document.getElementById("ipp").value,
    nom_patient: document.getElementById("nom_patient").value,
    dossier_patient: document.getElementById("dossier_patient").value,
    lignes: pendingDemande,
  };
  console.log("Submitting data:", data);

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
    $("#addCommande").modal("hide");

    cart = [];
    pendingDemande = [];
    renderCart();

    ["demandeur_id", "recepteur_id", "description", "ipp", "nom_patient", "dossier_patient"]
      .forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
    document.getElementById("urgent").checked = false;

  } catch (err) {
    console.error(err);
    toastr.error("Erreur lors de l'enregistrement de la commande.");
  } finally {
    // Always re-enable the button
    btn.disabled = false;
    btn.innerHTML = 'Commander';
  }
});

  
});

