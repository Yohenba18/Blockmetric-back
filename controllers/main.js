const { getEthereumData } = require("./ethereum/main");
const { getSolanaData } = require("./solana/main");
const { getAllMarketSize } = require("./market/market");

const data = [];

const getAllData = async (req, res) => {
  try {
    await getEthereumData(data);
    await getSolanaData(data);

    const marketdata = await getAllMarketSize();
    let j = 0
    for (i in data) {
      data[i].id = j;
      j++;
    }
    for(i in marketdata){
      if(marketdata[i].id === 'ethereum'){
        data[0].price = marketdata[i].market_cap
      }
      if(marketdata[i].id === 'solana'){
        data[1].price = marketdata[i].market_cap
      }
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllData };
