var express = require("express");
var router = express.Router();

var UsersModel = require('../models/UserRegistration');

router.get('/',(req,res) =>{
    UsersModel.find((err,docs) =>{
        if(!err) res.send(docs)
        else console.log("Error while retrieving all records")
    })
})

router.post('/',(req,res) => {

    var newUser = new UsersModel({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    newUser.save((err,docs) => {
        console.log(docs)
        if(!err) res.send(docs)
        else console.log("Error in  user Registration ")
    })
})

module.exports = router;