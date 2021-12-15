const getEthGasPrice = async (web3,data) => {
    await web3.eth.getGasPrice((error, result) => {
      if (!error) {
        data.gasprice = web3.utils.fromWei(result, "ether");
        data.gasprice = data.gasprice + ' ETH'
        return data.gasprice
      } else {
        console.log(error);
      }
    });
}

module.exports = {getEthGasPrice}
