const express = require('express');
const middleware = require('../middleware');
//const models = require('../db/models');
//const ProfileController = require('./controllers').Profiles;
//const GameController = require('./controllers').Games;

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

router.route('/login')
  .get((req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  })
  .post(middleware.passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

router.route('/signup')
  .get((req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') });

  })
  .post(middleware.passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

router.route('/profile')

// query db for all user games
//get the user id first then all the games of user
  //.get(ProfileController.getOne)

  .get(middleware.auth.verify, (req, res) => {
    res.render('profile.ejs', {
      user: req.user // get the user out of session and pass to template
      //stats
      //games:
      //
      //
      //

    });
  });

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

// router.get('/auth/google', middleware.passport.authenticate('google', {
//   scope: ['email', 'profile']
// }));

// router.get('/auth/google/callback', middleware.passport.authenticate('google', {
//   successRedirect: '/profile',
//   failureRedirect: '/login'
// }));

// router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
//   scope: ['public_profile', 'email']
// }));

// router.get('/auth/facebook/callback', middleware.passport.authenticate('facebook', {
//   successRedirect: '/profile',
//   failureRedirect: '/login',
//   failureFlash: true
// }));

router.get('/auth/spotify', middleware.passport.authenticate('spotify', {
  scope: ['user-read-private', 'user-read-email']
}));

router.get('/auth/spotify/callback', middleware.passport.authenticate('spotify', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));


router.route('/userInfo')
.get((req, res) => {
  console.log('req---the userrrrrrr', req.user);
  res.send(200, req.user);

  // res.status(200).send(req.user);

});



module.exports = router;
