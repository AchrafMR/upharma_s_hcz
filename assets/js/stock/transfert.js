$(document).ready(function () {
  const table = $("#salesTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing:
        '<i style="color:#7593ae; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> ',
    },
    lengthMenu: [
      [20, 50, 100, 200],
      [20, 50, 100, 200],
    ],
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate("app_fetch_demandes"),
      data: function (d) {
        d.draw = d.draw || 0;
        d.start = d.start || 0;
        d.length = d.length || 15;
      },
      dataSrc: function (json) {
        window.globalActions = Array.isArray(json.actions)
          ? json.actions
          : Object.values(json.actions);
        return json.data;
      },
    },
    order: [[0, "desc"]],
    columns: [
      { name: "d.id", data: "id" },
      {
        name: "d.code",
        data: "demande_code",
        render: function (data, type, row) {
          return `
              <button 
                class="btn btn-sm"
                style="font-size: 0.6rem; color: rgb(117, 147, 174); padding: 0;"
                data-toggle="modal" 
                data-target="#detailsDemande${row.id}">
                ${data}
              </button>
            `;
        },
      },
      {
        name: "d.created",
        data: "date_demande",
        render: function (data) {
          return moment(data).format("DD/MM/YYYY ");
        },
      },
      { name: "d.description", data: "description" , 
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
      },
      { name: "dem.designationAccess", data: "demandeur",
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
      },
      { name: "rec.designationAccess", data: "recepteur",
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
      },
      {
        name: "lg.montant_ttc",
        data: "total_montant_ttc",
        render: function (data) {
          return data
            ? Number(data).toLocaleString("fr-FR", {
                style: "decimal",
                minimumFractionDigits: 2,
              })
            : "0,00";
        },
        createdCell: function (td) {
          td.classList.add("force-right-align");
        },
      },
      { name: "niveau_urgence", data: "niveau_urgence" },
      { name: "status.designation", data: "cm_status" },
      {
        name: "actions",
        data: null,
        orderable: false,
        searchable: false,
        render: function (data) {
          var actionsHtml =
            '<div class="dropdown">' +
            '<i class="menuActions fa-solid fa-ellipsis-vertical" id="' +
            data.id +
            '"></i>' +
            '<div class="dropdown-menu dropdown-content divMenu" id="divMenu' +
            data.id +
            '">';

          window.globalActions.forEach(function (action) {
            actionsHtml += `
                <button class="${action.className} dropdown-item"
                        id="${data.id}"
                        data-toggle="modal"
                        data-target="#${action.idName}${data.id}">
                  <i class="${action.icon} menuIcon"></i> ${action.nom}
                </button>`;
          });

          actionsHtml += "</div></div>";
          return actionsHtml;
        },
      },
    ],
    autoWidth: false,
  });
});


$(document).on("click", ".edit-demande", function () {
  const demandeId = $(this).attr("id");
  const modalSelector = `#editDemande${demandeId}`;

  if (!demandeId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      demandeId,
      modalSelector,
    });
    return;
  }
  const status = $(modalSelector).data("status");
  if (status === 9) {
    $(modalSelector).modal("show");
  } else {
    toastr.warning("Impossible de modifier cette demande. Elle n'est plus modifiable."); 
  }
});

$(document).on("click", ".details-demande", function () {
  const demandeId = $(this).attr("id");
  const modalSelector = `#detailsDemande${demandeId}`;

  if (!demandeId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      demandeId,
      modalSelector,
    });
    return;
  }
  $(modalSelector).modal("show");
});

