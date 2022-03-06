const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const getAllMarketSize = async () => {
  let data = await CoinGeckoClient.coins.markets({
    order: "market_cap_desc",
    per_page: 100,
    page: 1,
    ids: ["ethereum", "solana", "tezos", "algorand", "ripple", "stellar"],
  });
  for (i in data.data) {
    data.data[i].market_cap = Math.floor(data.data[i].market_cap / 1000000000);
  }
  return data.data;
};

module.exports = { getAllMarketSize };
