"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleDocument = void 0;
var MultipleDocument = (function () {
    function MultipleDocument(data) {
        this.data = data;
    }
    Object.defineProperty(MultipleDocument.prototype, "Cantidad", {
        get: function () {
            return this.data.Cantidad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultipleDocument.prototype, "FechaCreacion", {
        get: function () {
            return this.data.FechaCreacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultipleDocument.prototype, "Documents", {
        get: function () {
            return this.data.Listado;
        },
        enumerable: false,
        configurable: true
    });
    return MultipleDocument;
}());
exports.MultipleDocument = MultipleDocument;
