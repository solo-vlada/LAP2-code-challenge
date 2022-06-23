// Step 1 - Impprting postgress
const {Pool} = require('pg');
const pool = new Pool();

module.exports = pool;
