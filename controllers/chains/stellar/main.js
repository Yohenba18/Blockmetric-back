var StellarSdk = require("stellar-sdk");
var server = new StellarSdk.Server("https://horizon.stellar.org");

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getDeveloperData } = require("./factors/users");
const { getXLMTransactionspeed } = require("./factors/transaction");
const { getXLMGasPrice } = require("./factors/gasprice");

const data = {};
const getStellarData = async (newdata) => {
  try {
    data.name = "Stellar";
    await getXLMGasPrice(data);
    await getDeveloperData(CoinGeckoClient, data);
    await newdata.push(data);
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getStellarData };
