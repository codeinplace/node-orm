import { RelationOptions } from './RelationsOptions';

export function BelongsTo(
    typeRef: (type?: any) => Function,
    options: RelationOptions | string,
): PropertyDecorator {
    return function(target: any, propertyKey: string) {
        // Storage.set(target.constructor.name, {
        //     relation: 'belongs-to',
        //     relations: {  }
        // });
    };
}
