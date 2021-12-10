// change it it's still tezos

const axios = require("axios");

const speeds = [];

const getXRPTransactionspeed = async (data) => {
  try {
    let timesRun = 0;
    let interval = setInterval(async () => {
    const count = await axios.get(
      "https://api.tzkt.io/v1/operations/transactions/count"
    );
    // speeds.push(Number(count));

    console.log(count.data);
    timesRun += 1;
    if (timesRun === 10) {
      clearInterval(interval);
 // data.transaction = findavg();
 // console.log(data.transaction);
        return data;
     }
      }, 1000);
  } catch (error) {
    console.log(error);
  }
  
};

const findavg = () => {
  for (i = 0; i < speeds.length; i++) {
    speeds[i] = speeds[i + 1] - speeds[i];
  }
  speeds.pop();
  return Math.floor(speeds.reduce((a, b) => a + b) / speeds.length);
};

module.exports = { getXRPTransactionspeed };
