const { getEthereumData } = require("./chains/ethereum/main");
const { getSolanaData } = require("./chains/solana/main");
const { getAllMarketSize } = require("./market/market");
const { getTezosData } = require("./chains/tezos/main");
const { getAlgorandData } = require("./chains/algorand/main");
const { getRippleData } = require("./chains/xrpl/main");
const { getStellarData } = require("./chains/stellar/main");

const getAllData = async () => {
  const data = [];
  try {
    await getEthereumData(data);
    await getSolanaData(data);
    await getTezosData(data);
    await getAlgorandData(data);
    await getRippleData(data);
    await getStellarData(data);

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
        } else if (marketdata[i].id === "ripple" && data[j].name === "Ripple") {
          data[j].price = marketdata[i].market_cap;
        } else if (
          marketdata[i].id === "stellar" &&
          data[j].name === "Stellar"
        ) {
          data[j].price = marketdata[i].market_cap;
        }
      }
    }
    j = 0;
  } catch (error) {
    console.log(error);
  }

  return data;
};

module.exports = { getAllData };
