const mysql = require('mysql');
let con = mysql.createConnection({
    host:"127.0.0.1",
    name:'web app',
    user:"root",
    password:"",
    database:"market"
});
exports.connection  = con;