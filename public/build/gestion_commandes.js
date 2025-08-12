(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestion_commandes"],{

/***/ "./assets/js/mouvement/gestion_commandes.js":
/*!**************************************************!*\
  !*** ./assets/js/mouvement/gestion_commandes.js ***!
  \**************************************************/
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
  var table = $("#commandeTable").DataTable({
    language: {
      url: window.frenchJsonUrl,
      processing: '<i style="color:#7593ae; margin-top:100px !important; font-size:25px !important;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only"></span> '
    },
    lengthMenu: [[20, 50, 100, 200], [20, 50, 100, 200]],
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
        return "\n              <button \n                class=\"btn btn-sm\"\n                style=\"font-size: 0.6rem; color: #7593ae; padding: 0;\"\n                data-toggle=\"modal\" \n                data-target=\"#detailsCommande".concat(row.id, "\">\n                ").concat(data, "\n              </button>\n            ");
      }
    }, {
      name: "d.created",
      data: "date_commande",
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
      name: "d.ipp",
      data: "ipp_patient"
    }, {
      name: "d.nomPatient",
      data: "nomPatient",
      createdCell: function createdCell(td) {
        td.classList.add("force-left-align");
      }
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
  var status = $(modalSelector).data("status");
  if (status === 9) {
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
  document.body.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var target, row, modal, _row$querySelector, _row$querySelector2, _row$querySelector3, _row$querySelector4, _row$querySelector5, _row$querySelector6, tableBody, newRow, productSelect, quantityInput, selectedId, productName, _modal$querySelector, _modal$querySelector2, _modal$querySelector3, _modal$querySelector4, _modal$querySelector5, _modal$querySelector6, _modal$querySelector7, commandeId, _tableBody, requiredFields, hasError, rows, productIds, description, demandeurId, recepteurId, nomPatient, dossierPatient, ipp, urgent, editedProduits, newProduits, deleted, response, result;
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
            modal = target.closest('.modal');
            if (target.classList.contains('btn-edit-line')) {
              row.querySelector('.product-select').disabled = false;
              row.querySelector('.quantity-input').disabled = false;
              (_row$querySelector = row.querySelector('.btn-edit-line')) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.classList.add('d-none');
              (_row$querySelector2 = row.querySelector('.btn-delete-line')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.classList.add('d-none');
              (_row$querySelector3 = row.querySelector('.btn-save-line')) === null || _row$querySelector3 === void 0 ? void 0 : _row$querySelector3.classList.remove('d-none');
            }
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
            if (!target.classList.contains('btn-save-edit')) {
              _context.next = 50;
              break;
            }
            commandeId = modal.dataset.id;
            _tableBody = modal.querySelector('tbody');
            requiredFields = ['description', 'nom_patient', 'dossier_patient', 'ipp'];
            hasError = false;
            requiredFields.forEach(function (field) {
              var input = modal.querySelector("[name=\"".concat(field, "\"]"));
              if (!input || !input.value.trim()) {
                toastr.error("Le champ \"".concat(field.replace('_', ' '), "\" est requis."));
                hasError = true;
              }
            });
            rows = _tableBody.querySelectorAll('tr');
            if (rows.length === 0) {
              toastr.error("Veuillez ajouter au moins un produit.");
              hasError = true;
            }

            // Check for duplicate products
            productIds = [];
            rows.forEach(function (row) {
              var select = row.querySelector('.product-select');
              if (select) {
                var val = select.value;
                if (productIds.includes(val)) {
                  toastr.error("Un produit est sélectionné plusieurs fois.");
                  hasError = true;
                }
                productIds.push(val);
              }
            });
            if (!hasError) {
              _context.next = 22;
              break;
            }
            return _context.abrupt("return");
          case 22:
            if (_tableBody) {
              _context.next = 25;
              break;
            }
            toastr.error('Erreur interne : tableau introuvable.');
            return _context.abrupt("return");
          case 25:
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
            _context.prev = 36;
            _context.next = 39;
            return fetch('/mouvement/edit-commande', {
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
          case 39:
            response = _context.sent;
            _context.next = 42;
            return response.json();
          case 42:
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
            _context.next = 50;
            break;
          case 46:
            _context.prev = 46;
            _context.t0 = _context["catch"](36);
            console.error('Network error:', _context.t0);
            toastr.error('Erreur réseau lors de la sauvegarde.');
          case 50:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[36, 46]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

// Update position of commande
document.addEventListener("DOMContentLoaded", function () {
  var positionChanged = false;
  var updatePosition = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, position) {
      var response, data, actionMessage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch('/mouvement/update-position-commande', {
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
            positionChanged = true;
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

  // const updateFooterButtons = (id, newPosition) => {
  //   const modal = document.getElementById(`detailsCommande${id}`);
  //   const footer = modal.querySelector('.modal-footer');

  //   if (!footer) return;
  //   const demandeurSelect = modal.querySelector('[name="demandeur_id"]');
  //   const recepteurSelect = modal.querySelector('[name="recepteur_id"]');

  //   const demandeurId = demandeurSelect?.value;
  //   const recepteurId = recepteurSelect?.value;
  //   console.log(`Demandeur ID: ${demandeurId}, Recepteur ID: ${recepteurId}`);

  //   let buttonsHTML = '';

  //   if (newPosition === 'validée' && demandeurId && recepteurId && demandeurId === recepteurId) {
  //     buttonsHTML = `
  //       <button type="button" class="btn btn-primary btn-generer" data-id="${id}">
  //         Générer
  //       </button>
  //     `;
  //   } else if (newPosition === 'Crée') {
  //     buttonsHTML = `
  //       <button type="button" class="btn btn-success btn-valider" data-id="${id}">
  //         Valider
  //       </button>
  //     `;
  //   }
  //   footer.innerHTML = buttonsHTML;
  // };

  var updateFooterButtons = function updateFooterButtons(id, newPosition) {
    var _demandeurSelect$valu, _recepteurSelect$valu, _typeCommandeHidden$v, _typeCommandeHidden$v2;
    var modal = document.getElementById("detailsCommande".concat(id));
    var footer = modal.querySelector('.modal-footer');
    if (!footer) return;
    var demandeurSelect = modal.querySelector('[name="demandeur_id"]');
    var recepteurSelect = modal.querySelector('[name="recepteur_id"]');
    var typeCommandeHidden = modal.querySelector('[name="type_commande_id_hidden"]');
    var demandeurId = demandeurSelect === null || demandeurSelect === void 0 || (_demandeurSelect$valu = demandeurSelect.value) === null || _demandeurSelect$valu === void 0 ? void 0 : _demandeurSelect$valu.trim();
    var recepteurId = recepteurSelect === null || recepteurSelect === void 0 || (_recepteurSelect$valu = recepteurSelect.value) === null || _recepteurSelect$valu === void 0 ? void 0 : _recepteurSelect$valu.trim();
    var typeCommandeId = (_typeCommandeHidden$v = typeCommandeHidden === null || typeCommandeHidden === void 0 || (_typeCommandeHidden$v2 = typeCommandeHidden.value) === null || _typeCommandeHidden$v2 === void 0 ? void 0 : _typeCommandeHidden$v2.trim()) !== null && _typeCommandeHidden$v !== void 0 ? _typeCommandeHidden$v : '';
    var buttonsHTML = '';
    if (newPosition === 'validée' && demandeurId && recepteurId && demandeurId === recepteurId) {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-primary btn-generer\"\n                data-id=\"".concat(id, "\"\n                data-type=\"").concat(typeCommandeId, "\">\n          G\xE9n\xE9rer\n        </button>\n      ");
    } else if (newPosition === 'Crée') {
      buttonsHTML = "\n        <button type=\"button\" class=\"btn btn-success btn-valider\" data-id=\"".concat(id, "\">\n          Valider\n        </button>\n      ");
    }
    footer.innerHTML = buttonsHTML;
  };
  document.addEventListener("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var btn, id, typeCommande, form, formData, res, result, modal, _form, _formData, _res, _result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            btn = e.target.closest("button");
            if (btn) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            id = btn.dataset.id;
            if (!btn.classList.contains("btn-valider")) {
              _context3.next = 7;
              break;
            }
            updatePosition(id, "validée");
            return _context3.abrupt("return");
          case 7:
            if (!btn.classList.contains("btn-generer")) {
              _context3.next = 33;
              break;
            }
            typeCommande = parseInt(btn.dataset.type, 10);
            form = document.querySelector(".livraison-form[data-id=\"".concat(id, "\"]"));
            if (!(typeCommande === 3)) {
              _context3.next = 30;
              break;
            }
            if (form) {
              _context3.next = 13;
              break;
            }
            return _context3.abrupt("return", toastr.error("Formulaire manquant."));
          case 13:
            formData = new FormData(form);
            _context3.prev = 14;
            _context3.next = 17;
            return fetch("/mouvement/save-livraison", {
              method: "POST",
              body: formData
            });
          case 17:
            res = _context3.sent;
            _context3.next = 20;
            return res.json();
          case 20:
            result = _context3.sent;
            result.status === "success" ? (toastr.success("Livraison enregistrée."), location.reload()) : toastr.error(result.message || "Erreur serveur.");
            _context3.next = 28;
            break;
          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](14);
            console.error(_context3.t0);
            toastr.error("Erreur de communication.");
          case 28:
            _context3.next = 32;
            break;
          case 30:
            modal = document.getElementById("preparerLivraison".concat(id));
            if (modal) {
              $(modal).modal("show");
            } else {
              toastr.error("Modal introuvable.");
            }
          case 32:
            return _context3.abrupt("return");
          case 33:
            if (!btn.classList.contains("btn-confirmer-livraison")) {
              _context3.next = 52;
              break;
            }
            _form = document.querySelector(".livraison-form[data-id=\"".concat(id, "\"]"));
            if (_form) {
              _context3.next = 37;
              break;
            }
            return _context3.abrupt("return");
          case 37:
            _formData = new FormData(_form);
            _context3.prev = 38;
            _context3.next = 41;
            return fetch("/mouvement/save-livraison", {
              method: "POST",
              body: _formData
            });
          case 41:
            _res = _context3.sent;
            _context3.next = 44;
            return _res.json();
          case 44:
            _result = _context3.sent;
            _result.status === "success" ? (toastr.success("Livraison enregistrée."), location.reload()) : toastr.error(_result.message || "Erreur serveur.");
            _context3.next = 52;
            break;
          case 48:
            _context3.prev = 48;
            _context3.t1 = _context3["catch"](38);
            console.error(_context3.t1);
            toastr.error("Erreur de communication.");
          case 52:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[14, 24], [38, 48]]);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
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
    var $modal = $ipp.closest(".modal");
    var $nom = $modal.find('[name="nom_patient"]');
    var $dossier = $modal.find('[name="dossier_patient"]');
    var patient = (window.infos_patient || []).find(function (p) {
      return p.ipp === ippValue;
    });
    if (patient) {
      $nom.val(patient.nom);
      $dossier.empty();
      var dossiers = Array.isArray(patient.dossier) ? patient.dossier : [patient.dossier];
      dossiers.forEach(function (d) {
        $dossier.append($('<option>', {
          value: d,
          text: d
        }));
      });
      if (dossiers.length === 1) {
        $dossier.prop("readonly", true).css("pointer-events", "none").css("background-color", "#e9ecef");
      } else {
        $dossier.prop("readonly", false).css("pointer-events", "").css("background-color", "");
      }
    } else {
      $nom.val('');
      $dossier.empty();
      toastr.error("Aucun patient trouvé avec cet IPP");
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  $(document).on('click', function (e) {
    var $popup = $('#impressionPopup');
    var $toggle = $('.toggleImpressionPopup');
    if ($(e.target).closest($toggle).length) {
      $popup.fadeToggle(150);
    } else if (!$(e.target).closest($popup).length) {
      $popup.fadeOut(150);
    }
  });
  $('body').on('click', '.genererPdfCommandeSortieStock', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    if (!id) {
      toastr.warning("ID de commande ortie Stock manquant.");
      return;
    }
    try {
      var url = Routing.generate('app_exports_commande_exports') + '?id=' + id;
      window.open(url, '_blank');
    } catch (err) {
      console.error("Route non trouvée dans Routing.js :", err);
      toastr.error("Route introuvable. Avez-vous bien dumpé les routes JS ?");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c5c500","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6f202c","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-02d11e","node_modules_bpnetguy_webpack-inject-plugin_dist_webpack-inject-plugin_loader_js_id_webpack-i-327ca7"], () => (__webpack_exec__("./node_modules/@bpnetguy/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/js/mouvement/gestion_commandes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGlvbl9jb21tYW5kZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUFvRSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQUFBQSxtQkFBQTtBQURBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWTtFQUM1QixJQUFNQyxLQUFLLEdBQUdILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDSSxTQUFTLENBQUM7SUFDMUNDLFFBQVEsRUFBRTtNQUNSQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsYUFBYTtNQUN6QkMsVUFBVSxFQUNSO0lBQ0osQ0FBQztJQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNuQjtJQUNERCxVQUFVLEVBQUUsSUFBSTtJQUNoQkUsVUFBVSxFQUFFLElBQUk7SUFDaEJDLElBQUksRUFBRTtNQUNKTixHQUFHLEVBQUVPLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLHFCQUFxQixDQUFDO01BQzVDQyxJQUFJLEVBQUUsU0FBQUEsS0FBVUMsQ0FBQyxFQUFFO1FBQ2pCQSxDQUFDLENBQUNDLElBQUksR0FBR0QsQ0FBQyxDQUFDQyxJQUFJLElBQUksQ0FBQztRQUNwQkQsQ0FBQyxDQUFDRSxLQUFLLEdBQUdGLENBQUMsQ0FBQ0UsS0FBSyxJQUFJLENBQUM7UUFDdEJGLENBQUMsQ0FBQ2hFLE1BQU0sR0FBR2dFLENBQUMsQ0FBQ2hFLE1BQU0sSUFBSSxFQUFFO01BQzNCLENBQUM7TUFDRG1FLE9BQU8sRUFBRSxTQUFBQSxRQUFVQyxJQUFJLEVBQUU7UUFDdkJiLE1BQU0sQ0FBQ2MsYUFBYSxHQUFHQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDSSxPQUFPLENBQUMsR0FDOUNKLElBQUksQ0FBQ0ksT0FBTyxHQUNaM0ssTUFBTSxDQUFDOEMsTUFBTSxDQUFDeUgsSUFBSSxDQUFDSSxPQUFPLENBQUM7UUFDL0IsT0FBT0osSUFBSSxDQUFDTCxJQUFJO01BQ2xCO0lBQ0YsQ0FBQztJQUNEVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQkMsT0FBTyxFQUFFLENBQ1A7TUFBRW5FLElBQUksRUFBRSxNQUFNO01BQUV3RCxJQUFJLEVBQUU7SUFBSyxDQUFDLEVBQzVCO01BQ0V4RCxJQUFJLEVBQUUsUUFBUTtNQUNkd0QsSUFBSSxFQUFFLGVBQWU7TUFDckJZLE1BQU0sRUFBRSxTQUFBQSxPQUFVWixJQUFJLEVBQUU3SCxJQUFJLEVBQUUwSSxHQUFHLEVBQUU7UUFDakMsME9BQUFDLE1BQUEsQ0FLcUNELEdBQUcsQ0FBQ0UsRUFBRSwyQkFBQUQsTUFBQSxDQUNuQ2QsSUFBSTtNQUdkO0lBQ0YsQ0FBQyxFQUNEO01BQ0V4RCxJQUFJLEVBQUUsV0FBVztNQUNqQndELElBQUksRUFBRSxlQUFlO01BQ3JCWSxNQUFNLEVBQUUsU0FBQUEsT0FBVVosSUFBSSxFQUFFO1FBQ3RCLE9BQU9nQixNQUFNLENBQUNoQixJQUFJLENBQUMsQ0FBQ2lCLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDM0M7SUFDRixDQUFDLEVBQ0Q7TUFBRXpFLElBQUksRUFBRSxlQUFlO01BQUV3RCxJQUFJLEVBQUUsYUFBYTtNQUMxQ2tCLFdBQVcsRUFBRSxTQUFBQSxZQUFVQyxFQUFFLEVBQUU7UUFDekJBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdEM7SUFDRixDQUFDLEVBQ0Q7TUFBRTdFLElBQUksRUFBRSx1QkFBdUI7TUFBRXdELElBQUksRUFBRSxXQUFXO01BQ2hEa0IsV0FBVyxFQUFFLFNBQUFBLFlBQVVDLEVBQUUsRUFBRTtRQUN6QkEsRUFBRSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUN0QztJQUNGLENBQUMsRUFDRDtNQUFFN0UsSUFBSSxFQUFFLHVCQUF1QjtNQUFFd0QsSUFBSSxFQUFFLFdBQVc7TUFDaERrQixXQUFXLEVBQUUsU0FBQUEsWUFBVUMsRUFBRSxFQUFFO1FBQ3pCQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3RDO0lBQ0YsQ0FBQyxFQUNEO01BQUU3RSxJQUFJLEVBQUUsT0FBTztNQUFFd0QsSUFBSSxFQUFFO0lBQWMsQ0FBQyxFQUN0QztNQUFFeEQsSUFBSSxFQUFFLGNBQWM7TUFBRXdELElBQUksRUFBRSxZQUFZO01BQ3hDa0IsV0FBVyxFQUFFLFNBQUFBLFlBQVVDLEVBQUUsRUFBRTtRQUN6QkEsRUFBRSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUN0QztJQUNGLENBQUMsRUFDRDtNQUNFN0UsSUFBSSxFQUFFLG1CQUFtQjtNQUN6QndELElBQUksRUFBRSxtQkFBbUI7TUFDekJZLE1BQU0sRUFBRSxTQUFBQSxPQUFVWixJQUFJLEVBQUU7UUFDdEIsT0FBT0EsSUFBSSxHQUNQc0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDLENBQUN1QixjQUFjLENBQUMsT0FBTyxFQUFFO1VBQ25DQyxLQUFLLEVBQUUsU0FBUztVQUNoQkMscUJBQXFCLEVBQUU7UUFDekIsQ0FBQyxDQUFDLEdBQ0YsTUFBTTtNQUNaLENBQUM7TUFDRFAsV0FBVyxFQUFFLFNBQUFBLFlBQVVDLEVBQUUsRUFBRTtRQUN6QkEsRUFBRSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2QztJQUNGLENBQUMsRUFDRDtNQUFFN0UsSUFBSSxFQUFFLGdCQUFnQjtNQUFFd0QsSUFBSSxFQUFFO0lBQWlCLENBQUMsRUFDbEQ7TUFBRXhELElBQUksRUFBRSxvQkFBb0I7TUFBRXdELElBQUksRUFBRTtJQUFZLENBQUMsRUFDakQ7TUFDRXhELElBQUksRUFBRSxTQUFTO01BQ2Z3RCxJQUFJLEVBQUUsSUFBSTtNQUNWMEIsU0FBUyxFQUFFLEtBQUs7TUFDaEJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCZixNQUFNLEVBQUUsU0FBQUEsT0FBVVosSUFBSSxFQUFFO1FBQ3RCLElBQUk0QixXQUFXLEdBQ2Isd0JBQXdCLEdBQ3hCLDJEQUEyRCxHQUMzRDVCLElBQUksQ0FBQ2UsRUFBRSxHQUNQLFFBQVEsR0FDUixpRUFBaUUsR0FDakVmLElBQUksQ0FBQ2UsRUFBRSxHQUNQLElBQUk7UUFFTnZCLE1BQU0sQ0FBQ2MsYUFBYSxDQUFDdkgsT0FBTyxDQUFDLFVBQVU4SSxNQUFNLEVBQUU7VUFDN0NELFdBQVcseUNBQUFkLE1BQUEsQ0FDVWUsTUFBTSxDQUFDQyxTQUFTLHFEQUFBaEIsTUFBQSxDQUNuQmQsSUFBSSxDQUFDZSxFQUFFLGdHQUFBRCxNQUFBLENBRUdlLE1BQU0sQ0FBQ0UsTUFBTSxFQUFBakIsTUFBQSxDQUFHZCxJQUFJLENBQUNlLEVBQUUsd0NBQUFELE1BQUEsQ0FDakNlLE1BQU0sQ0FBQ0csSUFBSSx1QkFBQWxCLE1BQUEsQ0FBbUJlLE1BQU0sQ0FBQ0ksR0FBRyxnQ0FDNUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUZMLFdBQVcsSUFBSSxjQUFjO1FBQzdCLE9BQU9BLFdBQVc7TUFDcEI7SUFDRixDQUFDLENBQ0Y7SUFDRE0sU0FBUyxFQUFFO0VBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUZqRCxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDaUQsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZO0VBQ3BELElBQU1DLFVBQVUsR0FBR25ELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29ELElBQUksQ0FBQyxJQUFJLENBQUM7RUFDckMsSUFBTUMsYUFBYSxtQkFBQXhCLE1BQUEsQ0FBbUJzQixVQUFVLENBQUU7RUFFbEQsSUFBSSxDQUFDQSxVQUFVLElBQUksQ0FBQ25ELENBQUMsQ0FBQ3FELGFBQWEsQ0FBQyxDQUFDckcsTUFBTSxFQUFFO0lBQzNDc0csT0FBTyxDQUFDQyxJQUFJLENBQUMsK0JBQStCLEVBQUU7TUFBRUosVUFBVSxFQUFWQSxVQUFVO01BQUVFLGFBQWEsRUFBYkE7SUFBYyxDQUFDLENBQUM7SUFDNUU7RUFDRjtFQUVBLElBQU1HLE1BQU0sR0FBR3hELENBQUMsQ0FBQ3FELGFBQWEsQ0FBQyxDQUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUU5QyxJQUFJeUMsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUNoQnhELENBQUMsQ0FBQ3FELGFBQWEsQ0FBQyxDQUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQ2hDLENBQUMsTUFBTTtJQUNMQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxvRUFBb0UsQ0FBQztFQUV0RjtBQUNGLENBQUMsQ0FBQztBQUVGM0QsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ2lELEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWTtFQUN2RCxJQUFNQyxVQUFVLEdBQUduRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3JDLElBQU1DLGFBQWEsc0JBQUF4QixNQUFBLENBQXNCc0IsVUFBVSxDQUFFO0VBRXJELElBQUksQ0FBQ0EsVUFBVSxJQUFJLENBQUNuRCxDQUFDLENBQUNxRCxhQUFhLENBQUMsQ0FBQ3JHLE1BQU0sRUFBRTtJQUMzQ3NHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO01BQzdDSixVQUFVLEVBQVZBLFVBQVU7TUFDVkUsYUFBYSxFQUFiQTtJQUNGLENBQUMsQ0FBQztJQUNGO0VBQ0Y7RUFDQXJELENBQUMsQ0FBQ3FELGFBQWEsQ0FBQyxDQUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ2hDLENBQUMsQ0FBQzs7QUFJRjtBQUNBbEQsTUFBTSxDQUFDcUQsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07RUFDcEMsSUFBTUMsUUFBUSxHQUFHdEQsTUFBTSxDQUFDdUQsUUFBUSxJQUFJLEVBQUU7RUFDdEN2RCxNQUFNLENBQUN3RCxlQUFlLEdBQUcsRUFBRTtFQUMzQnhELE1BQU0sQ0FBQ3lELGtCQUFrQixHQUFHO0lBQUEsT0FBTXpELE1BQU0sQ0FBQ3dELGVBQWU7RUFBQTtFQUV4RDlELFFBQVEsQ0FBQ2dFLElBQUksQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTztJQUFBLElBQUFNLElBQUEsR0FBQXZFLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFFLFNBQUEyRyxRQUFPQyxDQUFDO01BQUEsSUFBQUMsTUFBQSxFQUFBekMsR0FBQSxFQUFBNkIsS0FBQSxFQUFBYSxrQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxtQkFBQSxFQUFBQyxTQUFBLEVBQUFDLE1BQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxFQUFBQyxvQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBckMsVUFBQSxFQUFBc0MsVUFBQSxFQUFBQyxjQUFBLEVBQUFDLFFBQUEsRUFBQUMsSUFBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsRUFBQUMsV0FBQSxFQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsY0FBQSxFQUFBQyxHQUFBLEVBQUFDLE1BQUEsRUFBQUMsY0FBQSxFQUFBQyxXQUFBLEVBQUFDLE9BQUEsRUFBQUMsUUFBQSxFQUFBak0sTUFBQTtNQUFBLE9BQUE3RCxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBc08sU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFySSxJQUFBLEdBQUFxSSxRQUFBLENBQUEzSyxJQUFBO1VBQUE7WUFDeENzSSxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBTSxDQUFDc0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUEsSUFDOUN0QyxNQUFNO2NBQUFxQyxRQUFBLENBQUEzSyxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUEySyxRQUFBLENBQUFsTCxNQUFBO1VBQUE7WUFFTG9HLEdBQUcsR0FBR3lDLE1BQU0sQ0FBQ3NDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDMUJsRCxLQUFLLEdBQUdZLE1BQU0sQ0FBQ3NDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFFdEMsSUFBSXRDLE1BQU0sQ0FBQ2xDLFNBQVMsQ0FBQ3lFLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtjQUM5Q2hGLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRLEdBQUcsS0FBSztjQUNyRGxGLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRLEdBQUcsS0FBSztjQUNyRCxDQUFBeEMsa0JBQUEsR0FBQTFDLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFBdkMsa0JBQUEsdUJBQW5DQSxrQkFBQSxDQUFxQ25DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUM1RCxDQUFBbUMsbUJBQUEsR0FBQTNDLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFBdEMsbUJBQUEsdUJBQXJDQSxtQkFBQSxDQUF1Q3BDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUM5RCxDQUFBb0MsbUJBQUEsR0FBQTVDLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFBckMsbUJBQUEsdUJBQW5DQSxtQkFBQSxDQUFxQ3JDLFNBQVMsQ0FBQzRFLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDakU7WUFFQSxJQUFJMUMsTUFBTSxDQUFDbEMsU0FBUyxDQUFDeUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2NBQzlDaEYsR0FBRyxDQUFDaUYsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BEbEYsR0FBRyxDQUFDaUYsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BELENBQUFyQyxtQkFBQSxHQUFBN0MsR0FBRyxDQUFDaUYsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQUFwQyxtQkFBQSx1QkFBbkNBLG1CQUFBLENBQXFDdEMsU0FBUyxDQUFDNEUsTUFBTSxDQUFDLFFBQVEsQ0FBQztjQUMvRCxDQUFBckMsbUJBQUEsR0FBQTlDLEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFBbkMsbUJBQUEsdUJBQXJDQSxtQkFBQSxDQUF1Q3ZDLFNBQVMsQ0FBQzRFLE1BQU0sQ0FBQyxRQUFRLENBQUM7Y0FDakUsQ0FBQXBDLG1CQUFBLEdBQUEvQyxHQUFHLENBQUNpRixhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBQWxDLG1CQUFBLHVCQUFuQ0EsbUJBQUEsQ0FBcUN4QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDNURzQixNQUFNLENBQUNzRCxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDaEQ7O1lBRUE7WUFDQSxJQUFJM0MsTUFBTSxDQUFDbEMsU0FBUyxDQUFDeUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Y0FDaERLLElBQUksQ0FBQ0MsSUFBSSxDQUFDO2dCQUNSQyxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQ0MsSUFBSSxFQUFFLDZDQUE2QztnQkFDbkRyRSxJQUFJLEVBQUUsU0FBUztnQkFDZnNFLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxpQkFBaUIsRUFBRSxnQkFBZ0I7Z0JBQ25DQyxnQkFBZ0IsRUFBRTtjQUNwQixDQUFDLENBQUMsQ0FBQzdNLElBQUksQ0FBQyxVQUFBSCxNQUFNLEVBQUk7Z0JBQ2hCLElBQUlBLE1BQU0sQ0FBQ2lOLFdBQVcsRUFBRTtrQkFDdEIsSUFBTXJFLFVBQVUsR0FBR00sS0FBSyxDQUFDZ0UsT0FBTyxDQUFDM0YsRUFBRTtrQkFDbkMsSUFBTTRGLFNBQVMsR0FBRzlGLEdBQUcsQ0FBQzZGLE9BQU8sQ0FBQzNGLEVBQUU7a0JBQ2hDLElBQU02RixZQUFZLEdBQUcvRixHQUFHLENBQUM2RixPQUFPLENBQUNFLFlBQVk7a0JBRTdDLElBQUlBLFlBQVksRUFBRTtvQkFDaEJwSCxNQUFNLENBQUN3RCxlQUFlLENBQUN0SCxJQUFJLENBQUM7c0JBQzFCbUwsV0FBVyxFQUFFQyxRQUFRLENBQUMxRSxVQUFVLENBQUM7c0JBQ2pDMkUsVUFBVSxFQUFFRCxRQUFRLENBQUNILFNBQVMsQ0FBQztzQkFDL0JLLGFBQWEsRUFBRUYsUUFBUSxDQUFDRixZQUFZO29CQUN0QyxDQUFDLENBQUM7a0JBQ0o7a0JBRUEvRixHQUFHLENBQUNtRixNQUFNLENBQUMsQ0FBQztrQkFDWnJELE1BQU0sQ0FBQ3NELE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztnQkFDakQ7Y0FDRixDQUFDLENBQUM7WUFDSjs7WUFFQTtZQUNBLElBQUkzQyxNQUFNLENBQUNsQyxTQUFTLENBQUN5RSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Y0FDbENoQyxTQUFTLEdBQUduQixLQUFLLENBQUNvRCxhQUFhLENBQUMsT0FBTyxDQUFDO2NBQ3hDaEMsTUFBTSxHQUFHNUUsUUFBUSxDQUFDK0gsYUFBYSxDQUFDLElBQUksQ0FBQztjQUUzQ25ELE1BQU0sQ0FBQ29ELFNBQVMsbUxBQUFwRyxNQUFBLENBR1JnQyxRQUFRLENBQUNxRSxHQUFHLENBQUMsVUFBQUMsQ0FBQztnQkFBQSwwQkFBQXRHLE1BQUEsQ0FBc0JzRyxDQUFDLENBQUNyRyxFQUFFLHFCQUFBRCxNQUFBLENBQWdCc0csQ0FBQyxDQUFDQyxLQUFLLFNBQUF2RyxNQUFBLENBQUtzRyxDQUFDLENBQUM1SyxJQUFJO2NBQUEsQ0FBVyxDQUFDLENBQUM4SyxJQUFJLENBQUMsRUFBRSxDQUFDLDZaQVd0RztjQUVEekQsU0FBUyxDQUFDMEQsV0FBVyxDQUFDekQsTUFBTSxDQUFDO1lBQy9COztZQUVBO1lBQ0EsSUFBSVIsTUFBTSxDQUFDbEMsU0FBUyxDQUFDeUUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Y0FDNUM5QixhQUFhLEdBQUdsRCxHQUFHLENBQUNpRixhQUFhLENBQUMsaUJBQWlCLENBQUM7Y0FDcEQ5QixhQUFhLEdBQUduRCxHQUFHLENBQUNpRixhQUFhLENBQUMsaUJBQWlCLENBQUM7Y0FFcEQ3QixVQUFVLEdBQUdGLGFBQWEsQ0FBQ3pOLEtBQUs7Y0FDaEM0TixXQUFXLEdBQUdILGFBQWEsQ0FBQ3lELE9BQU8sQ0FBQ3pELGFBQWEsQ0FBQzBELGFBQWEsQ0FBQyxDQUFDcEIsSUFBSTtjQUUzRXRDLGFBQWEsQ0FBQ2dDLFFBQVEsR0FBRyxJQUFJO2NBQzdCL0IsYUFBYSxDQUFDK0IsUUFBUSxHQUFHLElBQUk7Y0FFN0JsRixHQUFHLENBQUNpRixhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNvQixTQUFTLDBmQVUzQztjQUVEdkUsTUFBTSxDQUFDc0QsT0FBTyxDQUFDLHFDQUFxQyxDQUFDO1lBQ3ZEO1lBQUMsS0FFRzNDLE1BQU0sQ0FBQ2xDLFNBQVMsQ0FBQ3lFLFFBQVEsQ0FBQyxlQUFlLENBQUM7Y0FBQUYsUUFBQSxDQUFBM0ssSUFBQTtjQUFBO1lBQUE7WUFDdENvSCxVQUFVLEdBQUdNLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQzNGLEVBQUU7WUFDN0I4QyxVQUFTLEdBQUduQixLQUFLLENBQUNvRCxhQUFhLENBQUMsT0FBTyxDQUFDO1lBRXhDbkIsY0FBYyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUM7WUFDM0VDLFFBQVEsR0FBRyxLQUFLO1lBRXBCRCxjQUFjLENBQUM1TCxPQUFPLENBQUMsVUFBQTJPLEtBQUssRUFBSTtjQUM5QixJQUFNQyxLQUFLLEdBQUdqRixLQUFLLENBQUNvRCxhQUFhLFlBQUFoRixNQUFBLENBQVc0RyxLQUFLLFFBQUksQ0FBQztjQUN0RCxJQUFJLENBQUNDLEtBQUssSUFBSSxDQUFDQSxLQUFLLENBQUNyUixLQUFLLENBQUNzUixJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNqQ2pGLE1BQU0sQ0FBQzlJLEtBQUssZUFBQWlILE1BQUEsQ0FBYzRHLEtBQUssQ0FBQ0csT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQWUsQ0FBQztnQkFDakVqRCxRQUFRLEdBQUcsSUFBSTtjQUNqQjtZQUNGLENBQUMsQ0FBQztZQUVJQyxJQUFJLEdBQUdoQixVQUFTLENBQUNpRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSWpELElBQUksQ0FBQzVJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDckIwRyxNQUFNLENBQUM5SSxLQUFLLENBQUMsdUNBQXVDLENBQUM7Y0FDckQrSyxRQUFRLEdBQUcsSUFBSTtZQUNqQjs7WUFFQTtZQUNNRSxVQUFVLEdBQUcsRUFBRTtZQUNyQkQsSUFBSSxDQUFDOUwsT0FBTyxDQUFDLFVBQUE4SCxHQUFHLEVBQUk7Y0FDbEIsSUFBTWtILE1BQU0sR0FBR2xILEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztjQUNuRCxJQUFJaUMsTUFBTSxFQUFFO2dCQUNWLElBQU05SyxHQUFHLEdBQUc4SyxNQUFNLENBQUN6UixLQUFLO2dCQUN4QixJQUFJd08sVUFBVSxDQUFDa0QsUUFBUSxDQUFDL0ssR0FBRyxDQUFDLEVBQUU7a0JBQzVCMEYsTUFBTSxDQUFDOUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDO2tCQUMxRCtLLFFBQVEsR0FBRyxJQUFJO2dCQUNqQjtnQkFDQUUsVUFBVSxDQUFDcEosSUFBSSxDQUFDdUIsR0FBRyxDQUFDO2NBQ3RCO1lBQ0YsQ0FBQyxDQUFDO1lBQUMsS0FFQzJILFFBQVE7Y0FBQWUsUUFBQSxDQUFBM0ssSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBMkssUUFBQSxDQUFBbEwsTUFBQTtVQUFBO1lBQUEsSUFJUG9KLFVBQVM7Y0FBQThCLFFBQUEsQ0FBQTNLLElBQUE7Y0FBQTtZQUFBO1lBQ1oySCxNQUFNLENBQUM5SSxLQUFLLENBQUMsdUNBQXVDLENBQUM7WUFBQyxPQUFBOEwsUUFBQSxDQUFBbEwsTUFBQTtVQUFBO1lBSWxEc0ssV0FBVyxJQUFBWixvQkFBQSxHQUFHekIsS0FBSyxDQUFDb0QsYUFBYSxDQUFDLHNCQUFzQixDQUFDLGNBQUEzQixvQkFBQSx1QkFBM0NBLG9CQUFBLENBQTZDN04sS0FBSztZQUNoRTBPLFdBQVcsSUFBQVoscUJBQUEsR0FBRzFCLEtBQUssQ0FBQ29ELGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFBMUIscUJBQUEsdUJBQTVDQSxxQkFBQSxDQUE4QzlOLEtBQUs7WUFDakUyTyxXQUFXLElBQUFaLHFCQUFBLEdBQUczQixLQUFLLENBQUNvRCxhQUFhLENBQUMsdUJBQXVCLENBQUMsY0FBQXpCLHFCQUFBLHVCQUE1Q0EscUJBQUEsQ0FBOEMvTixLQUFLO1lBQ2pFNE8sVUFBVSxJQUFBWixxQkFBQSxHQUFHNUIsS0FBSyxDQUFDb0QsYUFBYSxDQUFDLHNCQUFzQixDQUFDLGNBQUF4QixxQkFBQSx1QkFBM0NBLHFCQUFBLENBQTZDaE8sS0FBSztZQUMvRDZPLGNBQWMsSUFBQVoscUJBQUEsR0FBRzdCLEtBQUssQ0FBQ29ELGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxjQUFBdkIscUJBQUEsdUJBQS9DQSxxQkFBQSxDQUFpRGpPLEtBQUs7WUFDdkU4TyxHQUFHLElBQUFaLHFCQUFBLEdBQUc5QixLQUFLLENBQUNvRCxhQUFhLENBQUMsY0FBYyxDQUFDLGNBQUF0QixxQkFBQSx1QkFBbkNBLHFCQUFBLENBQXFDbE8sS0FBSztZQUNoRCtPLE1BQU0sSUFBQVoscUJBQUEsR0FBRy9CLEtBQUssQ0FBQ29ELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFBckIscUJBQUEsdUJBQXRDQSxxQkFBQSxDQUF3Q3dELE9BQU87WUFDeEQzQyxjQUFjLEdBQUcsRUFBRTtZQUNuQkMsV0FBVyxHQUFHLEVBQUU7WUFFdEIxQixVQUFTLENBQUNpRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQy9PLE9BQU8sQ0FBQyxVQUFBOEgsR0FBRyxFQUFJO2NBQUEsSUFBQXFILG1CQUFBLEVBQUFDLHFCQUFBO2NBQzlDLElBQU1DLGFBQWEsR0FBR3ZILEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztjQUMxRCxJQUFNYSxTQUFTLEdBQUd5QixhQUFhLGFBQWJBLGFBQWEsdUJBQWJBLGFBQWEsQ0FBRTlSLEtBQUs7Y0FDdEMsSUFBTStSLFFBQVEsSUFBQUgsbUJBQUEsR0FBR3JILEdBQUcsQ0FBQ2lGLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFBb0MsbUJBQUEsdUJBQXBDQSxtQkFBQSxDQUFzQzVSLEtBQUs7Y0FDNUQsSUFBTStRLEtBQUssR0FBR2lCLFVBQVUsQ0FBQ0YsYUFBYSxhQUFiQSxhQUFhLGdCQUFBRCxxQkFBQSxHQUFiQyxhQUFhLENBQUVHLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBQUoscUJBQUEsdUJBQWpDQSxxQkFBQSxDQUFtQ0ssWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztjQUMzRixJQUFNNUIsWUFBWSxHQUFHL0YsR0FBRyxDQUFDNkYsT0FBTyxDQUFDRSxZQUFZLElBQUksSUFBSTtjQUVyRCxJQUFJLENBQUNELFNBQVMsSUFBSSxDQUFDMEIsUUFBUSxFQUFFO2NBRTdCLElBQU1ySSxJQUFJLEdBQUc7Z0JBQ1grRyxVQUFVLEVBQUVELFFBQVEsQ0FBQ0gsU0FBUyxDQUFDO2dCQUMvQjBCLFFBQVEsRUFBRUMsVUFBVSxDQUFDRCxRQUFRLENBQUM7Z0JBQzlCaEIsS0FBSyxFQUFFQTtjQUNULENBQUM7Y0FFRCxJQUFJVCxZQUFZLEVBQUU7Z0JBQ2hCNUcsSUFBSSxDQUFDZ0gsYUFBYSxHQUFHRixRQUFRLENBQUNGLFlBQVksQ0FBQztnQkFDM0N0QixjQUFjLENBQUM1SixJQUFJLENBQUNzRSxJQUFJLENBQUM7Y0FDM0IsQ0FBQyxNQUFNO2dCQUNMdUYsV0FBVyxDQUFDN0osSUFBSSxDQUFDc0UsSUFBSSxDQUFDO2NBQ3hCO1lBQ0YsQ0FBQyxDQUFDO1lBRUl3RixPQUFPLEdBQUdoRyxNQUFNLENBQUN5RCxrQkFBa0IsQ0FBQyxDQUFDLENBQUN3RixNQUFNLENBQUMsVUFBQXhJLENBQUM7Y0FBQSxPQUFJQSxDQUFDLENBQUM0RyxXQUFXLElBQUl6RSxVQUFVO1lBQUEsRUFBQztZQUFBdUQsUUFBQSxDQUFBckksSUFBQTtZQUFBcUksUUFBQSxDQUFBM0ssSUFBQTtZQUFBLE9BRzNEME4sS0FBSyxDQUFDLDBCQUEwQixFQUFFO2NBQ3ZEMVAsTUFBTSxFQUFFLE1BQU07Y0FDZDJQLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxrQkFBa0IsRUFBRTtjQUN0QixDQUFDO2NBQ0R6RixJQUFJLEVBQUUwRixJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbkJoQyxXQUFXLEVBQUVDLFFBQVEsQ0FBQzFFLFVBQVUsQ0FBQztnQkFDakMyQyxXQUFXLEVBQVhBLFdBQVc7Z0JBQ1grRCxZQUFZLEVBQUVoQyxRQUFRLENBQUM5QixXQUFXLENBQUM7Z0JBQ25DK0QsWUFBWSxFQUFFakMsUUFBUSxDQUFDN0IsV0FBVyxDQUFDO2dCQUNuQytELFdBQVcsRUFBRTlELFVBQVU7Z0JBQ3ZCK0QsZUFBZSxFQUFFOUQsY0FBYztnQkFDL0JDLEdBQUcsRUFBSEEsR0FBRztnQkFDSEMsTUFBTSxFQUFOQSxNQUFNO2dCQUNONkQsTUFBTSxFQUFFNUQsY0FBYztnQkFDdEI2RCxLQUFLLEVBQUU1RCxXQUFXO2dCQUNsQkMsT0FBTyxFQUFQQTtjQUNGLENBQUM7WUFDSCxDQUFDLENBQUM7VUFBQTtZQW5CSUMsUUFBUSxHQUFBRSxRQUFBLENBQUFyTCxJQUFBO1lBQUFxTCxRQUFBLENBQUEzSyxJQUFBO1lBQUEsT0FxQk95SyxRQUFRLENBQUNwRixJQUFJLENBQUMsQ0FBQztVQUFBO1lBQTlCN0csTUFBTSxHQUFBbU0sUUFBQSxDQUFBckwsSUFBQTtZQUNaLElBQUlkLE1BQU0sQ0FBQ2lKLE1BQU0sS0FBSyxTQUFTLEVBQUU7Y0FDL0JFLE1BQU0sQ0FBQ3NELE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQztjQUNsRDtjQUNBaEgsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDLENBQUNQLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZO2dCQUN6Q2lILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7Y0FDbkIsQ0FBQyxDQUFDLENBQUMzRyxLQUFLLENBQUMsTUFBTSxDQUFDOztjQUVsQjtjQUNBbEQsTUFBTSxDQUFDd0QsZUFBZSxHQUFHLEVBQUU7WUFDN0IsQ0FBQyxNQUFNO2NBQ0xMLE1BQU0sQ0FBQzlJLEtBQUssQ0FBQ0wsTUFBTSxDQUFDOFAsT0FBTyxJQUFJLCtCQUErQixDQUFDO1lBQ2pFO1lBQUMzRCxRQUFBLENBQUEzSyxJQUFBO1lBQUE7VUFBQTtZQUFBMkssUUFBQSxDQUFBckksSUFBQTtZQUFBcUksUUFBQSxDQUFBNEQsRUFBQSxHQUFBNUQsUUFBQTtZQUVEcEQsT0FBTyxDQUFDMUksS0FBSyxDQUFDLGdCQUFnQixFQUFBOEwsUUFBQSxDQUFBNEQsRUFBSyxDQUFDO1lBQ3BDNUcsTUFBTSxDQUFDOUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDO1VBQUM7VUFBQTtZQUFBLE9BQUE4TCxRQUFBLENBQUFsSSxJQUFBO1FBQUE7TUFBQSxHQUFBMkYsT0FBQTtJQUFBLENBRzFEO0lBQUEsaUJBQUFvRyxFQUFBO01BQUEsT0FBQXJHLElBQUEsQ0FBQXBFLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsSUFBQztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBSSxRQUFRLENBQUMyRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xELElBQUk0RyxlQUFlLEdBQUcsS0FBSztFQUUzQixJQUFNQyxjQUFjO0lBQUEsSUFBQUMsS0FBQSxHQUFBL0ssaUJBQUEsZUFBQWpKLG1CQUFBLEdBQUE4RyxJQUFBLENBQUcsU0FBQW1OLFNBQU83SSxFQUFFLEVBQUU4SSxRQUFRO01BQUEsSUFBQXBFLFFBQUEsRUFBQXpGLElBQUEsRUFBQThKLGFBQUE7TUFBQSxPQUFBblUsbUJBQUEsR0FBQXlCLElBQUEsVUFBQTJTLFVBQUFDLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBMU0sSUFBQSxHQUFBME0sU0FBQSxDQUFBaFAsSUFBQTtVQUFBO1lBQUFnUCxTQUFBLENBQUExTSxJQUFBO1lBQUEwTSxTQUFBLENBQUFoUCxJQUFBO1lBQUEsT0FFZjBOLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRTtjQUNsRTFQLE1BQU0sRUFBRSxNQUFNO2NBQ2QyUCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsa0JBQWtCLEVBQUU7Y0FDdEIsQ0FBQztjQUNEekYsSUFBSSxFQUFFMEYsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQUU5SCxFQUFFLEVBQUZBLEVBQUU7Z0JBQUU4SSxRQUFRLEVBQVJBO2NBQVMsQ0FBQztZQUN2QyxDQUFDLENBQUM7VUFBQTtZQVBJcEUsUUFBUSxHQUFBdUUsU0FBQSxDQUFBMVAsSUFBQTtZQUFBMFAsU0FBQSxDQUFBaFAsSUFBQTtZQUFBLE9BU0t5SyxRQUFRLENBQUNwRixJQUFJLENBQUMsQ0FBQztVQUFBO1lBQTVCTCxJQUFJLEdBQUFnSyxTQUFBLENBQUExUCxJQUFBO1lBQUEsS0FDTjBGLElBQUksQ0FBQ2lHLE9BQU87Y0FBQStELFNBQUEsQ0FBQWhQLElBQUE7Y0FBQTtZQUFBO1lBQ2R5TyxlQUFlLEdBQUcsSUFBSTtZQUNsQkssYUFBYSxHQUFHLEVBQUU7WUFBQUUsU0FBQSxDQUFBVCxFQUFBLEdBQ2RNLFFBQVE7WUFBQUcsU0FBQSxDQUFBaFAsSUFBQSxHQUFBZ1AsU0FBQSxDQUFBVCxFQUFBLEtBQ1QsU0FBUyxRQUFBUyxTQUFBLENBQUFULEVBQUEsS0FHVCxTQUFTO1lBQUE7VUFBQTtZQUZaTyxhQUFhLEdBQUcsd0NBQXdDO1lBQUMsT0FBQUUsU0FBQSxDQUFBdlAsTUFBQTtVQUFBO1lBR3pEcVAsYUFBYSxHQUFHLHdDQUF3QztZQUFDLE9BQUFFLFNBQUEsQ0FBQXZQLE1BQUE7VUFBQTtZQUd6RHFQLGFBQWEsR0FBRyx3QkFBd0I7VUFBQztZQUU3Q25ILE1BQU0sQ0FBQ3NELE9BQU8sQ0FBQzZELGFBQWEsQ0FBQztZQUM3QkcsbUJBQW1CLENBQUNsSixFQUFFLEVBQUU4SSxRQUFRLENBQUM7WUFBQ0csU0FBQSxDQUFBaFAsSUFBQTtZQUFBO1VBQUE7WUFFbEMySCxNQUFNLENBQUM5SSxLQUFLLENBQUMsZ0NBQWdDLENBQUM7VUFBQztZQUFBbVEsU0FBQSxDQUFBaFAsSUFBQTtZQUFBO1VBQUE7WUFBQWdQLFNBQUEsQ0FBQTFNLElBQUE7WUFBQTBNLFNBQUEsQ0FBQUUsRUFBQSxHQUFBRixTQUFBO1lBR2pEckgsTUFBTSxDQUFDOUksS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQzlCMEksT0FBTyxDQUFDMUksS0FBSyxDQUFBbVEsU0FBQSxDQUFBRSxFQUFNLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQUYsU0FBQSxDQUFBdk0sSUFBQTtRQUFBO01BQUEsR0FBQW1NLFFBQUE7SUFBQSxDQUV4QjtJQUFBLGdCQWxDS0YsY0FBY0EsQ0FBQVMsR0FBQSxFQUFBQyxHQUFBO01BQUEsT0FBQVQsS0FBQSxDQUFBNUssS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQWtDbkI7O0VBRUQ7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQU1tTCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJbEosRUFBRSxFQUFFc0osV0FBVyxFQUFLO0lBQUEsSUFBQUMscUJBQUEsRUFBQUMscUJBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUE7SUFDL0MsSUFBTS9ILEtBQUssR0FBR3hELFFBQVEsQ0FBQ3dMLGNBQWMsbUJBQUE1SixNQUFBLENBQW1CQyxFQUFFLENBQUUsQ0FBQztJQUM3RCxJQUFNNEosTUFBTSxHQUFHakksS0FBSyxDQUFDb0QsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUNuRCxJQUFJLENBQUM2RSxNQUFNLEVBQUU7SUFFYixJQUFNQyxlQUFlLEdBQUdsSSxLQUFLLENBQUNvRCxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDcEUsSUFBTStFLGVBQWUsR0FBR25JLEtBQUssQ0FBQ29ELGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNwRSxJQUFNZ0Ysa0JBQWtCLEdBQUdwSSxLQUFLLENBQUNvRCxhQUFhLENBQUMsa0NBQWtDLENBQUM7SUFFbEYsSUFBTWQsV0FBVyxHQUFHNEYsZUFBZSxhQUFmQSxlQUFlLGdCQUFBTixxQkFBQSxHQUFmTSxlQUFlLENBQUV0VSxLQUFLLGNBQUFnVSxxQkFBQSx1QkFBdEJBLHFCQUFBLENBQXdCMUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsSUFBTTNDLFdBQVcsR0FBRzRGLGVBQWUsYUFBZkEsZUFBZSxnQkFBQU4scUJBQUEsR0FBZk0sZUFBZSxDQUFFdlUsS0FBSyxjQUFBaVUscUJBQUEsdUJBQXRCQSxxQkFBQSxDQUF3QjNDLElBQUksQ0FBQyxDQUFDO0lBQ2xELElBQU1tRCxjQUFjLElBQUFQLHFCQUFBLEdBQUdNLGtCQUFrQixhQUFsQkEsa0JBQWtCLGdCQUFBTCxzQkFBQSxHQUFsQkssa0JBQWtCLENBQUV4VSxLQUFLLGNBQUFtVSxzQkFBQSx1QkFBekJBLHNCQUFBLENBQTJCN0MsSUFBSSxDQUFDLENBQUMsY0FBQTRDLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksRUFBRTtJQUU5RCxJQUFJUSxXQUFXLEdBQUcsRUFBRTtJQUVwQixJQUFJWCxXQUFXLEtBQUssU0FBUyxJQUFJckYsV0FBVyxJQUFJQyxXQUFXLElBQUlELFdBQVcsS0FBS0MsV0FBVyxFQUFFO01BQzFGK0YsV0FBVyx5R0FBQWxLLE1BQUEsQ0FFVUMsRUFBRSxzQ0FBQUQsTUFBQSxDQUNBaUssY0FBYyw0REFHcEM7SUFDSCxDQUFDLE1BQU0sSUFBSVYsV0FBVyxLQUFLLE1BQU0sRUFBRTtNQUNqQ1csV0FBVyx3RkFBQWxLLE1BQUEsQ0FDNERDLEVBQUUsc0RBR3hFO0lBQ0g7SUFFQTRKLE1BQU0sQ0FBQ3pELFNBQVMsR0FBRzhELFdBQVc7RUFDaEMsQ0FBQztFQUdEOUwsUUFBUSxDQUFDMkQsZ0JBQWdCLENBQUMsT0FBTztJQUFBLElBQUFvSSxLQUFBLEdBQUFyTSxpQkFBQSxlQUFBakosbUJBQUEsR0FBQThHLElBQUEsQ0FBRSxTQUFBeU8sU0FBTzdILENBQUM7TUFBQSxJQUFBOEgsR0FBQSxFQUFBcEssRUFBQSxFQUFBcUssWUFBQSxFQUFBQyxJQUFBLEVBQUFDLFFBQUEsRUFBQUMsR0FBQSxFQUFBL1IsTUFBQSxFQUFBa0osS0FBQSxFQUFBOEksS0FBQSxFQUFBQyxTQUFBLEVBQUFDLElBQUEsRUFBQUMsT0FBQTtNQUFBLE9BQUFoVyxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBd1UsVUFBQUMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF2TyxJQUFBLEdBQUF1TyxTQUFBLENBQUE3USxJQUFBO1VBQUE7WUFDbkNtUSxHQUFHLEdBQUc5SCxDQUFDLENBQUNDLE1BQU0sQ0FBQ3NDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFBQSxJQUNqQ3VGLEdBQUc7Y0FBQVUsU0FBQSxDQUFBN1EsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBNlEsU0FBQSxDQUFBcFIsTUFBQTtVQUFBO1lBRUZzRyxFQUFFLEdBQUdvSyxHQUFHLENBQUN6RSxPQUFPLENBQUMzRixFQUFFO1lBQUEsS0FFckJvSyxHQUFHLENBQUMvSixTQUFTLENBQUN5RSxRQUFRLENBQUMsYUFBYSxDQUFDO2NBQUFnRyxTQUFBLENBQUE3USxJQUFBO2NBQUE7WUFBQTtZQUN2QzBPLGNBQWMsQ0FBQzNJLEVBQUUsRUFBRSxTQUFTLENBQUM7WUFBQyxPQUFBOEssU0FBQSxDQUFBcFIsTUFBQTtVQUFBO1lBQUEsS0FJNUIwUSxHQUFHLENBQUMvSixTQUFTLENBQUN5RSxRQUFRLENBQUMsYUFBYSxDQUFDO2NBQUFnRyxTQUFBLENBQUE3USxJQUFBO2NBQUE7WUFBQTtZQUNqQ29RLFlBQVksR0FBR3RFLFFBQVEsQ0FBQ3FFLEdBQUcsQ0FBQ3pFLE9BQU8sQ0FBQ3ZPLElBQUksRUFBRSxFQUFFLENBQUM7WUFDN0NrVCxJQUFJLEdBQUduTSxRQUFRLENBQUM0RyxhQUFhLDhCQUFBaEYsTUFBQSxDQUE2QkMsRUFBRSxRQUFJLENBQUM7WUFBQSxNQUVuRXFLLFlBQVksS0FBSyxDQUFDO2NBQUFTLFNBQUEsQ0FBQTdRLElBQUE7Y0FBQTtZQUFBO1lBQUEsSUFDZnFRLElBQUk7Y0FBQVEsU0FBQSxDQUFBN1EsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBNlEsU0FBQSxDQUFBcFIsTUFBQSxXQUFTa0ksTUFBTSxDQUFDOUksS0FBSyxDQUFDLHNCQUFzQixDQUFDO1VBQUE7WUFDaER5UixRQUFRLEdBQUcsSUFBSVEsUUFBUSxDQUFDVCxJQUFJLENBQUM7WUFBQVEsU0FBQSxDQUFBdk8sSUFBQTtZQUFBdU8sU0FBQSxDQUFBN1EsSUFBQTtZQUFBLE9BR2YwTixLQUFLLENBQUMsMkJBQTJCLEVBQUU7Y0FDbkQxUCxNQUFNLEVBQUUsTUFBTTtjQUNka0ssSUFBSSxFQUFFb0k7WUFDUixDQUFDLENBQUM7VUFBQTtZQUhJQyxHQUFHLEdBQUFNLFNBQUEsQ0FBQXZSLElBQUE7WUFBQXVSLFNBQUEsQ0FBQTdRLElBQUE7WUFBQSxPQUlZdVEsR0FBRyxDQUFDbEwsSUFBSSxDQUFDLENBQUM7VUFBQTtZQUF6QjdHLE1BQU0sR0FBQXFTLFNBQUEsQ0FBQXZSLElBQUE7WUFDWmQsTUFBTSxDQUFDaUosTUFBTSxLQUFLLFNBQVMsSUFDdEJFLE1BQU0sQ0FBQ3NELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFbUQsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxJQUM1RDFHLE1BQU0sQ0FBQzlJLEtBQUssQ0FBQ0wsTUFBTSxDQUFDOFAsT0FBTyxJQUFJLGlCQUFpQixDQUFDO1lBQUN1QyxTQUFBLENBQUE3USxJQUFBO1lBQUE7VUFBQTtZQUFBNlEsU0FBQSxDQUFBdk8sSUFBQTtZQUFBdU8sU0FBQSxDQUFBdEMsRUFBQSxHQUFBc0MsU0FBQTtZQUV0RHRKLE9BQU8sQ0FBQzFJLEtBQUssQ0FBQWdTLFNBQUEsQ0FBQXRDLEVBQUksQ0FBQztZQUNsQjVHLE1BQU0sQ0FBQzlJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztVQUFDO1lBQUFnUyxTQUFBLENBQUE3USxJQUFBO1lBQUE7VUFBQTtZQUdyQzBILEtBQUssR0FBR3hELFFBQVEsQ0FBQ3dMLGNBQWMscUJBQUE1SixNQUFBLENBQXFCQyxFQUFFLENBQUUsQ0FBQztZQUMvRCxJQUFJMkIsS0FBSyxFQUFFO2NBQ1R6RCxDQUFDLENBQUN5RCxLQUFLLENBQUMsQ0FBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN4QixDQUFDLE1BQU07Y0FDTEMsTUFBTSxDQUFDOUksS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQ3BDO1VBQUM7WUFBQSxPQUFBZ1MsU0FBQSxDQUFBcFIsTUFBQTtVQUFBO1lBQUEsS0FPRDBRLEdBQUcsQ0FBQy9KLFNBQVMsQ0FBQ3lFLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztjQUFBZ0csU0FBQSxDQUFBN1EsSUFBQTtjQUFBO1lBQUE7WUFDN0NxUSxLQUFJLEdBQUduTSxRQUFRLENBQUM0RyxhQUFhLDhCQUFBaEYsTUFBQSxDQUE2QkMsRUFBRSxRQUFJLENBQUM7WUFBQSxJQUNsRXNLLEtBQUk7Y0FBQVEsU0FBQSxDQUFBN1EsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBNlEsU0FBQSxDQUFBcFIsTUFBQTtVQUFBO1lBQ0g2USxTQUFRLEdBQUcsSUFBSVEsUUFBUSxDQUFDVCxLQUFJLENBQUM7WUFBQVEsU0FBQSxDQUFBdk8sSUFBQTtZQUFBdU8sU0FBQSxDQUFBN1EsSUFBQTtZQUFBLE9BR2YwTixLQUFLLENBQUMsMkJBQTJCLEVBQUU7Y0FDbkQxUCxNQUFNLEVBQUUsTUFBTTtjQUNka0ssSUFBSSxFQUFFb0k7WUFDUixDQUFDLENBQUM7VUFBQTtZQUhJQyxJQUFHLEdBQUFNLFNBQUEsQ0FBQXZSLElBQUE7WUFBQXVSLFNBQUEsQ0FBQTdRLElBQUE7WUFBQSxPQUlZdVEsSUFBRyxDQUFDbEwsSUFBSSxDQUFDLENBQUM7VUFBQTtZQUF6QjdHLE9BQU0sR0FBQXFTLFNBQUEsQ0FBQXZSLElBQUE7WUFDWmQsT0FBTSxDQUFDaUosTUFBTSxLQUFLLFNBQVMsSUFDdEJFLE1BQU0sQ0FBQ3NELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFbUQsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxJQUM1RDFHLE1BQU0sQ0FBQzlJLEtBQUssQ0FBQ0wsT0FBTSxDQUFDOFAsT0FBTyxJQUFJLGlCQUFpQixDQUFDO1lBQUN1QyxTQUFBLENBQUE3USxJQUFBO1lBQUE7VUFBQTtZQUFBNlEsU0FBQSxDQUFBdk8sSUFBQTtZQUFBdU8sU0FBQSxDQUFBM0IsRUFBQSxHQUFBMkIsU0FBQTtZQUV0RHRKLE9BQU8sQ0FBQzFJLEtBQUssQ0FBQWdTLFNBQUEsQ0FBQTNCLEVBQUksQ0FBQztZQUNsQnZILE1BQU0sQ0FBQzlJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBZ1MsU0FBQSxDQUFBcE8sSUFBQTtRQUFBO01BQUEsR0FBQXlOLFFBQUE7SUFBQSxDQUdoRDtJQUFBLGlCQUFBYSxHQUFBO01BQUEsT0FBQWQsS0FBQSxDQUFBbE0sS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxJQUFDO0VBR0ZHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2tELEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZO0lBQzFDLElBQUlzSCxlQUFlLEVBQUU7TUFDbkJMLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDbkI7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQXBLLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNpRCxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVa0IsQ0FBQyxFQUFFO0VBQzdDLElBQUlBLENBQUMsQ0FBQ2pOLEdBQUcsS0FBSyxPQUFPLEVBQUU7SUFDckJpTixDQUFDLENBQUMySSxjQUFjLENBQUMsQ0FBQztJQUVsQixJQUFNQyxJQUFJLEdBQUdoTixDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BCLElBQU1pTixRQUFRLEdBQUdELElBQUksQ0FBQ2hQLEdBQUcsQ0FBQyxDQUFDLENBQUMySyxJQUFJLENBQUMsQ0FBQztJQUNsQyxJQUFNdUUsTUFBTSxHQUFHRixJQUFJLENBQUNyRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRXJDLElBQU13RyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ2hELElBQU1DLFFBQVEsR0FBR0gsTUFBTSxDQUFDRSxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFFeEQsSUFBTUUsT0FBTyxHQUFHLENBQUMvTSxNQUFNLENBQUNnTixhQUFhLElBQUksRUFBRSxFQUFFSCxJQUFJLENBQUMsVUFBQWpGLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNoQyxHQUFHLEtBQUs4RyxRQUFRO0lBQUEsRUFBQztJQUUxRSxJQUFJSyxPQUFPLEVBQUU7TUFDWEgsSUFBSSxDQUFDblAsR0FBRyxDQUFDc1AsT0FBTyxDQUFDdEssR0FBRyxDQUFDO01BQ3JCcUssUUFBUSxDQUFDRyxLQUFLLENBQUMsQ0FBQztNQUVoQixJQUFNQyxRQUFRLEdBQUduTSxLQUFLLENBQUNDLE9BQU8sQ0FBQytMLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLEdBQUdKLE9BQU8sQ0FBQ0ksT0FBTyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDO01BRXJGRCxRQUFRLENBQUMzVCxPQUFPLENBQUMsVUFBQWtILENBQUMsRUFBSTtRQUNwQnFNLFFBQVEsQ0FBQ00sTUFBTSxDQUFDM04sQ0FBQyxDQUFDLFVBQVUsRUFBRTtVQUM1QjNJLEtBQUssRUFBRTJKLENBQUM7VUFDUm9HLElBQUksRUFBRXBHO1FBQ1IsQ0FBQyxDQUFDLENBQUM7TUFDTCxDQUFDLENBQUM7TUFFRixJQUFJeU0sUUFBUSxDQUFDelEsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QnFRLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FDdEJDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FDN0JBLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7TUFDN0MsQ0FBQyxNQUFNO1FBQ0xSLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FDdkJDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FDekJBLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7TUFDdEM7SUFDRixDQUFDLE1BQU07TUFDTFYsSUFBSSxDQUFDblAsR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUNacVAsUUFBUSxDQUFDRyxLQUFLLENBQUMsQ0FBQztNQUNoQjlKLE1BQU0sQ0FBQzlJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQztJQUNuRDtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBQ0ZxRixRQUFRLENBQUMyRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xENUQsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ2lELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVWtCLENBQUMsRUFBRTtJQUNqQyxJQUFNMEosTUFBTSxHQUFHOU4sQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQ3BDLElBQU0rTixPQUFPLEdBQUcvTixDQUFDLENBQUMsd0JBQXdCLENBQUM7SUFFM0MsSUFBSUEsQ0FBQyxDQUFDb0UsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ3NDLE9BQU8sQ0FBQ29ILE9BQU8sQ0FBQyxDQUFDL1EsTUFBTSxFQUFFO01BQ3JDOFEsTUFBTSxDQUFDRSxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUMsTUFFSSxJQUFJLENBQUNoTyxDQUFDLENBQUNvRSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDc0MsT0FBTyxDQUFDbUgsTUFBTSxDQUFDLENBQUM5USxNQUFNLEVBQUU7TUFDMUM4USxNQUFNLENBQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDdkI7RUFDSixDQUFDLENBQUM7RUFDRmpPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tELEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsVUFBVWtCLENBQUMsRUFBRTtJQUNqRUEsQ0FBQyxDQUFDMkksY0FBYyxDQUFDLENBQUM7SUFFbEIsSUFBTWpMLEVBQUUsR0FBRzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFJLENBQUNlLEVBQUUsRUFBRTtNQUNMNEIsTUFBTSxDQUFDQyxPQUFPLENBQUMsc0NBQXNDLENBQUM7TUFDdEQ7SUFDSjtJQUNBLElBQUk7TUFDQSxJQUFNckQsR0FBRyxHQUFHTyxPQUFPLENBQUNDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLE1BQU0sR0FBR2dCLEVBQUU7TUFDMUV2QixNQUFNLENBQUMyTixJQUFJLENBQUM1TixHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxPQUFPcEksR0FBRyxFQUFFO01BQ1ZvTCxPQUFPLENBQUMxSSxLQUFLLENBQUMscUNBQXFDLEVBQUUxQyxHQUFHLENBQUM7TUFDekR3TCxNQUFNLENBQUM5SSxLQUFLLENBQUMseURBQXlELENBQUM7SUFDM0U7RUFDSixDQUFDLENBQUM7RUFDRm9GLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tELEVBQUUsQ0FBQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsVUFBVWtCLENBQUMsRUFBRTtJQUNoRUEsQ0FBQyxDQUFDMkksY0FBYyxDQUFDLENBQUM7SUFFbEIsSUFBTWpMLEVBQUUsR0FBRzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFJLENBQUNlLEVBQUUsRUFBRTtNQUNMNEIsTUFBTSxDQUFDQyxPQUFPLENBQUMscUNBQXFDLENBQUM7TUFDckQ7SUFDSjtJQUNBLElBQUk7TUFDQSxJQUFNckQsR0FBRyxHQUFHTyxPQUFPLENBQUNDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLE1BQU0sR0FBR2dCLEVBQUU7TUFDekV2QixNQUFNLENBQUMyTixJQUFJLENBQUM1TixHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxPQUFPcEksR0FBRyxFQUFFO01BQ1ZvTCxPQUFPLENBQUMxSSxLQUFLLENBQUMscUNBQXFDLEVBQUUxQyxHQUFHLENBQUM7TUFDekR3TCxNQUFNLENBQUM5SSxLQUFLLENBQUMseURBQXlELENBQUM7SUFDM0U7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDanBCVztBQUNiLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxXQUFXLDZHQUF3QztBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnQ0FBZ0M7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ3RCVztBQUNiLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxXQUFXLDZHQUF3QztBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhCQUE4Qjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7OztBQ3RCVztBQUNiLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCwyQkFBMkIsbUJBQU8sQ0FBQyx5R0FBc0M7QUFDekUsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCw0QkFBNEIsOElBQXVEOztBQUVuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7O0FBRW5FO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyx1SEFBOEM7O0FBRTVEO0FBQ0E7QUFDQSxJQUFJLDhCQUE4QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUUzRDtBQUNBO0FBQ0EsSUFBSSxpREFBaUQ7QUFDckQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNSWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsMkZBQStCOztBQUV2RDtBQUNBO0FBQ0EsSUFBSSw2Q0FBNkM7QUFDakQ7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vdXZlbWVudC9nZXN0aW9uX2NvbW1hbmRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB0YWJsZSA9ICQoXCIjY29tbWFuZGVUYWJsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiB3aW5kb3cuZnJlbmNoSnNvblVybCxcclxuICAgICAgcHJvY2Vzc2luZzpcclxuICAgICAgICAnPGkgc3R5bGU9XCJjb2xvcjojNzU5M2FlOyBtYXJnaW4tdG9wOjEwMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZToyNXB4ICFpbXBvcnRhbnQ7XCIgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggZmEtZndcIj48L2k+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+PC9zcGFuPiAnLFxyXG4gICAgfSxcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzIwLCA1MCwgMTAwLCAyMDBdLFxyXG4gICAgICBbMjAsIDUwLCAxMDAsIDIwMF0sXHJcbiAgICBdLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBhamF4OiB7XHJcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZShcImFwcF9mZXRjaF9jb21tYW5kZXNcIiksXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbiAgICAgICAgZC5zdGFydCA9IGQuc3RhcnQgfHwgMDtcclxuICAgICAgICBkLmxlbmd0aCA9IGQubGVuZ3RoIHx8IDE1O1xyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU3JjOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIHdpbmRvdy5nbG9iYWxBY3Rpb25zID0gQXJyYXkuaXNBcnJheShqc29uLmFjdGlvbnMpXHJcbiAgICAgICAgICA/IGpzb24uYWN0aW9uc1xyXG4gICAgICAgICAgOiBPYmplY3QudmFsdWVzKGpzb24uYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGpzb24uZGF0YTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7IG5hbWU6IFwiZC5pZFwiLCBkYXRhOiBcImlkXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZC5jb2RlXCIsXHJcbiAgICAgICAgZGF0YTogXCJjb21tYW5kZV9jb2RlXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDAuNnJlbTsgY29sb3I6ICM3NTkzYWU7IHBhZGRpbmc6IDA7XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2RldGFpbHNDb21tYW5kZSR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImQuY3JlYXRlZFwiLFxyXG4gICAgICAgIGRhdGE6IFwiZGF0ZV9jb21tYW5kZVwiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KFwiREQvTU0vWVlZWSBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImQuZGVzY3JpcHRpb25cIiwgZGF0YTogXCJkZXNjcmlwdGlvblwiICwgXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLWxlZnQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcImRlbS5kZXNpZ25hdGlvbkFjY2Vzc1wiLCBkYXRhOiBcImRlbWFuZGV1clwiLFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1sZWZ0LWFsaWduXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmFtZTogXCJyZWMuZGVzaWduYXRpb25BY2Nlc3NcIiwgZGF0YTogXCJyZWNlcHRldXJcIixcclxuICAgICAgICBjcmVhdGVkQ2VsbDogZnVuY3Rpb24gKHRkKSB7XHJcbiAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwiZm9yY2UtbGVmdC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwiZC5pcHBcIiwgZGF0YTogXCJpcHBfcGF0aWVudFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJkLm5vbVBhdGllbnRcIiwgZGF0YTogXCJub21QYXRpZW50XCIsXHJcbiAgICAgICAgY3JlYXRlZENlbGw6IGZ1bmN0aW9uICh0ZCkge1xyXG4gICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImZvcmNlLWxlZnQtYWxpZ25cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxfbW9udGFudF90dGNcIixcclxuICAgICAgICBkYXRhOiBcInRvdGFsX21vbnRhbnRfdHRjXCIsXHJcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgPyBOdW1iZXIoZGF0YSkudG9Mb2NhbGVTdHJpbmcoXCJmci1GUlwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBcIjAsMDBcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWRDZWxsOiBmdW5jdGlvbiAodGQpIHtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJmb3JjZS1yaWdodC1hbGlnblwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5hbWU6IFwibml2ZWF1X3VyZ2VuY2VcIiwgZGF0YTogXCJuaXZlYXVfdXJnZW5jZVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJzdGF0dXMuZGVzaWduYXRpb25cIiwgZGF0YTogXCJjbV9zdGF0dXNcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJhY3Rpb25zXCIsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHZhciBhY3Rpb25zSHRtbCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwibWVudUFjdGlvbnMgZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIiBpZD1cIicgK1xyXG4gICAgICAgICAgICBkYXRhLmlkICtcclxuICAgICAgICAgICAgJ1wiPjwvaT4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLWNvbnRlbnQgZGl2TWVudVwiIGlkPVwiZGl2TWVudScgK1xyXG4gICAgICAgICAgICBkYXRhLmlkICtcclxuICAgICAgICAgICAgJ1wiPic7XHJcblxyXG4gICAgICAgICAgd2luZG93Lmdsb2JhbEFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnNIdG1sICs9IGBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke2FjdGlvbi5jbGFzc05hbWV9IGRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiR7ZGF0YS5pZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjJHthY3Rpb24uaWROYW1lfSR7ZGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke2FjdGlvbi5pY29ufSBtZW51SWNvblwiPjwvaT4gJHthY3Rpb24ubm9tfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+YDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGFjdGlvbnNIdG1sICs9IFwiPC9kaXY+PC9kaXY+XCI7XHJcbiAgICAgICAgICByZXR1cm4gYWN0aW9uc0h0bWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdC1jb21tYW5kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY29tbWFuZGVJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gIGNvbnN0IG1vZGFsU2VsZWN0b3IgPSBgI2VkaXRDb21tYW5kZSR7Y29tbWFuZGVJZH1gO1xyXG5cclxuICBpZiAoIWNvbW1hbmRlSWQgfHwgISQobW9kYWxTZWxlY3RvcikubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJNb2RhbCBub3QgZm91bmQgb3IgSUQgbWlzc2luZ1wiLCB7IGNvbW1hbmRlSWQsIG1vZGFsU2VsZWN0b3IgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGF0dXMgPSAkKG1vZGFsU2VsZWN0b3IpLmRhdGEoXCJzdGF0dXNcIik7IFxyXG5cclxuICBpZiAoc3RhdHVzID09PSA5KSB7XHJcbiAgICAkKG1vZGFsU2VsZWN0b3IpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9hc3RyLndhcm5pbmcoXCJJbXBvc3NpYmxlIGRlIG1vZGlmaWVyIGNldHRlIGNvbW1hbmRlLiBFbGxlIG4nZXN0IHBsdXMgbW9kaWZpYWJsZS5cIik7XHJcbiAgICBcclxuICB9XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5kZXRhaWxzLWNvbW1hbmRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjb21tYW5kZUlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgY29uc3QgbW9kYWxTZWxlY3RvciA9IGAjZGV0YWlsc0NvbW1hbmRlJHtjb21tYW5kZUlkfWA7XHJcblxyXG4gIGlmICghY29tbWFuZGVJZCB8fCAhJChtb2RhbFNlbGVjdG9yKS5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2FybihcIiBNb2RhbCBub3QgZm91bmQgb3IgSUQgbWlzc2luZ1wiLCB7XHJcbiAgICAgIGNvbW1hbmRlSWQsXHJcbiAgICAgIG1vZGFsU2VsZWN0b3IsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgJChtb2RhbFNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL2VkaXQgY29tbWFuZGUgbW9kYWxcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgcHJvZHVpdHMgPSB3aW5kb3cuUFJPRFVJVFMgfHwgW107XHJcbiAgd2luZG93LmRlbGV0ZWRQcm9kdWl0cyA9IFtdO1xyXG4gIHdpbmRvdy5nZXREZWxldGVkUHJvZHVpdHMgPSAoKSA9PiB3aW5kb3cuZGVsZXRlZFByb2R1aXRzO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbiwgLmZhLXBsdXMnKTtcclxuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgcm93ID0gdGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICBjb25zdCBtb2RhbCA9IHRhcmdldC5jbG9zZXN0KCcubW9kYWwnKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWVkaXQtbGluZScpKSB7XHJcbiAgICAgIHJvdy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWxlY3QnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLnF1YW50aXR5LWlucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZWRpdC1saW5lJyk/LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLmJ0bi1kZWxldGUtbGluZScpPy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2F2ZS1saW5lJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2F2ZS1saW5lJykpIHtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlbGVjdCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eS1pbnB1dCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZWRpdC1saW5lJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICByb3cucXVlcnlTZWxlY3RvcignLmJ0bi1kZWxldGUtbGluZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2F2ZS1saW5lJyk/LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcygnUHJvZHVpdCBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tZGVsZXRlLWxpbmUnKSkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiAnQ29uZmlybWVyIGxhIHN1cHByZXNzaW9uJyxcclxuICAgICAgICB0ZXh0OiAnVm91bGV6LXZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyIGNlIHByb2R1aXQgPycsXHJcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPdWksIHN1cHByaW1lcicsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0FubnVsZXInXHJcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICBjb25zdCBjb21tYW5kZUlkID0gbW9kYWwuZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnN0IHByb2R1aXRJZCA9IHJvdy5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgY29uc3QgY29tbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuY29tbWFuZGVsZ0lkO1xyXG5cclxuICAgICAgICAgIGlmIChjb21tYW5kZWxnSWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmRlbGV0ZWRQcm9kdWl0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBjb21tYW5kZV9pZDogcGFyc2VJbnQoY29tbWFuZGVJZCksXHJcbiAgICAgICAgICAgICAgcHJvZHVpdF9pZDogcGFyc2VJbnQocHJvZHVpdElkKSxcclxuICAgICAgICAgICAgICBjb21tYW5kZWxnX2lkOiBwYXJzZUludChjb21tYW5kZWxnSWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdQcm9kdWl0IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbmV3IHByb2R1Y3Qgcm93XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtcGx1cycpKSB7XHJcbiAgICAgIGNvbnN0IHRhYmxlQm9keSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XHJcbiAgICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgICBuZXdSb3cuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcHJvZHVjdC1zZWxlY3RcIj5cclxuICAgICAgICAgICAgJHtwcm9kdWl0cy5tYXAocCA9PiBgPG9wdGlvbiB2YWx1ZT1cIiR7cC5pZH1cIiBkYXRhLXByaXg9XCIke3AucHJpY2V9XCI+JHtwLm5hbWV9PC9vcHRpb24+YCkuam9pbignJyl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHF1YW50aXR5LWlucHV0XCIgbWluPVwiMVwiIHZhbHVlPVwiMVwiPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc2F2ZS1uZXctbGluZVwiIHRpdGxlPVwiRW5yZWdpc3RyZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zYXZlIHRleHQtc3VjY2Vzc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIG5ld2x5IGFkZGVkIHByb2R1Y3RcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tc2F2ZS1uZXctbGluZScpKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RTZWxlY3QgPSByb3cucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0Jyk7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSByb3cucXVlcnlTZWxlY3RvcignLnF1YW50aXR5LWlucHV0Jyk7XHJcblxyXG4gICAgICBjb25zdCBzZWxlY3RlZElkID0gcHJvZHVjdFNlbGVjdC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSBwcm9kdWN0U2VsZWN0Lm9wdGlvbnNbcHJvZHVjdFNlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG5cclxuICAgICAgcHJvZHVjdFNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHF1YW50aXR5SW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcm93LnF1ZXJ5U2VsZWN0b3IoJ3RkOmxhc3QtY2hpbGQnKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1lZGl0LWxpbmVcIiB0aXRsZT1cIk1vZGlmaWVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXQgdGV4dC1wcmltYXJ5XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVsZXRlLWxpbmVcIiB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaCB0ZXh0LWRhbmdlclwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNhdmUtbGluZSBkLW5vbmVcIiB0aXRsZT1cIkVucmVnaXN0cmVyXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNhdmUgdGV4dC1zdWNjZXNzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ05vdXZlYXUgcHJvZHVpdCBham91dMOpIGF2ZWMgc3VjY8Oocy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXNhdmUtZWRpdCcpKSB7XHJcbiAgICAgIGNvbnN0IGNvbW1hbmRlSWQgPSBtb2RhbC5kYXRhc2V0LmlkO1xyXG4gICAgICBjb25zdCB0YWJsZUJvZHkgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ25vbV9wYXRpZW50JywgJ2Rvc3NpZXJfcGF0aWVudCcsICdpcHAnXTtcclxuICAgICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgICByZXF1aXJlZEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtmaWVsZH1cIl1gKTtcclxuICAgICAgICBpZiAoIWlucHV0IHx8ICFpbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihgTGUgY2hhbXAgXCIke2ZpZWxkLnJlcGxhY2UoJ18nLCAnICcpfVwiIGVzdCByZXF1aXMuYCk7XHJcbiAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJvd3MgPSB0YWJsZUJvZHkucXVlcnlTZWxlY3RvckFsbCgndHInKTtcclxuICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiVmV1aWxsZXogYWpvdXRlciBhdSBtb2lucyB1biBwcm9kdWl0LlwiKTtcclxuICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgcHJvZHVjdHNcclxuICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFtdO1xyXG4gICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSByb3cucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0Jyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RJZHMuaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJVbiBwcm9kdWl0IGVzdCBzw6lsZWN0aW9ubsOpIHBsdXNpZXVycyBmb2lzLlwiKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvZHVjdElkcy5wdXNoKHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChoYXNFcnJvcikgcmV0dXJuO1xyXG5cclxuXHJcblxyXG4gICAgICBpZiAoIXRhYmxlQm9keSkge1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcignRXJyZXVyIGludGVybmUgOiB0YWJsZWF1IGludHJvdXZhYmxlLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJyk/LnZhbHVlO1xyXG4gICAgICBjb25zdCBkZW1hbmRldXJJZCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVtYW5kZXVyX2lkXCJdJyk/LnZhbHVlO1xyXG4gICAgICBjb25zdCByZWNlcHRldXJJZCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicmVjZXB0ZXVyX2lkXCJdJyk/LnZhbHVlO1xyXG4gICAgICBjb25zdCBub21QYXRpZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJub21fcGF0aWVudFwiXScpPy52YWx1ZTtcclxuICAgICAgY29uc3QgZG9zc2llclBhdGllbnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRvc3NpZXJfcGF0aWVudFwiXScpPy52YWx1ZTsgXHJcbiAgICAgIGNvbnN0IGlwcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaXBwXCJdJyk/LnZhbHVlO1xyXG4gICAgICBjb25zdCB1cmdlbnQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInVyZ2VudFwiXScpPy5jaGVja2VkO1xyXG4gICAgICBjb25zdCBlZGl0ZWRQcm9kdWl0cyA9IFtdO1xyXG4gICAgICBjb25zdCBuZXdQcm9kdWl0cyA9IFtdO1xyXG5cclxuICAgICAgdGFibGVCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJykuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSByb3cucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VsZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVpdElkID0gc2VsZWN0RWxlbWVudD8udmFsdWU7XHJcbiAgICAgICAgY29uc3QgcXVhbnRpdGUgPSByb3cucXVlcnlTZWxlY3RvcignLnF1YW50aXR5LWlucHV0Jyk/LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcGFyc2VGbG9hdChzZWxlY3RFbGVtZW50Py5zZWxlY3RlZE9wdGlvbnNbMF0/LmdldEF0dHJpYnV0ZSgnZGF0YS1wcml4JykpIHx8IDA7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZGVsZ0lkID0gcm93LmRhdGFzZXQuY29tbWFuZGVsZ0lkIHx8IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVpdElkIHx8ICFxdWFudGl0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgcHJvZHVpdF9pZDogcGFyc2VJbnQocHJvZHVpdElkKSxcclxuICAgICAgICAgIHF1YW50aXRlOiBwYXJzZUZsb2F0KHF1YW50aXRlKSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kZWxnSWQpIHtcclxuICAgICAgICAgIGRhdGEuY29tbWFuZGVsZ19pZCA9IHBhcnNlSW50KGNvbW1hbmRlbGdJZCk7XHJcbiAgICAgICAgICBlZGl0ZWRQcm9kdWl0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdQcm9kdWl0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVkID0gd2luZG93LmdldERlbGV0ZWRQcm9kdWl0cygpLmZpbHRlcihkID0+IGQuY29tbWFuZGVfaWQgPT0gY29tbWFuZGVJZCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9tb3V2ZW1lbnQvZWRpdC1jb21tYW5kZScsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGNvbW1hbmRlX2lkOiBwYXJzZUludChjb21tYW5kZUlkKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGRlbWFuZGV1cl9pZDogcGFyc2VJbnQoZGVtYW5kZXVySWQpLFxyXG4gICAgICAgICAgICByZWNlcHRldXJfaWQ6IHBhcnNlSW50KHJlY2VwdGV1cklkKSxcclxuICAgICAgICAgICAgbm9tX3BhdGllbnQ6IG5vbVBhdGllbnQsXHJcbiAgICAgICAgICAgIGRvc3NpZXJfcGF0aWVudDogZG9zc2llclBhdGllbnQsXHJcbiAgICAgICAgICAgIGlwcCxcclxuICAgICAgICAgICAgdXJnZW50LFxyXG4gICAgICAgICAgICBlZGl0ZWQ6IGVkaXRlZFByb2R1aXRzLFxyXG4gICAgICAgICAgICBhZGRlZDogbmV3UHJvZHVpdHMsXHJcbiAgICAgICAgICAgIGRlbGV0ZWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnQ29tbWFuZGUgc2F1dmVnYXJkw6llIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBtb2RhbCBhbmQgcmVsb2FkIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICQobW9kYWwpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IFxyXG4gICAgICAgICAgICB9KS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgIC8vIFJlc2V0IHRoZSBkZWxldGVkIHByb2R1Y3RzIGFycmF5XHJcbiAgICAgICAgICB3aW5kb3cuZGVsZXRlZFByb2R1aXRzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZSB8fCAnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05ldHdvcmsgZXJyb3I6JywgZXJyKTtcclxuICAgICAgICB0b2FzdHIuZXJyb3IoJ0VycmV1ciByw6lzZWF1IGxvcnMgZGUgbGEgc2F1dmVnYXJkZS4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSBwb3NpdGlvbiBvZiBjb21tYW5kZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHBvc2l0aW9uQ2hhbmdlZCA9IGZhbHNlOyBcclxuXHJcbiAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSBhc3luYyAoaWQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvbW91dmVtZW50L3VwZGF0ZS1wb3NpdGlvbi1jb21tYW5kZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcG9zaXRpb24gfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgcG9zaXRpb25DaGFuZ2VkID0gdHJ1ZTsgXHJcbiAgICAgICAgbGV0IGFjdGlvbk1lc3NhZ2UgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlICd2YWxpZMOpZSc6XHJcbiAgICAgICAgICAgIGFjdGlvbk1lc3NhZ2UgPSAnTGEgY29tbWFuZGUgYSDDqXTDqSB2YWxpZMOpZSBhdmVjIHN1Y2PDqHMuJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdHw6luw6lyw6llJzpcclxuICAgICAgICAgICAgYWN0aW9uTWVzc2FnZSA9ICdMYSBjb21tYW5kZSBhIMOpdMOpIGfDqW7DqXLDqWUgYXZlYyBzdWNjw6hzLic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYWN0aW9uTWVzc2FnZSA9ICdNaXNlIMOgIGpvdXIgZWZmZWN0dcOpZS4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2FzdHIuc3VjY2VzcyhhY3Rpb25NZXNzYWdlKTtcclxuICAgICAgICB1cGRhdGVGb290ZXJCdXR0b25zKGlkLCBwb3NpdGlvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3RyLmVycm9yKFwiRXJyZXVyIHLDqXNlYXUuXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCB1cGRhdGVGb290ZXJCdXR0b25zID0gKGlkLCBuZXdQb3NpdGlvbikgPT4ge1xyXG4gIC8vICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGV0YWlsc0NvbW1hbmRlJHtpZH1gKTtcclxuICAvLyAgIGNvbnN0IGZvb3RlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb290ZXInKTtcclxuXHJcbiAgLy8gICBpZiAoIWZvb3RlcikgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgZGVtYW5kZXVyU2VsZWN0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZW1hbmRldXJfaWRcIl0nKTtcclxuICAvLyAgIGNvbnN0IHJlY2VwdGV1clNlbGVjdCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicmVjZXB0ZXVyX2lkXCJdJyk7XHJcblxyXG4gIC8vICAgY29uc3QgZGVtYW5kZXVySWQgPSBkZW1hbmRldXJTZWxlY3Q/LnZhbHVlO1xyXG4gIC8vICAgY29uc3QgcmVjZXB0ZXVySWQgPSByZWNlcHRldXJTZWxlY3Q/LnZhbHVlO1xyXG4gIC8vICAgY29uc29sZS5sb2coYERlbWFuZGV1ciBJRDogJHtkZW1hbmRldXJJZH0sIFJlY2VwdGV1ciBJRDogJHtyZWNlcHRldXJJZH1gKTtcclxuXHJcbiAgLy8gICBsZXQgYnV0dG9uc0hUTUwgPSAnJztcclxuXHJcbiAgLy8gICBpZiAobmV3UG9zaXRpb24gPT09ICd2YWxpZMOpZScgJiYgZGVtYW5kZXVySWQgJiYgcmVjZXB0ZXVySWQgJiYgZGVtYW5kZXVySWQgPT09IHJlY2VwdGV1cklkKSB7XHJcbiAgLy8gICAgIGJ1dHRvbnNIVE1MID0gYFxyXG4gIC8vICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1nZW5lcmVyXCIgZGF0YS1pZD1cIiR7aWR9XCI+XHJcbiAgLy8gICAgICAgICBHw6luw6lyZXJcclxuICAvLyAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgYDtcclxuICAvLyAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPT09ICdDcsOpZScpIHtcclxuICAvLyAgICAgYnV0dG9uc0hUTUwgPSBgXHJcbiAgLy8gICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXZhbGlkZXJcIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAvLyAgICAgICAgIFZhbGlkZXJcclxuICAvLyAgICAgICA8L2J1dHRvbj5cclxuICAvLyAgICAgYDtcclxuICAvLyAgIH1cclxuICAvLyAgIGZvb3Rlci5pbm5lckhUTUwgPSBidXR0b25zSFRNTDtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVGb290ZXJCdXR0b25zID0gKGlkLCBuZXdQb3NpdGlvbikgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGV0YWlsc0NvbW1hbmRlJHtpZH1gKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb290ZXInKTtcclxuICAgIGlmICghZm9vdGVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZGVtYW5kZXVyU2VsZWN0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZW1hbmRldXJfaWRcIl0nKTtcclxuICAgIGNvbnN0IHJlY2VwdGV1clNlbGVjdCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicmVjZXB0ZXVyX2lkXCJdJyk7XHJcbiAgICBjb25zdCB0eXBlQ29tbWFuZGVIaWRkZW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInR5cGVfY29tbWFuZGVfaWRfaGlkZGVuXCJdJyk7XHJcblxyXG4gICAgY29uc3QgZGVtYW5kZXVySWQgPSBkZW1hbmRldXJTZWxlY3Q/LnZhbHVlPy50cmltKCk7XHJcbiAgICBjb25zdCByZWNlcHRldXJJZCA9IHJlY2VwdGV1clNlbGVjdD8udmFsdWU/LnRyaW0oKTtcclxuICAgIGNvbnN0IHR5cGVDb21tYW5kZUlkID0gdHlwZUNvbW1hbmRlSGlkZGVuPy52YWx1ZT8udHJpbSgpID8/ICcnO1xyXG5cclxuICAgIGxldCBidXR0b25zSFRNTCA9ICcnO1xyXG5cclxuICAgIGlmIChuZXdQb3NpdGlvbiA9PT0gJ3ZhbGlkw6llJyAmJiBkZW1hbmRldXJJZCAmJiByZWNlcHRldXJJZCAmJiBkZW1hbmRldXJJZCA9PT0gcmVjZXB0ZXVySWQpIHtcclxuICAgICAgYnV0dG9uc0hUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWdlbmVyZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1pZD1cIiR7aWR9XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cIiR7dHlwZUNvbW1hbmRlSWR9XCI+XHJcbiAgICAgICAgICBHw6luw6lyZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPT09ICdDcsOpZScpIHtcclxuICAgICAgYnV0dG9uc0hUTUwgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXZhbGlkZXJcIiBkYXRhLWlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgIFZhbGlkZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYnV0dG9uc0hUTUw7XHJcbiAgfTtcclxuXHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcclxuICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWQgPSBidG4uZGF0YXNldC5pZDtcclxuXHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi12YWxpZGVyXCIpKSB7XHJcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGlkLCBcInZhbGlkw6llXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tZ2VuZXJlclwiKSkge1xyXG4gICAgICBjb25zdCB0eXBlQ29tbWFuZGUgPSBwYXJzZUludChidG4uZGF0YXNldC50eXBlLCAxMCk7XHJcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGl2cmFpc29uLWZvcm1bZGF0YS1pZD1cIiR7aWR9XCJdYCk7XHJcblxyXG4gICAgICBpZiAodHlwZUNvbW1hbmRlID09PSAzKSB7XHJcbiAgICAgICAgaWYgKCFmb3JtKSByZXR1cm4gdG9hc3RyLmVycm9yKFwiRm9ybXVsYWlyZSBtYW5xdWFudC5cIik7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9tb3V2ZW1lbnQvc2F2ZS1saXZyYWlzb25cIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgIHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgID8gKHRvYXN0ci5zdWNjZXNzKFwiTGl2cmFpc29uIGVucmVnaXN0csOpZS5cIiksIGxvY2F0aW9uLnJlbG9hZCgpKVxyXG4gICAgICAgICAgICA6IHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZSB8fCBcIkVycmV1ciBzZXJ2ZXVyLlwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBkZSBjb21tdW5pY2F0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJlcGFyZXJMaXZyYWlzb24ke2lkfWApO1xyXG4gICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgJChtb2RhbCkubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJNb2RhbCBpbnRyb3V2YWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIC5idG4tY29uZmlybWVyLWxpdnJhaXNvblxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY29uZmlybWVyLWxpdnJhaXNvblwiKSkge1xyXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpdnJhaXNvbi1mb3JtW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gICAgICBpZiAoIWZvcm0pIHJldHVybjtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL21vdXZlbWVudC9zYXZlLWxpdnJhaXNvblwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgPyAodG9hc3RyLnN1Y2Nlc3MoXCJMaXZyYWlzb24gZW5yZWdpc3Ryw6llLlwiKSwgbG9jYXRpb24ucmVsb2FkKCkpXHJcbiAgICAgICAgICA6IHRvYXN0ci5lcnJvcihyZXN1bHQubWVzc2FnZSB8fCBcIkVycmV1ciBzZXJ2ZXVyLlwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHRvYXN0ci5lcnJvcihcIkVycmV1ciBkZSBjb21tdW5pY2F0aW9uLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4kKCcubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHBvc2l0aW9uQ2hhbmdlZCkge1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBIYW5kbGUgSVBQIGlucHV0IGluIG1vZGFsc1xyXG4kKGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgXCIuaXBwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCAkaXBwID0gJCh0aGlzKTtcclxuICAgIGNvbnN0IGlwcFZhbHVlID0gJGlwcC52YWwoKS50cmltKCk7XHJcbiAgICBjb25zdCAkbW9kYWwgPSAkaXBwLmNsb3Nlc3QoXCIubW9kYWxcIik7XHJcblxyXG4gICAgY29uc3QgJG5vbSA9ICRtb2RhbC5maW5kKCdbbmFtZT1cIm5vbV9wYXRpZW50XCJdJyk7XHJcbiAgICBjb25zdCAkZG9zc2llciA9ICRtb2RhbC5maW5kKCdbbmFtZT1cImRvc3NpZXJfcGF0aWVudFwiXScpO1xyXG5cclxuICAgIGNvbnN0IHBhdGllbnQgPSAod2luZG93LmluZm9zX3BhdGllbnQgfHwgW10pLmZpbmQocCA9PiBwLmlwcCA9PT0gaXBwVmFsdWUpO1xyXG5cclxuICAgIGlmIChwYXRpZW50KSB7XHJcbiAgICAgICRub20udmFsKHBhdGllbnQubm9tKTtcclxuICAgICAgJGRvc3NpZXIuZW1wdHkoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRvc3NpZXJzID0gQXJyYXkuaXNBcnJheShwYXRpZW50LmRvc3NpZXIpID8gcGF0aWVudC5kb3NzaWVyIDogW3BhdGllbnQuZG9zc2llcl07XHJcblxyXG4gICAgICBkb3NzaWVycy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICRkb3NzaWVyLmFwcGVuZCgkKCc8b3B0aW9uPicsIHtcclxuICAgICAgICAgIHZhbHVlOiBkLFxyXG4gICAgICAgICAgdGV4dDogZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZG9zc2llcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgJGRvc3NpZXIucHJvcChcInJlYWRvbmx5XCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiNlOWVjZWZcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGRvc3NpZXIucHJvcChcInJlYWRvbmx5XCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJG5vbS52YWwoJycpO1xyXG4gICAgICAkZG9zc2llci5lbXB0eSgpO1xyXG4gICAgICB0b2FzdHIuZXJyb3IoXCJBdWN1biBwYXRpZW50IHRyb3V2w6kgYXZlYyBjZXQgSVBQXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCAkcG9wdXAgPSAkKCcjaW1wcmVzc2lvblBvcHVwJyk7XHJcbiAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKCcudG9nZ2xlSW1wcmVzc2lvblBvcHVwJyk7XHJcblxyXG4gICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgkdG9nZ2xlKS5sZW5ndGgpIHtcclxuICAgICAgICAgICRwb3B1cC5mYWRlVG9nZ2xlKDE1MCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsc2UgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkcG9wdXAuZmFkZU91dCgxNTApO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZ2VuZXJlclBkZkNvbW1hbmRlU29ydGllU3RvY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJJRCBkZSBjb21tYW5kZSBvcnRpZSBTdG9jayBtYW5xdWFudC5cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9leHBvcnRzX2NvbW1hbmRlX2V4cG9ydHMnKSArICc/aWQ9JyArIGlkO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJvdXRlIG5vbiB0cm91dsOpZSBkYW5zIFJvdXRpbmcuanMgOlwiLCBlcnIpO1xyXG4gICAgICAgICAgdG9hc3RyLmVycm9yKFwiUm91dGUgaW50cm91dmFibGUuIEF2ZXotdm91cyBiaWVuIGR1bXDDqSBsZXMgcm91dGVzIEpTID9cIik7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5nZW5lcmVyUGRmRGVtYW5kZVNvcnRpZVN0b2NrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiSUQgZGUgRGVtYW5kZSBvcnRpZSBTdG9jayBtYW5xdWFudC5cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9leHBvcnRzX2RlbWFuZGVfZXhwb3J0cycpICsgJz9pZD0nICsgaWQ7XHJcbiAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUm91dGUgbm9uIHRyb3V2w6llIGRhbnMgUm91dGluZy5qcyA6XCIsIGVycik7XHJcbiAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJSb3V0ZSBpbnRyb3V2YWJsZS4gQXZlei12b3VzIGJpZW4gZHVtcMOpIGxlcyByb3V0ZXMgSlMgP1wiKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIElURVJBVE9SID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5XG4gIC8vIE1TIEVkZ2UgMTgtIGJyb2tlbiB3aXRoIGJveGVkIHN5bWJvbHNcbiAgfHwgKElURVJBVE9SICYmICFmYWlscyhmdW5jdGlvbiAoKSB7ICRwYXJzZUZsb2F0KE9iamVjdChJVEVSQVRPUikpOyB9KSk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgY2hhckF0KHRyaW1tZWRTdHJpbmcsIDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgaGV4ID0gL15bKy1dPzB4L2k7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGhleC5leGVjKTtcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMlxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VJbnQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGV4ZWMoaGV4LCBTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKCRwcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBpbiBzb21lIElFIHZlcnNpb25zLCBgcHJvcGVydHlJc0VudW1lcmFibGVgIHJldHVybnMgaW5jb3JyZWN0IHJlc3VsdCBvbiBpbnRlZ2VyIGtleXNcbi8vIG9mIGBudWxsYCBwcm90b3R5cGUgb2JqZWN0c1xudmFyIElFX0JVRyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxuICB2YXIgTyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIE9bMl0gPSAyO1xuICByZXR1cm4gIXByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIDIpO1xufSk7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBJRV9XT1JLQVJPVU5EID0gSUVfQlVHICYmIG9iamVjdEdldFByb3RvdHlwZU9mKE8pID09PSBudWxsO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgKElFX1dPUktBUk9VTkQgPyBrZXkgaW4gTyA6IHByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIGtleSkpKSB7XG4gICAgICAgIHB1c2gocmVzdWx0LCBUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4gIHZhbHVlczogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLnZhbHVlcztcblxuLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKE8pIHtcbiAgICByZXR1cm4gJHZhbHVlcyhPKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9ICRwYXJzZUludCB9LCB7XG4gIHBhcnNlSW50OiAkcGFyc2VJbnRcbn0pO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGFuZ3VhZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJmcmVuY2hKc29uVXJsIiwicHJvY2Vzc2luZyIsImxlbmd0aE1lbnUiLCJzZXJ2ZXJTaWRlIiwiYWpheCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGEiLCJkIiwiZHJhdyIsInN0YXJ0IiwiZGF0YVNyYyIsImpzb24iLCJnbG9iYWxBY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiYWN0aW9ucyIsIm9yZGVyIiwiY29sdW1ucyIsInJlbmRlciIsInJvdyIsImNvbmNhdCIsImlkIiwibW9tZW50IiwiZm9ybWF0IiwiY3JlYXRlZENlbGwiLCJ0ZCIsImNsYXNzTGlzdCIsImFkZCIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwiYWN0aW9uc0h0bWwiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpZE5hbWUiLCJpY29uIiwibm9tIiwiYXV0b1dpZHRoIiwib24iLCJjb21tYW5kZUlkIiwiYXR0ciIsIm1vZGFsU2VsZWN0b3IiLCJjb25zb2xlIiwid2FybiIsInN0YXR1cyIsIm1vZGFsIiwidG9hc3RyIiwid2FybmluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9kdWl0cyIsIlBST0RVSVRTIiwiZGVsZXRlZFByb2R1aXRzIiwiZ2V0RGVsZXRlZFByb2R1aXRzIiwiYm9keSIsIl9yZWYiLCJfY2FsbGVlIiwiZSIsInRhcmdldCIsIl9yb3ckcXVlcnlTZWxlY3RvciIsIl9yb3ckcXVlcnlTZWxlY3RvcjIiLCJfcm93JHF1ZXJ5U2VsZWN0b3IzIiwiX3JvdyRxdWVyeVNlbGVjdG9yNCIsIl9yb3ckcXVlcnlTZWxlY3RvcjUiLCJfcm93JHF1ZXJ5U2VsZWN0b3I2IiwidGFibGVCb2R5IiwibmV3Um93IiwicHJvZHVjdFNlbGVjdCIsInF1YW50aXR5SW5wdXQiLCJzZWxlY3RlZElkIiwicHJvZHVjdE5hbWUiLCJfbW9kYWwkcXVlcnlTZWxlY3RvciIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yMiIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yMyIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yNCIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yNSIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yNiIsIl9tb2RhbCRxdWVyeVNlbGVjdG9yNyIsIl90YWJsZUJvZHkiLCJyZXF1aXJlZEZpZWxkcyIsImhhc0Vycm9yIiwicm93cyIsInByb2R1Y3RJZHMiLCJkZXNjcmlwdGlvbiIsImRlbWFuZGV1cklkIiwicmVjZXB0ZXVySWQiLCJub21QYXRpZW50IiwiZG9zc2llclBhdGllbnQiLCJpcHAiLCJ1cmdlbnQiLCJlZGl0ZWRQcm9kdWl0cyIsIm5ld1Byb2R1aXRzIiwiZGVsZXRlZCIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNsb3Nlc3QiLCJjb250YWlucyIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlZCIsInJlbW92ZSIsInN1Y2Nlc3MiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJpc0NvbmZpcm1lZCIsImRhdGFzZXQiLCJwcm9kdWl0SWQiLCJjb21tYW5kZWxnSWQiLCJjb21tYW5kZV9pZCIsInBhcnNlSW50IiwicHJvZHVpdF9pZCIsImNvbW1hbmRlbGdfaWQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibWFwIiwicCIsInByaWNlIiwiam9pbiIsImFwcGVuZENoaWxkIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJmaWVsZCIsImlucHV0IiwidHJpbSIsInJlcGxhY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0IiwiaW5jbHVkZXMiLCJjaGVja2VkIiwiX3JvdyRxdWVyeVNlbGVjdG9yNyIsIl9zZWxlY3RFbGVtZW50JHNlbGVjdCIsInNlbGVjdEVsZW1lbnQiLCJxdWFudGl0ZSIsInBhcnNlRmxvYXQiLCJzZWxlY3RlZE9wdGlvbnMiLCJnZXRBdHRyaWJ1dGUiLCJmaWx0ZXIiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVtYW5kZXVyX2lkIiwicmVjZXB0ZXVyX2lkIiwibm9tX3BhdGllbnQiLCJkb3NzaWVyX3BhdGllbnQiLCJlZGl0ZWQiLCJhZGRlZCIsImxvY2F0aW9uIiwicmVsb2FkIiwibWVzc2FnZSIsInQwIiwiX3giLCJwb3NpdGlvbkNoYW5nZWQiLCJ1cGRhdGVQb3NpdGlvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJwb3NpdGlvbiIsImFjdGlvbk1lc3NhZ2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1cGRhdGVGb290ZXJCdXR0b25zIiwidDEiLCJfeDIiLCJfeDMiLCJuZXdQb3NpdGlvbiIsIl9kZW1hbmRldXJTZWxlY3QkdmFsdSIsIl9yZWNlcHRldXJTZWxlY3QkdmFsdSIsIl90eXBlQ29tbWFuZGVIaWRkZW4kdiIsIl90eXBlQ29tbWFuZGVIaWRkZW4kdjIiLCJnZXRFbGVtZW50QnlJZCIsImZvb3RlciIsImRlbWFuZGV1clNlbGVjdCIsInJlY2VwdGV1clNlbGVjdCIsInR5cGVDb21tYW5kZUhpZGRlbiIsInR5cGVDb21tYW5kZUlkIiwiYnV0dG9uc0hUTUwiLCJfcmVmMyIsIl9jYWxsZWUzIiwiYnRuIiwidHlwZUNvbW1hbmRlIiwiZm9ybSIsImZvcm1EYXRhIiwicmVzIiwiX2Zvcm0iLCJfZm9ybURhdGEiLCJfcmVzIiwiX3Jlc3VsdCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIkZvcm1EYXRhIiwiX3g0IiwicHJldmVudERlZmF1bHQiLCIkaXBwIiwiaXBwVmFsdWUiLCIkbW9kYWwiLCIkbm9tIiwiZmluZCIsIiRkb3NzaWVyIiwicGF0aWVudCIsImluZm9zX3BhdGllbnQiLCJlbXB0eSIsImRvc3NpZXJzIiwiZG9zc2llciIsImFwcGVuZCIsInByb3AiLCJjc3MiLCIkcG9wdXAiLCIkdG9nZ2xlIiwiZmFkZVRvZ2dsZSIsImZhZGVPdXQiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==