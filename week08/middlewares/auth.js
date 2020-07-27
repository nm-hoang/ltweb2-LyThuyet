const User = require('../services/user');
const asyncHandler = require('express-async-handler');

module.exports = asyncHandler(async function auth(req,res, next){
    // const userId = req.session.userId;
    // res.locals.currentUser = null;
    // if(!userId){
    //     return next();
    // }
    // const user = await User.findUserById(userId);
    // if(!user){
    //     return next();
    // }
    req.user = req.user;
    res.locals.user = req.user;
    req.UserList = User.findAllUsers();
    next();
});