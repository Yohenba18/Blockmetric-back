const { getCurrentPrices } = require("../../../market/currentprices");

const getSolGasPrice = async (connection, newdata) => {
  try {
    let slot = await connection.getSlot();
    var total = 0,
      transactionCount = 0;
    let block = await connection.getBlock(slot);
    block.transactions.map((transaction) => {
      total += transaction.meta.fee;
    });
    transactionCount += block.transactions.length;

    const curentPriceData = await getCurrentPrices();

    const gasprice = (Math.round(total / transactionCount) * 0.000000001) * curentPriceData.data.solana.usd;
    newdata.gasprice = gasprice.toFixed(5)
    return newdata;

    // = await gasprice.toExponential(2);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSolGasPrice };

