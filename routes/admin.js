const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Get all sellers
router.get('/than',(req,res)=>{
    db.query('SELECT * FROM admin',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});

//Get all seller
router.get('/than/:id',(req,res)=>{
    db.query('SELECT * FROM admin WHERE adminId =?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});

//Delete an seller
router.delete('/than/:id',(req,res)=>{
    db.query('DELETE FROM admin WHERE adminId = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    })
    
});

//Insert an seller
router.post('/than',(req,res)=>{

    let adm = req.body;
    var sql = "SET @adminId = ?;SET @username = ?;SET @uPass = ?;\
    CALL A(@adminId,@username,@uPass);";

    db.query(sql,[adm.adminId,adm.username,adm.uPass],(err,rows,fields)=>{
        if(!err)
            rows.forEach(element => {
                if(element.constructor ==Array)
                res.send('Inserted admin id:'+element[0].adminId);
            });
        else
            console.log(err);
    })
    
});


//Udate an seller
router.put('/than',(req,res)=>{

    let adm = req.body;
    var sql = "SET @adminId = ?;SET @username = ?;SET @uPass = ?;\
    CALL A(@adminId,@username,@uPass);";

    db.query(sql,[adm.adminId,adm.username,adm.uPass],(err,rows,fields)=>{
        if(!err)
           res.send('Updated...');
        else
            console.log(err);
    })
    
});

module.exports = router ;
