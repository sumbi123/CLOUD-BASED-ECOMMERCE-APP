const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  // Change this line
const User = require('./userModel');

const router = express.Router();
const SECRET_KEY = 'your_secret_key';

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).send('User registered');
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).send('User not found');
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');
  const token = jwt.sign({ userId: user._id }, SECRET_KEY);
  res.send({ token });
});

module.exports = router;
