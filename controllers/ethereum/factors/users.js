const getDeveloperData = async (CoinGeckoClient, data) => {
    let user = await CoinGeckoClient.coins.fetch("ethereum", {
      tickers: false,
      market_data: false,
      community_data: false,
      developer_data: true,
      localization: false,
      sparkline: false,
    });
    data.developers =  user.data.developer_data.pull_request_contributors;
    return data;
  };

module.exports = {getDeveloperData}