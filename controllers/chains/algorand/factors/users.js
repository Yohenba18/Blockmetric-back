const getDeveloperData = async (CoinGeckoClient, data, name) => {
  let user = await CoinGeckoClient.coins.fetch("algorand", {
    tickers: false,
    market_data: false,
    community_data: false,
    developer_data: true,
    localization: false,
    sparkline: false,
  });
  data.developers = user.data.developer_data.pull_request_contributors;
  if (name) {
    data.name = name;
  }
  return data;
};

module.exports = { getDeveloperData };
