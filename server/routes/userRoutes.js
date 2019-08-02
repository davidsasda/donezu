const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../Model/User.js');

router.post('/register', async (req, res) => {
  console.log('Donezu User Register - Pinged');
  const {email, password, password2} = req.body;

  // input validations
  if (!email || !password || !password2) {
    console.log('missing inputs');
  }
  if (password !== password2) {
    console.log('password does not match');
  }
  if (password.length < 6) {
    console.log('Password should be at least 6 characters');
  }

  let newUser = await User.findOne({email: email});
  if (newUser) {
    let error = 'Error: Email is already registered'
    console.log(error);
    res.status(500).send(error);
  } else {
    let hash = await bcrypt.hash(password, 10);
    newUser = new User({
      email: email,
      password: hash
    });
    await newUser.save();

    console.log('New User Account Created');
    res.status(201).send();
  }
})

router.post('/login', (req, res, next) => {
  console.log('Donezu User Login - Pinged');
  passport.authenticate(
    'local',
    (err, user) => {
      if (err || !user) {
        console.log('Donezu User Login - Error');
        res.status(400).send(err);
      }
      let payload = {
        email: user.email,
        exp: Date.now() + parseInt(process.env.JWT_EXPIRATION)
      }
      console.log('Donezu User Login - Successful');

      let token = jwt.sign(payload, process.env.JWT_SECRET);
      let secure = true;

      if (process.env.NODE_ENV !== 'production') {
        secure = false;
      }

      res.cookie('jwt', token, {httpOnly: false, secure: secure});
      res.send('');
    }
  )(req, res, next);
})

router.get('/login', passport.authenticate('jwt', {session: false}),
  (req, res) => {
    console.log('Donezu User Login JWT - Successful');
    const {user} = req
    res.status(200).send({user});
})

module.exports = router;