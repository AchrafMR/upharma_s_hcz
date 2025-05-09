(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_vente"],{

/***/ "./assets/js/vente/gestion_vente.js":
/*!******************************************!*\
  !*** ./assets/js/vente/gestion_vente.js ***!
  \******************************************/
/***/ (() => {

$(document).ready(function () {
  // DataTable init
  $('#salesTable').DataTable({
    lengthMenu: [[15, 25, 50, -1], [15, 25, 50, 'All']],
    autoWidth: false
  });

  // Dropdown toggle logic (exact same as users)
  $("body").on("click", ".menuActions", function (e) {
    $(".divMenu").hide(); // hide all
    var id = $(this).attr("id");
    $("#divMenu" + id).toggle(); // toggle clicked one
    e.stopPropagation();
  });
  $(document).on("click", function () {
    $(".divMenu").hide();
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/gestion_vente.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGlvbl92ZW50ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUMxQjtFQUNBRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNHLFNBQVMsQ0FBQztJQUN6QkMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkRDLFNBQVMsRUFBRTtFQUNiLENBQUMsQ0FBQzs7RUFFRjtFQUNBTCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUNqRFAsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsSUFBTUMsRUFBRSxHQUFHVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0JWLENBQUMsQ0FBQyxVQUFVLEdBQUdTLEVBQUUsQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0JKLENBQUMsQ0FBQ0ssZUFBZSxDQUFDLENBQUM7RUFDckIsQ0FBQyxDQUFDO0VBRUZaLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNsQ04sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDUSxJQUFJLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmVudGUvZ2VzdGlvbl92ZW50ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBEYXRhVGFibGUgaW5pdFxyXG4gICAgJCgnI3NhbGVzVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICBsZW5ndGhNZW51OiBbWzE1LCAyNSwgNTAsIC0xXSwgWzE1LCAyNSwgNTAsICdBbGwnXV0sXHJcbiAgICAgIGF1dG9XaWR0aDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERyb3Bkb3duIHRvZ2dsZSBsb2dpYyAoZXhhY3Qgc2FtZSBhcyB1c2VycylcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubWVudUFjdGlvbnNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgJChcIi5kaXZNZW51XCIpLmhpZGUoKTsgLy8gaGlkZSBhbGxcclxuICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgJChcIiNkaXZNZW51XCIgKyBpZCkudG9nZ2xlKCk7IC8vIHRvZ2dsZSBjbGlja2VkIG9uZVxyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIuZGl2TWVudVwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICB9KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51IiwiYXV0b1dpZHRoIiwib24iLCJlIiwiaGlkZSIsImlkIiwiYXR0ciIsInRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=