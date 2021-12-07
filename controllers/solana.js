const { getSolanaData } = require("./solana/main");
const { getAllMarketSize } = require("./market/market");

const data = [];

const getSolana = async (req, res) => {
  try {
    await getSolanaData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "solana") {
        data[0].price = marketdata[i].market_cap;
      }
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(data[0]);
};

module.exports = { getSolana };
