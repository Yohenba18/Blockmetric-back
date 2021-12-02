const speeds = [];

const getSolTransactionspeed = (connection, data) => {
  try {
    let timesRun = 0;
    let interval = setInterval(async () => {
      const count = await connection
        .getTransactionCount()
        .then((res) => JSON.stringify(res))
        .catch((error) => console.log(error));
      speeds.push(Number(count));

      timesRun += 1;
      if (timesRun === 15) {
        clearInterval(interval);
        data.transaction = findavg();
        console.log(data.transaction);
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

module.exports = { getSolTransactionspeed };
