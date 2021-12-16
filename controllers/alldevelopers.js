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

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const data = [];

const getAllDevelopers = async (req, res) => {
  try {
    const newdata = {};
    await algodevdata(CoinGeckoClient, newdata, "Algorand").then(() => {
      data.push(newdata);
    });
    await ethdevdata(CoinGeckoClient, newdata, "Ethereum").then(() => {
      data.push(newdata);
    });

    await tezdevdata(CoinGeckoClient, newdata, "Tezos").then(() => {
      data.push(newdata);
    });

    await soldevdata(CoinGeckoClient, newdata, "Solana").then(() => {
      data.push(newdata);
    });

    await xrpldevdata(CoinGeckoClient, newdata, "Solana").then(() => {
      data.push(newdata);
    });
  } catch (error) {
    console.error(error);
  }
  console.log(data);
  res.status(200).json(data);
};

module.exports = { getAllDevelopers };
