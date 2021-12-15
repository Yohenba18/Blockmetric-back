const getEthGasPrice = async (web3,data) => {
    await web3.eth.getGasPrice((error, result) => {
      if (!error) {
        data.gasprice = web3.utils.fromWei(result, "ether");
        return data
      } else {
        console.log(error);
      }
    });
}

module.exports = {getEthGasPrice}
