const { getEthereumData } = require("./ethereum/main");
const { getAllMarketSize } = require("./market/market");

const data = [];

const getEthereum = async (req, res) => {
  try {
    await getEthereumData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "ethereum") {
        data[0].price = marketdata[i].market_cap;
      }
    }
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(data[0]);
};

module.exports = { getEthereum };
