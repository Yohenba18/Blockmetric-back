const algosdk = require("algosdk");
const { ALGORAND_MIN_TX_FEE } = require("algosdk");

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getDeveloperData } = require("./factors/users");
const { getAlgoTransactionspeed } = require("./factors/transaction");

const data = {};

const getAlgorandData = async (newdata) => {
  try {
    data.name = "Algorand";
    data.protocol = "POS";
    data.gasprice = ALGORAND_MIN_TX_FEE + " microAlgos";
    await getAlgoTransactionspeed(algosdk, data);

    await getDeveloperData(CoinGeckoClient, data);

    await newdata.push(data);
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getAlgorandData };
