const mongoose = require("mongoose");

const AllDataSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  protocol: {
    type: String,
  },
  transaction: {
    type: String,
    default: "----",
  },
  hash: {
    type: Number,
    default: 0,
  },
  developers: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("AllData", AllDataSchema);
