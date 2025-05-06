const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  city: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('user', userModel)

module.exports= User

