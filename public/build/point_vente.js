(self["webpackChunk"] = self["webpackChunk"] || []).push([["point_vente"],{

/***/ "./assets/js/vente/point_vente.js":
/*!****************************************!*\
  !*** ./assets/js/vente/point_vente.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
window.addEventListener("DOMContentLoaded", function () {
  var PRODUCTS = window.PRODUCTS || [];
  var cart = [];
  var cartContainer = document.getElementById("cart-items-container");
  var subtotalElement = document.getElementById("cart-subtotal");
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
  function renderCart() {
    cartContainer.innerHTML = "";
    var subtotal = 0;
    cart.forEach(function (item) {
      var _PRODUCTS$find$quanti, _PRODUCTS$find;
      var stock = (_PRODUCTS$find$quanti = (_PRODUCTS$find = PRODUCTS.find(function (p) {
        return p.id === item.id;
      })) === null || _PRODUCTS$find === void 0 ? void 0 : _PRODUCTS$find.quantity) !== null && _PRODUCTS$find$quanti !== void 0 ? _PRODUCTS$find$quanti : 0;
      subtotal += item.price * item.quantity;
      cartContainer.innerHTML += "\n        <div class=\"d-flex justify-content-between align-items-center cart-item\" data-id=\"".concat(item.id, "\">\n          <span class=\"text-uppercase fw-semibold cart-item-name\">").concat(item.name, "</span>\n          <span class=\"text-danger fw-bold cart-item-price\">").concat(item.price.toFixed(2), " DH</span>\n          <div class=\"d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control\">\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                    onclick=\"decreaseQty(").concat(item.id, ")\">\n              <i class=\"fa-solid fa-minus\"></i>\n            </button>\n            <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\"\n                   value=\"").concat(item.quantity, "\" readonly />\n            ").concat(item.quantity < stock ? "<button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                          onclick=\"increaseQty(".concat(item.id, ")\">\n                  <i class=\"fa-solid fa-plus\"></i>\n                 </button>") : "", "\n          </div>\n          <button class=\"btn btn-sm btn-remove text-danger p-1 bg-transparent border-0\"\n                  onclick=\"removeItem(").concat(item.id, ")\" title=\"Supprimer\">\n            <i class=\"fa-solid fa-trash\"></i>\n          </button>\n        </div>\n      ");
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
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-de5070","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/point_vente.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgUFJPRFVDVFMgPSB3aW5kb3cuUFJPRFVDVFMgfHwgW107XHJcbiAgbGV0IGNhcnQgPSBbXTtcclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3VidG90YWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LXN1YnRvdGFsXCIpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvcC1yaWdodC1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvZHVjdElkID0gcGFyc2VJbnQoYnV0dG9uLmRhdGFzZXQuaWQpO1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gUFJPRFVDVFMuZmluZCgocCkgPT4gcC5pZCA9PT0gcHJvZHVjdElkKTtcclxuICAgICAgaWYgKCFwcm9kdWN0KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBleGlzdGluZyA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gcHJvZHVjdElkKTtcclxuICAgICAgY29uc3Qgc3RvY2sgPSBwcm9kdWN0LnF1YW50aXR5O1xyXG5cclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nLnF1YW50aXR5IDwgc3RvY2spIHtcclxuICAgICAgICAgIGV4aXN0aW5nLnF1YW50aXR5Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhcnQucHVzaCh7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyQ2FydCgpIHtcclxuICAgIGNhcnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGxldCBzdWJ0b3RhbCA9IDA7XHJcblxyXG4gICAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b2NrID0gUFJPRFVDVFMuZmluZCgocCkgPT4gcC5pZCA9PT0gaXRlbS5pZCk/LnF1YW50aXR5ID8/IDA7XHJcbiAgICAgIHN1YnRvdGFsICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG5cclxuICAgICAgY2FydENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIGNhcnQtaXRlbVwiIGRhdGEtaWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtdXBwZXJjYXNlIGZ3LXNlbWlib2xkIGNhcnQtaXRlbS1uYW1lXCI+JHtpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIGNhcnQtaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZS50b0ZpeGVkKDIpfSBESDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0IHJvdW5kZWQtcGlsbCBweC0yIHB5LTEgbXgtMiBxdHktY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrXCIgc3R5bGU9XCJ3aWR0aDogMjJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25jbGljaz1cImRlY3JlYXNlUXR5KCR7aXRlbS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy10cmFuc3BhcmVudCBxdHktaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke2l0ZW0ucXVhbnRpdHl9XCIgcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgJHtpdGVtLnF1YW50aXR5IDwgc3RvY2tcclxuICAgICAgICAgICAgICA/IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrXCIgc3R5bGU9XCJ3aWR0aDogMjJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25jbGljaz1cImluY3JlYXNlUXR5KCR7aXRlbS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICA8L2J1dHRvbj5gXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcmVtb3ZlIHRleHQtZGFuZ2VyIHAtMSBiZy10cmFuc3BhcmVudCBib3JkZXItMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJyZW1vdmVJdGVtKCR7aXRlbS5pZH0pXCIgdGl0bGU9XCJTdXBwcmltZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VidG90YWxFbGVtZW50LmlubmVyVGV4dCA9IGAke3N1YnRvdGFsLnRvRml4ZWQoMil9IERIYDtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5pbmNyZWFzZVF0eSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgY29uc3Qgc3RvY2sgPSBQUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBpZCk/LnF1YW50aXR5ID8/IDA7XHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnF1YW50aXR5IDwgc3RvY2spIHtcclxuICAgICAgaXRlbS5xdWFudGl0eSsrO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2luZG93LmRlY3JlYXNlUXR5ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnF1YW50aXR5ID4gMSkge1xyXG4gICAgICBpdGVtLnF1YW50aXR5LS07XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgY2FydCA9IGNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XHJcbiAgICByZW5kZXJDYXJ0KCk7XHJcbiAgfTtcclxufSk7XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZyk7XG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xudmFyIHJlZ0V4cEV4ZWMgPSB1bmN1cnJ5VGhpcyhuYW1lUkUuZXhlYyk7XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpLmY7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgIT09IGRlZmluZVByb3BlcnRpZXMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0luZGV4ZWRPYmplY3QoaXQpLCBrZXkpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGtleSwgZGVzY3JpcHRvcjtcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBrZXkgPSBrZXlzW2luZGV4KytdKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBST0RVQ1RTIiwiY2FydCIsImNhcnRDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VidG90YWxFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJwcm9kdWN0SWQiLCJwYXJzZUludCIsImRhdGFzZXQiLCJpZCIsInByb2R1Y3QiLCJmaW5kIiwicCIsImV4aXN0aW5nIiwic3RvY2siLCJxdWFudGl0eSIsInB1c2giLCJfb2JqZWN0U3ByZWFkIiwicmVuZGVyQ2FydCIsImlubmVySFRNTCIsInN1YnRvdGFsIiwiaXRlbSIsIl9QUk9EVUNUUyRmaW5kJHF1YW50aSIsIl9QUk9EVUNUUyRmaW5kIiwicHJpY2UiLCJjb25jYXQiLCJuYW1lIiwidG9GaXhlZCIsImlubmVyVGV4dCIsImluY3JlYXNlUXR5IiwiX1BST0RVQ1RTJGZpbmQkcXVhbnRpMiIsIl9QUk9EVUNUUyRmaW5kMiIsImRlY3JlYXNlUXR5IiwicmVtb3ZlSXRlbSIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=