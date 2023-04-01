const speeds = [];

const getAlgoTransactionspeed = async (algodABI, data) => {
  try {
    await findSpeed(algodABI).then(
      (transaction) => (data.transaction = transaction)
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const findSpeed = (algodABI) => {
  return new Promise((resolve, reject) => {
    let timesRun = 0;
    let interval = setInterval(async () => {
      const count = await algodABI.txncount();
      console.log(count);
      speeds.push(Number(count));
      timesRun += 1;
      if (timesRun === 20) {
        clearInterval(interval);
        transaction = findavg();
        resolve(transaction);
      }
    }, 1000);
  });
};

const findavg = () => {
  speeds.reverse();
  for (i = 0; i < speeds.length; i++) {
    speeds[i] = speeds[i + 1] - speeds[i];
  }
  speeds.pop();
  return Math.floor(speeds.reduce((a, b) => a + b) / speeds.length);
};

module.exports = { getAlgoTransactionspeed };
