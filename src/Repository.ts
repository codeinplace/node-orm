import { mysql } from './connection';
import { FindAllOptions } from './findOptions';
import { createQuery } from './helpers';
import { truthy } from './utils';
import { data } from './Storage';

export class Repository<Entity extends Object> {

    model: any;

    constructor(model: any) {
        this.model = model;
    }

    async find(options?: FindAllOptions<Entity>): Promise<any> {
        const modelInfos = Store.getAll();
        const currentModelInfo = modelInfos[this.model.name];
        const { database, table, relations } = currentModelInfo;
        const fields = truthy(options?.select);
        const where = truthy(options?.where);
        const relationsOpt = truthy(options?.relations);
        const values = [];

        const fieldsSQL = fields ? fields.join(', ') : '*';

        const whereSQL = where ? 'WHERE ' + Object.entries(where)
            .map(([k, v]) => {
                values.push(v);
                return `${k} = ?`;
            })
            .join(' AND ') : '';

        console.log(modelInfos);

        const innerSQL = relationsOpt ? relationsOpt.map((r: string) => {
            if (r in relations) {
                const referencedTableName = modelInfos[relations[r].className].table;
                return `LEFT JOIN ${referencedTableName} ON ${referencedTableName}.${relations[r].column} = ${table}.${'id'}`
            }
        })
        .join('\n') : '';

        console.log('innerSQL', innerSQL);

        const sql = createQuery(`
            SELECT ${fieldsSQL}
            FROM ${database}.${table}
            ${innerSQL}
            ${whereSQL}
        `);

        console.log(sql, values);
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
