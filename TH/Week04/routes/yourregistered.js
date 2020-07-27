const {Router} = require('express');
const User = require('../services/user');
const Conference = require('../services/conference');
const asyncHandler = require('express-async-handler')
const router = new Router();

router.get('/', asyncHandler(async function(req,res){
    const confList = await Conference.findConferenceByIdUser(req.currentUser.id);
    res.render('yourregistered',{confList});
}));

router.post('/', asyncHandler(async function(req, res){

    res.redirect('/yourregistered');
}));

module.exports = router;