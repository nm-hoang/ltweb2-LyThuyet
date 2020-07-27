const router = require('express').Router();
const Attend = require('../services/attend');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async function(req,res){
    const attendlist = await Attend.findAllAttend();
    res.render('admin',{attendlist});
}));
router.post('/', asyncHandler(async function(req, res){
    if(req.currentUser === null){
                res.redirect('login');
            }
            else{
                res.render('admin');
            }
}));

module.exports = router;
