import {Annotation, createAnnotationFactory} from 'reflect-annotations'
import 'reflect-metadata';

export class _AutoSubmodelGetProperty {
    private _submodels: Array<string>;
    private _name: string;
    public constructor(views: Array<string>, name: string) {
        this._submodels = views;
        this._name = name;
    }

    get submodels(): Array<string> {
        return this._submodels;
    }

    get name(): string {
        return this._name;
    }
}
const AutoSubmodelGetProperty: (submodels: Array<string>, name: string) => Annotation<_AutoSubmodelGetProperty> = createAnnotationFactory<_AutoSubmodelGetProperty, Array<string>, string>(_AutoSubmodelGetProperty)
export { AutoSubmodelGetProperty }