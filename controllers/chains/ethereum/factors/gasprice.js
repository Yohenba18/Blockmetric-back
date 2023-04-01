const { getCurrentPrices } = require("../../../market/currentprices");

const getEthGasPrice = async (web3, newdata) => {
  var gasprice;
  const curentPriceData = await getCurrentPrices();
  await web3.eth.getGasPrice((error, result) => {
    if (!error) {
      gasprice = web3.utils.fromWei(result, "ether");
    } else {
      console.log(error);
    }
    console.log(curentPriceData.data);
    gasprice = gasprice * curentPriceData.data.ethereum.usd;
    newdata.gasprice = gasprice.toFixed(6);
    return newdata;
  });
};

module.exports = { getEthGasPrice };
