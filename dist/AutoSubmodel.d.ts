import 'reflect-metadata';
export declare class AutoSubmodel {
    static GetSubmodel(object: any, nameOfSubmodel: string): any;
    private object;
    private submodelConfigs;
    private namesOfPropertiesInSubmodel;
    constructor(object: any);
    get allSubmodels(): Array<string>;
    getSubmodel(submodelName: string): any;
}
