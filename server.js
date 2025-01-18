const express = require("express");
app = express();
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mysql2 =  require("mysql2");
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    "extended":false
}))


const controller = require("./controller/controller");
app.use(controller)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port,()=>{
    console.log(`Server is running successfully on port : ${port}`);
})