const {Router} = require('express');
// const Attend = require('../services/attends');
const router = new Router();

router.get('/',function getLogin(req,res){
    res.render('admin');
});

router.post('/',function postLogin (req,res){
    const user = User.findUserByEmail(req.body.email);
    if(!user || !User.verifyPassword(req.body.password, user.password)){
        return res.render('login');
    }
        
        req.session.userId = user.id;
        res.redirect('/');
  
});

module.exports= router;