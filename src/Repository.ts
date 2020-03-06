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
        this.storage = Storage.data;
    }

    /**
     * Handle field names, aliases, duplicates and named fields.
     * @param name {string} Current field string
     * @param registeredFields {string[]} All fields in the current model and related models
     */
    private field(name: string, registeredFields?: string[]) {
        let column;
        if (/^(.+\..+\:.+)$/.test(name)) {
            let [table, columnName, alias] = name.split(/[\.\:]/);
            column = `${table}.${columnName} AS ${alias}`;
        } else if (/^(.+\..+)$/.test(name)) {
            let [table, columnName] = name.split('.');
            column = `${table}.${columnName} AS ${table}_${columnName}`;
        } else if (/^(.+\:.+)$/.test(name)) {
            let [columnName, alias] = name.split(':');
            column = `${columnName} AS ${alias}`;
        } else {
            column = name;
        }

        console.log('field:', column);
    }

    private select(fields: string[] | undefined): string {
        const { relations, columns } = this.storage[this.model.name];
        const allowedFields = columns.map((el) => el.name);

        console.log('rel', relations.map((el) => this.storage[el].columns).flat());
        console.log('allowedFields', allowedFields);
        console.log(this.storage);
        debugger;

        const data = fields
            ? fields.map((f: string) => this.field(f))
            : this.storage[this.model.name].columns.map((f: any) => this.field(f.name));

        return data.join(', ');
        // TODO: field alias
        // INNER JOIN pessoa p1 ON p1.id = ex.pessoa
        // INNER JOIN pessoa p2 ON p1.id = ex.empresa
    }

    async find(options?: FindAllOptions<Entity>): Promise<any> {
        const { database, table, columns, relations } = this.storage[this.model.name];
        const fields = truthy(options?.select);
        const where = truthy(options?.where);
        const relationsOpt = truthy(options?.relations);
        const values = [];

        const fieldsSQL = this.select(fields);

        const whereSQL = where
            ? 'WHERE ' +
              Object.entries(where)
                  .map(([k, v]) => {
                      values.push(v);
                      return `${k} = ?`;
                  })
                  .join(' AND ')
            : '';

        const innerSQL = relationsOpt
            ? relationsOpt
                  .map((r: string) => {
                      if (r in relations) {
                          const referencedTableName = this.storage[relations[r].typeRef().name]
                              .table;
                          return `LEFT JOIN ${referencedTableName} ON ${referencedTableName}.${relations[r].references} = ${table}.${relations[r].column}`;
                      }
                  })
                  .join('\n')
            : '';

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
