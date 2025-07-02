$(document).ready(function () {
  const table = $("#livraisonTable").DataTable({
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
      url: Routing.generate("app_fetch_livraisons"),
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
      { name: "l.id", data: "id" },
      {
        name: "l.code",
        data: "livraison_code",
        render: function (data, type, row) {
          return `
              <button 
                class="btn btn-sm"
                style="font-size: 0.6rem; color: #007bff; padding: 0;"
                data-toggle="modal" 
                data-target="#detailsLivraison${row.id}">
                ${data}
              </button>
            `;
        },
      },
      {
        name: "l.created",
        data: "date_livraison",
        render: function (data) {
          return moment(data).format("DD/MM/YYYY ");
        },
      },
      { name:"l.description", data: "description",
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
      },
      { name: "dem.designationAccess", data: "demandeur",
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
       },
      { name: "dem.designationAccess", data: "recepteur",
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
       },
      { name: "l.ipp", data: "ipp_patient" },
      { name: "l.nom_patient", data: "nom_patient" ,
        createdCell: function (td) {
          td.classList.add("force-left-align");
        },
      },
      {
        name: "total_montant_ttc",
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
      { name: "l.urgent", data: "niveau_urgence" },
      
      { name: "status.designation", data: "lv_status" },
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

$(document).on("click", ".details-livraison", function () {
  const livraisonId = $(this).attr("id");
  const modalSelector = `#detailsLivraison${livraisonId}`;

  if (!livraisonId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      livraisonId,
      modalSelector,
    });
    return;
  }
  $(modalSelector).modal("show");
});

// Handle status update (Valider or Générer)
$(document).on("click", ".btn-valider, .btn-generer", function () {
  const id = $(this).data("id");
  const action = $(this).hasClass("btn-valider") ? "valider" : "generer";

  $.ajax({
    url: `/vente/update-status`,
    method: "POST",
    data: {
      id,
      action,
    },
    success: function (response) {
      if (response.status === "success") {
        if (action === "valider") {
          toastr.success("La livraison a été validée avec succès.");
        } else if (action === "generer") {
          toastr.success("La livraison a été générée avec succès.");
        }
        setTimeout(() => location.reload(), 1000);
      } else {
        toastr.error(response.message || "Erreur inconnue");
      }
    },
    error: function () {
      toastr.error("Erreur serveur !");
    },
  });
});
