import { EntityOptions } from './ModelOptions';
import { Storage } from '../Storage';

export function Entity(options: EntityOptions): Function {
    return function(target: any) {
        const { database, table } = options;
        Storage.change((draft) => {
            draft[target.name] = { database, table };
        });

        console.log('Storage.data', Storage.data);
        // debugger;
    };
}
