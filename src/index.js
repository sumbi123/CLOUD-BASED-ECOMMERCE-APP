
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const auth = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user_service', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
