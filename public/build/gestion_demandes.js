(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_demandes"],{

/***/ "./assets/js/vente/gestion_demandes.js":
/*!*********************************************!*\
  !*** ./assets/js/vente/gestion_demandes.js ***!
  \*********************************************/
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
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
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
    lengthMenu: [[21, 50, 100, 200], [21, 50, 100, 200]],
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
        return "\n              <button \n                class=\"btn btn-sm\"\n                style=\"font-size: 0.6rem; color: #007bff; padding: 0;\"\n                data-toggle=\"modal\" \n                data-target=\"#detailsDemande".concat(row.id, "\">\n                ").concat(data, "\n              </button>\n            ");
      }
    }, {
      name: "d.description",
      data: "description"
    }, {
      name: "demandeur.designation",
      data: "demandeur"
    }, {
      name: "recepteur.designation",
      data: "recepteur"
    }, {
      name: "d.ipp",
      data: "ipp_patient"
    }, {
      name: "d.nom_patient",
      data: "nom_patient"
    }, {
      name: "total_montant_ttc",
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
      name: "d.created",
      data: "date_demmande",
      render: function render(data) {
        return moment(data).format("DD/MM/YYYY ");
      }
    }, {
      name: "d.position_actuel",
      data: "position_actuel"
    }, {
      name: "actions",
      data: null,
      orderable: false,
      searchable: false,
      render: function render(data) {
        var actionsHtml = '<div class="dropdown">' + '<i class="menuActions fa-solid fa-ellipsis-vertical" id="' + data.id + '"></i>' + '<div class="dropdown-menu dropdown-content divMenu" id="divMenu' + data.id + '">';
        window.globalActions.forEach(function (action) {
          // if (action.ord === 1 && row.position_actuel?.toLowerCase() !== "Créer") return;
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
  $(modalSelector).modal("show");
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

  // All click events inside the document
  document.body.addEventListener("click", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var target, row, modal, _row$querySelector, _row$querySelector2, _row$querySelector3, _row$querySelector4, _row$querySelector5, _row$querySelector6, tableBody, newRow, productSelect, quantityInput, selectedId, productName, _modal$querySelector, _modal$querySelector2, _modal$querySelector3, _modal$querySelector4, _modal$querySelector5, _modal$querySelector6, _modal$querySelector7, demandeId, _tableBody, description, demandeurId, recepteurId, nomPatient, dossierPatient, ipp, urgent, editedProduits, newProduits, deleted, response, result;
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

            // Save newly added product
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

            // Handle save full demande (enregistrer button)
            if (!target.classList.contains("btn-save-edit")) {
              _context.next = 41;
              break;
            }
            demandeId = modal.dataset.id;
            _tableBody = modal.querySelector("tbody");
            if (_tableBody) {
              _context.next = 16;
              break;
            }
            toastr.error("Erreur interne : tableau introuvable.");
            return _context.abrupt("return");
          case 16:
            description = (_modal$querySelector = modal.querySelector('[name="description"]')) === null || _modal$querySelector === void 0 ? void 0 : _modal$querySelector.value;
            demandeurId = (_modal$querySelector2 = modal.querySelector('[name="demandeur_id"]')) === null || _modal$querySelector2 === void 0 ? void 0 : _modal$querySelector2.value;
            recepteurId = (_modal$querySelector3 = modal.querySelector('[name="recepteur_id"]')) === null || _modal$querySelector3 === void 0 ? void 0 : _modal$querySelector3.value;
            nomPatient = (_modal$querySelector4 = modal.querySelector('[name="nom_patient"]')) === null || _modal$querySelector4 === void 0 ? void 0 : _modal$querySelector4.value;
            dossierPatient = (_modal$querySelector5 = modal.querySelector('[name="dossier_patient"]')) === null || _modal$querySelector5 === void 0 ? void 0 : _modal$querySelector5.value;
            ipp = (_modal$querySelector6 = modal.querySelector('[name="ipp"]')) === null || _modal$querySelector6 === void 0 ? void 0 : _modal$querySelector6.value;
            urgent = (_modal$querySelector7 = modal.querySelector('[name="urgent"]')) === null || _modal$querySelector7 === void 0 ? void 0 : _modal$querySelector7.checked;
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
            _context.prev = 27;
            _context.next = 30;
            return fetch("/vente/edit-demande", {
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
                nom_patient: nomPatient,
                dossier_patient: dossierPatient,
                ipp: ipp,
                urgent: urgent,
                edited: editedProduits,
                added: newProduits,
                deleted: deleted
              })
            });
          case 30:
            response = _context.sent;
            _context.next = 33;
            return response.json();
          case 33:
            result = _context.sent;
            if (result.status === "success") {
              toastr.success("Demande sauvegardée avec succès !");
              // close the modal
              $(modal).modal("hide");

              // Reset the deleted products array
              window.deletedProduits = [];
            } else {
              toastr.error(result.message || "Erreur lors de la sauvegarde.");
            }
            _context.next = 41;
            break;
          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](27);
            console.error("Network error:", _context.t0);
            toastr.error("Erreur réseau lors de la sauvegarde.");
          case 41:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[27, 37]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

// Update position of demande
document.addEventListener("DOMContentLoaded", function () {
  var updatePosition = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, position) {
      var response, data, actionMessage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("/vente/update-position", {
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
            if (!data.success) {
              _context2.next = 23;
              break;
            }
            actionMessage = "";
            _context2.t0 = position;
            _context2.next = _context2.t0 === "validée" ? 12 : _context2.t0 === "Crée" ? 14 : _context2.t0 === "Générée" ? 16 : 18;
            break;
          case 12:
            actionMessage = " La demande a été validée avec succès.";
            return _context2.abrupt("break", 19);
          case 14:
            actionMessage = " La demande a été dévalidée avec succès.";
            return _context2.abrupt("break", 19);
          case 16:
            actionMessage = " La demande a été générée avec succès.";
            return _context2.abrupt("break", 19);
          case 18:
            actionMessage = " Mise à jour effectuée.";
          case 19:
            toastr.success(actionMessage);
            updateFooterButtons(id, position);
            _context2.next = 24;
            break;
          case 23:
            toastr.error("Erreur lors de la mise à jour.");
          case 24:
            _context2.next = 30;
            break;
          case 26:
            _context2.prev = 26;
            _context2.t1 = _context2["catch"](0);
            toastr.error("Erreur réseau.");
            console.error(_context2.t1);
          case 30:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 26]]);
    }));
    return function updatePosition(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var updateFooterButtons = function updateFooterButtons(id, newPosition) {
    var modal = document.getElementById("detailsDemande".concat(id));
    var footer = modal.querySelector(".modal-footer");
    if (!footer) return;
    var buttonsHTML = "";
    if (newPosition === "validée") {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-danger btn-devalider\" data-id=\"".concat(id, "\">\n          D\xE9valider\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-generer\" data-id=\"").concat(id, "\">\n          G\xE9n\xE9rer\n        </button>\n      ");
    } else if (newPosition === "Crée") {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-success btn-valider\" data-id=\"".concat(id, "\">\n          Valider\n        </button>\n      ");
    }
    footer.innerHTML = buttonsHTML;
  };
  document.body.addEventListener("click", function (e) {
    var btn = e.target;
    if (btn.classList.contains("btn-valider")) {
      updatePosition(btn.dataset.id, "validée");
    } else if (btn.classList.contains("btn-devalider")) {
      updatePosition(btn.dataset.id, "Crée");
    } else if (btn.classList.contains("btn-generer")) {
      updatePosition(btn.dataset.id, "Générée");
    }
  });
});

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

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es.math.to-string-tag.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


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

