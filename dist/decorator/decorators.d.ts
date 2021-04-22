import { Annotation } from 'reflect-annotations';
import 'reflect-metadata';
export declare class _AutoSubmodelGetProperty {
    private _submodels;
    private _name;
    constructor(views: Array<string>, name: string);
    get submodels(): Array<string>;
    get name(): string;
}
declare const AutoSubmodelGetProperty: (submodels: Array<string>, name: string) => Annotation<_AutoSubmodelGetProperty>;
export { AutoSubmodelGetProperty };
