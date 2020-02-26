const mysql = require('mysql2');

mysql.createPool({}).promise().then((conn) => {});
