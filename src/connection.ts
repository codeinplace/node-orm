import { createPool } from '@codeinplace/node-mysql';
//TODO: better type import, rename MySQLPromise to Pool type
import { MySQLPromise } from '@codeinplace/node-mysql/dist/MySQLPromise';

var instance: MySQLPromise;

if (!instance) {
    instance = createPool({
        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'test',
    });
}

export { instance as mysql };
