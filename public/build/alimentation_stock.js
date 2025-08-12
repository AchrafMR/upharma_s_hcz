"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["alimentation_stock"],{

/***/ "./assets/js/mouvement/alimentation_stock.js":
/*!***************************************************!*\
  !*** ./assets/js/mouvement/alimentation_stock.js ***!
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
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../images/facke_img_product.png */ "./assets/images/facke_img_product.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













































window.addEventListener("DOMContentLoaded", function () {
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
  var getProductImage = function getProductImage(product) {
    var _product$image;
    var basePath = "/images/products/";
    return (_product$image = product.image) !== null && _product$image !== void 0 && _product$image.trim() ? "".concat(basePath).concat(product.image) : _images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_44__;
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
  $("#magasin-select").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var selectedMagasinId, res, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          selectedMagasinId = this.value;
          productGrid.innerHTML = "<p class=\"text-center text-muted\">Chargement...</p>";
          _context.prev = 2;
          _context.next = 5;
          return fetch("/mouvement/api/produits/".concat(selectedMagasinId));
        case 5:
          res = _context.sent;
          _context.next = 8;
          return res.json();
        case 8:
          data = _context.sent;
          window.PRODUCTS = data;
          cart = [];
          searchQuery = "";
          selectedCategory = "all";
          renderFilteredProducts();
          renderCart();
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          console.error("Erreur lors du chargement des produits", _context.t0);
          toastr.error("Impossible de charger les produits.");
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[2, 17]]);
  })));
  var renderFilteredProducts = function renderFilteredProducts() {
    var filtered = window.PRODUCTS.filter(function (product) {
      var matchCategory = selectedCategory === "all" || product.category === selectedCategory;
      var matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
    productGrid.innerHTML = filtered.map(function (product) {
      return "\n      <div class=\"col-6 p-1 col-sm-4 col-md-3 col-lg-2-4\">\n        <div class=\"card product-card shadow-sm border-0 rounded-4 px-2 pt-3 pb-2 h-100 position-relative d-flex flex-column justify-content-between\">\n          <button class=\"btn btn-sm btn-primary position-absolute top-right-btn\" data-id=\"".concat(product.id, "\">\n            <i class=\"fa-solid fa-cart-plus\"></i>\n          </button>\n\n          <div class=\"position-absolute top-left-badge\">\n            <div class=\"rounded-circle bg-danger text-white d-flex align-items-center justify-content-center product-badge\">\n              ").concat(product.quantity, "\n            </div>\n          </div>\n\n          <div class=\"d-flex justify-content-center align-items-center border rounded p-1 product-img-wrapper\">\n            <button class=\"img-clickable border-0 bg-transparent p-0\" data-id=\"").concat(product.id, "\" style=\"cursor: pointer\">\n              <img\n                src=\"").concat(getProductImage(product), "\"\n                onerror=\"this.onerror=null;this.src='").concat(_images_facke_img_product_png__WEBPACK_IMPORTED_MODULE_44__, "'\"\n                alt=\"").concat(product.name, "\"\n                class=\"img-fluid\"\n                style=\"max-height: 80px; object-fit: contain\"\n              />\n            </button>\n          </div>\n\n          <div class=\"text-center mt-2\">\n            <h6 class=\"text-uppercase mb-1 product-title\">\n              ").concat(product.name.length > 16 ? product.name.substring(0, 16) + "..." : product.name, "\n            </h6>\n            <p class=\"text-danger fw-bold mb-0 product-price\">\n              ").concat(Number(product.price).toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).replace(/\s/g, "\xA0"), " DH\n            </p>\n          </div>\n        </div>\n      </div>");
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
      return "\n      <div class=\"d-flex align-items-center border-bottom py-1 cart-item\" data-id=\"".concat(item.id, "\" style=\"width: 100%; font-size: 0.85rem\">\n        <div style=\"width: 75%\" class=\"d-flex justify-content-between align-items-center text-uppercase fw-semibold text-truncate\">\n          <span class=\"text-truncate\" style=\"max-width: 80%\">").concat(item.name, "</span>\n          <span class=\"text-danger fw-bold\">").concat(item.price.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).replace(/\s/g, "\xA0"), "</span>\n        </div>\n\n        <div style=\"width: 30%\" class=\"d-flex justify-content-end align-items-center gap-2 text-end ps-2\">\n          <div class=\"d-flex align-items-center bg-light rounded-pill qty-control\" style=\"font-size: 0.8rem\">\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-decrease\" style=\"width: 18px\">\n              <i class=\"fa-solid fa-minus\"></i>\n            </button>\n            <input type=\"text\" class=\"form-control form-control-sm text-center border-0 bg-transparent qty-input\" value=\"").concat(item.quantity, "\" style=\"width: auto; max-width: 36px; padding: 0 4px;\" />\n            <button class=\"btn btn-sm p-0 border-0 bg-transparent text-dark btn-increase\" style=\"width: 18px\">\n              <i class=\"fa-solid fa-plus\"></i>\n            </button>\n          </div>\n          <button class=\"btn btn-sm btn-remove text-danger bg-transparent border-0\" title=\"Supprimer\">\n            <i class=\"fa-solid fa-trash\"></i>\n          </button>\n        </div>\n      </div>");
    }).join("");
    cartContainer.innerHTML = cartHTML;
    subtotalElement.innerText = "".concat(subtotal.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(/\s/g, "\xA0"), " DH");
  };
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
  var commanderButton = document.querySelector('[data-target="#addCommandeAlimentation"]');
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
    var magasinId = (_pendingDemande$ = pendingDemande[0]) === null || _pendingDemande$ === void 0 ? void 0 : _pendingDemande$.magasin_id;
    var demandeurSelect = document.getElementById("demandeur_id");
    if (demandeurSelect && magasinId) {
      $(demandeurSelect).val(magasinId).trigger("change");
    }
    $("#addCommandeAlimentation").modal("show");
    $("#addCommandeAlimentation").on("hidden.bs.modal", function () {
      isCommandLocked = false;
    });
  });
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
      var isDefault = window.DEFAULT_TRAITEMENT_IDS.includes(Number(value));
      var isSame = value === selectedDemandeurId;
      var shouldDisable = isDefault && !isSame;
      option.prop("disabled", shouldDisable);
      if (!shouldDisable && value === currentTraitementId) stillValid = true;
      if (isSame && !shouldDisable) hasSameOption = true;
    });
    if (!stillValid) $traitementSelect.val("");
    if (hasSameOption) $traitementSelect.val(selectedDemandeurId);
    $traitementSelect.trigger("change.select2");
    $demandeurSelect.trigger("change.select2");
  };
  $("#demandeur_id").on("change", function () {
    return setTimeout(handleTraitementOptions, 0);
  });
  handleTraitementOptions();
  document.getElementById("submit-demande").addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var btn, requiredFields, _i, _requiredFields, field, el, demandeurId, recepteurId, typeDemande, data, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          btn = document.getElementById("submit-demande");
          if (!btn.disabled) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return");
        case 3:
          btn.disabled = true;
          if (!(!pendingDemande || pendingDemande.length === 0)) {
            _context2.next = 9;
            break;
          }
          toastr.error("Aucune donnée de panier à envoyer.");
          btn.disabled = false;
          btn.innerHTML = "Commander";
          return _context2.abrupt("return");
        case 9:
          requiredFields = [{
            id: "demandeur_id",
            label: "Magasin Demandeur"
          }, {
            id: "recepteur_id",
            label: "Magasin de Traitement"
          }, {
            id: "description",
            label: "Description"
          }];
          _i = 0, _requiredFields = requiredFields;
        case 11:
          if (!(_i < _requiredFields.length)) {
            _context2.next = 23;
            break;
          }
          field = _requiredFields[_i];
          el = document.getElementById(field.id);
          if (!(!el || !el.value.trim())) {
            _context2.next = 20;
            break;
          }
          toastr.error("Veuillez remplir le champ : ".concat(field.label));
          el.focus();
          btn.disabled = false;
          btn.innerHTML = "Commander";
          return _context2.abrupt("return");
        case 20:
          _i++;
          _context2.next = 11;
          break;
        case 23:
          demandeurId = document.getElementById("demandeur_id").value;
          recepteurId = document.getElementById("recepteur_id").value;
          typeDemande = document.getElementById("type_demande").value;
          if (!(demandeurId === recepteurId)) {
            _context2.next = 31;
            break;
          }
          toastr.error("Veuillez changer le magasin de traitement car cette demande est de type Alimentation.");
          btn.disabled = false;
          btn.innerHTML = "Commander";
          return _context2.abrupt("return");
        case 31:
          data = {
            type_demande: typeDemande,
            demandeur_id: demandeurId,
            recepteur_id: recepteurId,
            urgent: document.getElementById("urgent").checked ? 1 : 0,
            description: document.getElementById("description").value,
            lignes: pendingDemande
          };
          _context2.prev = 32;
          _context2.next = 35;
          return fetch("/mouvement/save-demande", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify(data)
          });
        case 35:
          res = _context2.sent;
          if (res.ok) {
            _context2.next = 38;
            break;
          }
          throw new Error("Erreur serveur");
        case 38:
          _context2.next = 40;
          return res.json();
        case 40:
          toastr.success("Commande enregistrée avec succès!");
          $("#addCommandeAlimentation").modal("hide");
          cart = [];
          pendingDemande = [];
          renderCart();
          ["description"].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.value = "";
          });
          document.getElementById("urgent").checked = false;
          _context2.next = 53;
          break;
        case 49:
          _context2.prev = 49;
          _context2.t0 = _context2["catch"](32);
          console.error(_context2.t0);
          toastr.error("Erreur lors de l'enregistrement de la commande.");
        case 53:
          _context2.prev = 53;
          btn.disabled = false;
          btn.innerHTML = "Commander";
          return _context2.finish(53);
        case 57:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[32, 49, 53, 57]]);
  })));
  renderFilteredProducts();
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6f202c","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-02d11e","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-80ada4","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/mouvement/alimentation_stock.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdKQUE0RDtBQUNqRyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBELGlEQUFpRCxvQ0FBb0M7O0FBRXJGO0FBQ0E7QUFDQSxJQUFJLGtFQUFrRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2ZZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUNBQXFDLG1CQUFPLENBQUMsK0hBQWlEO0FBQzlGLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4Qjs7QUFFM0Q7QUFDQTtBQUNBLElBQUksa0RBQWtEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb3V2ZW1lbnQvYWxpbWVudGF0aW9uX3N0b2NrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgfSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBmYWNrZV9pbWdfcHJvZHVjdCBmcm9tIFwiLi4vLi4vaW1hZ2VzL2ZhY2tlX2ltZ19wcm9kdWN0LnBuZ1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICB3aW5kb3cuUFJPRFVDVFMgPSB3aW5kb3cuUFJPRFVDVFMgfHwgW107XHJcbiAgbGV0IGNhcnQgPSBbXTtcclxuICBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsXCI7XHJcbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gXCJcIjtcclxuICBsZXQgcGVuZGluZ0RlbWFuZGUgPSBbXTtcclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtcy1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc3VidG90YWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LXN1YnRvdGFsXCIpO1xyXG4gIGNvbnN0IHByb2R1Y3RHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LWxpc3RcIik7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtc2VhcmNoXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnktbmF2LWJ0blwiKTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdEltYWdlID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IGJhc2VQYXRoID0gXCIvaW1hZ2VzL3Byb2R1Y3RzL1wiO1xyXG4gICAgcmV0dXJuIHByb2R1Y3QuaW1hZ2U/LnRyaW0oKVxyXG4gICAgICA/IGAke2Jhc2VQYXRofSR7cHJvZHVjdC5pbWFnZX1gXHJcbiAgICAgIDogZmFja2VfaW1nX3Byb2R1Y3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0SWQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gTnVtYmVyKHByb2R1Y3RJZCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gd2luZG93LlBST0RVQ1RTLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgIGlmICghcHJvZHVjdCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nID0gY2FydC5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBzdG9jayA9IHByb2R1Y3QucXVhbnRpdHk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgIGlmIChleGlzdGluZy5xdWFudGl0eSA8IHN0b2NrKSBleGlzdGluZy5xdWFudGl0eSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydC5wdXNoKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG4gIH07XHJcblxyXG4gICQoXCIjbWFnYXNpbi1zZWxlY3RcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRNYWdhc2luSWQgPSB0aGlzLnZhbHVlO1xyXG4gICAgcHJvZHVjdEdyaWQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPkNoYXJnZW1lbnQuLi48L3A+YDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL21vdXZlbWVudC9hcGkvcHJvZHVpdHMvJHtzZWxlY3RlZE1hZ2FzaW5JZH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICB3aW5kb3cuUFJPRFVDVFMgPSBkYXRhO1xyXG4gICAgICBjYXJ0ID0gW107XHJcbiAgICAgIHNlYXJjaFF1ZXJ5ID0gXCJcIjtcclxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsXCI7XHJcblxyXG4gICAgICByZW5kZXJGaWx0ZXJlZFByb2R1Y3RzKCk7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgcHJvZHVpdHNcIiwgZXJyKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiSW1wb3NzaWJsZSBkZSBjaGFyZ2VyIGxlcyBwcm9kdWl0cy5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZpbHRlcmVkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHdpbmRvdy5QUk9EVUNUUy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcclxuICAgICAgY29uc3QgbWF0Y2hDYXRlZ29yeSA9XHJcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCJhbGxcIiB8fCBwcm9kdWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgICBjb25zdCBtYXRjaFNlYXJjaCA9IHByb2R1Y3QubmFtZVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICByZXR1cm4gbWF0Y2hDYXRlZ29yeSAmJiBtYXRjaFNlYXJjaDtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2R1Y3RHcmlkLmlubmVySFRNTCA9IGZpbHRlcmVkXHJcbiAgICAgIC5tYXAoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHAtMSBjb2wtc20tNCBjb2wtbWQtMyBjb2wtbGctMi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcHJvZHVjdC1jYXJkIHNoYWRvdy1zbSBib3JkZXItMCByb3VuZGVkLTQgcHgtMiBwdC0zIHBiLTIgaC0xMDAgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtcmlnaHQtYnRuXCIgZGF0YS1pZD1cIiR7cHJvZHVjdC5pZH1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJ0LXBsdXNcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLWxlZnQtYmFkZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIGJnLWRhbmdlciB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwcm9kdWN0LWJhZGdlXCI+XHJcbiAgICAgICAgICAgICAgJHtwcm9kdWN0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyIHJvdW5kZWQgcC0xIHByb2R1Y3QtaW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImltZy1jbGlja2FibGUgYm9yZGVyLTAgYmctdHJhbnNwYXJlbnQgcC0wXCIgZGF0YS1pZD1cIiR7cHJvZHVjdC5pZH1cIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIiR7Z2V0UHJvZHVjdEltYWdlKHByb2R1Y3QpfVwiXHJcbiAgICAgICAgICAgICAgICBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7dGhpcy5zcmM9JyR7ZmFja2VfaW1nX3Byb2R1Y3R9J1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCIke3Byb2R1Y3QubmFtZX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiA4MHB4OyBvYmplY3QtZml0OiBjb250YWluXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cInRleHQtdXBwZXJjYXNlIG1iLTEgcHJvZHVjdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICR7cHJvZHVjdC5uYW1lLmxlbmd0aCA+IDE2ID8gcHJvZHVjdC5uYW1lLnN1YnN0cmluZygwLCAxNikgKyBcIi4uLlwiIDogcHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIGZ3LWJvbGQgbWItMCBwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgJHtOdW1iZXIocHJvZHVjdC5wcmljZSkudG9Mb2NhbGVTdHJpbmcoXCJmci1GUlwiLCB7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgfSkucmVwbGFjZSgvXFxzL2csIFwiXFx1MDBBMFwiKX0gREhcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmBcclxuICAgICAgKVxyXG4gICAgICAuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJ0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHN1YnRvdGFsID0gMDtcclxuXHJcbiAgICBjb25zdCBjYXJ0SFRNTCA9IGNhcnRcclxuICAgICAgLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB3aW5kb3cuUFJPRFVDVFMuZmluZCgocCkgPT4gcC5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgY29uc3Qgc3RvY2sgPSBwcm9kdWN0Py5xdWFudGl0eSA/PyAwO1xyXG4gICAgICAgIHN1YnRvdGFsICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG5cclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIHB5LTEgY2FydC1pdGVtXCIgZGF0YS1pZD1cIiR7aXRlbS5pZH1cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBmb250LXNpemU6IDAuODVyZW1cIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDc1JVwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXVwcGVyY2FzZSBmdy1zZW1pYm9sZCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtdHJ1bmNhdGVcIiBzdHlsZT1cIm1heC13aWR0aDogODAlXCI+JHtpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBmdy1ib2xkXCI+JHtpdGVtLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwiZnItRlJcIiwge1xyXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgIH0pLnJlcGxhY2UoL1xccy9nLCBcIlxcdTAwQTBcIil9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDMwJVwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyIGdhcC0yIHRleHQtZW5kIHBzLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0IHJvdW5kZWQtcGlsbCBxdHktY29udHJvbFwiIHN0eWxlPVwiZm9udC1zaXplOiAwLjhyZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gcC0wIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHRleHQtZGFyayBidG4tZGVjcmVhc2VcIiBzdHlsZT1cIndpZHRoOiAxOHB4XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy10cmFuc3BhcmVudCBxdHktaW5wdXRcIiB2YWx1ZT1cIiR7aXRlbS5xdWFudGl0eX1cIiBzdHlsZT1cIndpZHRoOiBhdXRvOyBtYXgtd2lkdGg6IDM2cHg7IHBhZGRpbmc6IDAgNHB4O1wiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIHAtMCBib3JkZXItMCBiZy10cmFuc3BhcmVudCB0ZXh0LWRhcmsgYnRuLWluY3JlYXNlXCIgc3R5bGU9XCJ3aWR0aDogMThweFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1yZW1vdmUgdGV4dC1kYW5nZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTBcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiXCIpO1xyXG5cclxuICAgIGNhcnRDb250YWluZXIuaW5uZXJIVE1MID0gY2FydEhUTUw7XHJcbiAgICBzdWJ0b3RhbEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7c3VidG90YWwudG9Mb2NhbGVTdHJpbmcoXCJmci1GUlwiLCB7XHJcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSkucmVwbGFjZSgvXFxzL2csIFwiXFx1MDBBMFwiKX0gREhgO1xyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcIltkYXRhLWlkXVwiKTtcclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0Py5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtcmlnaHQtYnRuXCIpIHx8XHJcbiAgICAgIHRhcmdldD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW1nLWNsaWNrYWJsZVwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGFkZFByb2R1Y3RUb0NhcnQodGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcnRJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcIi5jYXJ0LWl0ZW1cIik7XHJcbiAgICBpZiAoIWNhcnRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWQgPSBOdW1iZXIoY2FydEl0ZW0uZGF0YXNldC5pZCk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5idG4taW5jcmVhc2VcIikpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNhcnQuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAoaXRlbSkgaXRlbS5xdWFudGl0eSsrO1xyXG4gICAgICByZW5kZXJDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuYnRuLWRlY3JlYXNlXCIpKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjYXJ0LmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5xdWFudGl0eSA+IDEpIGl0ZW0ucXVhbnRpdHktLTtcclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmJ0bi1yZW1vdmVcIikpIHtcclxuICAgICAgY2FydCA9IGNhcnQuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBpZCk7XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhdGVnb3J5QnV0dG9ucy5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSB0aGlzLmRhdGFzZXQuY2F0ZWdvcnk7XHJcbiAgICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgc2VhcmNoUXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgIHJlbmRlckZpbHRlcmVkUHJvZHVjdHMoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWFuZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFyZ2V0PVwiI2FkZENvbW1hbmRlQWxpbWVudGF0aW9uXCJdJyk7XHJcbiAgbGV0IGlzQ29tbWFuZExvY2tlZCA9IGZhbHNlO1xyXG5cclxuICBjb21tYW5kZXJCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzQ29tbWFuZExvY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChjYXJ0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJWb3RyZSBwYW5pZXIgZXN0IHZpZGUuIEFqb3V0ZXogZGVzIHByb2R1aXRzIGF2YW50IGRlIGNvbW1hbmRlci5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbW1hbmRMb2NrZWQgPSB0cnVlO1xyXG5cclxuICAgIHBlbmRpbmdEZW1hbmRlID0gY2FydC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxyXG4gICAgICBwcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXHJcbiAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LFxyXG4gICAgICBtYWdhc2luX2lkOiBpdGVtLm1hZ2FzaW5faWQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbWFnYXNpbklkID0gcGVuZGluZ0RlbWFuZGVbMF0/Lm1hZ2FzaW5faWQ7XHJcbiAgICBjb25zdCBkZW1hbmRldXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbWFuZGV1cl9pZFwiKTtcclxuICAgIGlmIChkZW1hbmRldXJTZWxlY3QgJiYgbWFnYXNpbklkKSB7XHJcbiAgICAgICQoZGVtYW5kZXVyU2VsZWN0KS52YWwobWFnYXNpbklkKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjYWRkQ29tbWFuZGVBbGltZW50YXRpb25cIikubW9kYWwoXCJzaG93XCIpO1xyXG5cclxuICAgICQoXCIjYWRkQ29tbWFuZGVBbGltZW50YXRpb25cIikub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgKCkgPT4ge1xyXG4gICAgICBpc0NvbW1hbmRMb2NrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFpdGVtZW50T3B0aW9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRGVtYW5kZXVySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbWFuZGV1cl9pZFwiKS52YWx1ZTtcclxuICAgIGNvbnN0ICR0cmFpdGVtZW50U2VsZWN0ID0gJChcIiNyZWNlcHRldXJfaWRcIik7XHJcbiAgICBjb25zdCAkZGVtYW5kZXVyU2VsZWN0ID0gJChcIiNkZW1hbmRldXJfaWRcIik7XHJcbiAgICBjb25zdCBjdXJyZW50VHJhaXRlbWVudElkID0gJHRyYWl0ZW1lbnRTZWxlY3QudmFsKCk7XHJcbiAgICBsZXQgc3RpbGxWYWxpZCA9IGZhbHNlO1xyXG4gICAgbGV0IGhhc1NhbWVPcHRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAkdHJhaXRlbWVudFNlbGVjdC5maW5kKFwib3B0aW9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSAkKHRoaXMpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbi5hdHRyKFwidmFsdWVcIik7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGlzRGVmYXVsdCA9IHdpbmRvdy5ERUZBVUxUX1RSQUlURU1FTlRfSURTLmluY2x1ZGVzKE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICBjb25zdCBpc1NhbWUgPSB2YWx1ZSA9PT0gc2VsZWN0ZWREZW1hbmRldXJJZDtcclxuICAgICAgY29uc3Qgc2hvdWxkRGlzYWJsZSA9IGlzRGVmYXVsdCAmJiAhaXNTYW1lO1xyXG5cclxuICAgICAgb3B0aW9uLnByb3AoXCJkaXNhYmxlZFwiLCBzaG91bGREaXNhYmxlKTtcclxuXHJcbiAgICAgIGlmICghc2hvdWxkRGlzYWJsZSAmJiB2YWx1ZSA9PT0gY3VycmVudFRyYWl0ZW1lbnRJZCkgc3RpbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgIGlmIChpc1NhbWUgJiYgIXNob3VsZERpc2FibGUpIGhhc1NhbWVPcHRpb24gPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFzdGlsbFZhbGlkKSAkdHJhaXRlbWVudFNlbGVjdC52YWwoXCJcIik7XHJcbiAgICBpZiAoaGFzU2FtZU9wdGlvbikgJHRyYWl0ZW1lbnRTZWxlY3QudmFsKHNlbGVjdGVkRGVtYW5kZXVySWQpO1xyXG5cclxuICAgICR0cmFpdGVtZW50U2VsZWN0LnRyaWdnZXIoXCJjaGFuZ2Uuc2VsZWN0MlwiKTtcclxuICAgICRkZW1hbmRldXJTZWxlY3QudHJpZ2dlcihcImNoYW5nZS5zZWxlY3QyXCIpO1xyXG4gIH07XHJcblxyXG4gICQoXCIjZGVtYW5kZXVyX2lkXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHNldFRpbWVvdXQoaGFuZGxlVHJhaXRlbWVudE9wdGlvbnMsIDApKTtcclxuICBoYW5kbGVUcmFpdGVtZW50T3B0aW9ucygpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1kZW1hbmRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1kZW1hbmRlXCIpO1xyXG4gICAgaWYgKGJ0bi5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIXBlbmRpbmdEZW1hbmRlIHx8IHBlbmRpbmdEZW1hbmRlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJBdWN1bmUgZG9ubsOpZSBkZSBwYW5pZXIgw6AgZW52b3llci5cIik7XHJcbiAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBidG4uaW5uZXJIVE1MID0gXCJDb21tYW5kZXJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gW1xyXG4gICAgICB7IGlkOiBcImRlbWFuZGV1cl9pZFwiLCBsYWJlbDogXCJNYWdhc2luIERlbWFuZGV1clwiIH0sXHJcbiAgICAgIHsgaWQ6IFwicmVjZXB0ZXVyX2lkXCIsIGxhYmVsOiBcIk1hZ2FzaW4gZGUgVHJhaXRlbWVudFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwiZGVzY3JpcHRpb25cIiwgbGFiZWw6IFwiRGVzY3JpcHRpb25cIiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGxldCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkLmlkKTtcclxuICAgICAgaWYgKCFlbCB8fCAhZWwudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGBWZXVpbGxleiByZW1wbGlyIGxlIGNoYW1wIDogJHtmaWVsZC5sYWJlbH1gKTtcclxuICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbW1hbmRlclwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbWFuZGV1cklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1hbmRldXJfaWRcIikudmFsdWU7XHJcbiAgICBjb25zdCByZWNlcHRldXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjZXB0ZXVyX2lkXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdHlwZURlbWFuZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVfZGVtYW5kZVwiKS52YWx1ZTtcclxuXHJcblxyXG4gICAgaWYgKGRlbWFuZGV1cklkID09PSByZWNlcHRldXJJZCkge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJWZXVpbGxleiBjaGFuZ2VyIGxlIG1hZ2FzaW4gZGUgdHJhaXRlbWVudCBjYXIgY2V0dGUgZGVtYW5kZSBlc3QgZGUgdHlwZSBBbGltZW50YXRpb24uXCIpO1xyXG4gICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29tbWFuZGVyXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB0eXBlX2RlbWFuZGU6IHR5cGVEZW1hbmRlLFxyXG4gICAgICBkZW1hbmRldXJfaWQ6IGRlbWFuZGV1cklkLFxyXG4gICAgICByZWNlcHRldXJfaWQ6IHJlY2VwdGV1cklkLFxyXG4gICAgICB1cmdlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW50XCIpLmNoZWNrZWQgPyAxIDogMCxcclxuICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICAgIGxpZ25lczogcGVuZGluZ0RlbWFuZGUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL21vdXZlbWVudC9zYXZlLWRlbWFuZGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBzZXJ2ZXVyXCIpO1xyXG4gICAgICBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJDb21tYW5kZSBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzIVwiKTtcclxuICAgICAgJChcIiNhZGRDb21tYW5kZUFsaW1lbnRhdGlvblwiKS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgICBjYXJ0ID0gW107XHJcbiAgICAgIHBlbmRpbmdEZW1hbmRlID0gW107XHJcbiAgICAgIHJlbmRlckNhcnQoKTtcclxuXHJcbiAgICAgIFtcImRlc2NyaXB0aW9uXCJdLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGVsKSBlbC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVyZ2VudFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGRlIGxhIGNvbW1hbmRlLlwiKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBidG4uaW5uZXJIVE1MID0gXCJDb21tYW5kZXJcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmVuZGVyRmlsdGVyZWRQcm9kdWN0cygpO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpLmY7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgIT09IGRlZmluZVByb3BlcnRpZXMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0luZGV4ZWRPYmplY3QoaXQpLCBrZXkpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGtleSwgZGVzY3JpcHRvcjtcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBrZXkgPSBrZXlzW2luZGV4KytdKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Iiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiZmFja2VfaW1nX3Byb2R1Y3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUFJPRFVDVFMiLCJjYXJ0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlYXJjaFF1ZXJ5IiwicGVuZGluZ0RlbWFuZGUiLCJjYXJ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1YnRvdGFsRWxlbWVudCIsInByb2R1Y3RHcmlkIiwic2VhcmNoSW5wdXQiLCJjYXRlZ29yeUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0UHJvZHVjdEltYWdlIiwicHJvZHVjdCIsIl9wcm9kdWN0JGltYWdlIiwiYmFzZVBhdGgiLCJpbWFnZSIsInRyaW0iLCJjb25jYXQiLCJhZGRQcm9kdWN0VG9DYXJ0IiwicHJvZHVjdElkIiwiaWQiLCJmaW5kIiwicCIsImV4aXN0aW5nIiwic3RvY2siLCJxdWFudGl0eSIsInJlbmRlckNhcnQiLCIkIiwib24iLCJfY2FsbGVlIiwic2VsZWN0ZWRNYWdhc2luSWQiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImlubmVySFRNTCIsImZldGNoIiwianNvbiIsInJlbmRlckZpbHRlcmVkUHJvZHVjdHMiLCJ0MCIsImNvbnNvbGUiLCJ0b2FzdHIiLCJmaWx0ZXJlZCIsIm1hdGNoQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIm1hdGNoU2VhcmNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsInN1YnN0cmluZyIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJyZXBsYWNlIiwiam9pbiIsInN1YnRvdGFsIiwiY2FydEhUTUwiLCJpdGVtIiwiX3Byb2R1Y3QkcXVhbnRpdHkiLCJpbm5lclRleHQiLCJlIiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGF0YXNldCIsImNhcnRJdGVtIiwiYnRuIiwiYiIsInJlbW92ZSIsImFkZCIsImNvbW1hbmRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJpc0NvbW1hbmRMb2NrZWQiLCJfcGVuZGluZ0RlbWFuZGUkIiwicHJldmVudERlZmF1bHQiLCJtYWdhc2luX2lkIiwibWFnYXNpbklkIiwiZGVtYW5kZXVyU2VsZWN0IiwidHJpZ2dlciIsIm1vZGFsIiwiaGFuZGxlVHJhaXRlbWVudE9wdGlvbnMiLCJzZWxlY3RlZERlbWFuZGV1cklkIiwiJHRyYWl0ZW1lbnRTZWxlY3QiLCIkZGVtYW5kZXVyU2VsZWN0IiwiY3VycmVudFRyYWl0ZW1lbnRJZCIsInN0aWxsVmFsaWQiLCJoYXNTYW1lT3B0aW9uIiwiZWFjaCIsIm9wdGlvbiIsImF0dHIiLCJpc0RlZmF1bHQiLCJERUZBVUxUX1RSQUlURU1FTlRfSURTIiwiaXNTYW1lIiwic2hvdWxkRGlzYWJsZSIsInByb3AiLCJzZXRUaW1lb3V0IiwiX2NhbGxlZTIiLCJyZXF1aXJlZEZpZWxkcyIsIl9pIiwiX3JlcXVpcmVkRmllbGRzIiwiZmllbGQiLCJlbCIsImRlbWFuZGV1cklkIiwicmVjZXB0ZXVySWQiLCJ0eXBlRGVtYW5kZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc2FibGVkIiwibGFiZWwiLCJmb2N1cyIsInR5cGVfZGVtYW5kZSIsImRlbWFuZGV1cl9pZCIsInJlY2VwdGV1cl9pZCIsInVyZ2VudCIsImNoZWNrZWQiLCJkZXNjcmlwdGlvbiIsImxpZ25lcyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=