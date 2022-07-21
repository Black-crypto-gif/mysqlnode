const express = require('express');
const cors = require('cors');
require('dotenv').config();
const colors = require('colors');
const mysql = require('mysql');
const { query } = require('express');
const multer  = require('multer')



const app = express();

app.use(express.json()); // Used to parse JSON bodies

app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies using qs library
app.use(cors())
app.use((req, res, next)=>{
    console.log(req.path.bgGreen , req.method.bgRed);
    next();
})

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!".bgRed);
  });
  


// initialize server :

app.listen(process.env.PORT, (err) => {
    if(err) throw console.log(err);
    console.log(`SERVER LISTENING ON ${process.env.PORT}`.bgBlue);
})

// Create database and check if it's exist before :
app.get('/db', (req, res, next)=>{
    con.query("CREATE DATABASE users", function (err, result) {
        if (err.sqlMessage){
            console.log('Database exist'.bgYellow);
            res.json({
                "database exist" : " users"
            })
            next();
        }else{
            console.log("Database created".bgBlack);
            res.status(200).json(result);
        }
      });
});

// create a table :
app.get('/table', (req, res)=>{
    const sql = "CREATE TABLE clients (id INTEGER AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), address VARCHAR(255))";
    con.query(sql, (err, result)=>{
        if(err){
            console.table(err.sqlMessage.bgYellow);
            res.json({
                "database" : "nothing was selected"
            })
        }
        else{
            console.log('Table created'.bgGreen);
            res.status(200).json(result);
        }
    })
    
})

// insert to database :
app.get('/insert', (req, res)=>{
    const sql = "INSERT INTO clients (username, password, address) VALUES ('FethiMellsal', 'Fethi078079s5322K','highwaytodsjennah')";
    con.query(sql, (err, result)=>{
        if(err){
            console.table(err.bgYellow);
            res.json({
                "database" : "Nothing happend"
            });
        }else{
            res.status(200).json(result);
            console.log('Success'.bgGreen);
        }
    });
})
// select from database :

app.get('/select', (req, res)=>{
    con.query("SELECT * FROM clients",(err, result, fields)=>{
        if(err){
            console.log(err.bgBlue);
        }
        console.table(result);
        res.json(result);
        // we can also select some data from result
    })
})
app.get('/selectparams', (req, res)=>{
    con.query("SELECT username, address FROM clients", (err, result, fields)=>{
        if (err) throw err;
        console.table(result);
        //console.log(fields)
        console.log(result[5].username)
        res.json(fields)
        
    })
})

// select With a Filter :
app.get('/filter', (req, res, next)=> {

con.query("SELECT * FROM clients WHERE address ='highwaytodsjennah'",(err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result)
    next();
})
})

app.get('/filters', (req, res, next)=> {

con.query("SELECT * FROM clients WHERE address  LIKE 'H%'",(err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result)
    res.json(result)
    next();
})
})

//Escaping Query Values :

app.get('/query', (req, res, next)=>{
    var username = 'FethiMellsal';
    var address = 'highwaytodsjennah';
    var sql = 'SELECT * FROM clients WHERE username = ? OR address = ?';
    con.query(sql, [username, address], function (err, result) {
      if (err) throw err;
      console.log(result);
      next();
    });
})

app.post('/params', (req, res, next)=>{
    const infos = {
        username: req.body.username,
        password: req.body.password,
        address: req.body.address
    }
    console.log(infos)
    const sql = "INSERT INTO clients SET ? "
    con.query(sql, infos, (err, result)=>{
        if(err){
            console.table(err.bgYellow);
            res.json({
                "database" : "Nothing happend"
            });
        }else{
            res.status(200).json(result);
            console.log('Success'.bgGreen);
        }
    });
})

