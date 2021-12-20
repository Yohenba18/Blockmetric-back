const mongoose = require("mongoose");

const AllTransactionSchema = mongoose.Schema({
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
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("AllTransactions", AllTransactionSchema);
