const {Router} = require('express');
const User = require('../services/user');
const asyncHandler = require('express-async-handler')
const router = new Router();

router.get('/',function getLogin(req,res){
    res.render('login');
});

router.post('/',asyncHandler(async function postLogin (req,res){
    const user = await User.findUserByEmail(req.body.email);
    if(!user || !User.verifyPassword(req.body.password, user.password)){
        return res.render('login');
    }
        
        req.session.userId = user.id;
        res.redirect('/');
  
}));

module.exports= router;