import { RelationOptions } from './RelationsOptions';

export function HasMany(
    typeRef: (type?: any) => Function,
    options: RelationOptions | string,
): PropertyDecorator {
    return function(target: any, propertyKey: string) {
        console.log(options);
    };
}
