"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["point_vente"],{

/***/ "./assets/js/vente/point_vente.js":
/*!****************************************!*\
  !*** ./assets/js/vente/point_vente.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../images/facke_img_product.png */ "./assets/images/facke_img_product.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









































window.addEventListener("DOMContentLoaded", function () {
  var PRODUCTS = window.PRODUCTS || [];
  var cart = [];
  var selectedCategory = "all";
  var searchQuery = "";
  var pendingDemande = [];
  var cartContainer = document.getElementById("cart-items-container");
  var subtotalElement = document.getElementById("cart-subtotal");
  var productGrid = document.getElementById("product-list");
  var searchInput = document.getElementById("product-search");
  var categoryButtons = document.querySelectorAll(".category-nav-btn");

  // Utilities
  var getProductImage = function getProductImage(product) {
    var _product$image;
    var basePath = "/images/products/";
    return (_product$image = product.image) !== null && _product$image !== void 0 && _product$image.trim() ? "".concat(basePath).concat(product.image) : _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__;
  };
  var addProductToCart = function addProductToCart(productId) {
    var id = Number(productId);
    var product = PRODUCTS.find(function (p) {
      return p.id === id;
    });
    if (!product) return;
    var existing = cart.find(function (p) {
      return p.id === id;
    });
    var stock = product.quantity;
    if (existing) {
      if (existing.quantity < stock) existing.quantity++;
    } else {
      cart.push(_objectSpread(_objectSpread({}, product), {}, {
        quantity: 1
      }));
    }
    renderCart();
  };
  var renderFilteredProducts = function renderFilteredProducts() {
    var filtered = PRODUCTS.filter(function (product) {
      var matchCategory = selectedCategory === "all" || product.category === selectedCategory;
      var matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
    productGrid.innerHTML = filtered.map(function (product) {
      return "\n      <div class=\"col-6 p-1 col-sm-4 col-md-3 col-lg-2-4\">\n        <div class=\"card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between\">\n          <button class=\"btn btn-sm btn-primary position-absolute top-right-btn\" data-id=\"".concat(product.id, "\">\n            <i class=\"fa-solid fa-cart-plus\"></i>\n          </button>\n\n          <div class=\"position-absolute top-left-badge\">\n            <div class=\"rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge\">").concat(product.quantity, "</div>\n          </div>\n\n          <div class=\"d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper\">\n            <button class=\"img-clickable border-0 bg-transparent p-0\" data-id=\"").concat(product.id, "\" style=\"cursor: pointer\">\n              <img\n                src=\"").concat(getProductImage(product), "\"\n                onerror=\"this.onerror=null;this.src='").concat(_images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__, "'\"\n                alt=\"").concat(product.name, "\"\n                class=\"img-fluid\"\n                style=\"max-height: 80px; object-fit: contain\"\n              />\n            </button>\n          </div>\n\n          <div class=\"text-center mt-2\">\n            \n            <h6 class=\"text-uppercase mb-1 product-title\">\n              ").concat(product.name.length > 18 ? product.name.substring(0, 18) + '...' : product.name, "\n            </h6>\n            <p class=\"text-danger fw-bold mb-0 product-price\">").concat(Number(product.price).toFixed(2), " DH</p>\n          </div>\n        </div>\n      </div>\n    ");
    }).join("");
  };
  var renderCart = function renderCart() {
    var subtotal = 0;
    var cartHTML = cart.map(function (item) {
      var _product$quantity;
      var product = PRODUCTS.find(function (p) {
        return p.id === item.id;
      });
      var stock = (_product$quantity = product === null || product === void 0 ? void 0 : product.quantity) !== null && _product$quantity !== void 0 ? _product$quantity : 0;
      subtotal += item.price * item.quantity;
      return "\n      <div class=\"d-flex align-items-center border-bottom py-1 cart-item\" data-id=\"".concat(item.id, "\" style=\"width: 100%; font-size: 0.85rem\">\n        \n      <div style=\"width: 75%\" class=\"d-flex justify-content-between align-items-center text-uppercase fw-semibold text-truncate\">\n        <span class=\"text-truncate\" style=\"max-width: 80%\">").concat(item.name, "</span>\n        <span class=\"text-danger fw-bold\">").concat(item.price.toFixed(2), "</span>\n      </div>\n\n      <div style=\"width: 30%\" class=\"d-flex justify-content-end align-items-center gap-2 text-end ps-2\">\n        <div class=\"d-flex align-items-center bg-light rounded-pill qty-control\" style=\"font-size: 0.8rem\">\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease\" style=\"width: 18px\">\n            <i class=\"fa-solid fa-minus\"></i>\n          </button>\n          <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\" value=\"").concat(item.quantity, "\" readonly style=\"width: 24px\" />\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase\" style=\"width: 18px\">\n            <i class=\"fa-solid fa-plus\"></i>\n          </button>\n        </div>\n\n        <button class=\"btn btn-sm btn-remove text-danger bg-transparent border-0\" title=\"Supprimer\">\n          <i class=\"fa-solid fa-trash\"></i>\n        </button>\n      </div>\n    </div>\n      </div>\n    ");
    }).join("");
    cartContainer.innerHTML = cartHTML;
    subtotalElement.innerText = "".concat(subtotal.toFixed(2), " DH");
  };

  // Validate form fields
  var validateFormFields = function validateFormFields(fields) {
    var _iterator = _createForOfIteratorHelper(fields),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        var el = document.getElementById(field.id);
        if (!el || !el.value.trim()) {
          toastr.error("Veuillez remplir le champ : ".concat(field.label));
          el.focus();
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return true;
  };

  // Events
  categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryButtons.forEach(function (b) {
        return b.classList.remove("active");
      });
      this.classList.add("active");
      selectedCategory = this.dataset.category;
      renderFilteredProducts();
    });
  });
  searchInput.addEventListener("input", function () {
    searchQuery = searchInput.value;
    renderFilteredProducts();
  });
  document.addEventListener("click", function (e) {
    var target = e.target.closest("[data-id]");
    if (target !== null && target !== void 0 && target.classList.contains("top-right-btn") || target !== null && target !== void 0 && target.classList.contains("img-clickable")) {
      addProductToCart(target.dataset.id);
    }
    var cartItem = e.target.closest(".cart-item");
    if (!cartItem) return;
    var id = Number(cartItem.dataset.id);
    if (e.target.closest(".btn-increase")) {
      var item = cart.find(function (p) {
        return p.id === id;
      });
      if (item) item.quantity++;
      renderCart();
    }
    if (e.target.closest(".btn-decrease")) {
      var _item = cart.find(function (p) {
        return p.id === id;
      });
      if (_item && _item.quantity > 1) _item.quantity--;
      renderCart();
    }
    if (e.target.closest(".btn-remove")) {
      cart = cart.filter(function (p) {
        return p.id !== id;
      });
      renderCart();
    }
  });
  renderFilteredProducts();

  // Handle Submit coomander
  var commanderButton = document.querySelector('[data-target="#addCommande"]');
  commanderButton === null || commanderButton === void 0 ? void 0 : commanderButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }
    pendingDemande = _toConsumableArray(cart.map(function (item) {
      return _objectSpread({}, item);
    }));
    $("#addCommande").modal("show");
  });

  // Handle Demandeur and Traitement options
  var defaultTraitementMagasins = window.DEFAULT_TRAITEMENT_IDS || [];
  var handleTraitementOptions = function handleTraitementOptions() {
    var selectedDemandeurId = document.getElementById("demandeur_id").value;
    var $traitementSelect = $('#recepteur_id');
    var $demandeurSelect = $('#demandeur_id');
    var currentTraitementId = $traitementSelect.val();
    var stillValid = false;
    $traitementSelect.find('option').each(function () {
      var option = $(this);
      var value = option.attr('value');
      if (!value) return;
      var isDefault = defaultTraitementMagasins.includes(Number(value));
      var isSame = value === selectedDemandeurId;
      var shouldDisable = isDefault && !isSame;
      option.prop('disabled', shouldDisable);
      if (!shouldDisable && value === currentTraitementId) {
        stillValid = true;
      }
    });
    if (!stillValid) {
      $traitementSelect.val('');
    }

    //  Refresh Select2 dropdowns
    $traitementSelect.trigger('change.select2');
    $demandeurSelect.trigger('change.select2');
  };

  // Bind change event for Demandeur
  $('#demandeur_id').on('change', function () {
    setTimeout(handleTraitementOptions, 0);
  });
  handleTraitementOptions(); // Run on load

  // IPP autofill on Enter for set patient name and dossier
  var ippInput = document.getElementById("ipp");
  var nomInput = document.getElementById("nom_patient");
  var dossierInput = document.getElementById("dossier_patient");
  nomInput.disabled = true;
  dossierInput.disabled = true;
  ippInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var ipp = ippInput.value.trim();
      var patient = (window.infos_patient || []).find(function (p) {
        return p.ipp === ipp;
      });
      if (patient) {
        nomInput.value = patient.nom;
        dossierInput.value = patient.dossier;
      } else {
        nomInput.value = "";
        dossierInput.value = "";
        toastr.error("Aucun patient trouvé avec cet IPP");
      }
    }
  });

  // Handle form submission
  document.getElementById("submit-demande").addEventListener("click", function () {
    if (!pendingDemande || pendingDemande.length === 0) {
      toastr.error("Aucune donnée de panier à envoyer.");
      return;
    }
    var requiredFields = [{
      id: "demandeur_id",
      label: "Magasin Demandeur"
    }, {
      id: "recepteur_id",
      label: "Magasin de Traitement"
    }, {
      id: "ipp",
      label: "IPP"
    }, {
      id: "nom_patient",
      label: "Nom du patient"
    }, {
      id: "dossier_patient",
      label: "Dossier du patient"
    }, {
      id: "description",
      label: "description"
    }];
    if (!validateFormFields(requiredFields)) return;
    var data = {
      demandeur_id: document.getElementById("demandeur_id").value,
      recepteur_id: document.getElementById("recepteur_id").value,
      urgent: document.getElementById("urgent").checked ? 1 : 0,
      description: document.getElementById("description").value,
      ipp: document.getElementById("ipp").value,
      nom_patient: document.getElementById("nom_patient").value,
      dossier_patient: document.getElementById("dossier_patient").value,
      lignes: pendingDemande
    };
    fetch("/vente/save-demande", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error("Erreur serveur");
      return res.json();
    }).then(function () {
      toastr.success("Demande enregistrée avec succès!");
      $("#addCommande").modal("hide");
      cart = [];
      renderCart();

      // Clear form
      ["demandeur_id", "recepteur_id", "description", "ipp", "nom_patient", "dossier_patient"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.value = "";
      });
      document.getElementById("urgent").checked = false;
    })["catch"](function (err) {
      console.error(err);
      toastr.error("Erreur lors de l'enregistrement de la demande.");
    });
  });
});

