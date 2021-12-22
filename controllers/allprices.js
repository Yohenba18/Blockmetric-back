const { getAllMarketSize } = require("./market/market");



const getAllPrice = async () => {
  const data = [];
  try {
    const marketdata = await getAllMarketSize();
    for (i in marketdata) {
      const newdata = {};
      newdata.name = marketdata[i].id;
      newdata.value = marketdata[i].market_cap;
      data.push(newdata);
    }
  } catch (error) {
    console.error(error);
  }
  // res.status(200).json({
  //   title: "Market Size",
  //   column: "Market size (B)",
  //   data: data,
  // });

  const reqData = {
    title: "Market Size",
    column: "Market size (B)",
    data: data,
  };

  return reqData;
};

module.exports = { getAllPrice };
