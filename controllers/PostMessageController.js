var express = require('express');
var router = express.Router();
//import PostMessage Schemas
var messageModel = require('../models/PostMessage');

router.get('/',(req,res) =>{
     messageModel.find((err,docs) =>{
         if(!err) res.send(docs)
         else console.log("Error while retrieving all records")
     })
})

router.post('/',(req,res) =>{
    var newRecord =new messageModel({
        title : req.body.title,
        message : req.body.message,
        username:req.body.username
    })
    console.log("#####################")
    console.log(newRecord)
    newRecord.save((err,docs) =>{
       
        if(!err) res.send(docs)
        else console.log("Error in saving message to database")
    })
    
})

module.exports = router;