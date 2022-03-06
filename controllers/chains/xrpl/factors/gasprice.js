const { default: axios } = require("axios");
const { getCurrentPrices } = require("../../../market/currentprices");

const getXRPGasPrice = async (newdata) => {
  try {
    const fetchdata = await fetchRippleData();

    var avgfees = await calculateAvgFees(fetchdata);

    const curentPriceData = await getCurrentPrices();
    avgfees = (avgfees * 0.0000924) * curentPriceData.data.ripple.usd
    newdata.gasprice = avgfees.toFixed(5);

    return newdata;
  } catch (error) {
    console.log(error);
  }
};

const fetchRippleData = async () => {
  var data = JSON.stringify({
    method: "tx_history",
    params: [
      {
        start: 0,
      },
    ],
  });

  var config = {
    method: "post",
    url: "http://s1.ripple.com:51234/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  var fetchdata;

  await axios(config)
    .then((response) => {
      JSON.stringify(response.data);
      fetchdata = response.data.result.txs;
    })
    .catch(function (error) {
      console.log(error);
    });

  return fetchdata;
};

const calculateAvgFees = (fetchdata) => {
  var totalfees = 0;
  for (i = 0; i < fetchdata.length; i++) {
    totalfees += Number(fetchdata[i].Fee);
  }
  const avg = totalfees / fetchdata.length;
  return avg;
};

module.exports = { getXRPGasPrice };
