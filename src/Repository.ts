import { mysql } from './connection';
import { FindAllOptions } from './findOptions';
import { createQuery } from './helpers';
import { truthy } from './utils';
import { Storage } from './Storage';

export class Repository<Entity extends Object> {

    model: any;
    storage: {};

    constructor(model: any) {
        this.model = model;
        this.storage = Storage.getAll();
    }

    private select(fields: string[] | undefined): string {
        if (fields) {
            return fields.map((f) => `_.${f}`).join(', ');
        }
        // INNER JOIN pessoa p1 ON p1.id = ex.pessoa
        // INNER JOIN pessoa p2 ON p1.id = ex.empresa
    }

    async find(options?: FindAllOptions<Entity>): Promise<any> {
        const modelInfos: any = Storage.getAll();
        console.log('modelInfos', modelInfos);

        const currentModelInfo = modelInfos[this.model.name];
        const { database, table, columns, relations } = currentModelInfo;
        const fields = truthy(options?.select);
        const where = truthy(options?.where);
        const relationsOpt = truthy(options?.relations);
        const values = [];

        const fieldsSQL = fields ? fields.join(', ') : columns.join(', ');
        if (fields) {
            
        }

        const whereSQL = where ? 'WHERE ' + Object.entries(where)
            .map(([k, v]) => {
                values.push(v);
                return `${k} = ?`;
            })
            .join(' AND ') : '';

        const innerSQL = relationsOpt ? relationsOpt.map((r: string) => {
            if (r in relations) {
                const referencedTableName = modelInfos[relations[r].typeRef().name].table;
                return `LEFT JOIN ${referencedTableName} ON ${referencedTableName}.${relations[r].references} = ${table}.${relations[r].column}`
            }
        })
        .join('\n') : '';

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
