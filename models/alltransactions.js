const mongoose = require("mongoose");

const AllTransactionSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    column: {
      type: String,
    },
    data: [
      {
        name: {
          type: String,
        },
        value: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllTransactions", AllTransactionSchema);
