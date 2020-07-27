const router = require('express').Router();
const Conference = require('../services/conference');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async function(req,res){
    const confList = await Conference.findAllConference();
    res.render('conferencedetail',{confList});
}));
// router.post('/', asyncHandler(async function(req, res){
    
// }));

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


router.get('/:id',asyncHandler(async function(req,res){
    const {id} = req.params;
    const conf = await Conference.getConferenceById(id);
    console.log(conf.title);
   const time = formatDate(conf.timeStarted);
    res.render('edit',{conf,time});
}));
router.post('/:id',asyncHandler(async function(req,res){
   const {id} = req.params;
   const name = req.body.name;
   const detail = req.body.detail;
   const timeStarted = req.body.timeStarted;
   console.log(id,name,timeStarted);
    await Conference.updateConference(id,name,detail,timeStarted);
    res.render('index');
}));
module.exports = router;
