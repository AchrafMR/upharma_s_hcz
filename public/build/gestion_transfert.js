(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_transfert"],{

/***/ "./assets/js/stock/transfert.js":
/*!**************************************!*\
  !*** ./assets/js/stock/transfert.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
$(document).ready(function () {
  var table = $("#salesTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing: '<i style="color:#7593ae; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> '
    },
    lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
    processing: true,
    serverSide: true,
    ajax: {
      url: Routing.generate("app_fetch_demandes"),
      data: function data(d) {
        d.draw = d.draw || 0;
        d.start = d.start || 0;
        d.length = d.length || 15;
      },
      dataSrc: function dataSrc(json) {
        window.globalActions = Array.isArray(json.actions) ? json.actions : Object.values(json.actions);
        return json.data;
      }
    },
    order: [[0, "desc"]],
    columns: [{
      name: "d.id",
      data: "id"
    }, {
      name: "d.code",
      data: "demande_code",
      render: function render(data, type, row) {
        return "\n              <button \n                class=\"btn btn-sm\"\n                style=\"font-size: 0.6rem; color: rgb(117, 147, 174); padding: 0;\"\n                data-toggle=\"modal\" \n                data-target=\"#detailsDemande".concat(row.id, "\">\n                ").concat(data, "\n              </button>\n            ");
      }
    }, {
      name: "d.created",
      data: "date_demande",
      render: function render(data) {
        return moment(data).format("DD/MM/YYYY ");
      }
    }, {
      name: "d.description",
      data: "description",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "dem.designationAccess",
      data: "demandeur",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "rec.designationAccess",
      data: "recepteur",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
    }, {
      name: "lg.montant_ttc",
      data: "total_montant_ttc",
      render: function render(data) {
        return data ? Number(data).toLocaleString("fr-FR", {
          style: "decimal",
          minimumFractionDigits: 2
        }) : "0,00";
      },
      createdCell: function createdCell(td) {
        td.classList.add("force-right-align");
      }
    }, {
      name: "niveau_urgence",
      data: "niveau_urgence"
    }, {
      name: "status.designation",
      data: "cm_status"
    }, {
      name: "actions",
      data: null,
      orderable: false,
      searchable: false,
      render: function render(data) {
        var actionsHtml = '<div class="dropdown">' + '<i class="menuActions fa-solid fa-ellipsis-vertical" id="' + data.id + '"></i>' + '<div class="dropdown-menu dropdown-content divMenu" id="divMenu' + data.id + '">';
        window.globalActions.forEach(function (action) {
          actionsHtml += "\n                <button class=\"".concat(action.className, " dropdown-item\"\n                        id=\"").concat(data.id, "\"\n                        data-toggle=\"modal\"\n                        data-target=\"#").concat(action.idName).concat(data.id, "\">\n                  <i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "\n                </button>");
        });
        actionsHtml += "</div></div>";
        return actionsHtml;
      }
    }],
    autoWidth: false
  });
});
$(document).on("click", ".edit-demande", function () {
  var demandeId = $(this).attr("id");
  var modalSelector = "#editDemande".concat(demandeId);
  if (!demandeId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      demandeId: demandeId,
      modalSelector: modalSelector
    });
    return;
  }
  var status = $(modalSelector).data("status");
  if (status === 9) {
    $(modalSelector).modal("show");
  } else {
    toastr.warning("Impossible de modifier cette demande. Elle n'est plus modifiable.");
  }
});
$(document).on("click", ".details-demande", function () {
  var demandeId = $(this).attr("id");
  var modalSelector = "#detailsDemande".concat(demandeId);
  if (!demandeId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      demandeId: demandeId,
      modalSelector: modalSelector
    });
    return;
  }
  $(modalSelector).modal("show");
});

//edit demande
window.addEventListener("load", function () {
  var produits = window.PRODUITS || [];
  window.deletedProduits = [];
  window.getDeletedProduits = function () {
    return window.deletedProduits;
  };
  document.body.addEventListener("click", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var target, row, modal, _row$querySelector, _row$querySelector2, _row$querySelector3, _row$querySelector4, _row$querySelector5, _row$querySelector6, tableBody, newRow, productSelect, quantityInput, selectedId, productName, _modal$querySelector, _modal$querySelector2, _modal$querySelector3, _modal$querySelector4, demandeId, _tableBody, requiredFields, hasError, rows, productIds, description, demandeurId, recepteurId, urgent, editedProduits, newProduits, deleted, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            target = e.target.closest("button, .fa-plus");
            if (target) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            row = target.closest("tr");
            modal = target.closest(".modal"); // Edit product
            if (target.classList.contains("btn-edit-line")) {
              row.querySelector(".product-select").disabled = false;
              row.querySelector(".quantity-input").disabled = false;
              (_row$querySelector = row.querySelector(".btn-edit-line")) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.classList.add("d-none");
              (_row$querySelector2 = row.querySelector(".btn-delete-line")) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.classList.add("d-none");
              (_row$querySelector3 = row.querySelector(".btn-save-line")) === null || _row$querySelector3 === void 0 ? void 0 : _row$querySelector3.classList.remove("d-none");
            }

            // Save edited product
            if (target.classList.contains("btn-save-line")) {
              row.querySelector(".product-select").disabled = true;
              row.querySelector(".quantity-input").disabled = true;
              (_row$querySelector4 = row.querySelector(".btn-edit-line")) === null || _row$querySelector4 === void 0 ? void 0 : _row$querySelector4.classList.remove("d-none");
              (_row$querySelector5 = row.querySelector(".btn-delete-line")) === null || _row$querySelector5 === void 0 ? void 0 : _row$querySelector5.classList.remove("d-none");
              (_row$querySelector6 = row.querySelector(".btn-save-line")) === null || _row$querySelector6 === void 0 ? void 0 : _row$querySelector6.classList.add("d-none");
              toastr.success("Produit modifié avec succès.");
            }

            // Delete product
            if (target.classList.contains("btn-delete-line")) {
              Swal.fire({
                title: "Confirmer la suppression",
                text: "Voulez-vous vraiment supprimer ce produit ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Oui, supprimer",
                cancelButtonText: "Annuler"
              }).then(function (result) {
                if (result.isConfirmed) {
                  var demandeId = modal.dataset.id;
                  var produitId = row.dataset.id;
                  var demandelgId = row.dataset.demandelgId;
                  if (demandelgId) {
                    window.deletedProduits.push({
                      demande_id: parseInt(demandeId),
                      produit_id: parseInt(produitId),
                      demandelg_id: parseInt(demandelgId)
                    });
                  }
                  row.remove();
                  toastr.success("Produit supprimé avec succès.");
                }
              });
            }

            // Add new product row
            if (target.classList.contains("fa-plus")) {
              tableBody = modal.querySelector("tbody");
              newRow = document.createElement("tr");
              newRow.innerHTML = "\n        <td style=\"vertical-align: top !important; text-align: left !important;\">\n          <select class=\"form-control form-control-sm product-select\">\n            ".concat(produits.map(function (p) {
                return "<option value=\"".concat(p.id, "\" data-prix=\"").concat(p.price, "\">").concat(p.name, "</option>");
              }).join(""), "\n          </select>\n        </td>\n        <td>\n          <input type=\"number\" class=\"form-control form-control-sm quantity-input\" min=\"1\" value=\"1\">\n        </td>\n        <td class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-sm btn-save-new-line\" title=\"Enregistrer\">\n            <i class=\"fa fa-save text-success\"></i>\n          </button>\n        </td>\n      ");
              tableBody.appendChild(newRow);
            }
            if (target.classList.contains("btn-save-new-line")) {
              productSelect = row.querySelector(".product-select");
              quantityInput = row.querySelector(".quantity-input");
              selectedId = productSelect.value;
              productName = productSelect.options[productSelect.selectedIndex].text;
              productSelect.disabled = true;
              quantityInput.disabled = true;
              row.querySelector("td:last-child").innerHTML = "\n        <button type=\"button\" class=\"btn btn-sm btn-edit-line\" title=\"Modifier\">\n          <i class=\"fa fa-edit text-primary\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-sm btn-delete-line\" title=\"Supprimer\">\n          <i class=\"fa fa-trash text-danger\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-sm btn-save-line d-none\" title=\"Enregistrer\">\n          <i class=\"fa fa-save text-success\"></i>\n        </button>\n      ";
              toastr.success("Nouveau produit ajouté avec succès.");
            }
            if (!target.classList.contains("btn-save-edit")) {
              _context.next = 44;
              break;
            }
            demandeId = modal.dataset.id;
            _tableBody = modal.querySelector("tbody");
            requiredFields = ["description", "demandeur_id", "recepteur_id"];
            hasError = false;
            requiredFields.forEach(function (field) {
              var input = modal.querySelector("[name=\"".concat(field, "\"]"));
              if (!input || !input.value.trim()) {
                toastr.error("Le champ \"".concat(field.replace('_', ' '), "\" est requis."));
                hasError = true;
              }
            });
            rows = _tableBody.querySelectorAll("tr");
            if (rows.length === 0) {
              toastr.error("Veuillez ajouter au moins un produit.");
              hasError = true;
            }

            // Check for duplicate products
            productIds = [];
            rows.forEach(function (row) {
              var select = row.querySelector(".product-select");
              if (select) {
                var val = select.value;
                if (productIds.includes(val)) {
                  toastr.error("Un produit est sélectionné plusieurs fois.");
                  hasError = true;
                }
                productIds.push(val);
              }
            });
            if (!(hasError || !_tableBody)) {
              _context.next = 22;
              break;
            }
            return _context.abrupt("return");
          case 22:
            description = (_modal$querySelector = modal.querySelector('[name="description"]')) === null || _modal$querySelector === void 0 ? void 0 : _modal$querySelector.value;
            demandeurId = (_modal$querySelector2 = modal.querySelector('[name="demandeur_id"]')) === null || _modal$querySelector2 === void 0 ? void 0 : _modal$querySelector2.value;
            recepteurId = (_modal$querySelector3 = modal.querySelector('[name="recepteur_id"]')) === null || _modal$querySelector3 === void 0 ? void 0 : _modal$querySelector3.value;
            urgent = (_modal$querySelector4 = modal.querySelector('[name="urgent"]')) === null || _modal$querySelector4 === void 0 ? void 0 : _modal$querySelector4.checked;
            editedProduits = [];
            newProduits = [];
            _tableBody.querySelectorAll("tr").forEach(function (row) {
              var _row$querySelector7, _selectElement$select;
              var selectElement = row.querySelector(".product-select");
              var produitId = selectElement === null || selectElement === void 0 ? void 0 : selectElement.value;
              var quantite = (_row$querySelector7 = row.querySelector(".quantity-input")) === null || _row$querySelector7 === void 0 ? void 0 : _row$querySelector7.value;
              var price = parseFloat(selectElement === null || selectElement === void 0 || (_selectElement$select = selectElement.selectedOptions[0]) === null || _selectElement$select === void 0 ? void 0 : _selectElement$select.getAttribute("data-prix")) || 0;
              var demandelgId = row.dataset.demandelgId || null;
              if (!produitId || !quantite) return;
              var data = {
                produit_id: parseInt(produitId),
                quantite: parseFloat(quantite),
                price: price
              };
              if (demandelgId) {
                data.demandelg_id = parseInt(demandelgId);
                editedProduits.push(data);
              } else {
                newProduits.push(data);
              }
            });
            deleted = window.getDeletedProduits().filter(function (d) {
              return d.demande_id == demandeId;
            });
            _context.prev = 30;
            _context.next = 33;
            return fetch("/mouvement/edit-demande", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                demande_id: parseInt(demandeId),
                description: description,
                demandeur_id: parseInt(demandeurId),
                recepteur_id: parseInt(recepteurId),
                urgent: urgent,
                edited: editedProduits,
                added: newProduits,
                deleted: deleted
              })
            });
          case 33:
            response = _context.sent;
            _context.next = 36;
            return response.json();
          case 36:
            result = _context.sent;
            if (result.status === "success") {
              toastr.success("Demande sauvegardée avec succès !");
              $(modal).on("hidden.bs.modal", function () {
                location.reload();
              }).modal("hide");
              window.deletedProduits = [];
            } else {
              toastr.error(result.message || "Erreur lors de la sauvegarde.");
            }
            _context.next = 44;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](30);
            console.error("Network error:", _context.t0);
            toastr.error("Erreur réseau lors de la sauvegarde.");
          case 44:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[30, 40]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

// Update position of demande
document.addEventListener("DOMContentLoaded", function () {
  var shouldRefresh = false;
  var updatePosition = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, position, button) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("/mouvement/update-position-demande", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                id: id,
                position: position
              })
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            data = _context2.sent;
            if (data.success) {
              toastr.success("La demande a été validée avec succès.");
              if (button) {
                button.style.display = "none";
              }
              shouldRefresh = true;
            } else {
              toastr.error("Erreur lors de la mise à jour.");
            }
            _context2.next = 14;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            toastr.error("Erreur réseau.");
            console.error(_context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    return function updatePosition(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  document.body.addEventListener("click", function (e) {
    var btn = e.target;
    if (btn.classList.contains("btn-valider")) {
      var id = btn.dataset.id;
      updatePosition(id, "validée", btn);
    }
  });
  $(document).on("hidden.bs.modal", ".modal", function () {
    if (shouldRefresh) {
      location.reload();
    }
  });
  $(document).on('click', function (e) {
    var $popup = $('#impressionPopup');
    var $toggle = $('.toggleImpressionPopup');
    if ($(e.target).closest($toggle).length) {
      $popup.fadeToggle(150);
    } else if (!$(e.target).closest($popup).length) {
      $popup.fadeOut(150);
    }
  });
  $('body').on('click', '.genererPdfDemandeSortieStock', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    if (!id) {
      toastr.warning("ID de Demande ortie Stock manquant.");
      return;
    }
    try {
      var url = Routing.generate('app_exports_demande_exports') + '?id=' + id;
      window.open(url, '_blank');
    } catch (err) {
      console.error("Route non trouvée dans Routing.js :", err);
      toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
    }
  });
  $("#ajouterTransfert").modal("show");
  $("#ajouterTransfert").on("hidden.bs.modal", function () {
    isCommandLocked = false;
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = (__webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6f202c","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-02d11e","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/stock/transfert.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQyxrQkFBa0IsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRTNEO0FBQ0E7QUFDQSxJQUFJLGlEQUFpRDtBQUNyRDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXZEO0FBQ0E7QUFDQSxJQUFJLDZDQUE2QztBQUNqRDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvY2svdHJhbnNmZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdGFibGUgPSAkKFwiI3NhbGVzVGFibGVcIikuRGF0YVRhYmxlKHtcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogd2luZG93LmZyZW5jaEpzb25VcmwsXHJcbiAgICAgIHByb2Nlc3Npbmc6XHJcbiAgICAgICAgJzxpIHN0eWxlPVwiY29sb3I6Izc1OTNhZTsgbWFyZ2luLXRvcDoxMDBweCAhaW1wb3J0YW50OyBmb250LXNpemU6MjVweCAhaW1wb3J0YW50O1wiIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTN4IGZhLWZ3XCI+PC9pPjxzcGFuIGNsYXNzPVwic3Itb25seVwiPjwvc3Bhbj4gJyxcclxuICAgIH0sXHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgXSxcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgYWpheDoge1xyXG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJhcHBfZmV0Y2hfZGVtYW5kZXNcIiksXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbiAgICAgICAgZC5zdGFydCA9IGQuc3RhcnQgfHwgMDtcclxuICAgICAgICBkLmxlbmd0aCA9IGQubGVuZ3RoIHx8IDE1O1xyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU3JjOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zID0gQXJyYXkuaXNBcnJheShqc29uLmFjdGlvbnMpXHJcbiAgICAgICAgICA/IGpzb24uYWN0aW9uc1xyXG4gICAgICAgICAgOiBPYmplY3QudmFsdWVzKGpzb24uYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7IG5hbWU6IFwiZC5pZFwiLCBkYXRhOiBcImlkXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZC5jb2RlXCIsXHJcbiAgICAgICAgZGF0YTogXCJkZW1hbmRlX2NvZGVcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMC42cmVtOyBjb2xvcjogcmdiKDExNywgMTQ3LCAxNzQpOyBwYWRkaW5nOiAwO1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNkZXRhaWxzRGVtYW5kZSR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImQuY3JlYXRlZFwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGF0ZV9kZW1hbmRlXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRhKS5mb3JtYXQoXCJERC9NTS9ZWVlZIFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwiZC5kZXNjcmlwdGlvblwiLCBkYXRhOiBcImRlc2NyaXB0aW9uXCIgLCBcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtbGVmdC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwiZGVtLmRlc2lnbmF0aW9uQWNjZXNzXCIsIGRhdGE6IFwiZGVtYW5kZXVyXCIsXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLWxlZnQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcInJlYy5kZXNpZ25hdGlvbkFjY2Vzc1wiLCBkYXRhOiBcInJlY2VwdGV1clwiLFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1sZWZ0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImxnLm1vbnRhbnRfdHRjXCIsXHJcbiAgICAgICAgZGF0YTogXCJ0b3RhbF9tb250YW50X3R0Y1wiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgID8gTnVtYmVyKGRhdGEpLnRvTG9jYWxlU3RyaW5nKFwiZnItRlJcIiwge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZGVjaW1hbFwiLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogXCIwLDAwXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtcmlnaHQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcIm5pdmVhdV91cmdlbmNlXCIsIGRhdGE6IFwibml2ZWF1X3VyZ2VuY2VcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwic3RhdHVzLmRlc2lnbmF0aW9uXCIsIGRhdGE6IFwiY21fc3RhdHVzXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWN0aW9uc1wiLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgYWN0aW9uc0h0bWwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCInICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1jb250ZW50IGRpdk1lbnVcIiBpZD1cImRpdk1lbnUnICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj4nO1xyXG5cclxuICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICBhY3Rpb25zSHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHthY3Rpb24uY2xhc3NOYW1lfSBkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIke2RhdGEuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiIyR7YWN0aW9uLmlkTmFtZX0ke2RhdGEuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHthY3Rpb24uaWNvbn0gbWVudUljb25cIj48L2k+ICR7YWN0aW9uLm5vbX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBhY3Rpb25zSHRtbCArPSBcIjwvZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgcmV0dXJuIGFjdGlvbnNIdG1sO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5lZGl0LWRlbWFuZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGRlbWFuZGVJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBgI2VkaXREZW1hbmRlJHtkZW1hbmRlSWR9YDtcclxuXHJcbiAgaWYgKCFkZW1hbmRlSWQgfHwgISQobW9kYWxTZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCIgTW9kYWwgbm90IGZvdW5kIG9yIElEIG1pc3NpbmdcIiwge1xyXG4gICAgICBkZW1hbmRlSWQsXHJcbiAgICAgIG1vZGFsU2VsZWN0b3IsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3Qgc3RhdHVzID0gJChtb2RhbFNlbGVjdG9yKS5kYXRhKFwic3RhdHVzXCIpO1xyXG4gIGlmIChzdGF0dXMgPT09IDkpIHtcclxuICAgICQobW9kYWxTZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b2FzdHIud2FybmluZyhcIkltcG9zc2libGUgZGUgbW9kaWZpZXIgY2V0dGUgZGVtYW5kZS4gRWxsZSBuJ2VzdCBwbHVzIG1vZGlmaWFibGUuXCIpOyBcclxuICB9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5kZXRhaWxzLWRlbWFuZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGRlbWFuZGVJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBgI2RldGFpbHNEZW1hbmRlJHtkZW1hbmRlSWR9YDtcclxuXHJcbiAgaWYgKCFkZW1hbmRlSWQgfHwgISQobW9kYWxTZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCIgTW9kYWwgbm90IGZvdW5kIG9yIElEIG1pc3NpbmdcIiwge1xyXG4gICAgICBkZW1hbmRlSWQsXHJcbiAgICAgIG1vZGFsU2VsZWN0b3IsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgJChtb2RhbFNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XHJcbn0pO1xyXG5cclxuLy9lZGl0IGRlbWFuZGVcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBjb25zdCBwcm9kdWl0cyA9IHdpbmRvdy5QUk9EVUlUUyB8fCBbXTtcclxuICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzID0gW107XHJcbiAgd2luZG93LmdldERlbGV0ZWRQcm9kdWl0cyA9ICgpID0+IHdpbmRvdy5kZWxldGVkUHJvZHVpdHM7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uLCAuZmEtcGx1c1wiKTtcclxuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgcm93ID0gdGFyZ2V0LmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgIGNvbnN0IG1vZGFsID0gdGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxcIik7XHJcblxyXG4gICAgLy8gRWRpdCBwcm9kdWN0XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1lZGl0LWxpbmVcIikpIHtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zZWxlY3RcIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHktaW5wdXRcIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWVkaXQtbGluZVwiKT8uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWRlbGV0ZS1saW5lXCIpPy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tc2F2ZS1saW5lXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgZWRpdGVkIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLXNhdmUtbGluZVwiKSkge1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXNlbGVjdFwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5LWlucHV0XCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWVkaXQtbGluZVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWRlbGV0ZS1saW5lXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tc2F2ZS1saW5lXCIpPy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcyhcIlByb2R1aXQgbW9kaWZpw6kgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWxldGUgcHJvZHVjdFxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tZGVsZXRlLWxpbmVcIikpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJDb25maXJtZXIgbGEgc3VwcHJlc3Npb25cIixcclxuICAgICAgICB0ZXh0OiBcIlZvdWxlei12b3VzIHZyYWltZW50IHN1cHByaW1lciBjZSBwcm9kdWl0ID9cIixcclxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk91aSwgc3VwcHJpbWVyXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJBbm51bGVyXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGRlbWFuZGVJZCA9IG1vZGFsLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICBjb25zdCBwcm9kdWl0SWQgPSByb3cuZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnN0IGRlbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuZGVtYW5kZWxnSWQ7XHJcblxyXG4gICAgICAgICAgaWYgKGRlbWFuZGVsZ0lkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5kZWxldGVkUHJvZHVpdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgZGVtYW5kZV9pZDogcGFyc2VJbnQoZGVtYW5kZUlkKSxcclxuICAgICAgICAgICAgICBwcm9kdWl0X2lkOiBwYXJzZUludChwcm9kdWl0SWQpLFxyXG4gICAgICAgICAgICAgIGRlbWFuZGVsZ19pZDogcGFyc2VJbnQoZGVtYW5kZWxnSWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlByb2R1aXQgc3VwcHJpbcOpIGF2ZWMgc3VjY8Oocy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbmV3IHByb2R1Y3Qgcm93XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZhLXBsdXNcIikpIHtcclxuICAgICAgY29uc3QgdGFibGVCb2R5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xyXG4gICAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgICBuZXdSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcHJvZHVjdC1zZWxlY3RcIj5cclxuICAgICAgICAgICAgJHtwcm9kdWl0c1xyXG4gICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAocCkgPT5cclxuICAgICAgICAgICAgICAgICAgYDxvcHRpb24gdmFsdWU9XCIke3AuaWR9XCIgZGF0YS1wcml4PVwiJHtwLnByaWNlfVwiPiR7cC5uYW1lfTwvb3B0aW9uPmBcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHF1YW50aXR5LWlucHV0XCIgbWluPVwiMVwiIHZhbHVlPVwiMVwiPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2F2ZS1uZXctbGluZVwiIHRpdGxlPVwiRW5yZWdpc3RyZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zYXZlIHRleHQtc3VjY2Vzc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc2F2ZS1uZXctbGluZVwiKSkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0U2VsZWN0ID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zZWxlY3RcIik7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbnB1dFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBwcm9kdWN0U2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9kdWN0TmFtZSA9XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdC5vcHRpb25zW3Byb2R1Y3RTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuXHJcbiAgICAgIHByb2R1Y3RTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBxdWFudGl0eUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwidGQ6bGFzdC1jaGlsZFwiKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1lZGl0LWxpbmVcIiB0aXRsZT1cIk1vZGlmaWVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXQgdGV4dC1wcmltYXJ5XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlLWxpbmVcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaCB0ZXh0LWRhbmdlclwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNhdmUtbGluZSBkLW5vbmVcIiB0aXRsZT1cIkVucmVnaXN0cmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNhdmUgdGV4dC1zdWNjZXNzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJOb3V2ZWF1IHByb2R1aXQgYWpvdXTDqSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgfVxyXG5cclxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1zYXZlLWVkaXRcIikpIHtcclxuICAgIGNvbnN0IGRlbWFuZGVJZCA9IG1vZGFsLmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XHJcblxyXG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbXCJkZXNjcmlwdGlvblwiLCBcImRlbWFuZGV1cl9pZFwiLCBcInJlY2VwdGV1cl9pZFwiXTtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIHJlcXVpcmVkRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2ZpZWxkfVwiXWApO1xyXG4gICAgICBpZiAoIWlucHV0IHx8ICFpbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoYExlIGNoYW1wIFwiJHtmaWVsZC5yZXBsYWNlKCdfJywgJyAnKX1cIiBlc3QgcmVxdWlzLmApO1xyXG4gICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgcm93cyA9IHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiVmV1aWxsZXogYWpvdXRlciBhdSBtb2lucyB1biBwcm9kdWl0LlwiKTtcclxuICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgcHJvZHVjdHNcclxuICAgIGNvbnN0IHByb2R1Y3RJZHMgPSBbXTtcclxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHJvdy5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2VsZWN0XCIpO1xyXG4gICAgICBpZiAoc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGlmIChwcm9kdWN0SWRzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlVuIHByb2R1aXQgZXN0IHPDqWxlY3Rpb25uw6kgcGx1c2lldXJzIGZvaXMuXCIpO1xyXG4gICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9kdWN0SWRzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yIHx8ICF0YWJsZUJvZHkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKT8udmFsdWU7XHJcbiAgICBjb25zdCBkZW1hbmRldXJJZCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVtYW5kZXVyX2lkXCJdJyk/LnZhbHVlO1xyXG4gICAgY29uc3QgcmVjZXB0ZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInJlY2VwdGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgIGNvbnN0IHVyZ2VudCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidXJnZW50XCJdJyk/LmNoZWNrZWQ7XHJcblxyXG4gICAgY29uc3QgZWRpdGVkUHJvZHVpdHMgPSBbXTtcclxuICAgIGNvbnN0IG5ld1Byb2R1aXRzID0gW107XHJcblxyXG4gICAgdGFibGVCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IHJvdy5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2VsZWN0XCIpO1xyXG4gICAgICBjb25zdCBwcm9kdWl0SWQgPSBzZWxlY3RFbGVtZW50Py52YWx1ZTtcclxuICAgICAgY29uc3QgcXVhbnRpdGUgPSByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbnB1dFwiKT8udmFsdWU7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gcGFyc2VGbG9hdChzZWxlY3RFbGVtZW50Py5zZWxlY3RlZE9wdGlvbnNbMF0/LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpeFwiKSkgfHwgMDtcclxuICAgICAgY29uc3QgZGVtYW5kZWxnSWQgPSByb3cuZGF0YXNldC5kZW1hbmRlbGdJZCB8fCBudWxsO1xyXG5cclxuICAgICAgaWYgKCFwcm9kdWl0SWQgfHwgIXF1YW50aXRlKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHByb2R1aXRfaWQ6IHBhcnNlSW50KHByb2R1aXRJZCksXHJcbiAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQocXVhbnRpdGUpLFxyXG4gICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChkZW1hbmRlbGdJZCkge1xyXG4gICAgICAgIGRhdGEuZGVtYW5kZWxnX2lkID0gcGFyc2VJbnQoZGVtYW5kZWxnSWQpO1xyXG4gICAgICAgIGVkaXRlZFByb2R1aXRzLnB1c2goZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3UHJvZHVpdHMucHVzaChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlZCA9IHdpbmRvdy5nZXREZWxldGVkUHJvZHVpdHMoKS5maWx0ZXIoZCA9PiBkLmRlbWFuZGVfaWQgPT0gZGVtYW5kZUlkKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL21vdXZlbWVudC9lZGl0LWRlbWFuZGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZGVtYW5kZV9pZDogcGFyc2VJbnQoZGVtYW5kZUlkKSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgZGVtYW5kZXVyX2lkOiBwYXJzZUludChkZW1hbmRldXJJZCksXHJcbiAgICAgICAgICByZWNlcHRldXJfaWQ6IHBhcnNlSW50KHJlY2VwdGV1cklkKSxcclxuICAgICAgICAgIHVyZ2VudCxcclxuICAgICAgICAgIGVkaXRlZDogZWRpdGVkUHJvZHVpdHMsXHJcbiAgICAgICAgICBhZGRlZDogbmV3UHJvZHVpdHMsXHJcbiAgICAgICAgICBkZWxldGVkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJEZW1hbmRlIHNhdXZlZ2FyZMOpZSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAkKG1vZGFsKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9KS5tb2RhbChcImhpZGVcIik7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kZWxldGVkUHJvZHVpdHMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IocmVzdWx0Lm1lc3NhZ2UgfHwgXCJFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJOZXR3b3JrIGVycm9yOlwiLCBlcnIpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBVcGRhdGUgcG9zaXRpb24gb2YgZGVtYW5kZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHNob3VsZFJlZnJlc2ggPSBmYWxzZTsgXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gYXN5bmMgKGlkLCBwb3NpdGlvbiwgYnV0dG9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL21vdXZlbWVudC91cGRhdGUtcG9zaXRpb24tZGVtYW5kZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkLCBwb3NpdGlvbiB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJMYSBkZW1hbmRlIGEgw6l0w6kgdmFsaWTDqWUgYXZlYyBzdWNjw6hzLlwiKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3VsZFJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ci5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciByw6lzZWF1LlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tdmFsaWRlclwiKSkge1xyXG4gICAgICBjb25zdCBpZCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICB1cGRhdGVQb3NpdGlvbihpZCwgXCJ2YWxpZMOpZVwiLCBidG4pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBcIi5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc2hvdWxkUmVmcmVzaCkge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCAkcG9wdXAgPSAkKCcjaW1wcmVzc2lvblBvcHVwJyk7XHJcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoJy50b2dnbGVJbXByZXNzaW9uUG9wdXAnKTtcclxuXHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJHRvZ2dsZSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRwb3B1cC5mYWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgICAgfSBcclxuICAgIFxyXG4gICAgICAgIGVsc2UgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRwb3B1cC5mYWRlT3V0KDE1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5nZW5lcmVyUGRmRGVtYW5kZVNvcnRpZVN0b2NrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJRCBkZSBEZW1hbmRlIG9ydGllIFN0b2NrIG1hbnF1YW50LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXhwb3J0c19kZW1hbmRlX2V4cG9ydHMnKSArICc/aWQ9JyArIGlkO1xyXG4gICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJvdXRlIG5vbiB0cm91dsOpZSBkYW5zIFJvdXRpbmcuanMgOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJSb3V0ZSBpbnRyb3V2YWJsZS4gQXZlei12b3VzIGJpZW4gZHVtcMOpIGxlcyByb3V0ZXMgSlMgP1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTsgIFxyXG4gIFxyXG4gICAgJChcIiNham91dGVyVHJhbnNmZXJ0XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJUcmFuc2ZlcnRcIikub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgKCkgPT4ge1xyXG4gICAgICBpc0NvbW1hbmRMb2NrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIElURVJBVE9SID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5XG4gIC8vIE1TIEVkZ2UgMTgtIGJyb2tlbiB3aXRoIGJveGVkIHN5bWJvbHNcbiAgfHwgKElURVJBVE9SICYmICFmYWlscyhmdW5jdGlvbiAoKSB7ICRwYXJzZUZsb2F0KE9iamVjdChJVEVSQVRPUikpOyB9KSk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgY2hhckF0KHRyaW1tZWRTdHJpbmcsIDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgaGV4ID0gL15bKy1dPzB4L2k7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGhleC5leGVjKTtcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMlxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VJbnQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGV4ZWMoaGV4LCBTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKCRwcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBpbiBzb21lIElFIHZlcnNpb25zLCBgcHJvcGVydHlJc0VudW1lcmFibGVgIHJldHVybnMgaW5jb3JyZWN0IHJlc3VsdCBvbiBpbnRlZ2VyIGtleXNcbi8vIG9mIGBudWxsYCBwcm90b3R5cGUgb2JqZWN0c1xudmFyIElFX0JVRyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxuICB2YXIgTyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIE9bMl0gPSAyO1xuICByZXR1cm4gIXByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIDIpO1xufSk7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBJRV9XT1JLQVJPVU5EID0gSUVfQlVHICYmIG9iamVjdEdldFByb3RvdHlwZU9mKE8pID09PSBudWxsO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgKElFX1dPUktBUk9VTkQgPyBrZXkgaW4gTyA6IHByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIGtleSkpKSB7XG4gICAgICAgIHB1c2gocmVzdWx0LCBUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4gIHZhbHVlczogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQgfSwge1xuICBwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gJHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6ICRwYXJzZUludFxufSk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwicmVxdWlyZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsInVybCIsIndpbmRvdyIsImZyZW5jaEpzb25VcmwiLCJwcm9jZXNzaW5nIiwibGVuZ3RoTWVudSIsInNlcnZlclNpZGUiLCJhamF4IiwiUm91dGluZyIsImdlbmVyYXRlIiwiZGF0YSIsImQiLCJkcmF3Iiwic3RhcnQiLCJkYXRhU3JjIiwianNvbiIsImdsb2JhbEFjdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJhY3Rpb25zIiwib3JkZXIiLCJjb2x1bW5zIiwicmVuZGVyIiwicm93IiwiY29uY2F0IiwiaWQiLCJtb21lbnQiLCJmb3JtYXQiLCJjcmVhdGVkQ2VsbCIsInRkIiwiY2xhc3NMaXN0IiwiYWRkIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJhY3Rpb25zSHRtbCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlkTmFtZSIsImljb24iLCJub20iLCJhdXRvV2lkdGgiLCJvbiIsImRlbWFuZGVJZCIsImF0dHIiLCJtb2RhbFNlbGVjdG9yIiwiY29uc29sZSIsIndhcm4iLCJzdGF0dXMiLCJtb2RhbCIsInRvYXN0ciIsIndhcm5pbmciLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZHVpdHMiLCJQUk9EVUlUUyIsImRlbGV0ZWRQcm9kdWl0cyIsImdldERlbGV0ZWRQcm9kdWl0cyIsImJvZHkiLCJfcmVmIiwiX2NhbGxlZSIsImUiLCJ0YXJnZXQiLCJfcm93JHF1ZXJ5U2VsZWN0b3IiLCJfcm93JHF1ZXJ5U2VsZWN0b3IyIiwiX3JvdyRxdWVyeVNlbGVjdG9yMyIsIl9yb3ckcXVlcnlTZWxlY3RvcjQiLCJfcm93JHF1ZXJ5U2VsZWN0b3I1IiwiX3JvdyRxdWVyeVNlbGVjdG9yNiIsInRhYmxlQm9keSIsIm5ld1JvdyIsInByb2R1Y3RTZWxlY3QiLCJxdWFudGl0eUlucHV0Iiwic2VsZWN0ZWRJZCIsInByb2R1Y3ROYW1lIiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3IiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjIiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjMiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjQiLCJfdGFibGVCb2R5IiwicmVxdWlyZWRGaWVsZHMiLCJoYXNFcnJvciIsInJvd3MiLCJwcm9kdWN0SWRzIiwiZGVzY3JpcHRpb24iLCJkZW1hbmRldXJJZCIsInJlY2VwdGV1cklkIiwidXJnZW50IiwiZWRpdGVkUHJvZHVpdHMiLCJuZXdQcm9kdWl0cyIsImRlbGV0ZWQiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJzdWNjZXNzIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiaXNDb25maXJtZWQiLCJkYXRhc2V0IiwicHJvZHVpdElkIiwiZGVtYW5kZWxnSWQiLCJkZW1hbmRlX2lkIiwicGFyc2VJbnQiLCJwcm9kdWl0X2lkIiwiZGVtYW5kZWxnX2lkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1hcCIsInAiLCJwcmljZSIsImpvaW4iLCJhcHBlbmRDaGlsZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiZmllbGQiLCJpbnB1dCIsInRyaW0iLCJyZXBsYWNlIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdCIsImluY2x1ZGVzIiwiY2hlY2tlZCIsIl9yb3ckcXVlcnlTZWxlY3RvcjciLCJfc2VsZWN0RWxlbWVudCRzZWxlY3QiLCJzZWxlY3RFbGVtZW50IiwicXVhbnRpdGUiLCJwYXJzZUZsb2F0Iiwic2VsZWN0ZWRPcHRpb25zIiwiZ2V0QXR0cmlidXRlIiwiZmlsdGVyIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbWFuZGV1cl9pZCIsInJlY2VwdGV1cl9pZCIsImVkaXRlZCIsImFkZGVkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJtZXNzYWdlIiwidDAiLCJfeCIsInNob3VsZFJlZnJlc2giLCJ1cGRhdGVQb3NpdGlvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJwb3NpdGlvbiIsImJ1dHRvbiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRpc3BsYXkiLCJfeDIiLCJfeDMiLCJfeDQiLCJidG4iLCIkcG9wdXAiLCIkdG9nZ2xlIiwiZmFkZVRvZ2dsZSIsImZhZGVPdXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJpc0NvbW1hbmRMb2NrZWQiXSwic291cmNlUm9vdCI6IiJ9