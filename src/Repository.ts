import { connection } from './connection';
import { EntityOptions } from './EntityOptions';
import { FindAllOptions } from './findOptions';

export class Repository<Entity extends Object> {
    
    metadata: EntityOptions;

    constructor(model: any) {
        this.metadata = Reflect.getMetadata('model:info', model);
    }

    async findAll(options?: FindAllOptions<Entity>): Promise<Entity> {
        const { database, table } = this.metadata;
        const fields = options?.select;

        const sql = `SELECT ${fields ? fields.join() : '*'} FROM ${database}.${table}`;

        console.log('sql', sql);
        
        const conn = await connection;
        return conn.query(sql);
    }

    findOne() {
        return 1;
    }

    findById(id: number) {
        return 100;
    }
}