//edit demande
window.addEventListener("load", () => {
  const produits = window.PRODUITS || [];
  window.deletedProduits = [];
  window.getDeletedProduits = () => window.deletedProduits;

  document.body.addEventListener("click", async (e) => {
    const target = e.target.closest("button, .fa-plus");
    if (!target) return;

    const row = target.closest("tr");
    const modal = target.closest(".modal");

    // Edit product
    if (target.classList.contains("btn-edit-line")) {
      row.querySelector(".product-select").disabled = false;
      row.querySelector(".quantity-input").disabled = false;
      row.querySelector(".btn-edit-line")?.classList.add("d-none");
      row.querySelector(".btn-delete-line")?.classList.add("d-none");
      row.querySelector(".btn-save-line")?.classList.remove("d-none");
    }

    // Save edited product
    if (target.classList.contains("btn-save-line")) {
      row.querySelector(".product-select").disabled = true;
      row.querySelector(".quantity-input").disabled = true;
      row.querySelector(".btn-edit-line")?.classList.remove("d-none");
      row.querySelector(".btn-delete-line")?.classList.remove("d-none");
      row.querySelector(".btn-save-line")?.classList.add("d-none");
      toastr.success("Produit modifié avec succès.");
    }

    // Delete product
    if (target.classList.contains("btn-delete-line")) {
      Swal.fire({
        title: "Confirmer la suppression",
        text: "Voulez-vous vraiment supprimer ce produit ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, supprimer",
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
          const demandeId = modal.dataset.id;
          const produitId = row.dataset.id;
          const demandelgId = row.dataset.demandelgId;

          if (demandelgId) {
            window.deletedProduits.push({
              demande_id: parseInt(demandeId),
              produit_id: parseInt(produitId),
              demandelg_id: parseInt(demandelgId),
            });
          }

          row.remove();
          toastr.success("Produit supprimé avec succès.");
        }
      });
    }

    // Add new product row
    if (target.classList.contains("fa-plus")) {
      const tableBody = modal.querySelector("tbody");
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
        <td style="vertical-align: top !important; text-align: left !important;">
          <select class="form-control form-control-sm product-select">
            ${produits
              .map(
                (p) =>
                  `<option value="${p.id}" data-prix="${p.price}">${p.name}</option>`
              )
              .join("")}
          </select>
        </td>
        <td>
          <input type="number" class="form-control form-control-sm quantity-input" min="1" value="1">
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-save-new-line" title="Enregistrer">
            <i class="fa fa-save text-success"></i>
          </button>
        </td>
      `;

      tableBody.appendChild(newRow);
    }


    if (target.classList.contains("btn-save-new-line")) {
      const productSelect = row.querySelector(".product-select");
      const quantityInput = row.querySelector(".quantity-input");

      const selectedId = productSelect.value;
      const productName =
        productSelect.options[productSelect.selectedIndex].text;

      productSelect.disabled = true;
      quantityInput.disabled = true;

      row.querySelector("td:last-child").innerHTML = `
        <button type="button" class="btn btn-sm btn-edit-line" title="Modifier">
          <i class="fa fa-edit text-primary"></i>
        </button>
        <button type="button" class="btn btn-sm btn-delete-line" title="Supprimer">
          <i class="fa fa-trash text-danger"></i>
        </button>
        <button type="button" class="btn btn-sm btn-save-line d-none" title="Enregistrer">
          <i class="fa fa-save text-success"></i>
        </button>
      `;

      toastr.success("Nouveau produit ajouté avec succès.");
    }

  if (target.classList.contains("btn-save-edit")) {
    const demandeId = modal.dataset.id;
    const tableBody = modal.querySelector("tbody");

    const requiredFields = ["description", "demandeur_id", "recepteur_id"];
    let hasError = false;

    requiredFields.forEach((field) => {
      const input = modal.querySelector(`[name="${field}"]`);
      if (!input || !input.value.trim()) {
        toastr.error(`Le champ "${field.replace('_', ' ')}" est requis.`);
        hasError = true;
      }
    });

    const rows = tableBody.querySelectorAll("tr");
    if (rows.length === 0) {
      toastr.error("Veuillez ajouter au moins un produit.");
      hasError = true;
    }

    // Check for duplicate products
    const productIds = [];
    rows.forEach((row) => {
      const select = row.querySelector(".product-select");
      if (select) {
        const val = select.value;
        if (productIds.includes(val)) {
          toastr.error("Un produit est sélectionné plusieurs fois.");
          hasError = true;
        }
        productIds.push(val);
      }
    });

    if (hasError || !tableBody) return;

    const description = modal.querySelector('[name="description"]')?.value;
    const demandeurId = modal.querySelector('[name="demandeur_id"]')?.value;
    const recepteurId = modal.querySelector('[name="recepteur_id"]')?.value;
    const urgent = modal.querySelector('[name="urgent"]')?.checked;

    const editedProduits = [];
    const newProduits = [];

    tableBody.querySelectorAll("tr").forEach((row) => {
      const selectElement = row.querySelector(".product-select");
      const produitId = selectElement?.value;
      const quantite = row.querySelector(".quantity-input")?.value;
      const price = parseFloat(selectElement?.selectedOptions[0]?.getAttribute("data-prix")) || 0;
      const demandelgId = row.dataset.demandelgId || null;

      if (!produitId || !quantite) return;

      const data = {
        produit_id: parseInt(produitId),
        quantite: parseFloat(quantite),
        price: price,
      };

      if (demandelgId) {
        data.demandelg_id = parseInt(demandelgId);
        editedProduits.push(data);
      } else {
        newProduits.push(data);
      }
    });

    const deleted = window.getDeletedProduits().filter(d => d.demande_id == demandeId);

    try {
      const response = await fetch("/mouvement/edit-demande", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          demande_id: parseInt(demandeId),
          description,
          demandeur_id: parseInt(demandeurId),
          recepteur_id: parseInt(recepteurId),
          urgent,
          edited: editedProduits,
          added: newProduits,
          deleted,
        }),
      });

      const result = await response.json();
      if (result.status === "success") {
        toastr.success("Demande sauvegardée avec succès !");
        $(modal).on("hidden.bs.modal", function () {
          location.reload();
        }).modal("hide");

        window.deletedProduits = [];
      } else {
        toastr.error(result.message || "Erreur lors de la sauvegarde.");
      }
    } catch (err) {
      console.error("Network error:", err);
      toastr.error("Erreur réseau lors de la sauvegarde.");
    }
  }
  });
});

// Update position of demande
document.addEventListener("DOMContentLoaded", () => {
  let shouldRefresh = false; 

  const updatePosition = async (id, position, button) => {
    try {
      const response = await fetch("/mouvement/update-position-demande", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ id, position }),
      });

      const data = await response.json();
      if (data.success) {
        toastr.success("La demande a été validée avec succès.");

        if (button) {
          button.style.display = "none";
        }

        shouldRefresh = true;
      } else {
        toastr.error("Erreur lors de la mise à jour.");
      }
    } catch (error) {
      toastr.error("Erreur réseau.");
      console.error(error);
    }
  };

  document.body.addEventListener("click", (e) => {
    const btn = e.target;
    if (btn.classList.contains("btn-valider")) {
      const id = btn.dataset.id;
      updatePosition(id, "validée", btn);
    }
  });

  $(document).on("hidden.bs.modal", ".modal", function () {
    if (shouldRefresh) {
      location.reload();
    }
  });

  $(document).on('click', function (e) {
        const $popup = $('#impressionPopup');
        const $toggle = $('.toggleImpressionPopup');

        if ($(e.target).closest($toggle).length) {
            $popup.fadeToggle(150);
        } 
    
        else if (!$(e.target).closest($popup).length) {
            $popup.fadeOut(150);
        }
    });
    $('body').on('click', '.genererPdfDemandeSortieStock', function (e) {
        e.preventDefault();

        const id = $(this).data('id');
        if (!id) {
            toastr.warning("ID de Demande ortie Stock manquant.");
            return;
        }
        try {
            const url = Routing.generate('app_exports_demande_exports') + '?id=' + id;
            window.open(url, '_blank');
        } catch (err) {
            console.error("Route non trouvée dans Routing.js :", err);
            toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
        }
    });  
  
    $("#ajouterTransfert").modal("show");

    $("#ajouterTransfert").on("hidden.bs.modal", () => {
      isCommandLocked = false;
    });
});


