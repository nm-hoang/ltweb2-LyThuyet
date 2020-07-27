const passport = require('passport');

const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../services/user');
const Bluebird = require('bluebird');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, done) {
    User.findOne( {
        where: {
            email: email,
        }
    }).then( function (user) {
        if(!user || !User.verifyPassword(password, user.password)){
            return false;
        }
        return user;
    }).asCallback(done);
}
));

passport.use(new FacebookStrategy({
    //${process.env.BASE_URL}
    // process.env.FACEBOOK_APP_ID, process.env.FACEBOOK_APP_SECRET,
    clientID: process.env.FACEBOOK_APP_ID||'250420836402113',
    clientSecret: process.env.FACEBOOK_APP_SECRET||'0b17e8c4fa9cd85b5b871e28633a6199',
   callbackURL: `${process.env.BASE_URL}/auth/facebook/callback`,
 // callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id' , 'emails' ,'displayName'],
  }, 
  function(accessToken, refreshToken, profile, done,) {
    //   console.log('Access toke: ',accessToken);
    //   console.log('Profile',profile);
      User.findOne({
        where: {
            email: profile.emails[0].value,
            facebookId: profile.id,
        },

      }).then(async function(found){
          if(found){
              found.facebookAccessToken = accessToken;
              return found;
            }
        const user = await User.create({
            email: `${profile.id}@facebook.com`,
            displayName: profile.displayName,
            facebookId: profile.id,
            facebookAccessToken: accessToken,
        });
        return user;
    }).asCallback(done);
})); 

passport.serializeUser(function (user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id,done){
    // User.findUserById(id).then(function(user){
    //     done(null,user.id);
    // }).catch(done);

    User.findByPk(id).asCallback(done);
});

module.exports = passport;