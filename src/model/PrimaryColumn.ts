import { Storage } from '../Storage';

export function PrimaryColumn(): Function {
    return function(target: any, propertyKey: string) {
        const className = target.constructor.name;
        Storage.createClass(className);
        Storage.change((draft) => {
            draft[className].columns.push({
                name: propertyKey,
                type: 'primaryKey',
            });
        });
    };
}
