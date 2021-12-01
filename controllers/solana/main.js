const web3 = require("@solana/web3.js");

const connection = new web3.Connection(
  web3.clusterApiUrl("mainnet-beta"),
  "confirmed"
);
// mainnet-beta

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const { getEthHashRate } = require("./factors/hashrate");
const { getEthGasPrice } = require("./factors/gasprice");
const { getDeveloperData } = require("./factors/users");

const data = {};

const getSolanaData = async (newdata) => {
  try {
    data.name = "Solana";

    let slot = await connection.getSlot();
    data.slot = slot;
    console.log(slot);
    // 93186439
    // let block = await connection.getBlock(slot);
    // console.log(block);
    let blockTime = await connection.getBlockTime(slot);
    console.log(blockTime);
    data.blockTime = blockTime;
    // // 1630747045

    await getDeveloperData(CoinGeckoClient, data);

    newdata.push(data);
    return newdata;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSolanaData };
