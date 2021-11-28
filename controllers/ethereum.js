var Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/7306b04a3c8e49fa8099b5da68b633be"
  )
);
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

let data = {};

const getEthHashRate = async () => {
  await web3.eth.getHashrate((error, result) => {
    if (!error) {
      data.hashrate = result;
    } else {
      console.log(error);
    }
  });
  // web3.eth.getHashrate().then(console.log);
  // res.status(200).json("working!!");
};

const getEthGasPrice = async () => {
  await web3.eth.getGasPrice((error, result) => {
    if (!error) {
      data.gasprice = web3.utils.fromWei(result, "ether");
    } else {
      console.log(error);
    }
  });
  // web3.eth.getGasPrice().then(console.log);
  // res.status(200).json("working!!");
};

const getMarketSize = async () => {
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

const getUserData = async () => {

}

const getEthereumData = async (req, res) => {
  try {
    await getEthHashRate();
    await getEthGasPrice();
    await getMarketSize();
    res.status(200).json({ msg: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEthereumData };
