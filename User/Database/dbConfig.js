require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;