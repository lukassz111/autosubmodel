"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSubmodelGetProperty = exports._AutoSubmodelGetProperty = void 0;
var reflect_annotations_1 = require("reflect-annotations");
require("reflect-metadata");
var _AutoSubmodelGetProperty = /** @class */ (function () {
    function _AutoSubmodelGetProperty(views, name) {
        this._submodels = views;
        this._name = name;
    }
    Object.defineProperty(_AutoSubmodelGetProperty.prototype, "submodels", {
        get: function () {
            return this._submodels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_AutoSubmodelGetProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return _AutoSubmodelGetProperty;
}());
exports._AutoSubmodelGetProperty = _AutoSubmodelGetProperty;
var AutoSubmodelGetProperty = reflect_annotations_1.createAnnotationFactory(_AutoSubmodelGetProperty);
exports.AutoSubmodelGetProperty = AutoSubmodelGetProperty;
