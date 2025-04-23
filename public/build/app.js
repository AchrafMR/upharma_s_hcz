(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_login_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles/login.scss */ "./assets/styles/login.scss");
/* harmony import */ var _js_vente_cart_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/vente/cart.js */ "./assets/js/vente/cart.js");
/* harmony import */ var _js_vente_cart_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_js_vente_cart_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fontsource_roboto_condensed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fontsource/roboto-condensed */ "./node_modules/@fontsource/roboto-condensed/index.css");
/* harmony import */ var _fontsource_roboto_condensed_400_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fontsource/roboto-condensed/400.css */ "./node_modules/@fontsource/roboto-condensed/400.css");
/* harmony import */ var _fontsource_roboto_condensed_400_italic_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fontsource/roboto-condensed/400-italic.css */ "./node_modules/@fontsource/roboto-condensed/400-italic.css");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery-ui/ui/widgets/autocomplete.js */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker.js */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! jquery-ui/ui/i18n/datepicker-fr.js */ "./node_modules/jquery-ui/ui/i18n/datepicker-fr.js");
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! jquery-ui/themes/base/all.css */ "./node_modules/jquery-ui/themes/base/all.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./plugins/pace */ "./assets/plugins/pace.js");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_plugins_pace__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! fos-router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _images_logoHCZ2_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/logoHCZ2.png */ "./assets/images/logoHCZ2.png");
/* harmony import */ var _images_logoHcz_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/logoHcz.png */ "./assets/images/logoHcz.png");
/* harmony import */ var _images_bg_login_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/bg_login.jpg */ "./assets/images/bg_login.jpg");
/* harmony import */ var _images_26807_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/26807.jpg */ "./assets/images/26807.jpg");
/* harmony import */ var _images_5570863_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/5570863.jpg */ "./assets/images/5570863.jpg");
/* harmony import */ var _images_gestion_patient_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/gestion_patient.png */ "./assets/images/gestion_patient.png");
/* harmony import */ var _images_hospital_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/hospital.png */ "./assets/images/hospital.png");
/* harmony import */ var _images_appointment_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/appointment.png */ "./assets/images/appointment.png");
/* harmony import */ var _images_medical_record_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/medical-record.png */ "./assets/images/medical-record.png");
/* harmony import */ var _images_bill_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/bill.png */ "./assets/images/bill.png");
/* harmony import */ var _images_factures_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/factures.png */ "./assets/images/factures.png");
/* harmony import */ var _images_consulting_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/consulting.png */ "./assets/images/consulting.png");
/* harmony import */ var _images_pec_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/pec.png */ "./assets/images/pec.png");
/* harmony import */ var _images_archive_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/archive.png */ "./assets/images/archive.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMK_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMK.png */ "./assets/images/parametrage/dossiers/logo_HMK.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMS_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMS.png */ "./assets/images/parametrage/dossiers/logo_HMS.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMY_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMY.png */ "./assets/images/parametrage/dossiers/logo_HMY.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMB_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMB.png */ "./assets/images/parametrage/dossiers/logo_HMB.png");
/* harmony import */ var _images_parametrage_dossiers_logo_FCZ_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./images/parametrage/dossiers/_logo_FCZ.png */ "./assets/images/parametrage/dossiers/_logo_FCZ.png");

















/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)



//import js files

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Defaults to weight 400
 // Specify weight
 // Specify weight and style

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;




$(document).ready(function () {
  $.active = false;
  $('body').bind('click keypress', function () {
    $.active = true;
  });
  checkActivity(3600000, 60000, 0); // timeout = 30 minutes, interval = 1 minute.
});

