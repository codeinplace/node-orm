import { createPool } from 'mysql2';

export const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'test'
}).promise();
