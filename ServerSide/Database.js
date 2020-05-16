const mysql = require('mysql');
let con = mysql.createConnection({
    host:"192.168.64.2",
    user:"root",
    password:"",
    database:"market"
});
exports.connection  = con;