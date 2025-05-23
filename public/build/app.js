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
/* harmony import */ var _fontsource_roboto_condensed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fontsource/roboto-condensed */ "./node_modules/@fontsource/roboto-condensed/index.css");
/* harmony import */ var _fontsource_roboto_condensed_400_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fontsource/roboto-condensed/400.css */ "./node_modules/@fontsource/roboto-condensed/400.css");
/* harmony import */ var _fontsource_roboto_condensed_400_italic_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fontsource/roboto-condensed/400-italic.css */ "./node_modules/@fontsource/roboto-condensed/400-italic.css");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery-ui/ui/widgets/autocomplete.js */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker.js */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jquery-ui/ui/i18n/datepicker-fr.js */ "./node_modules/jquery-ui/ui/i18n/datepicker-fr.js");
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! jquery-ui/themes/base/all.css */ "./node_modules/jquery-ui/themes/base/all.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plugins/pace */ "./assets/plugins/pace.js");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_plugins_pace__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! fos-router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _images_logoHCZ2_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/logoHCZ2.png */ "./assets/images/logoHCZ2.png");
/* harmony import */ var _images_logoHcz_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/logoHcz.png */ "./assets/images/logoHcz.png");
/* harmony import */ var _images_bg_login_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/bg_login.jpg */ "./assets/images/bg_login.jpg");
/* harmony import */ var _images_26807_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/26807.jpg */ "./assets/images/26807.jpg");
/* harmony import */ var _images_5570863_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/5570863.jpg */ "./assets/images/5570863.jpg");
/* harmony import */ var _images_gestion_patient_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/gestion_patient.png */ "./assets/images/gestion_patient.png");
/* harmony import */ var _images_hospital_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/hospital.png */ "./assets/images/hospital.png");
/* harmony import */ var _images_appointment_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/appointment.png */ "./assets/images/appointment.png");
/* harmony import */ var _images_medical_record_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/medical-record.png */ "./assets/images/medical-record.png");
/* harmony import */ var _images_bill_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/bill.png */ "./assets/images/bill.png");
/* harmony import */ var _images_factures_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/factures.png */ "./assets/images/factures.png");
/* harmony import */ var _images_consulting_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/consulting.png */ "./assets/images/consulting.png");
/* harmony import */ var _images_pec_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/pec.png */ "./assets/images/pec.png");
/* harmony import */ var _images_archive_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/archive.png */ "./assets/images/archive.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMK_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMK.png */ "./assets/images/parametrage/dossiers/logo_HMK.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMS_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMS.png */ "./assets/images/parametrage/dossiers/logo_HMS.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMY_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMY.png */ "./assets/images/parametrage/dossiers/logo_HMY.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMB_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMB.png */ "./assets/images/parametrage/dossiers/logo_HMB.png");
/* harmony import */ var _images_parametrage_dossiers_logo_FCZ_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/parametrage/dossiers/_logo_FCZ.png */ "./assets/images/parametrage/dossiers/_logo_FCZ.png");

















