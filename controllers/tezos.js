const { getTezosData } = require("./tezos/main");
const { getAllMarketSize } = require("./market/market");

const data = [];

const getTezos = async (req, res) => {
  try {
    await getTezosData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "tezos") {
        data[0].price = marketdata[i].market_cap;
      }
    }
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(data[0]);
};

module.exports = { getTezos };
