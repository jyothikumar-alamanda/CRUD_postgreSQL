const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres", // should be your user name
    password: "Jyothi01!", //should be your password
    database: "test", // data base that you want to create for employees table
    host: "localhost",
    port: 5432    
})

module.exports = pool;
