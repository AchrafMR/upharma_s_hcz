(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_commandes"],{

/***/ "./assets/js/vente/gestion_commandes.js":
/*!**********************************************!*\
  !*** ./assets/js/vente/gestion_commandes.js ***!
  \**********************************************/
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
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
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
      url: Routing.generate("app_fetch_commandes"),
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
      data: "commande_code",
      render: function render(data, type, row) {
        return "\n              <button \n                class=\"btn btn-sm\"\n                style=\"font-size: 0.6rem; color: #007bff; padding: 0;\"\n                data-toggle=\"modal\" \n                data-target=\"#detailsCommande".concat(row.id, "\">\n                ").concat(data, "\n              </button>\n            ");
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
          actionsHtml += "\n                <button class=\"".concat(action.className, " dropdown-item\"\n                        id=\"").concat(data.id, "\"\n                        data-toggle=\"modal\"\n                        data-target=\"#").concat(action.idName).concat(data.id, "\">\n                  <i class=\"").concat(action.icon, " menuIcon\"></i> ").concat(action.nom, "\n                </button>");
        });
        actionsHtml += "</div></div>";
        return actionsHtml;
      }
    }],
    autoWidth: false
  });
});
$(document).on("click", ".edit-commande", function () {
  var commandeId = $(this).attr("id");
  var modalSelector = "#editCommande".concat(commandeId);
  if (!commandeId || !$(modalSelector).length) {
    console.warn("Modal not found or ID missing", {
      commandeId: commandeId,
      modalSelector: modalSelector
    });
    return;
  }
  var status = $(modalSelector).data("position-actuel");
  if (status === "Crée") {
    $(modalSelector).modal("show");
  } else {
    toastr.warning("Impossible de modifier cette commande. Elle n'est plus modifiable.");
  }
});
$(document).on("click", ".details-commande", function () {
  var commandeId = $(this).attr("id");
  var modalSelector = "#detailsCommande".concat(commandeId);
  if (!commandeId || !$(modalSelector).length) {
    console.warn(" Modal not found or ID missing", {
      commandeId: commandeId,
      modalSelector: modalSelector
    });
    return;
  }
  $(modalSelector).modal("show");
});

