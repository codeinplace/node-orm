import { EntityOptions } from './ModelOptions';
import { Storage } from '../Storage';

export function Entity(options: EntityOptions): Function {
    return function(target: any) {
        console.log('Entity', target.name);
        const { database, table } = options;
        Storage.change((draft) => {
            draft[target.name].database = database;
            draft[target.name].table = table;
        });
    };
}
