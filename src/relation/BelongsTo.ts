import { RelationOptions } from './RelationsOptions';
import { Storage } from '../Storage';

export function BelongsTo(
    typeRef: (type?: any) => Function,
    options: RelationOptions | string,
): PropertyDecorator {
    return function(target: any, propertyKey: string) {
        const className = target.constructor.name;
        Storage.createClass(className);
        Storage.change((draft) => {
            draft[className].relations = 'belongs-to';
            
        });
    };
}
