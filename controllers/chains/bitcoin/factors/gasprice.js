const getBitGasPrice = async (client, data) => {
  client.getBlockchainInfo().then((help) => console.log(help));
  return data;
};

module.exports = { getBitGasPrice };
