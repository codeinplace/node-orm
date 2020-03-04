import 'reflect-metadata';
import { EntityOptions } from "./EntityOptions";
import { data } from './Storage';
import { OneToOneOptions } from './RelationsOptions';

export function Entity(options: EntityOptions): Function {
    return function (target: any) {
        const { database, table } = options;
        data[target.name] = { ...data[target.name], ...{ database, table }};
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