/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


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
    $.get(fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_login'));
  }
  if (elapsed < timeout) {
    elapsed += interval;
    setTimeout(function () {
      checkActivity(timeout, interval, elapsed);
    }, interval);
  } else {
    window.location = fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_logout'); // Redirect to "session expired" page.
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

__webpack_require__.g.Routing = (fos_router__WEBPACK_IMPORTED_MODULE_26___default());

// require('pace');


__webpack_require__.g.ladda = ladda__WEBPACK_IMPORTED_MODULE_31__;
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
      url: fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('gestion_patient_warnings'),
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
      url: fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_dossier_imputation_detail_technique', {
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
      var url = $(this).attr('id') === 'btn_facturable' ? fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_facturable_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_non_facturable_dossier_imputation_detail');
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
      var url = $(this).attr('id') === 'btn_facturable_technique' ? fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_facturable_dossier_imputation_detail_technique') : fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_non_facturable_dossier_imputation_detail_technique');
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
      var url = $(this).attr('id') === 'btn_forfait' ? fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_forfait_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_non_forfait_dossier_imputation_detail');
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
        url: fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_remove_dossier_imputation_detail'),
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
          url: fos_router__WEBPACK_IMPORTED_MODULE_26___default().generate('app_facturation_facturer_dossier_imputation', {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-a9da69","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-595e89","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQVVJLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQSxPQUFBYixRQUFBO0FBQUEsRUFId0JELDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMkI7QUFDRTtBQUk3QixJQUFNZ0IsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFRLENBQUM7QUFFVyxDQUFDO0FBQ08sQ0FBQztBQUNNLENBQUM7O0FBRXREQyxxQkFBTSxDQUFDRixDQUFDLEdBQUdFLHFCQUFNLENBQUNDLE1BQU0sR0FBR0gsQ0FBQztBQUVrQjtBQUNGO0FBQ0E7QUFDTDtBQUd2Q0EsQ0FBQyxDQUFDSSxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDM0JMLENBQUMsQ0FBQ00sTUFBTSxHQUFHLEtBQUs7RUFDaEJOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ08sSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVc7SUFDMUNQLENBQUMsQ0FBQ00sTUFBTSxHQUFHLElBQUk7RUFFakIsQ0FBQyxDQUFDO0VBQ0ZFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDOztBQUVGLFNBQVNBLGFBQWFBLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7RUFDakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQixJQUFJYixDQUFDLENBQUNNLE1BQU0sRUFBRTtJQUNWSyxPQUFPLEdBQUcsQ0FBQztJQUNYWCxDQUFDLENBQUNNLE1BQU0sR0FBRyxLQUFLO0lBQ2hCTixDQUFDLENBQUNjLEdBQUcsQ0FBQ0MsMkRBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDeEM7RUFDQSxJQUFJSixPQUFPLEdBQUdGLE9BQU8sRUFBRTtJQUNuQkUsT0FBTyxJQUFJRCxRQUFRO0lBQ25CTyxVQUFVLENBQUMsWUFBVztNQUNsQlQsYUFBYSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxDQUFDO0lBQzdDLENBQUMsRUFBRUQsUUFBUSxDQUFDO0VBQ2hCLENBQUMsTUFBTTtJQUNIUSxNQUFNLENBQUNDLFFBQVEsR0FBR0osMkRBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUN0RDtBQUNGOztBQUUyQztBQUNwQjtBQUN2QixJQUFNSyxnQkFBZ0IsR0FBRyx1Q0FBdUM7QUFDaEVsQixxQkFBTSxDQUFDa0IsZ0JBQWdCLEdBQUdBLGdCQUFnQjtBQUMxQzs7QUFFQTtBQUNBOztBQUV3QjtBQUV4QixJQUFNQyxJQUFJLEdBQUdwQixtQkFBTyxDQUFDLHVFQUFhLENBQUM7QUFDbkMsSUFBTXFCLHdCQUF3QixHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUMxQ0MsV0FBVyxFQUFFO0lBQ1hDLGFBQWEsRUFBRSwwQ0FBMEM7SUFDekRDLFlBQVksRUFBRTtFQUNoQixDQUFDO0VBQ0RDLGNBQWMsRUFBRTtBQUNsQixDQUFDLENBQUM7QUFFRnpCLHFCQUFNLENBQUMwQixJQUFJLEdBQUdQLElBQUk7QUFDbEJuQixxQkFBTSxDQUFDb0Isd0JBQXdCLEdBQUdBLHdCQUF3Qjs7QUFLMUQ7QUFDcUI7QUFDckIsSUFBTU8sTUFBTSxHQUFHNUIsbUJBQU8sQ0FBQywrQ0FBUSxDQUFDO0FBQ2hDNEIsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDZixhQUFhLEVBQUUsSUFBSTtFQUNuQixPQUFPLEVBQUUsS0FBSztFQUNkLGFBQWEsRUFBRSxLQUFLO0VBQ3BCLGFBQWEsRUFBRSxJQUFJO0VBQ25CLGVBQWUsRUFBRSxpQkFBaUI7RUFDbEMsbUJBQW1CLEVBQUUsS0FBSztFQUMxQixTQUFTLEVBQUUsSUFBSTtFQUNmLGNBQWMsRUFBRSxLQUFLO0VBQ3JCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsWUFBWSxFQUFFLE9BQU87RUFDckIsWUFBWSxFQUFFLFFBQVE7RUFDdEIsWUFBWSxFQUFFLFFBQVE7RUFDdEIsWUFBWSxFQUFFO0FBQ2hCLENBQUM7QUFDRDVCLHFCQUFNLENBQUMyQixNQUFNLEdBQUdBLE1BQU07QUFFdEI1QixtQkFBTyxDQUFDLDBEQUFTLENBQUM7QUFDbEJBLG1CQUFPLENBQUMseUZBQWtDLENBQUM7QUFFM0NELENBQUMsQ0FBQytCLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUVqQyxtQkFBTyxDQUFDLHdGQUFnQyxDQUFDLENBQUM7QUFHeEQ7QUFFakNDLHFCQUFNLENBQUNhLE9BQU8sR0FBR0Esb0RBQU87O0FBRXhCOztBQUUrQjtBQUMvQmIscUJBQU0sQ0FBQ2tDLEtBQUssR0FBR0QsbUNBQUs7QUFFcEJsQyxtQkFBTyxDQUFDLHlFQUEwQixDQUFDO0FBRW5DLElBQU1vQyxNQUFNLEdBQUdwQyxtQkFBTyxDQUFDLCtDQUFRLENBQUM7QUFFaENpQixNQUFNLENBQUNtQixNQUFNLEdBQUdBLE1BQU07QUFJdEIsSUFBTUMsS0FBSyxHQUFHckMsbUJBQU8sQ0FBQywwREFBTyxDQUFDO0FBQzlCQyxxQkFBTSxDQUFDb0MsS0FBSyxHQUFHQSxLQUFLO0FBRVU7QUFFRDtBQUNDO0FBQ0g7QUFDRTtBQUdRO0FBQ1A7QUFDRztBQUNHO0FBQ1Y7QUFDSTtBQUNFO0FBQ1A7QUFDSTtBQUdzQjtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBUXBEdEMsQ0FBQyxDQUFDSSxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFFNUJMLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2dDLE9BQU8sQ0FBQyxDQUFDOztFQUVyQjs7RUFFQWhDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBRTNDdkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDd0MsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUM3QixDQUFDLENBQUM7RUFFRnhDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3lDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDM0IsSUFBSTFDLENBQUMsQ0FBQzBDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUNwRDdDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxLQUFLLENBQUM7RUFFN0IsQ0FBQyxDQUFDO0VBRUY5QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZO0lBQ2hELElBQUlRLEVBQUUsR0FBRy9DLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dELElBQUksQ0FBQyxJQUFJLENBQUM7SUFFM0JoRCxDQUFDLENBQUMsZUFBZSxHQUFHK0MsRUFBRSxDQUFDLENBQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckN4QyxDQUFDLENBQUMsdUJBQXVCLEdBQUcrQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO0VBQzlDLENBQUMsQ0FBQztFQUVGOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDeUMsS0FBSyxDQUFDLFVBQVVDLENBQUMsRUFBRTtJQUMzQixJQUFJMUMsQ0FBQyxDQUFDMEMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUNqRDdDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0VBRUY1QixNQUFNLENBQUMrQixzQkFBc0IsR0FBRyxVQUFVQyxHQUFHLEVBQUU7SUFDN0NsRCxDQUFDLENBQUNtRCxJQUFJLENBQUM7TUFDTEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFdEMsMkRBQWdCLENBQUMsMEJBQTBCLENBQUM7TUFDakR1QyxJQUFJLEVBQUU7UUFDSkosR0FBRyxFQUFFQTtNQUNQLENBQUM7TUFDREssT0FBTyxFQUFFLFNBQUFBLFFBQVVDLE1BQU0sRUFBRTtRQUN6QixJQUFJQSxNQUFNLElBQUksT0FBTyxFQUNuQkMsS0FBSyxDQUFDRCxNQUFNLENBQUM7TUFDakI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBR0R0QyxNQUFNLENBQUN3QyxhQUFhLEdBQUcsVUFBVUMsS0FBSyxFQUF5QjtJQUFBLElBQXZCQyxjQUFjLEdBQUFwRSxTQUFBLENBQUFxRCxNQUFBLFFBQUFyRCxTQUFBLFFBQUFxRSxTQUFBLEdBQUFyRSxTQUFBLE1BQUcsSUFBSTtJQUUzRCxJQUFNc0MsT0FBTyxHQUFHNkIsS0FBSyxDQUFDRyxHQUFHLENBQUMsVUFBVUMsSUFBSSxFQUFFO01BQ3hDLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUNGLElBQUksQ0FBQ0csSUFBSSxFQUFFSCxJQUFJLENBQUNoQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztNQUN6RCxJQUFJYSxjQUFjLElBQUk1RCxDQUFDLENBQUNtRSxPQUFPLENBQUNKLElBQUksQ0FBQ2hCLEVBQUUsRUFBRWEsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdESSxNQUFNLENBQUNJLFFBQVEsR0FBRyxJQUFJO01BQ3hCO01BQ0EsT0FBT0osTUFBTTtJQUNmLENBQUMsQ0FBQztJQUVGLE9BQU9sQyxPQUFPO0VBQ2hCLENBQUM7RUFFRFosTUFBTSxDQUFDbUQsZ0JBQWdCLEdBQUcsVUFBVTFFLEtBQUssRUFBRTtJQUN6QyxJQUFJMkUsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQzVFLEtBQUssQ0FBQzJFLElBQUksQ0FBQztJQUUvQixJQUFJRSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRTNCLElBQUlDLEtBQUssR0FBR0YsQ0FBQyxDQUFDRyxjQUFjLENBQUMsT0FBTyxFQUFFO01BQ3BDQyxvQkFBb0IsRUFBRSxDQUFDO01BQ3ZCQyxXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJQyxHQUFHLEdBQUdSLElBQUksQ0FBQ1MsT0FBTyxDQUFDLENBQUMsQ0FBQ0osY0FBYyxDQUFDLE9BQU8sRUFBRTtNQUMvQ0Msb0JBQW9CLEVBQUUsQ0FBQztNQUN2QkMsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsT0FBT1AsSUFBSSxDQUFDVSxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR04sS0FBSyxHQUFHLEdBQUcsR0FBR0ksR0FBRztFQUNyRCxDQUFDO0VBRUQ1RCxNQUFNLENBQUMrRCxzQkFBc0IsR0FBRyxVQUFVQyxNQUFNLEVBQUU7SUFDaEQsSUFBSUMsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtNQUNuREMsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLHFCQUFxQixFQUFFLENBQUM7TUFDeEJDLHFCQUFxQixFQUFFO0lBQ3pCLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUNQLE1BQU0sQ0FBQztJQUVqQixPQUFPQyxlQUFlO0VBQ3hCLENBQUM7RUFHRCxJQUFNTyxNQUFNLEdBQUcxRixDQUFDLENBQUMsWUFBWSxDQUFDO0VBQzlCRSxxQkFBTSxDQUFDd0YsTUFBTSxHQUFHQSxNQUFNOztFQUV0Qjs7RUFHQTFGLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVUcsQ0FBQyxFQUFFO0lBQ3JELElBQUkvQyxLQUFLLEdBQUdLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJGLEdBQUcsQ0FBQyxDQUFDO0lBRXpCLElBQUloRyxLQUFLLEtBQUssU0FBUyxFQUFFO01BQ3ZCSyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2pENUYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM0RixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUVuRDVGLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDbEQ1RixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BRTdDNUYsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztNQUN0QzlDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOEMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxNQUNJLElBQUluRCxLQUFLLEtBQUssYUFBYSxFQUFFO01BQ2hDSyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ3BENUYsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM0RixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUVoRDVGLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDbEQ1RixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BRTdDNUYsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztNQUN0QzlDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOEMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxNQUNJLElBQUluRCxLQUFLLEtBQUssbUJBQW1CLEVBQUU7TUFDdENLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDaEQ1RixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BRW5ENUYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM0RixJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUNuRDVGLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFFOUM1RixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQzZGLElBQUksQ0FBQyxDQUFDO01BQ3RDN0YsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM2RixJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDLE1BQ0k7TUFDSDdGLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDaEQ1RixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BRW5ENUYsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM0RixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUNsRDVGLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFFN0M1RixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQzhDLElBQUksQ0FBQyxDQUFDO01BQ3RDOUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM4QyxJQUFJLENBQUMsQ0FBQztJQUMvQjtFQUNGLENBQUMsQ0FBQztFQUVGOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDMUQsSUFBSW9ELFVBQVUsR0FBRzlGLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzJGLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUlJLE1BQU0sR0FBRy9GLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDa0UsSUFBSSxDQUFDLENBQUM7SUFDckQsSUFBSThCLFdBQVcsR0FBR2hHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMkYsR0FBRyxDQUFDLENBQUM7SUFFOUMsSUFBSU0sWUFBWSxHQUFHakcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNrRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxZQUFZO01BQ2hGLE9BQU9uRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNrRSxJQUFJLENBQUMsQ0FBQyxLQUFLNEIsVUFBVTtJQUN0QyxDQUFDLENBQUM7SUFFRixJQUFJRyxZQUFZLENBQUNwRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzNCLE9BQU9oQixNQUFNLENBQUN1RSxPQUFPLENBQUMsZ0NBQWdDLENBQUM7SUFDekQsQ0FBQyxNQUFNO01BQ0wsSUFBSXJDLElBQUksR0FBRywrQ0FBK0MsR0FDeEQsK0RBQStELEdBQy9ELHdDQUF3QyxHQUFHK0IsVUFBVSxHQUFHLFNBQVMsR0FDakUsa0NBQWtDLEdBQUdDLE1BQU0sR0FBRyxTQUFTLEdBQ3ZELDhDQUE4QyxHQUFHQyxXQUFXLEdBQUcsV0FBVyxHQUMxRSxnSEFBZ0gsR0FDaEgsUUFBUSxHQUNSLE9BQU87TUFDVGhHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDcUcsT0FBTyxDQUFDdEMsSUFBSSxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYvRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZO0lBQ2hEckIsTUFBTSxDQUFDb0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQztFQUMvQyxDQUFDLENBQUM7RUFFRnRHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsVUFBVUcsQ0FBQyxFQUFFO0lBQ3ZELElBQUk2RCxPQUFPLEdBQUd2RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNzRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNoQyxJQUFJLENBQUMsQ0FBQztJQUUzRCxJQUFJc0MsRUFBRSxHQUFHQyxVQUFVLENBQUNGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqRSxJQUFJMUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BRTNCLElBQUllLEdBQUcsR0FBR0gsRUFBRSxHQUFJQSxFQUFFLEdBQUcsRUFBRSxHQUFJLEdBQUc7TUFDOUJ4RyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNzRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNVLElBQUksQ0FBQ0QsR0FBRyxDQUFDaEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUMsTUFDSTtNQUNIM0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDc0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDVSxJQUFJLENBQUNMLE9BQU8sQ0FBQztJQUV0RDtFQUNGLENBQUMsQ0FBQztFQUVGdkcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxzQ0FBc0MsRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDNUUsSUFBSW1FLE1BQU0sR0FBRzdHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dELElBQUksQ0FBQyxJQUFJLENBQUM7SUFFL0IwQyxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ2I3RixDQUFDLENBQUNtRCxJQUFJLENBQUM7TUFDTEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFdEMsMkRBQWdCLENBQUMseUNBQXlDLEVBQUU7UUFBRStGLEdBQUcsRUFBRUQ7TUFBTyxDQUFDLENBQUM7TUFDakZ0RCxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsTUFBTSxFQUFFO1FBRXpCLElBQUl4RCxDQUFDLENBQUMrQixFQUFFLENBQUNnRixTQUFTLENBQUNDLFdBQVcsQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFFO1VBQ3hFaEgsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQztRQUMzRTtRQUVBbEgsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUM7UUFFbkV4RCxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQytHLFNBQVMsQ0FBQztVQUNwRE0sVUFBVSxFQUFFLENBQ1Y7WUFDRUMsT0FBTyxFQUFFLENBQUM7WUFDVkMsU0FBUyxFQUFFLEtBQUs7WUFDaEJDLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUJDLE1BQU0sRUFBRSxTQUFBQSxPQUFVbkUsSUFBSSxFQUFFRixJQUFJLEVBQUVzRSxJQUFJLEVBQUVDLElBQUksRUFBRTtjQUN4QyxPQUFPLGlEQUFpRDtZQUMxRDtVQUNGLENBQUMsQ0FDRjtVQUNEQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztVQUNuQkMsUUFBUSxFQUFFO1lBQ1J4RSxHQUFHLEVBQUVuQyxNQUFNLENBQUM0RztVQUNkLENBQUM7VUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDbkI7VUFDREMsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEdBQUcsRUFBRTNFLElBQUksRUFBRTRFLFNBQVMsRUFBRTtZQUMxQztZQUNBbEksQ0FBQyxDQUFDaUksR0FBRyxDQUFDLENBQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNpQyxRQUFRLENBQUMsWUFBWSxDQUFDO1VBQ2hEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0Z6QyxNQUFNLENBQUM1QyxJQUFJLENBQUMsQ0FBQztNQUNmLENBQUM7TUFDRHNGLEtBQUssRUFBRSxTQUFBQSxNQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1FBQy9DN0MsTUFBTSxDQUFDNUMsSUFBSSxDQUFDLENBQUM7UUFDYixPQUFPakIsTUFBTSxDQUFDdUcsS0FBSyxDQUFDQyxLQUFLLENBQUNHLFlBQVksQ0FBQztNQUN6QztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQzs7RUFHRjtFQUNBOztFQUVBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTs7RUFHQTs7RUFHQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBOztFQUVBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxTQUFTQyxZQUFZQSxDQUFDQyxHQUFHLEVBQUU7SUFDekIsT0FBT0EsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUN4QztFQUVBLFNBQVNDLGNBQWNBLENBQUEsRUFBRztJQUN4QixJQUFNQyxHQUFHLEdBQUcsSUFBSXZFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQ0V1RSxHQUFHLENBQUM5RCxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FDdkJ5RCxZQUFZLENBQUNLLEdBQUcsQ0FBQ3JFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUN0Q2dFLFlBQVksQ0FBQ0ssR0FBRyxDQUFDL0QsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUUvQjtFQUVBLFNBQVNnRSx1QkFBdUJBLENBQUEsRUFBRztJQUNqQyxJQUFNRCxHQUFHLEdBQUcsSUFBSXZFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQ0V1RSxHQUFHLENBQUM5RCxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FDdkJ5RCxZQUFZLENBQUNLLEdBQUcsQ0FBQ3JFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUN0Q2dFLFlBQVksQ0FBQ0ssR0FBRyxDQUFDL0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FDakMwRCxZQUFZLENBQUNLLEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FDbENQLFlBQVksQ0FBQ0ssR0FBRyxDQUFDRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBRWxDO0VBQ0EsU0FBU0MsaUJBQWlCQSxDQUFBLEVBQUc7SUFDM0JsSixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMyRixHQUFHLENBQUNrRCxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRXhDN0ksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMyRixHQUFHLENBQUNvRCx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7RUFDdkQ7RUFFQUcsaUJBQWlCLENBQUMsQ0FBQztFQUNuQkMsV0FBVyxDQUFDRCxpQkFBaUIsRUFBRSxLQUFLLENBQUM7RUFHckNsSixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUNyRCxJQUFJMEcsU0FBUyxHQUFHcEosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUV2QzVGLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFNBQVMsRUFBRXdELFNBQVMsQ0FBQztJQUMvQ3BKLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFNBQVMsRUFBRXdELFNBQVMsQ0FBQztJQUMzRHBKLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDNEYsSUFBSSxDQUFDLFNBQVMsRUFBRXdELFNBQVMsQ0FBQztFQUN4RCxDQUFDLENBQUM7O0VBR0o7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUVwSixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUN4QzJHLGFBQWEsQ0FBQ2xHLElBQUksQ0FBQ21HLE1BQU0sQ0FBQyxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUNGdEosQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUMzQzJHLGFBQWEsQ0FBQ2xHLElBQUksQ0FBQ21HLE1BQU0sQ0FBQyxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUNGdEosQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUMzQzJHLGFBQWEsQ0FBQ2xHLElBQUksQ0FBQ21HLE1BQU0sQ0FBQyxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUNGdEosQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDMUMyRyxhQUFhLENBQUNsRyxJQUFJLENBQUNtRyxNQUFNLENBQUMsQ0FBQztFQUM3QixDQUFDLENBQUM7RUFDRnRKLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDN0MyRyxhQUFhLENBQUNsRyxJQUFJLENBQUNtRyxNQUFNLENBQUMsQ0FBQztFQUM3QixDQUFDLENBQUM7RUFDRnRKLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDbEQyRyxhQUFhLENBQUNsRyxJQUFJLENBQUNtRyxNQUFNLENBQUMsQ0FBQztFQUM3QixDQUFDLENBQUM7RUFDRnRKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVUcsQ0FBQyxFQUFFO0lBQzNDMkcsYUFBYSxDQUFDbEcsSUFBSSxDQUFDbUcsTUFBTSxDQUFDLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0VBR0Z0SixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVZ0gsS0FBSyxFQUFFO0lBQ2xELElBQUl2SixDQUFDLENBQUN1SixLQUFLLENBQUM1RyxNQUFNLENBQUMsQ0FBQzZHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUNuQztJQUNGO0lBRUEsSUFBTUMsVUFBVSxHQUFHekosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7SUFDN0QsSUFBTWdELFVBQVUsdUJBQUFDLE1BQUEsQ0FBdUJGLFVBQVUsQ0FBRTtJQUNuRCxJQUFNRyxtQkFBbUIsZ0NBQUFELE1BQUEsQ0FBZ0NGLFVBQVUsQ0FBRTtJQUVyRXpKLENBQUMsQ0FBQzBKLFVBQVUsQ0FBQyxDQUFDRyxXQUFXLENBQUMsQ0FBQztJQUMzQjdKLENBQUMsQ0FBQzRKLG1CQUFtQixDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGN0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFVZ0gsS0FBSyxFQUFFO0lBQzFELElBQUl2SixDQUFDLENBQUN1SixLQUFLLENBQUM1RyxNQUFNLENBQUMsQ0FBQzZHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtNQUNuQztJQUNGO0lBQ0FELEtBQUssQ0FBQ08sZUFBZSxDQUFDLENBQUM7SUFFdkIsSUFBTUMsYUFBYSxHQUFHL0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDbkUsSUFBTXNELGdCQUFnQiwwQkFBQUwsTUFBQSxDQUEwQkksYUFBYSxDQUFFO0lBQy9ELElBQU1ILG1CQUFtQix3QkFBQUQsTUFBQSxDQUF3QkksYUFBYSxDQUFFO0lBRWhFLElBQUkvSixDQUFDLENBQUNnSyxnQkFBZ0IsQ0FBQyxDQUFDbkgsTUFBTSxFQUFFO01BQzlCN0MsQ0FBQyxDQUFDZ0ssZ0JBQWdCLENBQUMsQ0FBQ0gsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxNQUFNLElBQUk3SixDQUFDLENBQUM0SixtQkFBbUIsQ0FBQyxDQUFDL0csTUFBTSxFQUFFO01BQ3hDN0MsQ0FBQyxDQUFDNEosbUJBQW1CLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDdEM7RUFDRixDQUFDLENBQUM7RUFFRjdKLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsWUFBWTtJQUMzRCxJQUFNa0gsVUFBVSxHQUFHekosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkYsR0FBRyxDQUFDLENBQUM7SUFFaEMzRixDQUFDLHNCQUFBMkosTUFBQSxDQUFzQkYsVUFBVSx1QkFBb0IsQ0FBQyxDQUFDN0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRSxPQUFPLENBQUM7RUFDdEYsQ0FBQyxDQUFDO0VBRUZqSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFlBQVk7SUFDdEQsSUFBTXdILGFBQWEsR0FBRy9KLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJGLEdBQUcsQ0FBQyxDQUFDO0lBRW5DM0YsQ0FBQyxtQkFBQTJKLE1BQUEsQ0FBbUJJLGFBQWEsdUJBQW9CLENBQUMsQ0FBQ25FLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDcUUsT0FBTyxDQUFDO0lBR3BGLElBQU1DLGdCQUFnQixHQUFHbEssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUN1SCxNQUFNLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNsRSxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFFMUhsRyxDQUFDLGdCQUFBMkosTUFBQSxDQUFnQkksYUFBYSx1QkFBb0IsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRSxPQUFPLENBQUM7SUFDakZqSyxDQUFDLHdCQUFBMkosTUFBQSxDQUF3QkksYUFBYSx1QkFBb0IsQ0FBQyxDQUFDbkUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRSxPQUFPLENBQUM7SUFHekZDLGdCQUFnQixDQUFDdEUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRSxPQUFPLENBQUM7RUFFaEQsQ0FBQyxDQUFDO0VBRUZqSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZO0lBRS9DLElBQU04SCxtQkFBbUIsR0FBR3JLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDdUgsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFFM0htRSxtQkFBbUIsQ0FBQ3pFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0VBRTNDLENBQUMsQ0FBQztFQUdGNUYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWTtJQUNqRCxJQUFJK0gsSUFBSSxHQUFHdEssQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxDQUFDdUQsSUFBSSxDQUFDO01BQUUsUUFBUSxFQUFFO0lBQVUsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ3pGdkssQ0FBQyxDQUFDLHdCQUF3QixFQUFFc0ssSUFBSSxDQUFDLENBQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQztFQUNqRSxDQUFDLENBQUM7RUFFRmpLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsWUFBWTtJQUMxRCxJQUFJK0gsSUFBSSxHQUFHdEssQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxDQUFDdUQsSUFBSSxDQUFDO01BQUUsUUFBUSxFQUFFO0lBQVUsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ25HdkssQ0FBQyxDQUFDLHdCQUF3QixFQUFFc0ssSUFBSSxDQUFDLENBQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQztFQUNqRSxDQUFDLENBQUM7RUFFRmpLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWTtJQUN0RCxJQUFJK0gsSUFBSSxHQUFHdEssQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxDQUFDdUQsSUFBSSxDQUFDO01BQUUsUUFBUSxFQUFFO0lBQVUsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQzNGdkssQ0FBQyxDQUFDLHdCQUF3QixFQUFFc0ssSUFBSSxDQUFDLENBQUMxRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3FFLE9BQU8sQ0FBQztFQUNqRSxDQUFDLENBQUM7RUFFRmpLLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZO0lBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMwSCxPQUFPLEVBQUU7TUFDakIsSUFBSU8sRUFBRSxHQUFHeEssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDYyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2xDLElBQUkwSixFQUFFLElBQUlBLEVBQUUsQ0FBQ1AsT0FBTyxJQUFLLGVBQWUsSUFBSU8sRUFBRyxFQUFFO1FBQy9DQSxFQUFFLENBQUNDLGFBQWEsR0FBRyxJQUFJO01BQ3pCO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFFRnpLLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZO0lBQ25HLElBQUksQ0FBQyxJQUFJLENBQUMwSCxPQUFPLEVBQUU7TUFDakIsSUFBSU8sRUFBRSxHQUFHeEssQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNjLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDM0MsSUFBSTBKLEVBQUUsSUFBSUEsRUFBRSxDQUFDUCxPQUFPLElBQUssZUFBZSxJQUFJTyxFQUFHLEVBQUU7UUFDL0NBLEVBQUUsQ0FBQ0MsYUFBYSxHQUFHLElBQUk7TUFDekI7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGekssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDekUsSUFBSWdJLFlBQVksR0FBRzFLLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUM7SUFFaEUsSUFBSTRELFdBQVcsR0FBRyxFQUFFO0lBQ3BCRCxZQUFZLENBQUNKLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQyxVQUFVM0MsR0FBRyxFQUFFNEMsS0FBSyxFQUFFO01BQ3JELElBQUlDLFFBQVEsR0FBRzlLLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDO01BQ25ELElBQUk0RSxRQUFRLENBQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFFM0IsSUFBSXpHLEVBQUUsR0FBR2dJLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDbEksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQySCxXQUFXLENBQUNLLElBQUksQ0FBQ2pJLEVBQUUsQ0FBQztNQUN0QjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUk0SCxXQUFXLENBQUM5SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BRTFCNkMsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUViLElBQUl4QyxHQUFHLEdBQUdyRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNnRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZ0JBQWdCLEdBQzdDakMsMkRBQWdCLENBQUMsMENBQTBDLENBQUMsR0FDNURBLDJEQUFnQixDQUFDLDhDQUE4QyxDQUFDO01BRXBFZixDQUFDLENBQUNtRCxJQUFJLENBQUM7UUFDTEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFFQSxHQUFHO1FBQ1JDLElBQUksRUFBRTtVQUNKcUgsV0FBVyxFQUFFTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsV0FBVztRQUN6QyxDQUFDO1FBQ0RwSCxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsTUFBTSxFQUFFO1VBRXpCeEQsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM0RixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztVQUU5QzVGLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQyxpQkFBaUIsR0FBR3BELE1BQU0sQ0FBQzJILE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztVQUN0RnBMLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLHNCQUFzQixHQUFHcEQsTUFBTSxDQUFDNkgsWUFBWSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1VBQ3JHcEwsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDUCxJQUFJLENBQUMsMEJBQTBCLEdBQUdwRCxNQUFNLENBQUM4SCxlQUFlLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7VUFFL0dwTCxDQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDO1VBRXBELElBQUlvRSxTQUFTLEdBQUdySyxNQUFNLENBQUMrRCxzQkFBc0IsQ0FBQ3pCLE1BQU0sQ0FBQzZILFlBQVksQ0FBQztVQUVsRXpLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkMsTUFBTSxDQUFDZ0ksRUFBRSxHQUFHLEtBQUssR0FBR0QsU0FBUyxDQUFDO1VBRTFDdkwsQ0FBQyxDQUFDLFVBQVUsR0FBR3dELE1BQU0sQ0FBQ2dJLEVBQUUsQ0FBQyxDQUFDckUsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDMkUsU0FBUyxDQUFDO1VBRWpELElBQUl2TCxDQUFDLENBQUMrQixFQUFFLENBQUNnRixTQUFTLENBQUNDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQzlEaEgsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQztVQUNqRTtVQUVBbEgsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUNvRCxJQUFJLENBQUM7VUFFbkU1RyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQytHLFNBQVMsQ0FBQztZQUMxQ00sVUFBVSxFQUFFLENBQ1Y7Y0FDRUMsT0FBTyxFQUFFLENBQUM7Y0FDVkMsU0FBUyxFQUFFLEtBQUs7Y0FDaEJDLFNBQVMsRUFBRSxpQkFBaUI7Y0FDNUJDLE1BQU0sRUFBRSxTQUFBQSxPQUFVbkUsSUFBSSxFQUFFRixJQUFJLEVBQUVzRSxJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDeEMsT0FBTyxpREFBaUQ7Y0FDMUQ7WUFDRixDQUFDLENBQ0Y7WUFDREMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkJDLFFBQVEsRUFBRTtjQUNSeEUsR0FBRyxFQUFFbkMsTUFBTSxDQUFDNEc7WUFDZCxDQUFDO1lBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ25CO1lBQ0RDLFVBQVUsRUFBRSxTQUFBQSxXQUFVQyxHQUFHLEVBQUUzRSxJQUFJLEVBQUU0RSxTQUFTLEVBQUU7Y0FDMUM7Y0FDQWxJLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNoRDtVQUNGLENBQUMsQ0FBQztVQUVGekMsTUFBTSxDQUFDNUMsSUFBSSxDQUFDLENBQUM7VUFFYixPQUFPakIsTUFBTSxDQUFDMEIsT0FBTyxDQUFDQyxNQUFNLENBQUNpSSxPQUFPLENBQUM7UUFDdkMsQ0FBQztRQUNEckQsS0FBSyxFQUFFLFNBQUFBLE1BQVVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUU7VUFDL0M3QyxNQUFNLENBQUM1QyxJQUFJLENBQUMsQ0FBQztVQUNiLE9BQU9qQixNQUFNLENBQUN1RyxLQUFLLENBQUNDLEtBQUssQ0FBQ0csWUFBWSxDQUFDO1FBQ3pDO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFFRixDQUFDLENBQUM7RUFFRnhJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsMERBQTBELEVBQUUsVUFBVUcsQ0FBQyxFQUFFO0lBQzdGLElBQUlnSixzQkFBc0IsR0FBRzFMLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUM7SUFFcEYsSUFBSTRELFdBQVcsR0FBRyxFQUFFO0lBQ3BCZSxzQkFBc0IsQ0FBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQyxVQUFVM0MsR0FBRyxFQUFFNEMsS0FBSyxFQUFFO01BQy9ELElBQUlDLFFBQVEsR0FBRzlLLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDO01BQ25ELElBQUk0RSxRQUFRLENBQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFFM0IsSUFBSXpHLEVBQUUsR0FBR2dJLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDbEksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQySCxXQUFXLENBQUNLLElBQUksQ0FBQ2pJLEVBQUUsQ0FBQztNQUN0QjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUk0SCxXQUFXLENBQUM5SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BRTFCNkMsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUViLElBQUl4QyxHQUFHLEdBQUdyRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNnRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssMEJBQTBCLEdBQ3ZEakMsMkRBQWdCLENBQUMsb0RBQW9ELENBQUMsR0FDdEVBLDJEQUFnQixDQUFDLHdEQUF3RCxDQUFDO01BRTlFZixDQUFDLENBQUNtRCxJQUFJLENBQUM7UUFDTEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFFQSxHQUFHO1FBQ1JDLElBQUksRUFBRTtVQUNKcUgsV0FBVyxFQUFFTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsV0FBVztRQUN6QyxDQUFDO1FBQ0RwSCxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsTUFBTSxFQUFFO1VBRXpCeEQsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM0RixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztVQUV2RDVGLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQyxpQkFBaUIsR0FBR3BELE1BQU0sQ0FBQzJILE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztVQUN0RnBMLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLHNCQUFzQixHQUFHcEQsTUFBTSxDQUFDNkgsWUFBWSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1VBQ3JHcEwsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDUCxJQUFJLENBQUMsMEJBQTBCLEdBQUdwRCxNQUFNLENBQUM4SCxlQUFlLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7VUFFL0csSUFBSUcsU0FBUyxHQUFHckssTUFBTSxDQUFDK0Qsc0JBQXNCLENBQUN6QixNQUFNLENBQUM2SCxZQUFZLENBQUM7VUFFbEV6SyxPQUFPLENBQUNDLEdBQUcsQ0FBQzJDLE1BQU0sQ0FBQ2dJLEVBQUUsR0FBRyxLQUFLLEdBQUdELFNBQVMsQ0FBQztVQUUxQ3ZMLENBQUMsQ0FBQyxVQUFVLEdBQUd3RCxNQUFNLENBQUNnSSxFQUFFLENBQUMsQ0FBQ3JFLEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQzJFLFNBQVMsQ0FBQztVQUVqRCxJQUFJdkwsQ0FBQyxDQUFDK0IsRUFBRSxDQUFDZ0YsU0FBUyxDQUFDQyxXQUFXLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUM5RGhILENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7VUFDakU7VUFFQSxJQUFJbEgsQ0FBQyxDQUFDK0IsRUFBRSxDQUFDZ0YsU0FBUyxDQUFDQyxXQUFXLENBQUMsd0NBQXdDLENBQUMsRUFBRTtZQUN4RWhILENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7VUFDM0U7VUFFQWxILENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDNUQsTUFBTSxDQUFDb0QsSUFBSSxDQUFDO1VBQ25FNUcsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUNtSSxTQUFTLENBQUM7VUFFbEYzTCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQytHLFNBQVMsQ0FBQztZQUMxQ00sVUFBVSxFQUFFLENBQ1Y7Y0FDRUMsT0FBTyxFQUFFLENBQUM7Y0FDVkMsU0FBUyxFQUFFLEtBQUs7Y0FDaEJDLFNBQVMsRUFBRSxpQkFBaUI7Y0FDNUJDLE1BQU0sRUFBRSxTQUFBQSxPQUFVbkUsSUFBSSxFQUFFRixJQUFJLEVBQUVzRSxJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDeEMsT0FBTyxpREFBaUQ7Y0FDMUQ7WUFDRixDQUFDLENBQ0Y7WUFDREMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkJDLFFBQVEsRUFBRTtjQUNSeEUsR0FBRyxFQUFFbkMsTUFBTSxDQUFDNEc7WUFDZCxDQUFDO1lBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ25CO1lBQ0RDLFVBQVUsRUFBRSxTQUFBQSxXQUFVQyxHQUFHLEVBQUUzRSxJQUFJLEVBQUU0RSxTQUFTLEVBQUU7Y0FDMUM7Y0FDQWxJLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNoRDtVQUNGLENBQUMsQ0FBQztVQUVGbkksQ0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUMrRyxTQUFTLENBQUM7WUFDcERNLFVBQVUsRUFBRSxDQUNWO2NBQ0VDLE9BQU8sRUFBRSxDQUFDO2NBQ1ZDLFNBQVMsRUFBRSxLQUFLO2NBQ2hCQyxTQUFTLEVBQUUsaUJBQWlCO2NBQzVCQyxNQUFNLEVBQUUsU0FBQUEsT0FBVW5FLElBQUksRUFBRUYsSUFBSSxFQUFFc0UsSUFBSSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3hDLE9BQU8saURBQWlEO2NBQzFEO1lBQ0YsQ0FBQyxDQUNGO1lBQ0RDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25CQyxRQUFRLEVBQUU7Y0FDUnhFLEdBQUcsRUFBRW5DLE1BQU0sQ0FBQzRHO1lBQ2QsQ0FBQztZQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNuQjtZQUNEQyxVQUFVLEVBQUUsU0FBQUEsV0FBVUMsR0FBRyxFQUFFM0UsSUFBSSxFQUFFNEUsU0FBUyxFQUFFO2NBQzFDO2NBQ0FsSSxDQUFDLENBQUNpSSxHQUFHLENBQUMsQ0FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2lDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDaEQ7VUFDRixDQUFDLENBQUM7VUFFRnpDLE1BQU0sQ0FBQzVDLElBQUksQ0FBQyxDQUFDO1VBRWIsT0FBT2pCLE1BQU0sQ0FBQzBCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDaUksT0FBTyxDQUFDO1FBQ3ZDLENBQUM7UUFDRHJELEtBQUssRUFBRSxTQUFBQSxNQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFO1VBQy9DN0MsTUFBTSxDQUFDNUMsSUFBSSxDQUFDLENBQUM7VUFDYixPQUFPakIsTUFBTSxDQUFDdUcsS0FBSyxDQUFDQyxLQUFLLENBQUNHLFlBQVksQ0FBQztRQUN6QztNQUNGLENBQUMsQ0FBQztJQUNKO0VBRUYsQ0FBQyxDQUFDO0VBRUZ4SSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUN1QyxFQUFFLENBQUMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUNuRSxJQUFJZ0ksWUFBWSxHQUFHMUssQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMrRyxTQUFTLENBQUMsQ0FBQztJQUVoRSxJQUFJNEQsV0FBVyxHQUFHLEVBQUU7SUFDcEJELFlBQVksQ0FBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFVBQVUzQyxHQUFHLEVBQUU0QyxLQUFLLEVBQUU7TUFDckQsSUFBSUMsUUFBUSxHQUFHOUssQ0FBQyxDQUFDaUksR0FBRyxDQUFDLENBQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUM7TUFDbkQsSUFBSTRFLFFBQVEsQ0FBQ3RCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUUzQixJQUFJekcsRUFBRSxHQUFHZ0ksUUFBUSxDQUFDRCxRQUFRLENBQUNsSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRDJILFdBQVcsQ0FBQ0ssSUFBSSxDQUFDakksRUFBRSxDQUFDO01BQ3RCO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSTRILFdBQVcsQ0FBQzlILE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUI2QyxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO01BRWIsSUFBSXhDLEdBQUcsR0FBR3JELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLEdBQzFDakMsMkRBQWdCLENBQUMsdUNBQXVDLENBQUMsR0FDekRBLDJEQUFnQixDQUFDLDJDQUEyQyxDQUFDO01BRWpFZixDQUFDLENBQUNtRCxJQUFJLENBQUM7UUFDTEMsSUFBSSxFQUFFLE1BQU07UUFDWkMsR0FBRyxFQUFFQSxHQUFHO1FBQ1JDLElBQUksRUFBRTtVQUNKcUgsV0FBVyxFQUFFTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsV0FBVztRQUN6QyxDQUFDO1FBQ0RwSCxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsTUFBTSxFQUFFO1VBRXpCeEQsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM0RixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztVQUU5QzVGLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQyxpQkFBaUIsR0FBR3BELE1BQU0sQ0FBQzJILE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztVQUN0RnBMLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLHNCQUFzQixHQUFHcEQsTUFBTSxDQUFDNkgsWUFBWSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1VBQ3JHcEwsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDUCxJQUFJLENBQUMsMEJBQTBCLEdBQUdwRCxNQUFNLENBQUM4SCxlQUFlLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7VUFFL0csSUFBSUcsU0FBUyxHQUFHckssTUFBTSxDQUFDK0Qsc0JBQXNCLENBQUN6QixNQUFNLENBQUM2SCxZQUFZLENBQUM7VUFFbEV6SyxPQUFPLENBQUNDLEdBQUcsQ0FBQzJDLE1BQU0sQ0FBQ2dJLEVBQUUsR0FBRyxLQUFLLEdBQUdELFNBQVMsQ0FBQztVQUUxQ3ZMLENBQUMsQ0FBQyxVQUFVLEdBQUd3RCxNQUFNLENBQUNnSSxFQUFFLENBQUMsQ0FBQ3JFLEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQzJFLFNBQVMsQ0FBQztVQUVqRHZMLENBQUMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUM7VUFFcEQsSUFBSW5ILENBQUMsQ0FBQytCLEVBQUUsQ0FBQ2dGLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDOURoSCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQytHLFNBQVMsQ0FBQyxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1VBQ2pFO1VBRUFsSCxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQzVELE1BQU0sQ0FBQ29ELElBQUksQ0FBQztVQUVuRTVHLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0csU0FBUyxDQUFDO1lBQzFDTSxVQUFVLEVBQUUsQ0FDVjtjQUNFQyxPQUFPLEVBQUUsQ0FBQztjQUNWQyxTQUFTLEVBQUUsS0FBSztjQUNoQkMsU0FBUyxFQUFFLGlCQUFpQjtjQUM1QkMsTUFBTSxFQUFFLFNBQUFBLE9BQVVuRSxJQUFJLEVBQUVGLElBQUksRUFBRXNFLElBQUksRUFBRUMsSUFBSSxFQUFFO2dCQUN4QyxPQUFPLGlEQUFpRDtjQUMxRDtZQUNGLENBQUMsQ0FDRjtZQUNEQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuQkMsUUFBUSxFQUFFO2NBQ1J4RSxHQUFHLEVBQUVuQyxNQUFNLENBQUM0RztZQUNkLENBQUM7WUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDbkI7WUFDREMsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEdBQUcsRUFBRTNFLElBQUksRUFBRTRFLFNBQVMsRUFBRTtjQUMxQztjQUNBbEksQ0FBQyxDQUFDaUksR0FBRyxDQUFDLENBQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNpQyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2hEO1VBQ0YsQ0FBQyxDQUFDO1VBRUZ6QyxNQUFNLENBQUM1QyxJQUFJLENBQUMsQ0FBQztVQUViLE9BQU9qQixNQUFNLENBQUMwQixPQUFPLENBQUNDLE1BQU0sQ0FBQ2lJLE9BQU8sQ0FBQztRQUN2QyxDQUFDO1FBQ0RyRCxLQUFLLEVBQUUsU0FBQUEsTUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUMvQzdDLE1BQU0sQ0FBQzVDLElBQUksQ0FBQyxDQUFDO1VBQ2IsT0FBT2pCLE1BQU0sQ0FBQ3VHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRyxZQUFZLENBQUM7UUFDekM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUVGLENBQUMsQ0FBQztFQUVGeEksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxZQUFZO0lBQ2pFdkMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM0TCxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQzdDLENBQUMsQ0FBQztFQUVGLElBQUlDLFdBQVcsR0FBRyxJQUFJO0VBRXRCN0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDcEQsSUFBSWdJLFlBQVksR0FBRzFLLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUM7SUFFaEUsSUFBSTRELFdBQVcsR0FBRyxFQUFFO0lBQ3BCRCxZQUFZLENBQUNKLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBQyxVQUFVM0MsR0FBRyxFQUFFNEMsS0FBSyxFQUFFO01BQ3JELElBQUlDLFFBQVEsR0FBRzlLLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDO01BQ25ELElBQUk0RSxRQUFRLENBQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFFM0IsSUFBSXpHLEVBQUUsR0FBR2dJLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDbEksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQySCxXQUFXLENBQUNLLElBQUksQ0FBQ2pJLEVBQUUsQ0FBQztNQUN0QjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUk0SCxXQUFXLENBQUM5SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzFCNkMsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUViN0YsQ0FBQyxDQUFDbUQsSUFBSSxDQUFDO1FBQ0xDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEdBQUcsRUFBRXRDLDJEQUFnQixDQUFDLHNDQUFzQyxDQUFDO1FBQzdEdUMsSUFBSSxFQUFFO1VBQ0pxSCxXQUFXLEVBQUVNLElBQUksQ0FBQ0MsU0FBUyxDQUFDUCxXQUFXO1FBQ3pDLENBQUM7UUFDRHBILE9BQU8sRUFBRSxTQUFBQSxRQUFVQyxNQUFNLEVBQUU7VUFFekJ4RCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQzRGLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1VBRTlDNUYsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLGlCQUFpQixHQUFHcEQsTUFBTSxDQUFDMkgsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1VBQ3RGcEwsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDUCxJQUFJLENBQUMsc0JBQXNCLEdBQUdwRCxNQUFNLENBQUM2SCxZQUFZLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7VUFDckdwTCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ21ILEtBQUssQ0FBQyxDQUFDLENBQUNQLElBQUksQ0FBQywwQkFBMEIsR0FBR3BELE1BQU0sQ0FBQzhILGVBQWUsQ0FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztVQUcvR3BMLENBQUMsQ0FBQzRLLElBQUksQ0FBQ3BILE1BQU0sQ0FBQ3NJLHNCQUFzQixFQUFFLFVBQVVwTSxHQUFHLEVBQUVDLEtBQUssRUFBRTtZQUMxRCxJQUFJNEwsU0FBUyxHQUFHckssTUFBTSxDQUFDK0Qsc0JBQXNCLENBQUN0RixLQUFLLENBQUM7WUFFcERLLENBQUMsQ0FBQyxVQUFVLEdBQUdOLEdBQUcsQ0FBQyxDQUFDeUgsS0FBSyxDQUFDLENBQUMsQ0FBQ1AsSUFBSSxDQUFDMkUsU0FBUyxDQUFDO1VBQzdDLENBQUMsQ0FBQztVQUlGdkwsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQztVQUVwRCxJQUFJbkgsQ0FBQyxDQUFDK0IsRUFBRSxDQUFDZ0YsU0FBUyxDQUFDQyxXQUFXLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUM5RGhILENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDK0csU0FBUyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7VUFDakU7VUFFQWxILENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDbUgsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDNUQsTUFBTSxDQUFDb0QsSUFBSSxDQUFDO1VBRW5FNUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNtSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUM1RCxNQUFNLENBQUN1SSxLQUFLLENBQUM7VUFFbEQvTCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQytHLFNBQVMsQ0FBQztZQUMxQ00sVUFBVSxFQUFFLENBQ1Y7Y0FDRUMsT0FBTyxFQUFFLENBQUM7Y0FDVkMsU0FBUyxFQUFFLEtBQUs7Y0FDaEJDLFNBQVMsRUFBRSxpQkFBaUI7Y0FDNUJDLE1BQU0sRUFBRSxTQUFBQSxPQUFVbkUsSUFBSSxFQUFFRixJQUFJLEVBQUVzRSxJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDeEMsT0FBTyxpREFBaUQ7Y0FDMUQ7WUFDRixDQUFDLENBQ0Y7WUFDREMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkJDLFFBQVEsRUFBRTtjQUNSeEUsR0FBRyxFQUFFbkMsTUFBTSxDQUFDNEc7WUFDZCxDQUFDO1lBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ25CO1lBQ0RDLFVBQVUsRUFBRSxTQUFBQSxXQUFVQyxHQUFHLEVBQUUzRSxJQUFJLEVBQUU0RSxTQUFTLEVBQUU7Y0FDMUM7Y0FDQWxJLENBQUMsQ0FBQ2lJLEdBQUcsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNoRDtVQUNGLENBQUMsQ0FBQzs7VUFFRjs7VUFFQW5JLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzhELEdBQUcsQ0FBQyxZQUFZO1lBQ2pDK0gsV0FBVyxJQUFJcEYsVUFBVSxDQUFDekcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1VBQ3ZELENBQUMsQ0FBQztVQUVGLElBQUl5RCxVQUFVLENBQUNvRixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEM3TCxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQ2tHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztVQUMxRztVQUVBRixNQUFNLENBQUM1QyxJQUFJLENBQUMsQ0FBQztVQUViLE9BQU9qQixNQUFNLENBQUMwQixPQUFPLENBQUNDLE1BQU0sQ0FBQ2lJLE9BQU8sQ0FBQztRQUN2QyxDQUFDO1FBQ0RyRCxLQUFLLEVBQUUsU0FBQUEsTUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUMvQzdDLE1BQU0sQ0FBQzVDLElBQUksQ0FBQyxDQUFDO1VBQ2IsT0FBT2pCLE1BQU0sQ0FBQ3VHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRyxZQUFZLENBQUM7UUFDekM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUVGLENBQUMsQ0FBQztFQUVGeEksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDdUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVRyxDQUFDLEVBQUU7SUFDdkQsSUFBSXNKLGdCQUFnQixHQUFHaE0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7SUFFM0M7SUFDQWhELENBQUMsQ0FBQyxRQUFRLEdBQUdnTSxnQkFBZ0IsQ0FBQyxDQUFDbkcsSUFBSSxDQUFDLENBQUMsQ0FBQ29HLFFBQVEsQ0FBQyxDQUFDLENBQUNuSixJQUFJLENBQUMsQ0FBQzs7SUFFdkQ7SUFDQTlDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ21LLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQ2hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzhELFFBQVEsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFFeEV4SixDQUFDLENBQUN5SixjQUFjLENBQUMsQ0FBQztFQUNwQixDQUFDLENBQUM7RUFFRm5NLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3VDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVVHLENBQUMsRUFBRTtJQUFBLElBQUEwSixLQUFBO0lBRWpEOUssd0JBQXdCLENBQUMrSyxJQUFJLENBQUM7TUFDNUJDLFNBQVMsRUFBRTtRQUNUQyxLQUFLLEVBQUU7TUFDVCxDQUFDO01BQ0RDLFFBQVEsRUFBRSxLQUFLO01BQ2ZDLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJ2SSxJQUFJLEVBQUUseURBQXlEO01BQy9EZCxJQUFJLEVBQUUsU0FBUztNQUNmc0osZ0JBQWdCLEVBQUUsSUFBSTtNQUN0QkMsZUFBZSxFQUFFLElBQUk7TUFDckJDLGlCQUFpQixFQUFFLG1DQUFtQztNQUN0REMsZ0JBQWdCLEVBQUUsdUNBQXVDO01BQ3pEQyxrQkFBa0IsRUFBRTtJQUV0QixDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUN2SixNQUFNLEVBQUs7TUFDbEIsSUFBSUEsTUFBTSxDQUFDN0QsS0FBSyxFQUFFO1FBQ2hCLElBQUlxTixpQkFBaUIsR0FBR2hOLENBQUMsQ0FBQ29NLEtBQUksQ0FBQyxDQUFDcEosSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUvQzBDLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLENBQUM7UUFDYjdGLENBQUMsQ0FBQ21ELElBQUksQ0FBQztVQUNMQyxJQUFJLEVBQUUsTUFBTTtVQUNaQyxHQUFHLEVBQUV0QywyREFBZ0IsQ0FBQyw2Q0FBNkMsRUFBRTtZQUFFaU0saUJBQWlCLEVBQUVBO1VBQWtCLENBQUMsQ0FBQztVQUM5R3pKLE9BQU8sRUFBRSxTQUFBQSxRQUFVQyxNQUFNLEVBQUU7WUFFekJrQyxNQUFNLENBQUM1QyxJQUFJLENBQUMsQ0FBQztZQUViakIsTUFBTSxDQUFDMEIsT0FBTyxDQUFDQyxNQUFNLENBQUM7WUFFdEJ0QyxNQUFNLENBQUNDLFFBQVEsQ0FBQzhMLElBQUksR0FBRyxlQUFlO1lBRXRDdkgsTUFBTSxDQUFDNUMsSUFBSSxDQUFDLENBQUM7VUFDZixDQUFDO1VBQ0RzRixLQUFLLEVBQUUsU0FBQUEsTUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtZQUMvQzdDLE1BQU0sQ0FBQzVDLElBQUksQ0FBQyxDQUFDO1lBQ2IsT0FBT2pCLE1BQU0sQ0FBQ3VHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRyxZQUFZLENBQUM7VUFDekM7UUFDRixDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztFQUVKLENBQUMsQ0FBQztBQUdKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdsQzBEOztBQUU1RDtBQUNPLElBQU0yRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDak4seUlBSW5DLENBQUM7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsWUFBVTtFQUFDLFNBQVNvTixDQUFDQSxDQUFDQyxDQUFDLEVBQUM1SyxDQUFDLEVBQUM7SUFBQyxPQUFPLFlBQVU7TUFBQyxPQUFPNEssQ0FBQyxDQUFDL04sS0FBSyxDQUFDbUQsQ0FBQyxFQUFDbEQsU0FBUyxDQUFDO0lBQUEsQ0FBQztFQUFBO0VBQUMsSUFBSStOLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNOLENBQUM7SUFBQ08sQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUN2TCxDQUFDO0lBQUN3TCxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsRUFBQztJQUFDL0osQ0FBQztJQUFDZ0ssQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUM7SUFBQ0MsQ0FBQztJQUFDQyxDQUFDO0lBQUNDLENBQUMsR0FBQyxFQUFFLENBQUNDLEtBQUs7SUFBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDQyxjQUFjO0lBQUNDLENBQUMsR0FBQyxTQUFBQSxFQUFTaEQsQ0FBQyxFQUFDNUssQ0FBQyxFQUFDO01BQUMsS0FBSSxJQUFJaUwsQ0FBQyxJQUFJakwsQ0FBQyxFQUFDME4sQ0FBQyxDQUFDRyxJQUFJLENBQUM3TixDQUFDLEVBQUNpTCxDQUFDLENBQUMsS0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUMsR0FBQ2pMLENBQUMsQ0FBQ2lMLENBQUMsQ0FBQyxDQUFDO01BQUMsU0FBU0ksQ0FBQ0EsQ0FBQSxFQUFFO1FBQUMsSUFBSSxDQUFDeUMsV0FBVyxHQUFDbEQsQ0FBQztNQUFBO01BQUMsT0FBT1MsQ0FBQyxDQUFDMEMsU0FBUyxHQUFDL04sQ0FBQyxDQUFDK04sU0FBUyxFQUFDbkQsQ0FBQyxDQUFDbUQsU0FBUyxHQUFDLElBQUkxQyxDQUFDLENBQUQsQ0FBQyxFQUFDVCxDQUFDLENBQUNvRCxTQUFTLEdBQUNoTyxDQUFDLENBQUMrTixTQUFTLEVBQUNuRCxDQUFDO0lBQUEsQ0FBQztJQUFDcUQsQ0FBQyxHQUFDLEVBQUUsQ0FBQ0MsT0FBTyxJQUFFLFVBQVN0RCxDQUFDLEVBQUM7TUFBQyxLQUFJLElBQUk1SyxDQUFDLEdBQUMsQ0FBQyxFQUFDaUwsQ0FBQyxHQUFDLElBQUksQ0FBQzlLLE1BQU0sRUFBQ0gsQ0FBQyxHQUFDaUwsQ0FBQyxFQUFDakwsQ0FBQyxFQUFFLEVBQUMsSUFBR0EsQ0FBQyxJQUFJLElBQUksSUFBRSxJQUFJLENBQUNBLENBQUMsQ0FBQyxLQUFHNEssQ0FBQyxFQUFDLE9BQU81SyxDQUFDO01BQUMsT0FBTSxDQUFDLENBQUM7SUFBQSxDQUFDO0VBQUMsU0FBU21PLENBQUNBLENBQUEsRUFBRSxDQUFDO0VBQUMsS0FBSXZDLENBQUMsR0FBQztJQUFDOUcsU0FBUyxFQUFDLEVBQUU7SUFBQ3NKLFdBQVcsRUFBQyxHQUFHO0lBQUNDLFdBQVcsRUFBQyxHQUFHO0lBQUNDLE9BQU8sRUFBQyxHQUFHO0lBQUNDLFNBQVMsRUFBQyxHQUFHO0lBQUNDLG1CQUFtQixFQUFDLEVBQUU7SUFBQ0MsVUFBVSxFQUFDLElBQUk7SUFBQ0MsZUFBZSxFQUFDLENBQUMsQ0FBQztJQUFDQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7SUFBQ0MscUJBQXFCLEVBQUMsR0FBRztJQUFDM08sTUFBTSxFQUFDLE1BQU07SUFBQzRPLFFBQVEsRUFBQztNQUFDQyxhQUFhLEVBQUMsR0FBRztNQUFDQyxTQUFTLEVBQUMsQ0FBQyxNQUFNO0lBQUMsQ0FBQztJQUFDQyxRQUFRLEVBQUM7TUFBQ0MsVUFBVSxFQUFDLEVBQUU7TUFBQ0MsV0FBVyxFQUFDLENBQUM7TUFBQ0MsWUFBWSxFQUFDO0lBQUMsQ0FBQztJQUFDMU8sSUFBSSxFQUFDO01BQUMyTyxZQUFZLEVBQUMsQ0FBQyxLQUFLLENBQUM7TUFBQ0MsZUFBZSxFQUFDLENBQUMsQ0FBQztNQUFDQyxVQUFVLEVBQUM7SUFBRTtFQUFDLENBQUMsRUFBQ25ELENBQUMsR0FBQyxTQUFBQSxFQUFBLEVBQVU7SUFBQyxJQUFJdkIsQ0FBQztJQUFDLE9BQU8sSUFBSSxLQUFHQSxDQUFDLEdBQUMsV0FBVyxJQUFFLE9BQU8yRSxXQUFXLElBQUUsSUFBSSxLQUFHQSxXQUFXLElBQUUsVUFBVSxJQUFFLE9BQU9BLFdBQVcsQ0FBQ25KLEdBQUcsR0FBQ21KLFdBQVcsQ0FBQ25KLEdBQUcsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsR0FBQ3dFLENBQUMsR0FBQyxDQUFDLElBQUkvSSxJQUFJLENBQUQsQ0FBQztFQUFBLENBQUMsRUFBQ3dLLENBQUMsR0FBQzdOLE1BQU0sQ0FBQ2dSLHFCQUFxQixJQUFFaFIsTUFBTSxDQUFDaVIsd0JBQXdCLElBQUVqUixNQUFNLENBQUNrUiwyQkFBMkIsSUFBRWxSLE1BQU0sQ0FBQ21SLHVCQUF1QixFQUFDaEUsQ0FBQyxHQUFDbk4sTUFBTSxDQUFDb1Isb0JBQW9CLElBQUVwUixNQUFNLENBQUNxUix1QkFBdUIsRUFBQ3RFLENBQUMsR0FBQyxTQUFBQSxFQUFTWCxDQUFDLEVBQUM1SyxDQUFDLEVBQUNpTCxDQUFDLEVBQUM7SUFBQyxJQUFHLFVBQVUsSUFBRSxPQUFPTCxDQUFDLENBQUNrRixnQkFBZ0IsRUFBQyxPQUFPbEYsQ0FBQyxDQUFDa0YsZ0JBQWdCLENBQUM5UCxDQUFDLEVBQUNpTCxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQyxJQUFJSSxDQUFDO0lBQUMsVUFBVSxJQUFFLE9BQU9ULENBQUMsQ0FBQyxJQUFJLEdBQUM1SyxDQUFDLENBQUMsSUFBRSxRQUFRLElBQUErUCxPQUFBLENBQVNuRixDQUFDLENBQUMsSUFBSSxHQUFDNUssQ0FBQyxDQUFDLENBQUNnUSxjQUFjLEtBQUUzRSxDQUFDLEdBQUMsSUFBSUwsQ0FBQyxDQUFELENBQUMsRUFBQyxVQUFVLElBQUUsT0FBT0osQ0FBQyxDQUFDLElBQUksR0FBQzVLLENBQUMsQ0FBQyxJQUFFcUwsQ0FBQyxDQUFDeEwsRUFBRSxDQUFDRyxDQUFDLEVBQUM0SyxDQUFDLENBQUMsSUFBSSxHQUFDNUssQ0FBQyxDQUFDLENBQUMsRUFBQzRLLENBQUMsQ0FBQyxJQUFJLEdBQUM1SyxDQUFDLENBQUMsR0FBQyxVQUFTNEssQ0FBQyxFQUFDO01BQUMsT0FBT1MsQ0FBQyxDQUFDNEUsT0FBTyxDQUFDalEsQ0FBQyxFQUFDNEssQ0FBQyxDQUFDO0lBQUEsQ0FBQyxFQUFDQSxDQUFDLENBQUMsSUFBSSxHQUFDNUssQ0FBQyxDQUFDLENBQUNnUSxjQUFjLEdBQUMzRSxDQUFDLElBQUVBLENBQUMsR0FBQ1QsQ0FBQyxDQUFDLElBQUksR0FBQzVLLENBQUMsQ0FBQyxDQUFDZ1EsY0FBYyxFQUFDM0UsQ0FBQyxDQUFDeEwsRUFBRSxDQUFDRyxDQUFDLEVBQUNpTCxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsSUFBSSxJQUFFb0IsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsU0FBQUEsRUFBU3pCLENBQUMsRUFBQztJQUFDLE9BQU9yTSxVQUFVLENBQUNxTSxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBQUEsQ0FBQyxFQUFDZSxDQUFDLEdBQUMsU0FBQUEsRUFBU2YsQ0FBQyxFQUFDO0lBQUMsT0FBT3NGLFlBQVksQ0FBQ3RGLENBQUMsQ0FBQztFQUFBLENBQUMsQ0FBQyxFQUFDMkIsQ0FBQyxHQUFDLFNBQUFBLEVBQVN2TSxDQUFDLEVBQUM7SUFBQyxJQUFJaUwsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDLENBQUM7TUFBQ2QsQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUEsRUFBVztRQUFDLElBQUlULENBQUMsR0FBQ3VCLENBQUMsQ0FBQyxDQUFDLEdBQUNsQixDQUFDO1FBQUMsT0FBTyxFQUFFLElBQUVMLENBQUMsSUFBRUssQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDLENBQUMsRUFBQ25NLENBQUMsQ0FBQzRLLENBQUMsRUFBQyxZQUFVO1VBQUMsT0FBT3lCLENBQUMsQ0FBQ2hCLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxJQUFFOU0sVUFBVSxDQUFDOE0sQ0FBQyxFQUFDLEVBQUUsR0FBQ1QsQ0FBQyxDQUFDO01BQUEsQ0FBQztJQUFDLE9BQU9TLENBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDaUIsQ0FBQyxHQUFDLFNBQUFBLEVBQUEsRUFBVTtJQUFDLElBQUkxQixDQUFDLEdBQUM5TixTQUFTLENBQUMsQ0FBQyxDQUFDO01BQUNrRCxDQUFDLEdBQUNsRCxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQUNtTyxDQUFDLEdBQUMsQ0FBQyxJQUFFbk8sU0FBUyxDQUFDcUQsTUFBTSxHQUFDcU4sQ0FBQyxDQUFDSyxJQUFJLENBQUMvUSxTQUFTLEVBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRTtJQUFDLE9BQU0sVUFBVSxJQUFFLE9BQU84TixDQUFDLENBQUM1SyxDQUFDLENBQUMsR0FBQzRLLENBQUMsQ0FBQzVLLENBQUMsQ0FBQyxDQUFDbkQsS0FBSyxDQUFDK04sQ0FBQyxFQUFDSyxDQUFDLENBQUMsR0FBQ0wsQ0FBQyxDQUFDNUssQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDNkwsRUFBQyxHQUFDLFNBQUFBLEVBQUEsRUFBVTtJQUFDLEtBQUksSUFBSWpCLENBQUMsRUFBQzVLLENBQUMsRUFBQ2lMLENBQUMsRUFBQ0ksQ0FBQyxHQUFDdk8sU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDa08sQ0FBQyxHQUFDLENBQUMsSUFBRWxPLFNBQVMsQ0FBQ3FELE1BQU0sR0FBQ3FOLENBQUMsQ0FBQ0ssSUFBSSxDQUFDL1EsU0FBUyxFQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBQzZOLENBQUMsR0FBQyxDQUFDLEVBQUNJLENBQUMsR0FBQ0MsQ0FBQyxDQUFDN0ssTUFBTSxFQUFDd0ssQ0FBQyxHQUFDSSxDQUFDLEVBQUNKLENBQUMsRUFBRSxFQUFDLElBQUczSyxDQUFDLEdBQUNnTCxDQUFDLENBQUNMLENBQUMsQ0FBQyxFQUFDLEtBQUlDLENBQUMsSUFBSTVLLENBQUMsRUFBQzBOLENBQUMsQ0FBQ0csSUFBSSxDQUFDN04sQ0FBQyxFQUFDNEssQ0FBQyxDQUFDLEtBQUdLLENBQUMsR0FBQ2pMLENBQUMsQ0FBQzRLLENBQUMsQ0FBQyxFQUFDLElBQUksSUFBRVMsQ0FBQyxDQUFDVCxDQUFDLENBQUMsSUFBRSxRQUFRLElBQUFtRixPQUFBLENBQVMxRSxDQUFDLENBQUNULENBQUMsQ0FBQyxLQUFFLElBQUksSUFBRUssQ0FBQyxJQUFFLFFBQVEsSUFBQThFLE9BQUEsQ0FBUzlFLENBQUMsSUFBQ1ksRUFBQyxDQUFDUixDQUFDLENBQUNULENBQUMsQ0FBQyxFQUFDSyxDQUFDLENBQUMsR0FBQ0ksQ0FBQyxDQUFDVCxDQUFDLENBQUMsR0FBQ0ssQ0FBQyxDQUFDO0lBQUMsT0FBT0ksQ0FBQztFQUFBLENBQUMsRUFBQ0csQ0FBQyxHQUFDLFNBQUFBLEVBQVNaLENBQUMsRUFBQztJQUFDLEtBQUksSUFBSTVLLENBQUMsRUFBQ2lMLENBQUMsRUFBQ0ksQ0FBQyxHQUFDckwsQ0FBQyxHQUFDLENBQUMsRUFBQ2dMLENBQUMsR0FBQyxDQUFDLEVBQUNMLENBQUMsR0FBQ0MsQ0FBQyxDQUFDekssTUFBTSxFQUFDNkssQ0FBQyxHQUFDTCxDQUFDLEVBQUNLLENBQUMsRUFBRSxFQUFDQyxDQUFDLEdBQUNMLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEVBQUNLLENBQUMsSUFBRThFLElBQUksQ0FBQ0MsR0FBRyxDQUFDbkYsQ0FBQyxDQUFDLEVBQUNqTCxDQUFDLEVBQUU7SUFBQyxPQUFPcUwsQ0FBQyxHQUFDckwsQ0FBQztFQUFBLENBQUMsRUFBQzhMLENBQUMsR0FBQyxTQUFBQSxFQUFTbEIsQ0FBQyxFQUFDNUssQ0FBQyxFQUFDO0lBQUMsSUFBSWlMLENBQUMsRUFBQ0ksQ0FBQztJQUFDLElBQUcsSUFBSSxJQUFFVCxDQUFDLEtBQUdBLENBQUMsR0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLElBQUU1SyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDcUwsQ0FBQyxHQUFDM04sUUFBUSxDQUFDMlMsYUFBYSxDQUFDLGFBQWEsR0FBQ3pGLENBQUMsR0FBQyxHQUFHLENBQUMsRUFBQztNQUFDLElBQUdLLENBQUMsR0FBQ0ksQ0FBQyxDQUFDaUYsWUFBWSxDQUFDLFlBQVksR0FBQzFGLENBQUMsQ0FBQyxFQUFDLENBQUM1SyxDQUFDLEVBQUMsT0FBT2lMLENBQUM7TUFBQyxJQUFHO1FBQUMsT0FBTzFDLElBQUksQ0FBQ2dJLEtBQUssQ0FBQ3RGLENBQUMsQ0FBQztNQUFBLENBQUMsUUFBTUwsQ0FBQyxFQUFDO1FBQUMsT0FBTSxXQUFXLElBQUUsT0FBTzFNLE9BQU8sSUFBRSxJQUFJLEtBQUdBLE9BQU8sR0FBQ0EsT0FBTyxDQUFDd0gsS0FBSyxDQUFDLG1DQUFtQyxFQUFDa0YsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO01BQUE7SUFBQztFQUFDLENBQUMsRUFBQ3VELENBQUMsQ0FBQ0osU0FBUyxDQUFDbE8sRUFBRSxHQUFDLFVBQVMrSyxDQUFDLEVBQUM1SyxDQUFDLEVBQUNpTCxDQUFDLEVBQUNJLENBQUMsRUFBQztJQUFDLElBQUlMLENBQUM7SUFBQyxPQUFPLElBQUksSUFBRUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUUsSUFBSSxDQUFDbUYsUUFBUSxLQUFHLElBQUksQ0FBQ0EsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxJQUFFLENBQUN4RixDQUFDLEdBQUMsSUFBSSxDQUFDd0YsUUFBUSxFQUFFNUYsQ0FBQyxDQUFDLEtBQUdJLENBQUMsQ0FBQ0osQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDNEYsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLENBQUN0QyxJQUFJLENBQUM7TUFBQ21JLE9BQU8sRUFBQ3pRLENBQUM7TUFBQzBRLEdBQUcsRUFBQ3pGLENBQUM7TUFBQzBGLElBQUksRUFBQ3RGO0lBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDOEMsQ0FBQyxDQUFDSixTQUFTLENBQUM0QyxJQUFJLEdBQUMsVUFBUy9GLENBQUMsRUFBQzVLLENBQUMsRUFBQ2lMLENBQUMsRUFBQztJQUFDLE9BQU8sSUFBSSxDQUFDcEwsRUFBRSxDQUFDK0ssQ0FBQyxFQUFDNUssQ0FBQyxFQUFDaUwsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDa0QsQ0FBQyxDQUFDSixTQUFTLENBQUM2QyxHQUFHLEdBQUMsVUFBU2hHLENBQUMsRUFBQzVLLENBQUMsRUFBQztJQUFDLElBQUlpTCxDQUFDLEVBQUNJLENBQUMsRUFBQ0wsQ0FBQztJQUFDLElBQUcsSUFBSSxLQUFHLElBQUksS0FBR0ssQ0FBQyxHQUFDLElBQUksQ0FBQ21GLFFBQVEsQ0FBQyxHQUFDbkYsQ0FBQyxDQUFDVCxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO01BQUMsSUFBRyxJQUFJLElBQUU1SyxDQUFDLEVBQUMsT0FBTyxPQUFPLElBQUksQ0FBQ3dRLFFBQVEsQ0FBQzVGLENBQUMsQ0FBQztNQUFDLEtBQUlLLENBQUMsR0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQyxFQUFFLEVBQUNDLENBQUMsR0FBQyxJQUFJLENBQUN1RixRQUFRLENBQUM1RixDQUFDLENBQUMsQ0FBQ3pLLE1BQU0sR0FBRSxJQUFJLENBQUNxUSxRQUFRLENBQUM1RixDQUFDLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDLENBQUN3RixPQUFPLEtBQUd6USxDQUFDLEdBQUNnTCxDQUFDLENBQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDa0ksUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLENBQUNpRyxNQUFNLENBQUM1RixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDMUMsSUFBSSxDQUFDMkMsQ0FBQyxFQUFFLENBQUM7TUFBQyxPQUFPRCxDQUFDO0lBQUE7RUFBQyxDQUFDLEVBQUNtRCxDQUFDLENBQUNKLFNBQVMsQ0FBQ2tDLE9BQU8sR0FBQyxZQUFVO0lBQUMsSUFBSXJGLENBQUM7TUFBQzVLLENBQUM7TUFBQ2lMLENBQUM7TUFBQ0ksQ0FBQztNQUFDTCxDQUFDO01BQUNMLENBQUM7TUFBQ0ksQ0FBQyxHQUFDak8sU0FBUyxDQUFDLENBQUMsQ0FBQztNQUFDd08sQ0FBQyxHQUFDLENBQUMsSUFBRXhPLFNBQVMsQ0FBQ3FELE1BQU0sR0FBQ3FOLENBQUMsQ0FBQ0ssSUFBSSxDQUFDL1EsU0FBUyxFQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUU7SUFBQyxJQUFHLElBQUksS0FBR3VPLENBQUMsR0FBQyxJQUFJLENBQUNtRixRQUFRLENBQUMsSUFBRW5GLENBQUMsQ0FBQ04sQ0FBQyxDQUFDLEVBQUM7TUFBQyxLQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDTixDQUFDLEdBQUMsRUFBRSxFQUFDTSxDQUFDLEdBQUMsSUFBSSxDQUFDdUYsUUFBUSxDQUFDekYsQ0FBQyxDQUFDLENBQUM1SyxNQUFNLEdBQUVILENBQUMsR0FBQyxDQUFDZ0wsQ0FBQyxHQUFDLElBQUksQ0FBQ3dGLFFBQVEsQ0FBQ3pGLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsRUFBRXdGLE9BQU8sRUFBQzdGLENBQUMsR0FBQ0ksQ0FBQyxDQUFDMEYsR0FBRyxFQUFDMUYsQ0FBQyxHQUFDQSxDQUFDLENBQUMyRixJQUFJLEVBQUMzUSxDQUFDLENBQUNuRCxLQUFLLENBQUMsSUFBSSxJQUFFK04sQ0FBQyxHQUFDQSxDQUFDLEdBQUMsSUFBSSxFQUFDVSxDQUFDLENBQUMsRUFBQ04sQ0FBQyxHQUFDTCxDQUFDLENBQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDa0ksUUFBUSxDQUFDekYsQ0FBQyxDQUFDLENBQUM4RixNQUFNLENBQUM1RixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ04sQ0FBQyxDQUFDckMsSUFBSSxDQUFDMkMsQ0FBQyxFQUFFLENBQUM7TUFBQyxPQUFPTixDQUFDO0lBQUE7RUFBQyxDQUFDLEVBQUM0QyxDQUFDLEdBQUNZLENBQUMsRUFBQ2pELENBQUMsR0FBQzFNLE1BQU0sQ0FBQ3NTLElBQUksSUFBRSxDQUFDLENBQUMsRUFBQ3RTLE1BQU0sQ0FBQ3NTLElBQUksR0FBQzVGLENBQUMsRUFBQ1csRUFBQyxDQUFDWCxDQUFDLEVBQUNxQyxDQUFDLENBQUNRLFNBQVMsQ0FBQyxFQUFDM0IsQ0FBQyxHQUFDbEIsQ0FBQyxDQUFDOUwsT0FBTyxHQUFDeU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLEVBQUNwTixNQUFNLENBQUN1UyxXQUFXLEVBQUNqRixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNtQixDQUFDLEdBQUMsQ0FBQyxFQUFDRSxDQUFDLEdBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLEVBQUVsTixNQUFNLEVBQUM4TSxDQUFDLEdBQUNFLENBQUMsRUFBQ0YsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEtBQUdiLENBQUMsQ0FBQ08sQ0FBQyxHQUFDVSxDQUFDLENBQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUdiLENBQUMsQ0FBQ08sQ0FBQyxDQUFDLEdBQUNmLENBQUMsQ0FBQ2UsQ0FBQyxDQUFDLENBQUM7RUFBQyxTQUFTcUUsQ0FBQ0EsQ0FBQSxFQUFFO0lBQUMsT0FBT0EsQ0FBQyxDQUFDaEQsU0FBUyxDQUFDRixXQUFXLENBQUNqUixLQUFLLENBQUMsSUFBSSxFQUFDQyxTQUFTLENBQUM7RUFBQTtFQUFDLFNBQVNRLENBQUNBLENBQUEsRUFBRTtJQUFDLElBQUksQ0FBQzJULFFBQVEsR0FBQyxDQUFDO0VBQUE7RUFBQyxTQUFTQyxFQUFFQSxDQUFBLEVBQUU7SUFBQyxJQUFJLENBQUNWLFFBQVEsR0FBQyxDQUFDLENBQUM7RUFBQTtFQUFDLFNBQVNXLEVBQUVBLENBQUEsRUFBRTtJQUFDLElBQUluUixDQUFDO01BQUMySyxDQUFDLEdBQUMsSUFBSTtJQUFDd0csRUFBRSxDQUFDbkQsU0FBUyxDQUFDRixXQUFXLENBQUNqUixLQUFLLENBQUMsSUFBSSxFQUFDQyxTQUFTLENBQUMsRUFBQ2tELENBQUMsR0FBQyxTQUFBQSxFQUFTcUwsQ0FBQyxFQUFDO01BQUMsSUFBSUwsQ0FBQyxHQUFDSyxDQUFDLENBQUN6SCxJQUFJO01BQUMsT0FBT3lILENBQUMsQ0FBQ3pILElBQUksR0FBQyxVQUFTZ0gsQ0FBQyxFQUFDNUssQ0FBQyxFQUFDaUwsQ0FBQyxFQUFDO1FBQUMsT0FBT3lCLENBQUMsQ0FBQzlCLENBQUMsQ0FBQyxJQUFFRCxDQUFDLENBQUNzRixPQUFPLENBQUMsU0FBUyxFQUFDO1VBQUN2UCxJQUFJLEVBQUNrSyxDQUFDO1VBQUNqSyxHQUFHLEVBQUNYLENBQUM7VUFBQ29SLE9BQU8sRUFBQy9GO1FBQUMsQ0FBQyxDQUFDLEVBQUNMLENBQUMsQ0FBQ25PLEtBQUssQ0FBQ3dPLENBQUMsRUFBQ3ZPLFNBQVMsQ0FBQztNQUFBLENBQUM7SUFBQSxDQUFDLEVBQUMwQixNQUFNLENBQUM2UyxjQUFjLEdBQUMsVUFBU3pHLENBQUMsRUFBQztNQUFDQSxDQUFDLEdBQUMsSUFBSW9DLENBQUMsQ0FBQ3BDLENBQUMsQ0FBQztNQUFDLE9BQU81SyxDQUFDLENBQUM0SyxDQUFDLENBQUMsRUFBQ0EsQ0FBQztJQUFBLENBQUM7SUFBQyxJQUFHO01BQUM5SSxDQUFDLENBQUN0RCxNQUFNLENBQUM2UyxjQUFjLEVBQUNyRSxDQUFDLENBQUM7SUFBQSxDQUFDLFFBQU1wQyxDQUFDLEVBQUMsQ0FBQztJQUFDLElBQUcsSUFBSSxJQUFFbUMsQ0FBQyxFQUFDO01BQUN2TyxNQUFNLENBQUM4UyxjQUFjLEdBQUMsWUFBVTtRQUFDLElBQUkxRyxDQUFDLEdBQUMsSUFBSW1DLENBQUMsQ0FBRCxDQUFDO1FBQUMsT0FBTy9NLENBQUMsQ0FBQzRLLENBQUMsQ0FBQyxFQUFDQSxDQUFDO01BQUEsQ0FBQztNQUFDLElBQUc7UUFBQzlJLENBQUMsQ0FBQ3RELE1BQU0sQ0FBQzhTLGNBQWMsRUFBQ3ZFLENBQUMsQ0FBQztNQUFBLENBQUMsUUFBTW5DLENBQUMsRUFBQyxDQUFDO0lBQUM7SUFBQyxJQUFHLElBQUksSUFBRWtDLENBQUMsSUFBRVYsQ0FBQyxDQUFDM0wsSUFBSSxDQUFDNE8sZUFBZSxFQUFDO01BQUM3USxNQUFNLENBQUMrUyxTQUFTLEdBQUMsVUFBUzNHLENBQUMsRUFBQzVLLENBQUMsRUFBQztRQUFDLElBQUlpTCxDQUFDLEdBQUMsSUFBSSxJQUFFakwsQ0FBQyxHQUFDLElBQUk4TSxDQUFDLENBQUNsQyxDQUFDLEVBQUM1SyxDQUFDLENBQUMsR0FBQyxJQUFJOE0sQ0FBQyxDQUFDbEMsQ0FBQyxDQUFDO1FBQUMsT0FBTzhCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBRS9CLENBQUMsQ0FBQ3NGLE9BQU8sQ0FBQyxTQUFTLEVBQUM7VUFBQ3ZQLElBQUksRUFBQyxRQUFRO1VBQUNDLEdBQUcsRUFBQ2lLLENBQUM7VUFBQzRHLFNBQVMsRUFBQ3hSLENBQUM7VUFBQ29SLE9BQU8sRUFBQ25HO1FBQUMsQ0FBQyxDQUFDLEVBQUNBLENBQUM7TUFBQSxDQUFDO01BQUMsSUFBRztRQUFDbkosQ0FBQyxDQUFDdEQsTUFBTSxDQUFDK1MsU0FBUyxFQUFDekUsQ0FBQyxDQUFDO01BQUEsQ0FBQyxRQUFNbEMsQ0FBQyxFQUFDLENBQUM7SUFBQztFQUFDO0VBQUMsU0FBUzZHLEVBQUVBLENBQUEsRUFBRTtJQUFDLElBQUksQ0FBQ0MsUUFBUSxHQUFDL0csQ0FBQyxDQUFDLElBQUksQ0FBQytHLFFBQVEsRUFBQyxJQUFJLENBQUM7SUFBQyxJQUFJOUcsQ0FBQyxHQUFDLElBQUk7SUFBQyxJQUFJLENBQUNpRSxRQUFRLEdBQUMsRUFBRSxFQUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2xNLEVBQUUsQ0FBQyxTQUFTLEVBQUMsWUFBVTtNQUFDLE9BQU8rSyxDQUFDLENBQUMrRyxLQUFLLENBQUM5VSxLQUFLLENBQUMrTixDQUFDLEVBQUM5TixTQUFTLENBQUM7SUFBQSxDQUFDLENBQUM7RUFBQTtFQUFDLFNBQVM4VSxFQUFFQSxDQUFDaEgsQ0FBQyxFQUFDO0lBQUMsSUFBSTVLLENBQUMsRUFBQ2lMLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTCxDQUFDO0lBQUMsS0FBSSxJQUFJLElBQUVKLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOEcsUUFBUSxHQUFDL0csQ0FBQyxDQUFDLElBQUksQ0FBQytHLFFBQVEsRUFBQyxJQUFJLENBQUMsRUFBQyxJQUFJLENBQUM3QyxRQUFRLEdBQUMsRUFBRSxFQUFDLElBQUksSUFBRWpFLENBQUMsQ0FBQ21FLFNBQVMsS0FBR25FLENBQUMsQ0FBQ21FLFNBQVMsR0FBQyxFQUFFLENBQUMsRUFBQzlELENBQUMsR0FBQyxDQUFDLEVBQUNJLENBQUMsR0FBQyxDQUFDTCxDQUFDLEdBQUNKLENBQUMsQ0FBQ21FLFNBQVMsRUFBRTVPLE1BQU0sRUFBQzhLLENBQUMsR0FBQ0ksQ0FBQyxFQUFDSixDQUFDLEVBQUUsRUFBQ2pMLENBQUMsR0FBQ2dMLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDNEQsUUFBUSxDQUFDdkcsSUFBSSxDQUFDLElBQUl5QyxDQUFDLENBQUMvSyxDQUFDLEVBQUMsSUFBSSxDQUFDMFIsUUFBUSxDQUFDLENBQUM7RUFBQTtFQUFDLFNBQVNHLEVBQUVBLENBQUNqSCxDQUFDLEVBQUM1SyxDQUFDLEVBQUM7SUFBQyxJQUFJLENBQUM4UixRQUFRLEdBQUNsSCxDQUFDLEVBQUMsSUFBSSxDQUFDbUgsZ0JBQWdCLEdBQUMvUixDQUFDLEVBQUMsSUFBSSxDQUFDaVIsUUFBUSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUNlLEtBQUssQ0FBQyxDQUFDO0VBQUE7RUFBQyxTQUFTQyxFQUFFQSxDQUFBLEVBQUU7SUFBQyxJQUFJckgsQ0FBQztNQUFDNUssQ0FBQztNQUFDaUwsQ0FBQyxHQUFDLElBQUk7SUFBQyxJQUFJLENBQUNnRyxRQUFRLEdBQUMsSUFBSSxLQUFHalIsQ0FBQyxHQUFDLElBQUksQ0FBQ2tTLE1BQU0sQ0FBQ3hVLFFBQVEsQ0FBQ3lVLFVBQVUsQ0FBQyxDQUFDLEdBQUNuUyxDQUFDLEdBQUMsR0FBRyxFQUFDNEssQ0FBQyxHQUFDbE4sUUFBUSxDQUFDMFUsa0JBQWtCLEVBQUMxVSxRQUFRLENBQUMwVSxrQkFBa0IsR0FBQyxZQUFVO01BQUMsT0FBTyxJQUFJLElBQUVuSCxDQUFDLENBQUNpSCxNQUFNLENBQUN4VSxRQUFRLENBQUN5VSxVQUFVLENBQUMsS0FBR2xILENBQUMsQ0FBQ2dHLFFBQVEsR0FBQ2hHLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQ3hVLFFBQVEsQ0FBQ3lVLFVBQVUsQ0FBQyxDQUFDLEVBQUMsVUFBVSxJQUFFLE9BQU92SCxDQUFDLEdBQUNBLENBQUMsQ0FBQy9OLEtBQUssQ0FBQyxJQUFJLEVBQUNDLFNBQVMsQ0FBQyxHQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7RUFBQTtFQUFDLFNBQVN1VixFQUFFQSxDQUFDekgsQ0FBQyxFQUFDO0lBQUMsSUFBSSxDQUFDMEgsTUFBTSxHQUFDMUgsQ0FBQyxFQUFDLElBQUksQ0FBQzJILElBQUksR0FBQyxJQUFJLENBQUNDLGVBQWUsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyxJQUFJLEdBQUNyRyxDQUFDLENBQUNpQyxXQUFXLEVBQUMsSUFBSSxDQUFDcUUsT0FBTyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUN6QixRQUFRLEdBQUMsSUFBSSxDQUFDMEIsWUFBWSxHQUFDLENBQUMsRUFBQyxJQUFJLElBQUUsSUFBSSxDQUFDTCxNQUFNLEtBQUcsSUFBSSxDQUFDckIsUUFBUSxHQUFDM0UsQ0FBQyxDQUFDLElBQUksQ0FBQ2dHLE1BQU0sRUFBQyxVQUFVLENBQUMsQ0FBQztFQUFBO0VBQUMvRSxDQUFDLEdBQUNxRixLQUFLLEVBQUNoRixDQUFDLENBQUNvRCxDQUFDLEVBQUN6RCxDQUFDLENBQUMsRUFBQ3RDLENBQUMsR0FBQytGLENBQUMsRUFBQzFULENBQUMsQ0FBQ3lRLFNBQVMsQ0FBQzhFLFVBQVUsR0FBQyxZQUFVO0lBQUMsSUFBSWpJLENBQUM7SUFBQyxJQUFHLElBQUksSUFBRSxJQUFJLENBQUM5QyxFQUFFLEVBQUM7TUFBQyxJQUFHLEVBQUU4QyxDQUFDLEdBQUNsTixRQUFRLENBQUMyUyxhQUFhLENBQUNqRSxDQUFDLENBQUNuTSxNQUFNLENBQUMsQ0FBQyxFQUFDLE1BQU0sSUFBSWdMLENBQUMsQ0FBRCxDQUFDO01BQUMsSUFBSSxDQUFDbkQsRUFBRSxHQUFDcEssUUFBUSxDQUFDb1YsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQ2hMLEVBQUUsQ0FBQ2hELFNBQVMsR0FBQyxrQkFBa0IsRUFBQ3BILFFBQVEsQ0FBQ3FWLElBQUksQ0FBQ2pPLFNBQVMsR0FBQ3BILFFBQVEsQ0FBQ3FWLElBQUksQ0FBQ2pPLFNBQVMsQ0FBQ2QsT0FBTyxDQUFDLGVBQWUsRUFBQyxlQUFlLENBQUM7TUFBQyxJQUFJaEUsQ0FBQyxHQUFDLEVBQUUsS0FBR29NLENBQUMsQ0FBQ3RILFNBQVMsR0FBQyxHQUFHLEdBQUNzSCxDQUFDLENBQUN0SCxTQUFTLEdBQUMsRUFBRTtNQUFDLElBQUksQ0FBQ2dELEVBQUUsQ0FBQ2tMLFNBQVMsR0FBQywyQkFBMkIsR0FBQ2hULENBQUMsR0FBQywwRkFBMEYsRUFBQyxJQUFJLElBQUU0SyxDQUFDLENBQUNxSSxVQUFVLEdBQUNySSxDQUFDLENBQUNzSSxZQUFZLENBQUMsSUFBSSxDQUFDcEwsRUFBRSxFQUFDOEMsQ0FBQyxDQUFDcUksVUFBVSxDQUFDLEdBQUNySSxDQUFDLENBQUN1SSxXQUFXLENBQUMsSUFBSSxDQUFDckwsRUFBRSxDQUFDO0lBQUE7SUFBQyxPQUFPLElBQUksQ0FBQ0EsRUFBRTtFQUFBLENBQUMsRUFBQ3hLLENBQUMsQ0FBQ3lRLFNBQVMsQ0FBQ3FGLE1BQU0sR0FBQyxZQUFVO0lBQUMsSUFBSXhJLENBQUMsR0FBQyxJQUFJLENBQUNpSSxVQUFVLENBQUMsQ0FBQztJQUFDLE9BQU9qSSxDQUFDLENBQUM5RixTQUFTLEdBQUM4RixDQUFDLENBQUM5RixTQUFTLENBQUNkLE9BQU8sQ0FBQyxhQUFhLEVBQUMsZUFBZSxDQUFDLEVBQUN0RyxRQUFRLENBQUNxVixJQUFJLENBQUNqTyxTQUFTLEdBQUNwSCxRQUFRLENBQUNxVixJQUFJLENBQUNqTyxTQUFTLENBQUNkLE9BQU8sQ0FBQyxlQUFlLEVBQUMsWUFBWSxDQUFDO0VBQUEsQ0FBQyxFQUFDMUcsQ0FBQyxDQUFDeVEsU0FBUyxDQUFDc0YsTUFBTSxHQUFDLFVBQVN6SSxDQUFDLEVBQUM7SUFBQyxPQUFPLElBQUksQ0FBQ3FHLFFBQVEsR0FBQ3JHLENBQUMsRUFBQ00sQ0FBQyxDQUFDK0UsT0FBTyxDQUFDLFVBQVUsRUFBQ3JGLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzdGLE1BQU0sQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDekgsQ0FBQyxDQUFDeVEsU0FBUyxDQUFDdkosT0FBTyxHQUFDLFlBQVU7SUFBQyxJQUFHO01BQUMsSUFBSSxDQUFDcU8sVUFBVSxDQUFDLENBQUMsQ0FBQ1MsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDVixVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQyxRQUFNakksQ0FBQyxFQUFDO01BQUNLLENBQUMsR0FBQ0wsQ0FBQztJQUFBO0lBQUMsT0FBTyxJQUFJLENBQUM5QyxFQUFFLEdBQUMsS0FBSyxDQUFDO0VBQUEsQ0FBQyxFQUFDeEssQ0FBQyxDQUFDeVEsU0FBUyxDQUFDaEosTUFBTSxHQUFDLFlBQVU7SUFBQyxJQUFJNkYsQ0FBQyxFQUFDNUssQ0FBQyxFQUFDaUwsQ0FBQyxFQUFDSSxDQUFDLEVBQUNMLENBQUMsRUFBQ0wsQ0FBQyxFQUFDSSxDQUFDO0lBQUMsSUFBRyxJQUFJLElBQUVyTixRQUFRLENBQUMyUyxhQUFhLENBQUNqRSxDQUFDLENBQUNuTSxNQUFNLENBQUMsRUFBQyxPQUFNLENBQUMsQ0FBQztJQUFDLEtBQUkySyxDQUFDLEdBQUMsSUFBSSxDQUFDaUksVUFBVSxDQUFDLENBQUMsRUFBQ3hILENBQUMsR0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDNEYsUUFBUSxHQUFDLFVBQVUsRUFBQ2pHLENBQUMsR0FBQyxDQUFDLEVBQUNMLENBQUMsR0FBQyxDQUFDSSxDQUFDLEdBQUMsQ0FBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsV0FBVyxDQUFDLEVBQUU1SyxNQUFNLEVBQUM2SyxDQUFDLEdBQUNMLENBQUMsRUFBQ0ssQ0FBQyxFQUFFLEVBQUNoTCxDQUFDLEdBQUMrSyxDQUFDLENBQUNDLENBQUMsQ0FBQyxFQUFDSixDQUFDLENBQUM0SSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM1USxLQUFLLENBQUM1QyxDQUFDLENBQUMsR0FBQ3FMLENBQUM7SUFBQyxPQUFNLENBQUMsQ0FBQyxJQUFJLENBQUNvSSxvQkFBb0IsSUFBRSxJQUFJLENBQUNBLG9CQUFvQixHQUFDLENBQUMsS0FBRyxJQUFJLENBQUN4QyxRQUFRLEdBQUMsQ0FBQyxNQUFJckcsQ0FBQyxDQUFDNEksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxZQUFZLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDekMsUUFBUSxJQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUcsSUFBRSxJQUFJLENBQUNBLFFBQVEsR0FBQ2hHLENBQUMsR0FBQyxJQUFJLElBQUVBLENBQUMsR0FBQyxJQUFJLENBQUNnRyxRQUFRLEdBQUMsRUFBRSxHQUFDLEdBQUcsR0FBQyxFQUFFLEVBQUNoRyxDQUFDLElBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQ2dHLFFBQVEsQ0FBQyxFQUFDckcsQ0FBQyxDQUFDNEksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxZQUFZLENBQUMsZUFBZSxFQUFDLEVBQUUsR0FBQ3pJLENBQUMsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQytFLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDLEVBQUMsSUFBSSxDQUFDd0Msb0JBQW9CLEdBQUMsSUFBSSxDQUFDeEMsUUFBUTtFQUFBLENBQUMsRUFBQzNULENBQUMsQ0FBQ3lRLFNBQVMsQ0FBQzRGLElBQUksR0FBQyxZQUFVO0lBQUMsT0FBTyxHQUFHLElBQUUsSUFBSSxDQUFDMUMsUUFBUTtFQUFBLENBQUMsRUFBQ25HLENBQUMsR0FBQ3hOLENBQUMsRUFBQzRULEVBQUUsQ0FBQ25ELFNBQVMsQ0FBQ2tDLE9BQU8sR0FBQyxVQUFTckYsQ0FBQyxFQUFDNUssQ0FBQyxFQUFDO0lBQUMsSUFBSWlMLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTCxDQUFDLEVBQUNMLENBQUMsRUFBQ0ksQ0FBQztJQUFDLElBQUcsSUFBSSxJQUFFLElBQUksQ0FBQ3lGLFFBQVEsQ0FBQzVGLENBQUMsQ0FBQyxFQUFDO01BQUMsS0FBSUcsQ0FBQyxHQUFDLEVBQUUsRUFBQ00sQ0FBQyxHQUFDLENBQUMsRUFBQ0wsQ0FBQyxHQUFDLENBQUNMLENBQUMsR0FBQyxJQUFJLENBQUM2RixRQUFRLENBQUM1RixDQUFDLENBQUMsRUFBRXpLLE1BQU0sRUFBQ2tMLENBQUMsR0FBQ0wsQ0FBQyxFQUFDSyxDQUFDLEVBQUUsRUFBQ0osQ0FBQyxHQUFDTixDQUFDLENBQUNVLENBQUMsQ0FBQyxFQUFDTixDQUFDLENBQUN6QyxJQUFJLENBQUMyQyxDQUFDLENBQUM0QyxJQUFJLENBQUMsSUFBSSxFQUFDN04sQ0FBQyxDQUFDLENBQUM7TUFBQyxPQUFPK0ssQ0FBQztJQUFBO0VBQUMsQ0FBQyxFQUFDbUcsRUFBRSxDQUFDbkQsU0FBUyxDQUFDbE8sRUFBRSxHQUFDLFVBQVMrSyxDQUFDLEVBQUM1SyxDQUFDLEVBQUM7SUFBQyxJQUFJaUwsQ0FBQztJQUFDLE9BQU8sSUFBSSxJQUFFLENBQUNBLENBQUMsR0FBQyxJQUFJLENBQUN1RixRQUFRLEVBQUU1RixDQUFDLENBQUMsS0FBR0ssQ0FBQyxDQUFDTCxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUM0RixRQUFRLENBQUM1RixDQUFDLENBQUMsQ0FBQ3RDLElBQUksQ0FBQ3RJLENBQUMsQ0FBQztFQUFBLENBQUMsRUFBQ2dMLENBQUMsR0FBQ2tHLEVBQUUsRUFBQ2xFLENBQUMsR0FBQ3hPLE1BQU0sQ0FBQzZTLGNBQWMsRUFBQ3RFLENBQUMsR0FBQ3ZPLE1BQU0sQ0FBQzhTLGNBQWMsRUFBQ3hFLENBQUMsR0FBQ3RPLE1BQU0sQ0FBQytTLFNBQVMsRUFBQ3pQLENBQUMsR0FBQyxTQUFBQSxFQUFTOEksQ0FBQyxFQUFDNUssQ0FBQyxFQUFDO0lBQUMsSUFBSWlMLENBQUM7TUFBQ0ksQ0FBQyxHQUFDLEVBQUU7SUFBQyxLQUFJSixDQUFDLElBQUlqTCxDQUFDLENBQUMrTixTQUFTLEVBQUMsSUFBRztNQUFDLElBQUksSUFBRW5ELENBQUMsQ0FBQ0ssQ0FBQyxDQUFDLElBQUUsVUFBVSxJQUFFLE9BQU9qTCxDQUFDLENBQUNpTCxDQUFDLENBQUMsR0FBQyxVQUFVLElBQUUsT0FBTzJJLE1BQU0sQ0FBQ0MsY0FBYyxHQUFDeEksQ0FBQyxDQUFDL0MsSUFBSSxDQUFDc0wsTUFBTSxDQUFDQyxjQUFjLENBQUNqSixDQUFDLEVBQUNLLENBQUMsRUFBQztRQUFDN00sR0FBRyxFQUFDLFVBQVN3TSxDQUFDLEVBQUM7VUFBQyxPQUFPLFlBQVU7WUFBQyxPQUFPNUssQ0FBQyxDQUFDK04sU0FBUyxDQUFDbkQsQ0FBQyxDQUFDO1VBQUEsQ0FBQztRQUFBLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO1FBQUM2SSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQUNDLFVBQVUsRUFBQyxDQUFDO01BQUMsQ0FBQyxDQUFDLENBQUMsR0FBQzFJLENBQUMsQ0FBQy9DLElBQUksQ0FBQ3NDLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDLEdBQUNqTCxDQUFDLENBQUMrTixTQUFTLENBQUM5QyxDQUFDLENBQUMsQ0FBQyxHQUFDSSxDQUFDLENBQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFBQSxDQUFDLFFBQU1zQyxDQUFDLEVBQUM7TUFBQyxDQUFDO0lBQUE7SUFBQyxPQUFPUyxDQUFDO0VBQUEsQ0FBQyxFQUFDWSxDQUFDLEdBQUMsRUFBRSxFQUFDZixDQUFDLENBQUM4SSxNQUFNLEdBQUMsWUFBVTtJQUFDLElBQUlwSixDQUFDLEdBQUM5TixTQUFTLENBQUMsQ0FBQyxDQUFDO01BQUNrRCxDQUFDLEdBQUMsQ0FBQyxJQUFFbEQsU0FBUyxDQUFDcUQsTUFBTSxHQUFDcU4sQ0FBQyxDQUFDSyxJQUFJLENBQUMvUSxTQUFTLEVBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRTtJQUFDLE9BQU9tUCxDQUFDLENBQUNnSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUNqVSxDQUFDLEdBQUM0SyxDQUFDLENBQUMvTixLQUFLLENBQUMsSUFBSSxFQUFDbUQsQ0FBQyxDQUFDLEVBQUNpTSxDQUFDLENBQUNpSSxLQUFLLENBQUMsQ0FBQyxFQUFDbFUsQ0FBQztFQUFBLENBQUMsRUFBQ2tMLENBQUMsQ0FBQ2lKLEtBQUssR0FBQyxZQUFVO0lBQUMsSUFBSXZKLENBQUMsR0FBQzlOLFNBQVMsQ0FBQyxDQUFDLENBQUM7TUFBQ2tELENBQUMsR0FBQyxDQUFDLElBQUVsRCxTQUFTLENBQUNxRCxNQUFNLEdBQUNxTixDQUFDLENBQUNLLElBQUksQ0FBQy9RLFNBQVMsRUFBQyxDQUFDLENBQUMsR0FBQyxFQUFFO0lBQUMsT0FBT21QLENBQUMsQ0FBQ2dJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQ2pVLENBQUMsR0FBQzRLLENBQUMsQ0FBQy9OLEtBQUssQ0FBQyxJQUFJLEVBQUNtRCxDQUFDLENBQUMsRUFBQ2lNLENBQUMsQ0FBQ2lJLEtBQUssQ0FBQyxDQUFDLEVBQUNsVSxDQUFDO0VBQUEsQ0FBQyxFQUFDME0sQ0FBQyxHQUFDLFNBQUFBLEVBQVM5QixDQUFDLEVBQUM7SUFBQyxJQUFHLElBQUksSUFBRUEsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEVBQUMsT0FBTyxLQUFHcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE9BQU0sT0FBTztJQUFDLElBQUcsQ0FBQ0EsQ0FBQyxDQUFDOUwsTUFBTSxJQUFFaU0sQ0FBQyxDQUFDM0wsSUFBSSxFQUFDO01BQUMsSUFBRyxRQUFRLEtBQUdtSyxDQUFDLElBQUV3QixDQUFDLENBQUMzTCxJQUFJLENBQUM0TyxlQUFlLEVBQUMsT0FBTSxDQUFDLENBQUM7TUFBQyxJQUFHekUsQ0FBQyxHQUFDQSxDQUFDLENBQUN3SixXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRW5HLENBQUMsQ0FBQ0osSUFBSSxDQUFDekIsQ0FBQyxDQUFDM0wsSUFBSSxDQUFDMk8sWUFBWSxFQUFDeEUsQ0FBQyxDQUFDLEVBQUMsT0FBTSxDQUFDLENBQUM7SUFBQTtJQUFDLE9BQU0sQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDZ0QsQ0FBQyxDQUFDdUQsRUFBRSxFQUFDbkcsQ0FBQyxDQUFDLEVBQUNKLENBQUMsR0FBQ3VHLEVBQUUsRUFBQ2pFLENBQUMsR0FBQyxJQUFJLEVBQUNULENBQUMsR0FBQyxTQUFBQSxFQUFTN0IsQ0FBQyxFQUFDO0lBQUMsS0FBSSxJQUFJNUssQ0FBQyxFQUFDaUwsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDM0wsSUFBSSxDQUFDNk8sVUFBVSxFQUFDakUsQ0FBQyxHQUFDLENBQUMsRUFBQ0wsQ0FBQyxHQUFDQyxDQUFDLENBQUM5SyxNQUFNLEVBQUNrTCxDQUFDLEdBQUNMLENBQUMsRUFBQ0ssQ0FBQyxFQUFFLEVBQUMsSUFBRyxRQUFRLElBQUUsUUFBT3JMLENBQUMsR0FBQ2lMLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsRUFBQztNQUFDLElBQUcsQ0FBQyxDQUFDLEtBQUdULENBQUMsQ0FBQ3NELE9BQU8sQ0FBQ2xPLENBQUMsQ0FBQyxFQUFDLE9BQU0sQ0FBQyxDQUFDO0lBQUEsQ0FBQyxNQUFLLElBQUdBLENBQUMsQ0FBQ3FVLElBQUksQ0FBQ3pKLENBQUMsQ0FBQyxFQUFDLE9BQU0sQ0FBQyxDQUFDO0lBQUMsT0FBTSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsQ0FBQ21CLENBQUMsR0FBQyxTQUFBQSxFQUFBLEVBQVU7SUFBQyxPQUFPbUIsQ0FBQyxHQUFDLElBQUksSUFBRUEsQ0FBQyxHQUFDLElBQUl0QyxDQUFDLENBQUQsQ0FBQyxHQUFDc0MsQ0FBQztFQUFBLENBQUMsRUFBRSxDQUFDLENBQUNyTixFQUFFLENBQUMsU0FBUyxFQUFDLFVBQVMrSyxDQUFDLEVBQUM7SUFBQyxJQUFJRCxDQUFDO01BQUNJLENBQUMsR0FBQ0gsQ0FBQyxDQUFDbEssSUFBSTtNQUFDNEssQ0FBQyxHQUFDVixDQUFDLENBQUN3RyxPQUFPO01BQUNwUixDQUFDLEdBQUM0SyxDQUFDLENBQUNqSyxHQUFHO0lBQUMsSUFBRyxDQUFDOEwsQ0FBQyxDQUFDek0sQ0FBQyxDQUFDLEVBQUMsT0FBT2tMLENBQUMsQ0FBQ29KLE9BQU8sSUFBRSxDQUFDLENBQUMsS0FBR2xJLENBQUMsQ0FBQ3dDLHFCQUFxQixJQUFFLE9BQU8sS0FBR2xDLENBQUMsQ0FBQzNCLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxJQUFFSixDQUFDLEdBQUM3TixTQUFTLEVBQUMsU0FBUyxJQUFFLFFBQU9rRCxDQUFDLEdBQUNvTSxDQUFDLENBQUN3QyxxQkFBcUIsSUFBRSxDQUFDLENBQUMsS0FBRzVPLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ3pCLFVBQVUsQ0FBQyxZQUFVO01BQUMsSUFBSXFNLENBQUM7UUFBQzVLLENBQUM7UUFBQ2lMLENBQUM7UUFBQ0ksQ0FBQztRQUFDTCxDQUFDLEdBQUMsUUFBUSxLQUFHRCxDQUFDLEdBQUNPLENBQUMsQ0FBQzZHLFVBQVUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFFbkgsQ0FBQyxHQUFDTSxDQUFDLENBQUM2RyxVQUFVLENBQUMsSUFBRW5ILENBQUMsR0FBQyxDQUFDO01BQUMsSUFBR0EsQ0FBQyxFQUFDO1FBQUMsS0FBSUUsQ0FBQyxDQUFDcUosT0FBTyxDQUFDLENBQUMsRUFBQ2xKLENBQUMsR0FBQyxFQUFFLEVBQUNULENBQUMsR0FBQyxDQUFDLEVBQUM1SyxDQUFDLEdBQUMsQ0FBQ2lMLENBQUMsR0FBQ0MsQ0FBQyxDQUFDc0osT0FBTyxFQUFFclUsTUFBTSxFQUFDeUssQ0FBQyxHQUFDNUssQ0FBQyxFQUFDNEssQ0FBQyxFQUFFLEVBQUM7VUFBQyxJQUFHLENBQUMrQixDQUFDLEdBQUMxQixDQUFDLENBQUNMLENBQUMsQ0FBQyxhQUFZQyxDQUFDLEVBQUM7WUFBQzhCLENBQUMsQ0FBQ2dGLEtBQUssQ0FBQzlVLEtBQUssQ0FBQzhQLENBQUMsRUFBQ2hDLENBQUMsQ0FBQztZQUFDO1VBQUs7VUFBQ1UsQ0FBQyxDQUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUE7UUFBQyxPQUFPK0MsQ0FBQztNQUFBO0lBQUMsQ0FBQyxFQUFDckwsQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUMsRUFBQ3lSLEVBQUUsQ0FBQzFELFNBQVMsQ0FBQzRELEtBQUssR0FBQyxVQUFTL0csQ0FBQyxFQUFDO0lBQUMsSUFBSTVLLENBQUMsR0FBQzRLLENBQUMsQ0FBQ2xLLElBQUk7TUFBQ3VLLENBQUMsR0FBQ0wsQ0FBQyxDQUFDd0csT0FBTztNQUFDeEcsQ0FBQyxHQUFDQSxDQUFDLENBQUNqSyxHQUFHO0lBQUMsSUFBRyxDQUFDOEwsQ0FBQyxDQUFDN0IsQ0FBQyxDQUFDLEVBQUMsT0FBT0ssQ0FBQyxHQUFDLEtBQUksUUFBUSxLQUFHakwsQ0FBQyxHQUFDcUwsQ0FBQyxHQUFDQyxDQUFDLEVBQUVMLENBQUMsRUFBQyxJQUFJLENBQUN5RyxRQUFRLENBQUMsRUFBQyxJQUFJLENBQUM3QyxRQUFRLENBQUN2RyxJQUFJLENBQUMyQyxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUN3RyxFQUFFLENBQUMxRCxTQUFTLENBQUMyRCxRQUFRLEdBQUMsVUFBUzFSLENBQUMsRUFBQztJQUFDLE9BQU8sSUFBSSxDQUFDNk8sUUFBUSxHQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDcEwsTUFBTSxDQUFDLFVBQVNtSCxDQUFDLEVBQUM7TUFBQyxPQUFPQSxDQUFDLEtBQUc1SyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDNkssQ0FBQyxHQUFDNEcsRUFBRSxFQUFDbkcsQ0FBQyxHQUFDLFNBQUFBLEVBQVN0TCxDQUFDLEVBQUNpTCxDQUFDLEVBQUM7SUFBQyxJQUFJTCxDQUFDO01BQUNTLENBQUM7TUFBQ0wsQ0FBQztNQUFDTCxDQUFDO01BQUNJLENBQUMsR0FBQyxJQUFJO0lBQUMsSUFBRyxJQUFJLENBQUNrRyxRQUFRLEdBQUMsQ0FBQyxFQUFDLElBQUksSUFBRXpTLE1BQU0sQ0FBQ2lXLGFBQWEsRUFBQyxLQUFJbEosQ0FBQyxDQUFDdkwsQ0FBQyxFQUFDLFVBQVUsRUFBQyxVQUFTNEssQ0FBQyxFQUFDO01BQUMsT0FBT0EsQ0FBQyxDQUFDOEosZ0JBQWdCLEdBQUMzSixDQUFDLENBQUNrRyxRQUFRLEdBQUMsR0FBRyxHQUFDckcsQ0FBQyxDQUFDK0osTUFBTSxHQUFDL0osQ0FBQyxDQUFDZ0ssS0FBSyxHQUFDN0osQ0FBQyxDQUFDa0csUUFBUSxHQUFDbEcsQ0FBQyxDQUFDa0csUUFBUSxHQUFDLENBQUMsR0FBRyxHQUFDbEcsQ0FBQyxDQUFDa0csUUFBUSxJQUFFLENBQUM7SUFBQSxDQUFDLENBQUMsRUFBQ3JHLENBQUMsR0FBQyxDQUFDLEVBQUNTLENBQUMsR0FBQyxDQUFDVixDQUFDLEdBQUMsQ0FBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsRUFBRXhLLE1BQU0sRUFBQ3lLLENBQUMsR0FBQ1MsQ0FBQyxFQUFDVCxDQUFDLEVBQUUsRUFBQ1csQ0FBQyxDQUFDdkwsQ0FBQyxFQUFDMkssQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBQyxZQUFVO01BQUMsT0FBT0ssQ0FBQyxDQUFDRixDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDa0csUUFBUSxHQUFDLEdBQUc7SUFBQSxDQUFDLENBQUMsQ0FBQyxLQUFLakcsQ0FBQyxHQUFDaEwsQ0FBQyxDQUFDb1Msa0JBQWtCLEVBQUNwUyxDQUFDLENBQUNvUyxrQkFBa0IsR0FBQyxZQUFVO01BQUMsSUFBSXhILENBQUM7TUFBQyxPQUFPLENBQUMsTUFBSUEsQ0FBQyxHQUFDNUssQ0FBQyxDQUFDbVMsVUFBVSxDQUFDLElBQUUsQ0FBQyxLQUFHdkgsQ0FBQyxJQUFFSyxDQUFDLENBQUNGLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUNrRyxRQUFRLEdBQUMsR0FBRyxJQUFFLENBQUMsS0FBR2pSLENBQUMsQ0FBQ21TLFVBQVUsS0FBR3BILENBQUMsQ0FBQ2tHLFFBQVEsR0FBQyxFQUFFLENBQUMsRUFBQyxVQUFVLElBQUUsT0FBT2pHLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbk8sS0FBSyxDQUFDLElBQUksRUFBQ0MsU0FBUyxDQUFDLEdBQUMsS0FBSyxDQUFDO0lBQUEsQ0FBQztFQUFBLENBQUMsRUFBQ3VPLENBQUMsR0FBQyxTQUFBQSxFQUFTVCxDQUFDLEVBQUM1SyxDQUFDLEVBQUM7SUFBQyxLQUFJLElBQUlpTCxDQUFDLEVBQUNJLENBQUMsR0FBQyxJQUFJLEVBQUNMLENBQUMsR0FBQyxJQUFJLENBQUNpRyxRQUFRLEdBQUMsQ0FBQyxFQUFDdEcsQ0FBQyxHQUFDLENBQUNNLENBQUMsR0FBQyxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsRUFBRTlLLE1BQU0sRUFBQzZLLENBQUMsR0FBQ0wsQ0FBQyxFQUFDSyxDQUFDLEVBQUUsRUFBQ08sQ0FBQyxDQUFDWCxDQUFDLEVBQUNLLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEVBQUMsWUFBVTtNQUFDLE9BQU9oTCxDQUFDLENBQUNxTCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDNEYsUUFBUSxHQUFDLEdBQUc7SUFBQSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNXLEVBQUUsQ0FBQzdELFNBQVMsQ0FBQzJELFFBQVEsR0FBQyxVQUFTMVIsQ0FBQyxFQUFDO0lBQUMsT0FBTyxJQUFJLENBQUM2TyxRQUFRLEdBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUNwTCxNQUFNLENBQUMsVUFBU21ILENBQUMsRUFBQztNQUFDLE9BQU9BLENBQUMsS0FBRzVLLENBQUM7SUFBQSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUM4TCxDQUFDLEdBQUM4RixFQUFFLEVBQUNDLEVBQUUsQ0FBQzlELFNBQVMsQ0FBQ2lFLEtBQUssR0FBQyxZQUFVO0lBQUMsSUFBSXBILENBQUMsR0FBQyxJQUFJO0lBQUMsT0FBT2xOLFFBQVEsQ0FBQzJTLGFBQWEsQ0FBQyxJQUFJLENBQUN5QixRQUFRLENBQUMsR0FBQyxJQUFJLENBQUM2QixJQUFJLENBQUMsQ0FBQyxHQUFDcFYsVUFBVSxDQUFDLFlBQVU7TUFBQyxPQUFPcU0sQ0FBQyxDQUFDb0gsS0FBSyxDQUFDLENBQUM7SUFBQSxDQUFDLEVBQUM1RixDQUFDLENBQUN5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQztFQUFBLENBQUMsRUFBQytDLEVBQUUsQ0FBQzlELFNBQVMsQ0FBQzRGLElBQUksR0FBQyxZQUFVO0lBQUMsT0FBTyxJQUFJLENBQUM1QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLENBQUNBLGdCQUFnQixHQUFDLElBQUksRUFBQyxJQUFJLENBQUNkLFFBQVEsR0FBQyxHQUFHO0VBQUEsQ0FBQyxFQUFDbEcsQ0FBQyxHQUFDOEcsRUFBRSxFQUFDSSxFQUFFLENBQUNsRSxTQUFTLENBQUNtRSxNQUFNLEdBQUM7SUFBQzJDLE9BQU8sRUFBQyxDQUFDO0lBQUNDLFdBQVcsRUFBQyxFQUFFO0lBQUNwRCxRQUFRLEVBQUM7RUFBRyxDQUFDLEVBQUNuRSxDQUFDLEdBQUMwRSxFQUFFLEVBQUNyRSxDQUFDLEdBQUMsU0FBQUEsRUFBQSxFQUFVO0lBQUMsSUFBSTVOLENBQUM7TUFBQ2lMLENBQUM7TUFBQ0ksQ0FBQztNQUFDTCxDQUFDO01BQUNMLENBQUM7TUFBQ0ksQ0FBQyxHQUFDLElBQUk7SUFBQyxJQUFJLENBQUNrRyxRQUFRLEdBQUMsQ0FBQyxFQUFDdEcsQ0FBQyxHQUFDLEVBQUUsRUFBQ0ssQ0FBQyxHQUFDLENBQUMsRUFBQ0ssQ0FBQyxHQUFDYyxDQUFDLENBQUMsQ0FBQyxFQUFDbEIsQ0FBQyxHQUFDeEUsV0FBVyxDQUFDLFlBQVU7TUFBQyxJQUFJbUUsQ0FBQyxHQUFDdUIsQ0FBQyxDQUFDLENBQUMsR0FBQ2QsQ0FBQyxHQUFDLEVBQUU7TUFBQyxPQUFPQSxDQUFDLEdBQUNjLENBQUMsQ0FBQyxDQUFDLEVBQUN4QixDQUFDLENBQUNyQyxJQUFJLENBQUNzQyxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxDQUFDeEssTUFBTSxHQUFDaU0sQ0FBQyxDQUFDNEMsUUFBUSxDQUFDRSxXQUFXLElBQUV2RSxDQUFDLENBQUN1SixLQUFLLENBQUMsQ0FBQyxFQUFDbFUsQ0FBQyxHQUFDd0wsQ0FBQyxDQUFDYixDQUFDLENBQUMsRUFBQyxFQUFFSyxDQUFDLElBQUVvQixDQUFDLENBQUM0QyxRQUFRLENBQUNDLFVBQVUsSUFBRWpQLENBQUMsR0FBQ29NLENBQUMsQ0FBQzRDLFFBQVEsQ0FBQ0csWUFBWSxJQUFFcEUsQ0FBQyxDQUFDa0csUUFBUSxHQUFDLEdBQUcsRUFBQzhELGFBQWEsQ0FBQzlKLENBQUMsQ0FBQyxJQUFFRixDQUFDLENBQUNrRyxRQUFRLEdBQUMsQ0FBQyxJQUFFalIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUc7SUFBQSxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBQUEsQ0FBQyxFQUFDcVMsRUFBRSxDQUFDdEUsU0FBUyxDQUFDaUgsSUFBSSxHQUFDLFVBQVNwSyxDQUFDLEVBQUM1SyxDQUFDLEVBQUM7SUFBQyxPQUFPLEdBQUcsS0FBR0EsQ0FBQyxHQUFDLElBQUksSUFBRUEsQ0FBQyxHQUFDc00sQ0FBQyxDQUFDLElBQUksQ0FBQ2dHLE1BQU0sRUFBQyxVQUFVLENBQUMsR0FBQ3RTLENBQUMsQ0FBQyxLQUFHLElBQUksQ0FBQzJULElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDM1QsQ0FBQyxLQUFHLElBQUksQ0FBQ3VTLElBQUksR0FBQyxJQUFJLENBQUNDLGVBQWUsSUFBRTVILENBQUMsSUFBRSxJQUFJLENBQUM0SCxlQUFlLEtBQUcsSUFBSSxDQUFDQyxJQUFJLEdBQUMsQ0FBQ3pTLENBQUMsR0FBQyxJQUFJLENBQUN1UyxJQUFJLElBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUMsRUFBQyxJQUFJLENBQUNFLE9BQU8sR0FBQyxDQUFDMVMsQ0FBQyxHQUFDLElBQUksQ0FBQ2lSLFFBQVEsSUFBRTdFLENBQUMsQ0FBQ2dDLFdBQVcsRUFBQyxJQUFJLENBQUNvRSxlQUFlLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0QsSUFBSSxHQUFDdlMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQyxJQUFJLENBQUNpUixRQUFRLEtBQUcsSUFBSSxDQUFDQSxRQUFRLElBQUUsSUFBSSxDQUFDeUIsT0FBTyxHQUFDOUgsQ0FBQyxDQUFDLEVBQUM1SyxDQUFDLEdBQUMsQ0FBQyxHQUFDbVEsSUFBSSxDQUFDOEUsR0FBRyxDQUFDLElBQUksQ0FBQ2hFLFFBQVEsR0FBQyxHQUFHLEVBQUM3RSxDQUFDLENBQUNxQyxVQUFVLENBQUMsRUFBQyxJQUFJLENBQUN3QyxRQUFRLElBQUVqUixDQUFDLEdBQUMsSUFBSSxDQUFDeVMsSUFBSSxHQUFDN0gsQ0FBQyxFQUFDLElBQUksQ0FBQ3FHLFFBQVEsR0FBQ2QsSUFBSSxDQUFDK0UsR0FBRyxDQUFDLElBQUksQ0FBQ3ZDLFlBQVksR0FBQ3ZHLENBQUMsQ0FBQ29DLG1CQUFtQixFQUFDLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFDZCxJQUFJLENBQUNnRixHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2xFLFFBQVEsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFDZCxJQUFJLENBQUMrRSxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQ2pFLFFBQVEsQ0FBQyxFQUFDLElBQUksQ0FBQzBCLFlBQVksR0FBQyxJQUFJLENBQUMxQixRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRO0VBQUEsQ0FBQyxFQUFDN0YsQ0FBQyxHQUFDaUgsRUFBRSxFQUFDM0csQ0FBQyxHQUFDMUwsQ0FBQyxHQUFDNk0sQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDZSxDQUFDLEdBQUNJLENBQUMsR0FBQyxJQUFJLEVBQUMxQixDQUFDLENBQUNvSixPQUFPLEdBQUMsQ0FBQyxDQUFDLEVBQUN0SSxDQUFDLEdBQUMsU0FBQUEsRUFBQSxFQUFVO0lBQUMsSUFBR0ksQ0FBQyxDQUFDdUMsa0JBQWtCLEVBQUMsT0FBT3pELENBQUMsQ0FBQ3FKLE9BQU8sQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDLElBQUksSUFBRS9WLE1BQU0sQ0FBQzRXLE9BQU8sQ0FBQ0MsU0FBUyxLQUFHakksQ0FBQyxHQUFDNU8sTUFBTSxDQUFDNFcsT0FBTyxDQUFDQyxTQUFTLEVBQUM3VyxNQUFNLENBQUM0VyxPQUFPLENBQUNDLFNBQVMsR0FBQyxZQUFVO0lBQUMsT0FBT3JKLENBQUMsQ0FBQyxDQUFDLEVBQUNvQixDQUFDLENBQUN2USxLQUFLLENBQUMyQixNQUFNLENBQUM0VyxPQUFPLEVBQUN0WSxTQUFTLENBQUM7RUFBQSxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUUwQixNQUFNLENBQUM0VyxPQUFPLENBQUNFLFlBQVksS0FBR2hJLENBQUMsR0FBQzlPLE1BQU0sQ0FBQzRXLE9BQU8sQ0FBQ0UsWUFBWSxFQUFDOVcsTUFBTSxDQUFDNFcsT0FBTyxDQUFDRSxZQUFZLEdBQUMsWUFBVTtJQUFDLE9BQU90SixDQUFDLENBQUMsQ0FBQyxFQUFDc0IsQ0FBQyxDQUFDelEsS0FBSyxDQUFDMkIsTUFBTSxDQUFDNFcsT0FBTyxFQUFDdFksU0FBUyxDQUFDO0VBQUEsQ0FBQyxDQUFDLEVBQUNxTyxDQUFDLEdBQUM7SUFBQzFLLElBQUksRUFBQ29LLENBQUM7SUFBQ2dFLFFBQVEsRUFBQy9DLENBQUM7SUFBQ3BPLFFBQVEsRUFBQzZQLENBQUM7SUFBQ3lCLFFBQVEsRUFBQ3BCO0VBQUMsQ0FBQyxFQUFDLENBQUMxQixDQUFDLEdBQUMsU0FBQUEsRUFBQSxFQUFVO0lBQUMsSUFBSXRCLENBQUMsRUFBQzVLLENBQUMsRUFBQ2lMLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTCxDQUFDLEVBQUNMLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTyxDQUFDO0lBQUMsS0FBSUosQ0FBQyxDQUFDc0osT0FBTyxHQUFDNUgsQ0FBQyxHQUFDLEVBQUUsRUFBQzVNLENBQUMsR0FBQyxDQUFDLEVBQUNxTCxDQUFDLEdBQUMsQ0FBQ1YsQ0FBQyxHQUFDLENBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLEVBQUV4SyxNQUFNLEVBQUNILENBQUMsR0FBQ3FMLENBQUMsRUFBQ3JMLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFHb00sQ0FBQyxDQUFDeEIsQ0FBQyxHQUFDRCxDQUFDLENBQUMzSyxDQUFDLENBQUMsQ0FBQyxJQUFFNE0sQ0FBQyxDQUFDdEUsSUFBSSxDQUFDLElBQUk2QyxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFDd0IsQ0FBQyxDQUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLEtBQUlLLENBQUMsR0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQyxDQUFDTSxDQUFDLEdBQUMsSUFBSSxLQUFHUCxDQUFDLEdBQUNxQixDQUFDLENBQUNtSixZQUFZLENBQUMsR0FBQ3hLLENBQUMsR0FBQyxFQUFFLEVBQUU1SyxNQUFNLEVBQUM4SyxDQUFDLEdBQUNELENBQUMsRUFBQ0MsQ0FBQyxFQUFFLEVBQUMwQixDQUFDLEdBQUNyQixDQUFDLENBQUNMLENBQUMsQ0FBQyxFQUFDMkIsQ0FBQyxDQUFDdEUsSUFBSSxDQUFDLElBQUlxRSxDQUFDLENBQUNQLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBT2xCLENBQUMsQ0FBQ3NLLEdBQUcsR0FBQy9KLENBQUMsR0FBQyxJQUFJWCxDQUFDLENBQUQsQ0FBQyxFQUFDMEIsQ0FBQyxHQUFDLEVBQUUsRUFBQ0ssQ0FBQyxHQUFDLElBQUl6QixDQUFDLENBQUQsQ0FBQztFQUFBLENBQUMsRUFBRSxDQUFDLEVBQUNGLENBQUMsQ0FBQ3VLLElBQUksR0FBQyxZQUFVO0lBQUMsT0FBT3ZLLENBQUMsQ0FBQytFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQy9FLENBQUMsQ0FBQ29KLE9BQU8sR0FBQyxDQUFDLENBQUMsRUFBQzdJLENBQUMsQ0FBQ2pILE9BQU8sQ0FBQyxDQUFDLEVBQUNrSCxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxJQUFFMUwsQ0FBQyxLQUFHLFVBQVUsSUFBRSxPQUFPMkwsQ0FBQyxJQUFFQSxDQUFDLENBQUMzTCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFDa00sQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUNoQixDQUFDLENBQUNxSixPQUFPLEdBQUMsWUFBVTtJQUFDLE9BQU9ySixDQUFDLENBQUMrRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMvRSxDQUFDLENBQUN1SyxJQUFJLENBQUMsQ0FBQyxFQUFDdkssQ0FBQyxDQUFDd0ssS0FBSyxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUN4SyxDQUFDLENBQUN5SyxFQUFFLEdBQUMsWUFBVTtJQUFDLElBQUk3VCxDQUFDO0lBQUMsT0FBT29KLENBQUMsQ0FBQ29KLE9BQU8sR0FBQyxDQUFDLENBQUMsRUFBQzdJLENBQUMsQ0FBQzFHLE1BQU0sQ0FBQyxDQUFDLEVBQUNqRCxDQUFDLEdBQUNxSyxDQUFDLENBQUMsQ0FBQyxFQUFDVCxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMxTCxDQUFDLEdBQUN1TSxDQUFDLENBQUMsVUFBUzNCLENBQUMsRUFBQzVLLENBQUMsRUFBQztNQUFDeUwsQ0FBQyxDQUFDd0YsUUFBUTtNQUFDLEtBQUksSUFBSWhHLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTCxDQUFDLEVBQUNMLENBQUMsRUFBQ0ksQ0FBQyxFQUFDTyxDQUFDLEVBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDSyxDQUFDLEVBQUNJLENBQUMsRUFBQ0MsQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBQyxFQUFDSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNDLENBQUMsR0FBQ2YsQ0FBQyxHQUFDLENBQUMsRUFBQ2dCLENBQUMsR0FBQ2UsQ0FBQyxDQUFDek0sTUFBTSxFQUFDMEssQ0FBQyxHQUFDZ0IsQ0FBQyxFQUFDRCxDQUFDLEdBQUMsRUFBRWYsQ0FBQyxFQUFDLEtBQUk4QixDQUFDLEdBQUNDLENBQUMsQ0FBQ2hCLENBQUMsQ0FBQyxFQUFDYixDQUFDLEdBQUMsSUFBSSxJQUFFeUIsQ0FBQyxDQUFDWixDQUFDLENBQUMsR0FBQ1ksQ0FBQyxDQUFDWixDQUFDLENBQUMsR0FBQ1ksQ0FBQyxDQUFDWixDQUFDLENBQUMsR0FBQyxFQUFFLEVBQUNaLENBQUMsR0FBQ0YsQ0FBQyxHQUFDLENBQUMsRUFBQ0ssQ0FBQyxHQUFDLENBQUNFLENBQUMsR0FBQyxJQUFJLEtBQUdFLENBQUMsR0FBQ29CLENBQUMsQ0FBQ2tDLFFBQVEsQ0FBQyxHQUFDdEQsQ0FBQyxHQUFDLENBQUNvQixDQUFDLENBQUMsRUFBRXhNLE1BQU0sRUFBQzJLLENBQUMsR0FBQ0ssQ0FBQyxFQUFDSCxDQUFDLEdBQUMsRUFBRUYsQ0FBQyxFQUFDSCxDQUFDLEdBQUNVLENBQUMsQ0FBQ0wsQ0FBQyxDQUFDLEVBQUNXLENBQUMsSUFBRSxDQUFDaEIsQ0FBQyxHQUFDLElBQUksSUFBRUksQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQyxJQUFJSSxDQUFDLENBQUNULENBQUMsQ0FBQyxFQUFFZ0osSUFBSSxFQUFDaEosQ0FBQyxDQUFDZ0osSUFBSSxLQUFHbkksQ0FBQyxFQUFFLEVBQUNGLENBQUMsSUFBRVgsQ0FBQyxDQUFDcUssSUFBSSxDQUFDcEssQ0FBQyxDQUFDLENBQUM7TUFBQyxPQUFPSyxDQUFDLEdBQUNLLENBQUMsR0FBQ0UsQ0FBQyxFQUFDQyxDQUFDLENBQUM0SCxNQUFNLENBQUN4RyxDQUFDLENBQUNtSSxJQUFJLENBQUNwSyxDQUFDLEVBQUNLLENBQUMsQ0FBQyxDQUFDLEVBQUNRLENBQUMsQ0FBQ2tJLElBQUksQ0FBQyxDQUFDLElBQUVoSSxDQUFDLElBQUVELENBQUMsSUFBRUQsQ0FBQyxDQUFDNEgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDbkksQ0FBQyxDQUFDK0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDMVIsVUFBVSxDQUFDLFlBQVU7UUFBQyxPQUFPa04sQ0FBQyxDQUFDMkgsTUFBTSxDQUFDLENBQUMsRUFBQ2xJLENBQUMsQ0FBQ29KLE9BQU8sR0FBQyxDQUFDLENBQUMsRUFBQ3BKLENBQUMsQ0FBQytFLE9BQU8sQ0FBQyxNQUFNLENBQUM7TUFBQSxDQUFDLEVBQUNFLElBQUksQ0FBQ2dGLEdBQUcsQ0FBQy9JLENBQUMsQ0FBQ21DLFNBQVMsRUFBQzRCLElBQUksQ0FBQ2dGLEdBQUcsQ0FBQy9JLENBQUMsQ0FBQ2tDLE9BQU8sSUFBRW5DLENBQUMsQ0FBQyxDQUFDLEdBQUNySyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUU5QixDQUFDLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQztFQUFBLENBQUMsRUFBQ2tMLENBQUMsQ0FBQ3dLLEtBQUssR0FBQyxVQUFTOUssQ0FBQyxFQUFDO0lBQUNpQixFQUFDLENBQUNPLENBQUMsRUFBQ3hCLENBQUMsQ0FBQyxFQUFDTSxDQUFDLENBQUNvSixPQUFPLEdBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBRztNQUFDN0ksQ0FBQyxDQUFDMUcsTUFBTSxDQUFDLENBQUM7SUFBQSxDQUFDLFFBQU02RixDQUFDLEVBQUM7TUFBQ0ssQ0FBQyxHQUFDTCxDQUFDO0lBQUE7SUFBQyxPQUFPbE4sUUFBUSxDQUFDMlMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFFbkYsQ0FBQyxDQUFDK0UsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDL0UsQ0FBQyxDQUFDeUssRUFBRSxDQUFDLENBQUMsSUFBRXBYLFVBQVUsQ0FBQzJNLENBQUMsQ0FBQ3dLLEtBQUssRUFBQyxFQUFFLENBQUM7RUFBQSxDQUFDLEVBQUMsS0FBcUMsR0FBQ2xXLG1DQUFPLFlBQVU7SUFBQyxPQUFPMEwsQ0FBQztFQUFBLENBQUM7QUFBQSxrR0FBQyxHQUFDLENBQXNFO0FBQUEsQ0FBQyxDQUFDMkMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDTDlqWjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGx1Z2lucy9wYWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xvZ2luLnNjc3M/OTRhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS8gc3luYyBeXFwuXFwvLiokIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2xvZ2luLnNjc3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8tY29uZGVuc2VkXCI7IC8vIERlZmF1bHRzIHRvIHdlaWdodCA0MDBcclxuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLWNvbmRlbnNlZC80MDAuY3NzXCI7IC8vIFNwZWNpZnkgd2VpZ2h0XHJcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by1jb25kZW5zZWQvNDAwLWl0YWxpYy5jc3NcIjsgLy8gU3BlY2lmeSB3ZWlnaHQgYW5kIHN0eWxlXHJcblxyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5cclxuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXRzL2RhdGVwaWNrZXIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS9pMThuL2RhdGVwaWNrZXItZnIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS90aGVtZXMvYmFzZS9hbGwuY3NzJztcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICQoJ2JvZHknKS5iaW5kKCdjbGljayBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICB9KTtcclxuICBjaGVja0FjdGl2aXR5KDM2MDAwMDAsIDYwMDAwLCAwKTsgLy8gdGltZW91dCA9IDMwIG1pbnV0ZXMsIGludGVydmFsID0gMSBtaW51dGUuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tBY3Rpdml0eSh0aW1lb3V0LCBpbnRlcnZhbCwgZWxhcHNlZCkge1xyXG4gIGNvbnNvbGUubG9nKFwiWlpcIilcclxuICBpZiAoJC5hY3RpdmUpIHtcclxuICAgICAgZWxhcHNlZCA9IDA7XHJcbiAgICAgICQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICQuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dpbicpKTtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWQgPCB0aW1lb3V0KSB7XHJcbiAgICAgIGVsYXBzZWQgKz0gaW50ZXJ2YWw7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjaGVja0FjdGl2aXR5KHRpbWVvdXQsIGludGVydmFsLCBlbGFwc2VkKTtcclxuICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dvdXQnKTsgLy8gUmVkaXJlY3QgdG8gXCJzZXNzaW9uIGV4cGlyZWRcIiBwYWdlLlxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlJ1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0J1xyXG5jb25zdCBkYXRhdGFibGVzRnJlbmNoID0gJ2RhdGF0YWJsZXMubmV0LXBsdWdpbnMvaTE4bi9mci1GUi5tanMnO1xyXG5nbG9iYWwuZGF0YXRhYmxlc0ZyZW5jaCA9IGRhdGF0YWJsZXNGcmVuY2g7XHJcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtc2VsZWN0J1xyXG5cclxuLy8gaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1kdC9jc3MvanF1ZXJ5LmRhdGFUYWJsZXMuY3NzJztcclxuLy8gaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1zZWxlY3QtZHQvY3NzL3NlbGVjdC5kYXRhVGFibGVzLmNzcyc7XHJcblxyXG5pbXBvcnQgJy4vcGx1Z2lucy9wYWNlJztcclxuXHJcbmNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5jb25zdCBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMgPSBzd2FsLm1peGluKHtcclxuICBjdXN0b21DbGFzczoge1xyXG4gICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tc3VjY2VzcyBidG4teHMgc3lTd2VldFN0eWxlIG1yLTInLFxyXG4gICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICB9LFxyXG4gIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG59KVxyXG5cclxuZ2xvYmFsLlN3YWwgPSBzd2FsO1xyXG5nbG9iYWwuc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gc3dhbFdpdGhCb290c3RyYXBCdXR0b25zO1xyXG5cclxuXHJcblxyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5jb25zdCB0b2FzdHIgPSByZXF1aXJlKCd0b2FzdHInKTtcclxudG9hc3RyLm9wdGlvbnMgPSB7XHJcbiAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxyXG4gIFwiZGVidWdcIjogZmFsc2UsXHJcbiAgXCJuZXdlc3RPblRvcFwiOiBmYWxzZSxcclxuICBcInByb2dyZXNzQmFyXCI6IHRydWUsXHJcbiAgXCJwb3NpdGlvbkNsYXNzXCI6IFwidG9hc3QtdG9wLXJpZ2h0XCIsXHJcbiAgXCJwcmV2ZW50RHVwbGljYXRlc1wiOiBmYWxzZSxcclxuICBcIm9uY2xpY2tcIjogbnVsbCxcclxuICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxyXG4gIFwiaGlkZUR1cmF0aW9uXCI6IFwiMTAwMFwiLFxyXG4gIFwidGltZU91dFwiOiBcIjUwMDBcIixcclxuICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcclxuICBcInNob3dFYXNpbmdcIjogXCJzd2luZ1wiLFxyXG4gIFwiaGlkZUVhc2luZ1wiOiBcImxpbmVhclwiLFxyXG4gIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxyXG4gIFwiaGlkZU1ldGhvZFwiOiBcImZhZGVPdXRcIlxyXG59XHJcbmdsb2JhbC50b2FzdHIgPSB0b2FzdHI7XHJcblxyXG5yZXF1aXJlKCdzZWxlY3QyJylcclxucmVxdWlyZSgnc2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLm1pbi5jc3MnKVxyXG5cclxuJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9mcicsIFtdLCByZXF1aXJlKFwic2VsZWN0Mi9zcmMvanMvc2VsZWN0Mi9pMThuL2ZyXCIpKTtcclxuXHJcblxyXG5pbXBvcnQgUm91dGluZyBmcm9tICdmb3Mtcm91dGVyJztcclxuXHJcbmdsb2JhbC5Sb3V0aW5nID0gUm91dGluZztcclxuXHJcbi8vIHJlcXVpcmUoJ3BhY2UnKTtcclxuXHJcbmltcG9ydCAqIGFzIExhZGRhIGZyb20gJ2xhZGRhJztcclxuZ2xvYmFsLmxhZGRhID0gTGFkZGE7XHJcblxyXG5yZXF1aXJlKCdsYWRkYS9kaXN0L2xhZGRhLm1pbi5jc3MnKVxyXG5cclxuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcblxyXG53aW5kb3cubW9tZW50ID0gbW9tZW50O1xyXG5cclxuXHJcblxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmdsb2JhbC5heGlvcyA9IGF4aW9zO1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlcy9sb2dvSENaMi5wbmcnXHJcblxyXG5pbXBvcnQgJy4vaW1hZ2VzL2xvZ29IY3oucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2JnX2xvZ2luLmpwZydcclxuaW1wb3J0ICcuL2ltYWdlcy8yNjgwNy5qcGcnXHJcbmltcG9ydCAnLi9pbWFnZXMvNTU3MDg2My5qcGcnXHJcblxyXG5cclxuaW1wb3J0ICcuL2ltYWdlcy9nZXN0aW9uX3BhdGllbnQucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2hvc3BpdGFsLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9hcHBvaW50bWVudC5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvbWVkaWNhbC1yZWNvcmQucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2JpbGwucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2ZhY3R1cmVzLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9jb25zdWx0aW5nLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wZWMucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2FyY2hpdmUucG5nJ1xyXG5cclxuXHJcbmltcG9ydCAnLi9pbWFnZXMvcGFyYW1ldHJhZ2UvZG9zc2llcnMvbG9nb19ITUsucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL2xvZ29fSE1TLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wYXJhbWV0cmFnZS9kb3NzaWVycy9sb2dvX0hNWS5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvcGFyYW1ldHJhZ2UvZG9zc2llcnMvbG9nb19ITUIucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL19sb2dvX0ZDWi5wbmcnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG5cclxuICAvLyBzZXRJbnRlcnZhbChjaGVja1Nlc3Npb24sIDUpO1xyXG5cclxuICAkKFwiI25hdmJhckRyb3Bkb3duXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoXCIjZGl2TWVudVwiKS50b2dnbGUoXCI1bXNcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImh0bWxcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcjbmF2YmFyRHJvcGRvd24nKS5sZW5ndGggPT0gMClcclxuICAgICAgJChcIiNkaXZNZW51XCIpLmhpZGUoXCI1bXNcIik7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1lbnVBY3Rpb25zXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuICAgICQoXCJib2R5ICNkaXZNZW51XCIgKyBpZCkudG9nZ2xlKFwiNW1zXCIpO1xyXG4gICAgJChcIi5kaXZNZW51Om5vdCgjZGl2TWVudVwiICsgaWQgKyBcIilcIikuaGlkZSgpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJodG1sXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVBY3Rpb25zJykubGVuZ3RoID09IDApXHJcbiAgICAgICQoXCIuZGl2TWVudVwiKS5oaWRlKFwiNW1zXCIpO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuZmluZEFsbFBhdGllbnRXYXJuaW5ncyA9IGZ1bmN0aW9uIChpcHApIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXN0aW9uX3BhdGllbnRfd2FybmluZ3MnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlwcDogaXBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAocmVzdWx0ICE9ICdlcnJvcicpXHJcbiAgICAgICAgICBhbGVydChyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICB3aW5kb3cuYXJyYXlUb09wdGlvbiA9IGZ1bmN0aW9uIChhcnJheSwgZGlzYWJsZU9wdGlvbnMgPSBudWxsKSB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgb3B0aW9uID0gbmV3IE9wdGlvbihpdGVtLnRleHQsIGl0ZW0uaWQsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIGlmIChkaXNhYmxlT3B0aW9ucyAmJiAkLmluQXJyYXkoaXRlbS5pZCwgZGlzYWJsZU9wdGlvbnMpID49IDApIHtcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9wdGlvblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuZGF0ZVRpbWVUb1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5kYXRlKVxyXG5cclxuICAgIHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB2YXIgbW9udGggPSBtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXHJcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcclxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXlcclxuICB9XHJcblxyXG4gIHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5ID0gZnVuY3Rpb24gKG51bWJlcikge1xyXG4gICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7XHJcbiAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXHJcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSkuZm9ybWF0KG51bWJlcik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBsb2FkZXIgPSAkKFwiLmxvYWRlci1iZ1wiKTtcclxuICBnbG9iYWwubG9hZGVyID0gbG9hZGVyXHJcblxyXG4gIC8vIGxvYWRlci5zaG93KCk7XHJcblxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50eXBlUmVwYXJ0aXRpb24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHZhbHVlID0gJCh0aGlzKS52YWwoKVxyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gJ2ZvcmZhaXQnKSB7XHJcbiAgICAgICQoJ2JvZHkgI21vbnRhbnRGb3JmYWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICQoJ2JvZHkgI3ZhbGV1clBvdXJjZW50YWdlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICQoJ2JvZHkgI3BvdXJjZW50YWdlUGFydGUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICNyZXBhcnRpdGlvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNidG5BZGRQb3VyY2VudGFnZURldCcpLmhpZGUoKTtcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3BvdXJjZW50YWdlJykge1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAkKCdib2R5ICNtb250YW50Rm9yZmFpdCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjcmVwYXJ0aXRpb24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5oaWRlKCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodmFsdWUgPT09ICdwb3VyY2VudGFnZV9wYXJ0cycpIHtcclxuICAgICAgJCgnYm9keSAjbW9udGFudEZvcmZhaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICQoJ2JvZHkgI3JlcGFydGl0aW9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNidG5BZGRQb3VyY2VudGFnZURldCcpLnNob3coKTtcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJCgnYm9keSAjbW9udGFudEZvcmZhaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjcmVwYXJ0aXRpb24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5oaWRlKCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bkFkZFBvdXJjZW50YWdlRGV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBjb2RlUXVvdGFzID0gJChcIiNyZXBhcnRpdGlvblwiKS52YWwoKTtcclxuICAgIHZhciBxdW90YXMgPSAkKFwiI3JlcGFydGl0aW9uIG9wdGlvbjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICB2YXIgcG91cmNlbnRhZ2UgPSAkKFwiI3BvdXJjZW50YWdlUGFydGVcIikudmFsKCk7XHJcblxyXG4gICAgdmFyIGV4aXN0aW5nSXRlbSA9ICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuZmluZCgnLmNvZGUtcXVvdGFzJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpID09PSBjb2RlUXVvdGFzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0b2FzdHIud2FybmluZyhcIlZvdXMgYXZleiBkw6lqw6AgYWpvdXTDqSBjZSBxdW90YVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtcXVvdGFzLWl0ZW1cIj4nICtcclxuICAgICAgICAnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyXCI+JyArXHJcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiY29kZS1xdW90YXMgdGV4dC1kYW5nZXJcIj4nICsgY29kZVF1b3RhcyArICc8L3NwYW4+JyArXHJcbiAgICAgICAgJyZuYnNwLSZuYnNwPHNwYW4gY2xhc3M9XCJxdW90YXNcIj4nICsgcXVvdGFzICsgJzwvc3Bhbj4nICtcclxuICAgICAgICAnJm5ic3AtJm5ic3A8c3BhbiBjbGFzcz1cInBvdXJjZW50YWdlLXF1b3Rhc1wiPicgKyBwb3VyY2VudGFnZSArICcgJTwvc3Bhbj4nICtcclxuICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBtbC1hdXRvIHJlbW92ZV9xdW90YXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFyayB0ZXh0LWRhbmdlclwiPjwvaT48L2J1dHRvbj4nICtcclxuICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvbGk+JztcclxuICAgICAgJCgnYm9keSAubGlzdC1xdW90YXMnKS5wcmVwZW5kKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZC1wYXRpZW50XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5vcGVuKCcvZ2VzdGlvbi9wYXRpZW50L2FkZCcsICdfYmxhbmsnKTtcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oXCJjaGFuZ2VcIiwgXCIuY2hlY2tfbWFqb3JhdGlvblwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIG1vbnRhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgndGQ6ZXEoNCknKS50ZXh0KCk7XHJcblxyXG4gICAgdmFyIG10ID0gcGFyc2VGbG9hdChtb250YW50LnJlcGxhY2UoL1xccy9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpXHJcbiAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuXHJcbiAgICAgIHZhciByZXMgPSBtdCArIChtdCAqIDMwKSAvIDEwMDtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ3RkOmVxKDYpJykuaHRtbChyZXMudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCd0ZDplcSg2KScpLmh0bWwobW9udGFudCk7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiZGJsY2xpY2tcIiwgXCIjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbiA+IHRib2R5ID4gdHJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBkaV9kZXQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgbG9hZGVyLnNob3coKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbF90ZWNobmlxdWUnLCB7IGRldDogZGlfZGV0IH0pLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0KTtcclxuXHJcbiAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSB0ZXh0LXJpZ2h0IGNsYXNzIHRvIHRoZSAnbW9udGFudCcgb3IgJ3ByaXgnIGNvbHVtblxyXG4gICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoMyknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5cclxuICAvLyAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiICxcIi5jaGVjay1mYWN0dXJhYmxlLWRldFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKTtcclxuXHJcbiAgLy8gICB2YXIgY2hlY2tlZCA9ICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAvLyAgIGxvYWRlci5zaG93KCk7XHJcblxyXG4gIC8vICAgJC5hamF4KHtcclxuICAvLyAgICAgdHlwZTogJ1BPU1QnLFxyXG4gIC8vICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnLHtkZXQ6aWR9KSxcclxuICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAvLyAgICAgICAkKCcuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlJykucHJvcCgnY2hlY2tlZCcsY2hlY2tlZClcclxuXHJcbiAgLy8gICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKycgREgnKTtcclxuICAvLyAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG5cclxuICAvLyAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kocmVzdWx0Lm10RmFjdHVyYWJsZSlcclxuXHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArbW9udGFudERpKVxyXG5cclxuXHJcbiAgLy8gICAgICAgJCgnYm9keSAuZGknK3Jlc3VsdC5kaSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcblxyXG5cclxuICAvLyAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gIC8vICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyhyZXN1bHQubWVzc2FnZSk7XHJcblxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gIC8vICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KVxyXG5cclxuICAvLyAkKFwiYm9keVwiKS5vbihcImNoYW5nZVwiICxcIi5jaGVjay1mYWN0dXJhYmxlLWRldC10ZWNobmlxdWVcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuICAvLyAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpO1xyXG4gIC8vICAgdmFyIGRldF9pZCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gIC8vICAgLy8gdmFyIHRvdGFsQ2hlY2tib3hlcyA9ICQoJy5jaGVjay1mYWN0dXJhYmxlLWRldC10ZWNobmlxdWUnKS5sZW5ndGg7XHJcbiAgLy8gICB2YXIgY2hlY2tlZENoZWNrYm94ZXMgPSAkKCcuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlOmNoZWNrZWQnKS5sZW5ndGg7XHJcblxyXG4gIC8vICAgaWYgKGNoZWNrZWRDaGVja2JveGVzID09PSAxKSB7XHJcbiAgLy8gICAgICQoJyMnK2RldF9pZCkuZmluZCgndGQ6ZXEoNiknKS5jaGlsZHJlbigpLnByb3AoJ2NoZWNrZWQnLHRydWUpXHJcblxyXG4gIC8vICAgfSBlbHNlIGlmIChjaGVja2VkQ2hlY2tib3hlcyA9PT0gMCkge1xyXG4gIC8vICAgICAkKCcjJytkZXRfaWQpLmZpbmQoJ3RkOmVxKDYpJykuY2hpbGRyZW4oKS5wcm9wKCdjaGVja2VkJyxmYWxzZSlcclxuXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgLy8gICAkLmFqYXgoe1xyXG4gIC8vICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgLy8gICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbF90ZWNobmlxdWUnLHt0ZWNobmlxdWU6aWR9KSxcclxuICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAvLyAgICAgICAkKCdib2R5IC5tdFRvdGFsJykuZW1wdHkoKS5odG1sKCdNb250YW50IHRvdGFsOiAnICsgcmVzdWx0Lm10VG90YWwudG9GaXhlZCgyKSArJyBESCcpO1xyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10RmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10RmFjdHVyYWJsZS50b0ZpeGVkKDIpICsnIERIJyk7XHJcbiAgLy8gICAgICAgJCgnYm9keSAubXROb25GYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IG5vbiBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10Tm9uRmFjdHVyYWJsZS50b0ZpeGVkKDIpICsnIERIJyk7XHJcblxyXG4gIC8vICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeShyZXN1bHQubXRGYWN0dXJhYmxlKVxyXG5cclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGkgKyBcIiA6IFwiICttb250YW50RGkpXHJcblxyXG4gIC8vICAgICAgICQoJ2JvZHkgLmRpJytyZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAvLyAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gIC8vICAgICAgIHJldHVybiB0b2FzdHIuaW5mbyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgLy8gICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAvLyAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbm93LmdldEZ1bGxZZWFyKCkgKyAnLScgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldE1vbnRoKCkgKyAxKSArICctJyArXHJcbiAgICAgIHBhZFRvMkRpZ2l0cyhub3cuZ2V0RGF0ZSgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRldGltZUxvY2FsKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpICsgJy0nICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRNb250aCgpICsgMSkgKyAnLScgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldERhdGUoKSkgKyAnVCcgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldEhvdXJzKCkpICsgJzonICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRNaW51dGVzKCkpXHJcbiAgICApO1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlcygpIHtcclxuICAgICQoJy5jdXJyZW50LWRhdGUnKS52YWwoZ2V0Q3VycmVudERhdGUoKSk7XHJcblxyXG4gICAgJCgnLmN1cnJlbnQtZGF0ZXRpbWUnKS52YWwoZ2V0Q3VycmVudERhdGV0aW1lTG9jYWwoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFZhbHVlcygpO1xyXG4gIHNldEludGVydmFsKHVwZGF0ZUlucHV0VmFsdWVzLCA2MDAwMCk7XHJcblxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2NoZWNrLWFsbC1hY3Rlc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIGlzQ2hlY2tlZCA9ICQodGhpcykucHJvcChcImNoZWNrZWRcIik7XHJcblxyXG4gICAgJChcImJvZHkgLmNoZWNrQWN0ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBpc0NoZWNrZWQpO1xyXG4gICAgJChcImJvZHkgLmNoZWNrQWxsQnlSYXNzZW1ibGV1clwiKS5wcm9wKFwiY2hlY2tlZFwiLCBpc0NoZWNrZWQpO1xyXG4gICAgJChcImJvZHkgLmNoZWNrU3ViY2F0ZWdvcnlcIikucHJvcChcImNoZWNrZWRcIiwgaXNDaGVja2VkKTtcclxuICB9KVxyXG5cclxuXHJcbi8vICAgdmFyIHBhdGllbnRzVGFibGUgPSAkKCcjdGFibGVQYXRpZW50JykuRGF0YVRhYmxlKHtcclxuLy8gICAgIGxhbmd1YWdlOiB7XHJcbi8vICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuLy8gICAgIH0sXHJcbi8vICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4vLyAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuLy8gICAgIGFqYXg6IHtcclxuLy8gICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdnZXN0aW9uX3BhdGllbnRfZmV0Y2hfc2VhcmNoX3BhdGllbnQnKSxcclxuLy8gICAgICAgZGF0YTogZnVuY3Rpb24gKGQpIHtcclxuLy8gICAgICAgICBkLmRyYXcgPSBkLmRyYXcgfHwgMDtcclxuLy8gICAgICAgICBkLnN0YXJ0ID0gZC5zdGFydCB8fCAwO1xyXG4vLyAgICAgICAgIGQubGVuZ3RoID0gZC5sZW5ndGggfHwgMTU7XHJcbi8vICAgICAgICAgZC5ub21QYXRpZW50ID0gJCgnI25vbVBhdGllbnQnKS52YWwoKTs7XHJcbi8vICAgICAgICAgZC5wcmVub21QYXRpZW50ID0gJCgnI3ByZW5vbVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLm51bWRvY1BhdGllbnQgPSAkKCcjbnVtZG9jUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQucGhvbmVQYXRpZW50ID0gJCgnI3Bob25lUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQubnVtQXNzdXJQYXRpZW50ID0gJCgnI251bUFzc3VyUGF0aWVudCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIGQuZGF0ZU5haXNzYW5jZVBhdGllbnQgPSAkKCcjZGF0ZU5haXNzYW5jZVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLmdlbnJlUGF0aWVudCA9ICQoJyNnZW5yZVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIG9yZGVyOiBbWzAsICdhc2MnXV0sXHJcbi8vICAgICBjb2x1bW5zOiBbXHJcbi8vICAgICAgIHsgbmFtZTogJ3AuaWQnLCBkYXRhOiAnaWQnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5pcHAnLCBkYXRhOiAnaXBwJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ1Aubm9tJywgZGF0YTogJ25vbScsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdwLnByZW5vbScsIGRhdGE6ICdwcmVub20nLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5kYXRlTmFpc3NhbmNlJywgZGF0YTogJ2RhdGVOYWlzc2FuY2UnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5udW1Eb2N1bWVudCcsIGRhdGE6ICdudW1Eb2N1bWVudCcsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdwLm51bUFzc3VyYW5jZScsIGRhdGE6ICdudW1Bc3N1cmFuY2UnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5udW1UZWxlcGhvbmUnLCBkYXRhOiAnbnVtVGVsZXBob25lJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AubnVtVGVsZXBob25lMicsIGRhdGE6ICdudW1UZWxlcGhvbmUyJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuLy8gICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbi8vICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuLy8gICAgICAgJChyb3cpLmF0dHIoJ2RhdGEtaXBwJywgZGF0YS5pcHApO1xyXG4vLyAgICAgICAkKHJvdykuYXR0cignZGF0YS1pZCcsIGRhdGEuaWQpO1xyXG4vLyAgICAgICAkKHJvdykuYXR0cignZGF0YS1ub20nLCAoZGF0YS5ub20gKyBcIiBcIiArIGRhdGEucHJlbm9tKSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgIH0pO1xyXG5cclxuICAkKCcjbm9tUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjcHJlbm9tUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjbnVtZG9jUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjcGhvbmVQYXRpZW50Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG4gICQoJyNudW1Bc3N1clBhdGllbnQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgcGF0aWVudHNUYWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgfSk7XHJcbiAgJCgnI2RhdGVOYWlzc2FuY2VQYXRpZW50Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG4gICQoJyNnZW5yZVBhdGllbnQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcudHlwZUFjdGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoJzpjaGVja2JveCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eXBlQWN0ZUlkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ3R5cGVBY3RlJywgJycpO1xyXG4gICAgY29uc3QgY29sbGFwc2VJZCA9IGAjY29sbGFwc2V0eXBlQWN0ZSR7dHlwZUFjdGVJZH1gO1xyXG4gICAgY29uc3QgcGFuaWVyRGV0Q29sbGFwc2VJZCA9IGAjcGFuaWVyRGV0Q29sbGFwc2V0eXBlQWN0ZSR7dHlwZUFjdGVJZH1gO1xyXG5cclxuICAgICQoY29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICQocGFuaWVyRGV0Q29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc3ViY2F0ZWdvcnktaXRlbScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcygnOmNoZWNrYm94JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3Qgc3ViY2F0ZWdvcnlJZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdzdWJjYXRlZ29yeScsICcnKTtcclxuICAgIGNvbnN0IG5lc3RlZENvbGxhcHNlSWQgPSBgI2NvbGxhcHNlc3ViY2F0ZWdvcnkke3N1YmNhdGVnb3J5SWR9YDtcclxuICAgIGNvbnN0IHBhbmllckRldENvbGxhcHNlSWQgPSBgI2NvbGxhcHNlUGFuaWVyRGV0JHtzdWJjYXRlZ29yeUlkfWA7XHJcblxyXG4gICAgaWYgKCQobmVzdGVkQ29sbGFwc2VJZCkubGVuZ3RoKSB7XHJcbiAgICAgICQobmVzdGVkQ29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0gZWxzZSBpZiAoJChwYW5pZXJEZXRDb2xsYXBzZUlkKS5sZW5ndGgpIHtcclxuICAgICAgJChwYW5pZXJEZXRDb2xsYXBzZUlkKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tBbGxCeVJhc3NlbWJsZXVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdHlwZUFjdGVJZCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgJChgI2xpc3RTdWJjYXRlZ29yaWVzJHt0eXBlQWN0ZUlkfSAuZm9ybS1jaGVjay1pbnB1dGApLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tTdWJjYXRlZ29yeScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHN1YmNhdGVnb3J5SWQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICQoYCNsaXN0UGFuaWVyRGV0cyR7c3ViY2F0ZWdvcnlJZH0gLmZvcm0tY2hlY2staW5wdXRgKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuXHJcblxyXG4gICAgY29uc3QgdHlwZUFjdGVDaGVja2JveCA9ICQodGhpcykuY2xvc2VzdCgnLmxpc3RTdWJjYXRlZ29yaWVzJykucGFyZW50KCkucHJldignbGkudHlwZUFjdGUnKS5maW5kKCcuY2hlY2tBbGxCeVJhc3NlbWJsZXVyJyk7XHJcblxyXG4gICAgJChgI3N1YmNhdGVnb3J5JHtzdWJjYXRlZ29yeUlkfSAuZm9ybS1jaGVjay1pbnB1dGApLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gICAgJChgI25lc3RlZFN1YmNhdGVnb3JpZXMke3N1YmNhdGVnb3J5SWR9IC5mb3JtLWNoZWNrLWlucHV0YCkucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG5cclxuICAgIHR5cGVBY3RlQ2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsICcuY2hlY2tBY3RlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IHN1YmNhdGVnb3J5Q2hlY2tib3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0UGFuaWVyRGV0cycpLnBhcmVudCgpLnByZXYoJy5zdWJjYXRlZ29yeS1pdGVtJykuZmluZCgnLmZvcm0tY2hlY2staW5wdXQnKTtcclxuXHJcbiAgICBzdWJjYXRlZ29yeUNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNzZWxlY3RBbGxEZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcm93cyA9ICQoXCIjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvblwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlbGVjdEFsbERldFRlY2huaXF1ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByb3dzID0gJChcIiNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvblwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlbGVjdEFsbEFydGljbGVzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJvd3MgPSAkKFwiI3RhYmxlX2FydGljbGVzX3BoYXJtYWNpZVwiKS5EYXRhVGFibGUoKS5yb3dzKHsgJ3NlYXJjaCc6ICdhcHBsaWVkJyB9KS5ub2RlcygpO1xyXG4gICAgJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgcm93cykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHZhciBlbCA9ICQoJyNzZWxlY3RBbGxEZXQnKS5nZXQoMCk7XHJcbiAgICAgIGlmIChlbCAmJiBlbC5jaGVja2VkICYmICgnaW5kZXRlcm1pbmF0ZScgaW4gZWwpKSB7XHJcbiAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHknKS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5jaGVja2VkKSB7XHJcbiAgICAgIHZhciBlbCA9ICQoJyNzZWxlY3RBbGxEZXRUZWNobmlxdWUnKS5nZXQoMCk7XHJcbiAgICAgIGlmIChlbCAmJiBlbC5jaGVja2VkICYmICgnaW5kZXRlcm1pbmF0ZScgaW4gZWwpKSB7XHJcbiAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjYnRuX2ZhY3R1cmFibGUgLCAjYnRuX25vbmZhY3R1cmFibGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhYmxlX2RldF9kaSA9ICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICB2YXIgc2VsZWN0ZWRJZHMgPSBbXTtcclxuICAgIHRhYmxlX2RldF9kaS5yb3dzKCkubm9kZXMoKS5lYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgIHZhciBjaGVja2JveCA9ICQocm93KS5maW5kKCdpbnB1dC5zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSW50KGNoZWNrYm94LmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgdmFyIHVybCA9ICQodGhpcykuYXR0cignaWQnKSA9PT0gJ2J0bl9mYWN0dXJhYmxlJ1xyXG4gICAgICAgID8gUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbCcpXHJcbiAgICAgICAgOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbm9uX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbCcpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJZHM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSWRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI3NlbGVjdEFsbERldCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZG9zc2llcl9pbXB1dGF0aW9uX2RldHNfdGVjaG5pcXVlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArIG1vbnRhbnREaSlcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5kaScgKyByZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbiB0Ym9keVwiKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbCk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2VsZWN0LWNoZWNrYm94XCI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY3JlYXRlZFJvdzogZnVuY3Rpb24gKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0ZXh0LXJpZ2h0IGNsYXNzIHRvIHRoZSAnbW9udGFudCcgb3IgJ3ByaXgnIGNvbHVtblxyXG4gICAgICAgICAgICAgICQocm93KS5maW5kKCd0ZDplcSg1KScpLmFkZENsYXNzKCd0ZXh0LXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bl9mYWN0dXJhYmxlX3RlY2huaXF1ZSAsICNidG5fbm9uZmFjdHVyYWJsZV90ZWNobmlxdWUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhYmxlX2RldF9kaV90ZWNobmlxdWUgPSAkKCdib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgIHZhciBzZWxlY3RlZElkcyA9IFtdO1xyXG4gICAgdGFibGVfZGV0X2RpX3RlY2huaXF1ZS5yb3dzKCkubm9kZXMoKS5lYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgIHZhciBjaGVja2JveCA9ICQocm93KS5maW5kKCdpbnB1dC5zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSW50KGNoZWNrYm94LmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgdmFyIHVybCA9ICQodGhpcykuYXR0cignaWQnKSA9PT0gJ2J0bl9mYWN0dXJhYmxlX3RlY2huaXF1ZSdcclxuICAgICAgICA/IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWxfdGVjaG5pcXVlJylcclxuICAgICAgICA6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9ub25fZmFjdHVyYWJsZV9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsX3RlY2huaXF1ZScpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJZHM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSWRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI3NlbGVjdEFsbERldFRlY2huaXF1ZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuXHJcbiAgICAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kocmVzdWx0Lm10RmFjdHVyYWJsZSlcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGkgKyBcIiA6IFwiICsgbW9udGFudERpKVxyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLmRpJyArIHJlc3VsdC5kaSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcblxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5XCIpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfdGVjaG5pcXVlX2Rvc3NpZXJfaW1wdXRhdGlvbiB0Ym9keVwiKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQudGVjaG5pcXVlKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMSwgJ2FzYyddXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRleHQtcmlnaHQgY2xhc3MgdG8gdGhlICdtb250YW50JyBvciAncHJpeCcgY29sdW1uXHJcbiAgICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDUpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoMyknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNidG5fZm9yZmFpdCAsICNidG5fbm9uZm9yZmFpdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFibGVfZGV0X2RpID0gJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgIHZhciBzZWxlY3RlZElkcyA9IFtdO1xyXG4gICAgdGFibGVfZGV0X2RpLnJvd3MoKS5ub2RlcygpLmVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcclxuICAgICAgdmFyIGNoZWNrYm94ID0gJChyb3cpLmZpbmQoJ2lucHV0LnNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICBpZiAoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuXHJcbiAgICAgICAgdmFyIGlkID0gcGFyc2VJbnQoY2hlY2tib3guY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICBzZWxlY3RlZElkcy5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPT09ICdidG5fZm9yZmFpdCdcclxuICAgICAgICA/IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mb3JmYWl0X2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKVxyXG4gICAgICAgIDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX25vbl9mb3JmYWl0X2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSWRzOiBKU09OLnN0cmluZ2lmeShzZWxlY3RlZElkcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNzZWxlY3RBbGxEZXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLm10VG90YWwnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgdG90YWw6ICcgKyByZXN1bHQubXRUb3RhbC50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXRGYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXRGYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdE5vbkZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgbm9uIGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXROb25GYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcblxyXG4gICAgICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArIG1vbnRhbnREaSlcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5kaScgKyByZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoNSknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNjbG9zZU1vZGFsQWRkRG9jdG9yUGFydGl0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21vZGFsQWRkRG9jdG9yUGFydGl0aW9uJykubW9kYWwoJ2hpZGUnKTtcclxuICB9KVxyXG5cclxuICB2YXIgbXRUb3RhbFJlc3QgPSBudWxsXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bl9kZWxldGVfZGV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YWJsZV9kZXRfZGkgPSAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgdmFyIHNlbGVjdGVkSWRzID0gW107XHJcbiAgICB0YWJsZV9kZXRfZGkucm93cygpLm5vZGVzKCkuZWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xyXG4gICAgICB2YXIgY2hlY2tib3ggPSAkKHJvdykuZmluZCgnaW5wdXQuc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgIGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuICAgICAgICB2YXIgaWQgPSBwYXJzZUludChjaGVja2JveC5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNlbGVjdGVkSWRzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcmVtb3ZlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWxlY3RlZElkczogSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRJZHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjc2VsZWN0QWxsRGV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5tdFRvdGFsJykuZW1wdHkoKS5odG1sKCdNb250YW50IHRvdGFsOiAnICsgcmVzdWx0Lm10VG90YWwudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10RmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10RmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXROb25GYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IG5vbiBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10Tm9uRmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAkLmVhY2gocmVzdWx0LmFsbERvc3NpZXJzSW1wdXRhdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeSh2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHkgLmRpJyArIGtleSkuZW1wdHkoKS5odG1sKG1vbnRhbnREaSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkb3NzaWVyX2ltcHV0YXRpb25fZGV0c190ZWNobmlxdWVcIikuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLnBhbmllckRldHMnKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbDIpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoNSknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyAkKCdib2R5ICNhbGxEb3NzaWVyc0ltcHV0YXRpb24nKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuYWxsRG9zc2llckltcHV0YXRpb25zKTtcclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAubW9udGFudFwiKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtdFRvdGFsUmVzdCArPSBwYXJzZUZsb2F0KCQodGhpcykuYXR0cignZGF0YS12YWx1ZScpKTtcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgaWYgKHBhcnNlRmxvYXQobXRUb3RhbFJlc3QpICE9IDApIHtcclxuICAgICAgICAgICAgJChcImJvZHkgI3ZhbGlkYXRlX3JlbmRlenZvdXNfZmFjdHVyYXRpb25cIikuZmluZCgnLmdlbmVyYXRpb25fZG9zc2llcl9pbXB1dGF0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5zdWNjZXNzKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRhYnMgLnRhYi1saW5rcyBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBjdXJyZW50QXR0clZhbHVlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgLy8gU2hvdy9IaWRlIFRhYnNcclxuICAgICQoJy50YWJzICcgKyBjdXJyZW50QXR0clZhbHVlKS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcblxyXG4gICAgLy8gQ2hhbmdlL3JlbW92ZSBjdXJyZW50IHRhYiB0byBhY3RpdmVcclxuICAgICQodGhpcykucGFyZW50KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuZmFjdHVyZXItZGlcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICBzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMuZmlyZSh7XHJcbiAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgIHBvcHVwOiAnYW5pbWF0ZWRTd2FsIGZsaXBJblggZmFzdGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiA/XCIsXHJcbiAgICAgIHRleHQ6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgZmFjdHVyZXIgbGUgZG9zc2llciBkJ2ltcHV0YXRpb24gP1wiLFxyXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtY2hlY2snPjwvaT4gT3VpICFcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCI8aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4gQW5udWxlciAhXCIsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG4tc3VjY2VzcycsXHJcblxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB2YXIgZG9zc2llckltcHV0YXRpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgbG9hZGVyLnNob3coKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZmFjdHVyYXRpb25fZmFjdHVyZXJfZG9zc2llcl9pbXB1dGF0aW9uJywgeyBkb3NzaWVySW1wdXRhdGlvbjogZG9zc2llckltcHV0YXRpb24gfSksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MocmVzdWx0KVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2ZhY3R1cmF0aW9uLyc7XHJcblxyXG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0pXHJcblxyXG5cclxufSlcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLyohXHJcbiAqIHBhY2UuanMgdjEuMi40XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Db2RlQnlaYWNoL3BhY2UvXHJcbiAqIExpY2Vuc2VkIE1JVCDCqSBIdWJTcG90LCBJbmMuXHJcbiAqL1xyXG4hZnVuY3Rpb24oKXtmdW5jdGlvbiBvKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX12YXIgdSxjLGkscyxuLHksdCxsLHYscixhLHAsZSxoLHcsYixmLGcsZCxtLGssUyxxLEwseCxQLFQsUixqLE8sRSxNLEEsQyxOLF8sRixVLFcsWCxELEgsSSx6LEcsQixKPVtdLnNsaWNlLEs9e30uaGFzT3duUHJvcGVydHksUT1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKUsuY2FsbChlLG4pJiYodFtuXT1lW25dKTtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fXJldHVybiByLnByb3RvdHlwZT1lLnByb3RvdHlwZSx0LnByb3RvdHlwZT1uZXcgcix0Ll9fc3VwZXJfXz1lLnByb3RvdHlwZSx0fSxWPVtdLmluZGV4T2Z8fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLG49dGhpcy5sZW5ndGg7ZTxuO2UrKylpZihlIGluIHRoaXMmJnRoaXNbZV09PT10KXJldHVybiBlO3JldHVybi0xfTtmdW5jdGlvbiBZKCl7fWZvcihnPXtjbGFzc05hbWU6XCJcIixjYXRjaHVwVGltZToxMDAsaW5pdGlhbFJhdGU6LjAzLG1pblRpbWU6MjUwLGdob3N0VGltZToxMDAsbWF4UHJvZ3Jlc3NQZXJGcmFtZToyMCxlYXNlRmFjdG9yOjEuMjUsc3RhcnRPblBhZ2VMb2FkOiEwLHJlc3RhcnRPblB1c2hTdGF0ZTohMCxyZXN0YXJ0T25SZXF1ZXN0QWZ0ZXI6NTAwLHRhcmdldDpcImJvZHlcIixlbGVtZW50czp7Y2hlY2tJbnRlcnZhbDoxMDAsc2VsZWN0b3JzOltcImJvZHlcIl19LGV2ZW50TGFnOnttaW5TYW1wbGVzOjEwLHNhbXBsZUNvdW50OjMsbGFnVGhyZXNob2xkOjN9LGFqYXg6e3RyYWNrTWV0aG9kczpbXCJHRVRcIl0sdHJhY2tXZWJTb2NrZXRzOiEwLGlnbm9yZVVSTHM6W119fSxQPWZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIG51bGwhPSh0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwZXJmb3JtYW5jZSYmbnVsbCE9PXBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2Uubm93KCk6dm9pZCAwKT90OituZXcgRGF0ZX0sUj13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZj13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSxwPWZ1bmN0aW9uKHQsZSxuKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmFkZEV2ZW50TGlzdGVuZXIpcmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihlLG4sITEpO3ZhciByO1wiZnVuY3Rpb25cIiE9dHlwZW9mIHRbXCJvblwiK2VdfHxcIm9iamVjdFwiIT10eXBlb2YgdFtcIm9uXCIrZV0uZXZlbnRMaXN0ZW5lcnM/KHI9bmV3IHMsXCJmdW5jdGlvblwiPT10eXBlb2YgdFtcIm9uXCIrZV0mJnIub24oZSx0W1wib25cIitlXSksdFtcIm9uXCIrZV09ZnVuY3Rpb24odCl7cmV0dXJuIHIudHJpZ2dlcihlLHQpfSx0W1wib25cIitlXS5ldmVudExpc3RlbmVycz1yKTpyPXRbXCJvblwiK2VdLmV2ZW50TGlzdGVuZXJzLHIub24oZSxuKX0sbnVsbD09UiYmKFI9ZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCw1MCl9LGY9ZnVuY3Rpb24odCl7cmV0dXJuIGNsZWFyVGltZW91dCh0KX0pLE89ZnVuY3Rpb24oZSl7dmFyIG49UCgpLHI9ZnVuY3Rpb24oKXt2YXIgdD1QKCktbjtyZXR1cm4gMzM8PXQ/KG49UCgpLGUodCxmdW5jdGlvbigpe3JldHVybiBSKHIpfSkpOnNldFRpbWVvdXQociwzMy10KX07cmV0dXJuIHIoKX0saj1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50c1swXSxlPWFyZ3VtZW50c1sxXSxuPTM8PWFyZ3VtZW50cy5sZW5ndGg/Si5jYWxsKGFyZ3VtZW50cywyKTpbXTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0W2VdP3RbZV0uYXBwbHkodCxuKTp0W2VdfSxkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGUsbixyPWFyZ3VtZW50c1swXSxzPTI8PWFyZ3VtZW50cy5sZW5ndGg/Si5jYWxsKGFyZ3VtZW50cywxKTpbXSxvPTAsaT1zLmxlbmd0aDtvPGk7bysrKWlmKGU9c1tvXSlmb3IodCBpbiBlKUsuY2FsbChlLHQpJiYobj1lW3RdLG51bGwhPXJbdF0mJlwib2JqZWN0XCI9PXR5cGVvZiByW3RdJiZudWxsIT1uJiZcIm9iamVjdFwiPT10eXBlb2Ygbj9kKHJbdF0sbik6clt0XT1uKTtyZXR1cm4gcn0saD1mdW5jdGlvbih0KXtmb3IodmFyIGUsbixyPWU9MCxzPTAsbz10Lmxlbmd0aDtzPG87cysrKW49dFtzXSxyKz1NYXRoLmFicyhuKSxlKys7cmV0dXJuIHIvZX0saz1mdW5jdGlvbih0LGUpe3ZhciBuLHI7aWYobnVsbD09dCYmKHQ9XCJvcHRpb25zXCIpLG51bGw9PWUmJihlPSEwKSxyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWNlLVwiK3QrXCJdXCIpKXtpZihuPXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiK3QpLCFlKXJldHVybiBuO3RyeXtyZXR1cm4gSlNPTi5wYXJzZShuKX1jYXRjaCh0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmbnVsbCE9PWNvbnNvbGU/Y29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgaW5saW5lIHBhY2Ugb3B0aW9uc1wiLHQpOnZvaWQgMH19fSxZLnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LGUsbixyKXt2YXIgcztyZXR1cm4gbnVsbD09ciYmKHI9ITEpLG51bGw9PXRoaXMuYmluZGluZ3MmJih0aGlzLmJpbmRpbmdzPXt9KSxudWxsPT0ocz10aGlzLmJpbmRpbmdzKVt0XSYmKHNbdF09W10pLHRoaXMuYmluZGluZ3NbdF0ucHVzaCh7aGFuZGxlcjplLGN0eDpuLG9uY2U6cn0pfSxZLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5vbih0LGUsbiwhMCl9LFkucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUpe3ZhciBuLHIscztpZihudWxsIT0obnVsbCE9KHI9dGhpcy5iaW5kaW5ncyk/clt0XTp2b2lkIDApKXtpZihudWxsPT1lKXJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1t0XTtmb3Iobj0wLHM9W107bjx0aGlzLmJpbmRpbmdzW3RdLmxlbmd0aDspdGhpcy5iaW5kaW5nc1t0XVtuXS5oYW5kbGVyPT09ZT9zLnB1c2godGhpcy5iaW5kaW5nc1t0XS5zcGxpY2UobiwxKSk6cy5wdXNoKG4rKyk7cmV0dXJuIHN9fSxZLnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKCl7dmFyIHQsZSxuLHIscyxvLGk9YXJndW1lbnRzWzBdLGE9Mjw9YXJndW1lbnRzLmxlbmd0aD9KLmNhbGwoYXJndW1lbnRzLDEpOltdO2lmKG51bGwhPShyPXRoaXMuYmluZGluZ3MpJiZyW2ldKXtmb3Iobj0wLG89W107bjx0aGlzLmJpbmRpbmdzW2ldLmxlbmd0aDspZT0ocz10aGlzLmJpbmRpbmdzW2ldW25dKS5oYW5kbGVyLHQ9cy5jdHgscz1zLm9uY2UsZS5hcHBseShudWxsIT10P3Q6dGhpcyxhKSxzP28ucHVzaCh0aGlzLmJpbmRpbmdzW2ldLnNwbGljZShuLDEpKTpvLnB1c2gobisrKTtyZXR1cm4gb319LEI9WSx5PXdpbmRvdy5QYWNlfHx7fSx3aW5kb3cuUGFjZT15LGQoeSxCLnByb3RvdHlwZSksVD15Lm9wdGlvbnM9ZCh7fSxnLHdpbmRvdy5wYWNlT3B0aW9ucyxrKCkpLFg9MCxIPSh6PVtcImFqYXhcIixcImRvY3VtZW50XCIsXCJldmVudExhZ1wiLFwiZWxlbWVudHNcIl0pLmxlbmd0aDtYPEg7WCsrKSEwPT09VFtDPXpbWF1dJiYoVFtDXT1nW0NdKTtmdW5jdGlvbiBaKCl7cmV0dXJuIFouX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiAkKCl7dGhpcy5wcm9ncmVzcz0wfWZ1bmN0aW9uIHR0KCl7dGhpcy5iaW5kaW5ncz17fX1mdW5jdGlvbiBldCgpe3ZhciBlLG89dGhpcztldC5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpLGU9ZnVuY3Rpb24ocil7dmFyIHM9ci5vcGVuO3JldHVybiByLm9wZW49ZnVuY3Rpb24odCxlLG4pe3JldHVybiBBKHQpJiZvLnRyaWdnZXIoXCJyZXF1ZXN0XCIse3R5cGU6dCx1cmw6ZSxyZXF1ZXN0OnJ9KSxzLmFwcGx5KHIsYXJndW1lbnRzKX19LHdpbmRvdy5YTUxIdHRwUmVxdWVzdD1mdW5jdGlvbih0KXt0PW5ldyBXKHQpO3JldHVybiBlKHQpLHR9O3RyeXttKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCxXKX1jYXRjaCh0KXt9aWYobnVsbCE9VSl7d2luZG93LlhEb21haW5SZXF1ZXN0PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IFU7cmV0dXJuIGUodCksdH07dHJ5e20od2luZG93LlhEb21haW5SZXF1ZXN0LFUpfWNhdGNoKHQpe319aWYobnVsbCE9RiYmVC5hamF4LnRyYWNrV2ViU29ja2V0cyl7d2luZG93LldlYlNvY2tldD1mdW5jdGlvbih0LGUpe3ZhciBuPW51bGwhPWU/bmV3IEYodCxlKTpuZXcgRih0KTtyZXR1cm4gQShcInNvY2tldFwiKSYmby50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOlwic29ja2V0XCIsdXJsOnQscHJvdG9jb2xzOmUscmVxdWVzdDpufSksbn07dHJ5e20od2luZG93LldlYlNvY2tldCxGKX1jYXRjaCh0KXt9fX1mdW5jdGlvbiBudCgpe3RoaXMuY29tcGxldGU9byh0aGlzLmNvbXBsZXRlLHRoaXMpO3ZhciB0PXRoaXM7dGhpcy5lbGVtZW50cz1bXSxTKCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gdC53YXRjaC5hcHBseSh0LGFyZ3VtZW50cyl9KX1mdW5jdGlvbiBydCh0KXt2YXIgZSxuLHIscztmb3IobnVsbD09dCYmKHQ9e30pLHRoaXMuY29tcGxldGU9byh0aGlzLmNvbXBsZXRlLHRoaXMpLHRoaXMuZWxlbWVudHM9W10sbnVsbD09dC5zZWxlY3RvcnMmJih0LnNlbGVjdG9ycz1bXSksbj0wLHI9KHM9dC5zZWxlY3RvcnMpLmxlbmd0aDtuPHI7bisrKWU9c1tuXSx0aGlzLmVsZW1lbnRzLnB1c2gobmV3IGkoZSx0aGlzLmNvbXBsZXRlKSl9ZnVuY3Rpb24gc3QodCxlKXt0aGlzLnNlbGVjdG9yPXQsdGhpcy5jb21wbGV0ZUNhbGxiYWNrPWUsdGhpcy5wcm9ncmVzcz0wLHRoaXMuY2hlY2soKX1mdW5jdGlvbiBvdCgpe3ZhciB0LGUsbj10aGlzO3RoaXMucHJvZ3Jlc3M9bnVsbCE9KGU9dGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pP2U6MTAwLHQ9ZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlLGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT1uLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSYmKG4ucHJvZ3Jlc3M9bi5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX1mdW5jdGlvbiBpdCh0KXt0aGlzLnNvdXJjZT10LHRoaXMubGFzdD10aGlzLnNpbmNlTGFzdFVwZGF0ZT0wLHRoaXMucmF0ZT1ULmluaXRpYWxSYXRlLHRoaXMuY2F0Y2h1cD0wLHRoaXMucHJvZ3Jlc3M9dGhpcy5sYXN0UHJvZ3Jlc3M9MCxudWxsIT10aGlzLnNvdXJjZSYmKHRoaXMucHJvZ3Jlc3M9aih0aGlzLnNvdXJjZSxcInByb2dyZXNzXCIpKX1CPUVycm9yLFEoWixCKSxuPVosJC5wcm90b3R5cGUuZ2V0RWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKG51bGw9PXRoaXMuZWwpe2lmKCEodD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFQudGFyZ2V0KSkpdGhyb3cgbmV3IG47dGhpcy5lbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZWwuY2xhc3NOYW1lPVwicGFjZSBwYWNlLWFjdGl2ZVwiLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lPWRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoLyhwYWNlLWRvbmUgKXwvLFwicGFjZS1ydW5uaW5nIFwiKTt2YXIgZT1cIlwiIT09VC5jbGFzc05hbWU/XCIgXCIrVC5jbGFzc05hbWU6XCJcIjt0aGlzLmVsLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MnK2UrJ1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2PicsbnVsbCE9dC5maXJzdENoaWxkP3QuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsdC5maXJzdENoaWxkKTp0LmFwcGVuZENoaWxkKHRoaXMuZWwpfXJldHVybiB0aGlzLmVsfSwkLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldEVsZW1lbnQoKTtyZXR1cm4gdC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShcInBhY2UtYWN0aXZlXCIsXCJwYWNlLWluYWN0aXZlXCIpLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lPWRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLXJ1bm5pbmcgXCIsXCJwYWNlLWRvbmUgXCIpfSwkLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucHJvZ3Jlc3M9dCx5LnRyaWdnZXIoXCJwcm9ncmVzc1wiLHQpLHRoaXMucmVuZGVyKCl9LCQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0cnl7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSl9Y2F0Y2godCl7bj10fXJldHVybiB0aGlzLmVsPXZvaWQgMH0sJC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQsZSxuLHIscyxvLGk7aWYobnVsbD09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihULnRhcmdldCkpcmV0dXJuITE7Zm9yKHQ9dGhpcy5nZXRFbGVtZW50KCkscj1cInRyYW5zbGF0ZTNkKFwiK3RoaXMucHJvZ3Jlc3MrXCIlLCAwLCAwKVwiLHM9MCxvPShpPVtcIndlYmtpdFRyYW5zZm9ybVwiLFwibXNUcmFuc2Zvcm1cIixcInRyYW5zZm9ybVwiXSkubGVuZ3RoO3M8bztzKyspZT1pW3NdLHQuY2hpbGRyZW5bMF0uc3R5bGVbZV09cjtyZXR1cm4oIXRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3N8fHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3N8MCE9PXRoaXMucHJvZ3Jlc3N8MCkmJih0LmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3MtdGV4dFwiLCgwfHRoaXMucHJvZ3Jlc3MpK1wiJVwiKSwxMDA8PXRoaXMucHJvZ3Jlc3M/bj1cIjk5XCI6KG49dGhpcy5wcm9ncmVzczwxMD9cIjBcIjpcIlwiLG4rPTB8dGhpcy5wcm9ncmVzcyksdC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzXCIsXCJcIituKSkseS50cmlnZ2VyKFwiY2hhbmdlXCIsdGhpcy5wcm9ncmVzcyksdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcz10aGlzLnByb2dyZXNzfSwkLnByb3RvdHlwZS5kb25lPWZ1bmN0aW9uKCl7cmV0dXJuIDEwMDw9dGhpcy5wcm9ncmVzc30sYz0kLHR0LnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKHQsZSl7dmFyIG4scixzLG8saTtpZihudWxsIT10aGlzLmJpbmRpbmdzW3RdKXtmb3IoaT1bXSxyPTAscz0obz10aGlzLmJpbmRpbmdzW3RdKS5sZW5ndGg7cjxzO3IrKyluPW9bcl0saS5wdXNoKG4uY2FsbCh0aGlzLGUpKTtyZXR1cm4gaX19LHR0LnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LGUpe3ZhciBuO3JldHVybiBudWxsPT0obj10aGlzLmJpbmRpbmdzKVt0XSYmKG5bdF09W10pLHRoaXMuYmluZGluZ3NbdF0ucHVzaChlKX0scz10dCxXPXdpbmRvdy5YTUxIdHRwUmVxdWVzdCxVPXdpbmRvdy5YRG9tYWluUmVxdWVzdCxGPXdpbmRvdy5XZWJTb2NrZXQsbT1mdW5jdGlvbih0LGUpe3ZhciBuLHI9W107Zm9yKG4gaW4gZS5wcm90b3R5cGUpdHJ5e251bGw9PXRbbl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGVbbl0/XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5P3IucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtnZXQ6ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUucHJvdG90eXBlW3RdfX0obiksY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9KSk6ci5wdXNoKHRbbl09ZS5wcm90b3R5cGVbbl0pOnIucHVzaCh2b2lkIDApfWNhdGNoKHQpezB9cmV0dXJuIHJ9LEw9W10seS5pZ25vcmU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHNbMF0sZT0yPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMSk6W107cmV0dXJuIEwudW5zaGlmdChcImlnbm9yZVwiKSxlPXQuYXBwbHkobnVsbCxlKSxMLnNoaWZ0KCksZX0seS50cmFjaz1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50c1swXSxlPTI8PWFyZ3VtZW50cy5sZW5ndGg/Si5jYWxsKGFyZ3VtZW50cywxKTpbXTtyZXR1cm4gTC51bnNoaWZ0KFwidHJhY2tcIiksZT10LmFwcGx5KG51bGwsZSksTC5zaGlmdCgpLGV9LEE9ZnVuY3Rpb24odCl7aWYobnVsbD09dCYmKHQ9XCJHRVRcIiksXCJ0cmFja1wiPT09TFswXSlyZXR1cm5cImZvcmNlXCI7aWYoIUwubGVuZ3RoJiZULmFqYXgpe2lmKFwic29ja2V0XCI9PT10JiZULmFqYXgudHJhY2tXZWJTb2NrZXRzKXJldHVybiEwO2lmKHQ9dC50b1VwcGVyQ2FzZSgpLDA8PVYuY2FsbChULmFqYXgudHJhY2tNZXRob2RzLHQpKXJldHVybiEwfXJldHVybiExfSxRKGV0LHMpLHQ9ZXQsRD1udWxsLE09ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49VC5hamF4Lmlnbm9yZVVSTHMscj0wLHM9bi5sZW5ndGg7cjxzO3IrKylpZihcInN0cmluZ1wiPT10eXBlb2YoZT1uW3JdKSl7aWYoLTEhPT10LmluZGV4T2YoZSkpcmV0dXJuITB9ZWxzZSBpZihlLnRlc3QodCkpcmV0dXJuITA7cmV0dXJuITF9LChTPWZ1bmN0aW9uKCl7cmV0dXJuIEQ9bnVsbD09RD9uZXcgdDpEfSkoKS5vbihcInJlcXVlc3RcIixmdW5jdGlvbih0KXt2YXIgbyxpPXQudHlwZSxhPXQucmVxdWVzdCxlPXQudXJsO2lmKCFNKGUpKXJldHVybiB5LnJ1bm5pbmd8fCExPT09VC5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXImJlwiZm9yY2VcIiE9PUEoaSk/dm9pZCAwOihvPWFyZ3VtZW50cyxcImJvb2xlYW5cIj09dHlwZW9mKGU9VC5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXJ8fDApJiYoZT0wKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIHQsZSxuLHIscz1cInNvY2tldFwiPT09aT9hLnJlYWR5U3RhdGU8MTowPChzPWEucmVhZHlTdGF0ZSkmJnM8NDtpZihzKXtmb3IoeS5yZXN0YXJ0KCkscj1bXSx0PTAsZT0obj15LnNvdXJjZXMpLmxlbmd0aDt0PGU7dCsrKXtpZigoQz1uW3RdKWluc3RhbmNlb2YgdSl7Qy53YXRjaC5hcHBseShDLG8pO2JyZWFrfXIucHVzaCh2b2lkIDApfXJldHVybiByfX0sZSkpfSksbnQucHJvdG90eXBlLndhdGNoPWZ1bmN0aW9uKHQpe3ZhciBlPXQudHlwZSxuPXQucmVxdWVzdCx0PXQudXJsO2lmKCFNKHQpKXJldHVybiBuPW5ldyhcInNvY2tldFwiPT09ZT9yOmEpKG4sdGhpcy5jb21wbGV0ZSksdGhpcy5lbGVtZW50cy5wdXNoKG4pfSxudC5wcm90b3R5cGUuY29tcGxldGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWxlbWVudHM9dGhpcy5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1lfSl9LHU9bnQsYT1mdW5jdGlvbihlLG4pe3ZhciB0LHIscyxvLGk9dGhpcztpZih0aGlzLnByb2dyZXNzPTAsbnVsbCE9d2luZG93LlByb2dyZXNzRXZlbnQpZm9yKHAoZSxcInByb2dyZXNzXCIsZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RoQ29tcHV0YWJsZT9pLnByb2dyZXNzPTEwMCp0LmxvYWRlZC90LnRvdGFsOmkucHJvZ3Jlc3M9aS5wcm9ncmVzcysoMTAwLWkucHJvZ3Jlc3MpLzJ9KSx0PTAscj0obz1bXCJsb2FkXCIsXCJhYm9ydFwiLFwidGltZW91dFwiLFwiZXJyb3JcIl0pLmxlbmd0aDt0PHI7dCsrKXAoZSxvW3RdLGZ1bmN0aW9uKCl7cmV0dXJuIG4oaSksaS5wcm9ncmVzcz0xMDB9KTtlbHNlIHM9ZS5vbnJlYWR5c3RhdGVjaGFuZ2UsZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gMD09PSh0PWUucmVhZHlTdGF0ZSl8fDQ9PT10PyhuKGkpLGkucHJvZ3Jlc3M9MTAwKTozPT09ZS5yZWFkeVN0YXRlJiYoaS5wcm9ncmVzcz01MCksXCJmdW5jdGlvblwiPT10eXBlb2Ygcz9zLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9fSxyPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuLHI9dGhpcyxzPXRoaXMucHJvZ3Jlc3M9MCxvPShuPVtcImVycm9yXCIsXCJvcGVuXCJdKS5sZW5ndGg7czxvO3MrKylwKHQsbltzXSxmdW5jdGlvbigpe3JldHVybiBlKHIpLHIucHJvZ3Jlc3M9MTAwfSl9LHJ0LnByb3RvdHlwZS5jb21wbGV0ZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50cz10aGlzLmVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWV9KX0saz1ydCxzdC5wcm90b3R5cGUuY2hlY2s9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpP3RoaXMuZG9uZSgpOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdC5jaGVjaygpfSxULmVsZW1lbnRzLmNoZWNrSW50ZXJ2YWwpfSxzdC5wcm90b3R5cGUuZG9uZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBsZXRlQ2FsbGJhY2sodGhpcyksdGhpcy5jb21wbGV0ZUNhbGxiYWNrPW51bGwsdGhpcy5wcm9ncmVzcz0xMDB9LGk9c3Qsb3QucHJvdG90eXBlLnN0YXRlcz17bG9hZGluZzowLGludGVyYWN0aXZlOjUwLGNvbXBsZXRlOjEwMH0sQj1vdCxRPWZ1bmN0aW9uKCl7dmFyIGUsbixyLHMsbyxpPXRoaXM7dGhpcy5wcm9ncmVzcz0wLG89W10scz0wLHI9UCgpLG49c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgdD1QKCktci01MDtyZXR1cm4gcj1QKCksby5wdXNoKHQpLG8ubGVuZ3RoPlQuZXZlbnRMYWcuc2FtcGxlQ291bnQmJm8uc2hpZnQoKSxlPWgobyksKytzPj1ULmV2ZW50TGFnLm1pblNhbXBsZXMmJmU8VC5ldmVudExhZy5sYWdUaHJlc2hvbGQ/KGkucHJvZ3Jlc3M9MTAwLGNsZWFySW50ZXJ2YWwobikpOmkucHJvZ3Jlc3M9My8oZSszKSoxMDB9LDUwKX0saXQucHJvdG90eXBlLnRpY2s9ZnVuY3Rpb24odCxlKXtyZXR1cm4gMTAwPD0oZT1udWxsPT1lP2oodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKTplKSYmKHRoaXMuZG9uZT0hMCksZT09PXRoaXMubGFzdD90aGlzLnNpbmNlTGFzdFVwZGF0ZSs9dDoodGhpcy5zaW5jZUxhc3RVcGRhdGUmJih0aGlzLnJhdGU9KGUtdGhpcy5sYXN0KS90aGlzLnNpbmNlTGFzdFVwZGF0ZSksdGhpcy5jYXRjaHVwPShlLXRoaXMucHJvZ3Jlc3MpL1QuY2F0Y2h1cFRpbWUsdGhpcy5zaW5jZUxhc3RVcGRhdGU9MCx0aGlzLmxhc3Q9ZSksZT50aGlzLnByb2dyZXNzJiYodGhpcy5wcm9ncmVzcys9dGhpcy5jYXRjaHVwKnQpLGU9MS1NYXRoLnBvdyh0aGlzLnByb2dyZXNzLzEwMCxULmVhc2VGYWN0b3IpLHRoaXMucHJvZ3Jlc3MrPWUqdGhpcy5yYXRlKnQsdGhpcy5wcm9ncmVzcz1NYXRoLm1pbih0aGlzLmxhc3RQcm9ncmVzcytULm1heFByb2dyZXNzUGVyRnJhbWUsdGhpcy5wcm9ncmVzcyksdGhpcy5wcm9ncmVzcz1NYXRoLm1heCgwLHRoaXMucHJvZ3Jlc3MpLHRoaXMucHJvZ3Jlc3M9TWF0aC5taW4oMTAwLHRoaXMucHJvZ3Jlc3MpLHRoaXMubGFzdFByb2dyZXNzPXRoaXMucHJvZ3Jlc3MsdGhpcy5wcm9ncmVzc30sdj1pdCxiPWU9Xz13PUU9Tj1udWxsLHkucnVubmluZz0hMSxxPWZ1bmN0aW9uKCl7aWYoVC5yZXN0YXJ0T25QdXNoU3RhdGUpcmV0dXJuIHkucmVzdGFydCgpfSxudWxsIT13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUmJihJPXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSx3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gcSgpLEkuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLG51bGwhPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSYmKEc9d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlLHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZT1mdW5jdGlvbigpe3JldHVybiBxKCksRy5hcHBseSh3aW5kb3cuaGlzdG9yeSxhcmd1bWVudHMpfSksbD17YWpheDp1LGVsZW1lbnRzOmssZG9jdW1lbnQ6QixldmVudExhZzpRfSwoeD1mdW5jdGlvbigpe3ZhciB0LGUsbixyLHMsbyxpLGE7Zm9yKHkuc291cmNlcz1OPVtdLGU9MCxyPShvPVtcImFqYXhcIixcImVsZW1lbnRzXCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIl0pLmxlbmd0aDtlPHI7ZSsrKSExIT09VFt0PW9bZV1dJiZOLnB1c2gobmV3IGxbdF0oVFt0XSkpO2ZvcihuPTAscz0oYT1udWxsIT0oaT1ULmV4dHJhU291cmNlcyk/aTpbXSkubGVuZ3RoO248cztuKyspQz1hW25dLE4ucHVzaChuZXcgQyhUKSk7cmV0dXJuIHkuYmFyPXc9bmV3IGMsRT1bXSxfPW5ldyB2fSkoKSx5LnN0b3A9ZnVuY3Rpb24oKXtyZXR1cm4geS50cmlnZ2VyKFwic3RvcFwiKSx5LnJ1bm5pbmc9ITEsdy5kZXN0cm95KCksYj0hMCxudWxsIT1lJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmZihlKSxlPW51bGwpLHgoKX0seS5yZXN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIHkudHJpZ2dlcihcInJlc3RhcnRcIikseS5zdG9wKCkseS5zdGFydCgpfSx5LmdvPWZ1bmN0aW9uKCl7dmFyIG07cmV0dXJuIHkucnVubmluZz0hMCx3LnJlbmRlcigpLG09UCgpLGI9ITEsZT1PKGZ1bmN0aW9uKHQsZSl7dy5wcm9ncmVzcztmb3IodmFyIG4scixzLG8saSxhLHUsYyxsLHAsaD1hPTAsZj0hMCxnPXU9MCxkPU4ubGVuZ3RoO3U8ZDtnPSsrdSlmb3IoQz1OW2ddLGk9bnVsbCE9RVtnXT9FW2ddOkVbZ109W10scz1jPTAsbD0ocj1udWxsIT0ocD1DLmVsZW1lbnRzKT9wOltDXSkubGVuZ3RoO2M8bDtzPSsrYylvPXJbc10sZiY9KG89bnVsbCE9aVtzXT9pW3NdOmlbc109bmV3IHYobykpLmRvbmUsby5kb25lfHwoaCsrLGErPW8udGljayh0KSk7cmV0dXJuIG49YS9oLHcudXBkYXRlKF8udGljayh0LG4pKSx3LmRvbmUoKXx8Znx8Yj8ody51cGRhdGUoMTAwKSx5LnRyaWdnZXIoXCJkb25lXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdy5maW5pc2goKSx5LnJ1bm5pbmc9ITEseS50cmlnZ2VyKFwiaGlkZVwiKX0sTWF0aC5tYXgoVC5naG9zdFRpbWUsTWF0aC5tYXgoVC5taW5UaW1lLShQKCktbSksMCkpKSk6ZSgpfSl9LHkuc3RhcnQ9ZnVuY3Rpb24odCl7ZChULHQpLHkucnVubmluZz0hMDt0cnl7dy5yZW5kZXIoKX1jYXRjaCh0KXtuPXR9cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFjZVwiKT8oeS50cmlnZ2VyKFwic3RhcnRcIikseS5nbygpKTpzZXRUaW1lb3V0KHkuc3RhcnQsNTApfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIHl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz15OlQuc3RhcnRPblBhZ2VMb2FkJiZ5LnN0YXJ0KCl9LmNhbGwodGhpcyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJhY3RpdmUiLCJiaW5kIiwiY2hlY2tBY3Rpdml0eSIsInRpbWVvdXQiLCJpbnRlcnZhbCIsImVsYXBzZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiUm91dGluZyIsImdlbmVyYXRlIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGF0YXRhYmxlc0ZyZW5jaCIsInN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU3dhbCIsInRvYXN0ciIsIm9wdGlvbnMiLCJmbiIsInNlbGVjdDIiLCJhbWQiLCJkZWZpbmUiLCJMYWRkYSIsImxhZGRhIiwibW9tZW50IiwiYXhpb3MiLCJvbiIsInRvZ2dsZSIsImNsaWNrIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJoaWRlIiwiaWQiLCJhdHRyIiwiZmluZEFsbFBhdGllbnRXYXJuaW5ncyIsImlwcCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJhbGVydCIsImFycmF5VG9PcHRpb24iLCJhcnJheSIsImRpc2FibGVPcHRpb25zIiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsIm9wdGlvbiIsIk9wdGlvbiIsInRleHQiLCJpbkFycmF5IiwiZGlzYWJsZWQiLCJkYXRlVGltZVRvU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJtIiwiZ2V0TW9udGgiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUludGVnZXJEaWdpdHMiLCJ1c2VHcm91cGluZyIsImRheSIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImZvcm1hdE51bWJlclRvQ3VycmVuY3kiLCJudW1iZXIiLCJmb3JtYXR0ZWROdW1iZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJsb2FkZXIiLCJ2YWwiLCJwcm9wIiwic2hvdyIsImNvZGVRdW90YXMiLCJxdW90YXMiLCJwb3VyY2VudGFnZSIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJmaWx0ZXIiLCJ3YXJuaW5nIiwicHJlcGVuZCIsIm9wZW4iLCJtb250YW50IiwibXQiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsInJlcyIsImh0bWwiLCJkaV9kZXQiLCJkZXQiLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImVtcHR5IiwiYXBwZW5kIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlcmFibGUiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJmdWxsIiwibWV0YSIsIm9yZGVyIiwibGFuZ3VhZ2UiLCJmcmVuY2hKc29uVXJsIiwibGVuZ3RoTWVudSIsImNyZWF0ZWRSb3ciLCJyb3ciLCJkYXRhSW5kZXgiLCJhZGRDbGFzcyIsImVycm9yIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZVRleHQiLCJwYWRUbzJEaWdpdHMiLCJudW0iLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiZ2V0Q3VycmVudERhdGUiLCJub3ciLCJnZXRDdXJyZW50RGF0ZXRpbWVMb2NhbCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsInVwZGF0ZUlucHV0VmFsdWVzIiwic2V0SW50ZXJ2YWwiLCJpc0NoZWNrZWQiLCJwYXRpZW50c1RhYmxlIiwicmVsb2FkIiwiZXZlbnQiLCJpcyIsInR5cGVBY3RlSWQiLCJjb2xsYXBzZUlkIiwiY29uY2F0IiwicGFuaWVyRGV0Q29sbGFwc2VJZCIsInNsaWRlVG9nZ2xlIiwic3RvcFByb3BhZ2F0aW9uIiwic3ViY2F0ZWdvcnlJZCIsIm5lc3RlZENvbGxhcHNlSWQiLCJjaGVja2VkIiwidHlwZUFjdGVDaGVja2JveCIsInBhcmVudCIsInByZXYiLCJzdWJjYXRlZ29yeUNoZWNrYm94Iiwicm93cyIsIm5vZGVzIiwiZWwiLCJpbmRldGVybWluYXRlIiwidGFibGVfZGV0X2RpIiwic2VsZWN0ZWRJZHMiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsInBhcnNlSW50IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtdFRvdGFsIiwidG9GaXhlZCIsIm10RmFjdHVyYWJsZSIsIm10Tm9uRmFjdHVyYWJsZSIsIm1vbnRhbnREaSIsImRpIiwibWVzc2FnZSIsInRhYmxlX2RldF9kaV90ZWNobmlxdWUiLCJ0ZWNobmlxdWUiLCJtb2RhbCIsIm10VG90YWxSZXN0IiwiYWxsRG9zc2llcnNJbXB1dGF0aW9ucyIsImh0bWwyIiwiY3VycmVudEF0dHJWYWx1ZSIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJ0aGVuIiwiZG9zc2llckltcHV0YXRpb24iLCJocmVmIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJvIiwidCIsInUiLCJjIiwiaSIsInMiLCJuIiwieSIsImwiLCJ2IiwiciIsImEiLCJwIiwiaCIsInciLCJiIiwiZiIsImciLCJkIiwiayIsIlMiLCJxIiwiTCIsIngiLCJQIiwiVCIsIlIiLCJqIiwiTyIsIkUiLCJNIiwiQSIsIkMiLCJOIiwiXyIsIkYiLCJVIiwiVyIsIlgiLCJEIiwiSCIsIkkiLCJ6IiwiRyIsIkIiLCJKIiwic2xpY2UiLCJLIiwiaGFzT3duUHJvcGVydHkiLCJRIiwiY2FsbCIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX19zdXBlcl9fIiwiViIsImluZGV4T2YiLCJZIiwiY2F0Y2h1cFRpbWUiLCJpbml0aWFsUmF0ZSIsIm1pblRpbWUiLCJnaG9zdFRpbWUiLCJtYXhQcm9ncmVzc1BlckZyYW1lIiwiZWFzZUZhY3RvciIsInN0YXJ0T25QYWdlTG9hZCIsInJlc3RhcnRPblB1c2hTdGF0ZSIsInJlc3RhcnRPblJlcXVlc3RBZnRlciIsImVsZW1lbnRzIiwiY2hlY2tJbnRlcnZhbCIsInNlbGVjdG9ycyIsImV2ZW50TGFnIiwibWluU2FtcGxlcyIsInNhbXBsZUNvdW50IiwibGFnVGhyZXNob2xkIiwidHJhY2tNZXRob2RzIiwidHJhY2tXZWJTb2NrZXRzIiwiaWdub3JlVVJMcyIsInBlcmZvcm1hbmNlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90eXBlb2YiLCJldmVudExpc3RlbmVycyIsInRyaWdnZXIiLCJjbGVhclRpbWVvdXQiLCJNYXRoIiwiYWJzIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhcnNlIiwiYmluZGluZ3MiLCJoYW5kbGVyIiwiY3R4Iiwib25jZSIsIm9mZiIsInNwbGljZSIsIlBhY2UiLCJwYWNlT3B0aW9ucyIsIloiLCJwcm9ncmVzcyIsInR0IiwiZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJYRG9tYWluUmVxdWVzdCIsIldlYlNvY2tldCIsInByb3RvY29scyIsIm50IiwiY29tcGxldGUiLCJ3YXRjaCIsInJ0Iiwic3QiLCJzZWxlY3RvciIsImNvbXBsZXRlQ2FsbGJhY2siLCJjaGVjayIsIm90Iiwic3RhdGVzIiwicmVhZHlTdGF0ZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIml0Iiwic291cmNlIiwibGFzdCIsInNpbmNlTGFzdFVwZGF0ZSIsInJhdGUiLCJjYXRjaHVwIiwibGFzdFByb2dyZXNzIiwiRXJyb3IiLCJnZXRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJmaW5pc2giLCJ1cGRhdGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZHJlbiIsImxhc3RSZW5kZXJlZFByb2dyZXNzIiwic2V0QXR0cmlidXRlIiwiZG9uZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImlnbm9yZSIsInVuc2hpZnQiLCJzaGlmdCIsInRyYWNrIiwidG9VcHBlckNhc2UiLCJ0ZXN0IiwicnVubmluZyIsInJlc3RhcnQiLCJzb3VyY2VzIiwiUHJvZ3Jlc3NFdmVudCIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsImxvYWRpbmciLCJpbnRlcmFjdGl2ZSIsImNsZWFySW50ZXJ2YWwiLCJ0aWNrIiwicG93IiwibWluIiwibWF4IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImV4dHJhU291cmNlcyIsImJhciIsInN0b3AiLCJzdGFydCIsImdvIiwiZXhwb3J0cyIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=