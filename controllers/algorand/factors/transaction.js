const speeds = [];

const getAlgoTransactionspeed = async (algosdk, data) => {
  try {
    let timesRun = 0;
    const ABIMethod = await algosdk.ABIMethod();
    // let interval = setInterval(async () => {
    
    const count = await ABIMethod.txnCount();
    // speeds.push(Number(count));

    console.log(count);
    // timesRun += 1;
    // if (timesRun === 10) {
    //   clearInterval(interval);
    // data.transaction = findavg();
    // console.log(data.transaction);
    return data;
    //  }
    //   }, 1000);
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

module.exports = { getAlgoTransactionspeed };
