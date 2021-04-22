import {reflectAnnotations} from "reflect-annotations";
import {_AutoSubmodelGetProperty} from "./decorator/decorators";
import 'reflect-metadata';

export class AutoSubmodel {

    public static GetSubmodel(object: any, nameOfSubmodel: string): any {
        let submodel = new AutoSubmodel(object);
        if(submodel.allSubmodels.indexOf(nameOfSubmodel) != -1) {
            return submodel.getSubmodel(nameOfSubmodel);
        } else {
            return null;
        }
    }

    private object: any;
    private submodelConfigs: any = {};
    private namesOfPropertiesInSubmodel: any = {};

    public constructor(object: any) {
        this.object = object;
        let annotations = reflectAnnotations(Object.getPrototypeOf(object).constructor);
        annotations.forEach(annotation => {
            let getterName: string = annotation.name;
            annotation.methodAnnotations.forEach(methodAnnotation => {
                if (methodAnnotation instanceof _AutoSubmodelGetProperty) {
                    let propertyNameInSubmodel = methodAnnotation.name;
                    if(!(getterName in this.namesOfPropertiesInSubmodel)) {
                        this.namesOfPropertiesInSubmodel[getterName] = propertyNameInSubmodel
                    }
                    methodAnnotation.submodels.forEach(submodelName => {
                        let submodelConfig: Array<string> = [];
                        if(submodelName in this.submodelConfigs) {
                            submodelConfig = this.submodelConfigs[submodelName]
                        }
                        submodelConfig.push(getterName);
                        this.submodelConfigs[submodelName] = submodelConfig;
                    })
                }
            })
        });
    }

    public get allSubmodels(): Array<string> {
        return Object.getOwnPropertyNames(this.submodelConfigs);
    }

    public getSubmodel(submodelName: string): any {
        if(-1 == this.allSubmodels.indexOf(submodelName)) {
            throw new Error(`Submodel '${submodelName}' do not exist`);
        }
        let data: any = {}
        let submodelData: Array<string> = this.submodelConfigs[submodelName];
        submodelData.forEach(propertyName => {
            let name = this.namesOfPropertiesInSubmodel[propertyName];
            data[name] = this.object[propertyName]()
        })
        return data;
    }
}