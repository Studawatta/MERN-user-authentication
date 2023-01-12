const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose.set('strictQuery', false);

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MONGODB');
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is running on port ${process.env.PORT}`);
});
