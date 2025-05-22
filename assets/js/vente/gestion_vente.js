$(document).ready(function () {
  const table = $("#salesTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing:
        '<i style="color:#508884; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> ',
    },
    lengthMenu: [
      [20, 50, 100, 200],
      [20, 50, 100, 200],
    ],
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate("app_fetch_commandes"),
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
                class="btn btn-sm "
                style="font-size: 0.6rem; font-weight: bold;" 
                data-toggle="modal" 
                data-target="#detailsDemande${row.id}">
                ${data}
              </button>
            `;
        },
      },
      { name: "demandeur.designation", data: "demandeur" },
      { name: "recepteur.designation", data: "recepteur" },
      { name: "d.ipp", data: "ipp_patient" },
      { name: "d.nom_patient", data: "nom_patient" },
      {
        name: "total_montant_ttc",
        data: "total_montant_ttc",
        render: function (data) {
          return data
            ? Number(data).toLocaleString("fr-FR", {
                style: "decimal",
                minimumFractionDigits: 2,
              }) + " DH"
            : "0.00 DH";
        },
        createdCell: function (td) {
          td.classList.add("force-right-align");
        },
      },

      { name: "niveau_urgence", data: "niveau_urgence" },
      {
        name: "d.created",
        data: "date_demmande",
        render: function (data) {
          return moment(data).format("DD/MM/YYYY ");
        },
      },
      { name: "d.position_actuel", data: "position_actuel" },
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

  $(modalSelector).modal("show");
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

window.addEventListener('load', () => {
  const produits = window.PRODUITS || [];

  document.body.addEventListener('click', function (e) {
    const target = e.target;
    const row = target.closest('tr');
    if (!row) return;

    // Edit
    if (target.closest('.btn-edit-line')) {
      row.querySelector('.product-select').disabled = false;
      row.querySelector('.quantity-input').disabled = false;

      row.querySelector('.btn-edit-line').classList.add('d-none');
      row.querySelector('.btn-delete-line').classList.add('d-none');
      row.querySelector('.btn-save-line').classList.remove('d-none');
    }

    // Save
    if (target.closest('.btn-save-line')) {
      row.querySelector('.product-select').disabled = true;
      row.querySelector('.quantity-input').disabled = true;

      row.querySelector('.btn-edit-line').classList.remove('d-none');
      row.querySelector('.btn-delete-line').classList.remove('d-none');
      row.querySelector('.btn-save-line').classList.add('d-none');
    }
  });

  // 🔁 When product changes, update price
  document.body.addEventListener('change', function (e) {
    if (e.target.classList.contains('product-select')) {
      const row = e.target.closest('tr');
      const selectedId = parseInt(e.target.value);

      const product = produits.find(p => p.id === selectedId);
      if (product && row) {
        const priceInput = row.querySelector('input[type="number"][readonly]');
        if (priceInput) {
          priceInput.value = product.price;
        }
      }
    }
  });
});



