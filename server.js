

//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0..cpocfck.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;
// Model/Server.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

  });

  const User = mongoose.model('User', userSchema);
  module.exports = {
    User
  };
  
///////////////


