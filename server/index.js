const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute = require('./routes/user');

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
app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is running on port ${process.env.PORT}`);
});
