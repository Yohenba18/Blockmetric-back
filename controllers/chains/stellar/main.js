const xrpl = require("xrpl")
const PUBLIC_SERVER = "wss://xrplcluster.com/"
const client = new xrpl.Client(PUBLIC_SERVER)
// await client.connect()
// mainnet-beta

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getDeveloperData } = require("./factors/users");
const { getXRPTransactionspeed } = require("./factors/transaction");
// const {  getXRPGasPrice } = require("./factors/gasprice");

const data = {};

const getRippleData = async (newdata) => {
  try {
    data.name = "Ripple";

    data.gasprice = "0.00001" + " XRP"
    // await getXRPTransactionspeed(data);
    // await getXRPGasPrice(Ripple, data)
    await getDeveloperData(CoinGeckoClient, data);

    await newdata.push(data);
  } catch (error) {
    console.log(error);
  }
  return newdata;
};

module.exports = { getRippleData };
