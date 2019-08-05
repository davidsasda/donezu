const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    tasks: {
      type: Array,
      default: []
    },
    archives: {
      type: Object,
      default: {}
    }
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;