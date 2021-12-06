const { getEthereumData } = require("./ethereum/main");
const { getSolanaData } = require("./solana/main");
const { getAllMarketSize } = require("./market/market");
const { getTezosData } = require("./tezos/main");
const { getAlgorandData } = require("./algorand/main");

const data = [];

const getAllData = async (req, res) => {
  try {
    await getEthereumData(data);
    await getSolanaData(data);
    await getTezosData(data);
    await getAlgorandData(data);

    const marketdata = await getAllMarketSize();
    let j = 0;
    for (i in data) {
      data[i].id = j;
      j++;
    }
    for (i in marketdata) {
      for (j in data) {
        if (marketdata[i].id === "ethereum" && data[j].name === "Ethereum") {
          data[j].price = marketdata[i].market_cap;
        } else if (marketdata[i].id === "solana" && data[j].name === "Solana") {
          data[j].price = marketdata[i].market_cap;
        } else if (marketdata[i].id === "tezos" && data[j].name === "Tezos") {
          data[j].price = marketdata[i].market_cap;
        } else if (
          marketdata[i].id === "algorand" &&
          data[j].name === "Algorand"
        ) {
          data[j].price = marketdata[i].market_cap;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(data);
};

module.exports = { getAllData };
