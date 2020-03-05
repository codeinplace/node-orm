import { createPool } from '@codeinplace/node-mysql';
import { PoolConnection } from '@codeinplace/node-mysql';

var instance: PoolConnection;

if (!instance) {
    instance = createPool({
        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'test',
    });
}

export { instance as mysql };