/***/ }),

/***/ "./assets/images/facke_img_product.png":
/*!*********************************************!*\
  !*** ./assets/images/facke_img_product.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/facke_img_product.56e41de5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8cc24a","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-3a1087","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-0e32b1","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/point_vente.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxDQUFDLENBQUNtSCxPQUFPLEdBQUcsS0FBSztJQUNuRCxDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUN0RCxHQUFHLEVBQUs7TUFDZHVFLE9BQU8sQ0FBQzFFLEtBQUssQ0FBQ0csR0FBRyxDQUFDO01BQ2xCSixNQUFNLENBQUNDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQztJQUNoRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFLSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmVudGUvcG9pbnRfdmVudGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhY2tlX2ltZ19wcm9kdWN0IGZyb20gXCIuLi8uLi9pbWFnZXMvZmFja2VfaW1nX3Byb2R1Y3QucG5nXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IFBST0RVQ1RTID0gd2luZG93LlBST0RVQ1RTIHx8IFtdO1xyXG4gIGxldCBjYXJ0ID0gW107XHJcbiAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbFwiO1xyXG4gIGxldCBzZWFyY2hRdWVyeSA9IFwiXCI7XHJcbiAgbGV0IHBlbmRpbmdEZW1hbmRlID0gW107XHJcblxyXG4gIGNvbnN0IGNhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtaXRlbXMtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHN1YnRvdGFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1zdWJ0b3RhbFwiKTtcclxuICBjb25zdCBwcm9kdWN0R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1saXN0XCIpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXNlYXJjaFwiKTtcclxuICBjb25zdCBjYXRlZ29yeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LW5hdi1idG5cIik7XHJcblxyXG4gIC8vIFV0aWxpdGllc1xyXG4gIGNvbnN0IGdldFByb2R1Y3RJbWFnZSA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUGF0aCA9IFwiL2ltYWdlcy9wcm9kdWN0cy9cIjtcclxuICAgIHJldHVybiBwcm9kdWN0LmltYWdlPy50cmltKCkgPyBgJHtiYXNlUGF0aH0ke3Byb2R1Y3QuaW1hZ2V9YCA6IGZhY2tlX2ltZ19wcm9kdWN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IE51bWJlcihwcm9kdWN0SWQpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgIGlmICghcHJvZHVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBzdG9jayA9IHByb2R1Y3QucXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIGlmIChleGlzdGluZy5xdWFudGl0eSA8IHN0b2NrKSBleGlzdGluZy5xdWFudGl0eSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydC5wdXNoKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbHRlcmVkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFBST0RVQ1RTLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBtYXRjaENhdGVnb3J5ID0gc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fCBwcm9kdWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICByZXR1cm4gbWF0Y2hDYXRlZ29yeSAmJiBtYXRjaFNlYXJjaDtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2R1Y3RHcmlkLmlubmVySFRNTCA9IGZpbHRlcmVkLm1hcChwcm9kdWN0ID0+IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHAtMSBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcHJvZHVjdC1jYXJkIHNoYWRvdy1zbSBib3JkZXItMCByb3VuZGVkLTQgcHgtMiBwdC0zIHBiLTIgaC0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtcmlnaHQtYnRuXCIgZGF0YS1pZD1cIiR7cHJvZHVjdC5pZH1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJ0LXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLWxlZnQtYmFkZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIGJnLWRhbmdlciB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwcm9kdWN0LWJhZGdlXCI+JHtwcm9kdWN0LnF1YW50aXR5fTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZCBwLTEgcHJvZHVjdC1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW1nLWNsaWNrYWJsZSBib3JkZXItMCBiZy10cmFuc3BhcmVudCBwLTBcIiBkYXRhLWlkPVwiJHtwcm9kdWN0LmlkfVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiJHtnZXRQcm9kdWN0SW1hZ2UocHJvZHVjdCl9XCJcclxuICAgICAgICAgICAgICAgIG9uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDt0aGlzLnNyYz0nJHtmYWNrZV9pbWdfcHJvZHVjdH0nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIiR7cHJvZHVjdC5uYW1lfVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC1oZWlnaHQ6IDgwcHg7IG9iamVjdC1maXQ6IGNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTEgcHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICR7cHJvZHVjdC5uYW1lLmxlbmd0aCA+IDE4ID8gcHJvZHVjdC5uYW1lLnN1YnN0cmluZygwLCAxOCkgKyAnLi4uJyA6IHByb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIG1iLTAgcHJvZHVjdC1wcmljZVwiPiR7TnVtYmVyKHByb2R1Y3QucHJpY2UpLnRvRml4ZWQoMil9IERIPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJ0ID0gKCkgPT4ge1xyXG4gIGxldCBzdWJ0b3RhbCA9IDA7XHJcblxyXG4gIGNvbnN0IGNhcnRIVE1MID0gY2FydC5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBQUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBpdGVtLmlkKTtcclxuICAgIGNvbnN0IHN0b2NrID0gcHJvZHVjdD8ucXVhbnRpdHkgPz8gMDtcclxuICAgIHN1YnRvdGFsICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gcHktMSBjYXJ0LWl0ZW1cIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZvbnQtc2l6ZTogMC44NXJlbVwiPlxyXG4gICAgICAgIFxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDc1JVwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBmdy1zZW1pYm9sZCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXRydW5jYXRlXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDgwJVwiPiR7aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGZ3LWJvbGRcIj4ke2l0ZW0ucHJpY2UudG9GaXhlZCgyKX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMCVcIiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWVuZCBwcy0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctbGlnaHQgcm91bmRlZC1waWxsIHF0eS1jb250cm9sXCIgc3R5bGU9XCJmb250LXNpemU6IDAuOHJlbVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gcC0wIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHRleHQtZGFyayBidG4tZGVjcmVhc2VcIiBzdHlsZT1cIndpZHRoOiAxOHB4XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWludXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy10cmFuc3BhcmVudCBxdHktaW5wdXRcIiB2YWx1ZT1cIiR7aXRlbS5xdWFudGl0eX1cIiByZWFkb25seSBzdHlsZT1cIndpZHRoOiAyNHB4XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmsgYnRuLWluY3JlYXNlXCIgc3R5bGU9XCJ3aWR0aDogMThweFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXJlbW92ZSB0ZXh0LWRhbmdlciBiZy10cmFuc3BhcmVudCBib3JkZXItMFwiIHRpdGxlPVwiU3VwcHJpbWVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSkuam9pbihcIlwiKTtcclxuXHJcbiAgY2FydENvbnRhaW5lci5pbm5lckhUTUwgPSBjYXJ0SFRNTDtcclxuICBzdWJ0b3RhbEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7c3VidG90YWwudG9GaXhlZCgyKX0gREhgO1xyXG59O1xyXG5cclxuICAvLyBWYWxpZGF0ZSBmb3JtIGZpZWxkc1xyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybUZpZWxkcyA9IChmaWVsZHMpID0+IHtcclxuICAgIGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkLmlkKTtcclxuICAgICAgaWYgKCFlbCB8fCAhZWwudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGBWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIDogJHtmaWVsZC5sYWJlbH1gKTtcclxuICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gRXZlbnRzXHJcbiAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmRhdGFzZXQuY2F0ZWdvcnk7XHJcbiAgICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgc2VhcmNoUXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaWRdXCIpO1xyXG4gICAgaWYgKHRhcmdldD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLXJpZ2h0LWJ0blwiKSB8fCB0YXJnZXQ/LmNsYXNzTGlzdC5jb250YWlucyhcImltZy1jbGlja2FibGVcIikpIHtcclxuICAgICAgYWRkUHJvZHVjdFRvQ2FydCh0YXJnZXQuZGF0YXNldC5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FydEl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmNhcnQtaXRlbVwiKTtcclxuICAgIGlmICghY2FydEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpZCA9IE51bWJlcihjYXJ0SXRlbS5kYXRhc2V0LmlkKTtcclxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmJ0bi1pbmNyZWFzZVwiKSkge1xyXG4gICAgICBjb25zdCBpdGVtID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICAgIGlmIChpdGVtKSBpdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5idG4tZGVjcmVhc2VcIikpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAoaXRlbSAmJiBpdGVtLnF1YW50aXR5ID4gMSkgaXRlbS5xdWFudGl0eS0tO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuYnRuLXJlbW92ZVwiKSkge1xyXG4gICAgICBjYXJ0ID0gY2FydC5maWx0ZXIoKHApID0+IHAuaWQgIT09IGlkKTtcclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcblxyXG5cclxuICAvLyBIYW5kbGUgU3VibWl0IGNvb21hbmRlclxyXG4gIGNvbnN0IGNvbW1hbmRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiNhZGRDb21tYW5kZVwiXScpO1xyXG4gIGNvbW1hbmRlckJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGNhcnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIlZvdHJlIHBhbmllciBlc3QgdmlkZS4gQWpvdXRleiBkZXMgcHJvZHVpdHMgYXZhbnQgZGUgY29tbWFuZGVyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBlbmRpbmdEZW1hbmRlID0gWy4uLmNhcnQubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtIH0pKV07XHJcbiAgICAkKFwiI2FkZENvbW1hbmRlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgLy8gSGFuZGxlIERlbWFuZGV1ciBhbmQgVHJhaXRlbWVudCBvcHRpb25zXHJcbiAgY29uc3QgZGVmYXVsdFRyYWl0ZW1lbnRNYWdhc2lucyA9IHdpbmRvdy5ERUZBVUxUX1RSQUlURU1FTlRfSURTIHx8IFtdO1xyXG4gIGNvbnN0IGhhbmRsZVRyYWl0ZW1lbnRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREZW1hbmRldXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtYW5kZXVyX2lkXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgJHRyYWl0ZW1lbnRTZWxlY3QgPSAkKCcjcmVjZXB0ZXVyX2lkJyk7XHJcbiAgICBjb25zdCAkZGVtYW5kZXVyU2VsZWN0ID0gJCgnI2RlbWFuZGV1cl9pZCcpO1xyXG4gICAgY29uc3QgY3VycmVudFRyYWl0ZW1lbnRJZCA9ICR0cmFpdGVtZW50U2VsZWN0LnZhbCgpO1xyXG4gICAgbGV0IHN0aWxsVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAkdHJhaXRlbWVudFNlbGVjdC5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gJCh0aGlzKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb24uYXR0cigndmFsdWUnKTtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgaXNEZWZhdWx0ID0gZGVmYXVsdFRyYWl0ZW1lbnRNYWdhc2lucy5pbmNsdWRlcyhOdW1iZXIodmFsdWUpKTtcclxuICAgICAgY29uc3QgaXNTYW1lID0gdmFsdWUgPT09IHNlbGVjdGVkRGVtYW5kZXVySWQ7XHJcbiAgICAgIGNvbnN0IHNob3VsZERpc2FibGUgPSBpc0RlZmF1bHQgJiYgIWlzU2FtZTtcclxuXHJcbiAgICAgIG9wdGlvbi5wcm9wKCdkaXNhYmxlZCcsIHNob3VsZERpc2FibGUpO1xyXG5cclxuICAgICAgaWYgKCFzaG91bGREaXNhYmxlICYmIHZhbHVlID09PSBjdXJyZW50VHJhaXRlbWVudElkKSB7XHJcbiAgICAgICAgc3RpbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghc3RpbGxWYWxpZCkge1xyXG4gICAgICAkdHJhaXRlbWVudFNlbGVjdC52YWwoJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBSZWZyZXNoIFNlbGVjdDIgZHJvcGRvd25zXHJcbiAgICAkdHJhaXRlbWVudFNlbGVjdC50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gICAgJGRlbWFuZGV1clNlbGVjdC50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gIH07XHJcblxyXG4gIC8vIEJpbmQgY2hhbmdlIGV2ZW50IGZvciBEZW1hbmRldXJcclxuICAkKCcjZGVtYW5kZXVyX2lkJykub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoaGFuZGxlVHJhaXRlbWVudE9wdGlvbnMsIDApO1xyXG4gIH0pO1xyXG5cclxuICBoYW5kbGVUcmFpdGVtZW50T3B0aW9ucygpOyAvLyBSdW4gb24gbG9hZFxyXG5cclxuXHJcbiAgLy8gSVBQIGF1dG9maWxsIG9uIEVudGVyIGZvciBzZXQgcGF0aWVudCBuYW1lIGFuZCBkb3NzaWVyXHJcbiAgY29uc3QgaXBwSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwcFwiKTtcclxuICBjb25zdCBub21JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tX3BhdGllbnRcIik7XHJcbiAgY29uc3QgZG9zc2llcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3NzaWVyX3BhdGllbnRcIik7XHJcblxyXG4gIG5vbUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICBkb3NzaWVySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGlwcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpcHAgPSBpcHBJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgIGNvbnN0IHBhdGllbnQgPSAod2luZG93LmluZm9zX3BhdGllbnQgfHwgW10pLmZpbmQocCA9PiBwLmlwcCA9PT0gaXBwKTtcclxuXHJcbiAgICAgIGlmIChwYXRpZW50KSB7XHJcbiAgICAgICAgbm9tSW5wdXQudmFsdWUgPSBwYXRpZW50Lm5vbTtcclxuICAgICAgICBkb3NzaWVySW5wdXQudmFsdWUgPSBwYXRpZW50LmRvc3NpZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9tSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvc3NpZXJJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiQXVjdW4gcGF0aWVudCB0cm91dsOpIGF2ZWMgY2V0IElQUFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LWRlbWFuZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghcGVuZGluZ0RlbWFuZGUgfHwgcGVuZGluZ0RlbWFuZGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkF1Y3VuZSBkb25uw6llIGRlIHBhbmllciDDoCBlbnZveWVyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gW1xyXG4gICAgICB7IGlkOiBcImRlbWFuZGV1cl9pZFwiLCBsYWJlbDogXCJNYWdhc2luIERlbWFuZGV1clwiIH0sXHJcbiAgICAgIHsgaWQ6IFwicmVjZXB0ZXVyX2lkXCIsIGxhYmVsOiBcIk1hZ2FzaW4gZGUgVHJhaXRlbWVudFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwiaXBwXCIsIGxhYmVsOiBcIklQUFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwibm9tX3BhdGllbnRcIiwgbGFiZWw6IFwiTm9tIGR1IHBhdGllbnRcIiB9LFxyXG4gICAgICB7IGlkOiBcImRvc3NpZXJfcGF0aWVudFwiLCBsYWJlbDogXCJEb3NzaWVyIGR1IHBhdGllbnRcIiB9LFxyXG4gICAgICB7IGlkOiBcImRlc2NyaXB0aW9uXCIsIGxhYmVsOiBcImRlc2NyaXB0aW9uXCIgfVxyXG4gICAgICBcclxuICAgIF07XHJcblxyXG4gICAgaWYgKCF2YWxpZGF0ZUZvcm1GaWVsZHMocmVxdWlyZWRGaWVsZHMpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGVtYW5kZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbWFuZGV1cl9pZFwiKS52YWx1ZSxcclxuICAgICAgcmVjZXB0ZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSxcclxuICAgICAgdXJnZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVyZ2VudFwiKS5jaGVja2VkID8gMSA6IDAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlLFxyXG4gICAgICBpcHA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXBwXCIpLnZhbHVlLFxyXG4gICAgICBub21fcGF0aWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21fcGF0aWVudFwiKS52YWx1ZSxcclxuICAgICAgZG9zc2llcl9wYXRpZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvc3NpZXJfcGF0aWVudFwiKS52YWx1ZSxcclxuICAgICAgbGlnbmVzOiBwZW5kaW5nRGVtYW5kZSxcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goXCIvdmVudGUvc2F2ZS1kZW1hbmRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgc2VydmV1clwiKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiRGVtYW5kZSBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzIVwiKTtcclxuICAgICAgICAkKFwiI2FkZENvbW1hbmRlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgY2FydCA9IFtdO1xyXG4gICAgICAgIHJlbmRlckNhcnQoKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgZm9ybVxyXG4gICAgICAgIFtcImRlbWFuZGV1cl9pZFwiLCBcInJlY2VwdGV1cl9pZFwiLCBcImRlc2NyaXB0aW9uXCIsIFwiaXBwXCIsIFwibm9tX3BhdGllbnRcIiwgXCJkb3NzaWVyX3BhdGllbnRcIl0uZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgIGlmIChlbCkgZWwudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW50XCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudCBkZSBsYSBkZW1hbmRlLlwiKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImZhY2tlX2ltZ19wcm9kdWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBST0RVQ1RTIiwiY2FydCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2hRdWVyeSIsInBlbmRpbmdEZW1hbmRlIiwiY2FydENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJ0b3RhbEVsZW1lbnQiLCJwcm9kdWN0R3JpZCIsInNlYXJjaElucHV0IiwiY2F0ZWdvcnlCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImdldFByb2R1Y3RJbWFnZSIsInByb2R1Y3QiLCJfcHJvZHVjdCRpbWFnZSIsImJhc2VQYXRoIiwiaW1hZ2UiLCJ0cmltIiwiY29uY2F0IiwiYWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3RJZCIsImlkIiwiTnVtYmVyIiwiZmluZCIsInAiLCJleGlzdGluZyIsInN0b2NrIiwicXVhbnRpdHkiLCJwdXNoIiwiX29iamVjdFNwcmVhZCIsInJlbmRlckNhcnQiLCJyZW5kZXJGaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtYXRjaENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJtYXRjaFNlYXJjaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaW5uZXJIVE1MIiwibWFwIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwicHJpY2UiLCJ0b0ZpeGVkIiwiam9pbiIsInN1YnRvdGFsIiwiY2FydEhUTUwiLCJpdGVtIiwiX3Byb2R1Y3QkcXVhbnRpdHkiLCJpbm5lclRleHQiLCJ2YWxpZGF0ZUZvcm1GaWVsZHMiLCJmaWVsZHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZmllbGQiLCJ2YWx1ZSIsImVsIiwidG9hc3RyIiwiZXJyb3IiLCJsYWJlbCIsImZvY3VzIiwiZXJyIiwiZSIsImYiLCJmb3JFYWNoIiwiYnRuIiwiYiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJjYXJ0SXRlbSIsImNvbW1hbmRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIiQiLCJtb2RhbCIsImRlZmF1bHRUcmFpdGVtZW50TWFnYXNpbnMiLCJERUZBVUxUX1RSQUlURU1FTlRfSURTIiwiaGFuZGxlVHJhaXRlbWVudE9wdGlvbnMiLCJzZWxlY3RlZERlbWFuZGV1cklkIiwiJHRyYWl0ZW1lbnRTZWxlY3QiLCIkZGVtYW5kZXVyU2VsZWN0IiwiY3VycmVudFRyYWl0ZW1lbnRJZCIsInZhbCIsInN0aWxsVmFsaWQiLCJlYWNoIiwib3B0aW9uIiwiYXR0ciIsImlzRGVmYXVsdCIsImlzU2FtZSIsInNob3VsZERpc2FibGUiLCJwcm9wIiwidHJpZ2dlciIsIm9uIiwic2V0VGltZW91dCIsImlwcElucHV0Iiwibm9tSW5wdXQiLCJkb3NzaWVySW5wdXQiLCJkaXNhYmxlZCIsImtleSIsImlwcCIsInBhdGllbnQiLCJpbmZvc19wYXRpZW50Iiwibm9tIiwiZG9zc2llciIsInJlcXVpcmVkRmllbGRzIiwiZGF0YSIsImRlbWFuZGV1cl9pZCIsInJlY2VwdGV1cl9pZCIsInVyZ2VudCIsImNoZWNrZWQiLCJkZXNjcmlwdGlvbiIsIm5vbV9wYXRpZW50IiwiZG9zc2llcl9wYXRpZW50IiwibGlnbmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJzdWNjZXNzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=