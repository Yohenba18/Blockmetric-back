const getMarketSize = async (CoinGeckoClient,data) => {
  let price = await CoinGeckoClient.coins.fetchMarketChart("ethereum", {
    days: 1,
    interval: "daily",
  });

  data.price =  Math.floor(price.data.market_caps[0][1] / 1000000000);
  return data
};

module.exports = {getMarketSize}