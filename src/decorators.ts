import { PropertyDecoratorFactory } from '@loopback/metadata';
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

export interface MyPropertyMetadata {
    column: string;
    references?: string;
}

export function OneToOne(options: MyPropertyMetadata): PropertyDecorator {
    return PropertyDecoratorFactory.createDecorator<MyPropertyMetadata>(
        'meta-relations',
        options,
        { decoratorName: '@OneToOne' }
    );
}
