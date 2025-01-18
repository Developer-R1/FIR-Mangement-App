const express = require("express");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const pool = require("../db/db");



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


router.get("/api/v1/policeportal",(req,res)=>{
    const sql = "Select * from police_admin_portal";
    pool.query(sql,(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.post("/api/v1/policeportal",(req,res)=>{
    const sql = "insert into police_admin_portal(`name`,`email`,`ID`,`password`,`phoneNumber`,`rank`,`awards`,`state`,`casesAccomplished`,`casesPending`) values(?,?,?,?,?,?,?,?,?,?) ";
    pool.query(sql,[req.body.name,req.body.email,req.body.ID,req.body.password,req.body.phoneNumber,req.body.rank,req.body.awards,req.body.state,req.body.casesAccomplished,req.body.casesPending],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})

router.put("/api/v1/policeportal/:email",(req,res)=>{
    const sql = "update police_admin_portal set `name`=?,`ID`=?,`password`=?,`phoneNumber`=?,`rank`=?,`awards`=?,`state`=?,`casesAccomplished`=?,`casesPending`=? where email=?";
    const email = (req.params.email);
    pool.query(sql,[req.body.name,req.body.ID,req.body.password,req.body.phoneNumber,req.body.rank,req.body.awards,req.body.state,req.body.casesAccomplished,req.body.casesPending,email],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})

router.delete("/api/v1/policeportal/:email",(req,res)=>{
    const sql = "delete from police_admin_portal where email=?";
    const email = (req.params.email);
    pool.query(sql,[email],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})





router.get("/api/v1/publicportal",(req,res)=>{
    const sql = "Select * from public_portal";
    pool.query(sql,(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.post("/api/v1/publicportal",(req,res)=>{
    const sql = "insert into public_portal(`name`,`email`,`password`,`phoneNumber`,`age`,`address`,`state`) values(?,?,?,?,?,?,?) ";
    pool.query(sql,[req.body.name,req.body.email,req.body.password,req.body.phoneNumber,req.body.age,req.body.address,req.body.state],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.put("/api/v1/publicportal/:email",(req,res)=>{
    const sql = "update public_portal set `name`=?,`password`=?,`phoneNumber`=?,`age`=?,`address`=?,`state`=? where email=?";
    const email1 = (req.params.email);
    pool.query(sql,[req.body.name,req.body.password,req.body.phoneNumber,req.body.age,req.body.address,req.body.state,email1],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.delete("/api/v1/publicportal/:email",(req,res)=>{
    const sql = "delete from public_portal where email=?";
    const email = (req.params.email);
    pool.query(sql,[email],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})





router.get("/api/v1/caseportal",(req,res)=>{
    const sql = "Select * from case_table";
    pool.query(sql,(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })  
})

router.post("/api/v1/caseportal", upload.single('evidence'), (req, res) => {
    const { email, case_title, case_type, description, location, case_status } = req.body;
    const evidencePath = req.file ? req.file.path : null;  

    const sql = "INSERT INTO case_table (`email`, `case_title`, `case_type`, `description`, `location`, `case_status`, `evidence`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    pool.query(sql, [email, case_title, case_type, description, location, case_status, evidencePath], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

router.put("/api/v1/caseportal/:case_id", upload.single('evidence'), (req, res) => {
    const case_id = req.params.case_id;
    const { case_title, case_type, description, location, case_status } = req.body;
    const evidencePath = req.file ? req.file.path : null; // Get the uploaded file path

    const sql = "UPDATE case_table SET `case_title`=?, `case_type`=?, `description`=?, `location`=?, `case_status`=?, `evidence`=? WHERE `case_id`=?";
    pool.query(sql, [case_title, case_type, description, location, case_status, evidencePath, case_id], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

router.delete("/api/v1/caseportal/:case_id",(req,res)=>{
    const sql = "delete from case_table where case_id=?";
    const case_id = (req.params.case_id);
    pool.query(sql,[case_id],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


module.exports = router;


