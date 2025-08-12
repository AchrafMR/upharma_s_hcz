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
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_login_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/login.scss */ "./assets/styles/login.scss");
/* harmony import */ var _fontsource_roboto_condensed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fontsource/roboto-condensed */ "./node_modules/@fontsource/roboto-condensed/index.css");
/* harmony import */ var _fontsource_roboto_condensed_400_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fontsource/roboto-condensed/400.css */ "./node_modules/@fontsource/roboto-condensed/400.css");
/* harmony import */ var _fontsource_roboto_condensed_400_italic_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fontsource/roboto-condensed/400-italic.css */ "./node_modules/@fontsource/roboto-condensed/400-italic.css");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jquery-ui/ui/widgets/autocomplete.js */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* harmony import */ var jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_autocomplete_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker.js */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery-ui/ui/i18n/datepicker-fr.js */ "./node_modules/jquery-ui/ui/i18n/datepicker-fr.js");
/* harmony import */ var jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_i18n_datepicker_fr_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var jquery_ui_themes_base_all_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jquery-ui/themes/base/all.css */ "./node_modules/jquery-ui/themes/base/all.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plugins/pace */ "./assets/plugins/pace.js");
/* harmony import */ var _plugins_pace__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_plugins_pace__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! fos-router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");
/* harmony import */ var _images_logoHCZ2_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/logoHCZ2.png */ "./assets/images/logoHCZ2.png");
/* harmony import */ var _images_logoHcz_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/logoHcz.png */ "./assets/images/logoHcz.png");
/* harmony import */ var _images_bg_login_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/bg_login.jpg */ "./assets/images/bg_login.jpg");
/* harmony import */ var _images_26807_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/26807.jpg */ "./assets/images/26807.jpg");
/* harmony import */ var _images_5570863_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/5570863.jpg */ "./assets/images/5570863.jpg");
/* harmony import */ var _images_gestion_patient_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/gestion_patient.png */ "./assets/images/gestion_patient.png");
/* harmony import */ var _images_hospital_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/hospital.png */ "./assets/images/hospital.png");
/* harmony import */ var _images_appointment_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/appointment.png */ "./assets/images/appointment.png");
/* harmony import */ var _images_medical_record_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/medical-record.png */ "./assets/images/medical-record.png");
/* harmony import */ var _images_bill_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/bill.png */ "./assets/images/bill.png");
/* harmony import */ var _images_factures_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/factures.png */ "./assets/images/factures.png");
/* harmony import */ var _images_consulting_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/consulting.png */ "./assets/images/consulting.png");
/* harmony import */ var _images_pec_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/pec.png */ "./assets/images/pec.png");
/* harmony import */ var _images_archive_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/archive.png */ "./assets/images/archive.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMK_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMK.png */ "./assets/images/parametrage/dossiers/logo_HMK.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMS_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMS.png */ "./assets/images/parametrage/dossiers/logo_HMS.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMY_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMY.png */ "./assets/images/parametrage/dossiers/logo_HMY.png");
/* harmony import */ var _images_parametrage_dossiers_logo_HMB_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/parametrage/dossiers/logo_HMB.png */ "./assets/images/parametrage/dossiers/logo_HMB.png");
/* harmony import */ var _images_parametrage_dossiers_logo_FCZ_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/parametrage/dossiers/_logo_FCZ.png */ "./assets/images/parametrage/dossiers/_logo_FCZ.png");
















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





// $(document).ready(function() {
//   $.active = false;
//   $('body').bind('click keypress', function() {
//     $.active = true;

//   });
//   checkActivity(3600000, 60000, 0); // timeout = 30 minutes, interval = 1 minute.
// });

// function checkActivity(timeout, interval, elapsed) {
//   console.log("login")
//   if ($.active) {
//       elapsed = 0;
//       $.active = false;
//       $.get(Routing.generate('app_login'));
//   }
//   if (elapsed < timeout) {
//       elapsed += interval;
//       setTimeout(function() {
//           checkActivity(timeout, interval, elapsed);
//       }, interval);
//   } else {
//       window.location = Routing.generate('app_logout'); // Redirect to "session expired" page.
//   }
// }

$(document).ready(function () {
  var active = false;
  var timeout = 3600000; //1 hour
  var checkInterval = 60000;
  var elapsed = 0;
  $(document).on('keypress click', function () {
    active = true;
  });
  function checkActivity() {
    if (active) {
      elapsed = 0;
      active = false;
    } else {
      if (elapsed >= timeout) {
        toastr.warning("Votre session a expiré. Vous allez être redirigé vers la page de connexion.");
        setTimeout(function () {
          window.location.href = fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_logout');
        }, 300);
      }
      elapsed += checkInterval;
    }
    // console.log("Elapsed time: " + elapsed + " ms");
    setTimeout(checkActivity, checkInterval);
  }
  setTimeout(checkActivity, checkInterval);
});


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

__webpack_require__.g.Routing = (fos_router__WEBPACK_IMPORTED_MODULE_25___default());

// require('pace');


