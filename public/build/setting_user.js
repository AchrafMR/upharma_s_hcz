(self["webpackChunk"] = self["webpackChunk"] || []).push([["setting_user"],{

/***/ "./assets/js/settings/user.js":
/*!************************************!*\
  !*** ./assets/js/settings/user.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
$(document).ready(function () {
  $("select").select2();
  $('#myTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
    "autoWidth": false
  });
  $("body").on("click", ".activateUser", function () {
    var id = $(this).attr("data-id");
    $.ajax({
      url: "activateUser",
      method: "POST",
      data: {
        idUser: id
      },
      success: function success(data) {
        if ($.fn.dataTable.isDataTable("#myTable")) {
          $('#myTable').DataTable().clear().destroy();
        }
        $("#listUsers").html(data.html);
        $("#myTable").DataTable({
          lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
          "autoWidth": false
        });
        toastr.success(data.message);
      }
    });
  });
  $("body").on("click", ".deleteUser", function () {
    var id = $(this).attr("data-id");
    $.ajax({
      url: "deleteUser",
      method: "POST",
      data: {
        idUser: id
      },
      success: function success(data) {
        if ($.fn.dataTable.isDataTable("#myTable")) {
          $('#myTable').DataTable().clear().destroy();
        }
        $("#listUsers").html(data.html);
        $("#myTable").DataTable({
          lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
          "autoWidth": false
        });
        $("#closeAddUser").click();
        toastr.success(data.message);
      }
    });
  });
  $(".saveAddUser").on("click", function () {
    var username = $("#username").val();
    var nom = $("#nom").val();
    var password = $("#password").val();
    var routeName = $("#routeName").val();
    var status = $('input[name="status"]:checked').val();
    var profession = $("#profession").val();
    if (password == "") {
      $("#password").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#password").attr('style', "border: 1px solid #gray !important");
    }
    if (username == "") {
      $("#username").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#username").attr('style', "border: 1px solid lightgray  !important");
    }
    if (nom == "") {
      $("#name").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#name").attr('style', "border: 1px solid lightgray  !important");
    }
    if (profession == "") {
      $("#select2-profession-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-profession-container").parent().css("border", "1px solid lightgray ");
    }
    if (password != "" && username != "" && nom != "" && profession != "") {
      var la = ladda.create(document.activeElement);
      la.start();
      $.ajax({
        url: "addUser",
        method: "POST",
        data: {
          username: username,
          nom: nom,
          password: password,
          status: status,
          profession: profession,
          routeName: routeName
        },
        success: function success(data) {
          if (data != "USER ALREDY EXIST") {
            if ($.fn.dataTable.isDataTable("#myTable")) {
              $('#myTable').DataTable().clear().destroy();
            }
            $("#listUsers").html(data);
            $("#myTable").DataTable({
              lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
              "autoWidth": false
            });
            $("#closeAddUser").click();
            toastr.success("Utilisateur ajouté avec success");
            la.stop();
          } else {
            toastr.error("Le nom d'utilisateur déja exist !");
            la.stop();
          }
        }
      });
    }
  });
  $("body").on("click", ".updateBtn", function () {
    var idUser = $(this).attr("id").slice(13);
    $.ajax({
      url: "findUser",
      method: "POST",
      data: {
        idUser: idUser
      },
      success: function success(data) {
        $("#idUser").val(data.id);
        $("#usernameUpd").val(data.username);
        $("#nomUpd").val(data.nom);
        $("#routeNameUpd").val(data.route);
        if (data.status) {
          $("#active").prop("checked", "checked");
        } else {
          $("#desactive").prop("checked", "checked");
        }
        $("#professionUpd").val(data.profession).trigger("change");
        $("#updateUser").modal('show');
      }
    });
  });
  $(".saveUpdateUser").on("click", function () {
    var idUser = $("#idUser").val();
    var username = $("#usernameUpd").val();
    var nom = $("#nomUpd").val();
    var password = $("#passwordUpd").val();
    var routeName = $("#routeNameUpd").val();
    var status = $('input[name="statusUpd"]:checked').val();
    var profession = $("#professionUpd").val();
    if (password == "") {
      $("#passwordUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#passwordUpd").attr('style', "border: 1px solid #gray !important");
    }
    if (username == "") {
      $("#usernameUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#usernameUpd").attr('style', "border: 1px solid lightgray  !important");
    }
    if (nom == "") {
      $("#nameUpd").attr('style', "border: 1px solid #eb0000 !important");
    } else {
      $("#nameUpd").attr('style', "border: 1px solid lightgray  !important");
    }
    if (profession == "") {
      $("#select2-professionUpd-container").parent().css("border", "1px solid #eb0000");
    } else {
      $("#select2-professionUpd-container").parent().css("border", "1px solid lightgray ");
    }
    if (password != "" && username != "" && nom != "" && profession != "") {
      var l = ladda.create(document.activeElement);
      l.start();
      $.ajax({
        url: "updateUser",
        method: "POST",
        data: {
          idUser: idUser,
          username: username,
          nom: nom,
          password: password,
          status: status,
          profession: profession,
          routeName: routeName
        },
        success: function success(data) {
          if (data != "USER ALREDY EXIST") {
            if ($.fn.dataTable.isDataTable("#myTable")) {
              $('#myTable').DataTable().clear().destroy();
            }
            $("#listUsers").html(data);
            $("#myTable").DataTable({
              lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
              "autoWidth": false
            });
            $("#updateUser").modal('hide');
            $("#closeUpdateUser").click();
            toastr.success("Utilisateur modifié avec success");
            l.stop();
          } else {
            toastr.error("Le nom d'utilisateur déja exist !");
            l.stop();
          }
        },
        error: function error() {
          l.stop();
        }
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var nativeSlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/settings/user.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBTyxDQUFDLDZGQUFnQztBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZXR0aW5ncy91c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgJCgnI215VGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICBbMTUsIDI1LCA1MCwgJ0FsbCddLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFwiYXV0b1dpZHRoXCI6IGZhbHNlXHJcblxyXG4gICAgICB9KTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWN0aXZhdGVVc2VyXCIgLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiYWN0aXZhdGVVc2VyXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWRVc2VyOiBpZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgaWYgKCAkLmZuLmRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNteVRhYmxlXCIpICkge1xyXG4gICAgICAgICAgICAgICAgJCgnI215VGFibGUnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcIiNsaXN0VXNlcnNcIikuaHRtbChkYXRhLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNteVRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsIC0xXSxcclxuICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAnQWxsJ10sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgXCJhdXRvV2lkdGhcIjogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVVc2VyXCIgLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImRlbGV0ZVVzZXJcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpZFVzZXI6IGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICBpZiAoICQuZm4uZGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI215VGFibGVcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiI2xpc3RVc2Vyc1wiKS5odG1sKGRhdGEuaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI215VGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJChcIiNjbG9zZUFkZFVzZXJcIikuY2xpY2soKTtcclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJChcIi5zYXZlQWRkVXNlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgdmFyIHVzZXJuYW1lID0gJChcIiN1c2VybmFtZVwiKS52YWwoKTtcclxuICAgICAgICAgIHZhciBub20gPSAkKFwiI25vbVwiKS52YWwoKTtcclxuICAgICAgICAgIHZhciBwYXNzd29yZCA9ICQoXCIjcGFzc3dvcmRcIikudmFsKCk7XHJcbiAgICAgICAgICB2YXIgcm91dGVOYW1lID0gJChcIiNyb3V0ZU5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgICB2YXIgc3RhdHVzID0gJCgnaW5wdXRbbmFtZT1cInN0YXR1c1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgICB2YXIgcHJvZmVzc2lvbiA9ICQoXCIjcHJvZmVzc2lvblwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICBpZihwYXNzd29yZCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICQoXCIjcGFzc3dvcmRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNncmF5ICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHVzZXJuYW1lID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICQoXCIjdXNlcm5hbWVcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNlYjAwMDAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICQoXCIjdXNlcm5hbWVcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheSAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobm9tID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICQoXCIjbmFtZVwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgJChcIiNuYW1lXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXkgICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHByb2Zlc3Npb24gPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgJChcIiNzZWxlY3QyLXByb2Zlc3Npb24tY29udGFpbmVyXCIpLnBhcmVudCgpLmNzcyhcImJvcmRlclwiLFwiMXB4IHNvbGlkICNlYjAwMDBcIik7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAkKFwiI3NlbGVjdDItcHJvZmVzc2lvbi1jb250YWluZXJcIikucGFyZW50KCkuY3NzKFwiYm9yZGVyXCIsXCIxcHggc29saWQgbGlnaHRncmF5IFwiKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihwYXNzd29yZCAhPSBcIlwiICYmIHVzZXJuYW1lICE9IFwiXCIgJiYgbm9tICE9IFwiXCIgJiYgcHJvZmVzc2lvbiAhPSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgbGEuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogXCJhZGRVc2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBub206bm9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6c3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbjpwcm9mZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVOYW1lOnJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAhPSBcIlVTRVIgQUxSRURZIEVYSVNUXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGlmICggJC5mbi5kYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbXlUYWJsZVwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbXlUYWJsZScpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGlzdFVzZXJzXCIpLmh0bWwoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNteVRhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxNSwgMjUsIDUwLCAnQWxsJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI2Nsb3NlQWRkVXNlclwiKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJVdGlsaXNhdGV1ciBham91dMOpIGF2ZWMgc3VjY2Vzc1wiKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYS5zdG9wKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkxlIG5vbSBkJ3V0aWxpc2F0ZXVyIGTDqWphIGV4aXN0ICFcIilcclxuICAgICAgICAgICAgICAgICAgICAgIGxhLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIgLCBcIi51cGRhdGVCdG5cIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIGlkVXNlciA9ICQodGhpcykuYXR0cihcImlkXCIpLnNsaWNlKDEzKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiBcImZpbmRVc2VyXCIsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgaWRVc2VyOiBpZFVzZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICQoXCIjaWRVc2VyXCIpLnZhbChkYXRhLmlkKVxyXG4gICAgICAgICAgICAkKFwiI3VzZXJuYW1lVXBkXCIpLnZhbChkYXRhLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAkKFwiI25vbVVwZFwiKS52YWwoZGF0YS5ub20pXHJcbiAgICAgICAgICAgICQoXCIjcm91dGVOYW1lVXBkXCIpLnZhbChkYXRhLnJvdXRlKVxyXG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgJChcIiNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAkKFwiI2Rlc2FjdGl2ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNwcm9mZXNzaW9uVXBkXCIpLnZhbChkYXRhLnByb2Zlc3Npb24pLnRyaWdnZXIoXCJjaGFuZ2VcIilcclxuXHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlVXNlclwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAgICQoXCIuc2F2ZVVwZGF0ZVVzZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGlkVXNlciA9ICQoXCIjaWRVc2VyXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSAkKFwiI3VzZXJuYW1lVXBkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgbm9tID0gJChcIiNub21VcGRcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9ICQoXCIjcGFzc3dvcmRVcGRcIikudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZU5hbWUgPSAkKFwiI3JvdXRlTmFtZVVwZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9ICQoJ2lucHV0W25hbWU9XCJzdGF0dXNVcGRcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgcHJvZmVzc2lvbiA9ICQoXCIjcHJvZmVzc2lvblVwZFwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBhc3N3b3JkID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgJChcIiNwYXNzd29yZFVwZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgI2ViMDAwMCAhaW1wb3J0YW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Bhc3N3b3JkVXBkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZ3JheSAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXJuYW1lVXBkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCAjZWIwMDAwICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXJuYW1lVXBkXCIpLmF0dHIoJ3N0eWxlJywgXCJib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXkgICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub20gPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25hbWVVcGRcIikuYXR0cignc3R5bGUnLCBcImJvcmRlcjogMXB4IHNvbGlkICNlYjAwMDAgIWltcG9ydGFudFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICQoXCIjbmFtZVVwZFwiKS5hdHRyKCdzdHlsZScsIFwiYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5ICAhaW1wb3J0YW50XCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvZmVzc2lvbiA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICQoXCIjc2VsZWN0Mi1wcm9mZXNzaW9uVXBkLWNvbnRhaW5lclwiKS5wYXJlbnQoKS5jc3MoXCJib3JkZXJcIixcIjFweCBzb2xpZCAjZWIwMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgJChcIiNzZWxlY3QyLXByb2Zlc3Npb25VcGQtY29udGFpbmVyXCIpLnBhcmVudCgpLmNzcyhcImJvcmRlclwiLFwiMXB4IHNvbGlkIGxpZ2h0Z3JheSBcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBhc3N3b3JkICE9IFwiXCIgJiYgdXNlcm5hbWUgIT0gXCJcIiAmJiBub20gIT0gXCJcIiAmJiBwcm9mZXNzaW9uICE9IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBsID0gbGFkZGEuY3JlYXRlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICBsLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcInVwZGF0ZVVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFVzZXI6IGlkVXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbTpub20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6c3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9mZXNzaW9uOnByb2Zlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlTmFtZTpyb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEgIT0gXCJVU0VSIEFMUkVEWSBFWElTVFwiKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggJC5mbi5kYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbXlUYWJsZVwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNteVRhYmxlJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbGlzdFVzZXJzXCIpLmh0bWwoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI215VGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMTUsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWzE1LCAyNSwgNTAsICdBbGwnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9XaWR0aFwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN1cGRhdGVVc2VyXCIpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjY2xvc2VVcGRhdGVVc2VyXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiVXRpbGlzYXRldXIgbW9kaWZpw6kgYXZlYyBzdWNjZXNzXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkxlIG5vbSBkJ3V0aWxpc2F0ZXVyIGTDqWphIGV4aXN0ICFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGwuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSApO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgbmF0aXZlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyICRBcnJheSA9IEFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSAkQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZShPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib24iLCJpZCIsImF0dHIiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImlkVXNlciIsInN1Y2Nlc3MiLCJmbiIsImRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiaHRtbCIsInRvYXN0ciIsIm1lc3NhZ2UiLCJjbGljayIsInVzZXJuYW1lIiwidmFsIiwibm9tIiwicGFzc3dvcmQiLCJyb3V0ZU5hbWUiLCJzdGF0dXMiLCJwcm9mZXNzaW9uIiwicGFyZW50IiwiY3NzIiwibGEiLCJsYWRkYSIsImNyZWF0ZSIsImFjdGl2ZUVsZW1lbnQiLCJzdGFydCIsInN0b3AiLCJlcnJvciIsInNsaWNlIiwicm91dGUiLCJwcm9wIiwidHJpZ2dlciIsIm1vZGFsIiwibCJdLCJzb3VyY2VSb290IjoiIn0=