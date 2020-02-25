import { Repository } from './Repository';

export function Entity(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    }
}

export function Column(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
    }
}

export function PrimaryColumn(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    }
}
