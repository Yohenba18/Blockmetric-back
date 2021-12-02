var Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ID));
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getEthHashRate } = require("./factors/hashrate");
const { getEthGasPrice } = require("./factors/gasprice");
const { getDeveloperData } = require("./factors/users");
const { getEthTransactionspeed } = require("./factors/transaction");

const data = {};

const getEthereumData = async (newdata) => {
  try {
    data.name = "Ethereum";
    data.protocol = "POW";
    // await getEthTransactionspeed(web3, data);
    await getEthHashRate(web3, data);
    await getEthGasPrice(web3, data);
    await getDeveloperData(CoinGeckoClient, data);

    await newdata.push(data);
    
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getEthereumData };
