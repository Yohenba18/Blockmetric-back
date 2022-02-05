const { getRippleData } = require("../chains/xrpl/main");
const { getAllMarketSize } = require("../market/market");
const { getXRPGasPrice } = require("../chains/xrpl/factors/gasprice")

const data = [];

const getRipple = async (req, res) => {
  try {
    await getRippleData(data);
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      if (marketdata[i].id === "ripple") {
        data[0].price = marketdata[i].market_cap;
      }
    }
    // await getXRPGasPrice(data)
    // //! res.status value =>  
    // res.status(200).json(data[0])
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(data[0]);
};

module.exports = { getRipple };
