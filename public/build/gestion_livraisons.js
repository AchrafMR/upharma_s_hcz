(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_livraisons"],{

/***/ "./assets/js/mouvement/gestion_livraisons.js":
/*!***************************************************!*\
  !*** ./assets/js/mouvement/gestion_livraisons.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
$(document).ready(function () {
  var table = $("#livraisonTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing: '<i style="color:#7593ae; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> '
    },
    lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate("app_fetch_livraisons"),
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
    order: [[0, "desc"]],
    columns: [{
      name: "l.id",
      data: "id"
    }, {
      name: "l.code",
      data: "livraison_code",
      render: function render(data, type, row) {
        return "\n              <button \n                class=\"btn btn-sm\"\n                style=\"font-size: 0.6rem; color: #7593ae; padding: 0;\"\n                data-toggle=\"modal\" \n                data-target=\"#detailsLivraison".concat(row.id, "\">\n                ").concat(data, "\n              </button>\n            ");
      }
    }, {
      name: "l.created",
      data: "date_livraison",
      render: function render(data) {
        return moment(data).format("DD/MM/YYYY ");
      }
    }, {
      name: "l.description",
      data: "description",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "dem.designationAccess",
      data: "demandeur",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "dem.designationAccess",
      data: "recepteur",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "l.ipp",
      data: "ipp_patient"
    }, {
      name: "l.nom_patient",
      data: "nom_patient",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "l.typeLivraison",
      data: "type_livraison_label"
    }, {
      name: "total_montant_ttc",
      data: "total_montant_ttc",
      render: function render(data) {
        return data ? Number(data).toLocaleString("fr-FR", {
          style: "decimal",
          minimumFractionDigits: 2
        }) : "0,00";
      },
      createdCell: function createdCell(td) {
        td.classList.add("force-right-align");
      }
    }, {
      name: "l.urgent",
      data: "niveau_urgence"
    }, {
      name: "status.designation",
      data: "lv_status"
    }, {
      name: "actions",
      data: null,
      orderable: false,
      searchable: false,
      render: function render(data) {
        var actionsHtml = '<div class="dropdown">' + '<i class="menuActions fa-solid fa-ellipsis-vertical" id="' + data.id + '"></i>' + '<div class="dropdown-menu dropdown-content divMenu" id="divMenu' + data.id + '">';
        window.globalActions.forEach(function (action) {
          actionsHtml += "\n                <button class=\"".concat(action.className, " dropdown-item\"\n                        id=\"").concat(data.id, "\"\n                        data-toggle=\"modal\"\n                        data-target=\"#").concat(action.idName).concat(data.id, "\">\n                  <i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "\n                </button>");
        });
        actionsHtml += "</div></div>";
        return actionsHtml;
      }
    }],
    autoWidth: false
  });
});
$(document).on("click", ".details-livraison", function () {
  var livraisonId = $(this).attr("id");
  var modalSelector = "#detailsLivraison".concat(livraisonId);
  if (!livraisonId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      livraisonId: livraisonId,
      modalSelector: modalSelector
    });
    return;
  }
  $(modalSelector).modal("show");
});

// update status
$(document).on("click", ".btn-valider, .btn-generer", function () {
  var id = $(this).data("id");
  var action = $(this).hasClass("btn-valider") ? "valider" : "generer";
  $.ajax({
    url: "/mouvement/update-status",
    method: "POST",
    data: {
      id: id,
      action: action
    },
    success: function success(response) {
      if (response.status === "success") {
        if (action === "valider") {
          toastr.success("La livraison a été validée avec succès.");
        } else if (action === "generer") {
          toastr.success("La livraison a été générée avec succès.");
        }
        setTimeout(function () {
          return location.reload();
        }, 1000);
      } else {
        toastr.error(response.message || "Erreur inconnue");
      }
    },
    error: function error() {
      toastr.error("Erreur serveur !");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  $("body").on('click', function (e) {
    var $popup = $('#impressionPopup');
    var $toggle = $('.toggleImpressionPopup');
    if ($(e.target).closest($toggle).length) {
      $popup.fadeToggle(150);
    } else if (!$(e.target).closest($popup).length) {
      $popup.fadeOut(150);
    }
  });
  $('body').on('click', '.genererPdfLivraisonSortieStock', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    if (!id) {
      toastr.warning("ID de livraison sortie Stock manquant.");
      return;
    }
    try {
      var url = Routing.generate('app_exports_bon_livraison_exports', {
        idLivraison: id
      });
      window.open(url, '_blank');
    } catch (err) {
      console.error("Route non trouvée dans Routing.js :", err);
      toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
    }
  });
  $('body').on('click', '.genererPdfCommandeSortieStock', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    if (!id) {
      toastr.warning("ID de commande ortie Stock manquant.");
      return;
    }
    try {
      var url = Routing.generate('app_exports_commande_exports') + '?id=' + id;
      window.open(url, '_blank');
    } catch (err) {
      console.error("Route non trouvée dans Routing.js :", err);
      toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
    }
  });
  $('body').on('click', '.genererPdfDemandeSortieStock', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    if (!id) {
      toastr.warning("ID de Demande ortie Stock manquant.");
      return;
    }
    try {
      var url = Routing.generate('app_exports_demande_exports') + '?id=' + id;
      window.open(url, '_blank');
    } catch (err) {
      console.error("Route non trouvée dans Routing.js :", err);
      toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_numbe-94d952","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/mouvement/gestion_livraisons.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVtQixDQUFDLEVBQUU7SUFDaEVBLENBQUMsQ0FBQ08sY0FBYyxDQUFDLENBQUM7SUFFbEIsSUFBTS9DLEVBQUUsR0FBR25DLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFJLENBQUNvQixFQUFFLEVBQUU7TUFDTGlDLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDLHFDQUFxQyxDQUFDO01BQ3JEO0lBQ0o7SUFDQSxJQUFJO01BQ0EsSUFBTTdFLEdBQUcsR0FBR08sT0FBTyxDQUFDQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsR0FBRyxNQUFNLEdBQUdxQixFQUFFO01BQ3pFNUIsTUFBTSxDQUFDOEUsSUFBSSxDQUFDL0UsR0FBRyxFQUFFLFFBQVEsQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBT2dGLEdBQUcsRUFBRTtNQUNWMUIsT0FBTyxDQUFDWSxLQUFLLENBQUMscUNBQXFDLEVBQUVjLEdBQUcsQ0FBQztNQUN6RGxCLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDLHlEQUF5RCxDQUFDO0lBQzNFO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vdXZlbWVudC9nZXN0aW9uX2xpdnJhaXNvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRhYmxlID0gJChcIiNsaXZyYWlzb25UYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybCxcclxuICAgICAgcHJvY2Vzc2luZzpcclxuICAgICAgICAnPGkgc3R5bGU9XCJjb2xvcjojNzU5M2FlOyBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZToyNXB4ICFpbXBvcnRhbnQ7XCIgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggZmEtZndcIj48L2k+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+PC9zcGFuPiAnLFxyXG4gICAgfSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImFwcF9mZXRjaF9saXZyYWlzb25zXCIpLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGQuZHJhdyA9IGQuZHJhdyB8fCAwO1xyXG4gICAgICAgIGQuc3RhcnQgPSBkLnN0YXJ0IHx8IDA7XHJcbiAgICAgICAgZC5sZW5ndGggPSBkLmxlbmd0aCB8fCAxNTtcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNyYzogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoanNvbi5hY3Rpb25zKVxyXG4gICAgICAgICAgPyBqc29uLmFjdGlvbnNcclxuICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhqc29uLmFjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBqc29uLmRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyBuYW1lOiBcImwuaWRcIiwgZGF0YTogXCJpZFwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImwuY29kZVwiLFxyXG4gICAgICAgIGRhdGE6IFwibGl2cmFpc29uX2NvZGVcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMC42cmVtOyBjb2xvcjogIzc1OTNhZTsgcGFkZGluZzogMDtcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZGV0YWlsc0xpdnJhaXNvbiR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImwuY3JlYXRlZFwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGF0ZV9saXZyYWlzb25cIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEpLmZvcm1hdChcIkREL01NL1lZWVkgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTpcImwuZGVzY3JpcHRpb25cIiwgZGF0YTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1sZWZ0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkZW0uZGVzaWduYXRpb25BY2Nlc3NcIiwgZGF0YTogXCJkZW1hbmRldXJcIixcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtbGVmdC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImRlbS5kZXNpZ25hdGlvbkFjY2Vzc1wiLCBkYXRhOiBcInJlY2VwdGV1clwiLFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1sZWZ0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwibC5pcHBcIiwgZGF0YTogXCJpcHBfcGF0aWVudFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJsLm5vbV9wYXRpZW50XCIsIGRhdGE6IFwibm9tX3BhdGllbnRcIiAsXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLWxlZnQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImwudHlwZUxpdnJhaXNvblwiLCBkYXRhOiBcInR5cGVfbGl2cmFpc29uX2xhYmVsXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxfbW9udGFudF90dGNcIixcclxuICAgICAgICBkYXRhOiBcInRvdGFsX21vbnRhbnRfdHRjXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyBOdW1iZXIoZGF0YSkudG9Mb2NhbGVTdHJpbmcoXCJmci1GUlwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBcIjAsMDBcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1yaWdodC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwibC51cmdlbnRcIiwgZGF0YTogXCJuaXZlYXVfdXJnZW5jZVwiIH0sXHJcbiAgICAgIFxyXG4gICAgICB7IG5hbWU6IFwic3RhdHVzLmRlc2lnbmF0aW9uXCIsIGRhdGE6IFwibHZfc3RhdHVzXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWN0aW9uc1wiLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgYWN0aW9uc0h0bWwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCInICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1jb250ZW50IGRpdk1lbnVcIiBpZD1cImRpdk1lbnUnICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj4nO1xyXG5cclxuICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICBhY3Rpb25zSHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIke2RhdGEuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiIyR7YWN0aW9uLmlkTmFtZX0ke2RhdGEuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHthY3Rpb24uaWNvbn0gbWVudUljb25cIj48L2k+ICR7YWN0aW9uLm5vbX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBhY3Rpb25zSHRtbCArPSBcIjwvZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgcmV0dXJuIGFjdGlvbnNIdG1sO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmRldGFpbHMtbGl2cmFpc29uXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBsaXZyYWlzb25JZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBgI2RldGFpbHNMaXZyYWlzb24ke2xpdnJhaXNvbklkfWA7XHJcblxyXG4gIGlmICghbGl2cmFpc29uSWQgfHwgISQobW9kYWxTZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCIgTW9kYWwgbm90IGZvdW5kIG9yIElEIG1pc3NpbmdcIiwge1xyXG4gICAgICBsaXZyYWlzb25JZCxcclxuICAgICAgbW9kYWxTZWxlY3RvcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAkKG1vZGFsU2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG4vLyB1cGRhdGUgc3RhdHVzXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYnRuLXZhbGlkZXIsIC5idG4tZ2VuZXJlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaWQgPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICBjb25zdCBhY3Rpb24gPSAkKHRoaXMpLmhhc0NsYXNzKFwiYnRuLXZhbGlkZXJcIikgPyBcInZhbGlkZXJcIiA6IFwiZ2VuZXJlclwiO1xyXG5cclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBgL21vdXZlbWVudC91cGRhdGUtc3RhdHVzYCxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBhY3Rpb24sXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJ2YWxpZGVyXCIpIHtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiTGEgbGl2cmFpc29uIGEgw6l0w6kgdmFsaWTDqWUgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJnZW5lcmVyXCIpIHtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiTGEgbGl2cmFpc29uIGEgw6l0w6kgZ8OpbsOpcsOpZSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMDAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCBcIkVycmV1ciBpbmNvbm51ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBzZXJ2ZXVyICFcIik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgJChcImJvZHlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGNvbnN0ICRwb3B1cCA9ICQoJyNpbXByZXNzaW9uUG9wdXAnKTtcclxuICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKCcudG9nZ2xlSW1wcmVzc2lvblBvcHVwJyk7XHJcblxyXG4gICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJHRvZ2dsZSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgJHBvcHVwLmZhZGVUb2dnbGUoMTUwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlbHNlIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICRwb3B1cC5mYWRlT3V0KDE1MCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmdlbmVyZXJQZGZMaXZyYWlzb25Tb3J0aWVTdG9jaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICB0b2FzdHIud2FybmluZyhcIklEIGRlIGxpdnJhaXNvbiBzb3J0aWUgU3RvY2sgbWFucXVhbnQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXhwb3J0c19ib25fbGl2cmFpc29uX2V4cG9ydHMnLHtcclxuICAgICAgICAgICAgICAgICAgaWRMaXZyYWlzb246IGlkXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSb3V0ZSBub24gdHJvdXbDqWUgZGFucyBSb3V0aW5nLmpzIDpcIiwgZXJyKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlJvdXRlIGludHJvdXZhYmxlLiBBdmV6LXZvdXMgYmllbiBkdW1ww6kgbGVzIHJvdXRlcyBKUyA/XCIpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmdlbmVyZXJQZGZDb21tYW5kZVNvcnRpZVN0b2NrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiSUQgZGUgY29tbWFuZGUgb3J0aWUgU3RvY2sgbWFucXVhbnQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXhwb3J0c19jb21tYW5kZV9leHBvcnRzJykgKyAnP2lkPScgKyBpZDtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSb3V0ZSBub24gdHJvdXbDqWUgZGFucyBSb3V0aW5nLmpzIDpcIiwgZXJyKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlJvdXRlIGludHJvdXZhYmxlLiBBdmV6LXZvdXMgYmllbiBkdW1ww6kgbGVzIHJvdXRlcyBKUyA/XCIpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmdlbmVyZXJQZGZEZW1hbmRlU29ydGllU3RvY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJRCBkZSBEZW1hbmRlIG9ydGllIFN0b2NrIG1hbnF1YW50LlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYXBwX2V4cG9ydHNfZGVtYW5kZV9leHBvcnRzJykgKyAnP2lkPScgKyBpZDtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSb3V0ZSBub24gdHJvdXbDqWUgZGFucyBSb3V0aW5nLmpzIDpcIiwgZXJyKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlJvdXRlIGludHJvdXZhYmxlLiBBdmV6LXZvdXMgYmllbiBkdW1ww6kgbGVzIHJvdXRlcyBKUyA/XCIpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsInVybCIsIndpbmRvdyIsImZyZW5jaEpzb25VcmwiLCJwcm9jZXNzaW5nIiwibGVuZ3RoTWVudSIsInNlcnZlclNpZGUiLCJhamF4IiwiUm91dGluZyIsImdlbmVyYXRlIiwiZGF0YSIsImQiLCJkcmF3Iiwic3RhcnQiLCJsZW5ndGgiLCJkYXRhU3JjIiwianNvbiIsImdsb2JhbEFjdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJhY3Rpb25zIiwiT2JqZWN0IiwidmFsdWVzIiwib3JkZXIiLCJjb2x1bW5zIiwibmFtZSIsInJlbmRlciIsInR5cGUiLCJyb3ciLCJjb25jYXQiLCJpZCIsIm1vbWVudCIsImZvcm1hdCIsImNyZWF0ZWRDZWxsIiwidGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImFjdGlvbnNIdG1sIiwiZm9yRWFjaCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlkTmFtZSIsImljb24iLCJub20iLCJhdXRvV2lkdGgiLCJvbiIsImxpdnJhaXNvbklkIiwiYXR0ciIsIm1vZGFsU2VsZWN0b3IiLCJjb25zb2xlIiwid2FybiIsIm1vZGFsIiwiaGFzQ2xhc3MiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0b2FzdHIiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsIm1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIiRwb3B1cCIsIiR0b2dnbGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZmFkZVRvZ2dsZSIsImZhZGVPdXQiLCJwcmV2ZW50RGVmYXVsdCIsIndhcm5pbmciLCJpZExpdnJhaXNvbiIsIm9wZW4iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9