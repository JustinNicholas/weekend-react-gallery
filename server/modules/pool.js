// pool setup info

const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    PORT: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

module.exports = pool;