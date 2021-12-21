const mongoose = require("mongoose");

const AllDataSchema = mongoose.Schema(
  {
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
      type: Number,
      default: 0,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllData", AllDataSchema);
