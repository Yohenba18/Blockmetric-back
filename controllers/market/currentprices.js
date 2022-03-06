const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const getCurrentPrices = async () => {
  let data = await CoinGeckoClient.simple.price({
    ids: ["ethereum", "solana", "tezos", "algorand", "ripple","stellar"],
  });
  return data;
};

module.exports = { getCurrentPrices };
