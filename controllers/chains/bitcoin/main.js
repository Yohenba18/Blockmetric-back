

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getBitHashRate } = require("./factors/hashrate");
const { getBitGasPrice } = require("./factors/gasprice");
const { getDeveloperData } = require("./factors/users");
const { getBitTransactionspeed } = require("./factors/transaction");

const data = {};

const getBitcoinData = async (newdata) => {
  try {
    data.name = "Bitcoin";
    data.protocol = "POW";
    // await getBitTransactionspeed(web3, data);
    await getBitHashRate(web3, data);
    await getBitGasPrice(web3, data);
    await getDeveloperData(CoinGeckoClient, data);

    await newdata.push(data);
    
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getBitcoinData };
