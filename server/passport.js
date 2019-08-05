const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const bcrypt = require('bcrypt');

const User = require('./model/User.js');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  async (email, password, done) => {
    let user = await User.findOne({ 'email': email });
    let passwordsMatch = await bcrypt.compare(password, user.password);
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (passwordsMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect password.' });
    }
  }
));

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
}

passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET
  },
  async (jwtPayload, done) => {
    console.log('Doneze User Login JWT - Pinged')
    let user = await User.findOne({email: jwtPayload.email});
    // if (Date.now() > jwtPayload.exp) {
    //   return done(null, false, {message: 'Token Expired'});
    // }
    if (user) {
      return done(null, jwtPayload);
    }
    return done(null, false, {message: 'Token Error'});
  }
))