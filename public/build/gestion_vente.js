(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_vente"],{

/***/ "./assets/js/vente/gestion_vente.js":
/*!******************************************!*\
  !*** ./assets/js/vente/gestion_vente.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
$(document).ready(function () {
  var table = $('#salesTable').DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing: '<i class="fa fa-spinner fa-spin fa-3x" style="color:#508884;"></i>'
    },
    lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate('app_fetch_commandes'),
      data: function data(d) {
        d.draw = d.draw || 0;
        d.start = d.start || 0;
        d.length = d.length || 15;
      },
      dataSrc: function dataSrc(json) {
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    order: [[0, 'desc']],
    columns: [{
      name: 'd.id',
      data: 'demande_id'
    }, {
      name: 'd.code',
      data: 'demande_code'
    }, {
      name: 'demandeur.designation',
      data: 'demandeur'
    }, {
      name: 'recepteur.designation',
      data: 'recepteur'
    }, {
      name: 'd.ipp',
      data: 'ipp_patient'
    }, {
      name: 'd.nom_patient',
      data: 'nom_patient'
    }, {
      name: 'total_montant_ttc',
      data: 'total_montant_ttc',
      render: function render(data) {
        return data ? Number(data).toLocaleString('fr-FR', {
          style: 'decimal',
          minimumFractionDigits: 2
        }) + ' DH' : '0.00 DH';
      }
    }, {
      name: 'niveau_urgence',
      data: 'niveau_urgence'
    }, {
      name: 'd.created',
      data: 'date_demmande'
    }, {
      name: 'd.position_actuel',
      data: 'position_actuel'
    }, {
      name: 'actions',
      data: null,
      orderable: false,
      searchable: false,
      render: function render(data) {
        var html = "\n            <div class=\"dropdown\">\n              <i class=\"menuActions fa-solid fa-ellipsis-vertical\" id=\"".concat(data.demande_id, "\"></i>\n              <div class=\"dropdown-menu dropdown-content divMenu\" id=\"divMenu").concat(data.demande_id, "\">");
        window.globalActions.forEach(function (action) {
          html += "\n              <button class=\"".concat(action.className, " dropdown-item\" data-id=\"").concat(data.demande_id, "\" data-toggle=\"modal\" data-target=\"#").concat(action.idName, "\">\n                <i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "\n              </button>");
        });
        html += '</div></div>';
        return html;
      }
    }],
    autoWidth: false
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_numbe-270e3d","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/gestion_vente.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7TUFDaEJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCTixNQUFNLEVBQUUsU0FBQUEsT0FBVWhCLElBQUksRUFBRTtRQUN0QixJQUFJdUIsSUFBSSx3SEFBQUMsTUFBQSxDQUV1RHhCLElBQUksQ0FBQ3lCLFVBQVUsK0ZBQUFELE1BQUEsQ0FDVHhCLElBQUksQ0FBQ3lCLFVBQVUsUUFBSTtRQUN4RmpDLE1BQU0sQ0FBQ2UsYUFBYSxDQUFDbUIsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBSztVQUN2Q0osSUFBSSx1Q0FBQUMsTUFBQSxDQUNlRyxNQUFNLENBQUNDLFNBQVMsaUNBQUFKLE1BQUEsQ0FBNEJ4QixJQUFJLENBQUN5QixVQUFVLDhDQUFBRCxNQUFBLENBQXVDRyxNQUFNLENBQUNFLE1BQU0sc0NBQUFMLE1BQUEsQ0FDbEhHLE1BQU0sQ0FBQ0csSUFBSSx1QkFBQU4sTUFBQSxDQUFtQkcsTUFBTSxDQUFDSSxHQUFHLDhCQUM1QztRQUNkLENBQUMsQ0FBQztRQUNGUixJQUFJLElBQUksY0FBYztRQUN0QixPQUFPQSxJQUFJO01BQ2I7SUFDRixDQUFDLENBQ0Y7SUFDRFMsU0FBUyxFQUFFO0VBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZlbnRlL2dlc3Rpb25fdmVudGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0YWJsZSA9ICQoJyNzYWxlc1RhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmwsXHJcbiAgICAgIHByb2Nlc3Npbmc6ICc8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeFwiIHN0eWxlPVwiY29sb3I6IzUwODg4NDtcIj48L2k+JyxcclxuICAgIH0sXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgXSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgYWpheDoge1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mZXRjaF9jb21tYW5kZXMnKSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBkLmRyYXcgPSBkLmRyYXcgfHwgMDtcclxuICAgICAgICBkLnN0YXJ0ID0gZC5zdGFydCB8fCAwO1xyXG4gICAgICAgIGQubGVuZ3RoID0gZC5sZW5ndGggfHwgMTU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFTcmM6IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgd2luZG93Lmdsb2JhbEFjdGlvbnMgPSBBcnJheS5pc0FycmF5KGpzb24uYWN0aW9ucykgPyBqc29uLmFjdGlvbnMgOiBPYmplY3QudmFsdWVzKGpzb24uYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlcjogW1swLCAnZGVzYyddXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyBuYW1lOiAnZC5pZCcsIGRhdGE6ICdkZW1hbmRlX2lkJyB9LFxyXG4gICAgICB7IG5hbWU6ICdkLmNvZGUnLCBkYXRhOiAnZGVtYW5kZV9jb2RlJyB9LFxyXG4gICAgICB7IG5hbWU6ICdkZW1hbmRldXIuZGVzaWduYXRpb24nLCBkYXRhOiAnZGVtYW5kZXVyJyB9LFxyXG4gICAgICB7IG5hbWU6ICdyZWNlcHRldXIuZGVzaWduYXRpb24nLCBkYXRhOiAncmVjZXB0ZXVyJyB9LFxyXG4gICAgICB7IG5hbWU6ICdkLmlwcCcsIGRhdGE6ICdpcHBfcGF0aWVudCcgfSxcclxuICAgICAgeyBuYW1lOiAnZC5ub21fcGF0aWVudCcsIGRhdGE6ICdub21fcGF0aWVudCcgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0b3RhbF9tb250YW50X3R0YycsXHJcbiAgICAgICAgZGF0YTogJ3RvdGFsX21vbnRhbnRfdHRjJyxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICA/IE51bWJlcihkYXRhKS50b0xvY2FsZVN0cmluZygnZnItRlInLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogJ2RlY2ltYWwnLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgIH0pICsgJyBESCdcclxuICAgICAgICAgICAgOiAnMC4wMCBESCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiAnbml2ZWF1X3VyZ2VuY2UnLCBkYXRhOiAnbml2ZWF1X3VyZ2VuY2UnIH0sXHJcbiAgICAgIHsgbmFtZTogJ2QuY3JlYXRlZCcsIGRhdGE6ICdkYXRlX2RlbW1hbmRlJyB9LFxyXG4gICAgICB7IG5hbWU6ICdkLnBvc2l0aW9uX2FjdHVlbCcsIGRhdGE6ICdwb3NpdGlvbl9hY3R1ZWwnIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnYWN0aW9ucycsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCIke2RhdGEuZGVtYW5kZV9pZH1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tY29udGVudCBkaXZNZW51XCIgaWQ9XCJkaXZNZW51JHtkYXRhLmRlbWFuZGVfaWR9XCI+YDtcclxuICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtXCIgZGF0YS1pZD1cIiR7ZGF0YS5kZW1hbmRlX2lkfVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiMke2FjdGlvbi5pZE5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+YDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaHRtbCArPSAnPC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGFuZ3VhZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJmcmVuY2hKc29uVXJsIiwicHJvY2Vzc2luZyIsImxlbmd0aE1lbnUiLCJzZXJ2ZXJTaWRlIiwiYWpheCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGEiLCJkIiwiZHJhdyIsInN0YXJ0IiwibGVuZ3RoIiwiZGF0YVNyYyIsImpzb24iLCJnbG9iYWxBY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsIm9yZGVyIiwiY29sdW1ucyIsIm5hbWUiLCJyZW5kZXIiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImh0bWwiLCJjb25jYXQiLCJkZW1hbmRlX2lkIiwiZm9yRWFjaCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlkTmFtZSIsImljb24iLCJub20iLCJhdXRvV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9