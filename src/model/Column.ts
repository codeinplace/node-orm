import { Storage } from '../Storage';

export function Column(): Function {
    return function(target: any, propertyKey: string) {
        // Storage.change((draft) => {
        //     if (draft[target.constructor.name]) {
        //         draft[target.constructor.name]?.columns.push(propertyKey);
        //     }
        // });
        console.log('Storage.data', Storage.data);
        // debugger
    };
}