/***/ "./node_modules/core-js/modules/es.symbol.async-iterator.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-string-tag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8cc24a","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-ed9c0c","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/gestion_demandes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsQlk7QUFDYixhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFN0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFN0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyx1SEFBOEM7O0FBRTVEO0FBQ0E7QUFDQSxJQUFJLDhCQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWWTtBQUNiLDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFM0U7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UscUJBQXFCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ZlbnRlL2dlc3Rpb25fZGVtYW5kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJldmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5tYXRoLnRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLnRvLXN0cmluZy10YWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHRhYmxlID0gJChcIiNzYWxlc1RhYmxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IHdpbmRvdy5mcmVuY2hKc29uVXJsLFxyXG4gICAgICBwcm9jZXNzaW5nOlxyXG4gICAgICAgICc8aSBzdHlsZT1cImNvbG9yOiM3NTkzYWU7IG1hcmdpbi10b3A6MTAwcHggIWltcG9ydGFudDsgZm9udC1zaXplOjI1cHggIWltcG9ydGFudDtcIiBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeCBmYS1md1wiPjwvaT48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj48L3NwYW4+ICcsXHJcbiAgICB9LFxyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICBbMjEsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICAgIFsyMSwgNTAsIDEwMCwgMjAwXSxcclxuICAgIF0sXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGFqYXg6IHtcclxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKFwiYXBwX2ZldGNoX2RlbWFuZGVzXCIpLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGQuZHJhdyA9IGQuZHJhdyB8fCAwO1xyXG4gICAgICAgIGQuc3RhcnQgPSBkLnN0YXJ0IHx8IDA7XHJcbiAgICAgICAgZC5sZW5ndGggPSBkLmxlbmd0aCB8fCAxNTtcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNyYzogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoanNvbi5hY3Rpb25zKVxyXG4gICAgICAgICAgPyBqc29uLmFjdGlvbnNcclxuICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhqc29uLmFjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBqc29uLmRhdGE7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyBuYW1lOiBcImQuaWRcIiwgZGF0YTogXCJpZFwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImQuY29kZVwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGVtYW5kZV9jb2RlXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDAuNnJlbTsgY29sb3I6ICMwMDdiZmY7IHBhZGRpbmc6IDA7XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RldGFpbHNEZW1hbmRlJHtyb3cuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAke2RhdGF9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImQuZGVzY3JpcHRpb25cIiwgZGF0YTogXCJkZXNjcmlwdGlvblwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkZW1hbmRldXIuZGVzaWduYXRpb25cIiwgZGF0YTogXCJkZW1hbmRldXJcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwicmVjZXB0ZXVyLmRlc2lnbmF0aW9uXCIsIGRhdGE6IFwicmVjZXB0ZXVyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImQuaXBwXCIsIGRhdGE6IFwiaXBwX3BhdGllbnRcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiZC5ub21fcGF0aWVudFwiLCBkYXRhOiBcIm5vbV9wYXRpZW50XCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxfbW9udGFudF90dGNcIixcclxuICAgICAgICBkYXRhOiBcInRvdGFsX21vbnRhbnRfdHRjXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyBOdW1iZXIoZGF0YSkudG9Mb2NhbGVTdHJpbmcoXCJmci1GUlwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBcIjAsMDBcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1yaWdodC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwibml2ZWF1X3VyZ2VuY2VcIiwgZGF0YTogXCJuaXZlYXVfdXJnZW5jZVwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImQuY3JlYXRlZFwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGF0ZV9kZW1tYW5kZVwiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KFwiREQvTU0vWVlZWSBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImQucG9zaXRpb25fYWN0dWVsXCIsIGRhdGE6IFwicG9zaXRpb25fYWN0dWVsXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWN0aW9uc1wiLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgYWN0aW9uc0h0bWwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnVBY3Rpb25zIGZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCInICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1jb250ZW50IGRpdk1lbnVcIiBpZD1cImRpdk1lbnUnICtcclxuICAgICAgICAgICAgZGF0YS5pZCArXHJcbiAgICAgICAgICAgICdcIj4nO1xyXG5cclxuICAgICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBpZiAoYWN0aW9uLm9yZCA9PT0gMSAmJiByb3cucG9zaXRpb25fYWN0dWVsPy50b0xvd2VyQ2FzZSgpICE9PSBcIkNyw6llclwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke2FjdGlvbi5jbGFzc05hbWV9IGRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiR7ZGF0YS5pZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjJHthY3Rpb24uaWROYW1lfSR7ZGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke2FjdGlvbi5pY29ufSBtZW51SWNvblwiPjwvaT4gJHthY3Rpb24ubm9tfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+YDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGFjdGlvbnNIdG1sICs9IFwiPC9kaXY+PC9kaXY+XCI7XHJcbiAgICAgICAgICByZXR1cm4gYWN0aW9uc0h0bWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdC1kZW1hbmRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkZW1hbmRlSWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICBjb25zdCBtb2RhbFNlbGVjdG9yID0gYCNlZGl0RGVtYW5kZSR7ZGVtYW5kZUlkfWA7XHJcblxyXG4gIGlmICghZGVtYW5kZUlkIHx8ICEkKG1vZGFsU2VsZWN0b3IpLmxlbmd0aCkge1xyXG4gICAgY29uc29sZS53YXJuKFwiIE1vZGFsIG5vdCBmb3VuZCBvciBJRCBtaXNzaW5nXCIsIHtcclxuICAgICAgZGVtYW5kZUlkLFxyXG4gICAgICBtb2RhbFNlbGVjdG9yLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAkKG1vZGFsU2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmRldGFpbHMtZGVtYW5kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGVtYW5kZUlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgY29uc3QgbW9kYWxTZWxlY3RvciA9IGAjZGV0YWlsc0RlbWFuZGUke2RlbWFuZGVJZH1gO1xyXG5cclxuICBpZiAoIWRlbWFuZGVJZCB8fCAhJChtb2RhbFNlbGVjdG9yKS5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2FybihcIiBNb2RhbCBub3QgZm91bmQgb3IgSUQgbWlzc2luZ1wiLCB7XHJcbiAgICAgIGRlbWFuZGVJZCxcclxuICAgICAgbW9kYWxTZWxlY3RvcixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAkKG1vZGFsU2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG4vL2VkaXQgZGVtYW5kZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1aXRzID0gd2luZG93LlBST0RVSVRTIHx8IFtdO1xyXG4gIHdpbmRvdy5kZWxldGVkUHJvZHVpdHMgPSBbXTtcclxuICB3aW5kb3cuZ2V0RGVsZXRlZFByb2R1aXRzID0gKCkgPT4gd2luZG93LmRlbGV0ZWRQcm9kdWl0cztcclxuXHJcbiAgLy8gQWxsIGNsaWNrIGV2ZW50cyBpbnNpZGUgdGhlIGRvY3VtZW50XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b24sIC5mYS1wbHVzXCIpO1xyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByb3cgPSB0YXJnZXQuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgY29uc3QgbW9kYWwgPSB0YXJnZXQuY2xvc2VzdChcIi5tb2RhbFwiKTtcclxuXHJcbiAgICAvLyBFZGl0IHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWVkaXQtbGluZVwiKSkge1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXNlbGVjdFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbnB1dFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tZWRpdC1saW5lXCIpPy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tZGVsZXRlLWxpbmVcIik/LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZlLWxpbmVcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2F2ZSBlZGl0ZWQgcHJvZHVjdFxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc2F2ZS1saW5lXCIpKSB7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3Qtc2VsZWN0XCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoXCIucXVhbnRpdHktaW5wdXRcIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tZWRpdC1saW5lXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcihcIi5idG4tZGVsZXRlLWxpbmVcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZlLWxpbmVcIik/LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiUHJvZHVpdCBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSBwcm9kdWN0XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1kZWxldGUtbGluZVwiKSkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvblwiLFxyXG4gICAgICAgIHRleHQ6IFwiVm91bGV6LXZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNlIHByb2R1aXQgP1wiLFxyXG4gICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT3VpLCBzdXBwcmltZXJcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkFubnVsZXJcIixcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgY29uc3QgZGVtYW5kZUlkID0gbW9kYWwuZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnN0IHByb2R1aXRJZCA9IHJvdy5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgY29uc3QgZGVtYW5kZWxnSWQgPSByb3cuZGF0YXNldC5kZW1hbmRlbGdJZDtcclxuXHJcbiAgICAgICAgICBpZiAoZGVtYW5kZWxnSWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmRlbGV0ZWRQcm9kdWl0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBkZW1hbmRlX2lkOiBwYXJzZUludChkZW1hbmRlSWQpLFxyXG4gICAgICAgICAgICAgIHByb2R1aXRfaWQ6IHBhcnNlSW50KHByb2R1aXRJZCksXHJcbiAgICAgICAgICAgICAgZGVtYW5kZWxnX2lkOiBwYXJzZUludChkZW1hbmRlbGdJZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiUHJvZHVpdCBzdXBwcmltw6kgYXZlYyBzdWNjw6hzLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBuZXcgcHJvZHVjdCByb3dcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtcGx1c1wiKSkge1xyXG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XHJcbiAgICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgIG5ld1Jvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBwcm9kdWN0LXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAke3Byb2R1aXRzXHJcbiAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgIChwKSA9PlxyXG4gICAgICAgICAgICAgICAgICBgPG9wdGlvbiB2YWx1ZT1cIiR7cC5pZH1cIiBkYXRhLXByaXg9XCIke3AucHJpY2V9XCI+JHtwLm5hbWV9PC9vcHRpb24+YFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcXVhbnRpdHktaW5wdXRcIiBtaW49XCIxXCIgdmFsdWU9XCIxXCI+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zYXZlLW5ldy1saW5lXCIgdGl0bGU9XCJFbnJlZ2lzdHJlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNhdmUgdGV4dC1zdWNjZXNzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgbmV3bHkgYWRkZWQgcHJvZHVjdFxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc2F2ZS1uZXctbGluZVwiKSkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0U2VsZWN0ID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zZWxlY3RcIik7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbnB1dFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBwcm9kdWN0U2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9kdWN0TmFtZSA9XHJcbiAgICAgICAgcHJvZHVjdFNlbGVjdC5vcHRpb25zW3Byb2R1Y3RTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuXHJcbiAgICAgIHByb2R1Y3RTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBxdWFudGl0eUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKFwidGQ6bGFzdC1jaGlsZFwiKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1lZGl0LWxpbmVcIiB0aXRsZT1cIk1vZGlmaWVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXQgdGV4dC1wcmltYXJ5XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlLWxpbmVcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaCB0ZXh0LWRhbmdlclwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNhdmUtbGluZSBkLW5vbmVcIiB0aXRsZT1cIkVucmVnaXN0cmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNhdmUgdGV4dC1zdWNjZXNzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJOb3V2ZWF1IHByb2R1aXQgYWpvdXTDqSBhdmVjIHN1Y2PDqHMuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBzYXZlIGZ1bGwgZGVtYW5kZSAoZW5yZWdpc3RyZXIgYnV0dG9uKVxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tc2F2ZS1lZGl0XCIpKSB7XHJcbiAgICAgIGNvbnN0IGRlbWFuZGVJZCA9IG1vZGFsLmRhdGFzZXQuaWQ7XHJcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keVwiKTtcclxuXHJcbiAgICAgIGlmICghdGFibGVCb2R5KSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGludGVybmUgOiB0YWJsZWF1IGludHJvdXZhYmxlLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgZGVtYW5kZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlbWFuZGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgcmVjZXB0ZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInJlY2VwdGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3Qgbm9tUGF0aWVudCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibm9tX3BhdGllbnRcIl0nKT8udmFsdWU7XHJcbiAgICAgIGNvbnN0IGRvc3NpZXJQYXRpZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnW25hbWU9XCJkb3NzaWVyX3BhdGllbnRcIl0nXHJcbiAgICAgICk/LnZhbHVlO1xyXG4gICAgICBjb25zdCBpcHAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlwcFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgdXJnZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJ1cmdlbnRcIl0nKT8uY2hlY2tlZDtcclxuXHJcbiAgICAgIGNvbnN0IGVkaXRlZFByb2R1aXRzID0gW107XHJcbiAgICAgIGNvbnN0IG5ld1Byb2R1aXRzID0gW107XHJcblxyXG4gICAgICB0YWJsZUJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSByb3cucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXNlbGVjdFwiKTtcclxuICAgICAgICBjb25zdCBwcm9kdWl0SWQgPSBzZWxlY3RFbGVtZW50Py52YWx1ZTtcclxuICAgICAgICBjb25zdCBxdWFudGl0ZSA9IHJvdy5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5LWlucHV0XCIpPy52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9XHJcbiAgICAgICAgICBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICBzZWxlY3RFbGVtZW50Py5zZWxlY3RlZE9wdGlvbnNbMF0/LmdldEF0dHJpYnV0ZShcImRhdGEtcHJpeFwiKVxyXG4gICAgICAgICAgKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IGRlbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuZGVtYW5kZWxnSWQgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9kdWl0SWQgfHwgIXF1YW50aXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBwcm9kdWl0X2lkOiBwYXJzZUludChwcm9kdWl0SWQpLFxyXG4gICAgICAgICAgcXVhbnRpdGU6IHBhcnNlRmxvYXQocXVhbnRpdGUpLFxyXG4gICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChkZW1hbmRlbGdJZCkge1xyXG4gICAgICAgICAgZGF0YS5kZW1hbmRlbGdfaWQgPSBwYXJzZUludChkZW1hbmRlbGdJZCk7XHJcbiAgICAgICAgICBlZGl0ZWRQcm9kdWl0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdQcm9kdWl0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVkID0gd2luZG93XHJcbiAgICAgICAgLmdldERlbGV0ZWRQcm9kdWl0cygpXHJcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gZC5kZW1hbmRlX2lkID09IGRlbWFuZGVJZCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvdmVudGUvZWRpdC1kZW1hbmRlXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZGVtYW5kZV9pZDogcGFyc2VJbnQoZGVtYW5kZUlkKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGRlbWFuZGV1cl9pZDogcGFyc2VJbnQoZGVtYW5kZXVySWQpLFxyXG4gICAgICAgICAgICByZWNlcHRldXJfaWQ6IHBhcnNlSW50KHJlY2VwdGV1cklkKSxcclxuICAgICAgICAgICAgbm9tX3BhdGllbnQ6IG5vbVBhdGllbnQsXHJcbiAgICAgICAgICAgIGRvc3NpZXJfcGF0aWVudDogZG9zc2llclBhdGllbnQsXHJcbiAgICAgICAgICAgIGlwcCxcclxuICAgICAgICAgICAgdXJnZW50LFxyXG4gICAgICAgICAgICBlZGl0ZWQ6IGVkaXRlZFByb2R1aXRzLFxyXG4gICAgICAgICAgICBhZGRlZDogbmV3UHJvZHVpdHMsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJEZW1hbmRlIHNhdXZlZ2FyZMOpZSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICAgICAgICAgIC8vIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgICAgICAgJChtb2RhbCkubW9kYWwoXCJoaWRlXCIpO1xyXG5cclxuICAgICAgICAgIC8vIFJlc2V0IHRoZSBkZWxldGVkIHByb2R1Y3RzIGFycmF5XHJcbiAgICAgICAgICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZSB8fCBcIkVycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5ldHdvcmsgZXJyb3I6XCIsIGVycik7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSBwb3NpdGlvbiBvZiBkZW1hbmRlXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IGFzeW5jIChpZCwgcG9zaXRpb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvdmVudGUvdXBkYXRlLXBvc2l0aW9uXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQsIHBvc2l0aW9uIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBsZXQgYWN0aW9uTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgY2FzZSBcInZhbGlkw6llXCI6XHJcbiAgICAgICAgICAgIGFjdGlvbk1lc3NhZ2UgPSBcIiBMYSBkZW1hbmRlIGEgw6l0w6kgdmFsaWTDqWUgYXZlYyBzdWNjw6hzLlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJDcsOpZVwiOlxyXG4gICAgICAgICAgICBhY3Rpb25NZXNzYWdlID0gXCIgTGEgZGVtYW5kZSBhIMOpdMOpIGTDqXZhbGlkw6llIGF2ZWMgc3VjY8Oocy5cIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiR8OpbsOpcsOpZVwiOlxyXG4gICAgICAgICAgICBhY3Rpb25NZXNzYWdlID0gXCIgTGEgZGVtYW5kZSBhIMOpdMOpIGfDqW7DqXLDqWUgYXZlYyBzdWNjw6hzLlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGFjdGlvbk1lc3NhZ2UgPSBcIiBNaXNlIMOgIGpvdXIgZWZmZWN0dcOpZS5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoYWN0aW9uTWVzc2FnZSk7XHJcbiAgICAgICAgdXBkYXRlRm9vdGVyQnV0dG9ucyhpZCwgcG9zaXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ci5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciByw6lzZWF1LlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlRm9vdGVyQnV0dG9ucyA9IChpZCwgbmV3UG9zaXRpb24pID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRldGFpbHNEZW1hbmRlJHtpZH1gKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZm9vdGVyXCIpO1xyXG5cclxuICAgIGlmICghZm9vdGVyKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGJ1dHRvbnNIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAobmV3UG9zaXRpb24gPT09IFwidmFsaWTDqWVcIikge1xyXG4gICAgICBidXR0b25zSFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1kZXZhbGlkZXJcIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgIETDqXZhbGlkZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ2VuZXJlclwiIGRhdGEtaWQ9XCIke2lkfVwiPlxyXG4gICAgICAgICAgR8OpbsOpcmVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIGA7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID09PSBcIkNyw6llXCIpIHtcclxuICAgICAgYnV0dG9uc0hUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXZhbGlkZXJcIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgIFZhbGlkZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBidXR0b25zSFRNTDtcclxuICB9O1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi12YWxpZGVyXCIpKSB7XHJcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGJ0bi5kYXRhc2V0LmlkLCBcInZhbGlkw6llXCIpO1xyXG4gICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWRldmFsaWRlclwiKSkge1xyXG4gICAgICB1cGRhdGVQb3NpdGlvbihidG4uZGF0YXNldC5pZCwgXCJDcsOpZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1nZW5lcmVyXCIpKSB7XHJcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGJ0bi5kYXRhc2V0LmlkLCBcIkfDqW7DqXLDqWVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKCRwcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBpbiBzb21lIElFIHZlcnNpb25zLCBgcHJvcGVydHlJc0VudW1lcmFibGVgIHJldHVybnMgaW5jb3JyZWN0IHJlc3VsdCBvbiBpbnRlZ2VyIGtleXNcbi8vIG9mIGBudWxsYCBwcm90b3R5cGUgb2JqZWN0c1xudmFyIElFX0JVRyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxuICB2YXIgTyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIE9bMl0gPSAyO1xuICByZXR1cm4gIXByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIDIpO1xufSk7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBJRV9XT1JLQVJPVU5EID0gSUVfQlVHICYmIG9iamVjdEdldFByb3RvdHlwZU9mKE8pID09PSBudWxsO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgKElFX1dPUktBUk9VTkQgPyBrZXkgaW4gTyA6IHByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIGtleSkpKSB7XG4gICAgICAgIHB1c2gocmVzdWx0LCBUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4gIHZhbHVlczogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyIG5hdGl2ZVJldmVyc2UgPSB1bmN1cnJ5VGhpcyhbXS5yZXZlcnNlKTtcbnZhciB0ZXN0ID0gWzEsIDJdO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJldmVyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmV2ZXJzZVxuLy8gZml4IGZvciBTYWZhcmkgMTIuMCBidWdcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODg3OTRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFN0cmluZyh0ZXN0KSA9PT0gU3RyaW5nKHRlc3QucmV2ZXJzZSgpKSB9LCB7XG4gIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtYXNzaWduIC0tIGRpcnR5IGhhY2tcbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gbmF0aXZlUmV2ZXJzZSh0aGlzKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIEpTT05bQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xuXG4vLyBNYXRoW0BAdG9TdHJpbmdUYWddIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgtQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtZGVmaW5lJyk7XG5cbi8vIGBTeW1ib2wuYXN5bmNJdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLmFzeW5jaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnYXN5bmNJdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLWRlZmluZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIGBTeW1ib2wudG9TdHJpbmdUYWdgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC50b3N0cmluZ3RhZ1xuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhnZXRCdWlsdEluKCdTeW1ib2wnKSwgJ1N5bWJvbCcpO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGFuZ3VhZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJmcmVuY2hKc29uVXJsIiwicHJvY2Vzc2luZyIsImxlbmd0aE1lbnUiLCJzZXJ2ZXJTaWRlIiwiYWpheCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGEiLCJkIiwiZHJhdyIsInN0YXJ0IiwiZGF0YVNyYyIsImpzb24iLCJnbG9iYWxBY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIm9yZGVyIiwiY29sdW1ucyIsInJlbmRlciIsInJvdyIsImNvbmNhdCIsImlkIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImNyZWF0ZWRDZWxsIiwidGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtb21lbnQiLCJmb3JtYXQiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiYWN0aW9uc0h0bWwiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpZE5hbWUiLCJpY29uIiwibm9tIiwiYXV0b1dpZHRoIiwib24iLCJkZW1hbmRlSWQiLCJhdHRyIiwibW9kYWxTZWxlY3RvciIsImNvbnNvbGUiLCJ3YXJuIiwibW9kYWwiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZHVpdHMiLCJQUk9EVUlUUyIsImRlbGV0ZWRQcm9kdWl0cyIsImdldERlbGV0ZWRQcm9kdWl0cyIsImJvZHkiLCJfcmVmIiwiX2NhbGxlZSIsImUiLCJ0YXJnZXQiLCJfcm93JHF1ZXJ5U2VsZWN0b3IiLCJfcm93JHF1ZXJ5U2VsZWN0b3IyIiwiX3JvdyRxdWVyeVNlbGVjdG9yMyIsIl9yb3ckcXVlcnlTZWxlY3RvcjQiLCJfcm93JHF1ZXJ5U2VsZWN0b3I1IiwiX3JvdyRxdWVyeVNlbGVjdG9yNiIsInRhYmxlQm9keSIsIm5ld1JvdyIsInByb2R1Y3RTZWxlY3QiLCJxdWFudGl0eUlucHV0Iiwic2VsZWN0ZWRJZCIsInByb2R1Y3ROYW1lIiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3IiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjIiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjMiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjQiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjUiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjYiLCJfbW9kYWwkcXVlcnlTZWxlY3RvcjciLCJfdGFibGVCb2R5IiwiZGVzY3JpcHRpb24iLCJkZW1hbmRldXJJZCIsInJlY2VwdGV1cklkIiwibm9tUGF0aWVudCIsImRvc3NpZXJQYXRpZW50IiwiaXBwIiwidXJnZW50IiwiZWRpdGVkUHJvZHVpdHMiLCJuZXdQcm9kdWl0cyIsImRlbGV0ZWQiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjbG9zZXN0IiwiY29udGFpbnMiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJ0b2FzdHIiLCJzdWNjZXNzIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiaXNDb25maXJtZWQiLCJkYXRhc2V0IiwicHJvZHVpdElkIiwiZGVtYW5kZWxnSWQiLCJkZW1hbmRlX2lkIiwicGFyc2VJbnQiLCJwcm9kdWl0X2lkIiwiZGVtYW5kZWxnX2lkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1hcCIsInAiLCJwcmljZSIsImpvaW4iLCJhcHBlbmRDaGlsZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfcm93JHF1ZXJ5U2VsZWN0b3I3IiwiX3NlbGVjdEVsZW1lbnQkc2VsZWN0Iiwic2VsZWN0RWxlbWVudCIsInF1YW50aXRlIiwicGFyc2VGbG9hdCIsInNlbGVjdGVkT3B0aW9ucyIsImdldEF0dHJpYnV0ZSIsImZpbHRlciIsImZldGNoIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZW1hbmRldXJfaWQiLCJyZWNlcHRldXJfaWQiLCJub21fcGF0aWVudCIsImRvc3NpZXJfcGF0aWVudCIsImVkaXRlZCIsImFkZGVkIiwic3RhdHVzIiwibWVzc2FnZSIsInQwIiwiX3giLCJ1cGRhdGVQb3NpdGlvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJwb3NpdGlvbiIsImFjdGlvbk1lc3NhZ2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1cGRhdGVGb290ZXJCdXR0b25zIiwidDEiLCJfeDIiLCJfeDMiLCJuZXdQb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9vdGVyIiwiYnV0dG9uc0hUTUwiLCJidG4iXSwic291cmNlUm9vdCI6IiJ9