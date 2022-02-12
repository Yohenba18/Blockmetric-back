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

    const gasprice = Math.round(total / transactionCount) * 0.000000001;
    newdata.gasprice = await gasprice.toExponential(2) + " SOL";
    return newdata;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSolGasPrice };

//   const blocks = await connection.getBlocks(slot - 5, slot);
//   for (i in blocks) {
//   let block = await connection.getBlock(Number(i));
//   block.transactions.map((transaction) => {
//     total += transaction.meta.fee;
//   });
//   transactionCount += block.transactions.length;
// }
//   console.log(total);
//   console.log(transactionCount);

//   const gasprice = Math.round(total / transactionCount) * 0.000000001;
//   console.log(gasprice);