function checkActivity(timeout, interval, elapsed) {
  console.log("ZZ");
  if ($.active) {
    elapsed = 0;
    $.active = false;
    $.get(fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_login'));
  }
  if (elapsed < timeout) {
    elapsed += interval;
    setTimeout(function () {
      checkActivity(timeout, interval, elapsed);
    }, interval);
  } else {
    window.location = fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_logout'); // Redirect to "session expired" page.
  }
}



var datatablesFrench = 'datatables.net-plugins/i18n/fr-FR.mjs';
__webpack_require__.g.datatablesFrench = datatablesFrench;
// import 'datatables.net-select'

// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-select-dt/css/select.dataTables.css';


var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success btn-xs sySweetStyle mr-2',
    cancelButton: 'btn btn-secondary btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
__webpack_require__.g.Swal = swal;
__webpack_require__.g.swalWithBootstrapButtons = swalWithBootstrapButtons;

// start the Stimulus application

var toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
__webpack_require__.g.toastr = toastr;
__webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
__webpack_require__(/*! select2/dist/css/select2.min.css */ "./node_modules/select2/dist/css/select2.min.css");
$.fn.select2.amd.define('select2/i18n/fr', [], __webpack_require__(/*! select2/src/js/select2/i18n/fr */ "./node_modules/select2/src/js/select2/i18n/fr.js"));

__webpack_require__.g.Routing = (fos_router__WEBPACK_IMPORTED_MODULE_27___default());

// require('pace');


__webpack_require__.g.ladda = ladda__WEBPACK_IMPORTED_MODULE_32__;
__webpack_require__(/*! ladda/dist/ladda.min.css */ "./node_modules/ladda/dist/ladda.min.css");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
window.moment = moment;
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
__webpack_require__.g.axios = axios;



















$(document).ready(function () {
  $("select").select2();

  // setInterval(checkSession, 5);

  $("#navbarDropdown").on("click", function () {
    $("#divMenu").toggle("5ms");
  });
  $("html").click(function (e) {
    if ($(e.target).closest('#navbarDropdown').length == 0) $("#divMenu").hide("5ms");
  });
  $("body").on("click", ".menuActions", function () {
    var id = $(this).attr("id");
    $("body #divMenu" + id).toggle("5ms");
    $(".divMenu:not(#divMenu" + id + ")").hide();
  });
  $("html").click(function (e) {
    if ($(e.target).closest('.menuActions').length == 0) $(".divMenu").hide("5ms");
  });
  window.findAllPatientWarnings = function (ipp) {
    $.ajax({
      type: 'POST',
      url: fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('gestion_patient_warnings'),
      data: {
        ipp: ipp
      },
      success: function success(result) {
        if (result != 'error') alert(result);
      }
    });
  };
  window.arrayToOption = function (array) {
    var disableOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = array.map(function (item) {
      var option = new Option(item.text, item.id, false, false);
      if (disableOptions && $.inArray(item.id, disableOptions) >= 0) {
        option.disabled = true;
      }
      return option;
    });
    return options;
  };
  window.dateTimeToString = function (value) {
    var date = new Date(value.date);
    var m = date.getMonth() + 1;
    var month = m.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    var day = date.getDate().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    return date.getFullYear() + "-" + month + "-" + day;
  };
  window.formatNumberToCurrency = function (number) {
    var formattedNumber = new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number);
    return formattedNumber;
  };
  var loader = $(".loader-bg");
  __webpack_require__.g.loader = loader;

  // loader.show();

  $('body').on('click', '.typeRepartition', function (e) {
    var value = $(this).val();
    if (value === 'forfait') {
      $('body #montantForfait').prop('disabled', false);
      $('body #valeurPourcentage').prop('disabled', true);
      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);
      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    } else if (value === 'pourcentage') {
      $('body #valeurPourcentage').prop('disabled', false);
      $('body #montantForfait').prop('disabled', true);
      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);
      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    } else if (value === 'pourcentage_parts') {
      $('body #montantForfait').prop('disabled', true);
      $('body #valeurPourcentage').prop('disabled', true);
      $('body #pourcentageParte').prop('disabled', false);
      $('body #repartition').prop('disabled', false);
      $('body #btnAddPourcentageDet').show();
      $('body .list-quotas').show();
    } else {
      $('body #montantForfait').prop('disabled', true);
      $('body #valeurPourcentage').prop('disabled', true);
      $('body #pourcentageParte').prop('disabled', true);
      $('body #repartition').prop('disabled', true);
      $('body #btnAddPourcentageDet').hide();
      $('body .list-quotas').hide();
    }
  });
  $('body').on('click', '#btnAddPourcentageDet', function (e) {
    var codeQuotas = $("#repartition").val();
    var quotas = $("#repartition option:selected").text();
    var pourcentage = $("#pourcentageParte").val();
    var existingItem = $('body .list-quotas').find('.code-quotas').filter(function () {
      return $(this).text() === codeQuotas;
    });
    if (existingItem.length > 0) {
      return toastr.warning("Vous avez déjà ajouté ce quota");
    } else {
      var item = '<li class="list-group-item list-quotas-item">' + '<div class="d-flex justify-content-start align-items-center">' + '<span class="code-quotas text-danger">' + codeQuotas + '</span>' + '&nbsp-&nbsp<span class="quotas">' + quotas + '</span>' + '&nbsp-&nbsp<span class="pourcentage-quotas">' + pourcentage + ' %</span>' + '<button class="btn ml-auto remove_quotas" type="button"><i class="fa-solid fa-xmark text-danger"></i></button>' + '</div>' + '</li>';
      $('body .list-quotas').prepend(item);
    }
  });
  $("body").on("click", ".add-patient", function () {
    window.open('/gestion/patient/add', '_blank');
  });
  $('body').on("change", ".check_majoration", function (e) {
    var montant = $(this).closest('tr').find('td:eq(4)').text();
    var mt = parseFloat(montant.replace(/\s/g, '').replace(',', '.'));
    if ($(this).prop('checked')) {
      var res = mt + mt * 30 / 100;
      $(this).closest('tr').find('td:eq(6)').html(res.toLocaleString('en-US'));
    } else {
      $(this).closest('tr').find('td:eq(6)').html(montant);
    }
  });
  $("body").on("dblclick", "#det_dossier_imputation > tbody > tr", function (e) {
    var di_det = $(this).attr('id');
    loader.show();
    $.ajax({
      type: 'POST',
      url: fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_dossier_imputation_detail_technique', {
        det: di_det
      }),
      success: function success(result) {
        if ($.fn.DataTable.isDataTable('body #det_technique_dossier_imputation')) {
          $('body #det_technique_dossier_imputation').DataTable().clear().destroy();
        }
        $("body #dossier_imputation_dets_technique").empty().append(result);
        $('body #det_technique_dossier_imputation').DataTable({
          columnDefs: [{
            targets: 0,
            orderable: false,
            className: 'select-checkbox',
            render: function render(data, type, full, meta) {
              return '<input type="checkbox" class="select-checkbox">';
            }
          }],
          order: [[1, 'asc']],
          language: {
            url: window.frenchJsonUrl
          },
          lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
          createdRow: function createdRow(row, data, dataIndex) {
            // Add the text-right class to the 'montant' or 'prix' column
            $(row).find('td:eq(3)').addClass('text-right');
          }
        });
        loader.hide();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        loader.hide();
        return toastr.error(jqXHR.responseText);
      }
    });
  });

  // $("body").on("change" ,".check-facturable-det", function(e) {
  //   var id = $(this).closest('tr').attr('id');

  //   var checked = $(this).prop('checked');

  //   loader.show();

  //   $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('app_facturable_dossier_imputation_detail',{det:id}),
  //     success: function (result) {

  //       $('.check-facturable-det-technique').prop('checked',checked)

  //       $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) +' DH');
  //       $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) +' DH');
  //       $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) +' DH');

  //       var montantDi = window.formatNumberToCurrency(result.mtFacturable)

  //       console.log(result.di + " : " +montantDi)

  //       $('body .di'+result.di).empty().html(montantDi);

  //       loader.hide();
  //       return toastr.info(result.message);

  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       loader.hide();
  //       return toastr.error(jqXHR.responseText);
  //     }
  //   });
  // })

  // $("body").on("change" ,".check-facturable-det-technique", function(e) {

  //   var id = $(this).closest('tr').attr('id');
  //   var det_id = $(this).closest('tr').attr('data-id');

  //   // var totalCheckboxes = $('.check-facturable-det-technique').length;
  //   var checkedCheckboxes = $('.check-facturable-det-technique:checked').length;

  //   if (checkedCheckboxes === 1) {
  //     $('#'+det_id).find('td:eq(6)').children().prop('checked',true)

  //   } else if (checkedCheckboxes === 0) {
  //     $('#'+det_id).find('td:eq(6)').children().prop('checked',false)

  //   }

  //   loader.show();

  //   $.ajax({
  //     type: 'POST',
  //     url: Routing.generate('app_facturable_dossier_imputation_detail_technique',{technique:id}),
  //     success: function (result) {

  //       $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) +' DH');
  //       $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) +' DH');
  //       $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) +' DH');

  //       var montantDi = window.formatNumberToCurrency(result.mtFacturable)

  //       console.log(result.di + " : " +montantDi)

  //       $('body .di'+result.di).empty().html(montantDi);

  //       loader.hide();
  //       return toastr.info(result.message);
  //     },
  //     error: function (jqXHR, textStatus, errorThrown) {
  //       loader.hide();
  //       return toastr.error(jqXHR.responseText);
  //     }
  //   });
  // })

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function getCurrentDate() {
    var now = new Date();
    return now.getFullYear() + '-' + padTo2Digits(now.getMonth() + 1) + '-' + padTo2Digits(now.getDate());
  }
  function getCurrentDatetimeLocal() {
    var now = new Date();
    return now.getFullYear() + '-' + padTo2Digits(now.getMonth() + 1) + '-' + padTo2Digits(now.getDate()) + 'T' + padTo2Digits(now.getHours()) + ':' + padTo2Digits(now.getMinutes());
  }
  function updateInputValues() {
    $('.current-date').val(getCurrentDate());
    $('.current-datetime').val(getCurrentDatetimeLocal());
  }
  updateInputValues();
  setInterval(updateInputValues, 60000);
  $("body").on("click", "#check-all-actes", function (e) {
    var isChecked = $(this).prop("checked");
    $("body .checkActe").prop("checked", isChecked);
    $("body .checkAllByRassembleur").prop("checked", isChecked);
    $("body .checkSubcategory").prop("checked", isChecked);
  });

  //   var patientsTable = $('#tablePatient').DataTable({
  //     language: {
  //       url: window.frenchJsonUrl
  //     },
  //     processing: true,
  //     serverSide: true,
  //     ajax: {
  //       url: Routing.generate('gestion_patient_fetch_search_patient'),
  //       data: function (d) {
  //         d.draw = d.draw || 0;
  //         d.start = d.start || 0;
  //         d.length = d.length || 15;
  //         d.nomPatient = $('#nomPatient').val();;
  //         d.prenomPatient = $('#prenomPatient').val();
  //         d.numdocPatient = $('#numdocPatient').val();
  //         d.phonePatient = $('#phonePatient').val();
  //         d.numAssurPatient = $('#numAssurPatient').val();
  //         d.dateNaissancePatient = $('#dateNaissancePatient').val();
  //         d.genrePatient = $('#genrePatient').val();
  //       }
  //     },
  //     order: [[0, 'asc']],
  //     columns: [
  //       { name: 'p.id', data: 'id', orderable: true, searchable: true },
  //       { name: 'p.ipp', data: 'ipp', orderable: true, searchable: true },
  //       { name: 'P.nom', data: 'nom', orderable: true, searchable: true },
  //       { name: 'p.prenom', data: 'prenom', orderable: true, searchable: true },
  //       { name: 'p.dateNaissance', data: 'dateNaissance', orderable: true, searchable: true },
  //       { name: 'p.numDocument', data: 'numDocument', orderable: true, searchable: true },
  //       { name: 'p.numAssurance', data: 'numAssurance', orderable: true, searchable: true },
  //       { name: 'p.numTelephone', data: 'numTelephone', orderable: true, searchable: true },
  //       { name: 'p.numTelephone2', data: 'numTelephone2', orderable: true, searchable: true },
  //     ],
  //     autoWidth: false,
  //     searching: false,
  //     createdRow: function (row, data, dataIndex) {
  //       $(row).attr('data-ipp', data.ipp);
  //       $(row).attr('data-id', data.id);
  //       $(row).attr('data-nom', (data.nom + " " + data.prenom));
  //     }

  //   });

  $('#nomPatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#prenomPatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#numdocPatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#phonePatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#numAssurPatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#dateNaissancePatient').on('input', function (e) {
    patientsTable.ajax.reload();
  });
  $('#genrePatient').on('change', function (e) {
    patientsTable.ajax.reload();
  });
  $('body').on('click', '.typeActe', function (event) {
    if ($(event.target).is(':checkbox')) {
      return;
    }
    var typeActeId = $(this).attr('id').replace('typeActe', '');
    var collapseId = "#collapsetypeActe".concat(typeActeId);
    var panierDetCollapseId = "#panierDetCollapsetypeActe".concat(typeActeId);
    $(collapseId).slideToggle();
    $(panierDetCollapseId).slideToggle();
  });
  $('body').on('click', '.subcategory-item', function (event) {
    if ($(event.target).is(':checkbox')) {
      return;
    }
    event.stopPropagation();
    var subcategoryId = $(this).attr('id').replace('subcategory', '');
    var nestedCollapseId = "#collapsesubcategory".concat(subcategoryId);
    var panierDetCollapseId = "#collapsePanierDet".concat(subcategoryId);
    if ($(nestedCollapseId).length) {
      $(nestedCollapseId).slideToggle();
    } else if ($(panierDetCollapseId).length) {
      $(panierDetCollapseId).slideToggle();
    }
  });
  $('body').on('change', '.checkAllByRassembleur', function () {
    var typeActeId = $(this).val();
    $("#listSubcategories".concat(typeActeId, " .form-check-input")).prop('checked', this.checked);
  });
  $('body').on('change', '.checkSubcategory', function () {
    var subcategoryId = $(this).val();
    $("#listPanierDets".concat(subcategoryId, " .form-check-input")).prop('checked', this.checked);
    var typeActeCheckbox = $(this).closest('.listSubcategories').parent().prev('li.typeActe').find('.checkAllByRassembleur');
    $("#subcategory".concat(subcategoryId, " .form-check-input")).prop('checked', this.checked);
    $("#nestedSubcategories".concat(subcategoryId, " .form-check-input")).prop('checked', this.checked);
    typeActeCheckbox.prop('checked', this.checked);
  });
  $('body').on('change', '.checkActe', function () {
    var subcategoryCheckbox = $(this).closest('.listPanierDets').parent().prev('.subcategory-item').find('.form-check-input');
    subcategoryCheckbox.prop('checked', true);
  });
  $('body').on('click', '#selectAllDet', function () {
    var rows = $("#det_dossier_imputation").DataTable().rows({
      'search': 'applied'
    }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('body').on('click', '#selectAllDetTechnique', function () {
    var rows = $("#det_technique_dossier_imputation").DataTable().rows({
      'search': 'applied'
    }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('body').on('click', '#selectAllArticles', function () {
    var rows = $("#table_articles_pharmacie").DataTable().rows({
      'search': 'applied'
    }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  $('body #det_dossier_imputation tbody').on('change', 'input[type="checkbox"]', function () {
    if (!this.checked) {
      var el = $('#selectAllDet').get(0);
      if (el && el.checked && 'indeterminate' in el) {
        el.indeterminate = true;
      }
    }
  });
  $('body #det_technique_dossier_imputation tbody').on('change', 'input[type="checkbox"]', function () {
    if (!this.checked) {
      var el = $('#selectAllDetTechnique').get(0);
      if (el && el.checked && 'indeterminate' in el) {
        el.indeterminate = true;
      }
    }
  });
  $('body').on('click', '#btn_facturable , #btn_nonfacturable', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();
    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {
        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });
    if (selectedIds.length > 0) {
      loader.show();
      var url = $(this).attr('id') === 'btn_facturable' ? fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_facturable_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_non_facturable_dossier_imputation_detail');
      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function success(result) {
          $('body #selectAllDet').prop('checked', false);
          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');
          $("body #dossier_imputation_dets_technique").empty();
          var montantDi = window.formatNumberToCurrency(result.mtFacturable);
          console.log(result.di + " : " + montantDi);
          $('body .di' + result.di).empty().html(montantDi);
          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }
          $("body #det_dossier_imputation tbody").empty().append(result.html);
          $('body #det_dossier_imputation').DataTable({
            columnDefs: [{
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function render(data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
            createdRow: function createdRow(row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });
          loader.hide();
          return toastr.success(result.message);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }
  });
  $('body').on('click', '#btn_facturable_technique , #btn_nonfacturable_technique', function (e) {
    var table_det_di_technique = $('body #det_technique_dossier_imputation').DataTable();
    var selectedIds = [];
    table_det_di_technique.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {
        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });
    if (selectedIds.length > 0) {
      loader.show();
      var url = $(this).attr('id') === 'btn_facturable_technique' ? fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_facturable_dossier_imputation_detail_technique') : fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_non_facturable_dossier_imputation_detail_technique');
      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function success(result) {
          $('body #selectAllDetTechnique').prop('checked', false);
          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');
          var montantDi = window.formatNumberToCurrency(result.mtFacturable);
          console.log(result.di + " : " + montantDi);
          $('body .di' + result.di).empty().html(montantDi);
          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }
          if ($.fn.DataTable.isDataTable('body #det_technique_dossier_imputation')) {
            $('body #det_technique_dossier_imputation').DataTable().clear().destroy();
          }
          $("body #det_dossier_imputation tbody").empty().append(result.html);
          $("body #det_technique_dossier_imputation tbody").empty().append(result.technique);
          $('body #det_dossier_imputation').DataTable({
            columnDefs: [{
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function render(data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
            createdRow: function createdRow(row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });
          $('body #det_technique_dossier_imputation').DataTable({
            columnDefs: [{
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function render(data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
            createdRow: function createdRow(row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(3)').addClass('text-right');
            }
          });
          loader.hide();
          return toastr.success(result.message);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }
  });
  $('body').on('click', '#btn_forfait , #btn_nonforfait', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();
    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {
        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });
    if (selectedIds.length > 0) {
      loader.show();
      var url = $(this).attr('id') === 'btn_forfait' ? fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_forfait_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_non_forfait_dossier_imputation_detail');
      $.ajax({
        type: 'POST',
        url: url,
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function success(result) {
          $('body #selectAllDet').prop('checked', false);
          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');
          var montantDi = window.formatNumberToCurrency(result.mtFacturable);
          console.log(result.di + " : " + montantDi);
          $('body .di' + result.di).empty().html(montantDi);
          $("body #dossier_imputation_dets_technique").empty();
          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }
          $("body #det_dossier_imputation tbody").empty().append(result.html);
          $('body #det_dossier_imputation').DataTable({
            columnDefs: [{
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function render(data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
            createdRow: function createdRow(row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });
          loader.hide();
          return toastr.success(result.message);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }
  });
  $('body').on('click', '#closeModalAddDoctorPartition', function () {
    $('#modalAddDoctorPartition').modal('hide');
  });
  var mtTotalRest = null;
  $('body').on('click', '#btn_delete_det', function (e) {
    var table_det_di = $('body #det_dossier_imputation').DataTable();
    var selectedIds = [];
    table_det_di.rows().nodes().each(function (row, index) {
      var checkbox = $(row).find('input.select-checkbox');
      if (checkbox.is(':checked')) {
        var id = parseInt(checkbox.closest('tr').attr('id'));
        selectedIds.push(id);
      }
    });
    if (selectedIds.length > 0) {
      loader.show();
      $.ajax({
        type: 'POST',
        url: fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_remove_dossier_imputation_detail'),
        data: {
          selectedIds: JSON.stringify(selectedIds)
        },
        success: function success(result) {
          $('body #selectAllDet').prop('checked', false);
          $('body .mtTotal').empty().html('Montant total: ' + result.mtTotal.toFixed(2) + ' DH');
          $('body .mtFacturable').empty().html('Montant facturable: ' + result.mtFacturable.toFixed(2) + ' DH');
          $('body .mtNonFacturable').empty().html('Montant non facturable: ' + result.mtNonFacturable.toFixed(2) + ' DH');
          $.each(result.allDossiersImputations, function (key, value) {
            var montantDi = window.formatNumberToCurrency(value);
            $('body .di' + key).empty().html(montantDi);
          });
          $("body #dossier_imputation_dets_technique").empty();
          if ($.fn.DataTable.isDataTable('body #det_dossier_imputation')) {
            $('body #det_dossier_imputation').DataTable().clear().destroy();
          }
          $("body #det_dossier_imputation tbody").empty().append(result.html);
          $('body .panierDets').empty().append(result.html2);
          $('body #det_dossier_imputation').DataTable({
            columnDefs: [{
              targets: 0,
              orderable: false,
              className: 'select-checkbox',
              render: function render(data, type, full, meta) {
                return '<input type="checkbox" class="select-checkbox">';
              }
            }],
            order: [[1, 'asc']],
            language: {
              url: window.frenchJsonUrl
            },
            lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
            createdRow: function createdRow(row, data, dataIndex) {
              // Add the text-right class to the 'montant' or 'prix' column
              $(row).find('td:eq(5)').addClass('text-right');
            }
          });

          // $('body #allDossiersImputation').empty().append(result.allDossierImputations);

          $("body .montant").map(function () {
            mtTotalRest += parseFloat($(this).attr('data-value'));
          });
          if (parseFloat(mtTotalRest) != 0) {
            $("body #validate_rendezvous_facturation").find('.generation_dossier_imputation').prop('disabled', true);
          }
          loader.hide();
          return toastr.success(result.message);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          loader.hide();
          return toastr.error(jqXHR.responseText);
        }
      });
    }
  });
  $('body').on('click', '.tabs .tab-links a', function (e) {
    var currentAttrValue = $(this).attr('href');

    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
  $("body").on("click", ".facturer-di", function (e) {
    var _this = this;
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: 'animatedSwal flipInX faster'
      },
      position: 'top',
      title: "Confirmation ?",
      text: "Voulez vous vraiment facturer le dossier d'imputation ?",
      type: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "<i class='fa fa-check'></i> Oui !",
      cancelButtonText: "<i class='fa fa-times'></i> Annuler !",
      confirmButtonClass: 'btn btn-success'
    }).then(function (result) {
      if (result.value) {
        var dossierImputation = $(_this).attr('data-id');
        loader.show();
        $.ajax({
          type: 'POST',
          url: fos_router__WEBPACK_IMPORTED_MODULE_27___default().generate('app_facturation_facturer_dossier_imputation', {
            dossierImputation: dossierImputation
          }),
          success: function success(result) {
            loader.hide();
            toastr.success(result);
            window.location.href = '/facturation/';
            loader.hide();
          },
          error: function error(jqXHR, textStatus, errorThrown) {
            loader.hide();
            return toastr.error(jqXHR.responseText);
          }
        });
      }
    });
  });
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/vente/cart.js":
/*!*********************************!*\
  !*** ./assets/js/vente/cart.js ***!
  \*********************************/
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
var PRODUCTS = window.PRODUCTS || [];
var cartContainer = document.getElementById('cart-items-container');
var subtotalElement = document.getElementById('cart-subtotal');
var cart = [];

// Attach events after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.top-right-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      var productId = parseInt(button.dataset.id);
      var product = PRODUCTS.find(function (p) {
        return p.id === productId;
      });
      if (!product) return;
      var existing = cart.find(function (p) {
        return p.id === productId;
      });
      if (existing) {
        existing.quantity++;
      } else {
        cart.push(_objectSpread(_objectSpread({}, product), {}, {
          quantity: 1
        }));
      }
      renderCart();
    });
  });
});
function renderCart() {
  cartContainer.innerHTML = '';
  var subtotal = 0;
  cart.forEach(function (item) {
    subtotal += item.price * item.quantity;
    cartContainer.innerHTML += "\n      <div class=\"d-flex justify-content-between align-items-center cart-item\" data-id=\"".concat(item.id, "\">\n        <span class=\"text-uppercase fw-semibold cart-item-name\">").concat(item.name, "</span>\n        <span class=\"text-danger fw-bold cart-item-price\">$").concat(item.price.toFixed(2), "</span>\n        <div class=\"d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-2 qty-control\">\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                  onclick=\"decreaseQty(").concat(item.id, ")\">\n            <i class=\"fa-solid fa-minus\"></i>\n          </button>\n          <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\"\n                 value=\"").concat(item.quantity, "\" readonly />\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark\" style=\"width: 22px\"\n                  onclick=\"increaseQty(").concat(item.id, ")\">\n            <i class=\"fa-solid fa-plus\"></i>\n          </button>\n        </div>\n        <button class=\"btn btn-sm btn-remove text-danger p-1 bg-transparent border-0\"\n                onclick=\"removeItem(").concat(item.id, ")\" title=\"Supprimer\">\n          <i class=\"fa-solid fa-trash\"></i>\n        </button>\n      </div>\n    ");
  });
  subtotalElement.innerText = "$".concat(subtotal.toFixed(2));
}
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

/***/ }),

/***/ "./assets/plugins/pace.js":
/*!********************************!*\
  !*** ./assets/plugins/pace.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.unshift.js */ "./node_modules/core-js/modules/es.array.unshift.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
!function () {
  function o(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var u,
    c,
    i,
    s,
    n,
    y,
    t,
    l,
    v,
    r,
    a,
    p,
    e,
    h,
    w,
    b,
    f,
    g,
    _d,
    m,
    k,
    S,
    q,
    L,
    x,
    P,
    T,
    R,
    j,
    O,
    E,
    M,
    A,
    C,
    N,
    _,
    F,
    U,
    W,
    X,
    D,
    H,
    I,
    z,
    G,
    B,
    J = [].slice,
    K = {}.hasOwnProperty,
    Q = function Q(t, e) {
      for (var n in e) K.call(e, n) && (t[n] = e[n]);
      function r() {
        this.constructor = t;
      }
      return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
    },
    V = [].indexOf || function (t) {
      for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
      return -1;
    };
  function Y() {}
  for (g = {
    className: "",
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, P = function P() {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date();
  }, R = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, f = window.cancelAnimationFrame || window.mozCancelAnimationFrame, p = function p(t, e, n) {
    if ("function" == typeof t.addEventListener) return t.addEventListener(e, n, !1);
    var r;
    "function" != typeof t["on" + e] || "object" != _typeof(t["on" + e].eventListeners) ? (r = new s(), "function" == typeof t["on" + e] && r.on(e, t["on" + e]), t["on" + e] = function (t) {
      return r.trigger(e, t);
    }, t["on" + e].eventListeners = r) : r = t["on" + e].eventListeners, r.on(e, n);
  }, null == R && (R = function R(t) {
    return setTimeout(t, 50);
  }, f = function f(t) {
    return clearTimeout(t);
  }), O = function O(e) {
    var n = P(),
      r = function r() {
        var t = P() - n;
        return 33 <= t ? (n = P(), e(t, function () {
          return R(r);
        })) : setTimeout(r, 33 - t);
      };
    return r();
  }, j = function j() {
    var t = arguments[0],
      e = arguments[1],
      n = 3 <= arguments.length ? J.call(arguments, 2) : [];
    return "function" == typeof t[e] ? t[e].apply(t, n) : t[e];
  }, _d = function d() {
    for (var t, e, n, r = arguments[0], s = 2 <= arguments.length ? J.call(arguments, 1) : [], o = 0, i = s.length; o < i; o++) if (e = s[o]) for (t in e) K.call(e, t) && (n = e[t], null != r[t] && "object" == _typeof(r[t]) && null != n && "object" == _typeof(n) ? _d(r[t], n) : r[t] = n);
    return r;
  }, h = function h(t) {
    for (var e, n, r = e = 0, s = 0, o = t.length; s < o; s++) n = t[s], r += Math.abs(n), e++;
    return r / e;
  }, k = function k(t, e) {
    var n, r;
    if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
      if (n = r.getAttribute("data-pace-" + t), !e) return n;
      try {
        return JSON.parse(n);
      } catch (t) {
        return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0;
      }
    }
  }, Y.prototype.on = function (t, e, n, r) {
    var s;
    return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
      handler: e,
      ctx: n,
      once: r
    });
  }, Y.prototype.once = function (t, e, n) {
    return this.on(t, e, n, !0);
  }, Y.prototype.off = function (t, e) {
    var n, r, s;
    if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
      if (null == e) return delete this.bindings[t];
      for (n = 0, s = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
      return s;
    }
  }, Y.prototype.trigger = function () {
    var t,
      e,
      n,
      r,
      s,
      o,
      i = arguments[0],
      a = 2 <= arguments.length ? J.call(arguments, 1) : [];
    if (null != (r = this.bindings) && r[i]) {
      for (n = 0, o = []; n < this.bindings[i].length;) e = (s = this.bindings[i][n]).handler, t = s.ctx, s = s.once, e.apply(null != t ? t : this, a), s ? o.push(this.bindings[i].splice(n, 1)) : o.push(n++);
      return o;
    }
  }, B = Y, y = window.Pace || {}, window.Pace = y, _d(y, B.prototype), T = y.options = _d({}, g, window.paceOptions, k()), X = 0, H = (z = ["ajax", "document", "eventLag", "elements"]).length; X < H; X++) !0 === T[C = z[X]] && (T[C] = g[C]);
  function Z() {
    return Z.__super__.constructor.apply(this, arguments);
  }
  function $() {
    this.progress = 0;
  }
  function tt() {
    this.bindings = {};
  }
  function et() {
    var e,
      o = this;
    et.__super__.constructor.apply(this, arguments), e = function e(r) {
      var s = r.open;
      return r.open = function (t, e, n) {
        return A(t) && o.trigger("request", {
          type: t,
          url: e,
          request: r
        }), s.apply(r, arguments);
      };
    }, window.XMLHttpRequest = function (t) {
      t = new W(t);
      return e(t), t;
    };
    try {
      m(window.XMLHttpRequest, W);
    } catch (t) {}
    if (null != U) {
      window.XDomainRequest = function () {
        var t = new U();
        return e(t), t;
      };
      try {
        m(window.XDomainRequest, U);
      } catch (t) {}
    }
    if (null != F && T.ajax.trackWebSockets) {
      window.WebSocket = function (t, e) {
        var n = null != e ? new F(t, e) : new F(t);
        return A("socket") && o.trigger("request", {
          type: "socket",
          url: t,
          protocols: e,
          request: n
        }), n;
      };
      try {
        m(window.WebSocket, F);
      } catch (t) {}
    }
  }
  function nt() {
    this.complete = o(this.complete, this);
    var t = this;
    this.elements = [], S().on("request", function () {
      return t.watch.apply(t, arguments);
    });
  }
  function rt(t) {
    var e, n, r, s;
    for (null == t && (t = {}), this.complete = o(this.complete, this), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (s = t.selectors).length; n < r; n++) e = s[n], this.elements.push(new i(e, this.complete));
  }
  function st(t, e) {
    this.selector = t, this.completeCallback = e, this.progress = 0, this.check();
  }
  function ot() {
    var t,
      e,
      n = this;
    this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
      return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0;
    };
  }
  function it(t) {
    this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = T.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = j(this.source, "progress"));
  }
  B = Error, Q(Z, B), n = Z, $.prototype.getElement = function () {
    var t;
    if (null == this.el) {
      if (!(t = document.querySelector(T.target))) throw new n();
      this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");
      var e = "" !== T.className ? " " + T.className : "";
      this.el.innerHTML = '<div class="pace-progress' + e + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el);
    }
    return this.el;
  }, $.prototype.finish = function () {
    var t = this.getElement();
    return t.className = t.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ");
  }, $.prototype.update = function (t) {
    return this.progress = t, y.trigger("progress", t), this.render();
  }, $.prototype.destroy = function () {
    try {
      this.getElement().parentNode.removeChild(this.getElement());
    } catch (t) {
      n = t;
    }
    return this.el = void 0;
  }, $.prototype.render = function () {
    var t, e, n, r, s, o, i;
    if (null == document.querySelector(T.target)) return !1;
    for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (i = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) e = i[s], t.children[0].style[e] = r;
    return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), y.trigger("change", this.progress), this.lastRenderedProgress = this.progress;
  }, $.prototype.done = function () {
    return 100 <= this.progress;
  }, c = $, tt.prototype.trigger = function (t, e) {
    var n, r, s, o, i;
    if (null != this.bindings[t]) {
      for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) n = o[r], i.push(n.call(this, e));
      return i;
    }
  }, tt.prototype.on = function (t, e) {
    var n;
    return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e);
  }, s = tt, W = window.XMLHttpRequest, U = window.XDomainRequest, F = window.WebSocket, m = function m(t, e) {
    var n,
      r = [];
    for (n in e.prototype) try {
      null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, n, {
        get: function (t) {
          return function () {
            return e.prototype[t];
          };
        }(n),
        configurable: !0,
        enumerable: !0
      })) : r.push(t[n] = e.prototype[n]) : r.push(void 0);
    } catch (t) {
      0;
    }
    return r;
  }, L = [], y.ignore = function () {
    var t = arguments[0],
      e = 2 <= arguments.length ? J.call(arguments, 1) : [];
    return L.unshift("ignore"), e = t.apply(null, e), L.shift(), e;
  }, y.track = function () {
    var t = arguments[0],
      e = 2 <= arguments.length ? J.call(arguments, 1) : [];
    return L.unshift("track"), e = t.apply(null, e), L.shift(), e;
  }, A = function A(t) {
    if (null == t && (t = "GET"), "track" === L[0]) return "force";
    if (!L.length && T.ajax) {
      if ("socket" === t && T.ajax.trackWebSockets) return !0;
      if (t = t.toUpperCase(), 0 <= V.call(T.ajax.trackMethods, t)) return !0;
    }
    return !1;
  }, Q(et, s), t = et, D = null, M = function M(t) {
    for (var e, n = T.ajax.ignoreURLs, r = 0, s = n.length; r < s; r++) if ("string" == typeof (e = n[r])) {
      if (-1 !== t.indexOf(e)) return !0;
    } else if (e.test(t)) return !0;
    return !1;
  }, (S = function S() {
    return D = null == D ? new t() : D;
  })().on("request", function (t) {
    var o,
      i = t.type,
      a = t.request,
      e = t.url;
    if (!M(e)) return y.running || !1 === T.restartOnRequestAfter && "force" !== A(i) ? void 0 : (o = arguments, "boolean" == typeof (e = T.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {
      var t,
        e,
        n,
        r,
        s = "socket" === i ? a.readyState < 1 : 0 < (s = a.readyState) && s < 4;
      if (s) {
        for (y.restart(), r = [], t = 0, e = (n = y.sources).length; t < e; t++) {
          if ((C = n[t]) instanceof u) {
            C.watch.apply(C, o);
            break;
          }
          r.push(void 0);
        }
        return r;
      }
    }, e));
  }), nt.prototype.watch = function (t) {
    var e = t.type,
      n = t.request,
      t = t.url;
    if (!M(t)) return n = new ("socket" === e ? r : a)(n, this.complete), this.elements.push(n);
  }, nt.prototype.complete = function (e) {
    return this.elements = this.elements.filter(function (t) {
      return t !== e;
    });
  }, u = nt, a = function a(e, n) {
    var t,
      r,
      s,
      o,
      i = this;
    if (this.progress = 0, null != window.ProgressEvent) for (p(e, "progress", function (t) {
      return t.lengthComputable ? i.progress = 100 * t.loaded / t.total : i.progress = i.progress + (100 - i.progress) / 2;
    }), t = 0, r = (o = ["load", "abort", "timeout", "error"]).length; t < r; t++) p(e, o[t], function () {
      return n(i), i.progress = 100;
    });else s = e.onreadystatechange, e.onreadystatechange = function () {
      var t;
      return 0 === (t = e.readyState) || 4 === t ? (n(i), i.progress = 100) : 3 === e.readyState && (i.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0;
    };
  }, r = function r(t, e) {
    for (var n, r = this, s = this.progress = 0, o = (n = ["error", "open"]).length; s < o; s++) p(t, n[s], function () {
      return e(r), r.progress = 100;
    });
  }, rt.prototype.complete = function (e) {
    return this.elements = this.elements.filter(function (t) {
      return t !== e;
    });
  }, k = rt, st.prototype.check = function () {
    var t = this;
    return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
      return t.check();
    }, T.elements.checkInterval);
  }, st.prototype.done = function () {
    return this.completeCallback(this), this.completeCallback = null, this.progress = 100;
  }, i = st, ot.prototype.states = {
    loading: 0,
    interactive: 50,
    complete: 100
  }, B = ot, Q = function Q() {
    var e,
      n,
      r,
      s,
      o,
      i = this;
    this.progress = 0, o = [], s = 0, r = P(), n = setInterval(function () {
      var t = P() - r - 50;
      return r = P(), o.push(t), o.length > T.eventLag.sampleCount && o.shift(), e = h(o), ++s >= T.eventLag.minSamples && e < T.eventLag.lagThreshold ? (i.progress = 100, clearInterval(n)) : i.progress = 3 / (e + 3) * 100;
    }, 50);
  }, it.prototype.tick = function (t, e) {
    return 100 <= (e = null == e ? j(this.source, "progress") : e) && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / T.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), e = 1 - Math.pow(this.progress / 100, T.easeFactor), this.progress += e * this.rate * t, this.progress = Math.min(this.lastProgress + T.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
  }, v = it, b = e = _ = w = E = N = null, y.running = !1, q = function q() {
    if (T.restartOnPushState) return y.restart();
  }, null != window.history.pushState && (I = window.history.pushState, window.history.pushState = function () {
    return q(), I.apply(window.history, arguments);
  }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {
    return q(), G.apply(window.history, arguments);
  }), l = {
    ajax: u,
    elements: k,
    document: B,
    eventLag: Q
  }, (x = function x() {
    var t, e, n, r, s, o, i, a;
    for (y.sources = N = [], e = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; e < r; e++) !1 !== T[t = o[e]] && N.push(new l[t](T[t]));
    for (n = 0, s = (a = null != (i = T.extraSources) ? i : []).length; n < s; n++) C = a[n], N.push(new C(T));
    return y.bar = w = new c(), E = [], _ = new v();
  })(), y.stop = function () {
    return y.trigger("stop"), y.running = !1, w.destroy(), b = !0, null != e && ("function" == typeof f && f(e), e = null), x();
  }, y.restart = function () {
    return y.trigger("restart"), y.stop(), y.start();
  }, y.go = function () {
    var m;
    return y.running = !0, w.render(), m = P(), b = !1, e = O(function (t, e) {
      w.progress;
      for (var n, r, s, o, i, a, u, c, l, p, h = a = 0, f = !0, g = u = 0, d = N.length; u < d; g = ++u) for (C = N[g], i = null != E[g] ? E[g] : E[g] = [], s = c = 0, l = (r = null != (p = C.elements) ? p : [C]).length; c < l; s = ++c) o = r[s], f &= (o = null != i[s] ? i[s] : i[s] = new v(o)).done, o.done || (h++, a += o.tick(t));
      return n = a / h, w.update(_.tick(t, n)), w.done() || f || b ? (w.update(100), y.trigger("done"), setTimeout(function () {
        return w.finish(), y.running = !1, y.trigger("hide");
      }, Math.max(T.ghostTime, Math.max(T.minTime - (P() - m), 0)))) : e();
    });
  }, y.start = function (t) {
    _d(T, t), y.running = !0;
    try {
      w.render();
    } catch (t) {
      n = t;
    }
    return document.querySelector(".pace") ? (y.trigger("start"), y.go()) : setTimeout(y.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return y;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}.call(this);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/login.scss":
/*!**********************************!*\
  !*** ./assets/styles/login.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/images/26807.jpg":
/*!*********************************!*\
  !*** ./assets/images/26807.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/26807.cf69af04.jpg";

/***/ }),

/***/ "./assets/images/5570863.jpg":
/*!***********************************!*\
  !*** ./assets/images/5570863.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5570863.dd3aa038.jpg";

/***/ }),

