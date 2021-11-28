var Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/7306b04a3c8e49fa8099b5da68b633be"
  )
);
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getEthHashRate } = require("./factors/hashrate");
const { getEthGasPrice } = require("./factors/gasprice");
const { getMarketSize } = require("./factors/marketcap");

const getEthereumData = async (req, res) => {
  try {
    await getEthHashRate(web3);
    await getEthGasPrice(web3);
    await getMarketSize(CoinGeckoClient);
    res.status(200).json({ msg: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEthereumData };
