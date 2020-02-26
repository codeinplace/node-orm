import { createPool, MySQL2Pool } from 'mysql2';

var instance: MySQL2Pool;

if (!instance) {
    instance = createPool({
        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'test',
    }).promise();
}

export { instance as mysql };
