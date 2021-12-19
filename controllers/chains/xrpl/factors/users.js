const getDeveloperData = async (CoinGeckoClient, data, name) => {
  let user = await CoinGeckoClient.coins.fetch("ripple", {
    tickers: false,
    market_data: false,
    community_data: false,
    developer_data: true,
    localization: false,
    sparkline: false,
  });
  if (name) {
    const newdata = {};
    newdata.name = name;
    newdata.value = user.data.developer_data.pull_request_contributors;
    data.push(newdata);
  } else {
    data.developers = user.data.developer_data.pull_request_contributors;
  }
  return data;
};

module.exports = { getDeveloperData };
