import Routing from 'symfony-routing'; // ensure Routing is available
import 'datatables.net-bs5';
import 'datatables.net';

$(document).ready(function () {
  const salesTable = $('#salesTable').DataTable({
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
      url: Routing.generate('app_fetch_commandes'),
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
    order: [[0, 'desc']],
    columns: [
      { name: 'd.id', data: 'demande_id' },
      { name: 'd.code', data: 'demande_code' },
      { name: 'demandeur.designation', data: 'demandeur' },
      { name: 'recepteur.designation', data: 'recepteur' },
      { name: 'd.ipp', data: 'ipp_patient' },
      { name: 'd.nom_patient', data: 'nom_patient' },
      {
        name: 'total_montant_ttc',
        data: 'total_montant_ttc',
        render: function (data) {
          return data
            ? Number(data).toLocaleString('fr-FR', {
                style: 'decimal',
                minimumFractionDigits: 2,
              }) + ' DH'
            : '0.00 DH';
        },
      },
      { name: 'niveau_urgence', data: 'niveau_urgence' },
      { name: 'd.created', data: 'date_demmande' },
      { name: 'd.position_actuel', data: 'position_actuel' },
      {
        name: 'actions',
        data: null,
        orderable: false,
        searchable: false,
        render: function (data) {
          let html = `
            <div class="dropdown">
              <i class="menuActions fa-solid fa-ellipsis-vertical" id="${data.demande_id}"></i>
              <div class="dropdown-menu dropdown-content divMenu" id="divMenu${data.demande_id}">`;

          window.globalActions.forEach((action) => {
            html += `
              <button class="${action.className} dropdown-item" data-id="${data.demande_id}" data-toggle="modal" data-target="#${action.idName}">
                <i class="${action.icon} menuIcon"></i> ${action.nom}
              </button>`;
          });

          html += '</div></div>';
          return html;
        },
      },
    ],
    autoWidth: false,
  });
});
