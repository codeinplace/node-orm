type KeysOfNonType<TTarget, TValue> = {
    [K in keyof TTarget]: TTarget[K] extends TValue ? never : K
}[keyof TTarget];

interface FindAllOptions<Entity = any> {
    select?: (keyof Entity)[];
    relations?: KeysOfNonType<Entity, number|string|Date>[];
}

import { connection } from './connection';

export class Repository<Entity extends Object> {

    constructor(model) {
        console.log('model', model);
        console.log('metadata', model.metadata);
    }

    findAll(options?: FindAllOptions<Entity>) {
        // connection.then((conn) => {
        //     conn.query(`SELECT * FROM ${}`)
        //         .then((data) => {
        //             console.log(data);
        //         });
        // })
    }

    findOne() {
        return 1;
    }

    findById(id: number) {
        return 100;
    }
}
