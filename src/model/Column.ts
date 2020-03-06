import { Storage } from '../Storage';

export function Column(): Function {
    return function(target: any, propertyKey: string) {
        const className = target.constructor.name;
        Storage.createClass(className);
        Storage.change((draft) => {
            draft[className].columns.push({
                name: propertyKey,
                type: 'column',
            });
        });
    };
}
