import { createRequire } from 'module'; 
const require = createRequire(import.meta.url);
const mysql = require('mysql')
const db = mysql.createConnection({
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'crowdfundingcr'
})

export default db