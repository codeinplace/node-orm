import { RelationOptions } from './RelationsOptions';

export function HasOne(
    typeRef: (type?: any) => Function,
    options: RelationOptions,
): PropertyDecorator {
    return function(target: any, propertyKey: string) {};
}
