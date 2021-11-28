const getEthGasPrice = async (web3) => {
    await web3.eth.getGasPrice((error, result) => {
      if (!error) {
        data.gasprice = web3.utils.fromWei(result, "ether");
      } else {
        console.log(error);
      }
    });
}

module.exports = {getEthGasPrice}
