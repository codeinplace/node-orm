import 'reflect-metadata';
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
        // setTimeout(() => {
            let type = typeRef();
            let typeName = type ? type.name : undefined;
            console.log(`Class '${target.constructor.name}' has a field named '${propertyKey}' with type '${typeName}'`);
            debugger;
        // }, 1000);
    }
}
