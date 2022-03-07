var axios = require("axios");
const { getCurrentPrices } = require("../../../market/currentprices");

const getTezGasPrice = async (newdata) => {
  try {
    const latestBlockHeight = await fetchLatestBlock();
    const fetchdata = await fetchTezosData(latestBlockHeight);
    const curentPriceData = await getCurrentPrices();
    var avg = fetchdata.reduce((a, b) => a + b, 0) / fetchdata.length;
    avg = avg * curentPriceData.data.tezos.usd;
    newdata.gasprice = avg.toFixed(5);
    return newdata;
  } catch (error) {
    console.log(error);
  }
};

const fetchLatestBlock = async () => {
  var config = {
    method: "get",
    url: "https://api.tzstats.com/explorer/block/head",
    headers: {},
  };
  var height;
  await axios(config)
    .then(function (response) {
      JSON.stringify(response.data);
      height = response.data.height;
    })
    .catch(function (error) {
      console.log(error);
    });

  return height;
};

const fetchTezosData = async (latestBlockHeight) => {
  const fetchdata = [];
  for (
    currentBlock = latestBlockHeight;
    currentBlock > latestBlockHeight - 50;
    currentBlock--
  ) {
    var config = {
      method: "get",
      url: `https://api.tzstats.com/explorer/block/${currentBlock}?meta=1&rights=1`,
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        JSON.stringify(response.data);
        fetchdata.push(response.data.fee);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return fetchdata;
};

module.exports = { getTezGasPrice };
