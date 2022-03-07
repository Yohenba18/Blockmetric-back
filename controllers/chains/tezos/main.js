const { TezosToolkit } = require("@taquito/taquito");
const { DEFAULT_FEE } = require("@taquito/taquito");

const tezos = new TezosToolkit("https://mainnet.smartpy.io");

// mainnet-beta

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getDeveloperData } = require("./factors/users");
const { getTezTransactionspeed } = require("./factors/transaction");
const { getTezGasPrice } = require("./factors/gasprice");

const data = {};

const getTezosData = async (newdata) => {
  try {
    data.name = "Tezos";
    data.protocol = "POS";
    // await getTezTransactionspeed(data);
    await getTezGasPrice(data);
    await getDeveloperData(CoinGeckoClient, data);

    await newdata.push(data);
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getTezosData };
