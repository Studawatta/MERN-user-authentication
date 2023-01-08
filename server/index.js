const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

const connect = () => {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
};
app.listen(8800, () => {
    connect();
    console.log("server is runnig on port 8800");
});