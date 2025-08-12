"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["imputation_patient"],{

/***/ "./assets/js/mouvement/imputation_patient.js":
/*!***************************************************!*\
  !*** ./assets/js/mouvement/imputation_patient.js ***!
  \***************************************************/
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../images/facke_img_product.png */ "./assets/images/facke_img_product.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

















































window.addEventListener("DOMContentLoaded", function () {
  var _document$getElementB;
  window.PRODUCTS = window.PRODUCTS || [];
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
    return (_product$image = product.image) !== null && _product$image !== void 0 && _product$image.trim() ? "".concat(basePath).concat(product.image) : _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_48__;
  };
  var addProductToCart = function addProductToCart(productId) {
    var id = Number(productId);
    var product = window.PRODUCTS.find(function (p) {
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
  $('#magasin-select').on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var selectedMagasinId, productGrid, res, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          selectedMagasinId = this.value;
          console.log("Changed to magasin:", selectedMagasinId); // debug
          productGrid = document.getElementById("product-list");
          productGrid.innerHTML = "<p class=\"text-center text-muted\">Chargement...</p>";
          _context.prev = 4;
          _context.next = 7;
          return fetch("/mouvement/api/produits/".concat(selectedMagasinId));
        case 7:
          res = _context.sent;
          _context.next = 10;
          return res.json();
        case 10:
          data = _context.sent;
          window.PRODUCTS = data;
          cart = [];
          searchQuery = "";
          selectedCategory = "all";
          renderFilteredProducts();
          renderCart();
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](4);
          console.error("Erreur lors du chargement des produits", _context.t0);
          toastr.error("Impossible de charger les produits.");
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[4, 19]]);
  })));
  var renderFilteredProducts = function renderFilteredProducts() {
    var filtered = window.PRODUCTS.filter(function (product) {
      var matchCategory = selectedCategory === "all" || product.category === selectedCategory;
      var matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
    productGrid.innerHTML = filtered.map(function (product) {
      return "\n      <div class=\"col-6 p-1 col-sm-4 col-md-3 col-lg-2-4\">\n        <div class=\"card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between\">\n          <button class=\"btn btn-sm btn-primary position-absolute top-right-btn\" data-id=\"".concat(product.id, "\">\n            <i class=\"fa-solid fa-cart-plus\"></i>\n          </button>\n\n          <div class=\"position-absolute top-left-badge\">\n            <div class=\"rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge\">").concat(product.quantity, "</div>\n          </div>\n\n          <div class=\"d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper\">\n            <button class=\"img-clickable border-0 bg-transparent p-0\" data-id=\"").concat(product.id, "\" style=\"cursor: pointer\">\n              <img\n                src=\"").concat(getProductImage(product), "\"\n                onerror=\"this.onerror=null;this.src='").concat(_images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_48__, "'\"\n                alt=\"").concat(product.name, "\"\n                class=\"img-fluid\"\n                style=\"max-height: 80px; object-fit: contain\"\n              />\n            </button>\n          </div>\n\n          <div class=\"text-center mt-2\">\n            \n            <h6 class=\"text-uppercase mb-1 product-title\">\n              ").concat(product.name.length > 16 ? product.name.substring(0, 16) + "..." : product.name, "\n            </h6>\n            <p class=\"text-danger fw-bold mb-0 product-price\">\n              ").concat(Number(product.price).toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).replace(/\s/g, "\xA0"), " DH\n            </p>\n          </div>\n        </div>\n      </div>\n    ");
    }).join("");
  };
  var renderCart = function renderCart() {
    var subtotal = 0;
    var cartHTML = cart.map(function (item) {
      var _product$quantity;
      var product = window.PRODUCTS.find(function (p) {
        return p.id === item.id;
      });
      var stock = (_product$quantity = product === null || product === void 0 ? void 0 : product.quantity) !== null && _product$quantity !== void 0 ? _product$quantity : 0;
      subtotal += item.price * item.quantity;
      return "\n      <div class=\"d-flex align-items-center border-bottom py-1 cart-item\" data-id=\"".concat(item.id, "\" style=\"width: 100%; font-size: 0.85rem\">\n        \n      <div style=\"width: 75%\" class=\"d-flex justify-content-between align-items-center text-uppercase fw-semibold text-truncate\">\n        <span class=\"text-truncate\" style=\"max-width: 80%\">").concat(item.name, "</span>\n        <span class=\"text-danger fw-bold\">\n        ").concat(item.price.toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).replace(/\s/g, "\xA0"), "\n        </span>\n        </div>\n\n      <div style=\"width: 30%\" class=\"d-flex justify-content-end align-items-center gap-2 text-end ps-2\">\n        <div class=\"d-flex align-items-center bg-light rounded-pill qty-control\" style=\"font-size: 0.8rem\">\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease\" style=\"width: 18px\">\n            <i class=\"fa-solid fa-minus\"></i>\n          </button>\n          <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\" value=\"").concat(item.quantity, "\"  style=\"width: auto; max-width: 36px; padding: 0 4px;\"  />\n\n          <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase\" style=\"width: 18px\">\n            <i class=\"fa-solid fa-plus\"></i>\n          </button>\n        </div>\n\n        \n\n\n        <button class=\"btn btn-sm btn-remove text-danger bg-transparent border-0\" title=\"Supprimer\">\n          <i class=\"fa-solid fa-trash\"></i>\n        </button>\n      </div>\n    </div>\n      </div>\n    ");
    }).join("");
    cartContainer.innerHTML = cartHTML;
    subtotalElement.innerText = "".concat(subtotal.toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(/\s/g, "\xA0"), " DH");
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
  var isCommandLocked = false;
  commanderButton === null || commanderButton === void 0 ? void 0 : commanderButton.addEventListener("click", function (e) {
    var _pendingDemande$;
    e.preventDefault();
    if (isCommandLocked) return;
    if (cart.length === 0) {
      toastr.error("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }
    isCommandLocked = true;
    pendingDemande = cart.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
        category: item.category,
        magasin_id: item.magasin_id
      };
    });

    // Set the select box value to the magasin_id
    var magasinId = (_pendingDemande$ = pendingDemande[0]) === null || _pendingDemande$ === void 0 ? void 0 : _pendingDemande$.magasin_id;
    var demandeurSelect = document.getElementById("demandeur_id");
    if (demandeurSelect && magasinId) {
      $(demandeurSelect).val(magasinId).trigger('change');
    }

    // Show modal
    $("#addCommande").modal("show");

    // Reset lock when modal is closed
    $('#addCommande').on('hidden.bs.modal', function () {
      isCommandLocked = false;
    });
  });

  // Handle Demandeur and Traitement options
  var defaultTraitementMagasins = window.DEFAULT_TRAITEMENT_IDS || [];
  var handleTraitementOptions = function handleTraitementOptions() {
    var selectedDemandeurId = document.getElementById("demandeur_id").value;
    var $traitementSelect = $("#recepteur_id");
    var $demandeurSelect = $("#demandeur_id");
    var currentTraitementId = $traitementSelect.val();
    var stillValid = false;
    var hasSameOption = false;
    $traitementSelect.find("option").each(function () {
      var option = $(this);
      var value = option.attr("value");
      if (!value) return;
      var isDefault = defaultTraitementMagasins.includes(Number(value));
      var isSame = value === selectedDemandeurId;
      var shouldDisable = isDefault && !isSame;
      option.prop("disabled", shouldDisable);
      if (!shouldDisable && value === currentTraitementId) {
        stillValid = true;
      }
      if (isSame && !shouldDisable) {
        hasSameOption = true;
      }
    });
    if (!stillValid) {
      $traitementSelect.val("");
    }
    if (hasSameOption) {
      $traitementSelect.val(selectedDemandeurId);
    }

    //  Refresh Select2 dropdowns
    $traitementSelect.trigger("change.select2");
    $demandeurSelect.trigger("change.select2");
  };
  $(document).ready(function () {
    var $typeDemande = $('#type_demande');
    var $patientFields = $('#patient-fields');
    var $notPatientFields = $('#not-patient-fields');
    var $ipp = $('#ipp');
    var $nomPatient = $('#nom_patient');
    var $dossierPatient = $('#dossier_patient');

    // Initialize Select2 only if not already initialized
    if (!$typeDemande.hasClass("select2-hidden-accessible")) {
      $typeDemande.select2({
        width: '100%'
      });
    }
    function togglePatientFields() {
      var selectedValue = $typeDemande.val();
      if (selectedValue === '2') {
        $patientFields.show();
        $notPatientFields.hide();
        $ipp.prop('required', true);
        $nomPatient.prop('required', true);
        $dossierPatient.prop('required', true);
      } else {
        $patientFields.hide();
        $notPatientFields.show();

        // Clear and remove required attributes
        $ipp.val('').prop('required', false);
        $nomPatient.val('').prop('required', false);
        $dossierPatient.empty().prop('required', false);
      }
    }

    // Initial toggle on page load
    togglePatientFields();

    // Toggle on change
    $typeDemande.on('change', togglePatientFields);
  });

  // Bind change event for Demandeur
  $("#demandeur_id").on("change", function () {
    setTimeout(handleTraitementOptions, 0);
  });
  handleTraitementOptions(); // Run on load

  // IPP autofill on Enter for set patient name and dossier
  var ippInput = document.getElementById("ipp");
  var nomInput = document.getElementById("nom_patient");
  var dossierSelect = document.getElementById("dossier_patient");
  nomInput.disabled = true;
  dossierSelect.disabled = true;
  ippInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var ipp = ippInput.value.trim();
      var patient = (window.infos_patient || []).find(function (p) {
        return p.ipp === ipp;
      });
      if (patient) {
        nomInput.value = patient.nom;
        dossierSelect.innerHTML = ""; // clear previous

        var dossiers = Array.isArray(patient.dossier) ? patient.dossier : [patient.dossier];
        dossiers.forEach(function (d) {
          var option = document.createElement("option");
          option.value = d;
          option.textContent = d;
          dossierSelect.appendChild(option);
        });
        dossierSelect.disabled = false;
      } else {
        nomInput.value = "";
        dossierSelect.innerHTML = "";
        dossierSelect.disabled = true;
        toastr.error("Aucun patient trouvé avec cet IPP");
      }
    }
  });

  // Handle form submission
  (_document$getElementB = document.getElementById("submit-demande")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var btn, typeDemande, requiredFields, _i, _requiredFields, field, el, data, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          btn = document.getElementById("submit-demande");
          btn.disabled = true;
          typeDemande = document.getElementById("type_demande").value;
          requiredFields = [{
            id: "demandeur_id",
            label: "Magasin Demandeur"
          }, {
            id: "recepteur_id",
            label: "Magasin de Traitement"
          }, {
            id: "description_patient",
            label: "Description"
          }, {
            id: "ipp",
            label: "IPP"
          }, {
            id: "nom_patient",
            label: "Nom Patient"
          }, {
            id: "dossier_patient",
            label: "Dossier Patient"
          }];
          _i = 0, _requiredFields = requiredFields;
        case 5:
          if (!(_i < _requiredFields.length)) {
            _context2.next = 15;
            break;
          }
          field = _requiredFields[_i];
          el = document.getElementById(field.id);
          if (!(!el || !el.value.trim())) {
            _context2.next = 12;
            break;
          }
          toastr.error("Champ obligatoire : ".concat(field.label));
          btn.disabled = false;
          return _context2.abrupt("return");
        case 12:
          _i++;
          _context2.next = 5;
          break;
        case 15:
          // if (document.getElementById("demandeur_id").value === document.getElementById("recepteur_id").value) {
          //   toastr.error("Veuillez changer le magasin de traitement.");
          //   btn.disabled = false;
          //   return;
          // }
          data = {
            type_demande: typeDemande,
            demandeur_id: document.getElementById("demandeur_id").value,
            recepteur_id: document.getElementById("recepteur_id").value,
            urgent: document.getElementById("urgent").checked ? 1 : 0,
            description: document.getElementById("description_patient").value,
            ipp: document.getElementById("ipp").value,
            nom_patient: document.getElementById("nom_patient").value,
            dossier_patient: document.getElementById("dossier_patient").value,
            lignes: pendingDemande
          };
          _context2.prev = 16;
          _context2.next = 19;
          return fetch("/mouvement/save-demande", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify(data)
          });
        case 19:
          res = _context2.sent;
          if (res.ok) {
            _context2.next = 22;
            break;
          }
          throw new Error();
        case 22:
          toastr.success("Commande enregistrée avec succès !");
          $("#addCommande").modal("hide");
          cart = [];
          renderCart();
          _context2.next = 32;
          break;
        case 28:
          _context2.prev = 28;
          _context2.t0 = _context2["catch"](16);
          console.error(_context2.t0);
          toastr.error("Erreur lors de l'enregistrement de la commande");
        case 32:
          _context2.prev = 32;
          btn.disabled = false;
          return _context2.finish(32);
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[16, 28, 32, 35]]);
  })));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6f202c","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-02d11e","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-f43311","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/mouvement/imputation_patient.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQyxrQkFBa0IsRUFBRTtZQUN0QixDQUFDO1lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNqSSxJQUFJO1VBQzNCLENBQUMsQ0FBQztRQUFBO1VBUEl2QyxHQUFHLEdBQUEySixTQUFBLENBQUF6UCxJQUFBO1VBQUEsSUFTSjhGLEdBQUcsQ0FBQ3lLLEVBQUU7WUFBQWQsU0FBQSxDQUFBL08sSUFBQTtZQUFBO1VBQUE7VUFBQSxNQUFRLElBQUlmLEtBQUssQ0FBQyxDQUFDO1FBQUE7VUFDOUJvSixNQUFNLENBQUN5SCxPQUFPLENBQUMsb0NBQW9DLENBQUM7VUFDcER2SSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNpRSxLQUFLLENBQUMsTUFBTSxDQUFDO1VBQy9CN0YsSUFBSSxHQUFHLEVBQUU7VUFDVDJCLFVBQVUsQ0FBQyxDQUFDO1VBQUN5SCxTQUFBLENBQUEvTyxJQUFBO1VBQUE7UUFBQTtVQUFBK08sU0FBQSxDQUFBek0sSUFBQTtVQUFBeU0sU0FBQSxDQUFBM0csRUFBQSxHQUFBMkcsU0FBQTtVQUViakgsT0FBTyxDQUFDakosS0FBSyxDQUFBa1EsU0FBQSxDQUFBM0csRUFBSSxDQUFDO1VBQ2xCQyxNQUFNLENBQUN4SixLQUFLLENBQUMsZ0RBQWdELENBQUM7UUFBQztVQUFBa1EsU0FBQSxDQUFBek0sSUFBQTtVQUUvRGdJLEdBQUcsQ0FBQ3NELFFBQVEsR0FBRyxLQUFLO1VBQUMsT0FBQW1CLFNBQUEsQ0FBQTNMLE1BQUE7UUFBQTtRQUFBO1VBQUEsT0FBQTJMLFNBQUEsQ0FBQXRNLElBQUE7TUFBQTtJQUFBLEdBQUFnTSxRQUFBO0VBQUEsQ0FFeEIsR0FBQztBQUlKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb3V2ZW1lbnQvaW1wdXRhdGlvbl9wYXRpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYWNrZV9pbWdfcHJvZHVjdCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2ZhY2tlX2ltZ19wcm9kdWN0LnBuZ1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICB3aW5kb3cuUFJPRFVDVFMgPSB3aW5kb3cuUFJPRFVDVFMgfHwgW107XHJcbiAgbGV0IGNhcnQgPSBbXTtcclxuICBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsXCI7XHJcbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gXCJcIjtcclxuICBsZXQgcGVuZGluZ0RlbWFuZGUgPSBbXTtcclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3VidG90YWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LXN1YnRvdGFsXCIpO1xyXG4gIGNvbnN0IHByb2R1Y3RHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWxpc3RcIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2VhcmNoXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktbmF2LWJ0blwiKTtcclxuXHJcbiAgLy8gVXRpbGl0aWVzXHJcbiAgY29uc3QgZ2V0UHJvZHVjdEltYWdlID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IGJhc2VQYXRoID0gXCIvaW1hZ2VzL3Byb2R1Y3RzL1wiO1xyXG4gICAgcmV0dXJuIHByb2R1Y3QuaW1hZ2U/LnRyaW0oKVxyXG4gICAgICA/IGAke2Jhc2VQYXRofSR7cHJvZHVjdC5pbWFnZX1gXHJcbiAgICAgIDogZmFja2VfaW1nX3Byb2R1Y3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0SWQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gTnVtYmVyKHByb2R1Y3RJZCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gd2luZG93LlBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgIGlmICghcHJvZHVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBzdG9jayA9IHByb2R1Y3QucXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIGlmIChleGlzdGluZy5xdWFudGl0eSA8IHN0b2NrKSBleGlzdGluZy5xdWFudGl0eSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydC5wdXNoKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG4gIH07XHJcblxyXG4gICQoJyNtYWdhc2luLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRNYWdhc2luSWQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkNoYW5nZWQgdG8gbWFnYXNpbjpcIiwgc2VsZWN0ZWRNYWdhc2luSWQpOyAvLyBkZWJ1Z1xyXG5cclxuICBjb25zdCBwcm9kdWN0R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1saXN0XCIpO1xyXG4gIHByb2R1Y3RHcmlkLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWRcIj5DaGFyZ2VtZW50Li4uPC9wPmA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL21vdXZlbWVudC9hcGkvcHJvZHVpdHMvJHtzZWxlY3RlZE1hZ2FzaW5JZH1gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgd2luZG93LlBST0RVQ1RTID0gZGF0YTsgXHJcbiAgICAgIGNhcnQgPSBbXTsgICAgICAgICAgICBcclxuICAgICAgc2VhcmNoUXVlcnkgPSBcIlwiOyAgICAgXHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbFwiO1xyXG5cclxuICAgICAgcmVuZGVyRmlsdGVyZWRQcm9kdWN0cygpOyBcclxuICAgICAgcmVuZGVyQ2FydCgpOyAgICAgICAgICAgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHByb2R1aXRzXCIsIGVycik7XHJcbiAgICB0b2FzdHIuZXJyb3IoXCJJbXBvc3NpYmxlIGRlIGNoYXJnZXIgbGVzIHByb2R1aXRzLlwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbHRlcmVkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHdpbmRvdy5QUk9EVUNUUy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hDYXRlZ29yeSA9XHJcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fCBwcm9kdWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9IHByb2R1Y3QubmFtZVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICByZXR1cm4gbWF0Y2hDYXRlZ29yeSAmJiBtYXRjaFNlYXJjaDtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2R1Y3RHcmlkLmlubmVySFRNTCA9IGZpbHRlcmVkXHJcbiAgICAgIC5tYXAoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHAtMSBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcHJvZHVjdC1jYXJkIHNoYWRvdy1zbSBib3JkZXItMCByb3VuZGVkLTQgcHgtMiBwdC0zIHBiLTIgaC0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtcmlnaHQtYnRuXCIgZGF0YS1pZD1cIiR7XHJcbiAgICAgICAgICAgIHByb2R1Y3QuaWRcclxuICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJ0LXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLWxlZnQtYmFkZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIGJnLWRhbmdlciB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwcm9kdWN0LWJhZGdlXCI+JHtcclxuICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5XHJcbiAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyIHJvdW5kZWQgcC0xIHByb2R1Y3QtaW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImltZy1jbGlja2FibGUgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgcC0wXCIgZGF0YS1pZD1cIiR7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdC5pZFxyXG4gICAgICAgICAgICB9XCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIke2dldFByb2R1Y3RJbWFnZShwcm9kdWN0KX1cIlxyXG4gICAgICAgICAgICAgICAgb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsO3RoaXMuc3JjPScke2ZhY2tlX2ltZ19wcm9kdWN0fSdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiJHtwcm9kdWN0Lm5hbWV9XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogODBweDsgb2JqZWN0LWZpdDogY29udGFpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC11cHBlcmNhc2UgbWItMSBwcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QubmFtZS5sZW5ndGggPiAxNlxyXG4gICAgICAgICAgICAgICAgICA/IHByb2R1Y3QubmFtZS5zdWJzdHJpbmcoMCwgMTYpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICA6IHByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkIG1iLTAgcHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICR7TnVtYmVyKHByb2R1Y3QucHJpY2UpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICB9KS5yZXBsYWNlKC9cXHMvZywgJ1xcdTAwQTAnKX0gREhcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgICApXHJcbiAgICAgIC5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNhcnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc3VidG90YWwgPSAwO1xyXG5cclxuICAgIGNvbnN0IGNhcnRIVE1MID0gY2FydFxyXG4gICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHdpbmRvdy5QUk9EVUNUUy5maW5kKChwKSA9PiBwLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgICBjb25zdCBzdG9jayA9IHByb2R1Y3Q/LnF1YW50aXR5ID8/IDA7XHJcbiAgICAgICAgc3VidG90YWwgKz0gaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7XHJcblxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1ib3R0b20gcHktMSBjYXJ0LWl0ZW1cIiBkYXRhLWlkPVwiJHtcclxuICAgICAgICBpdGVtLmlkXHJcbiAgICAgIH1cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBmb250LXNpemU6IDAuODVyZW1cIj5cclxuICAgICAgICBcclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA3NSVcIiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC11cHBlcmNhc2UgZnctc2VtaWJvbGQgdGV4dC10cnVuY2F0ZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC10cnVuY2F0ZVwiIHN0eWxlPVwibWF4LXdpZHRoOiA4MCVcIj4ke2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkXCI+XHJcbiAgICAgICAgJHtpdGVtLnByaWNlLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICB9KS5yZXBsYWNlKC9cXHMvZywgJ1xcdTAwQTAnKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDMwJVwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyIGdhcC0yIHRleHQtZW5kIHBzLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodCByb3VuZGVkLXBpbGwgcXR5LWNvbnRyb2xcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC44cmVtXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrIGJ0bi1kZWNyZWFzZVwiIHN0eWxlPVwid2lkdGg6IDE4cHhcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHRleHQtY2VudGVyIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHF0eS1pbnB1dFwiIHZhbHVlPVwiJHtcclxuICAgICAgICAgICAgaXRlbS5xdWFudGl0eVxyXG4gICAgICAgICAgfVwiICBzdHlsZT1cIndpZHRoOiBhdXRvOyBtYXgtd2lkdGg6IDM2cHg7IHBhZGRpbmc6IDAgNHB4O1wiICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmsgYnRuLWluY3JlYXNlXCIgc3R5bGU9XCJ3aWR0aDogMThweFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcmVtb3ZlIHRleHQtZGFuZ2VyIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wXCIgdGl0bGU9XCJTdXBwcmltZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCJcIik7XHJcblxyXG4gICAgY2FydENvbnRhaW5lci5pbm5lckhUTUwgPSBjYXJ0SFRNTDtcclxuICAgIHN1YnRvdGFsRWxlbWVudC5pbm5lclRleHQgPSBgJHtzdWJ0b3RhbC50b0xvY2FsZVN0cmluZygnZnItRlInLCBcclxuICAgICAge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgIH0pLnJlcGxhY2UoL1xccy9nLCAnXFx1MDBBMCcpfSBESGA7XHJcbiAgfTtcclxuXHJcbiAgLy8gVmFsaWRhdGUgZm9ybSBmaWVsZHNcclxuICBjb25zdCB2YWxpZGF0ZUZvcm1GaWVsZHMgPSAoZmllbGRzKSA9PiB7XHJcbiAgICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZC5pZCk7XHJcbiAgICAgIGlmICghZWwgfHwgIWVsLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihgVmV1aWxsZXogcmVtcGxpciBsZSBjaGFtcCA6ICR7ZmllbGQubGFiZWx9YCk7XHJcbiAgICAgICAgZWwuZm9jdXMoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIC8vIEV2ZW50c1xyXG4gIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYXRlZ29yeUJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5kYXRhc2V0LmNhdGVnb3J5O1xyXG4gICAgICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWlkXVwiKTtcclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtcmlnaHQtYnRuXCIpIHx8XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW1nLWNsaWNrYWJsZVwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGFkZFByb2R1Y3RUb0NhcnQodGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi5jYXJ0LWl0ZW1cIik7XHJcbiAgICBpZiAoIWNhcnRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWQgPSBOdW1iZXIoY2FydEl0ZW0uZGF0YXNldC5pZCk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5idG4taW5jcmVhc2VcIikpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAoaXRlbSkgaXRlbS5xdWFudGl0eSsrO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuYnRuLWRlY3JlYXNlXCIpKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjYXJ0LmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5xdWFudGl0eSA+IDEpIGl0ZW0ucXVhbnRpdHktLTtcclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmJ0bi1yZW1vdmVcIikpIHtcclxuICAgICAgY2FydCA9IGNhcnQuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBpZCk7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmVuZGVyRmlsdGVyZWRQcm9kdWN0cygpO1xyXG5cclxuICAvLyBIYW5kbGUgU3VibWl0IGNvb21hbmRlclxyXG4gIGNvbnN0IGNvbW1hbmRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhcmdldD1cIiNhZGRDb21tYW5kZVwiXScpO1xyXG4gIGxldCBpc0NvbW1hbmRMb2NrZWQgPSBmYWxzZTtcclxuXHJcbiAgY29tbWFuZGVyQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc0NvbW1hbmRMb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoY2FydC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiVm90cmUgcGFuaWVyIGVzdCB2aWRlLiBBam91dGV6IGRlcyBwcm9kdWl0cyBhdmFudCBkZSBjb21tYW5kZXIuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21tYW5kTG9ja2VkID0gdHJ1ZTtcclxuXHJcbiAgICBwZW5kaW5nRGVtYW5kZSA9IGNhcnQubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksXHJcbiAgICAgIG1hZ2FzaW5faWQ6IGl0ZW0ubWFnYXNpbl9pZCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIHNlbGVjdCBib3ggdmFsdWUgdG8gdGhlIG1hZ2FzaW5faWRcclxuICAgIGNvbnN0IG1hZ2FzaW5JZCA9IHBlbmRpbmdEZW1hbmRlWzBdPy5tYWdhc2luX2lkO1xyXG4gICAgY29uc3QgZGVtYW5kZXVyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1hbmRldXJfaWRcIik7XHJcbiAgICBpZiAoZGVtYW5kZXVyU2VsZWN0ICYmIG1hZ2FzaW5JZCkge1xyXG4gICAgICAkKGRlbWFuZGV1clNlbGVjdCkudmFsKG1hZ2FzaW5JZCkudHJpZ2dlcignY2hhbmdlJyk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgbW9kYWxcclxuICAgICQoXCIjYWRkQ29tbWFuZGVcIikubW9kYWwoXCJzaG93XCIpO1xyXG5cclxuICAgIC8vIFJlc2V0IGxvY2sgd2hlbiBtb2RhbCBpcyBjbG9zZWRcclxuICAgICQoJyNhZGRDb21tYW5kZScpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgIGlzQ29tbWFuZExvY2tlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy8gSGFuZGxlIERlbWFuZGV1ciBhbmQgVHJhaXRlbWVudCBvcHRpb25zXHJcbiAgY29uc3QgZGVmYXVsdFRyYWl0ZW1lbnRNYWdhc2lucyA9IHdpbmRvdy5ERUZBVUxUX1RSQUlURU1FTlRfSURTIHx8IFtdO1xyXG4gIGNvbnN0IGhhbmRsZVRyYWl0ZW1lbnRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREZW1hbmRldXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtYW5kZXVyX2lkXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgJHRyYWl0ZW1lbnRTZWxlY3QgPSAkKFwiI3JlY2VwdGV1cl9pZFwiKTtcclxuICAgIGNvbnN0ICRkZW1hbmRldXJTZWxlY3QgPSAkKFwiI2RlbWFuZGV1cl9pZFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUcmFpdGVtZW50SWQgPSAkdHJhaXRlbWVudFNlbGVjdC52YWwoKTtcclxuICAgIGxldCBzdGlsbFZhbGlkID0gZmFsc2U7XHJcbiAgICBsZXQgaGFzU2FtZU9wdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICR0cmFpdGVtZW50U2VsZWN0LmZpbmQoXCJvcHRpb25cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9ICQodGhpcyk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiKTtcclxuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgaXNEZWZhdWx0ID0gZGVmYXVsdFRyYWl0ZW1lbnRNYWdhc2lucy5pbmNsdWRlcyhOdW1iZXIodmFsdWUpKTtcclxuICAgICAgY29uc3QgaXNTYW1lID0gdmFsdWUgPT09IHNlbGVjdGVkRGVtYW5kZXVySWQ7XHJcbiAgICAgIGNvbnN0IHNob3VsZERpc2FibGUgPSBpc0RlZmF1bHQgJiYgIWlzU2FtZTtcclxuXHJcbiAgICAgIG9wdGlvbi5wcm9wKFwiZGlzYWJsZWRcIiwgc2hvdWxkRGlzYWJsZSk7XHJcblxyXG4gICAgICBpZiAoIXNob3VsZERpc2FibGUgJiYgdmFsdWUgPT09IGN1cnJlbnRUcmFpdGVtZW50SWQpIHtcclxuICAgICAgICBzdGlsbFZhbGlkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzU2FtZSAmJiAhc2hvdWxkRGlzYWJsZSkge1xyXG4gICAgICAgIGhhc1NhbWVPcHRpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXN0aWxsVmFsaWQpIHtcclxuICAgICAgJHRyYWl0ZW1lbnRTZWxlY3QudmFsKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGhhc1NhbWVPcHRpb24pIHtcclxuICAgICAgJHRyYWl0ZW1lbnRTZWxlY3QudmFsKHNlbGVjdGVkRGVtYW5kZXVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBSZWZyZXNoIFNlbGVjdDIgZHJvcGRvd25zXHJcbiAgICAkdHJhaXRlbWVudFNlbGVjdC50cmlnZ2VyKFwiY2hhbmdlLnNlbGVjdDJcIik7XHJcbiAgICAkZGVtYW5kZXVyU2VsZWN0LnRyaWdnZXIoXCJjaGFuZ2Uuc2VsZWN0MlwiKTtcclxuICB9O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0ICR0eXBlRGVtYW5kZSA9ICQoJyN0eXBlX2RlbWFuZGUnKTtcclxuICBjb25zdCAkcGF0aWVudEZpZWxkcyA9ICQoJyNwYXRpZW50LWZpZWxkcycpO1xyXG4gIGNvbnN0ICRub3RQYXRpZW50RmllbGRzID0gJCgnI25vdC1wYXRpZW50LWZpZWxkcycpO1xyXG4gIGNvbnN0ICRpcHAgPSAkKCcjaXBwJyk7XHJcbiAgY29uc3QgJG5vbVBhdGllbnQgPSAkKCcjbm9tX3BhdGllbnQnKTtcclxuICBjb25zdCAkZG9zc2llclBhdGllbnQgPSAkKCcjZG9zc2llcl9wYXRpZW50Jyk7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgU2VsZWN0MiBvbmx5IGlmIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkXHJcbiAgaWYgKCEkdHlwZURlbWFuZGUuaGFzQ2xhc3MoXCJzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlXCIpKSB7XHJcbiAgICAkdHlwZURlbWFuZGUuc2VsZWN0Mih7IHdpZHRoOiAnMTAwJScgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVQYXRpZW50RmllbGRzKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9ICR0eXBlRGVtYW5kZS52YWwoKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJzInKSB7XHJcbiAgICAgICRwYXRpZW50RmllbGRzLnNob3coKTtcclxuICAgICAgJG5vdFBhdGllbnRGaWVsZHMuaGlkZSgpO1xyXG5cclxuICAgICAgJGlwcC5wcm9wKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgICAkbm9tUGF0aWVudC5wcm9wKCdyZXF1aXJlZCcsIHRydWUpO1xyXG4gICAgICAkZG9zc2llclBhdGllbnQucHJvcCgncmVxdWlyZWQnLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRwYXRpZW50RmllbGRzLmhpZGUoKTtcclxuICAgICAgJG5vdFBhdGllbnRGaWVsZHMuc2hvdygpO1xyXG5cclxuICAgICAgLy8gQ2xlYXIgYW5kIHJlbW92ZSByZXF1aXJlZCBhdHRyaWJ1dGVzXHJcbiAgICAgICRpcHAudmFsKCcnKS5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKTtcclxuICAgICAgJG5vbVBhdGllbnQudmFsKCcnKS5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKTtcclxuICAgICAgJGRvc3NpZXJQYXRpZW50LmVtcHR5KCkucHJvcCgncmVxdWlyZWQnLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsIHRvZ2dsZSBvbiBwYWdlIGxvYWRcclxuICB0b2dnbGVQYXRpZW50RmllbGRzKCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBvbiBjaGFuZ2VcclxuICAkdHlwZURlbWFuZGUub24oJ2NoYW5nZScsIHRvZ2dsZVBhdGllbnRGaWVsZHMpO1xyXG59KTtcclxuXHJcblxyXG4gIC8vIEJpbmQgY2hhbmdlIGV2ZW50IGZvciBEZW1hbmRldXJcclxuICAkKFwiI2RlbWFuZGV1cl9pZFwiKS5vbihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KGhhbmRsZVRyYWl0ZW1lbnRPcHRpb25zLCAwKTtcclxuICB9KTtcclxuXHJcbiAgaGFuZGxlVHJhaXRlbWVudE9wdGlvbnMoKTsgLy8gUnVuIG9uIGxvYWRcclxuXHJcbiAgLy8gSVBQIGF1dG9maWxsIG9uIEVudGVyIGZvciBzZXQgcGF0aWVudCBuYW1lIGFuZCBkb3NzaWVyXHJcbiAgY29uc3QgaXBwSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwcFwiKTtcclxuICBjb25zdCBub21JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tX3BhdGllbnRcIik7XHJcbiAgY29uc3QgZG9zc2llclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9zc2llcl9wYXRpZW50XCIpO1xyXG5cclxuICBub21JbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgZG9zc2llclNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gIGlwcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpcHAgPSBpcHBJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgIGNvbnN0IHBhdGllbnQgPSAod2luZG93LmluZm9zX3BhdGllbnQgfHwgW10pLmZpbmQoKHApID0+IHAuaXBwID09PSBpcHApO1xyXG5cclxuICAgICAgaWYgKHBhdGllbnQpIHtcclxuICAgICAgICBub21JbnB1dC52YWx1ZSA9IHBhdGllbnQubm9tO1xyXG4gICAgICAgIGRvc3NpZXJTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjsgLy8gY2xlYXIgcHJldmlvdXNcclxuXHJcbiAgICAgICAgY29uc3QgZG9zc2llcnMgPSBBcnJheS5pc0FycmF5KHBhdGllbnQuZG9zc2llcilcclxuICAgICAgICAgID8gcGF0aWVudC5kb3NzaWVyXHJcbiAgICAgICAgICA6IFtwYXRpZW50LmRvc3NpZXJdO1xyXG5cclxuICAgICAgICBkb3NzaWVycy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgb3B0aW9uLnZhbHVlID0gZDtcclxuICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGQ7XHJcbiAgICAgICAgICBkb3NzaWVyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvc3NpZXJTZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBub21JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZG9zc2llclNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGRvc3NpZXJTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkF1Y3VuIHBhdGllbnQgdHJvdXbDqSBhdmVjIGNldCBJUFBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1kZW1hbmRlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtZGVtYW5kZVwiKTtcclxuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgdHlwZURlbWFuZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVfZGVtYW5kZVwiKS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFtcclxuICAgICAgeyBpZDogXCJkZW1hbmRldXJfaWRcIiwgbGFiZWw6IFwiTWFnYXNpbiBEZW1hbmRldXJcIiB9LFxyXG4gICAgICB7IGlkOiBcInJlY2VwdGV1cl9pZFwiLCBsYWJlbDogXCJNYWdhc2luIGRlIFRyYWl0ZW1lbnRcIiB9LFxyXG4gICAgICB7IGlkOiBcImRlc2NyaXB0aW9uX3BhdGllbnRcIiwgbGFiZWw6IFwiRGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICB7IGlkOiBcImlwcFwiLCBsYWJlbDogXCJJUFBcIiB9LFxyXG4gICAgICB7IGlkOiBcIm5vbV9wYXRpZW50XCIsIGxhYmVsOiBcIk5vbSBQYXRpZW50XCIgfSxcclxuICAgICAgeyBpZDogXCJkb3NzaWVyX3BhdGllbnRcIiwgbGFiZWw6IFwiRG9zc2llciBQYXRpZW50XCIgfVxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGxldCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkLmlkKTtcclxuICAgICAgaWYgKCFlbCB8fCAhZWwudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGBDaGFtcCBvYmxpZ2F0b2lyZSA6ICR7ZmllbGQubGFiZWx9YCk7XHJcbiAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtYW5kZXVyX2lkXCIpLnZhbHVlID09PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSkge1xyXG4gICAgLy8gICB0b2FzdHIuZXJyb3IoXCJWZXVpbGxleiBjaGFuZ2VyIGxlIG1hZ2FzaW4gZGUgdHJhaXRlbWVudC5cIik7XHJcbiAgICAvLyAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdHlwZV9kZW1hbmRlOiB0eXBlRGVtYW5kZSxcclxuICAgICAgZGVtYW5kZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbWFuZGV1cl9pZFwiKS52YWx1ZSxcclxuICAgICAgcmVjZXB0ZXVyX2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY2VwdGV1cl9pZFwiKS52YWx1ZSxcclxuICAgICAgdXJnZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVyZ2VudFwiKS5jaGVja2VkID8gMSA6IDAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uX3BhdGllbnRcIikudmFsdWUsXHJcbiAgICAgIGlwcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpcHBcIikudmFsdWUsXHJcbiAgICAgIG5vbV9wYXRpZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbV9wYXRpZW50XCIpLnZhbHVlLFxyXG4gICAgICBkb3NzaWVyX3BhdGllbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9zc2llcl9wYXRpZW50XCIpLnZhbHVlLFxyXG4gICAgICBsaWduZXM6IHBlbmRpbmdEZW1hbmRlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9tb3V2ZW1lbnQvc2F2ZS1kZW1hbmRlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiQ29tbWFuZGUgZW5yZWdpc3Ryw6llIGF2ZWMgc3VjY8OocyAhXCIpO1xyXG4gICAgICAkKFwiI2FkZENvbW1hbmRlXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgY2FydCA9IFtdO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGRlIGxhIGNvbW1hbmRlXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICBcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Iiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiZmFja2VfaW1nX3Byb2R1Y3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwiUFJPRFVDVFMiLCJjYXJ0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlYXJjaFF1ZXJ5IiwicGVuZGluZ0RlbWFuZGUiLCJjYXJ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnRvdGFsRWxlbWVudCIsInByb2R1Y3RHcmlkIiwic2VhcmNoSW5wdXQiLCJjYXRlZ29yeUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0UHJvZHVjdEltYWdlIiwicHJvZHVjdCIsIl9wcm9kdWN0JGltYWdlIiwiYmFzZVBhdGgiLCJpbWFnZSIsInRyaW0iLCJjb25jYXQiLCJhZGRQcm9kdWN0VG9DYXJ0IiwicHJvZHVjdElkIiwiaWQiLCJmaW5kIiwicCIsImV4aXN0aW5nIiwic3RvY2siLCJxdWFudGl0eSIsInJlbmRlckNhcnQiLCIkIiwib24iLCJfY2FsbGVlIiwic2VsZWN0ZWRNYWdhc2luSWQiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJmZXRjaCIsImpzb24iLCJyZW5kZXJGaWx0ZXJlZFByb2R1Y3RzIiwidDAiLCJ0b2FzdHIiLCJmaWx0ZXJlZCIsIm1hdGNoQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIm1hdGNoU2VhcmNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsInN1YnN0cmluZyIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJyZXBsYWNlIiwiam9pbiIsInN1YnRvdGFsIiwiY2FydEhUTUwiLCJpdGVtIiwiX3Byb2R1Y3QkcXVhbnRpdHkiLCJpbm5lclRleHQiLCJ2YWxpZGF0ZUZvcm1GaWVsZHMiLCJmaWVsZHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJmaWVsZCIsImVsIiwibGFiZWwiLCJmb2N1cyIsImUiLCJmIiwiYnRuIiwiYiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImRhdGFzZXQiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJjYXJ0SXRlbSIsImNvbW1hbmRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJpc0NvbW1hbmRMb2NrZWQiLCJfcGVuZGluZ0RlbWFuZGUkIiwicHJldmVudERlZmF1bHQiLCJtYWdhc2luX2lkIiwibWFnYXNpbklkIiwiZGVtYW5kZXVyU2VsZWN0IiwidHJpZ2dlciIsIm1vZGFsIiwiZGVmYXVsdFRyYWl0ZW1lbnRNYWdhc2lucyIsIkRFRkFVTFRfVFJBSVRFTUVOVF9JRFMiLCJoYW5kbGVUcmFpdGVtZW50T3B0aW9ucyIsInNlbGVjdGVkRGVtYW5kZXVySWQiLCIkdHJhaXRlbWVudFNlbGVjdCIsIiRkZW1hbmRldXJTZWxlY3QiLCJjdXJyZW50VHJhaXRlbWVudElkIiwic3RpbGxWYWxpZCIsImhhc1NhbWVPcHRpb24iLCJlYWNoIiwib3B0aW9uIiwiYXR0ciIsImlzRGVmYXVsdCIsImlzU2FtZSIsInNob3VsZERpc2FibGUiLCJwcm9wIiwicmVhZHkiLCIkdHlwZURlbWFuZGUiLCIkcGF0aWVudEZpZWxkcyIsIiRub3RQYXRpZW50RmllbGRzIiwiJGlwcCIsIiRub21QYXRpZW50IiwiJGRvc3NpZXJQYXRpZW50IiwiaGFzQ2xhc3MiLCJzZWxlY3QyIiwid2lkdGgiLCJ0b2dnbGVQYXRpZW50RmllbGRzIiwic2VsZWN0ZWRWYWx1ZSIsInNob3ciLCJoaWRlIiwiZW1wdHkiLCJzZXRUaW1lb3V0IiwiaXBwSW5wdXQiLCJub21JbnB1dCIsImRvc3NpZXJTZWxlY3QiLCJkaXNhYmxlZCIsImlwcCIsInBhdGllbnQiLCJpbmZvc19wYXRpZW50Iiwibm9tIiwiZG9zc2llcnMiLCJBcnJheSIsImlzQXJyYXkiLCJkb3NzaWVyIiwiZCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiX2NhbGxlZTIiLCJ0eXBlRGVtYW5kZSIsInJlcXVpcmVkRmllbGRzIiwiX2kiLCJfcmVxdWlyZWRGaWVsZHMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ0eXBlX2RlbWFuZGUiLCJkZW1hbmRldXJfaWQiLCJyZWNlcHRldXJfaWQiLCJ1cmdlbnQiLCJjaGVja2VkIiwiZGVzY3JpcHRpb24iLCJub21fcGF0aWVudCIsImRvc3NpZXJfcGF0aWVudCIsImxpZ25lcyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=