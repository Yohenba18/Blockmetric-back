const { getRippleData } = require("../chains/xrpl/main");
const { getAllMarketSize } = require("../market/market");

const data = [];

const getRipple = async (req, res) => {
  try {
    await getRippleData(data);
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

module.exports = { getRipple };
