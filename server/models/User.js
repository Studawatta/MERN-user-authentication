const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: {
    type: String,
    reuired: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const model = mongoose.model('User', User);
module.exports = model;
