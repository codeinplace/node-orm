import { mysql } from './connection';
import { EntityOptions } from './EntityOptions';
import { FindAllOptions } from './findOptions';
import { createQuery } from './helpers';
import { truthy } from './utils';
import { Store } from './Store';

export class Repository<Entity extends Object> {
    
    metadata: EntityOptions;

    constructor(model: any) {
        this.metadata = Reflect.getMetadata('model:info', model);
        console.log(Store.getData());
    }

    async find(options?: FindAllOptions<Entity>): Promise<any> {
        const { database, table } = this.metadata;
        const fields = truthy(options?.select);
        const where = truthy(options?.where);
        const relations = truthy(options?.relations);
        const values = [];

        const fieldsSQL = fields ? fields.join(', ') : '*';

        const whereSQL = where ? 'WHERE ' + Object.entries(where)
            .map(([k, v]) => {
                values.push(v);
                return `${k} = ?`;
            })
            .join(' AND ') : '';

        const innerSQL = relations ? '' : '';

        const sql = createQuery(`
            SELECT ${fieldsSQL}
            ${innerSQL}
            FROM ${database}.${table}
            ${whereSQL}
        `);

        // console.log(sql, values);
        console.log(this.metadata);
        const result = await mysql.query(sql, values);
        return result;
    }

    findOne() {
        return 1;
    }

    findById(id: number) {
        return 100;
    }
}
