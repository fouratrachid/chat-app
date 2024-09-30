"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '123456',
    database: 'postgres'
});
client.connect();
client.query('SELECT * FROM users', (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end();
});
//# sourceMappingURL=connection.js.map