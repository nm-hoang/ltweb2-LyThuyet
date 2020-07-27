const router = require('express').Router();
const Attend = require('../services/attend');

router.get('/', (req, res) => {
    
    if (req.currentUser !== null) {
        return res.render('attendlist');
    } 
    else{
        res.redirect('login');
    }
});

router.post('/', (req, res) => {
    if(req.currentUser === null){
        res.redirect('login');
    }
    else{
        res.render('attendlist');
    }
});


module.exports = router;
