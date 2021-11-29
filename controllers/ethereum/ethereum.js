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
      data.gasprice = web3.utils.fromWei(result, "Gwei");
    } else {
      console.log(error);
    }
  });
  // web3.eth.getGasPrice().then(console.log);
  // res.status(200).json("working!!");
};

const getMarketSize = async () => {
  let price = await CoinGeckoClient.coins.fetchMarketChart("ethereum", {
    days: 1,
    interval: "daily",
  });

  data.price = Math.floor(price.data.market_caps[0][1] / 1000000000);
};

const getDeveloperData = async () => {
  let user = await CoinGeckoClient.coins.fetch("ethereum", {
    tickers: false,
    market_data: false,
    community_data: false,
    developer_data: true,
    localization: false,
    sparkline: false,
  });

  data.developers = user.data.developer_data.pull_request_contributors;
};

const getEthereumData = async (req, res) => {
  try {
    await getEthHashRate();
    await getEthGasPrice();
    await getMarketSize();
    await getDeveloperData();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEthereumData };
