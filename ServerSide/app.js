const express = require('express');
const path = require ('path');
const db = require("./Database.js")
const nodemailer = require("nodemailer");
const { sign } = require('crypto');
const app = express();
app.use(express.static(__dirname + '/../public'));
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.set('views', 'View');
app.set('view engine', 'pug');

db.connection.connect((err)=>{
    if(err) throw err
    console.log("connected !!!")
})
app.get("/" , (req , res)=>{
    res.render("signin")
})

app.post("/signin",(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let query = "SELECT * From users WHERE username = "
    + `"` + 
    username + 
    `"` + 
    " AND password = " +
     `"` + 
     password +
      `";`;
    db.connection.query(query,(err,result)=>{
        if(result[0].username == "Rami_DNA")
        {
     
            let userdata = [];
            db.connection.query("SELECT * FROM users",(err,rows)=>{
                if(err) throw err;
                let data = [];
                for(let i =0; i < rows.length; i++)
                {
		  		var users = {
                    'id':rows[i].id,
                    'username':rows[i].username,
                    'country':rows[i].country,
                    'City': rows[i].City,
                    'email':rows[i].email
                }
                data.push(users);   
                }
                res.render("dashboard" , {
                    userData:data
                })
                
            })
        }else if(result){
            console.log("market")
        }else if(result.username && result.password == null )
        {
            console.log("Error")
        }else if(!result.username && result.password){
            console.log("not found")
        }

    })
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/reg",(req,res)=>{
    let f_name = req.body.firstname;
    let username1 = req.body.username;
    let pass = req.body.password;
    let country = req.body.contry;
    let L_name = req.body.lastname;
    let email1 = req.body.email;
    let city = req.body.city;
    let query =  
    "insert into users (firstName , lastName , email , password , country , city , username) values("
     + `"` + 
     f_name + 
     `" , "` + 
     L_name + 
     `" , "` + 
     email1 + 
     `" , "` + 
     pass + 
     `" , "` + 
     country + 
     `" , "` + 
     city + 
     `" , "` + 
     username1 + 
     `");` 
    db.connection.query(query,(err)=>{
        if (err) throw err;
        console.log('inserted row');
        res.render("signin")
    })
})
app.get("/signin",(req,res)=>{
    res.render("signin")
})
app.get('/forgetPass',(req,res)=>{
    res.render('forget')
})

app.post('/forget' , (req,res)=>{
    let mail2 = req.body.send;
    let transport = nodemailer.createTransport({
        host: 'outlook.com',
        port: 587,
        auth: {
           user: 'dods195@hotmail.com',
           pass: 'myPass'
        }
    })
    const message = {
        from: 'dods195@hotmail.com', // Sender address
        to: mail2,         // List of recipients
        subject: 'forget password', // Subject line
        html: `
            <h1>hi do you forget you password</h1>
            <br> 
            <p> i know you forget you password so </p>
            <br> 
            <a href="http://localhost:5050/recovery"> reset your password from here</a>
            ` // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
        console.log("email send")  
        res.render("signin")
        }
    });
    
})
app.get('/recovery', (req,res)=>{
    res.render("recovery")
})

app.post("/recover", (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let qurey = 'UPDATE users SET password ="'+password+' " '+' where username = "'+username+' " ;';
    db.connection.query(qurey,(err) =>{
        if(err) throw err;
        console.log("user password updated")
        res.render("signin")
    })
})
exports.run = app;