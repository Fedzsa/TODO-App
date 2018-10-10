var mysql = require('mysql');
var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo_db'
});

con.connect();

module.exports = con;