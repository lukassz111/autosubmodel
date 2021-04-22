"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSubmodelGetProperty = exports.AutoSubmodel = void 0;
__exportStar(require("reflect-metadata"), exports);
var AutoSubmodel_1 = require("./AutoSubmodel");
Object.defineProperty(exports, "AutoSubmodel", { enumerable: true, get: function () { return AutoSubmodel_1.AutoSubmodel; } });
var decorators_1 = require("./decorator/decorators");
Object.defineProperty(exports, "AutoSubmodelGetProperty", { enumerable: true, get: function () { return decorators_1.AutoSubmodelGetProperty; } });
