"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSubmodel = void 0;
var reflect_annotations_1 = require("reflect-annotations");
var decorators_1 = require("./decorator/decorators");
require("reflect-metadata");
var AutoSubmodel = /** @class */ (function () {
    function AutoSubmodel(object) {
        var _this = this;
        this.submodelConfigs = {};
        this.namesOfPropertiesInSubmodel = {};
        this.object = object;
        var annotations = reflect_annotations_1.reflectAnnotations(Object.getPrototypeOf(object).constructor);
        annotations.forEach(function (annotation) {
            var getterName = annotation.name;
            annotation.methodAnnotations.forEach(function (methodAnnotation) {
                if (methodAnnotation instanceof decorators_1._AutoSubmodelGetProperty) {
                    var propertyNameInSubmodel = methodAnnotation.name;
                    if (!(getterName in _this.namesOfPropertiesInSubmodel)) {
                        _this.namesOfPropertiesInSubmodel[getterName] = propertyNameInSubmodel;
                    }
                    methodAnnotation.submodels.forEach(function (submodelName) {
                        var submodelConfig = [];
                        if (submodelName in _this.submodelConfigs) {
                            submodelConfig = _this.submodelConfigs[submodelName];
                        }
                        submodelConfig.push(getterName);
                        _this.submodelConfigs[submodelName] = submodelConfig;
                    });
                }
            });
        });
    }
    AutoSubmodel.GetSubmodel = function (object, nameOfSubmodel) {
        var submodel = new AutoSubmodel(object);
        if (submodel.allSubmodels.indexOf(nameOfSubmodel) != -1) {
            return submodel.getSubmodel(nameOfSubmodel);
        }
        else {
            return null;
        }
    };
    Object.defineProperty(AutoSubmodel.prototype, "allSubmodels", {
        get: function () {
            return Object.getOwnPropertyNames(this.submodelConfigs);
        },
        enumerable: false,
        configurable: true
    });
    AutoSubmodel.prototype.getSubmodel = function (submodelName) {
        var _this = this;
        if (-1 == this.allSubmodels.indexOf(submodelName)) {
            throw new Error("Submodel '" + submodelName + "' do not exist");
        }
        var data = {};
        var submodelData = this.submodelConfigs[submodelName];
        submodelData.forEach(function (propertyName) {
            var name = _this.namesOfPropertiesInSubmodel[propertyName];
            data[name] = _this.object[propertyName]();
        });
        return data;
    };
    return AutoSubmodel;
}());
exports.AutoSubmodel = AutoSubmodel;
