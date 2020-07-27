const {Router} = require('express');
const User = require('../services/user');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler')
const router = new Router();

router.get('/', asyncHandler(async function(req,res){
    res.render('registeraccount');
}));

router.post('/', asyncHandler(async function(req, res){

    const name = req.body.Name;
    const email = req.body.Email;
    const number = req.body.phone;
  //  const password = req.body.password;
 const password = await User.hashPassword(req.body.password);
    
    await User.add(name,email,number,password);
    res.redirect('/registeraccount');
}));

module.exports = router;