$(document).ready(function () {
  const table = $("#livraisonTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing:
        '<i style="color:#7593ae; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> ',
    },
    lengthMenu: [
      [21, 50, 100, 200],
      [21, 50, 100, 200],
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
      { name: "d.id", data: "id" },
      {
        name: "d.code",
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
              })
            : "0,00";
        },
        createdCell: function (td) {
          td.classList.add("force-right-align");
        },
      },
      { name: "niveau_urgence", data: "niveau_urgence" },
      {
        name: "d.created",
        data: "date_livraison",
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

// Update position of commande
// document.addEventListener("DOMContentLoaded", () => {
//   let positionChanged = false; // Track whether position has changed

//   const updatePosition = async (id, position) => {
//     try {
//       const response = await fetch('/vente/update-position-commande', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Requested-With': 'XMLHttpRequest',
//         },
//         body: JSON.stringify({ id, position })
//       });

//       const data = await response.json();
//       if (data.success) {
//         positionChanged = true; // Mark as changed
//         let actionMessage = '';
//         switch (position) {
//           case 'validée':
//             actionMessage = 'La commande a été validée avec succès.';
//             break;
//           // case 'Crée':
//           //   actionMessage = 'La commande a été dévalidée avec succès.';
//           //   break;
//           case 'Générée':
//             actionMessage = 'La commande a été générée avec succès.';
//             break;
//           default:
//             actionMessage = 'Mise à jour effectuée.';
//         }
//         toastr.success(actionMessage);
//         updateFooterButtons(id, position);
//       } else {
//         toastr.error("Erreur lors de la mise à jour.");
//       }
//     } catch (error) {
//       toastr.error("Erreur réseau.");
//       console.error(error);
//     }
//   };

//   const updateFooterButtons = (id, newPosition) => {
//     const modal = document.getElementById(`detailsCommande${id}`);
//     const footer = modal.querySelector('.modal-footer');

//     if (!footer) return;
//     const demandeurSelect = modal.querySelector('[name="demandeur_id"]');
//     const recepteurSelect = modal.querySelector('[name="recepteur_id"]');

//     const demandeurId = demandeurSelect?.value;
//     const recepteurId = recepteurSelect?.value;
//     console.log(`Demandeur ID: ${demandeurId}, Recepteur ID: ${recepteurId}`);

//     let buttonsHTML = '';

//     if (newPosition === 'validée' && demandeurId && recepteurId && demandeurId === recepteurId) {
//       buttonsHTML = `
//         <button type="button" class="btn btn-primary btn-generer" data-id="${id}">
//           Générer
//         </button>
//       `;
//     } else if (newPosition === 'Crée') {
//       buttonsHTML = `
//         <button type="button" class="btn btn-success btn-valider" data-id="${id}">
//           Valider
//         </button>
//       `;
//     }
//     footer.innerHTML = buttonsHTML;
//   };


//   document.body.addEventListener("click", async (e) => {
//     const btn = e.target;

//     // Handle validation position
//     if (btn.classList.contains("btn-valider")) {
//       updatePosition(btn.dataset.id, 'validée');

//     } else if (btn.classList.contains("btn-generer")) {
//       const id = btn.dataset.id;
//       const modal = document.getElementById(`preparerLivraison${id}`);
//       if (modal) {
//         $(modal).modal('show');
//       }

//     } else if (btn.classList.contains("btn-confirmer-livraison")) {
//       const commandeId = btn.dataset.id;
//       const form = document.querySelector(`.livraison-form[data-id="${commandeId}"]`);
//       if (!form) return;

//       const formData = new FormData(form);

//       try {
//         const response = await fetch('/vente/save-livraison', {
//           method: 'POST',
//           body: formData
//         });

//         const result = await response.json();

//         if (result.status === 'success') {
//           toastr.success(' Livraison enregistrée avec succès.');
//           location.reload();
//         } else {
//           toastr.error(' Erreur: ' + (result.message || 'Problème de traitement.'));
//         }

//       } catch (error) {
//         console.error('Erreur envoi livraison:', error);
//          toastr.error('Erreur de communication avec le serveur.');
//       }
//     }
//   });


//   $('.modal').on('hidden.bs.modal', function () {
//     if (positionChanged) {
//       location.reload();
//     }
//   });
// });