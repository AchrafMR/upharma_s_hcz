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
      cartContainer.innerHTML += "\n        <div class=\"d-flex justify-content-between align-items-center cart-item\" data-id=\"".concat(item.id, "\">\n          <span class=\"text-uppercase fw-semibold cart-item-name\">").concat(item.name, "</span>\n          <span class=\"text-danger fw-bold cart-item-price\">").concat(item.price.toFixed(2), " DH</span>\n          <div class=\"d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control\">\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                    onclick=\"decreaseQty(").concat(item.id, ")\">\n              <i class=\"fa-solid fa-minus\"></i>\n            </button>\n            <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\"\n                   value=\"").concat(item.quantity, "\" readonly />\n            ").concat(item.quantity < stock ? "<button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                            onclick=\"increaseQty(".concat(item.id, ")\">\n                    <i class=\"fa-solid fa-plus\"></i>\n                   </button>") : "", "\n          </div>\n          <button class=\"btn btn-sm btn-remove text-danger p-1 bg-transparent border-0\"\n                  onclick=\"removeItem(").concat(item.id, ")\" title=\"Supprimer\">\n            <i class=\"fa-solid fa-trash\"></i>\n          </button>\n        </div>\n      ");
    });
    subtotalElement.innerText = "".concat(subtotal.toFixed(2), " DH");
  }
  window.increaseQty = function (id) {
    var _PRODUCTS$find$quanti2, _PRODUCTS$find2;
    var item = cart.find(function (p) {
      return p.id === id;
    });
    var stock = (_PRODUCTS$find$quanti2 = (_PRODUCTS$find2 = PRODUCTS.find(function (p) {
      return p.id === id;
    })) === null || _PRODUCTS$find2 === void 0 ? void 0 : _PRODUCTS$find2.quantity) !== null && _PRODUCTS$find$quanti2 !== void 0 ? _PRODUCTS$find$quanti2 : 0;
    if (item && item.quantity < stock) {
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
    var data = {
      demandeur_id: document.getElementById("demandeur_id").value,
      recepteur_id: document.getElementById("recepteur_id").value,
      type_demande: document.getElementById("type_demande").value,
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
      document.getElementById("type_demande").value = "consommation";
      document.getElementById("urgent").checked = false;
      document.getElementById("description").value = "";
      document.getElementById("ipp").value = "";
      document.getElementById("nom_patient").value = "";
      document.getElementById("dossier_patient").value = "";

      // reset filters
      selectedCategory = "";
      searchQuery = "";
      searchInput.value = "";
      renderFilteredProducts();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsaUZBQTBCOztBQUVwRCxpREFBaUQsb0NBQW9DOztBQUVyRjtBQUNBO0FBQ0EsSUFBSSxrRUFBa0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNmWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHFDQUFxQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM5RixxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRTNEO0FBQ0E7QUFDQSxJQUFJLGtEQUFrRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDeEJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFekU7O0FBRUE7QUFDQTtBQUNBLElBQUksMEVBQTBFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksNkdBQXdDO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLElBQUksdUVBQXVFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmVudGUvcG9pbnRfdmVudGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFja2VfaW1nX3Byb2R1Y3QgZnJvbSBcIi4uLy4uL2ltYWdlcy9mYWNrZV9pbWdfcHJvZHVjdC5wbmdcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgUFJPRFVDVFMgPSB3aW5kb3cuUFJPRFVDVFMgfHwgW107XHJcbiAgbGV0IGNhcnQgPSBbXTtcclxuICBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsXCI7XHJcbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gXCJcIjtcclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3VidG90YWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LXN1YnRvdGFsXCIpO1xyXG4gIGNvbnN0IHByb2R1Y3RHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWxpc3RcIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2VhcmNoXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktbmF2LWJ0blwiKTtcclxuXHJcbiAgLy8gSGFuZGxlIENhdGVnb3J5IENsaWNrXHJcbiAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmRhdGFzZXQuY2F0ZWdvcnk7XHJcbiAgICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBIYW5kbGUgU2VhcmNoIElucHV0XHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFBST0RVQ1RTLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBtYXRjaENhdGVnb3J5ID1cclxuICAgICAgICBzZWxlY3RlZENhdGVnb3J5ID09PSBcImFsbFwiIHx8IHByb2R1Y3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICAgIGNvbnN0IG1hdGNoU2VhcmNoID0gcHJvZHVjdC5uYW1lXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHJldHVybiBtYXRjaENhdGVnb3J5ICYmIG1hdGNoU2VhcmNoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvZHVjdEltYWdlKHByb2R1Y3QpIHtcclxuICAgICAgY29uc3QgYmFzZVBhdGggPSBcIi9pbWFnZXMvcHJvZHVjdHMvXCI7XHJcbiAgICAgIGlmIChwcm9kdWN0LmltYWdlICYmIHByb2R1Y3QuaW1hZ2UudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VQYXRofSR7cHJvZHVjdC5pbWFnZX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWNrZV9pbWdfcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwcm9kdWN0R3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZmlsdGVyZWQuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICBwcm9kdWN0R3JpZC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwLTEgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTItNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcHJvZHVjdC1jYXJkIHNoYWRvdy1zbSBib3JkZXItMCByb3VuZGVkLTQgcHgtMiBwdC0zIHBiLTIgaC0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHBvc2l0aW9uLWFic29sdXRlIHRvcC1yaWdodC1idG5cIiBkYXRhLWlkPVwiJHtcclxuICAgICAgICAgICAgICBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhcnQtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLWxlZnQtYmFkZ2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1jaXJjbGUgYmctZGFuZ2VyIHRleHQtd2hpdGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHByb2R1Y3QtYmFkZ2VcIj4ke1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eVxyXG4gICAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlciByb3VuZGVkIHAtMSBwcm9kdWN0LWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIiR7Z2V0UHJvZHVjdEltYWdlKHByb2R1Y3QpfVwiXHJcbiAgICAgICAgICAgIG9uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDt0aGlzLnNyYz0nJHtmYWNrZV9pbWdfcHJvZHVjdH0nXCJcclxuICAgICAgICAgICAgYWx0PVwiJHtwcm9kdWN0Lm5hbWV9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICBzdHlsZT1cIm1heC1oZWlnaHQ6IDgwcHg7IG9iamVjdC1maXQ6IGNvbnRhaW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTEgcHJvZHVjdC10aXRsZVwiPiR7cHJvZHVjdC5uYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIG1iLTAgcHJvZHVjdC1wcmljZVwiPiR7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2VcclxuICAgICAgICAgICAgICApLnRvRml4ZWQoMil9IERIPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmViaW5kIGFkZCB0byBjYXJ0IGV2ZW50c1xyXG4gICAgYmluZEFkZFRvQ2FydEJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJpbmRBZGRUb0NhcnRCdXR0b25zKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3AtcmlnaHQtYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwYXJzZUludChidXR0b24uZGF0YXNldC5pZCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IFBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2R1Y3RJZCk7XHJcbiAgICAgICAgaWYgKCFwcm9kdWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBwcm9kdWN0SWQpO1xyXG4gICAgICAgIGNvbnN0IHN0b2NrID0gcHJvZHVjdC5xdWFudGl0eTtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgICBpZiAoZXhpc3RpbmcucXVhbnRpdHkgPCBzdG9jaykge1xyXG4gICAgICAgICAgICBleGlzdGluZy5xdWFudGl0eSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYXJ0LnB1c2goeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlckNhcnQoKSB7XHJcbiAgICBjYXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgc3VidG90YWwgPSAwO1xyXG5cclxuICAgIGNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9jayA9IFBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IGl0ZW0uaWQpPy5xdWFudGl0eSA/PyAwO1xyXG4gICAgICBzdWJ0b3RhbCArPSBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eTtcclxuXHJcbiAgICAgIGNhcnRDb250YWluZXIuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBjYXJ0LWl0ZW1cIiBkYXRhLWlkPVwiJHtcclxuICAgICAgICAgIGl0ZW0uaWRcclxuICAgICAgICB9XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtdXBwZXJjYXNlIGZ3LXNlbWlib2xkIGNhcnQtaXRlbS1uYW1lXCI+JHtcclxuICAgICAgICAgICAgaXRlbS5uYW1lXHJcbiAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIGNhcnQtaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfSBESDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0IHJvdW5kZWQtcGlsbCBweC0yIHB5LTEgbXgtMiBxdHktY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrXCIgc3R5bGU9XCJ3aWR0aDogMjJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25jbGljaz1cImRlY3JlYXNlUXR5KCR7aXRlbS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy10cmFuc3BhcmVudCBxdHktaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke2l0ZW0ucXVhbnRpdHl9XCIgcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5IDwgc3RvY2tcclxuICAgICAgICAgICAgICAgID8gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmtcIiBzdHlsZT1cIndpZHRoOiAyMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJpbmNyZWFzZVF0eSgke2l0ZW0uaWR9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmBcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1yZW1vdmUgdGV4dC1kYW5nZXIgcC0xIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wXCJcclxuICAgICAgICAgICAgICAgICAgb25jbGljaz1cInJlbW92ZUl0ZW0oJHtpdGVtLmlkfSlcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdWJ0b3RhbEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7c3VidG90YWwudG9GaXhlZCgyKX0gREhgO1xyXG4gIH1cclxuXHJcbiAgd2luZG93LmluY3JlYXNlUXR5ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBzdG9jayA9IFBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKT8ucXVhbnRpdHkgPz8gMDtcclxuICAgIGlmIChpdGVtICYmIGl0ZW0ucXVhbnRpdHkgPCBzdG9jaykge1xyXG4gICAgICBpdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cuZGVjcmVhc2VRdHkgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBjYXJ0LmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgIGlmIChpdGVtICYmIGl0ZW0ucXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHktLTtcclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBjYXJ0ID0gY2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcclxuICAgIHJlbmRlckNhcnQoKTtcclxuICB9O1xyXG4gICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcblxyXG4vLyBIb2xkcyB0aGUgY3VycmVudCBjYXJ0IGJlZm9yZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXJcclxubGV0IHBlbmRpbmdEZW1hbmRlID0gW107XHJcblxyXG5jb25zdCBjb21tYW5kZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXJnZXQ9XCIjYWRkQ29tbWFuZGVcIl0nKTtcclxuaWYgKGNvbW1hbmRlckJ1dHRvbikge1xyXG4gIGNvbW1hbmRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2FydC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiVm90cmUgcGFuaWVyIGVzdCB2aWRlLiBBam91dGV6IGRlcyBwcm9kdWl0cyBhdmFudCBkZSBjb21tYW5kZXIuXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwZW5kaW5nRGVtYW5kZSA9IFsuLi5jYXJ0Lm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbSB9KSldO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGVuZGluZ0RlbWFuZGUpO1xyXG5cclxuICAgICQoXCIjYWRkQ29tbWFuZGVcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG59XHJcbi8vIFNhdmUgRGVtYW5kZSBsb2dpY1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1kZW1hbmRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKCFwZW5kaW5nRGVtYW5kZSB8fCBwZW5kaW5nRGVtYW5kZS5sZW5ndGggPT09IDApIHtcclxuICAgIHRvYXN0ci5lcnJvcihcIkF1Y3VuZSBkb25uw6llIGRlIHBhbmllciDDoCBlbnZveWVyLlwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBkZW1hbmRldXJfaWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtYW5kZXVyX2lkXCIpLnZhbHVlLFxyXG4gICAgcmVjZXB0ZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSxcclxuICAgIHR5cGVfZGVtYW5kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBlX2RlbWFuZGVcIikudmFsdWUsXHJcbiAgICB1cmdlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW50XCIpLmNoZWNrZWQgPyAxIDogMCxcclxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlLFxyXG4gICAgaXBwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwcFwiKS52YWx1ZSxcclxuICAgIG5vbV9wYXRpZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbV9wYXRpZW50XCIpLnZhbHVlLFxyXG4gICAgZG9zc2llcl9wYXRpZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvc3NpZXJfcGF0aWVudFwiKS52YWx1ZSxcclxuICAgIGxpZ25lczogcGVuZGluZ0RlbWFuZGUsXHJcbiAgfTtcclxuXHJcbiAgZmV0Y2goXCIvdmVudGUvc2F2ZS1kZW1hbmRlXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgc2VydmV1clwiKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiRGVtYW5kZSBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzIVwiKTtcclxuICAgICAgJChcIiNhZGRDb21tYW5kZVwiKS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgICAvLyBDbGVhciBjYXJ0XHJcbiAgICAgIGNhcnQgPSBbXTtcclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG5cclxuICAgICAgLy8gUmVzZXQgbW9kYWwgZm9ybSBmaWVsZHNcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1hbmRldXJfaWRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZV9kZW1hbmRlXCIpLnZhbHVlID0gXCJjb25zb21tYXRpb25cIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmdlbnRcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpcHBcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbV9wYXRpZW50XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3NzaWVyX3BhdGllbnRcIikudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgLy8gcmVzZXQgZmlsdGVyc1xyXG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gXCJcIjtcclxuICAgICAgc2VhcmNoUXVlcnkgPSBcIlwiO1xyXG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnZW5yZWdpc3RyZW1lbnQgZGUgbGEgZGVtYW5kZS5cIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4gXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxudmFyICRBcnJheSA9IEFycmF5O1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBJU19DT05TVFJVQ1RPUiA9IGlzQ29uc3RydWN0b3IodGhpcyk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAmJiAhKHRoaXMgPT09ICRBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoTywgaXRlcmF0b3JNZXRob2QpO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IElTX0NPTlNUUlVDVE9SID8gbmV3IHRoaXMoKSA6IFtdO1xuICAgIGZvciAoOyEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICByZXN1bHQgPSBJU19DT05TVFJVQ1RPUiA/IG5ldyB0aGlzKGxlbmd0aCkgOiAkQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93ICRUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBQUk9QRVJfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuUFJPUEVSO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4vLyBjaGVjayB0aGF0IGEgbWV0aG9kIHdvcmtzIHdpdGggdGhlIGNvcnJlY3QgbGlzdFxuLy8gb2Ygd2hpdGVzcGFjZXMgYW5kIGhhcyBhIGNvcnJlY3QgbmFtZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0oKVxuICAgICAgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9PSBub25cbiAgICAgIHx8IChQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUUpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluY2x1ZGVzO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gRkY5OSsgYnVnXG52YXIgQlJPS0VOX09OX1NQQVJTRSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmNsdWRlcyAtLSBkZXRlY3Rpb25cbiAgcmV0dXJuICFBcnJheSgxKS5pbmNsdWRlcygpO1xufSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJST0tFTl9PTl9TUEFSU0UgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKS5mO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzICE9PSBkZWZpbmVQcm9wZXJ0aWVzLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBGT1JDRUQgPSAhREVTQ1JJUFRPUlMgfHwgZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JbmRleGVkT2JqZWN0KGl0KSwga2V5KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gICAgdmFyIGtleXMgPSBvd25LZXlzKE8pO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBrZXksIGRlc2NyaXB0b3I7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywga2V5ID0ga2V5c1tpbmRleCsrXSk7XG4gICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbnZhciBzdHJpbmdJbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+c3RyaW5nSW5kZXhPZihcbiAgICAgIHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpLFxuICAgICAgdG9TdHJpbmcobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpKSxcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmYWNrZV9pbWdfcHJvZHVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJQUk9EVUNUUyIsImNhcnQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VhcmNoUXVlcnkiLCJjYXJ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnRvdGFsRWxlbWVudCIsInByb2R1Y3RHcmlkIiwic2VhcmNoSW5wdXQiLCJjYXRlZ29yeUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkYXRhc2V0IiwiY2F0ZWdvcnkiLCJyZW5kZXJGaWx0ZXJlZFByb2R1Y3RzIiwidmFsdWUiLCJmaWx0ZXJlZCIsImZpbHRlciIsInByb2R1Y3QiLCJtYXRjaENhdGVnb3J5IiwibWF0Y2hTZWFyY2giLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImdldFByb2R1Y3RJbWFnZSIsImJhc2VQYXRoIiwiaW1hZ2UiLCJ0cmltIiwiY29uY2F0IiwiaW5uZXJIVE1MIiwiaWQiLCJxdWFudGl0eSIsInBhcnNlRmxvYXQiLCJwcmljZSIsInRvRml4ZWQiLCJiaW5kQWRkVG9DYXJ0QnV0dG9ucyIsImJ1dHRvbiIsInByb2R1Y3RJZCIsInBhcnNlSW50IiwiZmluZCIsInAiLCJleGlzdGluZyIsInN0b2NrIiwicHVzaCIsIl9vYmplY3RTcHJlYWQiLCJyZW5kZXJDYXJ0Iiwic3VidG90YWwiLCJpdGVtIiwiX1BST0RVQ1RTJGZpbmQkcXVhbnRpIiwiX1BST0RVQ1RTJGZpbmQiLCJpbm5lclRleHQiLCJpbmNyZWFzZVF0eSIsIl9QUk9EVUNUUyRmaW5kJHF1YW50aTIiLCJfUFJPRFVDVFMkZmluZDIiLCJkZWNyZWFzZVF0eSIsInJlbW92ZUl0ZW0iLCJwZW5kaW5nRGVtYW5kZSIsImNvbW1hbmRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ0b2FzdHIiLCJlcnJvciIsIl90b0NvbnN1bWFibGVBcnJheSIsIm1hcCIsIiQiLCJtb2RhbCIsImRhdGEiLCJkZW1hbmRldXJfaWQiLCJyZWNlcHRldXJfaWQiLCJ0eXBlX2RlbWFuZGUiLCJ1cmdlbnQiLCJjaGVja2VkIiwiZGVzY3JpcHRpb24iLCJpcHAiLCJub21fcGF0aWVudCIsImRvc3NpZXJfcGF0aWVudCIsImxpZ25lcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=