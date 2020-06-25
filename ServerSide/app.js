const express = require('express');
const path = require ('path');
const db = require("./Database.js")
const mail = require("nodemailer")
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
    let query = "SELECT * From users WHERE username = "+ `"` + username + `"` + " AND password = " + `"` + password + `";`;
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
    let query =  "insert into users (firstName , lastName , email , password , country , city , username) values(" + `"` + f_name + `" , "` + L_name + `" , "` + email1 + `" , "` + pass + `" , "` + country + `" , "` + city + `" , "` + username1 + `");` 
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

app.post('/forget' , (res,req)=>{
    let mail2 = req.body.emai;
    let transport = mail.createTransport({
        service:"outlook",
        auth:{
            user:"dods195@hotmail.com",
            password:""
        }
    })
    let mailOption={
        From: 'dods195@hotmail.com',
        to: mail2,
        subject: "time to change LoL",
        text:"localhost:5050/recovery"
    }
    transport.sendMail(mailOption, (error, info)=>{
        if(error){
            console.log(error)
        }else{
            console.log("email send:" + info.response)
            res.render("signin")
        }
    })
})
exports.run = app;