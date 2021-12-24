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

const getAllDevelopers = async () => {
  const data = [];
  try {
    await algodevdata(CoinGeckoClient, data, "Algorand");
    await ethdevdata(CoinGeckoClient, data, "Ethereum");
    await tezdevdata(CoinGeckoClient, data, "Tezos");
    await soldevdata(CoinGeckoClient, data, "Solana");
    await xrpldevdata(CoinGeckoClient, data, "Ripple");
  } catch (error) {
    console.error(error);
  }

  data.sort((a, b) => b.value - a.value);

  const reqData = {
    title: "Developers",
    column: "Developers",
    data: data,
  };
  // res.status(200).json({
  //   title: "Developers",
  //   column: "Developers",
  //   data: data,
  // });
  return reqData;
};

module.exports = { getAllDevelopers };

// if (name) {
//   const newdata = {};
//   newdata.name = name;
//   newdata.developers = user.data.developer_data.pull_request_contributors;
//   data.push(newdata);
// } else {
//   data.developers = user.data.developer_data.pull_request_contributors;
// }
