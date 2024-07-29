
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Order = require('./orderModel');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/order_service', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.post('/orders', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).send(order);
});

app.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
