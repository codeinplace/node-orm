import { mysql } from './connection';
import { EntityOptions } from './EntityOptions';
import { FindAllOptions } from './findOptions';

export class Repository<Entity extends Object> {
    
    metadata: EntityOptions;

    constructor(model: any) {
        this.metadata = Reflect.getMetadata('model:info', model);
    }

    async find(options?: FindAllOptions<Entity>): Promise<Entity> {
        const { database, table } = this.metadata;
        const fields = options?.select;
        const where = options?.where;
        const values = [];
        const whereConditions = where ? Object.entries(where)
            .map(([k, v]) => {
                values.push(v);
                return `${k} = ?`;
            })
            .join(' AND ') : undefined;

        const sql = `
            SELECT ${fields ? fields.join(', ') : '*'}
            FROM ${database}.${table}
            ${where ? `WHERE ${whereConditions}` : ''}
        `.replace(/(\r\n|\n|\r| +(?= ))/gm, '').trim();

        console.log(sql, values)
        const [result] = await mysql.query(sql, values);
        return result;
    }

    findOne() {
        return 1;
    }

    findById(id: number) {
        return 100;
    }
}