//edit commande modal
window.addEventListener('load', function () {
  var produits = window.PRODUITS || [];
  window.deletedProduits = [];
  window.getDeletedProduits = function () {
    return window.deletedProduits;
  };

  // All click events inside the document
  document.body.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var target, row, modal, _row$querySelector, _row$querySelector2, _row$querySelector3, _row$querySelector4, _row$querySelector5, _row$querySelector6, tableBody, newRow, productSelect, quantityInput, selectedId, productName, _modal$querySelector, _modal$querySelector2, _modal$querySelector3, _modal$querySelector4, _modal$querySelector5, _modal$querySelector6, _modal$querySelector7, commandeId, _tableBody, description, demandeurId, recepteurId, nomPatient, dossierPatient, ipp, urgent, editedProduits, newProduits, deleted, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            target = e.target.closest('button, .fa-plus');
            if (target) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            row = target.closest('tr');
            modal = target.closest('.modal'); // Edit product
            if (target.classList.contains('btn-edit-line')) {
              row.querySelector('.product-select').disabled = false;
              row.querySelector('.quantity-input').disabled = false;
              (_row$querySelector = row.querySelector('.btn-edit-line')) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.classList.add('d-none');
              (_row$querySelector2 = row.querySelector('.btn-delete-line')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.classList.add('d-none');
              (_row$querySelector3 = row.querySelector('.btn-save-line')) === null || _row$querySelector3 === void 0 ? void 0 : _row$querySelector3.classList.remove('d-none');
            }

            // Save edited product
            if (target.classList.contains('btn-save-line')) {
              row.querySelector('.product-select').disabled = true;
              row.querySelector('.quantity-input').disabled = true;
              (_row$querySelector4 = row.querySelector('.btn-edit-line')) === null || _row$querySelector4 === void 0 ? void 0 : _row$querySelector4.classList.remove('d-none');
              (_row$querySelector5 = row.querySelector('.btn-delete-line')) === null || _row$querySelector5 === void 0 ? void 0 : _row$querySelector5.classList.remove('d-none');
              (_row$querySelector6 = row.querySelector('.btn-save-line')) === null || _row$querySelector6 === void 0 ? void 0 : _row$querySelector6.classList.add('d-none');
              toastr.success('Produit modifié avec succès.');
            }

            // Delete product
            if (target.classList.contains('btn-delete-line')) {
              Swal.fire({
                title: 'Confirmer la suppression',
                text: 'Voulez-vous vraiment supprimer ce produit ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Oui, supprimer',
                cancelButtonText: 'Annuler'
              }).then(function (result) {
                if (result.isConfirmed) {
                  var commandeId = modal.dataset.id;
                  var produitId = row.dataset.id;
                  var commandelgId = row.dataset.commandelgId;
                  if (commandelgId) {
                    window.deletedProduits.push({
                      commande_id: parseInt(commandeId),
                      produit_id: parseInt(produitId),
                      commandelg_id: parseInt(commandelgId)
                    });
                  }
                  row.remove();
                  toastr.success('Produit supprimé avec succès.');
                }
              });
            }

            // Add new product row
            if (target.classList.contains('fa-plus')) {
              tableBody = modal.querySelector('tbody');
              newRow = document.createElement('tr');
              newRow.innerHTML = "\n        <td style=\"vertical-align: top !important; text-align: left !important;\">\n          <select class=\"form-control form-control-sm product-select\">\n            ".concat(produits.map(function (p) {
                return "<option value=\"".concat(p.id, "\" data-prix=\"").concat(p.price, "\">").concat(p.name, "</option>");
              }).join(''), "\n          </select>\n        </td>\n        <td>\n          <input type=\"number\" class=\"form-control form-control-sm quantity-input\" min=\"1\" value=\"1\">\n        </td>\n        <td class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-sm btn-save-new-line\" title=\"Enregistrer\">\n            <i class=\"fa fa-save text-success\"></i>\n          </button>\n        </td>\n      ");
              tableBody.appendChild(newRow);
            }

            // Save newly added product
            if (target.classList.contains('btn-save-new-line')) {
              productSelect = row.querySelector('.product-select');
              quantityInput = row.querySelector('.quantity-input');
              selectedId = productSelect.value;
              productName = productSelect.options[productSelect.selectedIndex].text;
              productSelect.disabled = true;
              quantityInput.disabled = true;
              row.querySelector('td:last-child').innerHTML = "\n        <button type=\"button\" class=\"btn btn-sm btn-edit-line\" title=\"Modifier\">\n          <i class=\"fa fa-edit text-primary\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-sm btn-delete-line\" title=\"Supprimer\">\n          <i class=\"fa fa-trash text-danger\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-sm btn-save-line d-none\" title=\"Enregistrer\">\n          <i class=\"fa fa-save text-success\"></i>\n        </button>\n      ";
              toastr.success('Nouveau produit ajouté avec succès.');
            }

            // Handle save full commande (enregistrer button)
            if (!target.classList.contains('btn-save-edit')) {
              _context.next = 41;
              break;
            }
            commandeId = modal.dataset.id;
            _tableBody = modal.querySelector('tbody');
            if (_tableBody) {
              _context.next = 16;
              break;
            }
            toastr.error('Erreur interne : tableau introuvable.');
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
            _tableBody.querySelectorAll('tr').forEach(function (row) {
              var _row$querySelector7, _selectElement$select;
              var selectElement = row.querySelector('.product-select');
              var produitId = selectElement === null || selectElement === void 0 ? void 0 : selectElement.value;
              var quantite = (_row$querySelector7 = row.querySelector('.quantity-input')) === null || _row$querySelector7 === void 0 ? void 0 : _row$querySelector7.value;
              var price = parseFloat(selectElement === null || selectElement === void 0 || (_selectElement$select = selectElement.selectedOptions[0]) === null || _selectElement$select === void 0 ? void 0 : _selectElement$select.getAttribute('data-prix')) || 0;
              var commandelgId = row.dataset.commandelgId || null;
              if (!produitId || !quantite) return;
              var data = {
                produit_id: parseInt(produitId),
                quantite: parseFloat(quantite),
                price: price
              };
              if (commandelgId) {
                data.commandelg_id = parseInt(commandelgId);
                editedProduits.push(data);
              } else {
                newProduits.push(data);
              }
            });
            deleted = window.getDeletedProduits().filter(function (d) {
              return d.commande_id == commandeId;
            });
            _context.prev = 27;
            _context.next = 30;
            return fetch('/vente/edit-commande', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              },
              body: JSON.stringify({
                commande_id: parseInt(commandeId),
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
            if (result.status === 'success') {
              toastr.success('Commande sauvegardée avec succès !');
              // close the modal and reload the page
              $(modal).on('hidden.bs.modal', function () {
                location.reload();
              }).modal('hide');

              // Reset the deleted products array
              window.deletedProduits = [];
            } else {
              toastr.error(result.message || 'Erreur lors de la sauvegarde.');
            }
            _context.next = 41;
            break;
          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](27);
            console.error('Network error:', _context.t0);
            toastr.error('Erreur réseau lors de la sauvegarde.');
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

// Update position of commande
document.addEventListener("DOMContentLoaded", function () {
  var positionChanged = false; // Track whether position has changed

  var updatePosition = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, position) {
      var response, data, actionMessage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch('/vente/update-position-commande', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
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
              _context2.next = 22;
              break;
            }
            positionChanged = true; // Mark as changed
            actionMessage = '';
            _context2.t0 = position;
            _context2.next = _context2.t0 === 'validée' ? 13 : _context2.t0 === 'Générée' ? 15 : 17;
            break;
          case 13:
            actionMessage = 'La commande a été validée avec succès.';
            return _context2.abrupt("break", 18);
          case 15:
            actionMessage = 'La commande a été générée avec succès.';
            return _context2.abrupt("break", 18);
          case 17:
            actionMessage = 'Mise à jour effectuée.';
          case 18:
            toastr.success(actionMessage);
            updateFooterButtons(id, position);
            _context2.next = 23;
            break;
          case 22:
            toastr.error("Erreur lors de la mise à jour.");
          case 23:
            _context2.next = 29;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t1 = _context2["catch"](0);
            toastr.error("Erreur réseau.");
            console.error(_context2.t1);
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 25]]);
    }));
    return function updatePosition(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var updateFooterButtons = function updateFooterButtons(id, newPosition) {
    var modal = document.getElementById("detailsCommande".concat(id));
    var footer = modal.querySelector('.modal-footer');
    if (!footer) return;
    var buttonsHTML = '';
    if (newPosition === 'validée') {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-primary btn-generer\" data-id=\"".concat(id, "\">\n          G\xE9n\xE9rer\n        </button>\n      ");
    } else if (newPosition === 'Crée') {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-success btn-valider\" data-id=\"".concat(id, "\">\n          Valider\n        </button>\n      ");
    }
    footer.innerHTML = buttonsHTML;
  };
  document.body.addEventListener("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var btn, id, modal, commandeId, form, formData, response, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            btn = e.target; // Handle validation position
            if (!btn.classList.contains("btn-valider")) {
              _context3.next = 5;
              break;
            }
            updatePosition(btn.dataset.id, 'validée');
            _context3.next = 31;
            break;
          case 5:
            if (!btn.classList.contains("btn-generer")) {
              _context3.next = 11;
              break;
            }
            id = btn.dataset.id;
            modal = document.getElementById("preparerLivraison".concat(id));
            if (modal) {
              $(modal).modal('show');
            }
            _context3.next = 31;
            break;
          case 11:
            if (!btn.classList.contains("btn-confirmer-livraison")) {
              _context3.next = 31;
              break;
            }
            commandeId = btn.dataset.id;
            form = document.querySelector(".livraison-form[data-id=\"".concat(commandeId, "\"]"));
            if (form) {
              _context3.next = 16;
              break;
            }
            return _context3.abrupt("return");
          case 16:
            formData = new FormData(form);
            _context3.prev = 17;
            _context3.next = 20;
            return fetch('/vente/save-livraison', {
              method: 'POST',
              body: formData
            });
          case 20:
            response = _context3.sent;
            _context3.next = 23;
            return response.json();
          case 23:
            result = _context3.sent;
            if (result.status === 'success') {
              alert(' Livraison enregistrée avec succès.');
              location.reload();
            } else {
              alert(' Erreur: ' + (result.message || 'Problème de traitement.'));
            }
            _context3.next = 31;
            break;
          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](17);
            console.error('Erreur envoi livraison:', _context3.t0);
            alert('Erreur de communication avec le serveur.');
          case 31:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[17, 27]]);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  // document.body.addEventListener("click", (e) => {
  //   const btn = e.target;
  //   if (btn.classList.contains("btn-valider")) {
  //     updatePosition(btn.dataset.id, 'validée');
  //   } else if (btn.classList.contains("btn-generer")) {
  //     //Open reception modal instead of pushing to backend
  //     const id = btn.dataset.id;
  //     const modal = document.getElementById(`preparerLivraison${id}`);
  //     if (modal) {
  //       $(modal).modal('show');
  //     }
  //   }
  // });

  $('.modal').on('hidden.bs.modal', function () {
    if (positionChanged) {
      location.reload();
    }
  });
});

