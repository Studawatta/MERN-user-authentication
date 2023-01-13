const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json('User has been created!');
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
