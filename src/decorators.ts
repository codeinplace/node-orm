import "reflect-metadata";

interface EntityOptions {
    database: string;
    table: string;
}

const requiredMetadataKey = Symbol("required");

export function Entity(options: EntityOptions): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
        console.log('target', target);
        Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
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
