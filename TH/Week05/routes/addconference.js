const router = require('express').Router();
const Conference = require('../services/conference');
const asyncHandler = require('express-async-handler');
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
 return [year, month, day].join('-');
}

router.get('/', asyncHandler(async function(req,res){
    res.render('addconference');
}));

router.post('/',asyncHandler(async function(req,res){
    const id = '1';
    const name = req.body.Name;
    const detail = req.body.detail;
    const timeStarted = req.body.timeStarted;
    await Conference.add(name,detail,timeStarted);
     res.render('conferencedetail');
 }));

module.exports = router;