const {Router} = require('express');
const User = require('../services/user');
const router = new Router();

router.get('/',function getLogin(req,res){
    res.render('login');
});

router.post('/',function postLogin (req,res){
    const user = User.findUserByUsername(req.body.username);
    if(!user || !User.verifyPassword(req.body.password, user.password)){
        return res.render('login');
    }
        
        req.session.userId = user.id;
        res.redirect('/');
  
});

module.exports= router;