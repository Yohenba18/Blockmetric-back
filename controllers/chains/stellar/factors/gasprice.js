var axios = require("axios");
const { getCurrentPrices } = require("../../../market/currentprices");

const getXLMGasPrice = async (newdata) => {
  try {
    const fetchdata = await fetchStellarData();
    const curentPriceData = await getCurrentPrices();
    var avg = fetchdata.reduce((a, b) => a + b, 0) / fetchdata.length;
    avg = avg * curentPriceData.data.stellar.usd;
    newdata.gasprice = avg.toFixed(8);
    return newdata;
  } catch (error) {
    console.log(error);
  }
};

const fetchStellarData = async () => {
  var config = {
    method: "get",
    url: "https://horizon.stellar.org/transactions?limit=200&order=desc",
    headers: {},
  };

  var fetchdata = [];

  await axios(config)
    .then(function (response) {
      JSON.stringify(response.data);
      response.data._embedded.records.map((i) => {
        fetchdata.push(i.fee_charged * 0.0000001);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  return fetchdata;
};

module.exports = { getXLMGasPrice };
