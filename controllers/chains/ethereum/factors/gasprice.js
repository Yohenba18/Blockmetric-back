const getEthGasPrice = async (web3, newdata) => {
  var gasprice;
  await web3.eth.getGasPrice((error, result) => {
    if (!error) {
      gasprice = web3.utils.fromWei(result, "ether");
    } else {
      console.log(error);
    }
    newdata.gasprice = Number(gasprice).toExponential(2) + " ETH";
  });
};

module.exports = { getEthGasPrice };
