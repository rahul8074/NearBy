var express = require("express");
var router =express.Router();
var UsersModel = require("../models/UserRegistration");
var jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator'); 

  
  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  router.get('/', function(req, res, next) {
    var loginUser=localStorage.getItem('loginUser');
    if(loginUser){
     
    }else{
    res.render({ msg:'' });
    }
  });
  

  router.post('/',function(req, res, next) {
    var email=req.body.email;
    var password=req.body.password;
    console.log("login data received in server")
    var checkUser=UsersModel.findOne({email:email});
    checkUser.exec((err, data)=>{
     if(data==null){
      res.send({ msg:"Please Enter password" });
  
     }
     else{
    if(err) throw err;
  var getUserID=data._id;
  var getPassword=data.password;
  if(password==getPassword){
    var token = jwt.sign({ userID: getUserID }, 'loginToken');
    // console.log(token)
    localStorage.setItem('userToken', token);
    localStorage.setItem('loginUser', email);
    res.send({user:email,msg:"token successfully assigned"})

     
  }else{
    res.send({ msg:"Invalid email and Password." });
  
  }
     }
    });
   
  });
 
module.exports = router;