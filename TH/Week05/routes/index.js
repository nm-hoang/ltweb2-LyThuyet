const router = require('express').Router();
const asyncHandler = require('express-async-handler');
router.get('/', asyncHandler(async function(req,res){
    if(req.currentUser){

        if(req.currentUser.email === 'admin'){
        res.redirect('conferencedetail');
    }
    }
    else{
        res.render('index');
    }
}
));


module.exports = router;
