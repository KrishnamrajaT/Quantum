const mongoose = require("mongoose");

const vendorModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model('vendor', vendorModel)

module.exports= Vendor
