import { EntityOptions } from "./EntityOptions";
import { Store } from './Store';
import { OneToOneOptions } from './RelationsOptions';

export function Entity(options: EntityOptions): Function {
    return function (target: any) {
        const { database, table } = options;
        Store.set(target.name, { database, table });
        // console.log('target', target);
        // console.log('propertyKey', propertyKey);
        // console.log('descriptor', descriptor);
    }
}

export function Column(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
    }
}

export function PrimaryColumn(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
    }
}

// https://github.com/TypeStrong/ts-node/issues/495
export function OneToOne(typeRef?: (type?: any) => Function): PropertyDecorator {
    return function (target: any, propertyKey: string) {
        Store.set(target.constructor.name, {
            relations: {
                [propertyKey]: { typeRef }
            }
        });
    }
}
