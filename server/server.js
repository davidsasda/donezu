const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const archiveRoutes = require('./routes/archiveRoutes.js');
const todoRoutes = require('./routes/todoRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const weekRoutes = require('./routes/weekRoutes.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Server Config
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:1234',
  credentials: true
}));

// DB Connection
const db = process.env.MONGO_URI;
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected successfully'))
.catch(() => console.log('MongoDB connection error'))

// Passport
require('./passport.js');
app.use(passport.initialize());

// Routes
app.use('/archives', archiveRoutes);
app.use('/tasks', todoRoutes);
app.use('/users', userRoutes);
app.use('/weeks', weekRoutes);

// Server Connection
app.listen(port, () => {
  console.log(`Running in: ${process.env.NODE_ENV}`);
  console.log(`Listening on port: ${port}`);
});