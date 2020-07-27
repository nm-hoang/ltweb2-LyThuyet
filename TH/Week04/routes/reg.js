const {Router} = require('express');
const Conference = require('../services/conference');
const asyncHandler = require('express-async-handler');
const router = new Router();
const Attend = require('../services/attend');
router.get('/', asyncHandler(async function(req,res){
    const confList = await Conference.findAllConference();
        res.render('reg',{confList});
}));

router.post('/', asyncHandler(async function(req,res){
    const name = req.body.Name;
    const email = req.body.Email;
    const number = req.body.phone;
    const idConf = req.body.idConference;
    console.log(name,idConf);
    await Attend.add(name,email,number,idConf);
    res.render('register',{name,email,number});
}));
module.exports = router;