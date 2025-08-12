(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_demandes"],{

/***/ "./assets/js/mouvement/gestion_demandes.js":
/*!*************************************************!*\
  !*** ./assets/js/mouvement/gestion_demandes.js ***!
  \*************************************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6f202c","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-02d11e","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/mouvement/gestion_demandes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLElBQUksNkNBQTZDO0FBQ2pEO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb3V2ZW1lbnQvZ2VzdGlvbl9kZW1hbmRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRhYmxlID0gJChcIiNzYWxlc1RhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsLFxyXG4gICAgICBwcm9jZXNzaW5nOlxyXG4gICAgICAgICc8aSBzdHlsZT1cImNvbG9yOiM3NTkzYWU7IG1hcmdpbi10b3A6MTAwcHggIWltcG9ydGFudDsgZm9udC1zaXplOjI1cHggIWltcG9ydGFudDtcIiBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeCBmYS1md1wiPjwvaT48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj48L3NwYW4+ICcsXHJcbiAgICB9LFxyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgIFsyMCwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGFqYXg6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiYXBwX2ZldGNoX2RlbWFuZGVzXCIpLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGQuZHJhdyA9IGQuZHJhdyB8fCAwO1xyXG4gICAgICAgIGQuc3RhcnQgPSBkLnN0YXJ0IHx8IDA7XHJcbiAgICAgICAgZC5sZW5ndGggPSBkLmxlbmd0aCB8fCAxNTtcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNyYzogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoanNvbi5hY3Rpb25zKVxyXG4gICAgICAgICAgPyBqc29uLmFjdGlvbnNcclxuICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhqc29uLmFjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBqc29uLmRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyBuYW1lOiBcImQuaWRcIiwgZGF0YTogXCJpZFwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImQuY29kZVwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGVtYW5kZV9jb2RlXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDAuNnJlbTsgY29sb3I6IHJnYigxMTcsIDE0NywgMTc0KTsgcGFkZGluZzogMDtcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZGV0YWlsc0RlbWFuZGUke3Jvdy5pZH1cIj5cclxuICAgICAgICAgICAgICAgICR7ZGF0YX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJkLmNyZWF0ZWRcIixcclxuICAgICAgICBkYXRhOiBcImRhdGVfZGVtYW5kZVwiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KFwiREQvTU0vWVlZWSBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImQuZGVzY3JpcHRpb25cIiwgZGF0YTogXCJkZXNjcmlwdGlvblwiICwgXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLWxlZnQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImRlbS5kZXNpZ25hdGlvbkFjY2Vzc1wiLCBkYXRhOiBcImRlbWFuZGV1clwiLFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1sZWZ0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJyZWMuZGVzaWduYXRpb25BY2Nlc3NcIiwgZGF0YTogXCJyZWNlcHRldXJcIixcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtbGVmdC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJsZy5tb250YW50X3R0Y1wiLFxyXG4gICAgICAgIGRhdGE6IFwidG90YWxfbW9udGFudF90dGNcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICA/IE51bWJlcihkYXRhKS50b0xvY2FsZVN0cmluZyhcImZyLUZSXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBcImRlY2ltYWxcIixcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IFwiMCwwMFwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLXJpZ2h0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJuaXZlYXVfdXJnZW5jZVwiLCBkYXRhOiBcIm5pdmVhdV91cmdlbmNlXCIgfSxcclxuICAgICAgeyBuYW1lOiBcInN0YXR1cy5kZXNpZ25hdGlvblwiLCBkYXRhOiBcImNtX3N0YXR1c1wiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImFjdGlvbnNcIixcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VhcmNoYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgdmFyIGFjdGlvbnNIdG1sID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJtZW51QWN0aW9ucyBmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiIGlkPVwiJyArXHJcbiAgICAgICAgICAgIGRhdGEuaWQgK1xyXG4gICAgICAgICAgICAnXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tY29udGVudCBkaXZNZW51XCIgaWQ9XCJkaXZNZW51JyArXHJcbiAgICAgICAgICAgIGRhdGEuaWQgK1xyXG4gICAgICAgICAgICAnXCI+JztcclxuXHJcbiAgICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgYWN0aW9uc0h0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7YWN0aW9uLmNsYXNzTmFtZX0gZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiJHtkYXRhLmlkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiMke2FjdGlvbi5pZE5hbWV9JHtkYXRhLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYWN0aW9uc0h0bWwgKz0gXCI8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgIHJldHVybiBhY3Rpb25zSHRtbDtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdC1kZW1hbmRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkZW1hbmRlSWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICBjb25zdCBtb2RhbFNlbGVjdG9yID0gYCNlZGl0RGVtYW5kZSR7ZGVtYW5kZUlkfWA7XHJcblxyXG4gIGlmICghZGVtYW5kZUlkIHx8ICEkKG1vZGFsU2VsZWN0b3IpLmxlbmd0aCkge1xyXG4gICAgY29uc29sZS53YXJuKFwiIE1vZGFsIG5vdCBmb3VuZCBvciBJRCBtaXNzaW5nXCIsIHtcclxuICAgICAgZGVtYW5kZUlkLFxyXG4gICAgICBtb2RhbFNlbGVjdG9yLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNvbnN0IHN0YXR1cyA9ICQobW9kYWxTZWxlY3RvcikuZGF0YShcInN0YXR1c1wiKTtcclxuICBpZiAoc3RhdHVzID09PSA5KSB7XHJcbiAgICAkKG1vZGFsU2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGRlIG1vZGlmaWVyIGNldHRlIGRlbWFuZGUuIEVsbGUgbidlc3QgcGx1cyBtb2RpZmlhYmxlLlwiKTsgXHJcbiAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZGV0YWlscy1kZW1hbmRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkZW1hbmRlSWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICBjb25zdCBtb2RhbFNlbGVjdG9yID0gYCNkZXRhaWxzRGVtYW5kZSR7ZGVtYW5kZUlkfWA7XHJcblxyXG4gIGlmICghZGVtYW5kZUlkIHx8ICEkKG1vZGFsU2VsZWN0b3IpLmxlbmd0aCkge1xyXG4gICAgY29uc29sZS53YXJuKFwiIE1vZGFsIG5vdCBmb3VuZCBvciBJRCBtaXNzaW5nXCIsIHtcclxuICAgICAgZGVtYW5kZUlkLFxyXG4gICAgICBtb2RhbFNlbGVjdG9yLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gICQobW9kYWxTZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xyXG59KTtcclxuXHJcbi8vZWRpdCBkZW1hbmRlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZHVpdHMgPSB3aW5kb3cuUFJPRFVJVFMgfHwgW107XHJcbiAgd2luZG93LmRlbGV0ZWRQcm9kdWl0cyA9IFtdO1xyXG4gIHdpbmRvdy5nZXREZWxldGVkUHJvZHVpdHMgPSAoKSA9PiB3aW5kb3cuZGVsZXRlZFByb2R1aXRzO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvbiwgLmZhLXBsdXNcIik7XHJcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJvdyA9IHRhcmdldC5jbG9zZXN0KFwidHJcIik7XHJcbiAgICBjb25zdCBtb2RhbCA9IHRhcmdldC5jbG9zZXN0KFwiLm1vZGFsXCIpO1xyXG5cclxuICAgIC8vIEVkaXQgcHJvZHVjdFxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tZWRpdC1saW5lXCIpKSB7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2VsZWN0XCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5LWlucHV0XCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1lZGl0LWxpbmVcIik/LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kZWxldGUtbGluZVwiKT8uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNhdmUtbGluZVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIGVkaXRlZCBwcm9kdWN0XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1zYXZlLWxpbmVcIikpIHtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zZWxlY3RcIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbnB1dFwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1lZGl0LWxpbmVcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kZWxldGUtbGluZVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNhdmUtbGluZVwiKT8uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJQcm9kdWl0IG1vZGlmacOpIGF2ZWMgc3VjY8Oocy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWRlbGV0ZS1saW5lXCIpKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uXCIsXHJcbiAgICAgICAgdGV4dDogXCJWb3VsZXotdm91cyB2cmFpbWVudCBzdXBwcmltZXIgY2UgcHJvZHVpdCA/XCIsXHJcbiAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPdWksIHN1cHByaW1lclwiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQW5udWxlclwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICBjb25zdCBkZW1hbmRlSWQgPSBtb2RhbC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVpdElkID0gcm93LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICBjb25zdCBkZW1hbmRlbGdJZCA9IHJvdy5kYXRhc2V0LmRlbWFuZGVsZ0lkO1xyXG5cclxuICAgICAgICAgIGlmIChkZW1hbmRlbGdJZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGRlbWFuZGVfaWQ6IHBhcnNlSW50KGRlbWFuZGVJZCksXHJcbiAgICAgICAgICAgICAgcHJvZHVpdF9pZDogcGFyc2VJbnQocHJvZHVpdElkKSxcclxuICAgICAgICAgICAgICBkZW1hbmRlbGdfaWQ6IHBhcnNlSW50KGRlbWFuZGVsZ0lkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJQcm9kdWl0IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIG5ldyBwcm9kdWN0IHJvd1xyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYS1wbHVzXCIpKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKTtcclxuICAgICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgICAgbmV3Um93LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHByb2R1Y3Qtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICR7cHJvZHVpdHNcclxuICAgICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgKHApID0+XHJcbiAgICAgICAgICAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHtwLmlkfVwiIGRhdGEtcHJpeD1cIiR7cC5wcmljZX1cIj4ke3AubmFtZX08L29wdGlvbj5gXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC5qb2luKFwiXCIpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBxdWFudGl0eS1pbnB1dFwiIG1pbj1cIjFcIiB2YWx1ZT1cIjFcIj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNhdmUtbmV3LWxpbmVcIiB0aXRsZT1cIkVucmVnaXN0cmVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2F2ZSB0ZXh0LXN1Y2Nlc3NcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLXNhdmUtbmV3LWxpbmVcIikpIHtcclxuICAgICAgY29uc3QgcHJvZHVjdFNlbGVjdCA9IHJvdy5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2VsZWN0XCIpO1xyXG4gICAgICBjb25zdCBxdWFudGl0eUlucHV0ID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHktaW5wdXRcIik7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3RlZElkID0gcHJvZHVjdFNlbGVjdC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPVxyXG4gICAgICAgIHByb2R1Y3RTZWxlY3Qub3B0aW9uc1twcm9kdWN0U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcblxyXG4gICAgICBwcm9kdWN0U2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcXVhbnRpdHlJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcInRkOmxhc3QtY2hpbGRcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZWRpdC1saW5lXCIgdGl0bGU9XCJNb2RpZmllclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lZGl0IHRleHQtcHJpbWFyeVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlbGV0ZS1saW5lXCIgdGl0bGU9XCJTdXBwcmltZXJcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2ggdGV4dC1kYW5nZXJcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zYXZlLWxpbmUgZC1ub25lXCIgdGl0bGU9XCJFbnJlZ2lzdHJlclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zYXZlIHRleHQtc3VjY2Vzc1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiTm91dmVhdSBwcm9kdWl0IGFqb3V0w6kgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc2F2ZS1lZGl0XCIpKSB7XHJcbiAgICBjb25zdCBkZW1hbmRlSWQgPSBtb2RhbC5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgdGFibGVCb2R5ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gW1wiZGVzY3JpcHRpb25cIiwgXCJkZW1hbmRldXJfaWRcIiwgXCJyZWNlcHRldXJfaWRcIl07XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICByZXF1aXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZH1cIl1gKTtcclxuICAgICAgaWYgKCFpbnB1dCB8fCAhaW5wdXQudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKGBMZSBjaGFtcCBcIiR7ZmllbGQucmVwbGFjZSgnXycsICcgJyl9XCIgZXN0IHJlcXVpcy5gKTtcclxuICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJvd3MgPSB0YWJsZUJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpO1xyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIlZldWlsbGV6IGFqb3V0ZXIgYXUgbW9pbnMgdW4gcHJvZHVpdC5cIik7XHJcbiAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHByb2R1Y3RzXHJcbiAgICBjb25zdCBwcm9kdWN0SWRzID0gW107XHJcbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3QgPSByb3cucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXNlbGVjdFwiKTtcclxuICAgICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHNlbGVjdC52YWx1ZTtcclxuICAgICAgICBpZiAocHJvZHVjdElkcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJVbiBwcm9kdWl0IGVzdCBzw6lsZWN0aW9ubsOpIHBsdXNpZXVycyBmb2lzLlwiKTtcclxuICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvZHVjdElkcy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvciB8fCAhdGFibGVCb2R5KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk/LnZhbHVlO1xyXG4gICAgY29uc3QgZGVtYW5kZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlbWFuZGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgIGNvbnN0IHJlY2VwdGV1cklkID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJyZWNlcHRldXJfaWRcIl0nKT8udmFsdWU7XHJcbiAgICBjb25zdCB1cmdlbnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInVyZ2VudFwiXScpPy5jaGVja2VkO1xyXG5cclxuICAgIGNvbnN0IGVkaXRlZFByb2R1aXRzID0gW107XHJcbiAgICBjb25zdCBuZXdQcm9kdWl0cyA9IFtdO1xyXG5cclxuICAgIHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSByb3cucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXNlbGVjdFwiKTtcclxuICAgICAgY29uc3QgcHJvZHVpdElkID0gc2VsZWN0RWxlbWVudD8udmFsdWU7XHJcbiAgICAgIGNvbnN0IHF1YW50aXRlID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHktaW5wdXRcIik/LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoc2VsZWN0RWxlbWVudD8uc2VsZWN0ZWRPcHRpb25zWzBdPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaXhcIikpIHx8IDA7XHJcbiAgICAgIGNvbnN0IGRlbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuZGVtYW5kZWxnSWQgfHwgbnVsbDtcclxuXHJcbiAgICAgIGlmICghcHJvZHVpdElkIHx8ICFxdWFudGl0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBwcm9kdWl0X2lkOiBwYXJzZUludChwcm9kdWl0SWQpLFxyXG4gICAgICAgIHF1YW50aXRlOiBwYXJzZUZsb2F0KHF1YW50aXRlKSxcclxuICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoZGVtYW5kZWxnSWQpIHtcclxuICAgICAgICBkYXRhLmRlbWFuZGVsZ19pZCA9IHBhcnNlSW50KGRlbWFuZGVsZ0lkKTtcclxuICAgICAgICBlZGl0ZWRQcm9kdWl0cy5wdXNoKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1Byb2R1aXRzLnB1c2goZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZWQgPSB3aW5kb3cuZ2V0RGVsZXRlZFByb2R1aXRzKCkuZmlsdGVyKGQgPT4gZC5kZW1hbmRlX2lkID09IGRlbWFuZGVJZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9tb3V2ZW1lbnQvZWRpdC1kZW1hbmRlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGRlbWFuZGVfaWQ6IHBhcnNlSW50KGRlbWFuZGVJZCksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgIGRlbWFuZGV1cl9pZDogcGFyc2VJbnQoZGVtYW5kZXVySWQpLFxyXG4gICAgICAgICAgcmVjZXB0ZXVyX2lkOiBwYXJzZUludChyZWNlcHRldXJJZCksXHJcbiAgICAgICAgICB1cmdlbnQsXHJcbiAgICAgICAgICBlZGl0ZWQ6IGVkaXRlZFByb2R1aXRzLFxyXG4gICAgICAgICAgYWRkZWQ6IG5ld1Byb2R1aXRzLFxyXG4gICAgICAgICAgZGVsZXRlZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiRGVtYW5kZSBzYXV2ZWdhcmTDqWUgYXZlYyBzdWNjw6hzICFcIik7XHJcbiAgICAgICAgJChtb2RhbCkub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSkubW9kYWwoXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKHJlc3VsdC5tZXNzYWdlIHx8IFwiRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZS5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTmV0d29yayBlcnJvcjpcIiwgZXJyKTtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlLlwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gVXBkYXRlIHBvc2l0aW9uIG9mIGRlbWFuZGVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGxldCBzaG91bGRSZWZyZXNoID0gZmFsc2U7IFxyXG5cclxuICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IGFzeW5jIChpZCwgcG9zaXRpb24sIGJ1dHRvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9tb3V2ZW1lbnQvdXBkYXRlLXBvc2l0aW9uLWRlbWFuZGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcG9zaXRpb24gfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiTGEgZGVtYW5kZSBhIMOpdMOpIHZhbGlkw6llIGF2ZWMgc3VjY8Oocy5cIik7XHJcblxyXG4gICAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaG91bGRSZWZyZXNoID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBtaXNlIMOgIGpvdXIuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJFcnJldXIgcsOpc2VhdS5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLXZhbGlkZXJcIikpIHtcclxuICAgICAgY29uc3QgaWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgICAgdXBkYXRlUG9zaXRpb24oaWQsIFwidmFsaWTDqWVcIiwgYnRuKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgXCIubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHNob3VsZFJlZnJlc2gpIHtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgJHBvcHVwID0gJCgnI2ltcHJlc3Npb25Qb3B1cCcpO1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKCcudG9nZ2xlSW1wcmVzc2lvblBvcHVwJyk7XHJcblxyXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCR0b2dnbGUpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkcG9wdXAuZmFkZVRvZ2dsZSgxNTApO1xyXG4gICAgICAgIH0gXHJcbiAgICBcclxuICAgICAgICBlbHNlIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkcG9wdXAuZmFkZU91dCgxNTApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmdlbmVyZXJQZGZEZW1hbmRlU29ydGllU3RvY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJRCBkZSBEZW1hbmRlIG9ydGllIFN0b2NrIG1hbnF1YW50LlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYXBwX2V4cG9ydHNfZGVtYW5kZV9leHBvcnRzJykgKyAnP2lkPScgKyBpZDtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSb3V0ZSBub24gdHJvdXbDqWUgZGFucyBSb3V0aW5nLmpzIDpcIiwgZXJyKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIlJvdXRlIGludHJvdXZhYmxlLiBBdmV6LXZvdXMgYmllbiBkdW1ww6kgbGVzIHJvdXRlcyBKUyA/XCIpO1xyXG4gICAgICB9XHJcbiAgfSk7ICAgXHJcbn0pO1xyXG5cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgSVRFUkFUT1IgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHlcbiAgLy8gTVMgRWRnZSAxOC0gYnJva2VuIHdpdGggYm94ZWQgc3ltYm9sc1xuICB8fCAoSVRFUkFUT1IgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHsgJHBhcnNlRmxvYXQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0odG9TdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBjaGFyQXQodHJpbW1lZFN0cmluZywgMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIElURVJBVE9SID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBoZXggPSAvXlsrLV0/MHgvaTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoaGV4LmV4ZWMpO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyXG4gIC8vIE1TIEVkZ2UgMTgtIGJyb2tlbiB3aXRoIGJveGVkIHN5bWJvbHNcbiAgfHwgKElURVJBVE9SICYmICFmYWlscyhmdW5jdGlvbiAoKSB7ICRwYXJzZUludChPYmplY3QoSVRFUkFUT1IpKTsgfSkpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0odG9TdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoZXhlYyhoZXgsIFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgb2JqZWN0R2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJykuZjtcblxudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gdW5jdXJyeVRoaXMoJHByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbi8vIGluIHNvbWUgSUUgdmVyc2lvbnMsIGBwcm9wZXJ0eUlzRW51bWVyYWJsZWAgcmV0dXJucyBpbmNvcnJlY3QgcmVzdWx0IG9uIGludGVnZXIga2V5c1xuLy8gb2YgYG51bGxgIHByb3RvdHlwZSBvYmplY3RzXG52YXIgSUVfQlVHID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG4gIHZhciBPID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgT1syXSA9IDI7XG4gIHJldHVybiAhcHJvcGVydHlJc0VudW1lcmFibGUoTywgMik7XG59KTtcblxuLy8gYE9iamVjdC57IGVudHJpZXMsIHZhbHVlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRPX0VOVFJJRVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IG9iamVjdEtleXMoTyk7XG4gICAgdmFyIElFX1dPUktBUk9VTkQgPSBJRV9CVUcgJiYgb2JqZWN0R2V0UHJvdG90eXBlT2YoTykgPT09IG51bGw7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCAoSUVfV09SS0FST1VORCA/IGtleSBpbiBPIDogcHJvcGVydHlJc0VudW1lcmFibGUoTywga2V5KSkpIHtcbiAgICAgICAgcHVzaChyZXN1bHQsIFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXknKS52YWx1ZXM7XG5cbi8vIGBPYmplY3QudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhPKSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoTyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCB9LCB7XG4gIHBhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUludCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSAkcGFyc2VJbnQgfSwge1xuICBwYXJzZUludDogJHBhcnNlSW50XG59KTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJyZXF1aXJlIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxhbmd1YWdlIiwidXJsIiwid2luZG93IiwiZnJlbmNoSnNvblVybCIsInByb2Nlc3NpbmciLCJsZW5ndGhNZW51Iiwic2VydmVyU2lkZSIsImFqYXgiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkYXRhIiwiZCIsImRyYXciLCJzdGFydCIsImRhdGFTcmMiLCJqc29uIiwiZ2xvYmFsQWN0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsImFjdGlvbnMiLCJvcmRlciIsImNvbHVtbnMiLCJyZW5kZXIiLCJyb3ciLCJjb25jYXQiLCJpZCIsIm1vbWVudCIsImZvcm1hdCIsImNyZWF0ZWRDZWxsIiwidGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImFjdGlvbnNIdG1sIiwiYWN0aW9uIiwiY2xhc3NOYW1lIiwiaWROYW1lIiwiaWNvbiIsIm5vbSIsImF1dG9XaWR0aCIsIm9uIiwiZGVtYW5kZUlkIiwiYXR0ciIsIm1vZGFsU2VsZWN0b3IiLCJjb25zb2xlIiwid2FybiIsInN0YXR1cyIsIm1vZGFsIiwidG9hc3RyIiwid2FybmluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9kdWl0cyIsIlBST0RVSVRTIiwiZGVsZXRlZFByb2R1aXRzIiwiZ2V0RGVsZXRlZFByb2R1aXRzIiwiYm9keSIsIl9yZWYiLCJfY2FsbGVlIiwiZSIsInRhcmdldCIsIl9yb3ckcXVlcnlTZWxlY3RvciIsIl9yb3ckcXVlcnlTZWxlY3RvcjIiLCJfcm93JHF1ZXJ5U2VsZWN0b3IzIiwiX3JvdyRxdWVyeVNlbGVjdG9yNCIsIl9yb3ckcXVlcnlTZWxlY3RvcjUiLCJfcm93JHF1ZXJ5U2VsZWN0b3I2IiwidGFibGVCb2R5IiwibmV3Um93IiwicHJvZHVjdFNlbGVjdCIsInF1YW50aXR5SW5wdXQiLCJzZWxlY3RlZElkIiwicHJvZHVjdE5hbWUiLCJfbW9kYWwkcXVlcnlTZWxlY3RvciIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yMiIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yMyIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yNCIsIl90YWJsZUJvZHkiLCJyZXF1aXJlZEZpZWxkcyIsImhhc0Vycm9yIiwicm93cyIsInByb2R1Y3RJZHMiLCJkZXNjcmlwdGlvbiIsImRlbWFuZGV1cklkIiwicmVjZXB0ZXVySWQiLCJ1cmdlbnQiLCJlZGl0ZWRQcm9kdWl0cyIsIm5ld1Byb2R1aXRzIiwiZGVsZXRlZCIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNsb3Nlc3QiLCJjb250YWlucyIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlZCIsInJlbW92ZSIsInN1Y2Nlc3MiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJpc0NvbmZpcm1lZCIsImRhdGFzZXQiLCJwcm9kdWl0SWQiLCJkZW1hbmRlbGdJZCIsImRlbWFuZGVfaWQiLCJwYXJzZUludCIsInByb2R1aXRfaWQiLCJkZW1hbmRlbGdfaWQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibWFwIiwicCIsInByaWNlIiwiam9pbiIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJmaWVsZCIsImlucHV0IiwidHJpbSIsInJlcGxhY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0IiwiaW5jbHVkZXMiLCJjaGVja2VkIiwiX3JvdyRxdWVyeVNlbGVjdG9yNyIsIl9zZWxlY3RFbGVtZW50JHNlbGVjdCIsInNlbGVjdEVsZW1lbnQiLCJxdWFudGl0ZSIsInBhcnNlRmxvYXQiLCJzZWxlY3RlZE9wdGlvbnMiLCJnZXRBdHRyaWJ1dGUiLCJmaWx0ZXIiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVtYW5kZXVyX2lkIiwicmVjZXB0ZXVyX2lkIiwiZWRpdGVkIiwiYWRkZWQiLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lc3NhZ2UiLCJ0MCIsIl94Iiwic2hvdWxkUmVmcmVzaCIsInVwZGF0ZVBvc2l0aW9uIiwiX3JlZjIiLCJfY2FsbGVlMiIsInBvc2l0aW9uIiwiYnV0dG9uIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGlzcGxheSIsIl94MiIsIl94MyIsIl94NCIsImJ0biIsIiRwb3B1cCIsIiR0b2dnbGUiLCJmYWRlVG9nZ2xlIiwiZmFkZU91dCIsInByZXZlbnREZWZhdWx0Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=