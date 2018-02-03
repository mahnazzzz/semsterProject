var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'pwpw',
    database: 'testing'

});
module.exports = connection;