const mongoose = require("mongoose");

const vendorModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
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
