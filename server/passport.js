const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../database/index.js');
const hash = require('../hash.js');

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, 'Incorrect username.');
      }
      if (hash(password) !== user.password) {
        return done(null, false, 'Incorrect password.');
      }
      return done(null, user);
    });
  }
));

module.exports = passport;