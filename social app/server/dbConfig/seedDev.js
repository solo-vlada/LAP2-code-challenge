// Step 2 - Createing a database 
const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(_dirname + '/dev_seeds.sql').toString();

db.query(seeds, () => console.log('Dev database seeded'));
