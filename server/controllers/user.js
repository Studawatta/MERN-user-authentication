const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json('User has been created!');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({
    name: req.body.name,
  });
  if (user) {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        'sandun123'
      );
      res.json({ status: 'ok', user: token });
    } else {
      res.status(400).json('Wrong password or username!');
    }
  } else {
    res.status(404).json('User not found!');
  }
};
