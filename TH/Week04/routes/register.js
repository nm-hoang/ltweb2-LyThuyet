const {Router} =require ('express');
const Attend = require('../services/attend');
const asyncHandler = require('express-async-handler');
const router =  new  Router();

router.get('/', asyncHandler(async function(req,res){
  const name = req.body.Name;
  const email = req.body.Email;
  const number = req.body.phone;
  const idConf = req.body.idConference;
  console.log(name,idConf);
  await Attend.add(name,email,number,idConf);
  res.render('register',{name,email,number});
}));
router.post('/', asyncHandler(async function(req, res){
  res.redirect('/register');
}));
module.exports = router;
  
  