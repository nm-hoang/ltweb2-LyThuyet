const {Router} =require ('express');
const Attend = require('../services/attend');
const router =  new  Router();

module.exports = function (req,res){
    
    const name = req.body.Name;
    const email = req.body.Email;
    const number = req.body.phone;
    Attend.add(name,email,number);
    res.render('register',{name,email,number});
 
  };
  
  