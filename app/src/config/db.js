const mysql = require("mysql");

const db = mysql.createConnection({
    host : "aipass.chjdjk6obwwq.ap-northeast-2.rds.amazonaws.com",
    user : "aipass",
    password : "aipass12",
    database : "login_test",
});

db.connect();

module.exports = db;