const express = require('express');
const bodyParser = require('body-parser');
const db = require('./services/db');
const port = process.env.PORT || 3000;
const cookieSession = require('cookie-session');
const app = express();

//Session
app.use(cookieSession({
    name: 'session',
    keys: ['123456'],
    maxAge: 24 *60*60*1000,
}));

app.set('views','./views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));


//Auth middlewares
app.use(require('./middlewares/auth'));

app.get('/', require('./routes/index'));
app.use('/reg', require('./routes/reg'));
app.use('/register', require('./routes/register'));
app.use('/login',require('./routes/login'));
app.get('/logout', require('./routes/logout'));
app.get('/config', require('./routes/config'));
app.use('/profile', require('./routes/profile'));
app.use('/registeraccount', require('./routes/registeraccount'));
app.use('/conferencedetail', require('./routes/conferencedetail'));
app.use('/yourregistered', require('./routes/yourregistered'));
//app.use('/profile', require('./routes/attendlist'));
// app.use(require('./middlewares/authattendlist'),
// function(req, res, next) {
app.use('/admin', require('./routes/admin'));

//     next();
// });


app.use(express.static('public'));
db.sync().then(function(){
    app.listen(port);
    console.log(`Server is listening on port ${port}`);

}).catch(function(err){
    console.error(err);
});

