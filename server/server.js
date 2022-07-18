const express = require('express');
const cors = require('cors');
require('dotenv').config();
const colors = require('colors');
const mysql = require('mysql');
const routes = require('./route/routes');
const { query } = require('express');


const app = express();

app.use(express.json());
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
//routes :

app.get('/', routes);
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