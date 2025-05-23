"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["point_vente"],{

/***/ "./assets/js/vente/point_vente.js":
/*!****************************************!*\
  !*** ./assets/js/vente/point_vente.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../images/facke_img_product.png */ "./assets/images/facke_img_product.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  var cartContainer = document.getElementById("cart-items-container");
  var subtotalElement = document.getElementById("cart-subtotal");
  var productGrid = document.getElementById("product-list");
  var searchInput = document.getElementById("product-search");
  var categoryButtons = document.querySelectorAll(".category-nav-btn");

  // Handle Category Click
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

  // Handle Search Input
  searchInput.addEventListener("input", function () {
    searchQuery = searchInput.value;
    renderFilteredProducts();
  });
  function renderFilteredProducts() {
    var filtered = PRODUCTS.filter(function (product) {
      var matchCategory = selectedCategory === "all" || product.category === selectedCategory;
      var matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
    function getProductImage(product) {
      var basePath = "/images/products/";
      if (product.image && product.image.trim() !== "") {
        return "".concat(basePath).concat(product.image);
      }
      return _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__;
    }
    productGrid.innerHTML = "";
    filtered.forEach(function (product) {
      productGrid.innerHTML += "\n        <div class=\"col-6 p-1 col-sm-4 col-md-3 col-lg-2-4\">\n          <div class=\"card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between\">\n            <button class=\"btn btn-sm btn-primary position-absolute top-right-btn\" data-id=\"".concat(product.id, "\">\n              <i class=\"fa-solid fa-cart-plus\"></i>\n            </button>\n\n            <div class=\"position-absolute top-left-badge\">\n              <div class=\"rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge\">").concat(product.quantity, "</div>\n            </div>\n\n            <div class=\"d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper\">\n          <img\n            src=\"").concat(getProductImage(product), "\"\n            onerror=\"this.onerror=null;this.src='").concat(_images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_40__, "'\"\n            alt=\"").concat(product.name, "\"\n            class=\"img-fluid\"\n            style=\"max-height: 80px; object-fit: contain\"\n          />\n            </div>\n\n            <div class=\"text-center mt-2\">\n              <h6 class=\"text-uppercase mb-1 product-title\">").concat(product.name, "</h6>\n              <p class=\"text-danger fw-bold mb-0 product-price\">").concat(parseFloat(product.price).toFixed(2), " DH</p>\n            </div>\n          </div>\n        </div>\n      ");
    });

    // Rebind add to cart events
    bindAddToCartButtons();
  }
  function bindAddToCartButtons() {
    document.querySelectorAll(".top-right-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        var productId = parseInt(button.dataset.id);
        var product = PRODUCTS.find(function (p) {
          return p.id === productId;
        });
        if (!product) return;
        var existing = cart.find(function (p) {
          return p.id === productId;
        });
        var stock = product.quantity;
        if (existing) {
          if (existing.quantity < stock) {
            existing.quantity++;
          }
        } else {
          cart.push(_objectSpread(_objectSpread({}, product), {}, {
            quantity: 1
          }));
        }
        renderCart();
      });
    });
  }
  function renderCart() {
    cartContainer.innerHTML = "";
    var subtotal = 0;
    cart.forEach(function (item) {
      var _PRODUCTS$find$quanti, _PRODUCTS$find;
      var stock = (_PRODUCTS$find$quanti = (_PRODUCTS$find = PRODUCTS.find(function (p) {
        return p.id === item.id;
      })) === null || _PRODUCTS$find === void 0 ? void 0 : _PRODUCTS$find.quantity) !== null && _PRODUCTS$find$quanti !== void 0 ? _PRODUCTS$find$quanti : 0;
      subtotal += item.price * item.quantity;
      cartContainer.innerHTML += "\n        <div class=\"d-flex justify-content-between align-items-center cart-item\" data-id=\"".concat(item.id, "\">\n          <span class=\"text-uppercase fw-semibold cart-item-name\">").concat(item.name, "</span>\n          <span class=\"text-danger fw-bold cart-item-price\">").concat(item.price.toFixed(2), " DH</span>\n          <div class=\"d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control\">\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                    onclick=\"decreaseQty(").concat(item.id, ")\">\n              <i class=\"fa-solid fa-minus\"></i>\n            </button>\n            <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\"\n                   value=\"").concat(item.quantity, "\" readonly />\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                    onclick=\"increaseQty(").concat(item.id, ")\">\n                    <i class=\"fa-solid fa-plus\"></i>\n            </button>\n          </div>\n          <button class=\"btn btn-sm btn-remove text-danger p-1 bg-transparent border-0\"\n                  onclick=\"removeItem(").concat(item.id, ")\" title=\"Supprimer\">\n            <i class=\"fa-solid fa-trash\"></i>\n          </button>\n        </div>\n      ");
    });
    subtotalElement.innerText = "".concat(subtotal.toFixed(2), " DH");
  }

  // window.increaseQty = function (id) {
  //   const item = cart.find((p) => p.id === id);
  //   const stock = PRODUCTS.find((p) => p.id === id)?.quantity ?? 0;
  //   if (item && item.quantity < stock) {
  //     item.quantity++;
  //     renderCart();
  //   }
  // };

  window.increaseQty = function (id) {
    var item = cart.find(function (p) {
      return p.id === id;
    });
    if (item) {
      item.quantity++;
      renderCart();
    }
  };
  window.decreaseQty = function (id) {
    var item = cart.find(function (p) {
      return p.id === id;
    });
    if (item && item.quantity > 1) {
      item.quantity--;
      renderCart();
    }
  };
  window.removeItem = function (id) {
    cart = cart.filter(function (item) {
      return item.id !== id;
    });
    renderCart();
  };
  renderFilteredProducts();

  // Holds the current cart before sending to the server
  var pendingDemande = [];
  var commanderButton = document.querySelector('[data-target="#addCommande"]');
  if (commanderButton) {
    commanderButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (cart.length === 0) {
        toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
        return;
      }
      pendingDemande = _toConsumableArray(cart.map(function (item) {
        return _objectSpread({}, item);
      }));
      // console.log(pendingDemande);
      $("#addCommande").modal("show");
    });
  }
  // Save Demande logic
  document.getElementById("submit-demande").addEventListener("click", function () {
    if (!pendingDemande || pendingDemande.length === 0) {
      toastr.error("Aucune donnée de panier à envoyer.");
      return;
    }

    // Define required input/select fields 
    var requiredFields = [{
      id: "demandeur_id",
      label: "Demandeur"
    }, {
      id: "recepteur_id",
      label: "Récepteur"
    }, {
      id: "description",
      label: "description"
    }, {
      id: "ipp",
      label: "IPP"
    }, {
      id: "nom_patient",
      label: "Nom du patient"
    }, {
      id: "dossier_patient",
      label: "Dossier du patient"
    }];

    // Validate each field
    for (var _i = 0, _requiredFields = requiredFields; _i < _requiredFields.length; _i++) {
      var field = _requiredFields[_i];
      var el = document.getElementById(field.id);
      if (!el || !el.value.trim()) {
        toastr.error("Veuillez remplir le champ : ".concat(field.label));
        el.focus();
        return;
      }
    }
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
    }).then(function (response) {
      toastr.success("Demande enregistrée avec succès!");
      $("#addCommande").modal("hide");

      // Clear cart
      cart = [];
      renderCart();

      // Reset modal form fields
      document.getElementById("demandeur_id").value = "";
      document.getElementById("recepteur_id").value = "";
      document.getElementById("urgent").checked = false;
      document.getElementById("description").value = "";
      document.getElementById("ipp").value = "";
      document.getElementById("nom_patient").value = "";
      document.getElementById("dossier_patient").value = "";
    })["catch"](function (err) {
      console.error(err);
      toastr.error("Erreur lors de l'enregistrement de la demande.");
    });
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8cc24a","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-a9da69","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/point_vente.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcEJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLDZHQUF3QztBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRXRFO0FBQ0E7QUFDQSxJQUFJLHVFQUF1RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZlbnRlL3BvaW50X3ZlbnRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhY2tlX2ltZ19wcm9kdWN0IGZyb20gXCIuLi8uLi9pbWFnZXMvZmFja2VfaW1nX3Byb2R1Y3QucG5nXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IFBST0RVQ1RTID0gd2luZG93LlBST0RVQ1RTIHx8IFtdO1xyXG4gIGxldCBjYXJ0ID0gW107XHJcbiAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbFwiO1xyXG4gIGxldCBzZWFyY2hRdWVyeSA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IGNhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtaXRlbXMtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHN1YnRvdGFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1zdWJ0b3RhbFwiKTtcclxuICBjb25zdCBwcm9kdWN0R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1saXN0XCIpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXNlYXJjaFwiKTtcclxuICBjb25zdCBjYXRlZ29yeUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5LW5hdi1idG5cIik7XHJcblxyXG4gIC8vIEhhbmRsZSBDYXRlZ29yeSBDbGlja1xyXG4gIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5kYXRhc2V0LmNhdGVnb3J5O1xyXG4gICAgICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gSGFuZGxlIFNlYXJjaCBJbnB1dFxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gICAgcmVuZGVyRmlsdGVyZWRQcm9kdWN0cygpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBQUk9EVUNUUy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hDYXRlZ29yeSA9XHJcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fCBwcm9kdWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9IHByb2R1Y3QubmFtZVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICByZXR1cm4gbWF0Y2hDYXRlZ29yeSAmJiBtYXRjaFNlYXJjaDtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RJbWFnZShwcm9kdWN0KSB7XHJcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gXCIvaW1hZ2VzL3Byb2R1Y3RzL1wiO1xyXG4gICAgICBpZiAocHJvZHVjdC5pbWFnZSAmJiBwcm9kdWN0LmltYWdlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtiYXNlUGF0aH0ke3Byb2R1Y3QuaW1hZ2V9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFja2VfaW1nX3Byb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdEdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZpbHRlcmVkLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgcHJvZHVjdEdyaWQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0xIGNvbC1zbS00IGNvbC1tZC0zIGNvbC1sZy0yLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHByb2R1Y3QtY2FyZCBzaGFkb3ctc20gYm9yZGVyLTAgcm91bmRlZC00IHB4LTIgcHQtMyBwYi0yIGgtMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtcmlnaHQtYnRuXCIgZGF0YS1pZD1cIiR7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdC5pZFxyXG4gICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJ0LXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC1sZWZ0LWJhZGdlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIGJnLWRhbmdlciB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwcm9kdWN0LWJhZGdlXCI+JHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHlcclxuICAgICAgICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZCBwLTEgcHJvZHVjdC1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIke2dldFByb2R1Y3RJbWFnZShwcm9kdWN0KX1cIlxyXG4gICAgICAgICAgICBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7dGhpcy5zcmM9JyR7ZmFja2VfaW1nX3Byb2R1Y3R9J1wiXHJcbiAgICAgICAgICAgIGFsdD1cIiR7cHJvZHVjdC5uYW1lfVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiA4MHB4OyBvYmplY3QtZml0OiBjb250YWluXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSBtYi0xIHByb2R1Y3QtdGl0bGVcIj4ke3Byb2R1Y3QubmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgZnctYm9sZCBtYi0wIHByb2R1Y3QtcHJpY2VcIj4ke3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlXHJcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfSBESDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlYmluZCBhZGQgdG8gY2FydCBldmVudHNcclxuICAgIGJpbmRBZGRUb0NhcnRCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiaW5kQWRkVG9DYXJ0QnV0dG9ucygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9wLXJpZ2h0LWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcGFyc2VJbnQoYnV0dG9uLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBQUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBwcm9kdWN0SWQpO1xyXG4gICAgICAgIGlmICghcHJvZHVjdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBleGlzdGluZyA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gcHJvZHVjdElkKTtcclxuICAgICAgICBjb25zdCBzdG9jayA9IHByb2R1Y3QucXVhbnRpdHk7XHJcblxyXG4gICAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgICAgaWYgKGV4aXN0aW5nLnF1YW50aXR5IDwgc3RvY2spIHtcclxuICAgICAgICAgICAgZXhpc3RpbmcucXVhbnRpdHkrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FydC5wdXNoKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJDYXJ0KCkge1xyXG4gICAgY2FydENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IHN1YnRvdGFsID0gMDtcclxuXHJcbiAgICBjYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3Qgc3RvY2sgPSBQUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBpdGVtLmlkKT8ucXVhbnRpdHkgPz8gMDtcclxuICAgICAgc3VidG90YWwgKz0gaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7XHJcblxyXG4gICAgICBjYXJ0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgY2FydC1pdGVtXCIgZGF0YS1pZD1cIiR7XHJcbiAgICAgICAgICBpdGVtLmlkXHJcbiAgICAgICAgfVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSBmdy1zZW1pYm9sZCBjYXJ0LWl0ZW0tbmFtZVwiPiR7XHJcbiAgICAgICAgICAgIGl0ZW0ubmFtZVxyXG4gICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgZnctYm9sZCBjYXJ0LWl0ZW0tcHJpY2VcIj4ke2l0ZW0ucHJpY2UudG9GaXhlZChcclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgKX0gREg8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodCByb3VuZGVkLXBpbGwgcHgtMiBweS0xIG14LTIgcXR5LWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gcC0wIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHRleHQtZGFya1wiIHN0eWxlPVwid2lkdGg6IDIycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJkZWNyZWFzZVF0eSgke2l0ZW0uaWR9KVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbWludXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gdGV4dC1jZW50ZXIgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgcXR5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiJHtpdGVtLnF1YW50aXR5fVwiIHJlYWRvbmx5IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmtcIiBzdHlsZT1cIndpZHRoOiAyMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPVwiaW5jcmVhc2VRdHkoJHtpdGVtLmlkfSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcmVtb3ZlIHRleHQtZGFuZ2VyIHAtMSBiZy10cmFuc3BhcmVudCBib3JkZXItMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJyZW1vdmVJdGVtKCR7aXRlbS5pZH0pXCIgdGl0bGU9XCJTdXBwcmltZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VidG90YWxFbGVtZW50LmlubmVyVGV4dCA9IGAke3N1YnRvdGFsLnRvRml4ZWQoMil9IERIYDtcclxuICB9XHJcblxyXG4gIC8vIHdpbmRvdy5pbmNyZWFzZVF0eSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gIC8vICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gIC8vICAgY29uc3Qgc3RvY2sgPSBQUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBpZCk/LnF1YW50aXR5ID8/IDA7XHJcbiAgLy8gICBpZiAoaXRlbSAmJiBpdGVtLnF1YW50aXR5IDwgc3RvY2spIHtcclxuICAvLyAgICAgaXRlbS5xdWFudGl0eSsrO1xyXG4gIC8vICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcbiAgd2luZG93LmluY3JlYXNlUXR5ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICBpdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHdpbmRvdy5kZWNyZWFzZVF0eSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5xdWFudGl0eSA+IDEpIHtcclxuICAgICAgaXRlbS5xdWFudGl0eS0tO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2luZG93LnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIGNhcnQgPSBjYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG4gIH07XHJcbiAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuXHJcbi8vIEhvbGRzIHRoZSBjdXJyZW50IGNhcnQgYmVmb3JlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG5sZXQgcGVuZGluZ0RlbWFuZGUgPSBbXTtcclxuXHJcbmNvbnN0IGNvbW1hbmRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiNhZGRDb21tYW5kZVwiXScpO1xyXG5pZiAoY29tbWFuZGVyQnV0dG9uKSB7XHJcbiAgY29tbWFuZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJ0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJWb3RyZSBwYW5pZXIgZXN0IHZpZGUuIEFqb3V0ZXogZGVzIHByb2R1aXRzIGF2YW50IGRlIGNvbW1hbmRlci5cIilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBlbmRpbmdEZW1hbmRlID0gWy4uLmNhcnQubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtIH0pKV07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwZW5kaW5nRGVtYW5kZSk7XHJcbiAgICAkKFwiI2FkZENvbW1hbmRlXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KTtcclxufVxyXG4vLyBTYXZlIERlbWFuZGUgbG9naWNcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtZGVtYW5kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmICghcGVuZGluZ0RlbWFuZGUgfHwgcGVuZGluZ0RlbWFuZGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJBdWN1bmUgZG9ubsOpZSBkZSBwYW5pZXIgw6AgZW52b3llci5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgcmVxdWlyZWQgaW5wdXQvc2VsZWN0IGZpZWxkcyBcclxuICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFtcclxuICAgIHsgaWQ6IFwiZGVtYW5kZXVyX2lkXCIsIGxhYmVsOiBcIkRlbWFuZGV1clwiIH0sXHJcbiAgICB7IGlkOiBcInJlY2VwdGV1cl9pZFwiLCBsYWJlbDogXCJSw6ljZXB0ZXVyXCIgfSxcclxuICAgIHsgaWQ6IFwiZGVzY3JpcHRpb25cIiwgbGFiZWw6IFwiZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgeyBpZDogXCJpcHBcIiwgbGFiZWw6IFwiSVBQXCIgfSxcclxuICAgIHsgaWQ6IFwibm9tX3BhdGllbnRcIiwgbGFiZWw6IFwiTm9tIGR1IHBhdGllbnRcIiB9LFxyXG4gICAgeyBpZDogXCJkb3NzaWVyX3BhdGllbnRcIiwgbGFiZWw6IFwiRG9zc2llciBkdSBwYXRpZW50XCIgfVxyXG4gIF07XHJcblxyXG4gIC8vIFZhbGlkYXRlIGVhY2ggZmllbGRcclxuICBmb3IgKGxldCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZC5pZCk7XHJcbiAgICBpZiAoIWVsIHx8ICFlbC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKGBWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIDogJHtmaWVsZC5sYWJlbH1gKTtcclxuICAgICAgZWwuZm9jdXMoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBkZW1hbmRldXJfaWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtYW5kZXVyX2lkXCIpLnZhbHVlLFxyXG4gICAgcmVjZXB0ZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSxcclxuICAgIHVyZ2VudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmdlbnRcIikuY2hlY2tlZCA/IDEgOiAwLFxyXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICBpcHA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXBwXCIpLnZhbHVlLFxyXG4gICAgbm9tX3BhdGllbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tX3BhdGllbnRcIikudmFsdWUsXHJcbiAgICBkb3NzaWVyX3BhdGllbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9zc2llcl9wYXRpZW50XCIpLnZhbHVlLFxyXG4gICAgbGlnbmVzOiBwZW5kaW5nRGVtYW5kZSxcclxuICB9O1xyXG5cclxuICBmZXRjaChcIi92ZW50ZS9zYXZlLWRlbWFuZGVcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBzZXJ2ZXVyXCIpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJEZW1hbmRlIGVucmVnaXN0csOpZSBhdmVjIHN1Y2PDqHMhXCIpO1xyXG4gICAgICAkKFwiI2FkZENvbW1hbmRlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgIC8vIENsZWFyIGNhcnRcclxuICAgICAgY2FydCA9IFtdO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcblxyXG4gICAgICAvLyBSZXNldCBtb2RhbCBmb3JtIGZpZWxkc1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbWFuZGV1cl9pZFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjZXB0ZXVyX2lkXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmdlbnRcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpcHBcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbV9wYXRpZW50XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3NzaWVyX3BhdGllbnRcIikudmFsdWUgPSBcIlwiO1xyXG5cclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGRlIGxhIGRlbWFuZGUuXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkQXJyYXkgPSBBcnJheTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgSVNfQ09OU1RSVUNUT1IgPSBpc0NvbnN0cnVjdG9yKHRoaXMpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgJiYgISh0aGlzID09PSAkQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKE8sIGl0ZXJhdG9yTWV0aG9kKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBJU19DT05TVFJVQ1RPUiA/IG5ldyB0aGlzKCkgOiBbXTtcbiAgICBmb3IgKDshKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgcmVzdWx0ID0gSVNfQ09OU1RSVUNUT1IgPyBuZXcgdGhpcyhsZW5ndGgpIDogJEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyAkVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcbiAgICAgIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPT0gbm9uXG4gICAgICB8fCAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIEZGOTkrIGJ1Z1xudmFyIEJST0tFTl9PTl9TUEFSU0UgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5jbHVkZXMgLS0gZGV0ZWN0aW9uXG4gIHJldHVybiAhQXJyYXkoMSkuaW5jbHVkZXMoKTtcbn0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCUk9LRU5fT05fU1BBUlNFIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJykuZjtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyAhPT0gZGVmaW5lUHJvcGVydGllcywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSW5kZXhlZE9iamVjdChpdCksIGtleSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG52YXIgc3RyaW5nSW5kZXhPZiA9IHVuY3VycnlUaGlzKCcnLmluZGV4T2YpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfnN0cmluZ0luZGV4T2YoXG4gICAgICB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKSxcbiAgICAgIHRvU3RyaW5nKG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKSksXG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmFja2VfaW1nX3Byb2R1Y3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUFJPRFVDVFMiLCJjYXJ0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlYXJjaFF1ZXJ5IiwiY2FydENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJ0b3RhbEVsZW1lbnQiLCJwcm9kdWN0R3JpZCIsInNlYXJjaElucHV0IiwiY2F0ZWdvcnlCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJiIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGF0YXNldCIsImNhdGVnb3J5IiwicmVuZGVyRmlsdGVyZWRQcm9kdWN0cyIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwibWF0Y2hDYXRlZ29yeSIsIm1hdGNoU2VhcmNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXRQcm9kdWN0SW1hZ2UiLCJiYXNlUGF0aCIsImltYWdlIiwidHJpbSIsImNvbmNhdCIsImlubmVySFRNTCIsImlkIiwicXVhbnRpdHkiLCJwYXJzZUZsb2F0IiwicHJpY2UiLCJ0b0ZpeGVkIiwiYmluZEFkZFRvQ2FydEJ1dHRvbnMiLCJidXR0b24iLCJwcm9kdWN0SWQiLCJwYXJzZUludCIsImZpbmQiLCJwIiwiZXhpc3RpbmciLCJzdG9jayIsInB1c2giLCJfb2JqZWN0U3ByZWFkIiwicmVuZGVyQ2FydCIsInN1YnRvdGFsIiwiaXRlbSIsIl9QUk9EVUNUUyRmaW5kJHF1YW50aSIsIl9QUk9EVUNUUyRmaW5kIiwiaW5uZXJUZXh0IiwiaW5jcmVhc2VRdHkiLCJkZWNyZWFzZVF0eSIsInJlbW92ZUl0ZW0iLCJwZW5kaW5nRGVtYW5kZSIsImNvbW1hbmRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ0b2FzdHIiLCJlcnJvciIsIl90b0NvbnN1bWFibGVBcnJheSIsIm1hcCIsIiQiLCJtb2RhbCIsInJlcXVpcmVkRmllbGRzIiwibGFiZWwiLCJfaSIsIl9yZXF1aXJlZEZpZWxkcyIsImZpZWxkIiwiZWwiLCJmb2N1cyIsImRhdGEiLCJkZW1hbmRldXJfaWQiLCJyZWNlcHRldXJfaWQiLCJ1cmdlbnQiLCJjaGVja2VkIiwiZGVzY3JpcHRpb24iLCJpcHAiLCJub21fcGF0aWVudCIsImRvc3NpZXJfcGF0aWVudCIsImxpZ25lcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=