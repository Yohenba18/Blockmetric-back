var Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/7306b04a3c8e49fa8099b5da68b633be"
  )
);

let data = {};

const getEthHashRate =async () => {
  await web3.eth.getHashrate((error, result) => {
    if (!error) {
      data.hash = result
    } else {
      console.log(error);
    }
  });
  // web3.eth.getHashrate().then(console.log);
  // res.status(200).json("working!!");
};

const getEthGasPrice = async () => {
  await web3.eth.getGasPrice((error, result) => {
    if (!error) {
      data.gas = result
    } else {
      console.log(error);
    }
  });
  // web3.eth.getGasPrice().then(console.log);
  // res.status(200).json("working!!");
};

const getEthereumData =async (req, res) => {
  try {
    await getEthHashRate();
    await getEthGasPrice();
    console.log(data);
    res.status(200).json("working!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEthereumData };
