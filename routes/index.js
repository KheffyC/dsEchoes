var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dark Sky Echoes' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/groups',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function(err){
    if (err) {return next(err);}
    res.redirect('/')
  })
})

module.exports = router;