/***/ "./assets/images/appointment.png":
/*!***************************************!*\
  !*** ./assets/images/appointment.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/appointment.64f4d56f.png";

/***/ }),

/***/ "./assets/images/archive.png":
/*!***********************************!*\
  !*** ./assets/images/archive.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/archive.e57bcb77.png";

/***/ }),

/***/ "./assets/images/bg_login.jpg":
/*!************************************!*\
  !*** ./assets/images/bg_login.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bg_login.7d34bfe9.jpg";

/***/ }),

/***/ "./assets/images/bill.png":
/*!********************************!*\
  !*** ./assets/images/bill.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bill.90df6f49.png";

/***/ }),

/***/ "./assets/images/consulting.png":
/*!**************************************!*\
  !*** ./assets/images/consulting.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/consulting.d5c4ec49.png";

/***/ }),

/***/ "./assets/images/factures.png":
/*!************************************!*\
  !*** ./assets/images/factures.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/factures.1de4bae0.png";

/***/ }),

/***/ "./assets/images/gestion_patient.png":
/*!*******************************************!*\
  !*** ./assets/images/gestion_patient.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gestion_patient.7288853e.png";

/***/ }),

/***/ "./assets/images/hospital.png":
/*!************************************!*\
  !*** ./assets/images/hospital.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hospital.536c74fd.png";

/***/ }),

/***/ "./assets/images/logoHCZ2.png":
/*!************************************!*\
  !*** ./assets/images/logoHCZ2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logoHCZ2.e8a6d858.png";

/***/ }),

/***/ "./assets/images/logoHcz.png":
/*!***********************************!*\
  !*** ./assets/images/logoHcz.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logoHcz.f1b4dcdd.png";

/***/ }),

/***/ "./assets/images/medical-record.png":
/*!******************************************!*\
  !*** ./assets/images/medical-record.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/medical-record.a0f1d31f.png";

/***/ }),

/***/ "./assets/images/parametrage/dossiers/_logo_FCZ.png":
/*!**********************************************************!*\
  !*** ./assets/images/parametrage/dossiers/_logo_FCZ.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/_logo_FCZ.1e637899.png";

/***/ }),

/***/ "./assets/images/parametrage/dossiers/logo_HMB.png":
/*!*********************************************************!*\
  !*** ./assets/images/parametrage/dossiers/logo_HMB.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_HMB.182755fc.png";

/***/ }),

/***/ "./assets/images/parametrage/dossiers/logo_HMK.png":
/*!*********************************************************!*\
  !*** ./assets/images/parametrage/dossiers/logo_HMK.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_HMK.bcf8798e.png";

/***/ }),

/***/ "./assets/images/parametrage/dossiers/logo_HMS.png":
/*!*********************************************************!*\
  !*** ./assets/images/parametrage/dossiers/logo_HMS.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_HMS.2868735a.png";

/***/ }),

/***/ "./assets/images/parametrage/dossiers/logo_HMY.png":
/*!*********************************************************!*\
  !*** ./assets/images/parametrage/dossiers/logo_HMY.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_HMY.8306b64d.png";

/***/ }),

