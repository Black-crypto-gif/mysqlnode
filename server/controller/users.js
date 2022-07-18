const colors = require('colors');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

//create database :
const dbCreate = (req, res) =>{
    con.query("CREATE DATABASE users", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        res.status(200).json(result);
      });
}


module.exports = {
    dbCreate
}