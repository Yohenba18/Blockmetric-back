var Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/7306b04a3c8e49fa8099b5da68b633be"
  )
);

const getEthHashRate = async (req, res) => {
  await web3.eth.getHashrate((error, result) => {
    if (!error) {
      console.log(result);
      res.status(200).json("working!!")
    } else {
      console.log(error);
    }
  });
};

module.exports = { getEthHashRate };
