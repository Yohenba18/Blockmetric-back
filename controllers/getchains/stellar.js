const { getStellarData } = require("../chains/stellar/main");
const { getAllMarketSize } = require("../market/market");

const data = [];

const getStellar = async (req, res) => {
  try {
    await getStellarData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "stellar") {
        data[0].price = marketdata[i].market_cap;
      }
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(data[0]);
};

module.exports = { getStellar };