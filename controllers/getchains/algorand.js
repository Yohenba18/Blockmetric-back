const { getAlgorandData } = require("../chains/algorand/main");
const { getAllMarketSize } = require("../market/market");

const data = [];

const getAlgorand = async (req, res) => {
  try {
    await getAlgorandData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "algorand") {
        data[0].price = marketdata[i].market_cap;
      }
    }
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(data[0]);
};

module.exports = { getAlgorand };
