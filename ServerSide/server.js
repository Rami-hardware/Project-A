const express = require('express');
const path = require ('path');
const db = require("../ServerSide/Database.js")
const bodyParser = require("body-parser") 
const app = express();
app.use('/static',express.static(path.join(__dirname + '/public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('views', '../View');
app.set('view engine', 'pug');
/*db.connection.connect((err)=>{
    if(err) throw err;
    console.log("connected !!!")
})*/
app.get('/' , (req , res) =>{
    res.render("sign");
})
app.post("/signup" , (req,res) =>{
    let name = req.body.Fullname;
    let username = req.body.username;
    let password = req.body.pass;
    let email = req.body.email;
    /*db.connection.query("insert into users values (1224," + `"` + name + `"` + `, "` + email + `" , "` +  password + `" , "`+  username + `" );`,(err)=>{
        if(err) throw err;
        console.log("record is inserted @_@")
    })*/
})
app.post("/signin" , (req,res) =>{
    let username = req.body.username;
    let password = req.body.pass;
    /*db.connection.query('select username,password From users where username ='+ `"` + username + `" and password=`+ `"` + password + `";` ,(err)=>{
        if(err) throw err;
        console.log("user found @_@")
    })*/
})
app.listen(5050,()=>{
    console.log("running in 5050")
})