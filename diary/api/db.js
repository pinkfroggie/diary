import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: readd when starting up again lol,
    database: 'diary',
})