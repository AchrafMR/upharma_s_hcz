(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_user_affectation"],{

/***/ "./assets/js/settings/userAffectation.js":
/*!***********************************************!*\
  !*** ./assets/js/settings/userAffectation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
var _require = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js"),
  Toaster = _require.Toaster;
$(document).ready(function () {
  // $("select").select2();

  // var userTable = $('#myTable').DataTable({
  //     columnDefs: [ {
  //         orderable: false,
  //         className: 'select-checkbox',
  //         targets:   0
  //     } ],
  //     select: {
  //         style:    'os',
  //         selector: 'td:first-child'
  //     },
  //     lengthMenu: [
  //       [15, 25, 50, -1],
  //       [15, 25, 50, 'All'],
  //   ],
  //     autoWidth: false
  // } );

  // $("#usersCheckAll").click(function(){
  //     $('input:checkbox').not(this).prop('checked', this.checked);

  // });

  $("body").on("click", ".menu-item", function () {
    var id = $(this).attr('id');
    $("body #subMenu" + id).toggle("3s");
  });
  $("body").on("click", ".subMenu-item", function () {
    var id = $(this).attr('id');
    $("body #action" + id).toggle("3s");
  });
  $("body").on("click", "#myTable tbody tr", function () {
    $("#myTable tbody tr").removeClass("colorRow");
    $(this).toggleClass("colorRow");
  });
  $("body").on("click", ".affectUser", function () {
    var idUser = $(".colorRow").attr("id");
    var idSite = $("#dossier").val();
    // alert(idSite);

    if (idUser) {
      $.ajax({
        type: "POST",
        url: "userActions",
        data: {
          idUser: idUser,
          idSite: idSite
        },
        success: function success(data) {
          $("#actionsAffectedToUser").empty();
          $('#dossier').val('').trigger('change');
          $("#affectUser").modal("show");
          // $("#userActions").html(data);
          // $("#showActions").modal("show");
        },

        error: function error() {
          toastr.error("ERROR !");
        }
      });
    } else {
      toastr.warning("Choisir un utilisateur!");
    }
  });
  $("body").on("click", ".saveAffectButton", function () {
    // var users = [];
    var checkedActions = [];
    var uncheckedActions = [];
    var idUser = $(".colorRow").attr("id");
    var idSite = $("#dossier").val();
    // alert(idSite)
    $('input.checkboxAction:checkbox:checked').each(function () {
      checkedActions.push($(this).attr('id').slice(12));
    });
    $('input.checkboxAction:checkbox:not(:checked)').each(function () {
      uncheckedActions.push($(this).attr('id').slice(12));
    });

    // var jsonUsers = JSON.stringify(users);
    var jsonCheckedActions = JSON.stringify(checkedActions);
    var jsonUncheckedActions = JSON.stringify(uncheckedActions);
    var l = ladda.create(document.activeElement);
    l.start();
    $.ajax({
      type: "POST",
      url: "affectUser",
      data: {
        idUser: idUser,
        idSite: idSite,
        jsonCheckedActions: jsonCheckedActions,
        jsonUncheckedActions: jsonUncheckedActions
      },
      success: function success(data) {
        toastr.success(data.affected + " AFFECTE - " + data.notAffected + " NON AFFECTE");
        l.stop();
      },
      error: function error() {
        toastr.error("ERROR !");
        l.stop();
      }
    });
  });
  $("body").on("click", "#btn_affectUser", function (e) {
    var idUser = $(".colorRow").attr("id");
    if (idUser) {
      $("#actionsAffectedToUser").empty();
      $('#dossier').val('').trigger('change');
      $("#affectUser").modal("toggle");
    } else {
      toastr.info("Selectionez un utilisateur svp !");
    }
  });
  console.log("hi");
  $("body").on("change", "#dossier", function () {
    if ($(this).val() != "") {
      $.ajax({
        type: "POST",
        url: "userActions",
        data: {
          idUser: $(".colorRow").attr("id"),
          idSite: $(this).val()
        },
        success: function success(data) {
          // alert("zakaria")
          $("#actionsAffectedToUser").empty().append(data);
        },
        error: function error() {
          toastr.error("ERROR !");
        }
      });
    }
  });
  var id_user;
  var conventionTable = $("#convention_table").DataTable({
    language: {
      "url": window.frenchJsonUrl
    },
    columnDefs: [{
      orderable: false,
      targets: 0
    }],
    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
    pageLength: 10
  });
  $("body").on("click", ".assignConvention", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $.ajax({
        url: "findUser",
        method: "POST",
        data: {
          idUser: id_user,
          convention: true
        },
        success: function success(result) {
          data = result.data;
          $('#user_name').val(data.username);
          $('#user_nom').val(data.name);
          $('#user_profession').val(data.professionDescription);
          $('#convention_table tbody').empty();
          if ($.fn.DataTable.isDataTable('body #convention_table')) {
            $('#convention_table').DataTable().destroy();
          }
          $('body #list_convention').empty().append(result.html);
          conventionTable = $("#convention_table").DataTable({
            language: {
              "url": window.frenchJsonUrl
            },
            columnDefs: [{
              orderable: false,
              targets: 0
            }],
            lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tous"]],
            pageLength: 10
          });
          updateDataTableSelectAllCtrl(conventionTable);
          $("#assign_convention").modal("show");
        },
        error: function error(xhr, status, _error) {
          toastr.error(xhr.responseText);
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $('#convention_table tbody').on('change', 'input[type="checkbox"]:enabled', function () {
    var $row = $(this).closest('tr');
    if (this.checked) {
      $row.addClass('colorRow');
    } else {
      $row.removeClass('colorRow');
    }

    // Update state of "Select all" control
    updateDataTableSelectAllCtrl(conventionTable);
  });
  $('#convention_table tbody').on('click', 'tr', function (event) {
    // Check if the target element is not a checkbox
    if (event.target.type !== 'checkbox') {
      var $checkbox = $(this).find('input[type="checkbox"]:enabled');
      $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
    }
  });

  // Handle click on "Select all" checkbox
  $('#convention_table thead').on('change', 'input[name="select_all"]', function () {
    var checked = this.checked;
    $('#convention_table tbody input[type="checkbox"]:enabled').each(function () {
      if (!this.disabled) {
        if (this.checked !== checked) {
          $(this).prop('checked', checked).trigger('change');
        }
      }
    });
  });
  function updateDataTableSelectAllCtrl(table) {
    var $table = table.table().node();
    var $chkbox_all = $('tbody input[type="checkbox"]:not(:disabled)', $table);
    var $chkbox_checked = $('tbody input[type="checkbox"]:checked:not(:disabled)', $table);
    var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

    // If none of the checkboxes are checked
    if ($chkbox_checked.length === 0) {
      chkbox_select_all.checked = false;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
      }
    } else if ($chkbox_checked.length === $chkbox_all.length) {
      // If all checkboxes are checked
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = false;
      }
    } else {
      // If some checkboxes are checked
      chkbox_select_all.checked = true;
      if ('indeterminate' in chkbox_select_all) {
        chkbox_select_all.indeterminate = true;
      }
    }
  }
  $("body").on("click", ".saveAssignConvention", function () {
    var la = ladda.create(document.activeElement);
    la.start();
    var conventionIds = [];
    $("#convention_table tbody tr").each(function () {
      var checkbox = $(this).find('input[type="checkbox"]');
      if (checkbox.is(':checked')) {
        conventionIds.push(checkbox.val());
      }
    });
    var userConventionData = {
      conventionIds: conventionIds,
      id_user: id_user
    };
    $.ajax({
      url: Routing.generate('app_assign_convention'),
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userConventionData),
      success: function success(result) {
        la.stop();
        toastr.success(result);
        $("#assign_convention").modal("hide");
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        la.stop();
        return toastr.error(jqXHR.responseText);
      }
    });
  });

  // var conventionTable = $('#convention_table').DataTable({
  //     language: {
  //         url: window.frenchJsonUrl,
  //         processing: '<i style="color:#508884; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> ',
  //     },
  //     lengthMenu: [
  //       [10, 50, 100, 200],
  //       [10, 50, 100, 200],
  //   ],
  //     processing: true,
  //     serverSide: true,
  //     ajax: {
  //         url: Routing.generate('app_fetch_convention'),
  //         data: function(d) {
  //             d.draw = d.draw || 0;
  //             d.start = d.start || 0;
  //             d.length = d.length || 15;
  //             // user convention filter
  //             d.user_filter = id_user;
  //         },
  //         beforeSend: function () {
  //           if (conventionTable.hasOwnProperty("settings")) {
  //             var settings = conventionTable.settings();
  //             if (settings[0].jqXHR) {
  //               settings[0].jqXHR.abort();
  //             }
  //           }
  //         },
  //     },
  //     order: [[1, 'asc']],
  //     columns: [
  //         {
  //           data: 'id',
  //           render: function(data, type, row) {
  //               if (type === 'display') {
  //                   if (row.hasConvention) {
  //                       return '<input type="checkbox" checked value="' + data + '">';
  //                   } else {
  //                       return '<input type="checkbox" value="' + data + '">';
  //                   }
  //               }
  //               return data;
  //           },
  //           orderable: false,
  //           searchable: false
  //         },
  //         { name: "org.id", data: "id" },
  //         { name: "org.nom", data: "nom" },
  //     ],
  //     autoWidth: true
  // });

  // // Initialize the rows_selected array
  // var rows_selected = [];

  // // Handle click on table row
  // $('#convention_table tbody').on('click', 'tr', function(event) {
  //     // Check if the target element is not a checkbox, not inside .menuActions, and not the last td
  //     if (event.target.type !== 'checkbox' && !$(event.target).closest('.menuActions').length && !$(event.target).closest('td').is(':last-child')) {
  //         var $checkbox = $(this).find('input[type="checkbox"]:enabled');
  //         $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
  //     }
  // });

  // // Handle change on checkbox
  // $('#convention_table tbody').on('change', 'input[type="checkbox"]:enabled', function() {
  //   var $row = $(this).closest('tr');
  //   var data = conventionTable.row($row).data();
  //   var rowId = data.id;

  //   if (this.checked) {
  //     // Add the organism ID to the selectedConventions array
  //     rows_selected.push(rowId);
  //     $row.addClass('colorRow');
  //   } else {
  //     // Remove the organism ID from the selectedConventions array
  //     var index = rows_selected.indexOf(rowId);
  //     if (index !== -1) {
  //       rows_selected.splice(index, 1);
  //     }
  //     $row.removeClass('colorRow');
  //   }

  //   // Assign or unassign the selected organism to the user
  //   updateConventionAssignment(rowId, this.checked);
  // });

  // var conventionAjaxRequest;

  // function updateConventionAssignment(conventionId, checked) {
  // var userConventionData = {
  //   selectedConvention: conventionId,
  //   id_user: id_user,
  //   checked: checked
  // };

  //   if (conventionAjaxRequest) {
  //     conventionAjaxRequest.abort();
  //   }

  // conventionAjaxRequest = $.ajax({
  //   url: Routing.generate('app_assign_convention'),
  //   method: 'POST',
  //   contentType: 'application/json',
  //   data: JSON.stringify(userConventionData),
  //   success: function(response) {
  //     console.log('Convention assignment updated successfully.');
  //   },
  //   error: function(xhr, status, error) {
  //     console.error('Error updating convention assignment:', error);
  //   }
  // });
  // }

  var caisseTable = $("#caisse_table").DataTable({
    language: {
      "url": window.frenchJsonUrl
    }
  });
  $("body").on("click", ".assignCaisse", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $.ajax({
        url: "findUser",
        method: "POST",
        data: {
          idUser: id_user,
          caisse: true
        },
        success: function success(result) {
          data = result.data;
          $('#user_name_caisse').val(data.username);
          $('#user_nom_caisse').val(data.name);
          $('#user_profession_caisse').val(data.professionDescription);
          if ($.fn.DataTable.isDataTable('body #caisse_table')) {
            $('#caisse_table').DataTable().destroy();
          }
          $('body #list_caisse').empty().append(result.html);
          caisseTable = $("#caisse_table").DataTable({
            language: {
              "url": window.frenchJsonUrl
            }
          });
          $("#caisse_table tbody tr").each(function () {
            if ($(this).find('input[type="checkbox"]').is(':checked')) {
              $(this).addClass('colorRow');
            }
          });
          $("#assign_caisse").modal("show");
        },
        error: function error(xhr, status, _error2) {
          toastr.error(xhr.responseText);
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $("body").on("click", "#caisse_table tbody tr", function () {
    if ($(this).hasClass("colorRow")) {
      $(this).removeClass("colorRow");
      $(this).find('input[type="checkbox"]').prop("checked", false);
    } else {
      caisseTable.$('tr').removeClass("colorRow");
      caisseTable.$('input[type="checkbox"]').prop("checked", false);
      $(this).addClass("colorRow");
      $(this).find('input[type="checkbox"]').prop("checked", true);
    }
  });
  $("body").on("click", ".saveAssignCaisse", function () {
    var _$$ajax;
    var la = ladda.create(document.activeElement);
    la.start();
    var selectedCaisse = caisseTable.rows('.colorRow').data().length > 0 ? caisseTable.rows('.colorRow').data()[0][1] : null;
    $.ajax((_$$ajax = {
      type: "POST",
      url: Routing.generate("app_assign_caisse"),
      contentType: 'application/json',
      data: JSON.stringify({
        selectedCaisse: selectedCaisse,
        id_user: id_user
      }),
      processData: false
    }, _defineProperty(_$$ajax, "contentType", false), _defineProperty(_$$ajax, "success", function success(result) {
      la.stop();
      toastr.success(result);
      $("#assign_caisse").modal("hide");
    }), _defineProperty(_$$ajax, "error", function error(jqXHR, textStatus, errorThrown) {
      la.stop();
      return toastr.error(jqXHR.responseText);
    }), _$$ajax));
  });
  $("body").on("click", ".duplicate", function () {
    id_user = $(".colorRow").attr("id");
    // alert(id_user);

    if (id_user) {
      $("#duplicate_user").modal("show");
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
  $("body").on("submit", "#duplicateUserForm", function (e) {
    e.preventDefault();
    id_user = $(".colorRow").attr("id");
    var username = $("#duplicated_username").val();
    var name = $("#duplicated_nom").val();
    var password = $("#duplicated_password").val();
    if (id_user) {
      var userData = {
        id_user: id_user,
        username: username,
        name: name,
        password: password
      };
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: Routing.generate('app_duplicate_user'),
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function success(data) {
          toastr.success("Utilisateur dupliqué avec succès");
          l.stop();
          $("#duplicate_user").modal("hide");
          $("#duplicated_username").val("");
          $("#duplicated_nom").val("");
          $("#duplicated_password").val("");
          if ($.fn.dataTable.isDataTable("#myTable")) {
            $('#myTable').DataTable().clear().destroy();
          }
          $("#listUsers").html(data.html);
          $("#myTable").DataTable({
            lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
            "autoWidth": false
          });
        },
        error: function error(xhr, status, _error3) {
          toastr.error(xhr.responseText);
          l.stop();
        }
      });
    } else {
      toastr.info("Choisir un utilisateur!");
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-cce63f","vendors-node_modules_react-hot-toast_dist_index_js","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/userAffectation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsQ0FBQztVQUM3QztVQUVBaEUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDaUUsSUFBSSxDQUFDbEQsSUFBSSxDQUFDa0QsSUFBSSxDQUFDO1VBRS9CakUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDK0MsU0FBUyxDQUFDO1lBQ3RCTyxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQ3RCO1lBQ0MsV0FBVyxFQUFFO1VBQ2YsQ0FBQyxDQUFDO1FBRU4sQ0FBQztRQUNEbEMsS0FBSyxFQUFFLFNBQUFBLE1BQVMrQyxHQUFHLEVBQUVDLE1BQU0sRUFBRWhELE9BQUssRUFBRTtVQUNoQ0MsTUFBTSxDQUFDRCxLQUFLLENBQUMrQyxHQUFHLENBQUNFLFlBQVksQ0FBQztVQUM5QnJDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUM7UUFDWjtNQUNKLENBQUMsQ0FBQztJQUVOLENBQUMsTUFDRztNQUNGbEIsTUFBTSxDQUFDb0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDO0VBRUYsQ0FBQyxDQUFDO0FBV04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NldHRpbmdzL3VzZXJBZmZlY3RhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFRvYXN0ZXIgfSA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtdG9hc3RcIik7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgLy8gJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcblxyXG4gIC8vIHZhciB1c2VyVGFibGUgPSAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgLy8gICAgIGNvbHVtbkRlZnM6IFsge1xyXG4gIC8vICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAvLyAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgLy8gICAgICAgICB0YXJnZXRzOiAgIDBcclxuICAvLyAgICAgfSBdLFxyXG4gIC8vICAgICBzZWxlY3Q6IHtcclxuICAvLyAgICAgICAgIHN0eWxlOiAgICAnb3MnLFxyXG4gIC8vICAgICAgICAgc2VsZWN0b3I6ICd0ZDpmaXJzdC1jaGlsZCdcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgbGVuZ3RoTWVudTogW1xyXG4gIC8vICAgICAgIFsxNSwgMjUsIDUwLCAtMV0sXHJcbiAgLy8gICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAvLyAgIF0sXHJcbiAgLy8gICAgIGF1dG9XaWR0aDogZmFsc2VcclxuICAvLyB9ICk7XHJcblxyXG4gIC8vICQoXCIjdXNlcnNDaGVja0FsbFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIC8vICAgICAkKCdpbnB1dDpjaGVja2JveCcpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuXHJcbiAgLy8gfSk7XHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLm1lbnUtaXRlbVwiLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgJChcImJvZHkgI3N1Yk1lbnVcIitpZCkudG9nZ2xlKFwiM3NcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLnN1Yk1lbnUtaXRlbVwiLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICQoXCJib2R5ICNhY3Rpb25cIitpZCkudG9nZ2xlKFwiM3NcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiI215VGFibGUgdGJvZHkgdHJcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgJChcIiNteVRhYmxlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFwiY29sb3JSb3dcIilcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImNvbG9yUm93XCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5hZmZlY3RVc2VyXCIsZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGlkVXNlciA9ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpO1xyXG4gICAgICB2YXIgaWRTaXRlID0gJChcIiNkb3NzaWVyXCIpLnZhbCgpO1xyXG4gICAgICAvLyBhbGVydChpZFNpdGUpO1xyXG5cclxuICAgICAgaWYoaWRVc2VyKXtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOlwidXNlckFjdGlvbnNcIixcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBpZFVzZXI6IGlkVXNlcixcclxuICAgICAgICAgICAgaWRTaXRlOmlkU2l0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICQoXCIjYWN0aW9uc0FmZmVjdGVkVG9Vc2VyXCIpLmVtcHR5KClcclxuICAgICAgICAgICAgJCgnI2Rvc3NpZXInKS52YWwoJycpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAkKFwiI2FmZmVjdFVzZXJcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAvLyAkKFwiI3VzZXJBY3Rpb25zXCIpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICQoXCIjc2hvd0FjdGlvbnNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJFUlJPUiAhXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRvYXN0ci53YXJuaW5nKFwiQ2hvaXNpciB1biB1dGlsaXNhdGV1ciFcIilcclxuICAgICAgfVxyXG5cclxuXHJcbiAgfSlcclxuXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5zYXZlQWZmZWN0QnV0dG9uXCIsZnVuY3Rpb24oKXtcclxuICAgIC8vIHZhciB1c2VycyA9IFtdO1xyXG4gICAgdmFyIGNoZWNrZWRBY3Rpb25zID0gW107XHJcbiAgICB2YXIgdW5jaGVja2VkQWN0aW9ucyA9IFtdO1xyXG4gICAgdmFyIGlkVXNlciA9ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpO1xyXG4gICAgdmFyIGlkU2l0ZSA9ICQoXCIjZG9zc2llclwiKS52YWwoKTtcclxuICAgIC8vIGFsZXJ0KGlkU2l0ZSlcclxuICAgICQoJ2lucHV0LmNoZWNrYm94QWN0aW9uOmNoZWNrYm94OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hlY2tlZEFjdGlvbnMucHVzaCgkKHRoaXMpLmF0dHIoJ2lkJykuc2xpY2UoMTIpKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2lucHV0LmNoZWNrYm94QWN0aW9uOmNoZWNrYm94Om5vdCg6Y2hlY2tlZCknKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB1bmNoZWNrZWRBY3Rpb25zLnB1c2goJCh0aGlzKS5hdHRyKCdpZCcpLnNsaWNlKDEyKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB2YXIganNvblVzZXJzID0gSlNPTi5zdHJpbmdpZnkodXNlcnMpO1xyXG4gICAgdmFyIGpzb25DaGVja2VkQWN0aW9ucyA9IEpTT04uc3RyaW5naWZ5KGNoZWNrZWRBY3Rpb25zKTtcclxuICAgIHZhciBqc29uVW5jaGVja2VkQWN0aW9ucyA9IEpTT04uc3RyaW5naWZ5KHVuY2hlY2tlZEFjdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IGwgPSBsYWRkYS5jcmVhdGUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgbC5zdGFydCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCJhZmZlY3RVc2VyXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkVXNlcjppZFVzZXIsXHJcbiAgICAgICAgICAgIGlkU2l0ZTppZFNpdGUsXHJcbiAgICAgICAgICAgIGpzb25DaGVja2VkQWN0aW9uczoganNvbkNoZWNrZWRBY3Rpb25zLFxyXG4gICAgICAgICAgICBqc29uVW5jaGVja2VkQWN0aW9uczoganNvblVuY2hlY2tlZEFjdGlvbnMsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLmFmZmVjdGVkICsgXCIgQUZGRUNURSAtIFwiICsgZGF0YS5ub3RBZmZlY3RlZCArIFwiIE5PTiBBRkZFQ1RFXCIpO1xyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRVJST1IgIVwiKVxyXG4gICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIiNidG5fYWZmZWN0VXNlclwiLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICB2YXIgaWRVc2VyID0gJChcIi5jb2xvclJvd1wiKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgaWYoaWRVc2VyKXtcclxuICAgICAgJChcIiNhY3Rpb25zQWZmZWN0ZWRUb1VzZXJcIikuZW1wdHkoKVxyXG4gICAgICAkKCcjZG9zc2llcicpLnZhbCgnJykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICQoXCIjYWZmZWN0VXNlclwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRvYXN0ci5pbmZvKFwiU2VsZWN0aW9uZXogdW4gdXRpbGlzYXRldXIgc3ZwICFcIik7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsXCIjZG9zc2llclwiLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCQodGhpcykudmFsKCkgIT0gXCJcIil7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCJ1c2VyQWN0aW9uc1wiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpZFVzZXI6ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpLFxyXG4gICAgICAgICAgICBpZFNpdGU6ICQodGhpcykudmFsKCksXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAvLyBhbGVydChcInpha2FyaWFcIilcclxuICAgICAgICAgICAgJChcIiNhY3Rpb25zQWZmZWN0ZWRUb1VzZXJcIikuZW1wdHkoKS5hcHBlbmQoZGF0YSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVSUk9SICFcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICB2YXIgaWRfdXNlcjtcclxuXHJcbiAgdmFyIGNvbnZlbnRpb25UYWJsZSA9ICQoXCIjY29udmVudGlvbl90YWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIFwidXJsXCI6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDAgfVxyXG4gICAgICBdLFxyXG4gICAgICBsZW5ndGhNZW51OiBbWzEwLCAyNSwgNTAsIDEwMCwgLTFdLCBbMTAsIDI1LCA1MCwgMTAwLCBcIlRvdXNcIl1dLFxyXG4gICAgICBwYWdlTGVuZ3RoOiAxMFxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLmFzc2lnbkNvbnZlbnRpb25cIixmdW5jdGlvbigpe1xyXG4gICAgaWRfdXNlciA9ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpO1xyXG4gICAgLy8gYWxlcnQoaWRfdXNlcik7XHJcblxyXG4gICAgaWYoaWRfdXNlcil7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImZpbmRVc2VyXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkVXNlcjogaWRfdXNlcixcclxuICAgICAgICAgICAgICAgIGNvbnZlbnRpb246IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyN1c2VyX25hbWUnKS52YWwoZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdXNlcl9ub20nKS52YWwoZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICQoJyN1c2VyX3Byb2Zlc3Npb24nKS52YWwoZGF0YS5wcm9mZXNzaW9uRGVzY3JpcHRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjY29udmVudGlvbl90YWJsZSB0Ym9keScpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCdib2R5ICNjb252ZW50aW9uX3RhYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2NvbnZlbnRpb25fdGFibGUnKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnYm9keSAjbGlzdF9jb252ZW50aW9uJykuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnZlbnRpb25UYWJsZSA9ICQoXCIjY29udmVudGlvbl90YWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiAwIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtbMTAsIDI1LCA1MCwgMTAwLCAtMV0sIFsxMCwgMjUsIDUwLCAxMDAsIFwiVG91c1wiXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogMTBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFUYWJsZVNlbGVjdEFsbEN0cmwoY29udmVudGlvblRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Fzc2lnbl9jb252ZW50aW9uXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0b2FzdHIuaW5mbyhcIkNob2lzaXIgdW4gdXRpbGlzYXRldXIhXCIpXHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gICQoJyNjb252ZW50aW9uX3RhYmxlIHRib2R5Jykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06ZW5hYmxlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRyb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAkcm93LmFkZENsYXNzKCdjb2xvclJvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJHJvdy5yZW1vdmVDbGFzcygnY29sb3JSb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgc3RhdGUgb2YgXCJTZWxlY3QgYWxsXCIgY29udHJvbFxyXG4gICAgdXBkYXRlRGF0YVRhYmxlU2VsZWN0QWxsQ3RybChjb252ZW50aW9uVGFibGUpO1xyXG4gIH0pXHJcblxyXG4gICQoJyNjb252ZW50aW9uX3RhYmxlIHRib2R5Jykub24oJ2NsaWNrJywgJ3RyJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBub3QgYSBjaGVja2JveFxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC50eXBlICE9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgdmFyICRjaGVja2JveCA9ICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmVuYWJsZWQnKTtcclxuICAgICAgICAkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsICEkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gSGFuZGxlIGNsaWNrIG9uIFwiU2VsZWN0IGFsbFwiIGNoZWNrYm94XHJcbiAgJCgnI2NvbnZlbnRpb25fdGFibGUgdGhlYWQnKS5vbignY2hhbmdlJywgJ2lucHV0W25hbWU9XCJzZWxlY3RfYWxsXCJdJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcclxuICAgICQoJyNjb252ZW50aW9uX3RhYmxlIHRib2R5IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTplbmFibGVkJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkICE9PSBjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRGF0YVRhYmxlU2VsZWN0QWxsQ3RybCh0YWJsZSkge1xyXG4gICAgdmFyICR0YWJsZSA9IHRhYmxlLnRhYmxlKCkubm9kZSgpO1xyXG4gICAgdmFyICRjaGtib3hfYWxsID0gJCgndGJvZHkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpJywgJHRhYmxlKTtcclxuICAgIHZhciAkY2hrYm94X2NoZWNrZWQgPSAkKCd0Ym9keSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpub3QoOmRpc2FibGVkKScsICR0YWJsZSk7XHJcbiAgICB2YXIgY2hrYm94X3NlbGVjdF9hbGwgPSAkKCd0aGVhZCBpbnB1dFtuYW1lPVwic2VsZWN0X2FsbFwiXScsICR0YWJsZSkuZ2V0KDApO1xyXG5cclxuICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcclxuICAgIGlmICgkY2hrYm94X2NoZWNrZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY2hrYm94X3NlbGVjdF9hbGwuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgnaW5kZXRlcm1pbmF0ZScgaW4gY2hrYm94X3NlbGVjdF9hbGwpIHtcclxuICAgICAgICBjaGtib3hfc2VsZWN0X2FsbC5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgkY2hrYm94X2NoZWNrZWQubGVuZ3RoID09PSAkY2hrYm94X2FsbC5sZW5ndGgpIHtcclxuICAgICAgICAvLyBJZiBhbGwgY2hlY2tib3hlcyBhcmUgY2hlY2tlZFxyXG4gICAgICAgIGNoa2JveF9zZWxlY3RfYWxsLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICgnaW5kZXRlcm1pbmF0ZScgaW4gY2hrYm94X3NlbGVjdF9hbGwpIHtcclxuICAgICAgICBjaGtib3hfc2VsZWN0X2FsbC5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBzb21lIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWRcclxuICAgICAgICBjaGtib3hfc2VsZWN0X2FsbC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoJ2luZGV0ZXJtaW5hdGUnIGluIGNoa2JveF9zZWxlY3RfYWxsKSB7XHJcbiAgICAgICAgY2hrYm94X3NlbGVjdF9hbGwuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLFwiLnNhdmVBc3NpZ25Db252ZW50aW9uXCIsZnVuY3Rpb24oKXtcclxuXHJcbiAgICBjb25zdCBsYSA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgIGxhLnN0YXJ0KCk7XHJcblxyXG4gICAgdmFyIGNvbnZlbnRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAkKFwiI2NvbnZlbnRpb25fdGFibGUgdGJvZHkgdHJcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgY29udmVudGlvbklkcy5wdXNoKGNoZWNrYm94LnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdXNlckNvbnZlbnRpb25EYXRhID0ge1xyXG4gICAgICBjb252ZW50aW9uSWRzOiBjb252ZW50aW9uSWRzLFxyXG4gICAgICBpZF91c2VyOiBpZF91c2VyXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2Fzc2lnbl9jb252ZW50aW9uJyksXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1c2VyQ29udmVudGlvbkRhdGEpLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgbGEuc3RvcCgpO1xyXG5cclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAkKFwiI2Fzc2lnbl9jb252ZW50aW9uXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgbGEuc3RvcCgpO1xyXG4gICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIHZhciBjb252ZW50aW9uVGFibGUgPSAkKCcjY29udmVudGlvbl90YWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgLy8gICAgIGxhbmd1YWdlOiB7XHJcbiAgLy8gICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsLFxyXG4gIC8vICAgICAgICAgcHJvY2Vzc2luZzogJzxpIHN0eWxlPVwiY29sb3I6IzUwODg4NDsgbWFyZ2luLXRvcDoxMDBweCAhaW1wb3J0YW50OyBmb250LXNpemU6MjVweCAhaW1wb3J0YW50O1wiIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTN4IGZhLWZ3XCI+PC9pPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPjwvc3Bhbj4gJyxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgbGVuZ3RoTWVudTogW1xyXG4gIC8vICAgICAgIFsxMCwgNTAsIDEwMCwgMjAwXSxcclxuICAvLyAgICAgICBbMTAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgLy8gICBdLFxyXG4gIC8vICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gIC8vICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gIC8vICAgICBhamF4OiB7XHJcbiAgLy8gICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mZXRjaF9jb252ZW50aW9uJyksXHJcbiAgLy8gICAgICAgICBkYXRhOiBmdW5jdGlvbihkKSB7XHJcbiAgLy8gICAgICAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbiAgLy8gICAgICAgICAgICAgZC5zdGFydCA9IGQuc3RhcnQgfHwgMDtcclxuICAvLyAgICAgICAgICAgICBkLmxlbmd0aCA9IGQubGVuZ3RoIHx8IDE1O1xyXG4gIC8vICAgICAgICAgICAgIC8vIHVzZXIgY29udmVudGlvbiBmaWx0ZXJcclxuICAvLyAgICAgICAgICAgICBkLnVzZXJfZmlsdGVyID0gaWRfdXNlcjtcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgICAgIGlmIChjb252ZW50aW9uVGFibGUuaGFzT3duUHJvcGVydHkoXCJzZXR0aW5nc1wiKSkge1xyXG4gIC8vICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGNvbnZlbnRpb25UYWJsZS5zZXR0aW5ncygpO1xyXG4gIC8vICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gIC8vICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgLy8gICAgIGNvbHVtbnM6IFtcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgZGF0YTogJ2lkJyxcclxuICAvLyAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCByb3cpIHtcclxuICAvLyAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGlzcGxheScpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICBpZiAocm93Lmhhc0NvbnZlbnRpb24pIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCB2YWx1ZT1cIicgKyBkYXRhICsgJ1wiPic7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCInICsgZGF0YSArICdcIj4nO1xyXG4gIC8vICAgICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gIC8vICAgICAgICAgICB9LFxyXG4gIC8vICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gIC8vICAgICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZVxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICAgIHsgbmFtZTogXCJvcmcuaWRcIiwgZGF0YTogXCJpZFwiIH0sXHJcbiAgLy8gICAgICAgICB7IG5hbWU6IFwib3JnLm5vbVwiLCBkYXRhOiBcIm5vbVwiIH0sXHJcbiAgLy8gICAgIF0sXHJcbiAgLy8gICAgIGF1dG9XaWR0aDogdHJ1ZVxyXG4gIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gLy8gSW5pdGlhbGl6ZSB0aGUgcm93c19zZWxlY3RlZCBhcnJheVxyXG4gICAgLy8gdmFyIHJvd3Nfc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAvLyAvLyBIYW5kbGUgY2xpY2sgb24gdGFibGUgcm93XHJcbiAgICAvLyAkKCcjY29udmVudGlvbl90YWJsZSB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIG5vdCBhIGNoZWNrYm94LCBub3QgaW5zaWRlIC5tZW51QWN0aW9ucywgYW5kIG5vdCB0aGUgbGFzdCB0ZFxyXG4gICAgLy8gICAgIGlmIChldmVudC50YXJnZXQudHlwZSAhPT0gJ2NoZWNrYm94JyAmJiAhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5tZW51QWN0aW9ucycpLmxlbmd0aCAmJiAhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ3RkJykuaXMoJzpsYXN0LWNoaWxkJykpIHtcclxuICAgIC8vICAgICAgICAgdmFyICRjaGVja2JveCA9ICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmVuYWJsZWQnKTtcclxuICAgIC8vICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCAhJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gLy8gSGFuZGxlIGNoYW5nZSBvbiBjaGVja2JveFxyXG4gICAgLy8gJCgnI2NvbnZlbnRpb25fdGFibGUgdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTplbmFibGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIHZhciAkcm93ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG4gICAgLy8gICB2YXIgZGF0YSA9IGNvbnZlbnRpb25UYWJsZS5yb3coJHJvdykuZGF0YSgpO1xyXG4gICAgLy8gICB2YXIgcm93SWQgPSBkYXRhLmlkO1xyXG5cclxuICAgIC8vICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgLy8gICAgIC8vIEFkZCB0aGUgb3JnYW5pc20gSUQgdG8gdGhlIHNlbGVjdGVkQ29udmVudGlvbnMgYXJyYXlcclxuICAgIC8vICAgICByb3dzX3NlbGVjdGVkLnB1c2gocm93SWQpO1xyXG4gICAgLy8gICAgICRyb3cuYWRkQ2xhc3MoJ2NvbG9yUm93Jyk7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgLy8gUmVtb3ZlIHRoZSBvcmdhbmlzbSBJRCBmcm9tIHRoZSBzZWxlY3RlZENvbnZlbnRpb25zIGFycmF5XHJcbiAgICAvLyAgICAgdmFyIGluZGV4ID0gcm93c19zZWxlY3RlZC5pbmRleE9mKHJvd0lkKTtcclxuICAgIC8vICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAvLyAgICAgICByb3dzX3NlbGVjdGVkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICRyb3cucmVtb3ZlQ2xhc3MoJ2NvbG9yUm93Jyk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC8vIEFzc2lnbiBvciB1bmFzc2lnbiB0aGUgc2VsZWN0ZWQgb3JnYW5pc20gdG8gdGhlIHVzZXJcclxuICAgIC8vICAgdXBkYXRlQ29udmVudGlvbkFzc2lnbm1lbnQocm93SWQsIHRoaXMuY2hlY2tlZCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyB2YXIgY29udmVudGlvbkFqYXhSZXF1ZXN0O1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZUNvbnZlbnRpb25Bc3NpZ25tZW50KGNvbnZlbnRpb25JZCwgY2hlY2tlZCkge1xyXG4gICAgICAvLyB2YXIgdXNlckNvbnZlbnRpb25EYXRhID0ge1xyXG4gICAgICAvLyAgIHNlbGVjdGVkQ29udmVudGlvbjogY29udmVudGlvbklkLFxyXG4gICAgICAvLyAgIGlkX3VzZXI6IGlkX3VzZXIsXHJcbiAgICAgIC8vICAgY2hlY2tlZDogY2hlY2tlZFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgIC8vICAgaWYgKGNvbnZlbnRpb25BamF4UmVxdWVzdCkge1xyXG4gICAgLy8gICAgIGNvbnZlbnRpb25BamF4UmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgICAvLyBjb252ZW50aW9uQWpheFJlcXVlc3QgPSAkLmFqYXgoe1xyXG4gICAgICAvLyAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2Fzc2lnbl9jb252ZW50aW9uJyksXHJcbiAgICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgLy8gICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1c2VyQ29udmVudGlvbkRhdGEpLFxyXG4gICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnQ29udmVudGlvbiBhc3NpZ25tZW50IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY29udmVudGlvbiBhc3NpZ25tZW50OicsIGVycm9yKTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICB2YXIgY2Fpc3NlVGFibGUgPSAkKFwiI2NhaXNzZV90YWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIFwidXJsXCI6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsXCIuYXNzaWduQ2Fpc3NlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgaWRfdXNlciA9ICQoXCIuY29sb3JSb3dcIikuYXR0cihcImlkXCIpO1xyXG4gICAgICAvLyBhbGVydChpZF91c2VyKTtcclxuXHJcbiAgICAgIGlmKGlkX3VzZXIpe1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6IFwiZmluZFVzZXJcIixcclxuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgaWRVc2VyOiBpZF91c2VyLFxyXG4gICAgICAgICAgICAgICAgICBjYWlzc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjdXNlcl9uYW1lX2NhaXNzZScpLnZhbChkYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI3VzZXJfbm9tX2NhaXNzZScpLnZhbChkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjdXNlcl9wcm9mZXNzaW9uX2NhaXNzZScpLnZhbChkYXRhLnByb2Zlc3Npb25EZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2NhaXNzZV90YWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2NhaXNzZV90YWJsZScpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnYm9keSAjbGlzdF9jYWlzc2UnKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjYWlzc2VUYWJsZSA9ICQoXCIjY2Fpc3NlX3RhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKFwiI2NhaXNzZV90YWJsZSB0Ym9keSB0clwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjb2xvclJvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQoXCIjYXNzaWduX2NhaXNzZVwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0b2FzdHIuaW5mbyhcIkNob2lzaXIgdW4gdXRpbGlzYXRldXIhXCIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNjYWlzc2VfdGFibGUgdGJvZHkgdHJcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImNvbG9yUm93XCIpKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY29sb3JSb3dcIik7XHJcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2Fpc3NlVGFibGUuJCgndHInKS5yZW1vdmVDbGFzcyhcImNvbG9yUm93XCIpO1xyXG4gICAgICAgICAgY2Fpc3NlVGFibGUuJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjb2xvclJvd1wiKTtcclxuICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuc2F2ZUFzc2lnbkNhaXNzZVwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICBjb25zdCBsYSA9IGxhZGRhLmNyZWF0ZShkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgbGEuc3RhcnQoKTtcclxuXHJcbiAgICAgIGxldCBzZWxlY3RlZENhaXNzZSA9IGNhaXNzZVRhYmxlLnJvd3MoJy5jb2xvclJvdycpLmRhdGEoKS5sZW5ndGggPiAwID8gY2Fpc3NlVGFibGUucm93cygnLmNvbG9yUm93JykuZGF0YSgpWzBdWzFdIDogbnVsbDtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiYXBwX2Fzc2lnbl9jYWlzc2VcIiksXHJcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ2Fpc3NlOiBzZWxlY3RlZENhaXNzZSxcclxuICAgICAgICAgICAgaWRfdXNlcjogaWRfdXNlcixcclxuICAgICAgICB9KSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGxhLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICQoXCIjYXNzaWduX2NhaXNzZVwiKS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIGxhLnN0b3AoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcIi5kdXBsaWNhdGVcIixmdW5jdGlvbigpe1xyXG4gICAgICBpZF91c2VyID0gJChcIi5jb2xvclJvd1wiKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgIC8vIGFsZXJ0KGlkX3VzZXIpO1xyXG5cclxuICAgICAgaWYoaWRfdXNlcil7XHJcbiAgICAgICAgICAkKFwiI2R1cGxpY2F0ZV91c2VyXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRvYXN0ci5pbmZvKFwiQ2hvaXNpciB1biB1dGlsaXNhdGV1ciFcIilcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIjZHVwbGljYXRlVXNlckZvcm1cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZF91c2VyID0gJChcIi5jb2xvclJvd1wiKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgICB2YXIgdXNlcm5hbWUgPSAkKFwiI2R1cGxpY2F0ZWRfdXNlcm5hbWVcIikudmFsKCk7XHJcbiAgICAgIHZhciBuYW1lID0gJChcIiNkdXBsaWNhdGVkX25vbVwiKS52YWwoKTtcclxuICAgICAgdmFyIHBhc3N3b3JkID0gJChcIiNkdXBsaWNhdGVkX3Bhc3N3b3JkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgaWYoaWRfdXNlcil7XHJcblxyXG4gICAgICAgICAgdmFyIHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBpZF91c2VyOiBpZF91c2VyLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBsID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgbC5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2R1cGxpY2F0ZV91c2VyJyksXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlV0aWxpc2F0ZXVyIGR1cGxpcXXDqSBhdmVjIHN1Y2PDqHNcIik7XHJcbiAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2R1cGxpY2F0ZV91c2VyXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNkdXBsaWNhdGVkX3VzZXJuYW1lXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNkdXBsaWNhdGVkX25vbVwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZHVwbGljYXRlZF9wYXNzd29yZFwiKS52YWwoXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoICQuZm4uZGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI215VGFibGVcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI215VGFibGUnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNsaXN0VXNlcnNcIikuaHRtbChkYXRhLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJChcIiNteVRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsIC0xXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAnQWxsJ10sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvV2lkdGhcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcih4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgdG9hc3RyLmluZm8oXCJDaG9pc2lyIHVuIHV0aWxpc2F0ZXVyIVwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sIm5hbWVzIjpbIl9yZXF1aXJlIiwicmVxdWlyZSIsIlRvYXN0ZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiaWQiLCJhdHRyIiwidG9nZ2xlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImlkVXNlciIsImlkU2l0ZSIsInZhbCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJlbXB0eSIsInRyaWdnZXIiLCJtb2RhbCIsImVycm9yIiwidG9hc3RyIiwid2FybmluZyIsImNoZWNrZWRBY3Rpb25zIiwidW5jaGVja2VkQWN0aW9ucyIsImVhY2giLCJwdXNoIiwic2xpY2UiLCJqc29uQ2hlY2tlZEFjdGlvbnMiLCJKU09OIiwic3RyaW5naWZ5IiwianNvblVuY2hlY2tlZEFjdGlvbnMiLCJsIiwibGFkZGEiLCJjcmVhdGUiLCJhY3RpdmVFbGVtZW50Iiwic3RhcnQiLCJhZmZlY3RlZCIsIm5vdEFmZmVjdGVkIiwic3RvcCIsImUiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImFwcGVuZCIsImlkX3VzZXIiLCJjb252ZW50aW9uVGFibGUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsIndpbmRvdyIsImZyZW5jaEpzb25VcmwiLCJjb2x1bW5EZWZzIiwib3JkZXJhYmxlIiwidGFyZ2V0cyIsImxlbmd0aE1lbnUiLCJwYWdlTGVuZ3RoIiwibWV0aG9kIiwiY29udmVudGlvbiIsInJlc3VsdCIsInVzZXJuYW1lIiwibmFtZSIsInByb2Zlc3Npb25EZXNjcmlwdGlvbiIsImZuIiwiaXNEYXRhVGFibGUiLCJkZXN0cm95IiwiaHRtbCIsInVwZGF0ZURhdGFUYWJsZVNlbGVjdEFsbEN0cmwiLCJ4aHIiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCIkcm93IiwiY2xvc2VzdCIsImNoZWNrZWQiLCJhZGRDbGFzcyIsImV2ZW50IiwidGFyZ2V0IiwiJGNoZWNrYm94IiwiZmluZCIsInByb3AiLCJkaXNhYmxlZCIsInRhYmxlIiwiJHRhYmxlIiwibm9kZSIsIiRjaGtib3hfYWxsIiwiJGNoa2JveF9jaGVja2VkIiwiY2hrYm94X3NlbGVjdF9hbGwiLCJnZXQiLCJsZW5ndGgiLCJpbmRldGVybWluYXRlIiwibGEiLCJjb252ZW50aW9uSWRzIiwiY2hlY2tib3giLCJpcyIsInVzZXJDb252ZW50aW9uRGF0YSIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImNvbnRlbnRUeXBlIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJjYWlzc2VUYWJsZSIsImNhaXNzZSIsImhhc0NsYXNzIiwiXyQkYWpheCIsInNlbGVjdGVkQ2Fpc3NlIiwicm93cyIsInByb2Nlc3NEYXRhIiwiX2RlZmluZVByb3BlcnR5IiwicHJldmVudERlZmF1bHQiLCJwYXNzd29yZCIsInVzZXJEYXRhIiwiZGF0YVRhYmxlIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9