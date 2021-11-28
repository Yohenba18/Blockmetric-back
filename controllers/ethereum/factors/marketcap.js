const getMarketSize = async (CoinGeckoClient) => {
    // let price = await CoinGeckoClient.coins.fetchMarketChart('ethereum',{
    //   days: 1,
    //   interval: 'daily'
    // });
  
    // console.log(price.market_caps)
    let market = await CoinGeckoClient.exchanges.fetchTickers("bitfinex", {
      coin_ids: ["ethereum"],
    });
    var _coinList = {};
    var _datacc = market.data.tickers.filter((t) => t.target == "USD");
    ["ETH"].forEach((i) => {
      var _temp = _datacc.filter((t) => t.base == i);
      var _res = _temp.length == 0 ? [] : _temp[0];
      _coinList[i] = _res.last;
    });
    data.price = _coinList.ETH;
  };

module.exports = {getMarketSize}