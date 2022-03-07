const {
  getDeveloperData: algodevdata,
} = require("./chains/algorand/factors/users");
const {
  getDeveloperData: ethdevdata,
} = require("./chains/ethereum/factors/users");
const {
  getDeveloperData: tezdevdata,
} = require("./chains/tezos/factors/users");
const {
  getDeveloperData: soldevdata,
} = require("./chains/solana/factors/users");
const {
  getDeveloperData: xrpldevdata,
} = require("./chains/xrpl/factors/users");
const {
  getDeveloperData: xlmdevdata,
} = require("./chains/stellar/factors/users");

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const getAllDevelopers = async () => {
  const data = [];
  try {
    await algodevdata(CoinGeckoClient, data, "Algorand");
    await ethdevdata(CoinGeckoClient, data, "Ethereum");
    await tezdevdata(CoinGeckoClient, data, "Tezos");
    await soldevdata(CoinGeckoClient, data, "Solana");
    await xrpldevdata(CoinGeckoClient, data, "Ripple");
    await xlmdevdata(CoinGeckoClient, data, "Stellar");
  } catch (error) {
    console.error(error);
  }

  data.sort((a, b) => b.value - a.value);

  const reqData = {
    title: "Developers",
    column: "Developers",
    data: data,
  };

  return reqData;
};

module.exports = { getAllDevelopers };