// Handle IPP input in modals
$(document).on("keydown", ".ipp", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    var $ipp = $(this);
    var ippValue = $ipp.val().trim();
    var $modal = $ipp.closest('.modal');
    var $nom = $modal.find('[name="nom_patient"]');
    var $dossier = $modal.find('[name="dossier_patient"]');
    var patient = (window.infos_patient || []).find(function (p) {
      return p.ipp === ippValue;
    });
    if (patient) {
      $nom.val(patient.nom);
      $dossier.val(patient.dossier);
    } else {
      $nom.val('');
      $dossier.val('');
      toastr.error("Aucun patient trouvé avec cet IPP");
    }
  }
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

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8cc24a","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-ed9c0c","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/vente/gestion_commandes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWFk7QUFDYiw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRTNFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTGE7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy92ZW50ZS9nZXN0aW9uX2NvbW1hbmRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmpzb24udG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm1hdGgudG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC50by1zdHJpbmctdGFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0YWJsZSA9ICQoXCIjc2FsZXNUYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybCxcclxuICAgICAgcHJvY2Vzc2luZzpcclxuICAgICAgICAnPGkgc3R5bGU9XCJjb2xvcjojNzU5M2FlOyBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZToyNXB4ICFpbXBvcnRhbnQ7XCIgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggZmEtZndcIj48L2k+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+PC9zcGFuPiAnLFxyXG4gICAgfSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzIxLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMjEsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImFwcF9mZXRjaF9jb21tYW5kZXNcIiksXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbiAgICAgICAgZC5zdGFydCA9IGQuc3RhcnQgfHwgMDtcclxuICAgICAgICBkLmxlbmd0aCA9IGQubGVuZ3RoIHx8IDE1O1xyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU3JjOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zID0gQXJyYXkuaXNBcnJheShqc29uLmFjdGlvbnMpXHJcbiAgICAgICAgICA/IGpzb24uYWN0aW9uc1xyXG4gICAgICAgICAgOiBPYmplY3QudmFsdWVzKGpzb24uYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7IG5hbWU6IFwiZC5pZFwiLCBkYXRhOiBcImlkXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZC5jb2RlXCIsXHJcbiAgICAgICAgZGF0YTogXCJjb21tYW5kZV9jb2RlXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDAuNnJlbTsgY29sb3I6ICMwMDdiZmY7IHBhZGRpbmc6IDA7XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RldGFpbHNDb21tYW5kZSR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkLmRlc2NyaXB0aW9uXCIsIGRhdGE6IFwiZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiZGVtYW5kZXVyLmRlc2lnbmF0aW9uXCIsIGRhdGE6IFwiZGVtYW5kZXVyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcInJlY2VwdGV1ci5kZXNpZ25hdGlvblwiLCBkYXRhOiBcInJlY2VwdGV1clwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkLmlwcFwiLCBkYXRhOiBcImlwcF9wYXRpZW50XCIgfSxcclxuICAgICAgeyBuYW1lOiBcImQubm9tX3BhdGllbnRcIiwgZGF0YTogXCJub21fcGF0aWVudFwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcInRvdGFsX21vbnRhbnRfdHRjXCIsXHJcbiAgICAgICAgZGF0YTogXCJ0b3RhbF9tb250YW50X3R0Y1wiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgID8gTnVtYmVyKGRhdGEpLnRvTG9jYWxlU3RyaW5nKFwiZnItRlJcIiwge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiZGVjaW1hbFwiLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogXCIwLDAwXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtcmlnaHQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcIm5pdmVhdV91cmdlbmNlXCIsIGRhdGE6IFwibml2ZWF1X3VyZ2VuY2VcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJkLmNyZWF0ZWRcIixcclxuICAgICAgICBkYXRhOiBcImRhdGVfZGVtbWFuZGVcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGEpLmZvcm1hdChcIkREL01NL1lZWVkgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkLnBvc2l0aW9uX2FjdHVlbFwiLCBkYXRhOiBcInBvc2l0aW9uX2FjdHVlbFwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImFjdGlvbnNcIixcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VhcmNoYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgdmFyIGFjdGlvbnNIdG1sID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJtZW51QWN0aW9ucyBmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiIGlkPVwiJyArXHJcbiAgICAgICAgICAgIGRhdGEuaWQgK1xyXG4gICAgICAgICAgICAnXCI+PC9pPicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tY29udGVudCBkaXZNZW51XCIgaWQ9XCJkaXZNZW51JyArXHJcbiAgICAgICAgICAgIGRhdGEuaWQgK1xyXG4gICAgICAgICAgICAnXCI+JztcclxuXHJcbiAgICAgICAgICB3aW5kb3cuZ2xvYmFsQWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgYWN0aW9uc0h0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7YWN0aW9uLmNsYXNzTmFtZX0gZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiJHtkYXRhLmlkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiMke2FjdGlvbi5pZE5hbWV9JHtkYXRhLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7YWN0aW9uLmljb259IG1lbnVJY29uXCI+PC9pPiAke2FjdGlvbi5ub219XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYWN0aW9uc0h0bWwgKz0gXCI8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgIHJldHVybiBhY3Rpb25zSHRtbDtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGF1dG9XaWR0aDogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5lZGl0LWNvbW1hbmRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb21tYW5kZUlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgY29uc3QgbW9kYWxTZWxlY3RvciA9IGAjZWRpdENvbW1hbmRlJHtjb21tYW5kZUlkfWA7XHJcblxyXG4gIGlmICghY29tbWFuZGVJZCB8fCAhJChtb2RhbFNlbGVjdG9yKS5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2FybihcIk1vZGFsIG5vdCBmb3VuZCBvciBJRCBtaXNzaW5nXCIsIHsgY29tbWFuZGVJZCwgbW9kYWxTZWxlY3RvciB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9ICQobW9kYWxTZWxlY3RvcikuZGF0YShcInBvc2l0aW9uLWFjdHVlbFwiKTsgXHJcblxyXG4gIGlmIChzdGF0dXMgPT09IFwiQ3LDqWVcIikge1xyXG4gICAgJChtb2RhbFNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRvYXN0ci53YXJuaW5nKFwiSW1wb3NzaWJsZSBkZSBtb2RpZmllciBjZXR0ZSBjb21tYW5kZS4gRWxsZSBuJ2VzdCBwbHVzIG1vZGlmaWFibGUuXCIpO1xyXG4gICAgXHJcbiAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZGV0YWlscy1jb21tYW5kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29tbWFuZGVJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBgI2RldGFpbHNDb21tYW5kZSR7Y29tbWFuZGVJZH1gO1xyXG5cclxuICBpZiAoIWNvbW1hbmRlSWQgfHwgISQobW9kYWxTZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCIgTW9kYWwgbm90IGZvdW5kIG9yIElEIG1pc3NpbmdcIiwge1xyXG4gICAgICBjb21tYW5kZUlkLFxyXG4gICAgICBtb2RhbFNlbGVjdG9yLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gICQobW9kYWxTZWxlY3RvcikubW9kYWwoXCJzaG93XCIpO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy9lZGl0IGNvbW1hbmRlIG1vZGFsXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2R1aXRzID0gd2luZG93LlBST0RVSVRTIHx8IFtdO1xyXG4gIHdpbmRvdy5kZWxldGVkUHJvZHVpdHMgPSBbXTtcclxuICB3aW5kb3cuZ2V0RGVsZXRlZFByb2R1aXRzID0gKCkgPT4gd2luZG93LmRlbGV0ZWRQcm9kdWl0cztcclxuXHJcbiAgLy8gQWxsIGNsaWNrIGV2ZW50cyBpbnNpZGUgdGhlIGRvY3VtZW50XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24sIC5mYS1wbHVzJyk7XHJcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJvdyA9IHRhcmdldC5jbG9zZXN0KCd0cicpO1xyXG4gICAgY29uc3QgbW9kYWwgPSB0YXJnZXQuY2xvc2VzdCgnLm1vZGFsJyk7XHJcblxyXG4gICAgLy8gRWRpdCBwcm9kdWN0XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWVkaXQtbGluZScpKSB7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWxlY3QnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLnF1YW50aXR5LWlucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZWRpdC1saW5lJyk/LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLmJ0bi1kZWxldGUtbGluZScpPy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2F2ZS1saW5lJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgZWRpdGVkIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2F2ZS1saW5lJykpIHtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlbGVjdCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eS1pbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZWRpdC1saW5lJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLmJ0bi1kZWxldGUtbGluZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2F2ZS1saW5lJyk/LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnUHJvZHVpdCBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tZGVsZXRlLWxpbmUnKSkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uJyxcclxuICAgICAgICB0ZXh0OiAnVm91bGV6LXZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNlIHByb2R1aXQgPycsXHJcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIHN1cHByaW1lcicsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0FubnVsZXInXHJcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICBjb25zdCBjb21tYW5kZUlkID0gbW9kYWwuZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnN0IHByb2R1aXRJZCA9IHJvdy5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgY29uc3QgY29tbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuY29tbWFuZGVsZ0lkO1xyXG5cclxuICAgICAgICAgIGlmIChjb21tYW5kZWxnSWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmRlbGV0ZWRQcm9kdWl0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBjb21tYW5kZV9pZDogcGFyc2VJbnQoY29tbWFuZGVJZCksXHJcbiAgICAgICAgICAgICAgcHJvZHVpdF9pZDogcGFyc2VJbnQocHJvZHVpdElkKSxcclxuICAgICAgICAgICAgICBjb21tYW5kZWxnX2lkOiBwYXJzZUludChjb21tYW5kZWxnSWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdQcm9kdWl0IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbmV3IHByb2R1Y3Qgcm93XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtcGx1cycpKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgICBuZXdSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcHJvZHVjdC1zZWxlY3RcIj5cclxuICAgICAgICAgICAgJHtwcm9kdWl0cy5tYXAocCA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7cC5pZH1cIiBkYXRhLXByaXg9XCIke3AucHJpY2V9XCI+JHtwLm5hbWV9PC9vcHRpb24+YCkuam9pbignJyl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHF1YW50aXR5LWlucHV0XCIgbWluPVwiMVwiIHZhbHVlPVwiMVwiPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2F2ZS1uZXctbGluZVwiIHRpdGxlPVwiRW5yZWdpc3RyZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zYXZlIHRleHQtc3VjY2Vzc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIG5ld2x5IGFkZGVkIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2F2ZS1uZXctbGluZScpKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RTZWxlY3QgPSByb3cucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0Jyk7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSByb3cucXVlcnlTZWxlY3RvcignLnF1YW50aXR5LWlucHV0Jyk7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3RlZElkID0gcHJvZHVjdFNlbGVjdC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBwcm9kdWN0U2VsZWN0Lm9wdGlvbnNbcHJvZHVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG5cclxuICAgICAgcHJvZHVjdFNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJ3RkOmxhc3QtY2hpbGQnKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1lZGl0LWxpbmVcIiB0aXRsZT1cIk1vZGlmaWVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXQgdGV4dC1wcmltYXJ5XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlLWxpbmVcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaCB0ZXh0LWRhbmdlclwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNhdmUtbGluZSBkLW5vbmVcIiB0aXRsZT1cIkVucmVnaXN0cmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNhdmUgdGV4dC1zdWNjZXNzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ05vdXZlYXUgcHJvZHVpdCBham91dMOpIGF2ZWMgc3VjY8Oocy4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGUgc2F2ZSBmdWxsIGNvbW1hbmRlIChlbnJlZ2lzdHJlciBidXR0b24pXHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNhdmUtZWRpdCcpKSB7XHJcbiAgICAgIGNvbnN0IGNvbW1hbmRlSWQgPSBtb2RhbC5kYXRhc2V0LmlkO1xyXG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG5cclxuICAgICAgaWYgKCF0YWJsZUJvZHkpIHtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1ciBpbnRlcm5lIDogdGFibGVhdSBpbnRyb3V2YWJsZS4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgZGVtYW5kZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlbWFuZGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgcmVjZXB0ZXVySWQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInJlY2VwdGV1cl9pZFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3Qgbm9tUGF0aWVudCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibm9tX3BhdGllbnRcIl0nKT8udmFsdWU7XHJcbiAgICAgIGNvbnN0IGRvc3NpZXJQYXRpZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJkb3NzaWVyX3BhdGllbnRcIl0nKT8udmFsdWU7IFxyXG4gICAgICBjb25zdCBpcHAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlwcFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgdXJnZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJ1cmdlbnRcIl0nKT8uY2hlY2tlZDtcclxuICAgICAgY29uc3QgZWRpdGVkUHJvZHVpdHMgPSBbXTtcclxuICAgICAgY29uc3QgbmV3UHJvZHVpdHMgPSBbXTtcclxuXHJcbiAgICAgIHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlbGVjdCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1aXRJZCA9IHNlbGVjdEVsZW1lbnQ/LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHF1YW50aXRlID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eS1pbnB1dCcpPy52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQoc2VsZWN0RWxlbWVudD8uc2VsZWN0ZWRPcHRpb25zWzBdPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpeCcpKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IGNvbW1hbmRlbGdJZCA9IHJvdy5kYXRhc2V0LmNvbW1hbmRlbGdJZCB8fCBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1aXRJZCB8fCAhcXVhbnRpdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIHByb2R1aXRfaWQ6IHBhcnNlSW50KHByb2R1aXRJZCksXHJcbiAgICAgICAgICBxdWFudGl0ZTogcGFyc2VGbG9hdChxdWFudGl0ZSksXHJcbiAgICAgICAgICBwcmljZTogcHJpY2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY29tbWFuZGVsZ0lkKSB7XHJcbiAgICAgICAgICBkYXRhLmNvbW1hbmRlbGdfaWQgPSBwYXJzZUludChjb21tYW5kZWxnSWQpO1xyXG4gICAgICAgICAgZWRpdGVkUHJvZHVpdHMucHVzaChkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3UHJvZHVpdHMucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlZCA9IHdpbmRvdy5nZXREZWxldGVkUHJvZHVpdHMoKS5maWx0ZXIoZCA9PiBkLmNvbW1hbmRlX2lkID09IGNvbW1hbmRlSWQpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvdmVudGUvZWRpdC1jb21tYW5kZScsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGNvbW1hbmRlX2lkOiBwYXJzZUludChjb21tYW5kZUlkKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGRlbWFuZGV1cl9pZDogcGFyc2VJbnQoZGVtYW5kZXVySWQpLFxyXG4gICAgICAgICAgICByZWNlcHRldXJfaWQ6IHBhcnNlSW50KHJlY2VwdGV1cklkKSxcclxuICAgICAgICAgICAgbm9tX3BhdGllbnQ6IG5vbVBhdGllbnQsXHJcbiAgICAgICAgICAgIGRvc3NpZXJfcGF0aWVudDogZG9zc2llclBhdGllbnQsXHJcbiAgICAgICAgICAgIGlwcCxcclxuICAgICAgICAgICAgdXJnZW50LFxyXG4gICAgICAgICAgICBlZGl0ZWQ6IGVkaXRlZFByb2R1aXRzLFxyXG4gICAgICAgICAgICBhZGRlZDogbmV3UHJvZHVpdHMsXHJcbiAgICAgICAgICAgIGRlbGV0ZWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnQ29tbWFuZGUgc2F1dmVnYXJkw6llIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBtb2RhbCBhbmQgcmVsb2FkIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICQobW9kYWwpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9KS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgIC8vIFJlc2V0IHRoZSBkZWxldGVkIHByb2R1Y3RzIGFycmF5XHJcbiAgICAgICAgICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZSB8fCAnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05ldHdvcmsgZXJyb3I6JywgZXJyKTtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1ciByw6lzZWF1IGxvcnMgZGUgbGEgc2F1dmVnYXJkZS4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSBwb3NpdGlvbiBvZiBjb21tYW5kZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHBvc2l0aW9uQ2hhbmdlZCA9IGZhbHNlOyAvLyBUcmFjayB3aGV0aGVyIHBvc2l0aW9uIGhhcyBjaGFuZ2VkXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gYXN5bmMgKGlkLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3ZlbnRlL3VwZGF0ZS1wb3NpdGlvbi1jb21tYW5kZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcG9zaXRpb24gfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcG9zaXRpb25DaGFuZ2VkID0gdHJ1ZTsgLy8gTWFyayBhcyBjaGFuZ2VkXHJcbiAgICAgICAgbGV0IGFjdGlvbk1lc3NhZ2UgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlICd2YWxpZMOpZSc6XHJcbiAgICAgICAgICAgIGFjdGlvbk1lc3NhZ2UgPSAnTGEgY29tbWFuZGUgYSDDqXTDqSB2YWxpZMOpZSBhdmVjIHN1Y2PDqHMuJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBjYXNlICdDcsOpZSc6XHJcbiAgICAgICAgICAvLyAgIGFjdGlvbk1lc3NhZ2UgPSAnTGEgY29tbWFuZGUgYSDDqXTDqSBkw6l2YWxpZMOpZSBhdmVjIHN1Y2PDqHMuJztcclxuICAgICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdHw6luw6lyw6llJzpcclxuICAgICAgICAgICAgYWN0aW9uTWVzc2FnZSA9ICdMYSBjb21tYW5kZSBhIMOpdMOpIGfDqW7DqXLDqWUgYXZlYyBzdWNjw6hzLic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYWN0aW9uTWVzc2FnZSA9ICdNaXNlIMOgIGpvdXIgZWZmZWN0dcOpZS4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhhY3Rpb25NZXNzYWdlKTtcclxuICAgICAgICB1cGRhdGVGb290ZXJCdXR0b25zKGlkLCBwb3NpdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIHLDqXNlYXUuXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVGb290ZXJCdXR0b25zID0gKGlkLCBuZXdQb3NpdGlvbikgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGV0YWlsc0NvbW1hbmRlJHtpZH1gKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb290ZXInKTtcclxuXHJcbiAgICBpZiAoIWZvb3RlcikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBidXR0b25zSFRNTCA9ICcnO1xyXG5cclxuICAgIGlmIChuZXdQb3NpdGlvbiA9PT0gJ3ZhbGlkw6llJykge1xyXG4gICAgICBidXR0b25zSFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZ2VuZXJlclwiIGRhdGEtaWQ9XCIke2lkfVwiPlxyXG4gICAgICAgICAgR8OpbsOpcmVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIGA7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID09PSAnQ3LDqWUnKSB7XHJcbiAgICAgIGJ1dHRvbnNIVE1MID0gYFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi12YWxpZGVyXCIgZGF0YS1pZD1cIiR7aWR9XCI+XHJcbiAgICAgICAgICBWYWxpZGVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYnV0dG9uc0hUTUw7XHJcbiAgfTtcclxuXHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyBIYW5kbGUgdmFsaWRhdGlvbiBwb3NpdGlvblxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tdmFsaWRlclwiKSkge1xyXG4gICAgICB1cGRhdGVQb3NpdGlvbihidG4uZGF0YXNldC5pZCwgJ3ZhbGlkw6llJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWdlbmVyZXJcIikpIHtcclxuICAgICAgY29uc3QgaWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJlcGFyZXJMaXZyYWlzb24ke2lkfWApO1xyXG4gICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAkKG1vZGFsKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNvbmZpcm1lci1saXZyYWlzb25cIikpIHtcclxuICAgICAgY29uc3QgY29tbWFuZGVJZCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpdnJhaXNvbi1mb3JtW2RhdGEtaWQ9XCIke2NvbW1hbmRlSWR9XCJdYCk7XHJcbiAgICAgIGlmICghZm9ybSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy92ZW50ZS9zYXZlLWxpdnJhaXNvbicsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICBhbGVydCgnIExpdnJhaXNvbiBlbnJlZ2lzdHLDqWUgYXZlYyBzdWNjw6hzLicpO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCcgRXJyZXVyOiAnICsgKHJlc3VsdC5tZXNzYWdlIHx8ICdQcm9ibMOobWUgZGUgdHJhaXRlbWVudC4nKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZW52b2kgbGl2cmFpc29uOicsIGVycm9yKTtcclxuICAgICAgICBhbGVydCgnRXJyZXVyIGRlIGNvbW11bmljYXRpb24gYXZlYyBsZSBzZXJ2ZXVyLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAvLyAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xyXG4gIC8vICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tdmFsaWRlclwiKSkge1xyXG4gIC8vICAgICB1cGRhdGVQb3NpdGlvbihidG4uZGF0YXNldC5pZCwgJ3ZhbGlkw6llJyk7XHJcbiAgLy8gICB9IGVsc2UgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tZ2VuZXJlclwiKSkge1xyXG4gIC8vICAgICAvL09wZW4gcmVjZXB0aW9uIG1vZGFsIGluc3RlYWQgb2YgcHVzaGluZyB0byBiYWNrZW5kXHJcbiAgLy8gICAgIGNvbnN0IGlkID0gYnRuLmRhdGFzZXQuaWQ7XHJcbiAgLy8gICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByZXBhcmVyTGl2cmFpc29uJHtpZH1gKTtcclxuICAvLyAgICAgaWYgKG1vZGFsKSB7XHJcbiAgLy8gICAgICAgJChtb2RhbCkubW9kYWwoJ3Nob3cnKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAkKCcubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBvc2l0aW9uQ2hhbmdlZCkge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBIYW5kbGUgSVBQIGlucHV0IGluIG1vZGFsc1xyXG4kKGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgXCIuaXBwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCAkaXBwID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGlwcFZhbHVlID0gJGlwcC52YWwoKS50cmltKCk7XHJcbiAgICBjb25zdCAkbW9kYWwgPSAkaXBwLmNsb3Nlc3QoJy5tb2RhbCcpO1xyXG4gICAgY29uc3QgJG5vbSA9ICRtb2RhbC5maW5kKCdbbmFtZT1cIm5vbV9wYXRpZW50XCJdJyk7XHJcbiAgICBjb25zdCAkZG9zc2llciA9ICRtb2RhbC5maW5kKCdbbmFtZT1cImRvc3NpZXJfcGF0aWVudFwiXScpO1xyXG5cclxuICAgIGNvbnN0IHBhdGllbnQgPSAod2luZG93LmluZm9zX3BhdGllbnQgfHwgW10pLmZpbmQocCA9PiBwLmlwcCA9PT0gaXBwVmFsdWUpO1xyXG5cclxuICAgIGlmIChwYXRpZW50KSB7XHJcbiAgICAgICRub20udmFsKHBhdGllbnQubm9tKTtcclxuICAgICAgJGRvc3NpZXIudmFsKHBhdGllbnQuZG9zc2llcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkbm9tLnZhbCgnJyk7XHJcbiAgICAgICRkb3NzaWVyLnZhbCgnJyk7XHJcbiAgICAgIHRvYXN0ci5lcnJvcihcIkF1Y3VuIHBhdGllbnQgdHJvdXbDqSBhdmVjIGNldCBJUFBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBvYmplY3RHZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKS5mO1xuXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSB1bmN1cnJ5VGhpcygkcHJvcGVydHlJc0VudW1lcmFibGUpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuLy8gaW4gc29tZSBJRSB2ZXJzaW9ucywgYHByb3BlcnR5SXNFbnVtZXJhYmxlYCByZXR1cm5zIGluY29ycmVjdCByZXN1bHQgb24gaW50ZWdlciBrZXlzXG4vLyBvZiBgbnVsbGAgcHJvdG90eXBlIG9iamVjdHNcbnZhciBJRV9CVUcgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbiAgdmFyIE8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBPWzJdID0gMjtcbiAgcmV0dXJuICFwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCAyKTtcbn0pO1xuXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVE9fRU5UUklFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhPKTtcbiAgICB2YXIgSUVfV09SS0FST1VORCA9IElFX0JVRyAmJiBvYmplY3RHZXRQcm90b3R5cGVPZihPKSA9PT0gbnVsbDtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IChJRV9XT1JLQVJPVU5EID8ga2V5IGluIE8gOiBwcm9wZXJ0eUlzRW51bWVyYWJsZShPLCBrZXkpKSkge1xuICAgICAgICBwdXNoKHJlc3VsdCwgVE9fRU5UUklFUyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiAgZW50cmllczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuICB2YWx1ZXM6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcbiAgICAgIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPT0gbm9uXG4gICAgICB8fCAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmQgLS0gdGVzdGluZ1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyIG5hdGl2ZVJldmVyc2UgPSB1bmN1cnJ5VGhpcyhbXS5yZXZlcnNlKTtcbnZhciB0ZXN0ID0gWzEsIDJdO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJldmVyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmV2ZXJzZVxuLy8gZml4IGZvciBTYWZhcmkgMTIuMCBidWdcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODg3OTRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFN0cmluZyh0ZXN0KSA9PT0gU3RyaW5nKHRlc3QucmV2ZXJzZSgpKSB9LCB7XG4gIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtYXNzaWduIC0tIGRpcnR5IGhhY2tcbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gbmF0aXZlUmV2ZXJzZSh0aGlzKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG5cbi8vIEpTT05bQEB0b1N0cmluZ1RhZ10gcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xuXG4vLyBNYXRoW0BAdG9TdHJpbmdUYWddIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgtQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcblxuLy8gYFN5bWJvbC5hc3luY0l0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wuYXN5bmNpdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtZGVmaW5lJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcblxuLy8gYFN5bWJvbC50b1N0cmluZ1RhZ2Agd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnRvc3RyaW5ndGFnXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKGdldEJ1aWx0SW4oJ1N5bWJvbCcpLCAnU3ltYm9sJyk7XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwicmVxdWlyZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsYW5ndWFnZSIsInVybCIsIndpbmRvdyIsImZyZW5jaEpzb25VcmwiLCJwcm9jZXNzaW5nIiwibGVuZ3RoTWVudSIsInNlcnZlclNpZGUiLCJhamF4IiwiUm91dGluZyIsImdlbmVyYXRlIiwiZGF0YSIsImQiLCJkcmF3Iiwic3RhcnQiLCJkYXRhU3JjIiwianNvbiIsImdsb2JhbEFjdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJhY3Rpb25zIiwib3JkZXIiLCJjb2x1bW5zIiwicmVuZGVyIiwicm93IiwiY29uY2F0IiwiaWQiLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiY3JlYXRlZENlbGwiLCJ0ZCIsImNsYXNzTGlzdCIsImFkZCIsIm1vbWVudCIsImZvcm1hdCIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJhY3Rpb25zSHRtbCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlkTmFtZSIsImljb24iLCJub20iLCJhdXRvV2lkdGgiLCJvbiIsImNvbW1hbmRlSWQiLCJhdHRyIiwibW9kYWxTZWxlY3RvciIsImNvbnNvbGUiLCJ3YXJuIiwic3RhdHVzIiwibW9kYWwiLCJ0b2FzdHIiLCJ3YXJuaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2R1aXRzIiwiUFJPRFVJVFMiLCJkZWxldGVkUHJvZHVpdHMiLCJnZXREZWxldGVkUHJvZHVpdHMiLCJib2R5IiwiX3JlZiIsIl9jYWxsZWUiLCJlIiwidGFyZ2V0IiwiX3JvdyRxdWVyeVNlbGVjdG9yIiwiX3JvdyRxdWVyeVNlbGVjdG9yMiIsIl9yb3ckcXVlcnlTZWxlY3RvcjMiLCJfcm93JHF1ZXJ5U2VsZWN0b3I0IiwiX3JvdyRxdWVyeVNlbGVjdG9yNSIsIl9yb3ckcXVlcnlTZWxlY3RvcjYiLCJ0YWJsZUJvZHkiLCJuZXdSb3ciLCJwcm9kdWN0U2VsZWN0IiwicXVhbnRpdHlJbnB1dCIsInNlbGVjdGVkSWQiLCJwcm9kdWN0TmFtZSIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yIiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3IyIiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3IzIiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3I0IiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3I1IiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3I2IiwiX21vZGFsJHF1ZXJ5U2VsZWN0b3I3IiwiX3RhYmxlQm9keSIsImRlc2NyaXB0aW9uIiwiZGVtYW5kZXVySWQiLCJyZWNlcHRldXJJZCIsIm5vbVBhdGllbnQiLCJkb3NzaWVyUGF0aWVudCIsImlwcCIsInVyZ2VudCIsImVkaXRlZFByb2R1aXRzIiwibmV3UHJvZHVpdHMiLCJkZWxldGVkIiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwicXVlcnlTZWxlY3RvciIsImRpc2FibGVkIiwicmVtb3ZlIiwic3VjY2VzcyIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImlzQ29uZmlybWVkIiwiZGF0YXNldCIsInByb2R1aXRJZCIsImNvbW1hbmRlbGdJZCIsImNvbW1hbmRlX2lkIiwicGFyc2VJbnQiLCJwcm9kdWl0X2lkIiwiY29tbWFuZGVsZ19pZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJtYXAiLCJwIiwicHJpY2UiLCJqb2luIiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsImNoZWNrZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3JvdyRxdWVyeVNlbGVjdG9yNyIsIl9zZWxlY3RFbGVtZW50JHNlbGVjdCIsInNlbGVjdEVsZW1lbnQiLCJxdWFudGl0ZSIsInBhcnNlRmxvYXQiLCJzZWxlY3RlZE9wdGlvbnMiLCJnZXRBdHRyaWJ1dGUiLCJmaWx0ZXIiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVtYW5kZXVyX2lkIiwicmVjZXB0ZXVyX2lkIiwibm9tX3BhdGllbnQiLCJkb3NzaWVyX3BhdGllbnQiLCJlZGl0ZWQiLCJhZGRlZCIsImxvY2F0aW9uIiwicmVsb2FkIiwibWVzc2FnZSIsInQwIiwiX3giLCJwb3NpdGlvbkNoYW5nZWQiLCJ1cGRhdGVQb3NpdGlvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJwb3NpdGlvbiIsImFjdGlvbk1lc3NhZ2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1cGRhdGVGb290ZXJCdXR0b25zIiwidDEiLCJfeDIiLCJfeDMiLCJuZXdQb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9vdGVyIiwiYnV0dG9uc0hUTUwiLCJfcmVmMyIsIl9jYWxsZWUzIiwiYnRuIiwiZm9ybSIsImZvcm1EYXRhIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiRm9ybURhdGEiLCJhbGVydCIsIl94NCIsInByZXZlbnREZWZhdWx0IiwiJGlwcCIsImlwcFZhbHVlIiwidHJpbSIsIiRtb2RhbCIsIiRub20iLCJmaW5kIiwiJGRvc3NpZXIiLCJwYXRpZW50IiwiaW5mb3NfcGF0aWVudCIsImRvc3NpZXIiXSwic291cmNlUm9vdCI6IiJ9