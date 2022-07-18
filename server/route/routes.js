const express = require('express');
const router = express.Router();
const {
    dbCreate
} = require('../controller/users')


router.get('/', (req, res) => {
    res.status(200).json({
        "Status" : " Connected",
        "Database" : "Connected",
        "Note " : "Your API is Ready to connect with Mysql Server"
    })
})
router.get('createDB', dbCreate);

router.get('/db', (req, res, next)=>{
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

module.exports = router;