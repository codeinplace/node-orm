import "reflect-metadata";
import { EntityOptions } from "./EntityOptions";

export function Entity(options: EntityOptions): Function {
    return function (target: any) {
        Reflect.defineMetadata('model:info', options, target);
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

export function OneToOne(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    }
}
