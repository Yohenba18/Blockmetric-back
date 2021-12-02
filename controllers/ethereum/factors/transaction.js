//change to suit ethereum

const speeds = [];

const getEthTransactionspeed = (web3, data) => {
  try {
    let timesRun = 0;
    let interval = setInterval(async () => {
      const count = await web3.eth.getTransactionCount
      speeds.push(count);

      timesRun += 1;
      if(timesRun === 30) {
        clearInterval(interval);
        data.transaction = await findavg();
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
  return speeds.reduce((a, b) => a + b) / speeds.length;
};

module.exports = { getEthTransactionspeed };