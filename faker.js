const faker = require('faker');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'test',
}).promise();

const userData = [];
const profileData = [];
for (let i = 0; i < 10; i++) {
    userData.push([
        null,
        faker.name.findName(),
        faker.internet.userName(),
        faker.address.streetAddress(),
        null,
        new Date(),
    ]);

    profileData.push([
        null,
        faker.name.jobArea(),
        faker.image.avatar(),
        null
    ]);
};

(async () => {
    await conn.query('INSERT INTO test.user VALUES ?', [userData]);
    await conn.query('INSERT INTO test.profile VALUES ?', [profileData]);
    console.log('Done!');
})();
