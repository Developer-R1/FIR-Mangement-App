const mysql = require("mysql2");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const pool = mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"fir_management_db",
    connectionLimit:1000
})

pool.getConnection((err,connection)=>{
    if(err) throw err;
    console.log("Connected to database successfully..")
    connection.release();
})

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads"); 
}

module.exports = pool;