__webpack_require__.g.ladda = ladda__WEBPACK_IMPORTED_MODULE_30__;
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
      url: fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('gestion_patient_warnings'),
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
      url: fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_dossier_imputation_detail_technique', {
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
      var url = $(this).attr('id') === 'btn_facturable' ? fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_facturable_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_non_facturable_dossier_imputation_detail');
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
      var url = $(this).attr('id') === 'btn_facturable_technique' ? fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_facturable_dossier_imputation_detail_technique') : fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_non_facturable_dossier_imputation_detail_technique');
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
      var url = $(this).attr('id') === 'btn_forfait' ? fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_forfait_dossier_imputation_detail') : fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_non_forfait_dossier_imputation_detail');
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
        url: fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_remove_dossier_imputation_detail'),
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
          url: fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('app_facturation_facturer_dossier_imputation', {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-80ada4","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-60d53d","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGx1Z2lucy9wYWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xvZ2luLnNjc3M/OTRhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS8gc3luYyBeXFwuXFwvLiokIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2xvZ2luLnNjc3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgXCJAZm9udHNvdXJjZS9yb2JvdG8tY29uZGVuc2VkXCI7IC8vIERlZmF1bHRzIHRvIHdlaWdodCA0MDBcclxuaW1wb3J0IFwiQGZvbnRzb3VyY2Uvcm9ib3RvLWNvbmRlbnNlZC80MDAuY3NzXCI7IC8vIFNwZWNpZnkgd2VpZ2h0XHJcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by1jb25kZW5zZWQvNDAwLWl0YWxpYy5jc3NcIjsgLy8gU3BlY2lmeSB3ZWlnaHQgYW5kIHN0eWxlXHJcblxyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5cclxuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXRzL2RhdGVwaWNrZXIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS91aS9pMThuL2RhdGVwaWNrZXItZnIuanMnO1xyXG5pbXBvcnQgJ2pxdWVyeS11aS90aGVtZXMvYmFzZS9hbGwuY3NzJztcclxuXHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAkLmFjdGl2ZSA9IGZhbHNlO1xyXG4vLyAgICQoJ2JvZHknKS5iaW5kKCdjbGljayBrZXlwcmVzcycsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgJC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuLy8gICB9KTtcclxuLy8gICBjaGVja0FjdGl2aXR5KDM2MDAwMDAsIDYwMDAwLCAwKTsgLy8gdGltZW91dCA9IDMwIG1pbnV0ZXMsIGludGVydmFsID0gMSBtaW51dGUuXHJcbi8vIH0pO1xyXG5cclxuLy8gZnVuY3Rpb24gY2hlY2tBY3Rpdml0eSh0aW1lb3V0LCBpbnRlcnZhbCwgZWxhcHNlZCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwibG9naW5cIilcclxuLy8gICBpZiAoJC5hY3RpdmUpIHtcclxuLy8gICAgICAgZWxhcHNlZCA9IDA7XHJcbi8vICAgICAgICQuYWN0aXZlID0gZmFsc2U7XHJcbi8vICAgICAgICQuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dpbicpKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKGVsYXBzZWQgPCB0aW1lb3V0KSB7XHJcbi8vICAgICAgIGVsYXBzZWQgKz0gaW50ZXJ2YWw7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICBjaGVja0FjdGl2aXR5KHRpbWVvdXQsIGludGVydmFsLCBlbGFwc2VkKTtcclxuLy8gICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9sb2dvdXQnKTsgLy8gUmVkaXJlY3QgdG8gXCJzZXNzaW9uIGV4cGlyZWRcIiBwYWdlLlxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdmFyIHRpbWVvdXQgPSAzNjAwMDAwOy8vMSBob3VyXHJcbiAgICAgIHZhciBjaGVja0ludGVydmFsID0gNjAwMDA7IFxyXG4gICAgICB2YXIgZWxhcHNlZCA9IDA7XHJcblxyXG4gICAgICAkKGRvY3VtZW50KS5vbigna2V5cHJlc3MgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gY2hlY2tBY3Rpdml0eSgpIHtcclxuICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICBlbGFwc2VkID0gMDtcclxuICAgICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJWb3RyZSBzZXNzaW9uIGEgZXhwaXLDqS4gVm91cyBhbGxleiDDqnRyZSByZWRpcmlnw6kgdmVycyBsYSBwYWdlIGRlIGNvbm5leGlvbi5cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbG9nb3V0Jyk7IFxyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxhcHNlZCArPSBjaGVja0ludGVydmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbGFwc2VkIHRpbWU6IFwiICsgZWxhcHNlZCArIFwiIG1zXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChjaGVja0FjdGl2aXR5LCBjaGVja0ludGVydmFsKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KGNoZWNrQWN0aXZpdHksIGNoZWNrSW50ZXJ2YWwpO1xyXG4gIH0pO1xyXG5cclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZSdcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldCdcclxuY29uc3QgZGF0YXRhYmxlc0ZyZW5jaCA9ICdkYXRhdGFibGVzLm5ldC1wbHVnaW5zL2kxOG4vZnItRlIubWpzJztcclxuZ2xvYmFsLmRhdGF0YWJsZXNGcmVuY2ggPSBkYXRhdGFibGVzRnJlbmNoO1xyXG4vLyBpbXBvcnQgJ2RhdGF0YWJsZXMubmV0LXNlbGVjdCdcclxuXHJcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtZHQvY3NzL2pxdWVyeS5kYXRhVGFibGVzLmNzcyc7XHJcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtc2VsZWN0LWR0L2Nzcy9zZWxlY3QuZGF0YVRhYmxlcy5jc3MnO1xyXG5cclxuaW1wb3J0ICcuL3BsdWdpbnMvcGFjZSc7XHJcblxyXG5jb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuY29uc3Qgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zID0gc3dhbC5taXhpbih7XHJcbiAgY3VzdG9tQ2xhc3M6IHtcclxuICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzIHN5U3dlZXRTdHlsZSBtci0yJyxcclxuICAgIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tc2Vjb25kYXJ5IGJ0bi14cyBzeVN3ZWV0U3R5bGUnXHJcbiAgfSxcclxuICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmdsb2JhbC5Td2FsID0gc3dhbDtcclxuZ2xvYmFsLnN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucztcclxuXHJcblxyXG5cclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuY29uc3QgdG9hc3RyID0gcmVxdWlyZSgndG9hc3RyJyk7XHJcbnRvYXN0ci5vcHRpb25zID0ge1xyXG4gIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcclxuICBcImRlYnVnXCI6IGZhbHNlLFxyXG4gIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXHJcbiAgXCJwcm9ncmVzc0JhclwiOiB0cnVlLFxyXG4gIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LXRvcC1yaWdodFwiLFxyXG4gIFwicHJldmVudER1cGxpY2F0ZXNcIjogZmFsc2UsXHJcbiAgXCJvbmNsaWNrXCI6IG51bGwsXHJcbiAgXCJzaG93RHVyYXRpb25cIjogXCIzMDBcIixcclxuICBcImhpZGVEdXJhdGlvblwiOiBcIjEwMDBcIixcclxuICBcInRpbWVPdXRcIjogXCI1MDAwXCIsXHJcbiAgXCJleHRlbmRlZFRpbWVPdXRcIjogXCIxMDAwXCIsXHJcbiAgXCJzaG93RWFzaW5nXCI6IFwic3dpbmdcIixcclxuICBcImhpZGVFYXNpbmdcIjogXCJsaW5lYXJcIixcclxuICBcInNob3dNZXRob2RcIjogXCJmYWRlSW5cIixcclxuICBcImhpZGVNZXRob2RcIjogXCJmYWRlT3V0XCJcclxufVxyXG5nbG9iYWwudG9hc3RyID0gdG9hc3RyO1xyXG5cclxucmVxdWlyZSgnc2VsZWN0MicpXHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9jc3Mvc2VsZWN0Mi5taW4uY3NzJylcclxuXHJcbiQuZm4uc2VsZWN0Mi5hbWQuZGVmaW5lKCdzZWxlY3QyL2kxOG4vZnInLCBbXSwgcmVxdWlyZShcInNlbGVjdDIvc3JjL2pzL3NlbGVjdDIvaTE4bi9mclwiKSk7XHJcblxyXG5cclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnZm9zLXJvdXRlcic7XHJcblxyXG5nbG9iYWwuUm91dGluZyA9IFJvdXRpbmc7XHJcblxyXG4vLyByZXF1aXJlKCdwYWNlJyk7XHJcblxyXG5pbXBvcnQgKiBhcyBMYWRkYSBmcm9tICdsYWRkYSc7XHJcbmdsb2JhbC5sYWRkYSA9IExhZGRhO1xyXG5cclxucmVxdWlyZSgnbGFkZGEvZGlzdC9sYWRkYS5taW4uY3NzJylcclxuXHJcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5cclxud2luZG93Lm1vbWVudCA9IG1vbWVudDtcclxuXHJcblxyXG5cclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5nbG9iYWwuYXhpb3MgPSBheGlvcztcclxuXHJcbmltcG9ydCAnLi9pbWFnZXMvbG9nb0hDWjIucG5nJ1xyXG5cclxuaW1wb3J0ICcuL2ltYWdlcy9sb2dvSGN6LnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9iZ19sb2dpbi5qcGcnXHJcbmltcG9ydCAnLi9pbWFnZXMvMjY4MDcuanBnJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzLzU1NzA4NjMuanBnJ1xyXG5cclxuXHJcbmltcG9ydCAnLi9pbWFnZXMvZ2VzdGlvbl9wYXRpZW50LnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9ob3NwaXRhbC5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvYXBwb2ludG1lbnQucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL21lZGljYWwtcmVjb3JkLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9iaWxsLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9mYWN0dXJlcy5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvY29uc3VsdGluZy5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvcGVjLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9hcmNoaXZlLnBuZydcclxuXHJcblxyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL2xvZ29fSE1LLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wYXJhbWV0cmFnZS9kb3NzaWVycy9sb2dvX0hNUy5wbmcnXHJcbmltcG9ydCAnLi9pbWFnZXMvcGFyYW1ldHJhZ2UvZG9zc2llcnMvbG9nb19ITVkucG5nJ1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3BhcmFtZXRyYWdlL2Rvc3NpZXJzL2xvZ29fSE1CLnBuZydcclxuaW1wb3J0ICcuL2ltYWdlcy9wYXJhbWV0cmFnZS9kb3NzaWVycy9fbG9nb19GQ1oucG5nJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuXHJcbiAgLy8gc2V0SW50ZXJ2YWwoY2hlY2tTZXNzaW9uLCA1KTtcclxuXHJcbiAgJChcIiNuYXZiYXJEcm9wZG93blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKFwiI2Rpdk1lbnVcIikudG9nZ2xlKFwiNW1zXCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJodG1sXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnI25hdmJhckRyb3Bkb3duJykubGVuZ3RoID09IDApXHJcbiAgICAgICQoXCIjZGl2TWVudVwiKS5oaWRlKFwiNW1zXCIpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tZW51QWN0aW9uc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAkKFwiYm9keSAjZGl2TWVudVwiICsgaWQpLnRvZ2dsZShcIjVtc1wiKTtcclxuICAgICQoXCIuZGl2TWVudTpub3QoI2Rpdk1lbnVcIiArIGlkICsgXCIpXCIpLmhpZGUoKTtcclxuICB9KVxyXG5cclxuICAkKFwiaHRtbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZW51QWN0aW9ucycpLmxlbmd0aCA9PSAwKVxyXG4gICAgICAkKFwiLmRpdk1lbnVcIikuaGlkZShcIjVtc1wiKTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmZpbmRBbGxQYXRpZW50V2FybmluZ3MgPSBmdW5jdGlvbiAoaXBwKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ2VzdGlvbl9wYXRpZW50X3dhcm5pbmdzJyksXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpcHA6IGlwcFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPSAnZXJyb3InKVxyXG4gICAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgd2luZG93LmFycmF5VG9PcHRpb24gPSBmdW5jdGlvbiAoYXJyYXksIGRpc2FibGVPcHRpb25zID0gbnVsbCkge1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBhcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIG9wdGlvbiA9IG5ldyBPcHRpb24oaXRlbS50ZXh0LCBpdGVtLmlkLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICBpZiAoZGlzYWJsZU9wdGlvbnMgJiYgJC5pbkFycmF5KGl0ZW0uaWQsIGRpc2FibGVPcHRpb25zKSA+PSAwKSB7XHJcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvcHRpb25cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgd2luZG93LmRhdGVUaW1lVG9TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUodmFsdWUuZGF0ZSlcclxuXHJcbiAgICB2YXIgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgdmFyIG1vbnRoID0gbS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLFxyXG4gICAgICB1c2VHcm91cGluZzogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgbWluaW11bUludGVnZXJEaWdpdHM6IDIsXHJcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge1xyXG4gICAgICBzdHlsZTogJ2RlY2ltYWwnLFxyXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pLmZvcm1hdChudW1iZXIpO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgbG9hZGVyID0gJChcIi5sb2FkZXItYmdcIik7XHJcbiAgZ2xvYmFsLmxvYWRlciA9IGxvYWRlclxyXG5cclxuICAvLyBsb2FkZXIuc2hvdygpO1xyXG5cclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcudHlwZVJlcGFydGl0aW9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB2YWx1ZSA9ICQodGhpcykudmFsKClcclxuXHJcbiAgICBpZiAodmFsdWUgPT09ICdmb3JmYWl0Jykge1xyXG4gICAgICAkKCdib2R5ICNtb250YW50Rm9yZmFpdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAkKCdib2R5ICN2YWxldXJQb3VyY2VudGFnZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAkKCdib2R5ICNwb3VyY2VudGFnZVBhcnRlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjcmVwYXJ0aXRpb24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5oaWRlKCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodmFsdWUgPT09ICdwb3VyY2VudGFnZScpIHtcclxuICAgICAgJCgnYm9keSAjdmFsZXVyUG91cmNlbnRhZ2UnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgJCgnYm9keSAjbW9udGFudEZvcmZhaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjcG91cmNlbnRhZ2VQYXJ0ZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICQoJ2JvZHkgI3JlcGFydGl0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICQoJ2JvZHkgI2J0bkFkZFBvdXJjZW50YWdlRGV0JykuaGlkZSgpO1xyXG4gICAgICAkKCdib2R5IC5saXN0LXF1b3RhcycpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHZhbHVlID09PSAncG91cmNlbnRhZ2VfcGFydHMnKSB7XHJcbiAgICAgICQoJ2JvZHkgI21vbnRhbnRGb3JmYWl0JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjdmFsZXVyUG91cmNlbnRhZ2UnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjcG91cmNlbnRhZ2VQYXJ0ZScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAkKCdib2R5ICNyZXBhcnRpdGlvbicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgJCgnYm9keSAjYnRuQWRkUG91cmNlbnRhZ2VEZXQnKS5zaG93KCk7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQoJ2JvZHkgI21vbnRhbnRGb3JmYWl0JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgJCgnYm9keSAjdmFsZXVyUG91cmNlbnRhZ2UnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgJCgnYm9keSAjcG91cmNlbnRhZ2VQYXJ0ZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICQoJ2JvZHkgI3JlcGFydGl0aW9uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICQoJ2JvZHkgI2J0bkFkZFBvdXJjZW50YWdlRGV0JykuaGlkZSgpO1xyXG4gICAgICAkKCdib2R5IC5saXN0LXF1b3RhcycpLmhpZGUoKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNidG5BZGRQb3VyY2VudGFnZURldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgY29kZVF1b3RhcyA9ICQoXCIjcmVwYXJ0aXRpb25cIikudmFsKCk7XHJcbiAgICB2YXIgcXVvdGFzID0gJChcIiNyZXBhcnRpdGlvbiBvcHRpb246c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgdmFyIHBvdXJjZW50YWdlID0gJChcIiNwb3VyY2VudGFnZVBhcnRlXCIpLnZhbCgpO1xyXG5cclxuICAgIHZhciBleGlzdGluZ0l0ZW0gPSAkKCdib2R5IC5saXN0LXF1b3RhcycpLmZpbmQoJy5jb2RlLXF1b3RhcycpLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAkKHRoaXMpLnRleHQoKSA9PT0gY29kZVF1b3RhcztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChleGlzdGluZ0l0ZW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdG9hc3RyLndhcm5pbmcoXCJWb3VzIGF2ZXogZMOpasOgIGFqb3V0w6kgY2UgcXVvdGFcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LXF1b3Rhcy1pdGVtXCI+JyArXHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPicgK1xyXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImNvZGUtcXVvdGFzIHRleHQtZGFuZ2VyXCI+JyArIGNvZGVRdW90YXMgKyAnPC9zcGFuPicgK1xyXG4gICAgICAgICcmbmJzcC0mbmJzcDxzcGFuIGNsYXNzPVwicXVvdGFzXCI+JyArIHF1b3RhcyArICc8L3NwYW4+JyArXHJcbiAgICAgICAgJyZuYnNwLSZuYnNwPHNwYW4gY2xhc3M9XCJwb3VyY2VudGFnZS1xdW90YXNcIj4nICsgcG91cmNlbnRhZ2UgKyAnICU8L3NwYW4+JyArXHJcbiAgICAgICAgJzxidXR0b24gY2xhc3M9XCJidG4gbWwtYXV0byByZW1vdmVfcXVvdGFzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmsgdGV4dC1kYW5nZXJcIj48L2k+PC9idXR0b24+JyArXHJcbiAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICc8L2xpPic7XHJcbiAgICAgICQoJ2JvZHkgLmxpc3QtcXVvdGFzJykucHJlcGVuZChpdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hZGQtcGF0aWVudFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cub3BlbignL2dlc3Rpb24vcGF0aWVudC9hZGQnLCAnX2JsYW5rJyk7XHJcbiAgfSlcclxuXHJcbiAgJCgnYm9keScpLm9uKFwiY2hhbmdlXCIsIFwiLmNoZWNrX21ham9yYXRpb25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBtb250YW50ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZpbmQoJ3RkOmVxKDQpJykudGV4dCgpO1xyXG5cclxuICAgIHZhciBtdCA9IHBhcnNlRmxvYXQobW9udGFudC5yZXBsYWNlKC9cXHMvZywgJycpLnJlcGxhY2UoJywnLCAnLicpKVxyXG4gICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICB2YXIgcmVzID0gbXQgKyAobXQgKiAzMCkgLyAxMDA7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5maW5kKCd0ZDplcSg2KScpLmh0bWwocmVzLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmluZCgndGQ6ZXEoNiknKS5odG1sKG1vbnRhbnQpO1xyXG5cclxuICAgIH1cclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImRibGNsaWNrXCIsIFwiI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gPiB0Ym9keSA+IHRyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZGlfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgIGxvYWRlci5zaG93KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWxfdGVjaG5pcXVlJywgeyBkZXQ6IGRpX2RldCB9KSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICQoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiYm9keSAjZG9zc2llcl9pbXB1dGF0aW9uX2RldHNfdGVjaG5pcXVlXCIpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICQoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2VsZWN0LWNoZWNrYm94XCI+JztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY3JlYXRlZFJvdzogZnVuY3Rpb24gKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDMpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KVxyXG5cclxuXHJcbiAgLy8gJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiAsXCIuY2hlY2stZmFjdHVyYWJsZS1kZXRcIiwgZnVuY3Rpb24oZSkge1xyXG4gIC8vICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJyk7XHJcblxyXG4gIC8vICAgdmFyIGNoZWNrZWQgPSAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKTtcclxuXHJcbiAgLy8gICBsb2FkZXIuc2hvdygpO1xyXG5cclxuICAvLyAgICQuYWpheCh7XHJcbiAgLy8gICAgIHR5cGU6ICdQT1NUJyxcclxuICAvLyAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZmFjdHVyYWJsZV9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsJyx7ZGV0OmlkfSksXHJcbiAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgLy8gICAgICAgJCgnLmNoZWNrLWZhY3R1cmFibGUtZGV0LXRlY2huaXF1ZScpLnByb3AoJ2NoZWNrZWQnLGNoZWNrZWQpXHJcblxyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10VG90YWwnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgdG90YWw6ICcgKyByZXN1bHQubXRUb3RhbC50b0ZpeGVkKDIpICsnIERIJyk7XHJcbiAgLy8gICAgICAgJCgnYm9keSAubXRGYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXRGYWN0dXJhYmxlLnRvRml4ZWQoMikgKycgREgnKTtcclxuICAvLyAgICAgICAkKCdib2R5IC5tdE5vbkZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgbm9uIGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXROb25GYWN0dXJhYmxlLnRvRml4ZWQoMikgKycgREgnKTtcclxuXHJcbiAgLy8gICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kaSArIFwiIDogXCIgK21vbnRhbnREaSlcclxuXHJcblxyXG4gIC8vICAgICAgICQoJ2JvZHkgLmRpJytyZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuXHJcbiAgLy8gICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAvLyAgICAgICByZXR1cm4gdG9hc3RyLmluZm8ocmVzdWx0Lm1lc3NhZ2UpO1xyXG5cclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAvLyAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gIC8vICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSlcclxuXHJcbiAgLy8gJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiAsXCIuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgLy8gICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKTtcclxuICAvLyAgIHZhciBkZXRfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAvLyAgIC8vIHZhciB0b3RhbENoZWNrYm94ZXMgPSAkKCcuY2hlY2stZmFjdHVyYWJsZS1kZXQtdGVjaG5pcXVlJykubGVuZ3RoO1xyXG4gIC8vICAgdmFyIGNoZWNrZWRDaGVja2JveGVzID0gJCgnLmNoZWNrLWZhY3R1cmFibGUtZGV0LXRlY2huaXF1ZTpjaGVja2VkJykubGVuZ3RoO1xyXG5cclxuICAvLyAgIGlmIChjaGVja2VkQ2hlY2tib3hlcyA9PT0gMSkge1xyXG4gIC8vICAgICAkKCcjJytkZXRfaWQpLmZpbmQoJ3RkOmVxKDYpJykuY2hpbGRyZW4oKS5wcm9wKCdjaGVja2VkJyx0cnVlKVxyXG5cclxuICAvLyAgIH0gZWxzZSBpZiAoY2hlY2tlZENoZWNrYm94ZXMgPT09IDApIHtcclxuICAvLyAgICAgJCgnIycrZGV0X2lkKS5maW5kKCd0ZDplcSg2KScpLmNoaWxkcmVuKCkucHJvcCgnY2hlY2tlZCcsZmFsc2UpXHJcblxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGxvYWRlci5zaG93KCk7XHJcblxyXG4gIC8vICAgJC5hamF4KHtcclxuICAvLyAgICAgdHlwZTogJ1BPU1QnLFxyXG4gIC8vICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWxfdGVjaG5pcXVlJyx7dGVjaG5pcXVlOmlkfSksXHJcbiAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgLy8gICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKycgREgnKTtcclxuICAvLyAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG4gIC8vICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArJyBESCcpO1xyXG5cclxuICAvLyAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kocmVzdWx0Lm10RmFjdHVyYWJsZSlcclxuXHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArbW9udGFudERpKVxyXG5cclxuICAvLyAgICAgICAkKCdib2R5IC5kaScrcmVzdWx0LmRpKS5lbXB0eSgpLmh0bWwobW9udGFudERpKTtcclxuXHJcbiAgLy8gICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAvLyAgICAgICByZXR1cm4gdG9hc3RyLmluZm8ocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gIC8vICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRvYXN0ci5lcnJvcihqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KVxyXG5cclxuICBmdW5jdGlvbiBwYWRUbzJEaWdpdHMobnVtKSB7XHJcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpICsgJy0nICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRNb250aCgpICsgMSkgKyAnLScgK1xyXG4gICAgICBwYWRUbzJEaWdpdHMobm93LmdldERhdGUoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZXRpbWVMb2NhbCgpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBub3cuZ2V0RnVsbFllYXIoKSArICctJyArXHJcbiAgICAgIHBhZFRvMkRpZ2l0cyhub3cuZ2V0TW9udGgoKSArIDEpICsgJy0nICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXREYXRlKCkpICsgJ1QnICtcclxuICAgICAgcGFkVG8yRGlnaXRzKG5vdy5nZXRIb3VycygpKSArICc6JyArXHJcbiAgICAgIHBhZFRvMkRpZ2l0cyhub3cuZ2V0TWludXRlcygpKVxyXG4gICAgKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZXMoKSB7XHJcbiAgICAkKCcuY3VycmVudC1kYXRlJykudmFsKGdldEN1cnJlbnREYXRlKCkpO1xyXG5cclxuICAgICQoJy5jdXJyZW50LWRhdGV0aW1lJykudmFsKGdldEN1cnJlbnREYXRldGltZUxvY2FsKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRWYWx1ZXMoKTtcclxuICBzZXRJbnRlcnZhbCh1cGRhdGVJbnB1dFZhbHVlcywgNjAwMDApO1xyXG5cclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNjaGVjay1hbGwtYWN0ZXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBpc0NoZWNrZWQgPSAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpO1xyXG5cclxuICAgICQoXCJib2R5IC5jaGVja0FjdGVcIikucHJvcChcImNoZWNrZWRcIiwgaXNDaGVja2VkKTtcclxuICAgICQoXCJib2R5IC5jaGVja0FsbEJ5UmFzc2VtYmxldXJcIikucHJvcChcImNoZWNrZWRcIiwgaXNDaGVja2VkKTtcclxuICAgICQoXCJib2R5IC5jaGVja1N1YmNhdGVnb3J5XCIpLnByb3AoXCJjaGVja2VkXCIsIGlzQ2hlY2tlZCk7XHJcbiAgfSlcclxuXHJcblxyXG4vLyAgIHZhciBwYXRpZW50c1RhYmxlID0gJCgnI3RhYmxlUGF0aWVudCcpLkRhdGFUYWJsZSh7XHJcbi8vICAgICBsYW5ndWFnZToge1xyXG4vLyAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuLy8gICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbi8vICAgICBhamF4OiB7XHJcbi8vICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZ2VzdGlvbl9wYXRpZW50X2ZldGNoX3NlYXJjaF9wYXRpZW50JyksXHJcbi8vICAgICAgIGRhdGE6IGZ1bmN0aW9uIChkKSB7XHJcbi8vICAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbi8vICAgICAgICAgZC5zdGFydCA9IGQuc3RhcnQgfHwgMDtcclxuLy8gICAgICAgICBkLmxlbmd0aCA9IGQubGVuZ3RoIHx8IDE1O1xyXG4vLyAgICAgICAgIGQubm9tUGF0aWVudCA9ICQoJyNub21QYXRpZW50JykudmFsKCk7O1xyXG4vLyAgICAgICAgIGQucHJlbm9tUGF0aWVudCA9ICQoJyNwcmVub21QYXRpZW50JykudmFsKCk7XHJcbi8vICAgICAgICAgZC5udW1kb2NQYXRpZW50ID0gJCgnI251bWRvY1BhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLnBob25lUGF0aWVudCA9ICQoJyNwaG9uZVBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLm51bUFzc3VyUGF0aWVudCA9ICQoJyNudW1Bc3N1clBhdGllbnQnKS52YWwoKTtcclxuLy8gICAgICAgICBkLmRhdGVOYWlzc2FuY2VQYXRpZW50ID0gJCgnI2RhdGVOYWlzc2FuY2VQYXRpZW50JykudmFsKCk7XHJcbi8vICAgICAgICAgZC5nZW5yZVBhdGllbnQgPSAkKCcjZ2VucmVQYXRpZW50JykudmFsKCk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0sXHJcbi8vICAgICBvcmRlcjogW1swLCAnYXNjJ11dLFxyXG4vLyAgICAgY29sdW1uczogW1xyXG4vLyAgICAgICB7IG5hbWU6ICdwLmlkJywgZGF0YTogJ2lkJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AuaXBwJywgZGF0YTogJ2lwcCcsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdQLm5vbScsIGRhdGE6ICdub20nLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5wcmVub20nLCBkYXRhOiAncHJlbm9tJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AuZGF0ZU5haXNzYW5jZScsIGRhdGE6ICdkYXRlTmFpc3NhbmNlJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AubnVtRG9jdW1lbnQnLCBkYXRhOiAnbnVtRG9jdW1lbnQnLCBvcmRlcmFibGU6IHRydWUsIHNlYXJjaGFibGU6IHRydWUgfSxcclxuLy8gICAgICAgeyBuYW1lOiAncC5udW1Bc3N1cmFuY2UnLCBkYXRhOiAnbnVtQXNzdXJhbmNlJywgb3JkZXJhYmxlOiB0cnVlLCBzZWFyY2hhYmxlOiB0cnVlIH0sXHJcbi8vICAgICAgIHsgbmFtZTogJ3AubnVtVGVsZXBob25lJywgZGF0YTogJ251bVRlbGVwaG9uZScsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgICB7IG5hbWU6ICdwLm51bVRlbGVwaG9uZTInLCBkYXRhOiAnbnVtVGVsZXBob25lMicsIG9yZGVyYWJsZTogdHJ1ZSwgc2VhcmNoYWJsZTogdHJ1ZSB9LFxyXG4vLyAgICAgXSxcclxuLy8gICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbi8vICAgICBzZWFyY2hpbmc6IGZhbHNlLFxyXG4vLyAgICAgY3JlYXRlZFJvdzogZnVuY3Rpb24gKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbi8vICAgICAgICQocm93KS5hdHRyKCdkYXRhLWlwcCcsIGRhdGEuaXBwKTtcclxuLy8gICAgICAgJChyb3cpLmF0dHIoJ2RhdGEtaWQnLCBkYXRhLmlkKTtcclxuLy8gICAgICAgJChyb3cpLmF0dHIoJ2RhdGEtbm9tJywgKGRhdGEubm9tICsgXCIgXCIgKyBkYXRhLnByZW5vbSkpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICB9KTtcclxuXHJcbiAgJCgnI25vbVBhdGllbnQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgcGF0aWVudHNUYWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgfSk7XHJcbiAgJCgnI3ByZW5vbVBhdGllbnQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgcGF0aWVudHNUYWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgfSk7XHJcbiAgJCgnI251bWRvY1BhdGllbnQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgcGF0aWVudHNUYWJsZS5hamF4LnJlbG9hZCgpXHJcbiAgfSk7XHJcbiAgJCgnI3Bob25lUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjbnVtQXNzdXJQYXRpZW50Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHBhdGllbnRzVGFibGUuYWpheC5yZWxvYWQoKVxyXG4gIH0pO1xyXG4gICQoJyNkYXRlTmFpc3NhbmNlUGF0aWVudCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuICAkKCcjZ2VucmVQYXRpZW50Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBwYXRpZW50c1RhYmxlLmFqYXgucmVsb2FkKClcclxuICB9KTtcclxuXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnR5cGVBY3RlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKCc6Y2hlY2tib3gnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHlwZUFjdGVJZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCd0eXBlQWN0ZScsICcnKTtcclxuICAgIGNvbnN0IGNvbGxhcHNlSWQgPSBgI2NvbGxhcHNldHlwZUFjdGUke3R5cGVBY3RlSWR9YDtcclxuICAgIGNvbnN0IHBhbmllckRldENvbGxhcHNlSWQgPSBgI3BhbmllckRldENvbGxhcHNldHlwZUFjdGUke3R5cGVBY3RlSWR9YDtcclxuXHJcbiAgICAkKGNvbGxhcHNlSWQpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKHBhbmllckRldENvbGxhcHNlSWQpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnN1YmNhdGVnb3J5LWl0ZW0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoJzpjaGVja2JveCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IHN1YmNhdGVnb3J5SWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykucmVwbGFjZSgnc3ViY2F0ZWdvcnknLCAnJyk7XHJcbiAgICBjb25zdCBuZXN0ZWRDb2xsYXBzZUlkID0gYCNjb2xsYXBzZXN1YmNhdGVnb3J5JHtzdWJjYXRlZ29yeUlkfWA7XHJcbiAgICBjb25zdCBwYW5pZXJEZXRDb2xsYXBzZUlkID0gYCNjb2xsYXBzZVBhbmllckRldCR7c3ViY2F0ZWdvcnlJZH1gO1xyXG5cclxuICAgIGlmICgkKG5lc3RlZENvbGxhcHNlSWQpLmxlbmd0aCkge1xyXG4gICAgICAkKG5lc3RlZENvbGxhcHNlSWQpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9IGVsc2UgaWYgKCQocGFuaWVyRGV0Q29sbGFwc2VJZCkubGVuZ3RoKSB7XHJcbiAgICAgICQocGFuaWVyRGV0Q29sbGFwc2VJZCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmNoZWNrQWxsQnlSYXNzZW1ibGV1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHR5cGVBY3RlSWQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICQoYCNsaXN0U3ViY2F0ZWdvcmllcyR7dHlwZUFjdGVJZH0gLmZvcm0tY2hlY2staW5wdXRgKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmNoZWNrU3ViY2F0ZWdvcnknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBzdWJjYXRlZ29yeUlkID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAkKGAjbGlzdFBhbmllckRldHMke3N1YmNhdGVnb3J5SWR9IC5mb3JtLWNoZWNrLWlucHV0YCkucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHR5cGVBY3RlQ2hlY2tib3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5saXN0U3ViY2F0ZWdvcmllcycpLnBhcmVudCgpLnByZXYoJ2xpLnR5cGVBY3RlJykuZmluZCgnLmNoZWNrQWxsQnlSYXNzZW1ibGV1cicpO1xyXG5cclxuICAgICQoYCNzdWJjYXRlZ29yeSR7c3ViY2F0ZWdvcnlJZH0gLmZvcm0tY2hlY2staW5wdXRgKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcclxuICAgICQoYCNuZXN0ZWRTdWJjYXRlZ29yaWVzJHtzdWJjYXRlZ29yeUlkfSAuZm9ybS1jaGVjay1pbnB1dGApLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG5cclxuXHJcbiAgICB0eXBlQWN0ZUNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmNoZWNrQWN0ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBzdWJjYXRlZ29yeUNoZWNrYm94ID0gJCh0aGlzKS5jbG9zZXN0KCcubGlzdFBhbmllckRldHMnKS5wYXJlbnQoKS5wcmV2KCcuc3ViY2F0ZWdvcnktaXRlbScpLmZpbmQoJy5mb3JtLWNoZWNrLWlucHV0Jyk7XHJcblxyXG4gICAgc3ViY2F0ZWdvcnlDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjc2VsZWN0QWxsRGV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJvd3MgPSAkKFwiI2RldF9kb3NzaWVyX2ltcHV0YXRpb25cIikuRGF0YVRhYmxlKCkucm93cyh7ICdzZWFyY2gnOiAnYXBwbGllZCcgfSkubm9kZXMoKTtcclxuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvd3MpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNzZWxlY3RBbGxEZXRUZWNobmlxdWUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcm93cyA9ICQoXCIjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb25cIikuRGF0YVRhYmxlKCkucm93cyh7ICdzZWFyY2gnOiAnYXBwbGllZCcgfSkubm9kZXMoKTtcclxuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvd3MpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNzZWxlY3RBbGxBcnRpY2xlcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByb3dzID0gJChcIiN0YWJsZV9hcnRpY2xlc19waGFybWFjaWVcIikuRGF0YVRhYmxlKCkucm93cyh7ICdzZWFyY2gnOiAnYXBwbGllZCcgfSkubm9kZXMoKTtcclxuICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHJvd3MpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5Jykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB2YXIgZWwgPSAkKCcjc2VsZWN0QWxsRGV0JykuZ2V0KDApO1xyXG4gICAgICBpZiAoZWwgJiYgZWwuY2hlY2tlZCAmJiAoJ2luZGV0ZXJtaW5hdGUnIGluIGVsKSkge1xyXG4gICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5Jykub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB2YXIgZWwgPSAkKCcjc2VsZWN0QWxsRGV0VGVjaG5pcXVlJykuZ2V0KDApO1xyXG4gICAgICBpZiAoZWwgJiYgZWwuY2hlY2tlZCAmJiAoJ2luZGV0ZXJtaW5hdGUnIGluIGVsKSkge1xyXG4gICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2J0bl9mYWN0dXJhYmxlICwgI2J0bl9ub25mYWN0dXJhYmxlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YWJsZV9kZXRfZGkgPSAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgdmFyIHNlbGVjdGVkSWRzID0gW107XHJcbiAgICB0YWJsZV9kZXRfZGkucm93cygpLm5vZGVzKCkuZWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xyXG4gICAgICB2YXIgY2hlY2tib3ggPSAkKHJvdykuZmluZCgnaW5wdXQuc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgIGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuICAgICAgICB2YXIgaWQgPSBwYXJzZUludChjaGVja2JveC5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNlbGVjdGVkSWRzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRJZHMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPT09ICdidG5fZmFjdHVyYWJsZSdcclxuICAgICAgICA/IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKVxyXG4gICAgICAgIDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX25vbl9mYWN0dXJhYmxlX2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRhaWwnKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSWRzOiBKU09OLnN0cmluZ2lmeShzZWxlY3RlZElkcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNzZWxlY3RBbGxEZXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLm10VG90YWwnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgdG90YWw6ICcgKyByZXN1bHQubXRUb3RhbC50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXRGYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXRGYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdE5vbkZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgbm9uIGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXROb25GYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2Rvc3NpZXJfaW1wdXRhdGlvbl9kZXRzX3RlY2huaXF1ZVwiKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeShyZXN1bHQubXRGYWN0dXJhYmxlKVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kaSArIFwiIDogXCIgKyBtb250YW50RGkpXHJcblxyXG4gICAgICAgICAgJCgnYm9keSAuZGknICsgcmVzdWx0LmRpKS5lbXB0eSgpLmh0bWwobW9udGFudERpKTtcclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKSkge1xyXG4gICAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogMCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3QtY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgZnVsbCwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNlbGVjdC1jaGVja2JveFwiPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1sxLCAnYXNjJ11dLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNyZWF0ZWRSb3c6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGRhdGFJbmRleCkge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0aGUgdGV4dC1yaWdodCBjbGFzcyB0byB0aGUgJ21vbnRhbnQnIG9yICdwcml4JyBjb2x1bW5cclxuICAgICAgICAgICAgICAkKHJvdykuZmluZCgndGQ6ZXEoNSknKS5hZGRDbGFzcygndGV4dC1yaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNidG5fZmFjdHVyYWJsZV90ZWNobmlxdWUgLCAjYnRuX25vbmZhY3R1cmFibGVfdGVjaG5pcXVlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciB0YWJsZV9kZXRfZGlfdGVjaG5pcXVlID0gJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICB2YXIgc2VsZWN0ZWRJZHMgPSBbXTtcclxuICAgIHRhYmxlX2RldF9kaV90ZWNobmlxdWUucm93cygpLm5vZGVzKCkuZWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xyXG4gICAgICB2YXIgY2hlY2tib3ggPSAkKHJvdykuZmluZCgnaW5wdXQuc2VsZWN0LWNoZWNrYm94Jyk7XHJcbiAgICAgIGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cclxuICAgICAgICB2YXIgaWQgPSBwYXJzZUludChjaGVja2JveC5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNlbGVjdGVkSWRzLnB1c2goaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRJZHMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPT09ICdidG5fZmFjdHVyYWJsZV90ZWNobmlxdWUnXHJcbiAgICAgICAgPyBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZmFjdHVyYWJsZV9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsX3RlY2huaXF1ZScpXHJcbiAgICAgICAgOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbm9uX2ZhY3R1cmFibGVfZG9zc2llcl9pbXB1dGF0aW9uX2RldGFpbF90ZWNobmlxdWUnKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlbGVjdGVkSWRzOiBKU09OLnN0cmluZ2lmeShzZWxlY3RlZElkcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNzZWxlY3RBbGxEZXRUZWNobmlxdWUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgLm10VG90YWwnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgdG90YWw6ICcgKyByZXN1bHQubXRUb3RhbC50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXRGYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXRGYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdE5vbkZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgbm9uIGZhY3R1cmFibGU6ICcgKyByZXN1bHQubXROb25GYWN0dXJhYmxlLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcblxyXG4gICAgICAgICAgdmFyIG1vbnRhbnREaSA9IHdpbmRvdy5mb3JtYXROdW1iZXJUb0N1cnJlbmN5KHJlc3VsdC5tdEZhY3R1cmFibGUpXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRpICsgXCIgOiBcIiArIG1vbnRhbnREaSlcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5kaScgKyByZXN1bHQuZGkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG5cclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbiB0Ym9keVwiKS5lbXB0eSgpLmFwcGVuZChyZXN1bHQuaHRtbCk7XHJcbiAgICAgICAgICAkKFwiYm9keSAjZGV0X3RlY2huaXF1ZV9kb3NzaWVyX2ltcHV0YXRpb24gdGJvZHlcIikuZW1wdHkoKS5hcHBlbmQocmVzdWx0LnRlY2huaXF1ZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdC1jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2VsZWN0LWNoZWNrYm94XCI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY3JlYXRlZFJvdzogZnVuY3Rpb24gKHJvdywgZGF0YSwgZGF0YUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0ZXh0LXJpZ2h0IGNsYXNzIHRvIHRoZSAnbW9udGFudCcgb3IgJ3ByaXgnIGNvbHVtblxyXG4gICAgICAgICAgICAgICQocm93KS5maW5kKCd0ZDplcSg1KScpLmFkZENsYXNzKCd0ZXh0LXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI2RldF90ZWNobmlxdWVfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMSwgJ2FzYyddXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRleHQtcmlnaHQgY2xhc3MgdG8gdGhlICdtb250YW50JyBvciAncHJpeCcgY29sdW1uXHJcbiAgICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDMpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjYnRuX2ZvcmZhaXQgLCAjYnRuX25vbmZvcmZhaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHRhYmxlX2RldF9kaSA9ICQoJ2JvZHkgI2RldF9kb3NzaWVyX2ltcHV0YXRpb24nKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICB2YXIgc2VsZWN0ZWRJZHMgPSBbXTtcclxuICAgIHRhYmxlX2RldF9kaS5yb3dzKCkubm9kZXMoKS5lYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgIHZhciBjaGVja2JveCA9ICQocm93KS5maW5kKCdpbnB1dC5zZWxlY3QtY2hlY2tib3gnKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHBhcnNlSW50KGNoZWNrYm94LmNsb3Nlc3QoJ3RyJykuYXR0cignaWQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxvYWRlci5zaG93KCk7XHJcblxyXG4gICAgICB2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdpZCcpID09PSAnYnRuX2ZvcmZhaXQnXHJcbiAgICAgICAgPyBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZm9yZmFpdF9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsJylcclxuICAgICAgICA6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9ub25fZm9yZmFpdF9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsJyk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWxlY3RlZElkczogSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRJZHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAjc2VsZWN0QWxsRGV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5tdFRvdGFsJykuZW1wdHkoKS5odG1sKCdNb250YW50IHRvdGFsOiAnICsgcmVzdWx0Lm10VG90YWwudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10RmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10RmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG4gICAgICAgICAgJCgnYm9keSAubXROb25GYWN0dXJhYmxlJykuZW1wdHkoKS5odG1sKCdNb250YW50IG5vbiBmYWN0dXJhYmxlOiAnICsgcmVzdWx0Lm10Tm9uRmFjdHVyYWJsZS50b0ZpeGVkKDIpICsgJyBESCcpO1xyXG5cclxuICAgICAgICAgIHZhciBtb250YW50RGkgPSB3aW5kb3cuZm9ybWF0TnVtYmVyVG9DdXJyZW5jeShyZXN1bHQubXRGYWN0dXJhYmxlKVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kaSArIFwiIDogXCIgKyBtb250YW50RGkpXHJcblxyXG4gICAgICAgICAgJCgnYm9keSAuZGknICsgcmVzdWx0LmRpKS5lbXB0eSgpLmh0bWwobW9udGFudERpKTtcclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZG9zc2llcl9pbXB1dGF0aW9uX2RldHNfdGVjaG5pcXVlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5XCIpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMSwgJ2FzYyddXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRleHQtcmlnaHQgY2xhc3MgdG8gdGhlICdtb250YW50JyBvciAncHJpeCcgY29sdW1uXHJcbiAgICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDUpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdG9hc3RyLnN1Y2Nlc3MocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcjY2xvc2VNb2RhbEFkZERvY3RvclBhcnRpdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNtb2RhbEFkZERvY3RvclBhcnRpdGlvbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgfSlcclxuXHJcbiAgdmFyIG10VG90YWxSZXN0ID0gbnVsbFxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNidG5fZGVsZXRlX2RldCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGFibGVfZGV0X2RpID0gJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgIHZhciBzZWxlY3RlZElkcyA9IFtdO1xyXG4gICAgdGFibGVfZGV0X2RpLnJvd3MoKS5ub2RlcygpLmVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcclxuICAgICAgdmFyIGNoZWNrYm94ID0gJChyb3cpLmZpbmQoJ2lucHV0LnNlbGVjdC1jaGVja2JveCcpO1xyXG4gICAgICBpZiAoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuXHJcbiAgICAgICAgdmFyIGlkID0gcGFyc2VJbnQoY2hlY2tib3guY2xvc2VzdCgndHInKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICBzZWxlY3RlZElkcy5wdXNoKGlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3JlbW92ZV9kb3NzaWVyX2ltcHV0YXRpb25fZGV0YWlsJyksXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJZHM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkSWRzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICQoJ2JvZHkgI3NlbGVjdEFsbERldCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keSAubXRUb3RhbCcpLmVtcHR5KCkuaHRtbCgnTW9udGFudCB0b3RhbDogJyArIHJlc3VsdC5tdFRvdGFsLnRvRml4ZWQoMikgKyAnIERIJyk7XHJcbiAgICAgICAgICAkKCdib2R5IC5tdEZhY3R1cmFibGUnKS5lbXB0eSgpLmh0bWwoJ01vbnRhbnQgZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdEZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuICAgICAgICAgICQoJ2JvZHkgLm10Tm9uRmFjdHVyYWJsZScpLmVtcHR5KCkuaHRtbCgnTW9udGFudCBub24gZmFjdHVyYWJsZTogJyArIHJlc3VsdC5tdE5vbkZhY3R1cmFibGUudG9GaXhlZCgyKSArICcgREgnKTtcclxuXHJcblxyXG4gICAgICAgICAgJC5lYWNoKHJlc3VsdC5hbGxEb3NzaWVyc0ltcHV0YXRpb25zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9udGFudERpID0gd2luZG93LmZvcm1hdE51bWJlclRvQ3VycmVuY3kodmFsdWUpXHJcblxyXG4gICAgICAgICAgICAkKCdib2R5IC5kaScgKyBrZXkpLmVtcHR5KCkuaHRtbChtb250YW50RGkpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAkKFwiYm9keSAjZG9zc2llcl9pbXB1dGF0aW9uX2RldHNfdGVjaG5pcXVlXCIpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykpIHtcclxuICAgICAgICAgICAgJCgnYm9keSAjZGV0X2Rvc3NpZXJfaW1wdXRhdGlvbicpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICQoXCJib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uIHRib2R5XCIpLmVtcHR5KCkuYXBwZW5kKHJlc3VsdC5odG1sKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5IC5wYW5pZXJEZXRzJykuZW1wdHkoKS5hcHBlbmQocmVzdWx0Lmh0bWwyKTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5ICNkZXRfZG9zc2llcl9pbXB1dGF0aW9uJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IDAsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIGZ1bGwsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZWxlY3QtY2hlY2tib3hcIj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMSwgJ2FzYyddXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgICAgICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVkUm93OiBmdW5jdGlvbiAocm93LCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdGhlIHRleHQtcmlnaHQgY2xhc3MgdG8gdGhlICdtb250YW50JyBvciAncHJpeCcgY29sdW1uXHJcbiAgICAgICAgICAgICAgJChyb3cpLmZpbmQoJ3RkOmVxKDUpJykuYWRkQ2xhc3MoJ3RleHQtcmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gJCgnYm9keSAjYWxsRG9zc2llcnNJbXB1dGF0aW9uJykuZW1wdHkoKS5hcHBlbmQocmVzdWx0LmFsbERvc3NpZXJJbXB1dGF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgJChcImJvZHkgLm1vbnRhbnRcIikubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbXRUb3RhbFJlc3QgKz0gcGFyc2VGbG9hdCgkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG10VG90YWxSZXN0KSAhPSAwKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5ICN2YWxpZGF0ZV9yZW5kZXp2b3VzX2ZhY3R1cmF0aW9uXCIpLmZpbmQoJy5nZW5lcmF0aW9uX2Rvc3NpZXJfaW1wdXRhdGlvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuc3VjY2VzcyhyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIHJldHVybiB0b2FzdHIuZXJyb3IoanFYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy50YWJzIC50YWItbGlua3MgYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgY3VycmVudEF0dHJWYWx1ZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgIC8vIFNob3cvSGlkZSBUYWJzXHJcbiAgICAkKCcudGFicyAnICsgY3VycmVudEF0dHJWYWx1ZSkuc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xyXG5cclxuICAgIC8vIENoYW5nZS9yZW1vdmUgY3VycmVudCB0YWIgdG8gYWN0aXZlXHJcbiAgICAkKHRoaXMpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmZhY3R1cmVyLWRpXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgc3dhbFdpdGhCb290c3RyYXBCdXR0b25zLmZpcmUoe1xyXG4gICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICBwb3B1cDogJ2FuaW1hdGVkU3dhbCBmbGlwSW5YIGZhc3RlcidcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICB0aXRsZTogXCJDb25maXJtYXRpb24gP1wiLFxyXG4gICAgICB0ZXh0OiBcIlZvdWxleiB2b3VzIHZyYWltZW50IGZhY3R1cmVyIGxlIGRvc3NpZXIgZCdpbXB1dGF0aW9uID9cIixcclxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLWNoZWNrJz48L2k+IE91aSAhXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiPGkgY2xhc3M9J2ZhIGZhLXRpbWVzJz48L2k+IEFubnVsZXIgIVwiLFxyXG4gICAgICBjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuLXN1Y2Nlc3MnLFxyXG5cclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGRvc3NpZXJJbXB1dGF0aW9uID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgIGxvYWRlci5zaG93KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX2ZhY3R1cmF0aW9uX2ZhY3R1cmVyX2Rvc3NpZXJfaW1wdXRhdGlvbicsIHsgZG9zc2llckltcHV0YXRpb246IGRvc3NpZXJJbXB1dGF0aW9uIH0pLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKHJlc3VsdClcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9mYWN0dXJhdGlvbi8nO1xyXG5cclxuICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9hc3RyLmVycm9yKGpxWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9KVxyXG5cclxuXHJcbn0pXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIi8qIVxyXG4gKiBwYWNlLmpzIHYxLjIuNFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29kZUJ5WmFjaC9wYWNlL1xyXG4gKiBMaWNlbnNlZCBNSVQgwqkgSHViU3BvdCwgSW5jLlxyXG4gKi9cclxuIWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbyh0LGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KGUsYXJndW1lbnRzKX19dmFyIHUsYyxpLHMsbix5LHQsbCx2LHIsYSxwLGUsaCx3LGIsZixnLGQsbSxrLFMscSxMLHgsUCxULFIsaixPLEUsTSxBLEMsTixfLEYsVSxXLFgsRCxILEkseixHLEIsSj1bXS5zbGljZSxLPXt9Lmhhc093blByb3BlcnR5LFE9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSlLLmNhbGwoZSxuKSYmKHRbbl09ZVtuXSk7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1yZXR1cm4gci5wcm90b3R5cGU9ZS5wcm90b3R5cGUsdC5wcm90b3R5cGU9bmV3IHIsdC5fX3N1cGVyX189ZS5wcm90b3R5cGUsdH0sVj1bXS5pbmRleE9mfHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxuPXRoaXMubGVuZ3RoO2U8bjtlKyspaWYoZSBpbiB0aGlzJiZ0aGlzW2VdPT09dClyZXR1cm4gZTtyZXR1cm4tMX07ZnVuY3Rpb24gWSgpe31mb3IoZz17Y2xhc3NOYW1lOlwiXCIsY2F0Y2h1cFRpbWU6MTAwLGluaXRpYWxSYXRlOi4wMyxtaW5UaW1lOjI1MCxnaG9zdFRpbWU6MTAwLG1heFByb2dyZXNzUGVyRnJhbWU6MjAsZWFzZUZhY3RvcjoxLjI1LHN0YXJ0T25QYWdlTG9hZDohMCxyZXN0YXJ0T25QdXNoU3RhdGU6ITAscmVzdGFydE9uUmVxdWVzdEFmdGVyOjUwMCx0YXJnZXQ6XCJib2R5XCIsZWxlbWVudHM6e2NoZWNrSW50ZXJ2YWw6MTAwLHNlbGVjdG9yczpbXCJib2R5XCJdfSxldmVudExhZzp7bWluU2FtcGxlczoxMCxzYW1wbGVDb3VudDozLGxhZ1RocmVzaG9sZDozfSxhamF4Ont0cmFja01ldGhvZHM6W1wiR0VUXCJdLHRyYWNrV2ViU29ja2V0czohMCxpZ25vcmVVUkxzOltdfX0sUD1mdW5jdGlvbigpe3ZhciB0O3JldHVybiBudWxsIT0odD1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdygpOnZvaWQgMCk/dDorbmV3IERhdGV9LFI9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lLGY9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUscD1mdW5jdGlvbih0LGUsbil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5hZGRFdmVudExpc3RlbmVyKXJldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoZSxuLCExKTt2YXIgcjtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W1wib25cIitlXXx8XCJvYmplY3RcIiE9dHlwZW9mIHRbXCJvblwiK2VdLmV2ZW50TGlzdGVuZXJzPyhyPW5ldyBzLFwiZnVuY3Rpb25cIj09dHlwZW9mIHRbXCJvblwiK2VdJiZyLm9uKGUsdFtcIm9uXCIrZV0pLHRbXCJvblwiK2VdPWZ1bmN0aW9uKHQpe3JldHVybiByLnRyaWdnZXIoZSx0KX0sdFtcIm9uXCIrZV0uZXZlbnRMaXN0ZW5lcnM9cik6cj10W1wib25cIitlXS5ldmVudExpc3RlbmVycyxyLm9uKGUsbil9LG51bGw9PVImJihSPWZ1bmN0aW9uKHQpe3JldHVybiBzZXRUaW1lb3V0KHQsNTApfSxmPWZ1bmN0aW9uKHQpe3JldHVybiBjbGVhclRpbWVvdXQodCl9KSxPPWZ1bmN0aW9uKGUpe3ZhciBuPVAoKSxyPWZ1bmN0aW9uKCl7dmFyIHQ9UCgpLW47cmV0dXJuIDMzPD10PyhuPVAoKSxlKHQsZnVuY3Rpb24oKXtyZXR1cm4gUihyKX0pKTpzZXRUaW1lb3V0KHIsMzMtdCl9O3JldHVybiByKCl9LGo9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHNbMF0sZT1hcmd1bWVudHNbMV0sbj0zPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMik6W107cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdFtlXT90W2VdLmFwcGx5KHQsbik6dFtlXX0sZD1mdW5jdGlvbigpe2Zvcih2YXIgdCxlLG4scj1hcmd1bWVudHNbMF0scz0yPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMSk6W10sbz0wLGk9cy5sZW5ndGg7bzxpO28rKylpZihlPXNbb10pZm9yKHQgaW4gZSlLLmNhbGwoZSx0KSYmKG49ZVt0XSxudWxsIT1yW3RdJiZcIm9iamVjdFwiPT10eXBlb2Ygclt0XSYmbnVsbCE9biYmXCJvYmplY3RcIj09dHlwZW9mIG4/ZChyW3RdLG4pOnJbdF09bik7cmV0dXJuIHJ9LGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG4scj1lPTAscz0wLG89dC5sZW5ndGg7czxvO3MrKyluPXRbc10scis9TWF0aC5hYnMobiksZSsrO3JldHVybiByL2V9LGs9ZnVuY3Rpb24odCxlKXt2YXIgbixyO2lmKG51bGw9PXQmJih0PVwib3B0aW9uc1wiKSxudWxsPT1lJiYoZT0hMCkscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIit0K1wiXVwiKSl7aWYobj1yLmdldEF0dHJpYnV0ZShcImRhdGEtcGFjZS1cIit0KSwhZSlyZXR1cm4gbjt0cnl7cmV0dXJuIEpTT04ucGFyc2Uobil9Y2F0Y2godCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJm51bGwhPT1jb25zb2xlP2NvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIix0KTp2b2lkIDB9fX0sWS5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG4scil7dmFyIHM7cmV0dXJuIG51bGw9PXImJihyPSExKSxudWxsPT10aGlzLmJpbmRpbmdzJiYodGhpcy5iaW5kaW5ncz17fSksbnVsbD09KHM9dGhpcy5iaW5kaW5ncylbdF0mJihzW3RdPVtdKSx0aGlzLmJpbmRpbmdzW3RdLnB1c2goe2hhbmRsZXI6ZSxjdHg6bixvbmNlOnJ9KX0sWS5wcm90b3R5cGUub25jZT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMub24odCxlLG4sITApfSxZLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24odCxlKXt2YXIgbixyLHM7aWYobnVsbCE9KG51bGwhPShyPXRoaXMuYmluZGluZ3MpP3JbdF06dm9pZCAwKSl7aWYobnVsbD09ZSlyZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbdF07Zm9yKG49MCxzPVtdO248dGhpcy5iaW5kaW5nc1t0XS5sZW5ndGg7KXRoaXMuYmluZGluZ3NbdF1bbl0uaGFuZGxlcj09PWU/cy5wdXNoKHRoaXMuYmluZGluZ3NbdF0uc3BsaWNlKG4sMSkpOnMucHVzaChuKyspO3JldHVybiBzfX0sWS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbigpe3ZhciB0LGUsbixyLHMsbyxpPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/Si5jYWxsKGFyZ3VtZW50cywxKTpbXTtpZihudWxsIT0ocj10aGlzLmJpbmRpbmdzKSYmcltpXSl7Zm9yKG49MCxvPVtdO248dGhpcy5iaW5kaW5nc1tpXS5sZW5ndGg7KWU9KHM9dGhpcy5iaW5kaW5nc1tpXVtuXSkuaGFuZGxlcix0PXMuY3R4LHM9cy5vbmNlLGUuYXBwbHkobnVsbCE9dD90OnRoaXMsYSkscz9vLnB1c2godGhpcy5iaW5kaW5nc1tpXS5zcGxpY2UobiwxKSk6by5wdXNoKG4rKyk7cmV0dXJuIG99fSxCPVkseT13aW5kb3cuUGFjZXx8e30sd2luZG93LlBhY2U9eSxkKHksQi5wcm90b3R5cGUpLFQ9eS5vcHRpb25zPWQoe30sZyx3aW5kb3cucGFjZU9wdGlvbnMsaygpKSxYPTAsSD0oej1bXCJhamF4XCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIixcImVsZW1lbnRzXCJdKS5sZW5ndGg7WDxIO1grKykhMD09PVRbQz16W1hdXSYmKFRbQ109Z1tDXSk7ZnVuY3Rpb24gWigpe3JldHVybiBaLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gJCgpe3RoaXMucHJvZ3Jlc3M9MH1mdW5jdGlvbiB0dCgpe3RoaXMuYmluZGluZ3M9e319ZnVuY3Rpb24gZXQoKXt2YXIgZSxvPXRoaXM7ZXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlPWZ1bmN0aW9uKHIpe3ZhciBzPXIub3BlbjtyZXR1cm4gci5vcGVuPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gQSh0KSYmby50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOnQsdXJsOmUscmVxdWVzdDpyfSkscy5hcHBseShyLGFyZ3VtZW50cyl9fSx3aW5kb3cuWE1MSHR0cFJlcXVlc3Q9ZnVuY3Rpb24odCl7dD1uZXcgVyh0KTtyZXR1cm4gZSh0KSx0fTt0cnl7bSh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsVyl9Y2F0Y2godCl7fWlmKG51bGwhPVUpe3dpbmRvdy5YRG9tYWluUmVxdWVzdD1mdW5jdGlvbigpe3ZhciB0PW5ldyBVO3JldHVybiBlKHQpLHR9O3RyeXttKHdpbmRvdy5YRG9tYWluUmVxdWVzdCxVKX1jYXRjaCh0KXt9fWlmKG51bGwhPUYmJlQuYWpheC50cmFja1dlYlNvY2tldHMpe3dpbmRvdy5XZWJTb2NrZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1udWxsIT1lP25ldyBGKHQsZSk6bmV3IEYodCk7cmV0dXJuIEEoXCJzb2NrZXRcIikmJm8udHJpZ2dlcihcInJlcXVlc3RcIix7dHlwZTpcInNvY2tldFwiLHVybDp0LHByb3RvY29sczplLHJlcXVlc3Q6bn0pLG59O3RyeXttKHdpbmRvdy5XZWJTb2NrZXQsRil9Y2F0Y2godCl7fX19ZnVuY3Rpb24gbnQoKXt0aGlzLmNvbXBsZXRlPW8odGhpcy5jb21wbGV0ZSx0aGlzKTt2YXIgdD10aGlzO3RoaXMuZWxlbWVudHM9W10sUygpLm9uKFwicmVxdWVzdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHQud2F0Y2guYXBwbHkodCxhcmd1bWVudHMpfSl9ZnVuY3Rpb24gcnQodCl7dmFyIGUsbixyLHM7Zm9yKG51bGw9PXQmJih0PXt9KSx0aGlzLmNvbXBsZXRlPW8odGhpcy5jb21wbGV0ZSx0aGlzKSx0aGlzLmVsZW1lbnRzPVtdLG51bGw9PXQuc2VsZWN0b3JzJiYodC5zZWxlY3RvcnM9W10pLG49MCxyPShzPXQuc2VsZWN0b3JzKS5sZW5ndGg7bjxyO24rKyllPXNbbl0sdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBpKGUsdGhpcy5jb21wbGV0ZSkpfWZ1bmN0aW9uIHN0KHQsZSl7dGhpcy5zZWxlY3Rvcj10LHRoaXMuY29tcGxldGVDYWxsYmFjaz1lLHRoaXMucHJvZ3Jlc3M9MCx0aGlzLmNoZWNrKCl9ZnVuY3Rpb24gb3QoKXt2YXIgdCxlLG49dGhpczt0aGlzLnByb2dyZXNzPW51bGwhPShlPXRoaXMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdKT9lOjEwMCx0PWRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSxkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9bi5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0mJihuLnByb2dyZXNzPW4uc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH19ZnVuY3Rpb24gaXQodCl7dGhpcy5zb3VyY2U9dCx0aGlzLmxhc3Q9dGhpcy5zaW5jZUxhc3RVcGRhdGU9MCx0aGlzLnJhdGU9VC5pbml0aWFsUmF0ZSx0aGlzLmNhdGNodXA9MCx0aGlzLnByb2dyZXNzPXRoaXMubGFzdFByb2dyZXNzPTAsbnVsbCE9dGhpcy5zb3VyY2UmJih0aGlzLnByb2dyZXNzPWoodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKSl9Qj1FcnJvcixRKFosQiksbj1aLCQucHJvdG90eXBlLmdldEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgdDtpZihudWxsPT10aGlzLmVsKXtpZighKHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihULnRhcmdldCkpKXRocm93IG5ldyBuO3RoaXMuZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmVsLmNsYXNzTmFtZT1cInBhY2UgcGFjZS1hY3RpdmVcIixkb2N1bWVudC5ib2R5LmNsYXNzTmFtZT1kb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC8ocGFjZS1kb25lICl8LyxcInBhY2UtcnVubmluZyBcIik7dmFyIGU9XCJcIiE9PVQuY2xhc3NOYW1lP1wiIFwiK1QuY2xhc3NOYW1lOlwiXCI7dGhpcy5lbC5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzJytlKydcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nLG51bGwhPXQuZmlyc3RDaGlsZD90Lmluc2VydEJlZm9yZSh0aGlzLmVsLHQuZmlyc3RDaGlsZCk6dC5hcHBlbmRDaGlsZCh0aGlzLmVsKX1yZXR1cm4gdGhpcy5lbH0sJC5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRFbGVtZW50KCk7cmV0dXJuIHQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLWFjdGl2ZVwiLFwicGFjZS1pbmFjdGl2ZVwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTmFtZT1kb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwicGFjZS1ydW5uaW5nIFwiLFwicGFjZS1kb25lIFwiKX0sJC5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnByb2dyZXNzPXQseS50cmlnZ2VyKFwicHJvZ3Jlc3NcIix0KSx0aGlzLnJlbmRlcigpfSwkLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dHJ5e3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5nZXRFbGVtZW50KCkpfWNhdGNoKHQpe249dH1yZXR1cm4gdGhpcy5lbD12b2lkIDB9LCQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0LGUsbixyLHMsbyxpO2lmKG51bGw9PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoVC50YXJnZXQpKXJldHVybiExO2Zvcih0PXRoaXMuZ2V0RWxlbWVudCgpLHI9XCJ0cmFuc2xhdGUzZChcIit0aGlzLnByb2dyZXNzK1wiJSwgMCwgMClcIixzPTAsbz0oaT1bXCJ3ZWJraXRUcmFuc2Zvcm1cIixcIm1zVHJhbnNmb3JtXCIsXCJ0cmFuc2Zvcm1cIl0pLmxlbmd0aDtzPG87cysrKWU9aVtzXSx0LmNoaWxkcmVuWzBdLnN0eWxlW2VdPXI7cmV0dXJuKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfHx0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfDAhPT10aGlzLnByb2dyZXNzfDApJiYodC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzLXRleHRcIiwoMHx0aGlzLnByb2dyZXNzKStcIiVcIiksMTAwPD10aGlzLnByb2dyZXNzP249XCI5OVwiOihuPXRoaXMucHJvZ3Jlc3M8MTA/XCIwXCI6XCJcIixuKz0wfHRoaXMucHJvZ3Jlc3MpLHQuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc1wiLFwiXCIrbikpLHkudHJpZ2dlcihcImNoYW5nZVwiLHRoaXMucHJvZ3Jlc3MpLHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3M9dGhpcy5wcm9ncmVzc30sJC5wcm90b3R5cGUuZG9uZT1mdW5jdGlvbigpe3JldHVybiAxMDA8PXRoaXMucHJvZ3Jlc3N9LGM9JCx0dC5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0LGUpe3ZhciBuLHIscyxvLGk7aWYobnVsbCE9dGhpcy5iaW5kaW5nc1t0XSl7Zm9yKGk9W10scj0wLHM9KG89dGhpcy5iaW5kaW5nc1t0XSkubGVuZ3RoO3I8cztyKyspbj1vW3JdLGkucHVzaChuLmNhbGwodGhpcyxlKSk7cmV0dXJuIGl9fSx0dC5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gbnVsbD09KG49dGhpcy5iaW5kaW5ncylbdF0mJihuW3RdPVtdKSx0aGlzLmJpbmRpbmdzW3RdLnB1c2goZSl9LHM9dHQsVz13aW5kb3cuWE1MSHR0cFJlcXVlc3QsVT13aW5kb3cuWERvbWFpblJlcXVlc3QsRj13aW5kb3cuV2ViU29ja2V0LG09ZnVuY3Rpb24odCxlKXt2YXIgbixyPVtdO2ZvcihuIGluIGUucHJvdG90eXBlKXRyeXtudWxsPT10W25dJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlW25dP1wiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eT9yLnB1c2goT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Z2V0OmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlLnByb3RvdHlwZVt0XX19KG4pLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSkpOnIucHVzaCh0W25dPWUucHJvdG90eXBlW25dKTpyLnB1c2godm9pZCAwKX1jYXRjaCh0KXswfXJldHVybiByfSxMPVtdLHkuaWdub3JlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzWzBdLGU9Mjw9YXJndW1lbnRzLmxlbmd0aD9KLmNhbGwoYXJndW1lbnRzLDEpOltdO3JldHVybiBMLnVuc2hpZnQoXCJpZ25vcmVcIiksZT10LmFwcGx5KG51bGwsZSksTC5zaGlmdCgpLGV9LHkudHJhY2s9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHNbMF0sZT0yPD1hcmd1bWVudHMubGVuZ3RoP0ouY2FsbChhcmd1bWVudHMsMSk6W107cmV0dXJuIEwudW5zaGlmdChcInRyYWNrXCIpLGU9dC5hcHBseShudWxsLGUpLEwuc2hpZnQoKSxlfSxBPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQmJih0PVwiR0VUXCIpLFwidHJhY2tcIj09PUxbMF0pcmV0dXJuXCJmb3JjZVwiO2lmKCFMLmxlbmd0aCYmVC5hamF4KXtpZihcInNvY2tldFwiPT09dCYmVC5hamF4LnRyYWNrV2ViU29ja2V0cylyZXR1cm4hMDtpZih0PXQudG9VcHBlckNhc2UoKSwwPD1WLmNhbGwoVC5hamF4LnRyYWNrTWV0aG9kcyx0KSlyZXR1cm4hMH1yZXR1cm4hMX0sUShldCxzKSx0PWV0LEQ9bnVsbCxNPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPVQuYWpheC5pZ25vcmVVUkxzLHI9MCxzPW4ubGVuZ3RoO3I8cztyKyspaWYoXCJzdHJpbmdcIj09dHlwZW9mKGU9bltyXSkpe2lmKC0xIT09dC5pbmRleE9mKGUpKXJldHVybiEwfWVsc2UgaWYoZS50ZXN0KHQpKXJldHVybiEwO3JldHVybiExfSwoUz1mdW5jdGlvbigpe3JldHVybiBEPW51bGw9PUQ/bmV3IHQ6RH0pKCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24odCl7dmFyIG8saT10LnR5cGUsYT10LnJlcXVlc3QsZT10LnVybDtpZighTShlKSlyZXR1cm4geS5ydW5uaW5nfHwhMT09PVQucmVzdGFydE9uUmVxdWVzdEFmdGVyJiZcImZvcmNlXCIhPT1BKGkpP3ZvaWQgMDoobz1hcmd1bWVudHMsXCJib29sZWFuXCI9PXR5cGVvZihlPVQucmVzdGFydE9uUmVxdWVzdEFmdGVyfHwwKSYmKGU9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciB0LGUsbixyLHM9XCJzb2NrZXRcIj09PWk/YS5yZWFkeVN0YXRlPDE6MDwocz1hLnJlYWR5U3RhdGUpJiZzPDQ7aWYocyl7Zm9yKHkucmVzdGFydCgpLHI9W10sdD0wLGU9KG49eS5zb3VyY2VzKS5sZW5ndGg7dDxlO3QrKyl7aWYoKEM9blt0XSlpbnN0YW5jZW9mIHUpe0Mud2F0Y2guYXBwbHkoQyxvKTticmVha31yLnB1c2godm9pZCAwKX1yZXR1cm4gcn19LGUpKX0pLG50LnByb3RvdHlwZS53YXRjaD1mdW5jdGlvbih0KXt2YXIgZT10LnR5cGUsbj10LnJlcXVlc3QsdD10LnVybDtpZighTSh0KSlyZXR1cm4gbj1uZXcoXCJzb2NrZXRcIj09PWU/cjphKShuLHRoaXMuY29tcGxldGUpLHRoaXMuZWxlbWVudHMucHVzaChuKX0sbnQucHJvdG90eXBlLmNvbXBsZXRlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVsZW1lbnRzPXRoaXMuZWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0IT09ZX0pfSx1PW50LGE9ZnVuY3Rpb24oZSxuKXt2YXIgdCxyLHMsbyxpPXRoaXM7aWYodGhpcy5wcm9ncmVzcz0wLG51bGwhPXdpbmRvdy5Qcm9ncmVzc0V2ZW50KWZvcihwKGUsXCJwcm9ncmVzc1wiLGZ1bmN0aW9uKHQpe3JldHVybiB0Lmxlbmd0aENvbXB1dGFibGU/aS5wcm9ncmVzcz0xMDAqdC5sb2FkZWQvdC50b3RhbDppLnByb2dyZXNzPWkucHJvZ3Jlc3MrKDEwMC1pLnByb2dyZXNzKS8yfSksdD0wLHI9KG89W1wibG9hZFwiLFwiYWJvcnRcIixcInRpbWVvdXRcIixcImVycm9yXCJdKS5sZW5ndGg7dDxyO3QrKylwKGUsb1t0XSxmdW5jdGlvbigpe3JldHVybiBuKGkpLGkucHJvZ3Jlc3M9MTAwfSk7ZWxzZSBzPWUub25yZWFkeXN0YXRlY2hhbmdlLGUub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIDA9PT0odD1lLnJlYWR5U3RhdGUpfHw0PT09dD8obihpKSxpLnByb2dyZXNzPTEwMCk6Mz09PWUucmVhZHlTdGF0ZSYmKGkucHJvZ3Jlc3M9NTApLFwiZnVuY3Rpb25cIj09dHlwZW9mIHM/cy5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX0scj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbixyPXRoaXMscz10aGlzLnByb2dyZXNzPTAsbz0obj1bXCJlcnJvclwiLFwib3BlblwiXSkubGVuZ3RoO3M8bztzKyspcCh0LG5bc10sZnVuY3Rpb24oKXtyZXR1cm4gZShyKSxyLnByb2dyZXNzPTEwMH0pfSxydC5wcm90b3R5cGUuY29tcGxldGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWxlbWVudHM9dGhpcy5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1lfSl9LGs9cnQsc3QucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKT90aGlzLmRvbmUoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHQuY2hlY2soKX0sVC5lbGVtZW50cy5jaGVja0ludGVydmFsKX0sc3QucHJvdG90eXBlLmRvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21wbGV0ZUNhbGxiYWNrKHRoaXMpLHRoaXMuY29tcGxldGVDYWxsYmFjaz1udWxsLHRoaXMucHJvZ3Jlc3M9MTAwfSxpPXN0LG90LnByb3RvdHlwZS5zdGF0ZXM9e2xvYWRpbmc6MCxpbnRlcmFjdGl2ZTo1MCxjb21wbGV0ZToxMDB9LEI9b3QsUT1mdW5jdGlvbigpe3ZhciBlLG4scixzLG8saT10aGlzO3RoaXMucHJvZ3Jlc3M9MCxvPVtdLHM9MCxyPVAoKSxuPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIHQ9UCgpLXItNTA7cmV0dXJuIHI9UCgpLG8ucHVzaCh0KSxvLmxlbmd0aD5ULmV2ZW50TGFnLnNhbXBsZUNvdW50JiZvLnNoaWZ0KCksZT1oKG8pLCsrcz49VC5ldmVudExhZy5taW5TYW1wbGVzJiZlPFQuZXZlbnRMYWcubGFnVGhyZXNob2xkPyhpLnByb2dyZXNzPTEwMCxjbGVhckludGVydmFsKG4pKTppLnByb2dyZXNzPTMvKGUrMykqMTAwfSw1MCl9LGl0LnByb3RvdHlwZS50aWNrPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIDEwMDw9KGU9bnVsbD09ZT9qKHRoaXMuc291cmNlLFwicHJvZ3Jlc3NcIik6ZSkmJih0aGlzLmRvbmU9ITApLGU9PT10aGlzLmxhc3Q/dGhpcy5zaW5jZUxhc3RVcGRhdGUrPXQ6KHRoaXMuc2luY2VMYXN0VXBkYXRlJiYodGhpcy5yYXRlPShlLXRoaXMubGFzdCkvdGhpcy5zaW5jZUxhc3RVcGRhdGUpLHRoaXMuY2F0Y2h1cD0oZS10aGlzLnByb2dyZXNzKS9ULmNhdGNodXBUaW1lLHRoaXMuc2luY2VMYXN0VXBkYXRlPTAsdGhpcy5sYXN0PWUpLGU+dGhpcy5wcm9ncmVzcyYmKHRoaXMucHJvZ3Jlc3MrPXRoaXMuY2F0Y2h1cCp0KSxlPTEtTWF0aC5wb3codGhpcy5wcm9ncmVzcy8xMDAsVC5lYXNlRmFjdG9yKSx0aGlzLnByb2dyZXNzKz1lKnRoaXMucmF0ZSp0LHRoaXMucHJvZ3Jlc3M9TWF0aC5taW4odGhpcy5sYXN0UHJvZ3Jlc3MrVC5tYXhQcm9ncmVzc1BlckZyYW1lLHRoaXMucHJvZ3Jlc3MpLHRoaXMucHJvZ3Jlc3M9TWF0aC5tYXgoMCx0aGlzLnByb2dyZXNzKSx0aGlzLnByb2dyZXNzPU1hdGgubWluKDEwMCx0aGlzLnByb2dyZXNzKSx0aGlzLmxhc3RQcm9ncmVzcz10aGlzLnByb2dyZXNzLHRoaXMucHJvZ3Jlc3N9LHY9aXQsYj1lPV89dz1FPU49bnVsbCx5LnJ1bm5pbmc9ITEscT1mdW5jdGlvbigpe2lmKFQucmVzdGFydE9uUHVzaFN0YXRlKXJldHVybiB5LnJlc3RhcnQoKX0sbnVsbCE9d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlJiYoST13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHEoKSxJLmFwcGx5KHdpbmRvdy5oaXN0b3J5LGFyZ3VtZW50cyl9KSxudWxsIT13aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUmJihHPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSx3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gcSgpLEcuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLGw9e2FqYXg6dSxlbGVtZW50czprLGRvY3VtZW50OkIsZXZlbnRMYWc6UX0sKHg9ZnVuY3Rpb24oKXt2YXIgdCxlLG4scixzLG8saSxhO2Zvcih5LnNvdXJjZXM9Tj1bXSxlPTAscj0obz1bXCJhamF4XCIsXCJlbGVtZW50c1wiLFwiZG9jdW1lbnRcIixcImV2ZW50TGFnXCJdKS5sZW5ndGg7ZTxyO2UrKykhMSE9PVRbdD1vW2VdXSYmTi5wdXNoKG5ldyBsW3RdKFRbdF0pKTtmb3Iobj0wLHM9KGE9bnVsbCE9KGk9VC5leHRyYVNvdXJjZXMpP2k6W10pLmxlbmd0aDtuPHM7bisrKUM9YVtuXSxOLnB1c2gobmV3IEMoVCkpO3JldHVybiB5LmJhcj13PW5ldyBjLEU9W10sXz1uZXcgdn0pKCkseS5zdG9wPWZ1bmN0aW9uKCl7cmV0dXJuIHkudHJpZ2dlcihcInN0b3BcIikseS5ydW5uaW5nPSExLHcuZGVzdHJveSgpLGI9ITAsbnVsbCE9ZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJmYoZSksZT1udWxsKSx4KCl9LHkucmVzdGFydD1mdW5jdGlvbigpe3JldHVybiB5LnRyaWdnZXIoXCJyZXN0YXJ0XCIpLHkuc3RvcCgpLHkuc3RhcnQoKX0seS5nbz1mdW5jdGlvbigpe3ZhciBtO3JldHVybiB5LnJ1bm5pbmc9ITAsdy5yZW5kZXIoKSxtPVAoKSxiPSExLGU9TyhmdW5jdGlvbih0LGUpe3cucHJvZ3Jlc3M7Zm9yKHZhciBuLHIscyxvLGksYSx1LGMsbCxwLGg9YT0wLGY9ITAsZz11PTAsZD1OLmxlbmd0aDt1PGQ7Zz0rK3UpZm9yKEM9TltnXSxpPW51bGwhPUVbZ10/RVtnXTpFW2ddPVtdLHM9Yz0wLGw9KHI9bnVsbCE9KHA9Qy5lbGVtZW50cyk/cDpbQ10pLmxlbmd0aDtjPGw7cz0rK2Mpbz1yW3NdLGYmPShvPW51bGwhPWlbc10/aVtzXTppW3NdPW5ldyB2KG8pKS5kb25lLG8uZG9uZXx8KGgrKyxhKz1vLnRpY2sodCkpO3JldHVybiBuPWEvaCx3LnVwZGF0ZShfLnRpY2sodCxuKSksdy5kb25lKCl8fGZ8fGI/KHcudXBkYXRlKDEwMCkseS50cmlnZ2VyKFwiZG9uZVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHcuZmluaXNoKCkseS5ydW5uaW5nPSExLHkudHJpZ2dlcihcImhpZGVcIil9LE1hdGgubWF4KFQuZ2hvc3RUaW1lLE1hdGgubWF4KFQubWluVGltZS0oUCgpLW0pLDApKSkpOmUoKX0pfSx5LnN0YXJ0PWZ1bmN0aW9uKHQpe2QoVCx0KSx5LnJ1bm5pbmc9ITA7dHJ5e3cucmVuZGVyKCl9Y2F0Y2godCl7bj10fXJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhY2VcIik/KHkudHJpZ2dlcihcInN0YXJ0XCIpLHkuZ28oKSk6c2V0VGltZW91dCh5LnN0YXJ0LDUwKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiB5fSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9eTpULnN0YXJ0T25QYWdlTG9hZCYmeS5zdGFydCgpfS5jYWxsKHRoaXMpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiYWN0aXZlIiwidGltZW91dCIsImNoZWNrSW50ZXJ2YWwiLCJlbGFwc2VkIiwib24iLCJjaGVja0FjdGl2aXR5IiwidG9hc3RyIiwid2FybmluZyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkYXRhdGFibGVzRnJlbmNoIiwic3dhbCIsInN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyIsIm1peGluIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJTd2FsIiwib3B0aW9ucyIsImZuIiwic2VsZWN0MiIsImFtZCIsImRlZmluZSIsIkxhZGRhIiwibGFkZGEiLCJtb21lbnQiLCJheGlvcyIsInRvZ2dsZSIsImNsaWNrIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJoaWRlIiwiaWQiLCJhdHRyIiwiZmluZEFsbFBhdGllbnRXYXJuaW5ncyIsImlwcCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJhbGVydCIsImFycmF5VG9PcHRpb24iLCJhcnJheSIsImRpc2FibGVPcHRpb25zIiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsIm9wdGlvbiIsIk9wdGlvbiIsInRleHQiLCJpbkFycmF5IiwiZGlzYWJsZWQiLCJkYXRlVGltZVRvU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJtIiwiZ2V0TW9udGgiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUludGVnZXJEaWdpdHMiLCJ1c2VHcm91cGluZyIsImRheSIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImZvcm1hdE51bWJlclRvQ3VycmVuY3kiLCJudW1iZXIiLCJmb3JtYXR0ZWROdW1iZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJsb2FkZXIiLCJ2YWwiLCJwcm9wIiwic2hvdyIsImNvZGVRdW90YXMiLCJxdW90YXMiLCJwb3VyY2VudGFnZSIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJmaWx0ZXIiLCJwcmVwZW5kIiwib3BlbiIsIm1vbnRhbnQiLCJtdCIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwicmVzIiwiaHRtbCIsImRpX2RldCIsImRldCIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiZW1wdHkiLCJhcHBlbmQiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsImNsYXNzTmFtZSIsInJlbmRlciIsImZ1bGwiLCJtZXRhIiwib3JkZXIiLCJsYW5ndWFnZSIsImZyZW5jaEpzb25VcmwiLCJsZW5ndGhNZW51IiwiY3JlYXRlZFJvdyIsInJvdyIsImRhdGFJbmRleCIsImFkZENsYXNzIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInJlc3BvbnNlVGV4dCIsInBhZFRvMkRpZ2l0cyIsIm51bSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRDdXJyZW50RGF0ZSIsIm5vdyIsImdldEN1cnJlbnREYXRldGltZUxvY2FsIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwidXBkYXRlSW5wdXRWYWx1ZXMiLCJzZXRJbnRlcnZhbCIsImlzQ2hlY2tlZCIsInBhdGllbnRzVGFibGUiLCJyZWxvYWQiLCJldmVudCIsImlzIiwidHlwZUFjdGVJZCIsImNvbGxhcHNlSWQiLCJjb25jYXQiLCJwYW5pZXJEZXRDb2xsYXBzZUlkIiwic2xpZGVUb2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJjYXRlZ29yeUlkIiwibmVzdGVkQ29sbGFwc2VJZCIsImNoZWNrZWQiLCJ0eXBlQWN0ZUNoZWNrYm94IiwicGFyZW50IiwicHJldiIsInN1YmNhdGVnb3J5Q2hlY2tib3giLCJyb3dzIiwibm9kZXMiLCJlbCIsImdldCIsImluZGV0ZXJtaW5hdGUiLCJ0YWJsZV9kZXRfZGkiLCJzZWxlY3RlZElkcyIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwicGFyc2VJbnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm10VG90YWwiLCJ0b0ZpeGVkIiwibXRGYWN0dXJhYmxlIiwibXROb25GYWN0dXJhYmxlIiwibW9udGFudERpIiwiY29uc29sZSIsImxvZyIsImRpIiwibWVzc2FnZSIsInRhYmxlX2RldF9kaV90ZWNobmlxdWUiLCJ0ZWNobmlxdWUiLCJtb2RhbCIsIm10VG90YWxSZXN0IiwiYWxsRG9zc2llcnNJbXB1dGF0aW9ucyIsImh0bWwyIiwiY3VycmVudEF0dHJWYWx1ZSIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzIiwiZmlyZSIsInNob3dDbGFzcyIsInBvcHVwIiwicG9zaXRpb24iLCJ0aXRsZSIsInNob3dDYW5jZWxCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJ0aGVuIiwiZG9zc2llckltcHV0YXRpb24iLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsIm8iLCJ0IiwidSIsImMiLCJpIiwicyIsIm4iLCJ5IiwibCIsInYiLCJyIiwiYSIsInAiLCJoIiwidyIsImIiLCJmIiwiZyIsImQiLCJrIiwiUyIsInEiLCJMIiwieCIsIlAiLCJUIiwiUiIsImoiLCJPIiwiRSIsIk0iLCJBIiwiQyIsIk4iLCJfIiwiRiIsIlUiLCJXIiwiWCIsIkQiLCJIIiwiSSIsInoiLCJHIiwiQiIsIkoiLCJzbGljZSIsIksiLCJoYXNPd25Qcm9wZXJ0eSIsIlEiLCJjYWxsIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfX3N1cGVyX18iLCJWIiwiaW5kZXhPZiIsIlkiLCJjYXRjaHVwVGltZSIsImluaXRpYWxSYXRlIiwibWluVGltZSIsImdob3N0VGltZSIsIm1heFByb2dyZXNzUGVyRnJhbWUiLCJlYXNlRmFjdG9yIiwic3RhcnRPblBhZ2VMb2FkIiwicmVzdGFydE9uUHVzaFN0YXRlIiwicmVzdGFydE9uUmVxdWVzdEFmdGVyIiwiZWxlbWVudHMiLCJzZWxlY3RvcnMiLCJldmVudExhZyIsIm1pblNhbXBsZXMiLCJzYW1wbGVDb3VudCIsImxhZ1RocmVzaG9sZCIsInRyYWNrTWV0aG9kcyIsInRyYWNrV2ViU29ja2V0cyIsImlnbm9yZVVSTHMiLCJwZXJmb3JtYW5jZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdHlwZW9mIiwiZXZlbnRMaXN0ZW5lcnMiLCJ0cmlnZ2VyIiwiY2xlYXJUaW1lb3V0IiwiTWF0aCIsImFicyIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYXJzZSIsImJpbmRpbmdzIiwiaGFuZGxlciIsImN0eCIsIm9uY2UiLCJvZmYiLCJzcGxpY2UiLCJQYWNlIiwicGFjZU9wdGlvbnMiLCJaIiwicHJvZ3Jlc3MiLCJ0dCIsImV0IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwiWERvbWFpblJlcXVlc3QiLCJXZWJTb2NrZXQiLCJwcm90b2NvbHMiLCJudCIsImNvbXBsZXRlIiwid2F0Y2giLCJydCIsInN0Iiwic2VsZWN0b3IiLCJjb21wbGV0ZUNhbGxiYWNrIiwiY2hlY2siLCJvdCIsInN0YXRlcyIsInJlYWR5U3RhdGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJpdCIsInNvdXJjZSIsImxhc3QiLCJzaW5jZUxhc3RVcGRhdGUiLCJyYXRlIiwiY2F0Y2h1cCIsImxhc3RQcm9ncmVzcyIsIkVycm9yIiwiZ2V0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZmluaXNoIiwidXBkYXRlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2hpbGRyZW4iLCJsYXN0UmVuZGVyZWRQcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsImRvbmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJpZ25vcmUiLCJ1bnNoaWZ0Iiwic2hpZnQiLCJ0cmFjayIsInRvVXBwZXJDYXNlIiwidGVzdCIsInJ1bm5pbmciLCJyZXN0YXJ0Iiwic291cmNlcyIsIlByb2dyZXNzRXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwibG9hZGVkIiwidG90YWwiLCJsb2FkaW5nIiwiaW50ZXJhY3RpdmUiLCJjbGVhckludGVydmFsIiwidGljayIsInBvdyIsIm1pbiIsIm1heCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJleHRyYVNvdXJjZXMiLCJiYXIiLCJzdG9wIiwic3RhcnQiLCJnbyIsImV4cG9ydHMiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9