"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleDocument = void 0;
var SingleDocument = (function () {
    function SingleDocument(data) {
        this.data = data;
    }
    Object.defineProperty(SingleDocument.prototype, "Cantidad", {
        get: function () {
            return this.data.Cantidad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SingleDocument.prototype, "FechaCreacion", {
        get: function () {
            return this.data.FechaCreacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SingleDocument.prototype, "Document", {
        get: function () {
            return this.data.Listado[0];
        },
        enumerable: false,
        configurable: true
    });
    return SingleDocument;
}());
exports.SingleDocument = SingleDocument;
