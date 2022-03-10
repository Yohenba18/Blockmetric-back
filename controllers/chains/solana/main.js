const web3 = require("@solana/web3.js");

const connection = new web3.Connection(
  web3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);
// mainnet-beta

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getDeveloperData } = require("./factors/users");
const { getSolTransactionspeed } = require("./factors/transaction");
const { getSolGasPrice } = require("./factors/gasprice");

const data = {};

const getSolanaData = async (newdata) => {
  try {
    data.name = "Solana";
    data.protocol = "POH";
    await getSolTransactionspeed(connection, data);
    await getDeveloperData(CoinGeckoClient, data);
    await getSolGasPrice(connection, data);
    newdata.push(data);
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getSolanaData };