/***/ "./assets/images/pec.png":
/*!*******************************!*\
  !*** ./assets/images/pec.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/pec.f142c7d9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-cce63f","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6ff37f","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZlbnRlL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BsdWdpbnMvcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9sb2dpbi5zY3NzPzk0YWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvIHN5bmMgXlxcLlxcLy4qJCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9sb2dpbi5zY3NzJztcclxuXHJcbi8vaW1wb3J0IGpzIGZpbGVzXHJcbmltcG9ydCAnLi9qcy92ZW50ZS9jYXJ0LmpzJztcclxuXHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8tY29uZGVuc2VkXCI7IC8vIERlZmF1bHRzIHRvIHdlaWdodCA0MDBcclxuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLWNvbmRlbnNlZC80MDAuY3NzXCI7IC8vIFNwZWNpZnkgd2VpZ2h0XHJcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by1jb25kZW5zZWQvNDAwLWl0YWxpYy5jc3NcIjsgLy8gU3BlY2lmeSB3ZWlnaHQgYW5kIHN0eWxlXHJcblxyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5cclxuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXRzL2RhdGVwaWNrZXIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS9pMThuL2RhdGVwaWNrZXItZnIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS90aGVtZXMvYmFzZS9hbGwuY3NzJztcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICQoJ2JvZHknKS5iaW5kKCdjbGljayBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICB9KTtcclxuICBjaGVja0FjdGl2aXR5KDM2MDAwMDAsIDYwMDAwLCAwKTsgLy8gdGltZW91dCA9IDMwIG1pbnV0ZXMsIGludGVydmFsID0gMSBtaW51dGUuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tBY3Rpdml0eSh0aW1lb3V0LCBpbnRlcnZhbCwgZWxhcHNlZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiWlpcIilcclxuICBpZiAoJC5hY3RpdmUpIHtcclxuICAgICAgZWxhcHNlZCA9IDA7XHJcbiAgICAgICQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICQuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dpbicpKTtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWQgPCB0aW1lb3V0KSB7XHJcbiAgICAgIGVsYXBzZWQgKz0gaW50ZXJ2YWw7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjaGVja0FjdGl2aXR5KHRpbWVvdXQsIGludGVydmFsLCBlbGFwc2VkKTtcclxuICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dvdXQnKTsgLy8gUmVkaXJlY3QgdG8gXCJzZXNzaW9uIGV4cGlyZWRcIiBwYWdlLlxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlJ1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0J1xyXG5jb25zdCBkYXRhdGFibGVzRnJlbmNoID0gJ2RhdGF0YWJsZXMubmV0LXBsdWdpbnMvaTE4bi9mci1GUi5tanMnO1xyXG5nbG9iYWwuZGF0YXRhYmxlc0ZyZW5jaCA9IGRhdGF0YWJsZXNGcmVuY2g7XHJcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtc2VsZWN0J1xyXG5cclxuLy8gaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1kdC9jc3MvanF1ZXJ5LmRhdGFUYWJsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1zZWxlY3QtZHQvY3NzL3NlbGVjdC5kYXRhVGFibGVzLmNzcyc7XHJcblxyXG5pbXBvcnQgJy4vcGx1Z2lucy9wYWNlJztcclxuXHJcbmNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBzd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tc3VjY2VzcyBidG4teHMgc3lTd2VldFN0eWxlIG1yLTInLFxyXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICB9LFxyXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuZ2xvYmFsLlN3YWwgPSBzd2FsO1xyXG5nbG9iYWwuc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gc3dhbFdpdGhCb290c3RyYXBCdXR0b25zO1xyXG5cclxuXHJcblxyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5jb25zdCB0b2FzdHIgPSByZXF1aXJlKCd0b2FzdHInKTtcclxudG9hc3RyLm9wdGlvbnMgPSB7XHJcbiAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxyXG4gIFwiZGVidWdcIjogZmFsc2UsXHJcbiAgXCJuZXdlc3RPblRvcFwiOiBmYWxzZSxcclxuICBcInByb2dyZXNzQmFyXCI6IHRydWUsXHJcbiAgXCJwb3NpdGlvbkNsYXNzXCI6IFwidG9hc3QtdG9wLXJpZ2h0XCIsXHJcbiAgXCJwcmV2ZW50RHVwbGljYXRlc1wiOiBmYWxzZSxcclxuICBcIm9uY2xpY2tcIjogbnVsbCxcclxuICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxyXG4gIFwiaGlkZUR1cmF0aW9uXCI6IFwiMTAwMFwiLFxyXG4gIFwidGltZU91dFwiOiBcIjUwMDBcIixcclxuICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcclxuICBcInNob3dFYXNpbmdcIjogXCJzd2luZ1wiLFxyXG4gIFwiaGlkZUVhc2luZ1wiOiBcImxpbmVhclwiLFxyXG4gIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxyXG4gIFwiaGlkZU1ldGhvZFwiOiBcImZhZGVPdXRcIlxyXG59XHJcbmdsb2JhbC50b2FzdHIgPSB0b2FzdHI7XHJcblxyXG5yZXF1aXJlKCdzZWxlY3QyJylcclxucmVxdWlyZSgnc2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLm1pbi5jc3MnKVxyXG5cclxuJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9mcicsIFtdLCByZXF1aXJlKFwic2VsZWN0Mi9zcmMvanMvc2VsZWN0Mi9pMThuL2ZyXCIpKTtcclxuXHJcblxyXG5pbXBvcnQgUm91dGluZyBmcm9tICdmb3Mtcm91dGVyJztcclxuXHJcbmdsb2JhbC5Sb3V0aW5nID0gUm91dGluZztcclxuXHJcbi8vIHJlcXVpcmUoJ3BhY2UnKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuZ2xvYmFsLmxhZGRhID0gTGFkZGE7XHJcblxyXG5yZXF1aXJlKCdsYWRkYS9kaXN0L2xhZGRhLm1pbi5jc3MnKVxyXG5cclxuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcblxyXG53aW5kb3cubW9tZW50ID0gbW9tZW50O1xyXG5cclxuXHJcblxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmdsb2JhbC5heGlvcyA9IGF4aW9zO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlcy9sb2dvSENaMi5wbmcnXHJcblxyXG5pbXBvcnQgJy4vaW1hZ2VzL2xvZ29IY3oucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2JnX2xvZ2luLmpwZydcclxuaW1wb3J0ICcuL2ltYWdlcy8yNjgwNy5qcGcnXHJcbmltcG9ydCAnLi9pbWFnZXMvNTU3MDg2My5qcGcnXHJcblxyXG5cclxuaW1wb3J0ICcuL2ltYWdlcy9nZXN0aW9uX3BhdGllbnQucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2hvc3BpdGFsLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9hcHBvaW50bWVudC5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvbWVkaWNhbC1yZWNvcmQucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2JpbGwucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2ZhY3R1cmVzLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9jb25zdWx0aW5nLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wZWMucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2FyY2hpdmUucG5nJ1xyXG5cclxuXHJcbmltcG9ydCAnLi9pbWFnZXMvcGFyYW1ldHJhZ2UvZG9zc2llcnMvbG9nb19ITUsucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL2xvZ29fSE1TLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wYXJhbWV0cmFnZS9kb3NzaWVycy9sb2dvX0hNWS5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvcGFyYW1ldHJhZ2UvZG9zc2llcnMvbG9nb19ITUIucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL19sb2dvX0ZDWi5wbmcnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG5cclxuICAvLyBzZXRJbnRlcnZhbChjaGVja1Nlc3Npb24sIDUpO1xyXG5cclxuICAkKFwiI25hdmJhckRyb3Bkb3duXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoXCIjZGl2TWVudVwiKS50b2dnbGUoXCI1bXNcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImh0bWxcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcjbmF2YmFyRHJvcGRvd24nKS5sZW5ndGggPT0gMClcclxuICAgICAgJChcIiNkaXZNZW51XCIpLmhpZGUoXCI1bXNcIik7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1lbnVBY3Rpb25zXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuICAgICQoXCJib2R5ICNkaXZNZW51XCIgKyBpZCkudG9nZ2xlKFwiNW1zXCIpO1xyXG4gICAgJChcIi5kaXZNZW51Om5vdCgjZGl2TWVudVwiICsgaWQgKyBcIilcIikuaGlkZSgpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJodG1sXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVBY3Rpb25zJykubGVuZ3RoID09IDApXHJcbiAgICAgICQoXCIuZGl2TWVudVwiKS5oaWRlKFwiNW1zXCIpO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuZmluZEFsbFBhdGllbnRXYXJuaW5ncyA9IGZ1bmN0aW9uIChpcHApIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXN0aW9uX3BhdGllbnRfd2FybmluZ3MnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlwcDogaXBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0ICE9ICdlcnJvcicpXHJcbiAgICAgICAgICBhbGVydChyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICB3aW5kb3cuYXJyYXlUb09wdGlvbiA9IGZ1bmN0aW9uIChhcnJheSwgZGlzYWJsZU9wdGlvbnMgPSBudWxsKSB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgb3B0aW9uID0gbmV3IE9wdGlvbihpdGVtLnRleHQsIGl0ZW0uaWQsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIGlmIChkaXNhYmxlT3B0aW9ucyAmJiAkLmluQXJyYXkoaXRlbS5pZCwgZGlzYWJsZU9wdGlvbnMpID49IDApIHtcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9wdGlvblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuZGF0ZVRpbWVUb1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5kYXRlKVxyXG5cclxuICAgIHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB2YXIgbW9udGggPSBtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXHJcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcclxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXlcclxuICB9XHJcblxyXG4gIHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5ID0gZnVuY3Rpb24gKG51bWJlcikge1xyXG4gICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7XHJcbiAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXHJcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSkuZm9ybWF0KG51bWJlcik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBsb2FkZXIgPSAkKFwiLmxvYWRlci1iZ1wiKTtcclxuICBnbG9iYWwubG9hZGVyID0gbG9hZGVyXHJcblxyXG4gIC8vIGxvYWRlci5zaG93KCk7XHJcblxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50eXBlUmVwYXJ0aXRpb24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHZhbHVlID0gJCh0aGlzKS52YWwoKVxyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gJ2ZvcmZhaXQnKSB7XHJcbiAgICAgICQoJ2JvZHkgI21vbnRhbnRGb3JmYWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICQoJ2JvZHkgI3ZhbGV1clBvdXJjZW50YWdlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICQoJ2JvZHkgI3BvdXJjZW50YWdlUGFydGUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICNyZXBhcnRpdGlvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNidG5BZGRQb3VyY2VudGFnZURldCcpLmhpZGUoKTtcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3BvdXJjZW50YWdlJykge1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAkKCdib2R5ICNtb250YW50Rm9yZmFpdCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjcmVwYXJ0aXRpb24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5oaWRlKCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodmFsdWUgPT09ICdwb3VyY2VudGFnZV9wYXJ0cycpIHtcclxuICAgICAgJCgnYm9keSAjbW9udGFudEZvcmZhaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICQoJ2JvZHkgI3JlcGFydGl0aW9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNidG5BZGRQb3VyY2VudGFnZURldCcpLnNob3coKTtcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJCgnYm9keSAjbW9udGFudEZvcmZhaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjcmVwYXJ0aXRpb24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5oaWRlKCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bkFkZFBvdXJjZW50YWdlRGV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBjb2RlUXVvdGFzID0gJChcIiNyZXBhcnRpdGlvblwiKS52YWwoKTtcclxuICAgIHZhciBxdW90YXMgPSAkKFwiI3JlcGFydGl0aW9uIG9wdGlvbjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICB2YXIgcG91cmNlbnRhZ2UgPSAkKFwiI3BvdXJjZW50YWdlUGFydGVcIikudmFsKCk7XHJcblxyXG4gICAgdmFyIGV4aXN0aW5nSXRlbSA9ICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuZmluZCgnLmNvZGUtcXVvdGFzJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpID09PSBjb2RlUXVvdGFzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0b2FzdHIud2FybmluZyhcIlZvdXMgYXZleiBkw6lqw6AgYWpvdXTDqSBjZSBxdW90YVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtcXVvdGFzLWl0ZW1cIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyXCI+JyArXHJcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiY29kZS1xdW90YXMgdGV4dC1kYW5nZXJcIj4nICsgY29kZVF1b3RhcyArICc8L3NwYW4+JyArXHJcbiAgICAgICAgJyZuYnNwLSZuYnNwPHNwYW4gY2xhc3M9XCJxdW90YXNcIj4nICsgcXVvdGFzICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAnJm5ic3AtJm5ic3A8c3BhbiBjbGFzcz1cInBvdXJjZW50YWdlLXF1b3Rhc1wiPicgKyBwb3VyY2VudGFnZSArICcgJTwvc3Bhbj4nICtcclxuICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBtbC1hdXRvIHJlbW92ZV9xdW90YXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFyayB0ZXh0LWRhbmdlclwiPjwvaT48L2J1dHRvbj4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvbGk+JztcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZC1wYXRpZW50XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5vcGVuKCcvZ2VzdGlvbi9wYXRpZW50L2FkZCcsICdfYmxhbmsnKTtcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oXCJjaGFuZ2VcIiwgXCIuY2hlY2tfbWFqb3JhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIG1vbnRhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgndGQ6ZXEoNCknKS50ZXh0KCk7XHJcblxyXG4gICAgdmFyIG10ID0gcGFyc2VGbG9hdChtb250YW50LnJlcGxhY2UoL1xccy9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpXHJcbiAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuXHJcbiAgICAgIHZhciByZXMgPSBtdCArIChtdCAqIDMwKSAvIDEwMDtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ3RkOmVxKDYpJykuaHRtbChyZXMudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCd0ZDplcSg2KScpLmh0bWwobW9udGFudCk7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiZGJsY2xpY2tcIiwgXCIjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbiA+IHRib2R5ID4gdHJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkaV9kZXQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgbG9hZGVyLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbF90ZWNobmlxdWUnLCB7IGRldDogZGlfZGV0IH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0KTtcclxuXHJcbiAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSB0ZXh0LXJpZ2h0IGNsYXNzIHRvIHRoZSAnbW9udGFudCcgb3IgJ3ByaXgnIGNvbHVtblxyXG4gICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoMyknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5cclxuICAvLyAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiICxcIi5jaGVjay1mYWN0dXJhYmxlLWRldFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKTtcclxuXHJcbiAgLy8gICB2YXIgY2hlY2tlZCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAvLyAgIGxvYWRlci5zaG93KCk7XHJcblxyXG4gIC8vICAgJC5hamF4KHtcclxuICAvLyAgICAgdHlwZTogJ1BPU1QnLFxyXG4gIC8vICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnLHtkZXQ6aWR9KSxcclxuICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAvLyAgICAgICAkKCcuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlJykucHJvcCgnY2hlY2tlZCcsY2hlY2tlZClcclxuXHJcbiAgLy8gICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKycgREgnKTtcclxuICAvLyAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG5cclxuICAvLyAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kocmVzdWx0Lm10RmFjdHVyYWJsZSlcclxuXHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArbW9udGFudERpKVxyXG5cclxuXHJcbiAgLy8gICAgICAgJCgnYm9keSAuZGknK3Jlc3VsdC5kaSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcblxyXG5cclxuICAvLyAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gIC8vICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyhyZXN1bHQubWVzc2FnZSk7XHJcblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gIC8vICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KVxyXG5cclxuICAvLyAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiICxcIi5jaGVjay1mYWN0dXJhYmxlLWRldC10ZWNobmlxdWVcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuICAvLyAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpO1xyXG4gIC8vICAgdmFyIGRldF9pZCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gIC8vICAgLy8gdmFyIHRvdGFsQ2hlY2tib3hlcyA9ICQoJy5jaGVjay1mYWN0dXJhYmxlLWRldC10ZWNobmlxdWUnKS5sZW5ndGg7XHJcbiAgLy8gICB2YXIgY2hlY2tlZENoZWNrYm94ZXMgPSAkKCcuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlOmNoZWNrZWQnKS5sZW5ndGg7XHJcblxyXG4gIC8vICAgaWYgKGNoZWNrZWRDaGVja2JveGVzID09PSAxKSB7XHJcbiAgLy8gICAgICQoJyMnK2RldF9pZCkuZmluZCgndGQ6ZXEoNiknKS5jaGlsZHJlbigpLnByb3AoJ2NoZWNrZWQnLHRydWUpXHJcblxyXG4gIC8vICAgfSBlbHNlIGlmIChjaGVja2VkQ2hlY2tib3hlcyA9PT0gMCkge1xyXG4gIC8vICAgICAkKCcjJytkZXRfaWQpLmZpbmQoJ3RkOmVxKDYpJykuY2hpbGRyZW4oKS5wcm9wKCdjaGVja2VkJyxmYWxzZSlcclxuXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgLy8gICAkLmFqYXgoe1xyXG4gIC8vICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgLy8gICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbF90ZWNobmlxdWUnLHt0ZWNobmlxdWU6aWR9KSxcclxuICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAvLyAgICAgICAkKCdib2R5IC5tdFRvdGFsJykuZW1wdHkoKS5odG1sKCdNb250YW50IHRvdGFsOiAnICsgcmVzdWx0Lm10VG90YWwudG9GaXhlZCgyKSArJyBESCcpO1xyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10RmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10RmFjdHVyYWJsZS50b0ZpeGVkKDIpICsnIERIJyk7XHJcbiAgLy8gICAgICAgJCgnYm9keSAubXROb25GYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IG5vbiBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10Tm9uRmFjdHVyYWJsZS50b0ZpeGVkKDIpICsnIERIJyk7XHJcblxyXG4gIC8vICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeShyZXN1bHQubXRGYWN0dXJhYmxlKVxyXG5cclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGkgKyBcIiA6IFwiICttb250YW50RGkpXHJcblxyXG4gIC8vICAgICAgICQoJ2JvZHkgLmRpJytyZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAvLyAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gIC8vICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgLy8gICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAvLyAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbm93LmdldEZ1bGxZZWFyKCkgKyAnLScgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldE1vbnRoKCkgKyAxKSArICctJyArXHJcbiAgICAgIHBhZFRvMkRpZ2l0cyhub3cuZ2V0RGF0ZSgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRldGltZUxvY2FsKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpICsgJy0nICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRNb250aCgpICsgMSkgKyAnLScgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldERhdGUoKSkgKyAnVCcgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldEhvdXJzKCkpICsgJzonICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRNaW51dGVzKCkpXHJcbiAgICApO1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlcygpIHtcclxuICAgICQoJy5jdXJyZW50LWRhdGUnKS52YWwoZ2V0Q3VycmVudERhdGUoKSk7XHJcblxyXG4gICAgJCgnLmN1cnJlbnQtZGF0ZXRpbWUnKS52YWwoZ2V0Q3VycmVudERhdGV0aW1lTG9jYWwoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFZhbHVlcygpO1xyXG4gIHNldEludGVydmFsKHVwZGF0ZUlucHV0VmFsdWVzLCA2MDAwMCk7XHJcblxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2NoZWNrLWFsbC1hY3Rlc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlzQ2hlY2tlZCA9ICQodGhpcykucHJvcChcImNoZWNrZWRcIik7XHJcblxyXG4gICAgJChcImJvZHkgLmNoZWNrQWN0ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBpc0NoZWNrZWQpO1xyXG4gICAgJChcImJvZHkgLmNoZWNrQWxsQnlSYXNzZW1ibGV1clwiKS5wcm9wKFwiY2hlY2tlZFwiLCBpc0NoZWNrZWQpO1xyXG4gICAgJChcImJvZHkgLmNoZWNrU3ViY2F0ZWdvcnlcIikucHJvcChcImNoZWNrZWRcIiwgaXNDaGVja2VkKTtcclxuICB9KVxyXG5cclxuXHJcbi8vICAgdmFyIHBhdGllbnRzVGFibGUgPSAkKCcjdGFibGVQYXRpZW50JykuRGF0YVRhYmxlKHtcclxuLy8gICAgIGxhbmd1YWdlOiB7XHJcbi8vICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuLy8gICAgIH0sXHJcbi8vICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4vLyAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuLy8gICAgIGFqYXg6IHtcclxuLy8gICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXN0aW9uX3BhdGllbnRfZmV0Y2hfc2VhcmNoX3BhdGllbnQnKSxcclxuLy8gICAgICAgZGF0YTogZnVuY3Rpb24gKGQpIHtcclxuLy8gICAgICAgICBkLmRyYXcgPSBkLmRyYXcgfHwgMDtcclxuLy8gICAgICAgICBkLnN0YXJ0ID0gZC5zdGFydCB8fCAwO1xyXG4vLyAgICAgICAgIGQubGVuZ3RoID0gZC5sZW5ndGggfHwgMTU7XHJcbi8vICAgICAgICAgZC5ub21QYXRpZW50ID0gJCgnI25vbVBhdGllbnQnKS52YWwoKTs7XHJcbi8vICAgICAgICAgZC5wcmVub21QYXRpZW50ID0gJCgnI3ByZW5vbVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLm51bWRvY1BhdGllbnQgPSAkKCcjbnVtZG9jUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQucGhvbmVQYXRpZW50ID0gJCgnI3Bob25lUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQubnVtQXNzdXJQYXRpZW50ID0gJCgnI251bUFzc3VyUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQuZGF0ZU5haXNzYW5jZVBhdGllbnQgPSAkKCcjZGF0ZU5haXNzYW5jZVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLmdlbnJlUGF0aWVudCA9ICQoJyNnZW5yZVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIG9yZGVyOiBbWzAsICdhc2MnXV0sXHJcbi8vICAgICBjb2x1bW5zOiBbXHJcbi8vICAgICAgIHsgbmFtZTogJ3AuaWQnLCBkYXRhOiAnaWQnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5pcHAnLCBkYXRhOiAnaXBwJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ1Aubm9tJywgZGF0YTogJ25vbScsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdwLnByZW5vbScsIGRhdGE6ICdwcmVub20nLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5kYXRlTmFpc3NhbmNlJywgZGF0YTogJ2RhdGVOYWlzc2FuY2UnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5udW1Eb2N1bWVudCcsIGRhdGE6ICdudW1Eb2N1bWVudCcsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdwLm51bUFzc3VyYW5jZScsIGRhdGE6ICdudW1Bc3N1cmFuY2UnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5udW1UZWxlcGhvbmUnLCBkYXRhOiAnbnVtVGVsZXBob25lJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AubnVtVGVsZXBob25lMicsIGRhdGE6ICdudW1UZWxlcGhvbmUyJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuLy8gICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbi8vICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuLy8gICAgICAgJChyb3cpLmF0dHIoJ2RhdGEtaXBwJywgZGF0YS5pcHApO1xyXG4vLyAgICAgICAkKHJvdykuYXR0cignZGF0YS1pZCcsIGRhdGEuaWQpO1xyXG4vLyAgICAgICAkKHJvdykuYXR0cignZGF0YS1ub20nLCAoZGF0YS5ub20gKyBcIiBcIiArIGRhdGEucHJlbm9tKSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgIH0pO1xyXG5cclxuICAkKCcjbm9tUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjcHJlbm9tUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjbnVtZG9jUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjcGhvbmVQYXRpZW50Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG4gICQoJyNudW1Bc3N1clBhdGllbnQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgcGF0aWVudHNUYWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgfSk7XHJcbiAgJCgnI2RhdGVOYWlzc2FuY2VQYXRpZW50Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG4gICQoJyNnZW5yZVBhdGllbnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcudHlwZUFjdGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoJzpjaGVja2JveCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eXBlQWN0ZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ3R5cGVBY3RlJywgJycpO1xyXG4gICAgY29uc3QgY29sbGFwc2VJZCA9IGAjY29sbGFwc2V0eXBlQWN0ZSR7dHlwZUFjdGVJZH1gO1xyXG4gICAgY29uc3QgcGFuaWVyRGV0Q29sbGFwc2VJZCA9IGAjcGFuaWVyRGV0Q29sbGFwc2V0eXBlQWN0ZSR7dHlwZUFjdGVJZH1gO1xyXG5cclxuICAgICQoY29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICQocGFuaWVyRGV0Q29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc3ViY2F0ZWdvcnktaXRlbScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcygnOmNoZWNrYm94JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgc3ViY2F0ZWdvcnlJZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdzdWJjYXRlZ29yeScsICcnKTtcclxuICAgIGNvbnN0IG5lc3RlZENvbGxhcHNlSWQgPSBgI2NvbGxhcHNlc3ViY2F0ZWdvcnkke3N1YmNhdGVnb3J5SWR9YDtcclxuICAgIGNvbnN0IHBhbmllckRldENvbGxhcHNlSWQgPSBgI2NvbGxhcHNlUGFuaWVyRGV0JHtzdWJjYXRlZ29yeUlkfWA7XHJcblxyXG4gICAgaWYgKCQobmVzdGVkQ29sbGFwc2VJZCkubGVuZ3RoKSB7XHJcbiAgICAgICQobmVzdGVkQ29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0gZWxzZSBpZiAoJChwYW5pZXJEZXRDb2xsYXBzZUlkKS5sZW5ndGgpIHtcclxuICAgICAgJChwYW5pZXJEZXRDb2xsYXBzZUlkKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tBbGxCeVJhc3NlbWJsZXVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdHlwZUFjdGVJZCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgJChgI2xpc3RTdWJjYXRlZ29yaWVzJHt0eXBlQWN0ZUlkfSAuZm9ybS1jaGVjay1pbnB1dGApLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tTdWJjYXRlZ29yeScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHN1YmNhdGVnb3J5SWQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICQoYCNsaXN0UGFuaWVyRGV0cyR7c3ViY2F0ZWdvcnlJZH0gLmZvcm0tY2hlY2staW5wdXRgKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuXHJcblxyXG4gICAgY29uc3QgdHlwZUFjdGVDaGVja2JveCA9ICQodGhpcykuY2xvc2VzdCgnLmxpc3RTdWJjYXRlZ29yaWVzJykucGFyZW50KCkucHJldignbGkudHlwZUFjdGUnKS5maW5kKCcuY2hlY2tBbGxCeVJhc3NlbWJsZXVyJyk7XHJcblxyXG4gICAgJChgI3N1YmNhdGVnb3J5JHtzdWJjYXRlZ29yeUlkfSAuZm9ybS1jaGVjay1pbnB1dGApLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gICAgJChgI25lc3RlZFN1YmNhdGVnb3JpZXMke3N1YmNhdGVnb3J5SWR9IC5mb3JtLWNoZWNrLWlucHV0YCkucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG5cclxuICAgIHR5cGVBY3RlQ2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tBY3RlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IHN1YmNhdGVnb3J5Q2hlY2tib3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0UGFuaWVyRGV0cycpLnBhcmVudCgpLnByZXYoJy5zdWJjYXRlZ29yeS1pdGVtJykuZmluZCgnLmZvcm0tY2hlY2staW5wdXQnKTtcclxuXHJcbiAgICBzdWJjYXRlZ29yeUNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNzZWxlY3RBbGxEZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcm93cyA9ICQoXCIjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvblwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlbGVjdEFsbERldFRlY2huaXF1ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByb3dzID0gJChcIiNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvblwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlbGVjdEFsbEFydGljbGVzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJvd3MgPSAkKFwiI3RhYmxlX2FydGljbGVzX3BoYXJtYWNpZVwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHZhciBlbCA9ICQoJyNzZWxlY3RBbGxEZXQnKS5nZXQoMCk7XHJcbiAgICAgIGlmIChlbCAmJiBlbC5jaGVja2VkICYmICgnaW5kZXRlcm1pbmF0ZScgaW4gZWwpKSB7XHJcbiAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHZhciBlbCA9ICQoJyNzZWxlY3RBbGxEZXRUZWNobmlxdWUnKS5nZXQoMCk7XHJcbiAgICAgIGlmIChlbCAmJiBlbC5jaGVja2VkICYmICgnaW5kZXRlcm1pbmF0ZScgaW4gZWwpKSB7XHJcbiAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjYnRuX2ZhY3R1cmFibGUgLCAjYnRuX25vbmZhY3R1cmFibGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhYmxlX2RldF9kaSA9ICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICB2YXIgc2VsZWN0ZWRJZHMgPSBbXTtcclxuICAgIHRhYmxlX2RldF9kaS5yb3dzKCkubm9kZXMoKS5lYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgIHZhciBjaGVja2JveCA9ICQocm93KS5maW5kKCdpbnB1dC5zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSW50KGNoZWNrYm94LmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgdmFyIHVybCA9ICQodGhpcykuYXR0cignaWQnKSA9PT0gJ2J0bl9mYWN0dXJhYmxlJ1xyXG4gICAgICAgID8gUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbCcpXHJcbiAgICAgICAgOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbm9uX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbCcpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJZHM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSWRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI3NlbGVjdEFsbERldCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZG9zc2llcl9pbXB1dGF0aW9uX2RldHNfdGVjaG5pcXVlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArIG1vbnRhbnREaSlcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5kaScgKyByZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbiB0Ym9keVwiKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbCk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2VsZWN0LWNoZWNrYm94XCI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY3JlYXRlZFJvdzogZnVuY3Rpb24gKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0ZXh0LXJpZ2h0IGNsYXNzIHRvIHRoZSAnbW9udGFudCcgb3IgJ3ByaXgnIGNvbHVtblxyXG4gICAgICAgICAgICAgICQocm93KS5maW5kKCd0ZDplcSg1KScpLmFkZENsYXNzKCd0ZXh0LXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bl9mYWN0dXJhYmxlX3RlY2huaXF1ZSAsICNidG5fbm9uZmFjdHVyYWJsZV90ZWNobmlxdWUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhYmxlX2RldF9kaV90ZWNobmlxdWUgPSAkKCdib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgIHZhciBzZWxlY3RlZElkcyA9IFtdO1xyXG4gICAgdGFibGVfZGV0X2RpX3RlY2huaXF1ZS5yb3dzKCkubm9kZXMoKS5lYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgIHZhciBjaGVja2JveCA9ICQocm93KS5maW5kKCdpbnB1dC5zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSW50KGNoZWNrYm94LmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgdmFyIHVybCA9ICQodGhpcykuYXR0cignaWQnKSA9PT0gJ2J0bl9mYWN0dXJhYmxlX3RlY2huaXF1ZSdcclxuICAgICAgICA/IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWxfdGVjaG5pcXVlJylcclxuICAgICAgICA6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9ub25fZmFjdHVyYWJsZV9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsX3RlY2huaXF1ZScpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJZHM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSWRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI3NlbGVjdEFsbERldFRlY2huaXF1ZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuXHJcbiAgICAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kocmVzdWx0Lm10RmFjdHVyYWJsZSlcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGkgKyBcIiA6IFwiICsgbW9udGFudERpKVxyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLmRpJyArIHJlc3VsdC5kaSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcblxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5XCIpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbiB0Ym9keVwiKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQudGVjaG5pcXVlKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMSwgJ2FzYyddXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRleHQtcmlnaHQgY2xhc3MgdG8gdGhlICdtb250YW50JyBvciAncHJpeCcgY29sdW1uXHJcbiAgICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDUpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoMyknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNidG5fZm9yZmFpdCAsICNidG5fbm9uZm9yZmFpdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFibGVfZGV0X2RpID0gJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgIHZhciBzZWxlY3RlZElkcyA9IFtdO1xyXG4gICAgdGFibGVfZGV0X2RpLnJvd3MoKS5ub2RlcygpLmVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcclxuICAgICAgdmFyIGNoZWNrYm94ID0gJChyb3cpLmZpbmQoJ2lucHV0LnNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICBpZiAoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuXHJcbiAgICAgICAgdmFyIGlkID0gcGFyc2VJbnQoY2hlY2tib3guY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICBzZWxlY3RlZElkcy5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPT09ICdidG5fZm9yZmFpdCdcclxuICAgICAgICA/IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mb3JmYWl0X2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKVxyXG4gICAgICAgIDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX25vbl9mb3JmYWl0X2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSWRzOiBKU09OLnN0cmluZ2lmeShzZWxlY3RlZElkcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNzZWxlY3RBbGxEZXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLm10VG90YWwnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgdG90YWw6ICcgKyByZXN1bHQubXRUb3RhbC50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXRGYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXRGYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdE5vbkZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgbm9uIGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXROb25GYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcblxyXG4gICAgICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArIG1vbnRhbnREaSlcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5kaScgKyByZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoNSknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNjbG9zZU1vZGFsQWRkRG9jdG9yUGFydGl0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsQWRkRG9jdG9yUGFydGl0aW9uJykubW9kYWwoJ2hpZGUnKTtcclxuICB9KVxyXG5cclxuICB2YXIgbXRUb3RhbFJlc3QgPSBudWxsXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bl9kZWxldGVfZGV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YWJsZV9kZXRfZGkgPSAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgdmFyIHNlbGVjdGVkSWRzID0gW107XHJcbiAgICB0YWJsZV9kZXRfZGkucm93cygpLm5vZGVzKCkuZWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xyXG4gICAgICB2YXIgY2hlY2tib3ggPSAkKHJvdykuZmluZCgnaW5wdXQuc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgIGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuICAgICAgICB2YXIgaWQgPSBwYXJzZUludChjaGVja2JveC5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNlbGVjdGVkSWRzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcmVtb3ZlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWxlY3RlZElkczogSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRJZHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjc2VsZWN0QWxsRGV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5tdFRvdGFsJykuZW1wdHkoKS5odG1sKCdNb250YW50IHRvdGFsOiAnICsgcmVzdWx0Lm10VG90YWwudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10RmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10RmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXROb25GYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IG5vbiBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10Tm9uRmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAkLmVhY2gocmVzdWx0LmFsbERvc3NpZXJzSW1wdXRhdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeSh2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHkgLmRpJyArIGtleSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLnBhbmllckRldHMnKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbDIpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoNSknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyAkKCdib2R5ICNhbGxEb3NzaWVyc0ltcHV0YXRpb24nKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuYWxsRG9zc2llckltcHV0YXRpb25zKTtcclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAubW9udGFudFwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtdFRvdGFsUmVzdCArPSBwYXJzZUZsb2F0KCQodGhpcykuYXR0cignZGF0YS12YWx1ZScpKTtcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgaWYgKHBhcnNlRmxvYXQobXRUb3RhbFJlc3QpICE9IDApIHtcclxuICAgICAgICAgICAgJChcImJvZHkgI3ZhbGlkYXRlX3JlbmRlenZvdXNfZmFjdHVyYXRpb25cIikuZmluZCgnLmdlbmVyYXRpb25fZG9zc2llcl9pbXB1dGF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRhYnMgLnRhYi1saW5rcyBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBjdXJyZW50QXR0clZhbHVlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgLy8gU2hvdy9IaWRlIFRhYnNcclxuICAgICQoJy50YWJzICcgKyBjdXJyZW50QXR0clZhbHVlKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcblxyXG4gICAgLy8gQ2hhbmdlL3JlbW92ZSBjdXJyZW50IHRhYiB0byBhY3RpdmVcclxuICAgICQodGhpcykucGFyZW50KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuZmFjdHVyZXItZGlcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZmFjdHVyZXIgbGUgZG9zc2llciBkJ2ltcHV0YXRpb24gP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gQW5udWxlciAhXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG4tc3VjY2VzcycsXHJcblxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB2YXIgZG9zc2llckltcHV0YXRpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgbG9hZGVyLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZmFjdHVyYXRpb25fZmFjdHVyZXJfZG9zc2llcl9pbXB1dGF0aW9uJywgeyBkb3NzaWVySW1wdXRhdGlvbjogZG9zc2llckltcHV0YXRpb24gfSksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0KVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZhY3R1cmF0aW9uLyc7XHJcblxyXG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0pXHJcblxyXG5cclxufSlcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiY29uc3QgUFJPRFVDVFMgPSB3aW5kb3cuUFJPRFVDVFMgfHwgW107XHJcbmNvbnN0IGNhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1pdGVtcy1jb250YWluZXInKTtcclxuY29uc3Qgc3VidG90YWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtc3VidG90YWwnKTtcclxubGV0IGNhcnQgPSBbXTtcclxuXHJcbi8vIEF0dGFjaCBldmVudHMgYWZ0ZXIgRE9NIGlzIHJlYWR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvcC1yaWdodC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHBhcnNlSW50KGJ1dHRvbi5kYXRhc2V0LmlkKTtcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IFBST0RVQ1RTLmZpbmQocCA9PiBwLmlkID09PSBwcm9kdWN0SWQpO1xyXG4gICAgICBpZiAoIXByb2R1Y3QpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gY2FydC5maW5kKHAgPT4gcC5pZCA9PT0gcHJvZHVjdElkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgZXhpc3RpbmcucXVhbnRpdHkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJ0LnB1c2goeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FydCgpIHtcclxuICBjYXJ0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGxldCBzdWJ0b3RhbCA9IDA7XHJcblxyXG4gIGNhcnQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIHN1YnRvdGFsICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG4gICAgY2FydENvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBjYXJ0LWl0ZW1cIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC11cHBlcmNhc2UgZnctc2VtaWJvbGQgY2FydC1pdGVtLW5hbWVcIj4ke2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIGNhcnQtaXRlbS1wcmljZVwiPiQke2l0ZW0ucHJpY2UudG9GaXhlZCgyKX08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctbGlnaHQgcm91bmRlZC1waWxsIHB4LTIgcHktMSBteC0yIHF0eS1jb250cm9sXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrXCIgc3R5bGU9XCJ3aWR0aDogMjJweFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJkZWNyZWFzZVF0eSgke2l0ZW0uaWR9KVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gdGV4dC1jZW50ZXIgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgcXR5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICB2YWx1ZT1cIiR7aXRlbS5xdWFudGl0eX1cIiByZWFkb25seSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gcC0wIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHRleHQtZGFya1wiIHN0eWxlPVwid2lkdGg6IDIycHhcIlxyXG4gICAgICAgICAgICAgICAgICBvbmNsaWNrPVwiaW5jcmVhc2VRdHkoJHtpdGVtLmlkfSlcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXJlbW92ZSB0ZXh0LWRhbmdlciBwLTEgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTBcIlxyXG4gICAgICAgICAgICAgICAgb25jbGljaz1cInJlbW92ZUl0ZW0oJHtpdGVtLmlkfSlcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG5cclxuICBzdWJ0b3RhbEVsZW1lbnQuaW5uZXJUZXh0ID0gYCQke3N1YnRvdGFsLnRvRml4ZWQoMil9YDtcclxufVxyXG5cclxud2luZG93LmluY3JlYXNlUXR5ID0gZnVuY3Rpb24oaWQpIHtcclxuICBjb25zdCBpdGVtID0gY2FydC5maW5kKHAgPT4gcC5pZCA9PT0gaWQpO1xyXG4gIGlmIChpdGVtKSB7XHJcbiAgICBpdGVtLnF1YW50aXR5Kys7XHJcbiAgICByZW5kZXJDYXJ0KCk7XHJcbiAgfVxyXG59O1xyXG5cclxud2luZG93LmRlY3JlYXNlUXR5ID0gZnVuY3Rpb24oaWQpIHtcclxuICBjb25zdCBpdGVtID0gY2FydC5maW5kKHAgPT4gcC5pZCA9PT0gaWQpO1xyXG4gIGlmIChpdGVtICYmIGl0ZW0ucXVhbnRpdHkgPiAxKSB7XHJcbiAgICBpdGVtLnF1YW50aXR5LS07XHJcbiAgICByZW5kZXJDYXJ0KCk7XHJcbiAgfVxyXG59O1xyXG5cclxud2luZG93LnJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpZCkge1xyXG4gIGNhcnQgPSBjYXJ0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcclxuICByZW5kZXJDYXJ0KCk7XHJcbn07XHJcbiIsIi8qIVxyXG4gKiBwYWNlLmpzIHYxLjIuNFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29kZUJ5WmFjaC9wYWNlL1xyXG4gKiBMaWNlbnNlZCBNSVQgwqkgSHViU3BvdCwgSW5jLlxyXG4gKi9cclxuIWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbyh0LGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KGUsYXJndW1lbnRzKX19dmFyIHUsYyxpLHMsbix5LHQsbCx2LHIsYSxwLGUsaCx3LGIsZixnLGQsbSxrLFMscSxMLHgsUCxULFIsaixPLEUsTSxBLEMsTixfLEYsVSxXLFgsRCxILEkseixHLEIsSj1bXS5zbGljZSxLPXt9Lmhhc093blByb3BlcnR5LFE9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSlLLmNhbGwoZSxuKSYmKHRbbl09ZVtuXSk7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1yZXR1cm4gci5wcm90b3R5cGU9ZS5wcm90b3R5cGUsdC5wcm90b3R5cGU9bmV3IHIsdC5fX3N1cGVyX189ZS5wcm90b3R5cGUsdH0sVj1bXS5pbmRleE9mfHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxuPXRoaXMubGVuZ3RoO2U8bjtlKyspaWYoZSBpbiB0aGlzJiZ0aGlzW2VdPT09dClyZXR1cm4gZTtyZXR1cm4tMX07ZnVuY3Rpb24gWSgpe31mb3IoZz17Y2xhc3NOYW1lOlwiXCIsY2F0Y2h1cFRpbWU6MTAwLGluaXRpYWxSYXRlOi4wMyxtaW5UaW1lOjI1MCxnaG9zdFRpbWU6MTAwLG1heFByb2dyZXNzUGVyRnJhbWU6MjAsZWFzZUZhY3RvcjoxLjI1LHN0YXJ0T25QYWdlTG9hZDohMCxyZXN0YXJ0T25QdXNoU3RhdGU6ITAscmVzdGFydE9uUmVxdWVzdEFmdGVyOjUwMCx0YXJnZXQ6XCJib2R5XCIsZWxlbWVudHM6e2NoZWNrSW50ZXJ2YWw6MTAwLHNlbGVjdG9yczpbXCJib2R5XCJdfSxldmVudExhZzp7bWluU2FtcGxlczoxMCxzYW1wbGVDb3VudDozLGxhZ1RocmVzaG9sZDozfSxhamF4Ont0cmFja01ldGhvZHM6W1wiR0VUXCJdLHRyYWNrV2ViU29ja2V0czohMCxpZ25vcmVVUkxzOltdfX0sUD1mdW5jdGlvbigpe3ZhciB0O3JldHVybiBudWxsIT0odD1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdygpOnZvaWQgMCk/dDorbmV3IERhdGV9LFI9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lLGY9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUscD1mdW5jdGlvbih0LGUsbil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5hZGRFdmVudExpc3RlbmVyKXJldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoZSxuLCExKTt2YXIgcjtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W1wib25cIitlXXx8XCJvYmplY3RcIiE9dHlwZW9mIHRbXCJvblwiK2VdLmV2ZW50TGlzdGVuZXJzPyhyPW5ldyBzLFwiZnVuY3Rpb25cIj09dHlwZW9mIHRbXCJvblwiK2VdJiZyLm9uKGUsdFtcIm9uXCIrZV0pLHRbXCJvblwiK2VdPWZ1bmN0aW9uKHQpe3JldHVybiByLnRyaWdnZXIoZSx0KX0sdFtcIm9uXCIrZV0uZXZlbnRMaXN0ZW5lcnM9cik6cj10W1wib25cIitlXS5ldmVudExpc3RlbmVycyxyLm9uKGUsbil9LG51bGw9PVImJihSPWZ1bmN0aW9uKHQpe3JldHVybiBzZXRUaW1lb3V0KHQsNTApfSxmPWZ1bmN0aW9uKHQpe3JldHVybiBjbGVhclRpbWVvdXQodCl9KSxPPWZ1bmN0aW9uKGUpe3ZhciBuPVAoKSxyPWZ1bmN0aW9uKCl7dmFyIHQ9UCgpLW47cmV0dXJuIDMzPD10PyhuPVAoKSxlKHQsZnVuY3Rpb24oKXtyZXR1cm4gUihyKX0pKTpzZXRUaW1lb3V0KHIsMzMtdCl9O3JldHVybiByKCl9LGo9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHNbMF0sZT1hcmd1bWVudHNbMV0sbj0zPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMik6W107cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdFtlXT90W2VdLmFwcGx5KHQsbik6dFtlXX0sZD1mdW5jdGlvbigpe2Zvcih2YXIgdCxlLG4scj1hcmd1bWVudHNbMF0scz0yPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMSk6W10sbz0wLGk9cy5sZW5ndGg7bzxpO28rKylpZihlPXNbb10pZm9yKHQgaW4gZSlLLmNhbGwoZSx0KSYmKG49ZVt0XSxudWxsIT1yW3RdJiZcIm9iamVjdFwiPT10eXBlb2Ygclt0XSYmbnVsbCE9biYmXCJvYmplY3RcIj09dHlwZW9mIG4/ZChyW3RdLG4pOnJbdF09bik7cmV0dXJuIHJ9LGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG4scj1lPTAscz0wLG89dC5sZW5ndGg7czxvO3MrKyluPXRbc10scis9TWF0aC5hYnMobiksZSsrO3JldHVybiByL2V9LGs9ZnVuY3Rpb24odCxlKXt2YXIgbixyO2lmKG51bGw9PXQmJih0PVwib3B0aW9uc1wiKSxudWxsPT1lJiYoZT0hMCkscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIit0K1wiXVwiKSl7aWYobj1yLmdldEF0dHJpYnV0ZShcImRhdGEtcGFjZS1cIit0KSwhZSlyZXR1cm4gbjt0cnl7cmV0dXJuIEpTT04ucGFyc2Uobil9Y2F0Y2godCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJm51bGwhPT1jb25zb2xlP2NvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIix0KTp2b2lkIDB9fX0sWS5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG4scil7dmFyIHM7cmV0dXJuIG51bGw9PXImJihyPSExKSxudWxsPT10aGlzLmJpbmRpbmdzJiYodGhpcy5iaW5kaW5ncz17fSksbnVsbD09KHM9dGhpcy5iaW5kaW5ncylbdF0mJihzW3RdPVtdKSx0aGlzLmJpbmRpbmdzW3RdLnB1c2goe2hhbmRsZXI6ZSxjdHg6bixvbmNlOnJ9KX0sWS5wcm90b3R5cGUub25jZT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMub24odCxlLG4sITApfSxZLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24odCxlKXt2YXIgbixyLHM7aWYobnVsbCE9KG51bGwhPShyPXRoaXMuYmluZGluZ3MpP3JbdF06dm9pZCAwKSl7aWYobnVsbD09ZSlyZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbdF07Zm9yKG49MCxzPVtdO248dGhpcy5iaW5kaW5nc1t0XS5sZW5ndGg7KXRoaXMuYmluZGluZ3NbdF1bbl0uaGFuZGxlcj09PWU/cy5wdXNoKHRoaXMuYmluZGluZ3NbdF0uc3BsaWNlKG4sMSkpOnMucHVzaChuKyspO3JldHVybiBzfX0sWS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbigpe3ZhciB0LGUsbixyLHMsbyxpPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/Si5jYWxsKGFyZ3VtZW50cywxKTpbXTtpZihudWxsIT0ocj10aGlzLmJpbmRpbmdzKSYmcltpXSl7Zm9yKG49MCxvPVtdO248dGhpcy5iaW5kaW5nc1tpXS5sZW5ndGg7KWU9KHM9dGhpcy5iaW5kaW5nc1tpXVtuXSkuaGFuZGxlcix0PXMuY3R4LHM9cy5vbmNlLGUuYXBwbHkobnVsbCE9dD90OnRoaXMsYSkscz9vLnB1c2godGhpcy5iaW5kaW5nc1tpXS5zcGxpY2UobiwxKSk6by5wdXNoKG4rKyk7cmV0dXJuIG99fSxCPVkseT13aW5kb3cuUGFjZXx8e30sd2luZG93LlBhY2U9eSxkKHksQi5wcm90b3R5cGUpLFQ9eS5vcHRpb25zPWQoe30sZyx3aW5kb3cucGFjZU9wdGlvbnMsaygpKSxYPTAsSD0oej1bXCJhamF4XCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIixcImVsZW1lbnRzXCJdKS5sZW5ndGg7WDxIO1grKykhMD09PVRbQz16W1hdXSYmKFRbQ109Z1tDXSk7ZnVuY3Rpb24gWigpe3JldHVybiBaLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gJCgpe3RoaXMucHJvZ3Jlc3M9MH1mdW5jdGlvbiB0dCgpe3RoaXMuYmluZGluZ3M9e319ZnVuY3Rpb24gZXQoKXt2YXIgZSxvPXRoaXM7ZXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlPWZ1bmN0aW9uKHIpe3ZhciBzPXIub3BlbjtyZXR1cm4gci5vcGVuPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gQSh0KSYmby50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOnQsdXJsOmUscmVxdWVzdDpyfSkscy5hcHBseShyLGFyZ3VtZW50cyl9fSx3aW5kb3cuWE1MSHR0cFJlcXVlc3Q9ZnVuY3Rpb24odCl7dD1uZXcgVyh0KTtyZXR1cm4gZSh0KSx0fTt0cnl7bSh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsVyl9Y2F0Y2godCl7fWlmKG51bGwhPVUpe3dpbmRvdy5YRG9tYWluUmVxdWVzdD1mdW5jdGlvbigpe3ZhciB0PW5ldyBVO3JldHVybiBlKHQpLHR9O3RyeXttKHdpbmRvdy5YRG9tYWluUmVxdWVzdCxVKX1jYXRjaCh0KXt9fWlmKG51bGwhPUYmJlQuYWpheC50cmFja1dlYlNvY2tldHMpe3dpbmRvdy5XZWJTb2NrZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1udWxsIT1lP25ldyBGKHQsZSk6bmV3IEYodCk7cmV0dXJuIEEoXCJzb2NrZXRcIikmJm8udHJpZ2dlcihcInJlcXVlc3RcIix7dHlwZTpcInNvY2tldFwiLHVybDp0LHByb3RvY29sczplLHJlcXVlc3Q6bn0pLG59O3RyeXttKHdpbmRvdy5XZWJTb2NrZXQsRil9Y2F0Y2godCl7fX19ZnVuY3Rpb24gbnQoKXt0aGlzLmNvbXBsZXRlPW8odGhpcy5jb21wbGV0ZSx0aGlzKTt2YXIgdD10aGlzO3RoaXMuZWxlbWVudHM9W10sUygpLm9uKFwicmVxdWVzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHQud2F0Y2guYXBwbHkodCxhcmd1bWVudHMpfSl9ZnVuY3Rpb24gcnQodCl7dmFyIGUsbixyLHM7Zm9yKG51bGw9PXQmJih0PXt9KSx0aGlzLmNvbXBsZXRlPW8odGhpcy5jb21wbGV0ZSx0aGlzKSx0aGlzLmVsZW1lbnRzPVtdLG51bGw9PXQuc2VsZWN0b3JzJiYodC5zZWxlY3RvcnM9W10pLG49MCxyPShzPXQuc2VsZWN0b3JzKS5sZW5ndGg7bjxyO24rKyllPXNbbl0sdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBpKGUsdGhpcy5jb21wbGV0ZSkpfWZ1bmN0aW9uIHN0KHQsZSl7dGhpcy5zZWxlY3Rvcj10LHRoaXMuY29tcGxldGVDYWxsYmFjaz1lLHRoaXMucHJvZ3Jlc3M9MCx0aGlzLmNoZWNrKCl9ZnVuY3Rpb24gb3QoKXt2YXIgdCxlLG49dGhpczt0aGlzLnByb2dyZXNzPW51bGwhPShlPXRoaXMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdKT9lOjEwMCx0PWRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSxkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9bi5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0mJihuLnByb2dyZXNzPW4uc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH19ZnVuY3Rpb24gaXQodCl7dGhpcy5zb3VyY2U9dCx0aGlzLmxhc3Q9dGhpcy5zaW5jZUxhc3RVcGRhdGU9MCx0aGlzLnJhdGU9VC5pbml0aWFsUmF0ZSx0aGlzLmNhdGNodXA9MCx0aGlzLnByb2dyZXNzPXRoaXMubGFzdFByb2dyZXNzPTAsbnVsbCE9dGhpcy5zb3VyY2UmJih0aGlzLnByb2dyZXNzPWoodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKSl9Qj1FcnJvcixRKFosQiksbj1aLCQucHJvdG90eXBlLmdldEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgdDtpZihudWxsPT10aGlzLmVsKXtpZighKHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihULnRhcmdldCkpKXRocm93IG5ldyBuO3RoaXMuZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmVsLmNsYXNzTmFtZT1cInBhY2UgcGFjZS1hY3RpdmVcIixkb2N1bWVudC5ib2R5LmNsYXNzTmFtZT1kb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC8ocGFjZS1kb25lICl8LyxcInBhY2UtcnVubmluZyBcIik7dmFyIGU9XCJcIiE9PVQuY2xhc3NOYW1lP1wiIFwiK1QuY2xhc3NOYW1lOlwiXCI7dGhpcy5lbC5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzJytlKydcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nLG51bGwhPXQuZmlyc3RDaGlsZD90Lmluc2VydEJlZm9yZSh0aGlzLmVsLHQuZmlyc3RDaGlsZCk6dC5hcHBlbmRDaGlsZCh0aGlzLmVsKX1yZXR1cm4gdGhpcy5lbH0sJC5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRFbGVtZW50KCk7cmV0dXJuIHQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLWFjdGl2ZVwiLFwicGFjZS1pbmFjdGl2ZVwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTmFtZT1kb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwicGFjZS1ydW5uaW5nIFwiLFwicGFjZS1kb25lIFwiKX0sJC5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnByb2dyZXNzPXQseS50cmlnZ2VyKFwicHJvZ3Jlc3NcIix0KSx0aGlzLnJlbmRlcigpfSwkLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dHJ5e3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5nZXRFbGVtZW50KCkpfWNhdGNoKHQpe249dH1yZXR1cm4gdGhpcy5lbD12b2lkIDB9LCQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0LGUsbixyLHMsbyxpO2lmKG51bGw9PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoVC50YXJnZXQpKXJldHVybiExO2Zvcih0PXRoaXMuZ2V0RWxlbWVudCgpLHI9XCJ0cmFuc2xhdGUzZChcIit0aGlzLnByb2dyZXNzK1wiJSwgMCwgMClcIixzPTAsbz0oaT1bXCJ3ZWJraXRUcmFuc2Zvcm1cIixcIm1zVHJhbnNmb3JtXCIsXCJ0cmFuc2Zvcm1cIl0pLmxlbmd0aDtzPG87cysrKWU9aVtzXSx0LmNoaWxkcmVuWzBdLnN0eWxlW2VdPXI7cmV0dXJuKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfHx0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfDAhPT10aGlzLnByb2dyZXNzfDApJiYodC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzLXRleHRcIiwoMHx0aGlzLnByb2dyZXNzKStcIiVcIiksMTAwPD10aGlzLnByb2dyZXNzP249XCI5OVwiOihuPXRoaXMucHJvZ3Jlc3M8MTA/XCIwXCI6XCJcIixuKz0wfHRoaXMucHJvZ3Jlc3MpLHQuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc1wiLFwiXCIrbikpLHkudHJpZ2dlcihcImNoYW5nZVwiLHRoaXMucHJvZ3Jlc3MpLHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3M9dGhpcy5wcm9ncmVzc30sJC5wcm90b3R5cGUuZG9uZT1mdW5jdGlvbigpe3JldHVybiAxMDA8PXRoaXMucHJvZ3Jlc3N9LGM9JCx0dC5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0LGUpe3ZhciBuLHIscyxvLGk7aWYobnVsbCE9dGhpcy5iaW5kaW5nc1t0XSl7Zm9yKGk9W10scj0wLHM9KG89dGhpcy5iaW5kaW5nc1t0XSkubGVuZ3RoO3I8cztyKyspbj1vW3JdLGkucHVzaChuLmNhbGwodGhpcyxlKSk7cmV0dXJuIGl9fSx0dC5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gbnVsbD09KG49dGhpcy5iaW5kaW5ncylbdF0mJihuW3RdPVtdKSx0aGlzLmJpbmRpbmdzW3RdLnB1c2goZSl9LHM9dHQsVz13aW5kb3cuWE1MSHR0cFJlcXVlc3QsVT13aW5kb3cuWERvbWFpblJlcXVlc3QsRj13aW5kb3cuV2ViU29ja2V0LG09ZnVuY3Rpb24odCxlKXt2YXIgbixyPVtdO2ZvcihuIGluIGUucHJvdG90eXBlKXRyeXtudWxsPT10W25dJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlW25dP1wiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eT9yLnB1c2goT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Z2V0OmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLnByb3RvdHlwZVt0XX19KG4pLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSkpOnIucHVzaCh0W25dPWUucHJvdG90eXBlW25dKTpyLnB1c2godm9pZCAwKX1jYXRjaCh0KXswfXJldHVybiByfSxMPVtdLHkuaWdub3JlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzWzBdLGU9Mjw9YXJndW1lbnRzLmxlbmd0aD9KLmNhbGwoYXJndW1lbnRzLDEpOltdO3JldHVybiBMLnVuc2hpZnQoXCJpZ25vcmVcIiksZT10LmFwcGx5KG51bGwsZSksTC5zaGlmdCgpLGV9LHkudHJhY2s9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHNbMF0sZT0yPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMSk6W107cmV0dXJuIEwudW5zaGlmdChcInRyYWNrXCIpLGU9dC5hcHBseShudWxsLGUpLEwuc2hpZnQoKSxlfSxBPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQmJih0PVwiR0VUXCIpLFwidHJhY2tcIj09PUxbMF0pcmV0dXJuXCJmb3JjZVwiO2lmKCFMLmxlbmd0aCYmVC5hamF4KXtpZihcInNvY2tldFwiPT09dCYmVC5hamF4LnRyYWNrV2ViU29ja2V0cylyZXR1cm4hMDtpZih0PXQudG9VcHBlckNhc2UoKSwwPD1WLmNhbGwoVC5hamF4LnRyYWNrTWV0aG9kcyx0KSlyZXR1cm4hMH1yZXR1cm4hMX0sUShldCxzKSx0PWV0LEQ9bnVsbCxNPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPVQuYWpheC5pZ25vcmVVUkxzLHI9MCxzPW4ubGVuZ3RoO3I8cztyKyspaWYoXCJzdHJpbmdcIj09dHlwZW9mKGU9bltyXSkpe2lmKC0xIT09dC5pbmRleE9mKGUpKXJldHVybiEwfWVsc2UgaWYoZS50ZXN0KHQpKXJldHVybiEwO3JldHVybiExfSwoUz1mdW5jdGlvbigpe3JldHVybiBEPW51bGw9PUQ/bmV3IHQ6RH0pKCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24odCl7dmFyIG8saT10LnR5cGUsYT10LnJlcXVlc3QsZT10LnVybDtpZighTShlKSlyZXR1cm4geS5ydW5uaW5nfHwhMT09PVQucmVzdGFydE9uUmVxdWVzdEFmdGVyJiZcImZvcmNlXCIhPT1BKGkpP3ZvaWQgMDoobz1hcmd1bWVudHMsXCJib29sZWFuXCI9PXR5cGVvZihlPVQucmVzdGFydE9uUmVxdWVzdEFmdGVyfHwwKSYmKGU9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciB0LGUsbixyLHM9XCJzb2NrZXRcIj09PWk/YS5yZWFkeVN0YXRlPDE6MDwocz1hLnJlYWR5U3RhdGUpJiZzPDQ7aWYocyl7Zm9yKHkucmVzdGFydCgpLHI9W10sdD0wLGU9KG49eS5zb3VyY2VzKS5sZW5ndGg7dDxlO3QrKyl7aWYoKEM9blt0XSlpbnN0YW5jZW9mIHUpe0Mud2F0Y2guYXBwbHkoQyxvKTticmVha31yLnB1c2godm9pZCAwKX1yZXR1cm4gcn19LGUpKX0pLG50LnByb3RvdHlwZS53YXRjaD1mdW5jdGlvbih0KXt2YXIgZT10LnR5cGUsbj10LnJlcXVlc3QsdD10LnVybDtpZighTSh0KSlyZXR1cm4gbj1uZXcoXCJzb2NrZXRcIj09PWU/cjphKShuLHRoaXMuY29tcGxldGUpLHRoaXMuZWxlbWVudHMucHVzaChuKX0sbnQucHJvdG90eXBlLmNvbXBsZXRlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVsZW1lbnRzPXRoaXMuZWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0IT09ZX0pfSx1PW50LGE9ZnVuY3Rpb24oZSxuKXt2YXIgdCxyLHMsbyxpPXRoaXM7aWYodGhpcy5wcm9ncmVzcz0wLG51bGwhPXdpbmRvdy5Qcm9ncmVzc0V2ZW50KWZvcihwKGUsXCJwcm9ncmVzc1wiLGZ1bmN0aW9uKHQpe3JldHVybiB0Lmxlbmd0aENvbXB1dGFibGU/aS5wcm9ncmVzcz0xMDAqdC5sb2FkZWQvdC50b3RhbDppLnByb2dyZXNzPWkucHJvZ3Jlc3MrKDEwMC1pLnByb2dyZXNzKS8yfSksdD0wLHI9KG89W1wibG9hZFwiLFwiYWJvcnRcIixcInRpbWVvdXRcIixcImVycm9yXCJdKS5sZW5ndGg7dDxyO3QrKylwKGUsb1t0XSxmdW5jdGlvbigpe3JldHVybiBuKGkpLGkucHJvZ3Jlc3M9MTAwfSk7ZWxzZSBzPWUub25yZWFkeXN0YXRlY2hhbmdlLGUub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIDA9PT0odD1lLnJlYWR5U3RhdGUpfHw0PT09dD8obihpKSxpLnByb2dyZXNzPTEwMCk6Mz09PWUucmVhZHlTdGF0ZSYmKGkucHJvZ3Jlc3M9NTApLFwiZnVuY3Rpb25cIj09dHlwZW9mIHM/cy5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX0scj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbixyPXRoaXMscz10aGlzLnByb2dyZXNzPTAsbz0obj1bXCJlcnJvclwiLFwib3BlblwiXSkubGVuZ3RoO3M8bztzKyspcCh0LG5bc10sZnVuY3Rpb24oKXtyZXR1cm4gZShyKSxyLnByb2dyZXNzPTEwMH0pfSxydC5wcm90b3R5cGUuY29tcGxldGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWxlbWVudHM9dGhpcy5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1lfSl9LGs9cnQsc3QucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKT90aGlzLmRvbmUoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQuY2hlY2soKX0sVC5lbGVtZW50cy5jaGVja0ludGVydmFsKX0sc3QucHJvdG90eXBlLmRvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21wbGV0ZUNhbGxiYWNrKHRoaXMpLHRoaXMuY29tcGxldGVDYWxsYmFjaz1udWxsLHRoaXMucHJvZ3Jlc3M9MTAwfSxpPXN0LG90LnByb3RvdHlwZS5zdGF0ZXM9e2xvYWRpbmc6MCxpbnRlcmFjdGl2ZTo1MCxjb21wbGV0ZToxMDB9LEI9b3QsUT1mdW5jdGlvbigpe3ZhciBlLG4scixzLG8saT10aGlzO3RoaXMucHJvZ3Jlc3M9MCxvPVtdLHM9MCxyPVAoKSxuPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIHQ9UCgpLXItNTA7cmV0dXJuIHI9UCgpLG8ucHVzaCh0KSxvLmxlbmd0aD5ULmV2ZW50TGFnLnNhbXBsZUNvdW50JiZvLnNoaWZ0KCksZT1oKG8pLCsrcz49VC5ldmVudExhZy5taW5TYW1wbGVzJiZlPFQuZXZlbnRMYWcubGFnVGhyZXNob2xkPyhpLnByb2dyZXNzPTEwMCxjbGVhckludGVydmFsKG4pKTppLnByb2dyZXNzPTMvKGUrMykqMTAwfSw1MCl9LGl0LnByb3RvdHlwZS50aWNrPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIDEwMDw9KGU9bnVsbD09ZT9qKHRoaXMuc291cmNlLFwicHJvZ3Jlc3NcIik6ZSkmJih0aGlzLmRvbmU9ITApLGU9PT10aGlzLmxhc3Q/dGhpcy5zaW5jZUxhc3RVcGRhdGUrPXQ6KHRoaXMuc2luY2VMYXN0VXBkYXRlJiYodGhpcy5yYXRlPShlLXRoaXMubGFzdCkvdGhpcy5zaW5jZUxhc3RVcGRhdGUpLHRoaXMuY2F0Y2h1cD0oZS10aGlzLnByb2dyZXNzKS9ULmNhdGNodXBUaW1lLHRoaXMuc2luY2VMYXN0VXBkYXRlPTAsdGhpcy5sYXN0PWUpLGU+dGhpcy5wcm9ncmVzcyYmKHRoaXMucHJvZ3Jlc3MrPXRoaXMuY2F0Y2h1cCp0KSxlPTEtTWF0aC5wb3codGhpcy5wcm9ncmVzcy8xMDAsVC5lYXNlRmFjdG9yKSx0aGlzLnByb2dyZXNzKz1lKnRoaXMucmF0ZSp0LHRoaXMucHJvZ3Jlc3M9TWF0aC5taW4odGhpcy5sYXN0UHJvZ3Jlc3MrVC5tYXhQcm9ncmVzc1BlckZyYW1lLHRoaXMucHJvZ3Jlc3MpLHRoaXMucHJvZ3Jlc3M9TWF0aC5tYXgoMCx0aGlzLnByb2dyZXNzKSx0aGlzLnByb2dyZXNzPU1hdGgubWluKDEwMCx0aGlzLnByb2dyZXNzKSx0aGlzLmxhc3RQcm9ncmVzcz10aGlzLnByb2dyZXNzLHRoaXMucHJvZ3Jlc3N9LHY9aXQsYj1lPV89dz1FPU49bnVsbCx5LnJ1bm5pbmc9ITEscT1mdW5jdGlvbigpe2lmKFQucmVzdGFydE9uUHVzaFN0YXRlKXJldHVybiB5LnJlc3RhcnQoKX0sbnVsbCE9d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlJiYoST13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHEoKSxJLmFwcGx5KHdpbmRvdy5oaXN0b3J5LGFyZ3VtZW50cyl9KSxudWxsIT13aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUmJihHPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSx3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gcSgpLEcuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLGw9e2FqYXg6dSxlbGVtZW50czprLGRvY3VtZW50OkIsZXZlbnRMYWc6UX0sKHg9ZnVuY3Rpb24oKXt2YXIgdCxlLG4scixzLG8saSxhO2Zvcih5LnNvdXJjZXM9Tj1bXSxlPTAscj0obz1bXCJhamF4XCIsXCJlbGVtZW50c1wiLFwiZG9jdW1lbnRcIixcImV2ZW50TGFnXCJdKS5sZW5ndGg7ZTxyO2UrKykhMSE9PVRbdD1vW2VdXSYmTi5wdXNoKG5ldyBsW3RdKFRbdF0pKTtmb3Iobj0wLHM9KGE9bnVsbCE9KGk9VC5leHRyYVNvdXJjZXMpP2k6W10pLmxlbmd0aDtuPHM7bisrKUM9YVtuXSxOLnB1c2gobmV3IEMoVCkpO3JldHVybiB5LmJhcj13PW5ldyBjLEU9W10sXz1uZXcgdn0pKCkseS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHkudHJpZ2dlcihcInN0b3BcIikseS5ydW5uaW5nPSExLHcuZGVzdHJveSgpLGI9ITAsbnVsbCE9ZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJmYoZSksZT1udWxsKSx4KCl9LHkucmVzdGFydD1mdW5jdGlvbigpe3JldHVybiB5LnRyaWdnZXIoXCJyZXN0YXJ0XCIpLHkuc3RvcCgpLHkuc3RhcnQoKX0seS5nbz1mdW5jdGlvbigpe3ZhciBtO3JldHVybiB5LnJ1bm5pbmc9ITAsdy5yZW5kZXIoKSxtPVAoKSxiPSExLGU9TyhmdW5jdGlvbih0LGUpe3cucHJvZ3Jlc3M7Zm9yKHZhciBuLHIscyxvLGksYSx1LGMsbCxwLGg9YT0wLGY9ITAsZz11PTAsZD1OLmxlbmd0aDt1PGQ7Zz0rK3UpZm9yKEM9TltnXSxpPW51bGwhPUVbZ10/RVtnXTpFW2ddPVtdLHM9Yz0wLGw9KHI9bnVsbCE9KHA9Qy5lbGVtZW50cyk/cDpbQ10pLmxlbmd0aDtjPGw7cz0rK2Mpbz1yW3NdLGYmPShvPW51bGwhPWlbc10/aVtzXTppW3NdPW5ldyB2KG8pKS5kb25lLG8uZG9uZXx8KGgrKyxhKz1vLnRpY2sodCkpO3JldHVybiBuPWEvaCx3LnVwZGF0ZShfLnRpY2sodCxuKSksdy5kb25lKCl8fGZ8fGI/KHcudXBkYXRlKDEwMCkseS50cmlnZ2VyKFwiZG9uZVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHcuZmluaXNoKCkseS5ydW5uaW5nPSExLHkudHJpZ2dlcihcImhpZGVcIil9LE1hdGgubWF4KFQuZ2hvc3RUaW1lLE1hdGgubWF4KFQubWluVGltZS0oUCgpLW0pLDApKSkpOmUoKX0pfSx5LnN0YXJ0PWZ1bmN0aW9uKHQpe2QoVCx0KSx5LnJ1bm5pbmc9ITA7dHJ5e3cucmVuZGVyKCl9Y2F0Y2godCl7bj10fXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhY2VcIik/KHkudHJpZ2dlcihcInN0YXJ0XCIpLHkuZ28oKSk6c2V0VGltZW91dCh5LnN0YXJ0LDUwKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiB5fSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9eTpULnN0YXJ0T25QYWdlTG9hZCYmeS5zdGFydCgpfS5jYWxsKHRoaXMpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiYWN0aXZlIiwiYmluZCIsImNoZWNrQWN0aXZpdHkiLCJ0aW1lb3V0IiwiaW50ZXJ2YWwiLCJlbGFwc2VkIiwiY29uc29sZSIsImxvZyIsImdldCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImRhdGF0YWJsZXNGcmVuY2giLCJzd2FsIiwic3dhbFdpdGhCb290c3RyYXBCdXR0b25zIiwibWl4aW4iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsIlN3YWwiLCJ0b2FzdHIiLCJvcHRpb25zIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwiZGVmaW5lIiwiTGFkZGEiLCJsYWRkYSIsIm1vbWVudCIsImF4aW9zIiwib24iLCJ0b2dnbGUiLCJjbGljayIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiaGlkZSIsImlkIiwiYXR0ciIsImZpbmRBbGxQYXRpZW50V2FybmluZ3MiLCJpcHAiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiYWxlcnQiLCJhcnJheVRvT3B0aW9uIiwiYXJyYXkiLCJkaXNhYmxlT3B0aW9ucyIsInVuZGVmaW5lZCIsIm1hcCIsIml0ZW0iLCJvcHRpb24iLCJPcHRpb24iLCJ0ZXh0IiwiaW5BcnJheSIsImRpc2FibGVkIiwiZGF0ZVRpbWVUb1N0cmluZyIsImRhdGUiLCJEYXRlIiwibSIsImdldE1vbnRoIiwibW9udGgiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbmltdW1JbnRlZ2VyRGlnaXRzIiwidXNlR3JvdXBpbmciLCJkYXkiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJmb3JtYXROdW1iZXJUb0N1cnJlbmN5IiwibnVtYmVyIiwiZm9ybWF0dGVkTnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwibG9hZGVyIiwidmFsIiwicHJvcCIsInNob3ciLCJjb2RlUXVvdGFzIiwicXVvdGFzIiwicG91cmNlbnRhZ2UiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiZmlsdGVyIiwid2FybmluZyIsInByZXBlbmQiLCJvcGVuIiwibW9udGFudCIsIm10IiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJyZXMiLCJodG1sIiwiZGlfZGV0IiwiZGV0IiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJlbXB0eSIsImFwcGVuZCIsImNvbHVtbkRlZnMiLCJ0YXJnZXRzIiwib3JkZXJhYmxlIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiZnVsbCIsIm1ldGEiLCJvcmRlciIsImxhbmd1YWdlIiwiZnJlbmNoSnNvblVybCIsImxlbmd0aE1lbnUiLCJjcmVhdGVkUm93Iiwicm93IiwiZGF0YUluZGV4IiwiYWRkQ2xhc3MiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVzcG9uc2VUZXh0IiwicGFkVG8yRGlnaXRzIiwibnVtIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImdldEN1cnJlbnREYXRlIiwibm93IiwiZ2V0Q3VycmVudERhdGV0aW1lTG9jYWwiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJ1cGRhdGVJbnB1dFZhbHVlcyIsInNldEludGVydmFsIiwiaXNDaGVja2VkIiwicGF0aWVudHNUYWJsZSIsInJlbG9hZCIsImV2ZW50IiwiaXMiLCJ0eXBlQWN0ZUlkIiwiY29sbGFwc2VJZCIsImNvbmNhdCIsInBhbmllckRldENvbGxhcHNlSWQiLCJzbGlkZVRvZ2dsZSIsInN0b3BQcm9wYWdhdGlvbiIsInN1YmNhdGVnb3J5SWQiLCJuZXN0ZWRDb2xsYXBzZUlkIiwiY2hlY2tlZCIsInR5cGVBY3RlQ2hlY2tib3giLCJwYXJlbnQiLCJwcmV2Iiwic3ViY2F0ZWdvcnlDaGVja2JveCIsInJvd3MiLCJub2RlcyIsImVsIiwiaW5kZXRlcm1pbmF0ZSIsInRhYmxlX2RldF9kaSIsInNlbGVjdGVkSWRzIiwiZWFjaCIsImluZGV4IiwiY2hlY2tib3giLCJwYXJzZUludCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwibXRUb3RhbCIsInRvRml4ZWQiLCJtdEZhY3R1cmFibGUiLCJtdE5vbkZhY3R1cmFibGUiLCJtb250YW50RGkiLCJkaSIsIm1lc3NhZ2UiLCJ0YWJsZV9kZXRfZGlfdGVjaG5pcXVlIiwidGVjaG5pcXVlIiwibW9kYWwiLCJtdFRvdGFsUmVzdCIsImFsbERvc3NpZXJzSW1wdXRhdGlvbnMiLCJodG1sMiIsImN1cnJlbnRBdHRyVmFsdWUiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJfdGhpcyIsImZpcmUiLCJzaG93Q2xhc3MiLCJwb3B1cCIsInBvc2l0aW9uIiwidGl0bGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNsYXNzIiwidGhlbiIsImRvc3NpZXJJbXB1dGF0aW9uIiwiaHJlZiIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiUFJPRFVDVFMiLCJjYXJ0Q29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJ0b3RhbEVsZW1lbnQiLCJjYXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwicHJvZHVjdElkIiwiZGF0YXNldCIsInByb2R1Y3QiLCJwIiwiZXhpc3RpbmciLCJxdWFudGl0eSIsIl9vYmplY3RTcHJlYWQiLCJyZW5kZXJDYXJ0IiwiaW5uZXJIVE1MIiwic3VidG90YWwiLCJwcmljZSIsIm5hbWUiLCJpbm5lclRleHQiLCJpbmNyZWFzZVF0eSIsImRlY3JlYXNlUXR5IiwicmVtb3ZlSXRlbSIsIm8iLCJ0IiwidSIsImMiLCJpIiwicyIsIm4iLCJ5IiwibCIsInYiLCJyIiwiYSIsImgiLCJ3IiwiYiIsImYiLCJnIiwiZCIsImsiLCJTIiwicSIsIkwiLCJ4IiwiUCIsIlQiLCJSIiwiaiIsIk8iLCJFIiwiTSIsIkEiLCJDIiwiTiIsIl8iLCJGIiwiVSIsIlciLCJYIiwiRCIsIkgiLCJJIiwieiIsIkciLCJCIiwiSiIsInNsaWNlIiwiSyIsImhhc093blByb3BlcnR5IiwiUSIsImNhbGwiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9fc3VwZXJfXyIsIlYiLCJpbmRleE9mIiwiWSIsImNhdGNodXBUaW1lIiwiaW5pdGlhbFJhdGUiLCJtaW5UaW1lIiwiZ2hvc3RUaW1lIiwibWF4UHJvZ3Jlc3NQZXJGcmFtZSIsImVhc2VGYWN0b3IiLCJzdGFydE9uUGFnZUxvYWQiLCJyZXN0YXJ0T25QdXNoU3RhdGUiLCJyZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIiLCJlbGVtZW50cyIsImNoZWNrSW50ZXJ2YWwiLCJzZWxlY3RvcnMiLCJldmVudExhZyIsIm1pblNhbXBsZXMiLCJzYW1wbGVDb3VudCIsImxhZ1RocmVzaG9sZCIsInRyYWNrTWV0aG9kcyIsInRyYWNrV2ViU29ja2V0cyIsImlnbm9yZVVSTHMiLCJwZXJmb3JtYW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIl90eXBlb2YiLCJldmVudExpc3RlbmVycyIsInRyaWdnZXIiLCJjbGVhclRpbWVvdXQiLCJNYXRoIiwiYWJzIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhcnNlIiwiYmluZGluZ3MiLCJoYW5kbGVyIiwiY3R4Iiwib25jZSIsIm9mZiIsInNwbGljZSIsIlBhY2UiLCJwYWNlT3B0aW9ucyIsIloiLCJwcm9ncmVzcyIsInR0IiwiZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJYRG9tYWluUmVxdWVzdCIsIldlYlNvY2tldCIsInByb3RvY29scyIsIm50IiwiY29tcGxldGUiLCJ3YXRjaCIsInJ0Iiwic3QiLCJzZWxlY3RvciIsImNvbXBsZXRlQ2FsbGJhY2siLCJjaGVjayIsIm90Iiwic3RhdGVzIiwicmVhZHlTdGF0ZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIml0Iiwic291cmNlIiwibGFzdCIsInNpbmNlTGFzdFVwZGF0ZSIsInJhdGUiLCJjYXRjaHVwIiwibGFzdFByb2dyZXNzIiwiRXJyb3IiLCJnZXRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJmaW5pc2giLCJ1cGRhdGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsImxhc3RSZW5kZXJlZFByb2dyZXNzIiwic2V0QXR0cmlidXRlIiwiZG9uZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImlnbm9yZSIsInVuc2hpZnQiLCJzaGlmdCIsInRyYWNrIiwidG9VcHBlckNhc2UiLCJ0ZXN0IiwicnVubmluZyIsInJlc3RhcnQiLCJzb3VyY2VzIiwiUHJvZ3Jlc3NFdmVudCIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsImxvYWRpbmciLCJpbnRlcmFjdGl2ZSIsImNsZWFySW50ZXJ2YWwiLCJ0aWNrIiwicG93IiwibWluIiwibWF4IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImV4dHJhU291cmNlcyIsImJhciIsInN0b3AiLCJzdGFydCIsImdvIiwiZXhwb3J0cyIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=